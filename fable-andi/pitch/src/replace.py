#!/usr/bin/env python3
"""Replace one slide of the central deck with a rebuilt pptxgenjs slide, keeping the deck's
nav bar and page pill. Same transformation as merge.py (drop kicker row, shift down 0.5 in),
but writes over an existing slide file instead of inserting a new one.
usage: replace.py central.pptx out.pptx source.pptx <source slide no> <central slide file> <page no>"""
import sys, os, shutil, copy, re, zipfile, tempfile
from lxml import etree

CENTRAL, OUT, SRC, SRC_NO, TARGET, PAGE = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), sys.argv[5], int(sys.argv[6])
EMU = 914400; OY = int(0.5 * EMU)
NS = {"p": "http://schemas.openxmlformats.org/presentationml/2006/main",
      "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
      "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
      "rel": "http://schemas.openxmlformats.org/package/2006/relationships"}
RELNS = NS["rel"]
R_ID = "{%s}id" % NS["r"]; R_EMBED = "{%s}embed" % NS["r"]; R_LINK = "{%s}link" % NS["r"]
parse = etree.parse
def write(tree, p): tree.write(p, xml_declaration=True, encoding="UTF-8", standalone=True)

work = tempfile.mkdtemp(prefix="replace-", dir=os.path.dirname(os.path.abspath(OUT)))
C = os.path.join(work, "central"); zipfile.ZipFile(CENTRAL).extractall(C)
S = os.path.join(work, "src"); zipfile.ZipFile(SRC).extractall(S)

# nav bar and pill from the slide being replaced (it already carries them)
old_tree = parse(os.path.join(C, "ppt/slides", TARGET)); old_sp = old_tree.find(".//p:cSld/p:spTree", NS)
old_rels = parse(os.path.join(C, "ppt/slides/_rels", TARGET + ".rels")).getroot()
old_rel_map = {r.get("Id"): (r.get("Type"), r.get("Target"), r.get("TargetMode")) for r in old_rels}
nav_elems, pill = [], None
for ch in old_sp:
    if etree.QName(ch).localname in ("nvGrpSpPr", "grpSpPr"): continue
    name = ch.find(".//p:cNvPr", NS).get("name", "")
    if name in ("Group 15", "Group 33") or name.startswith("Section navigation"): nav_elems.append(ch)
    if name.startswith("Compact margin page number"): pill = ch
assert len(nav_elems) == 6 and pill is not None, (len(nav_elems), pill)

media_no = max(int(re.sub(r"\D", "", f) or 0) for f in os.listdir(os.path.join(C, "ppt/media"))) + 1
st = parse(os.path.join(S, "ppt/slides/slide%d.xml" % SRC_NO)); sroot = st.getroot()
srels = parse(os.path.join(S, "ppt/slides/_rels/slide%d.xml.rels" % SRC_NO)).getroot()
sptree = sroot.find(".//p:cSld/p:spTree", NS)
for ch in list(sptree):
    if etree.QName(ch).localname in ("nvGrpSpPr", "grpSpPr"): continue
    off = ch.find(".//a:off", NS); ext = ch.find(".//a:ext", NS)
    if off is None: continue
    y = int(off.get("y")); h = int(ext.get("cy")) if ext is not None else 0
    if 0.8 * EMU <= y <= 1.45 * EMU and h < 0.5 * EMU: sptree.remove(ch); continue
    off.set("y", str(y + OY))
new_rels = etree.Element("{%s}Relationships" % RELNS, nsmap={None: RELNS})
for r in srels:
    typ, tgt = r.get("Type"), r.get("Target")
    if typ.endswith("/notesSlide"): continue
    if typ.endswith("/slideLayout"):
        etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=r.get("Id"), Type=typ, Target="../slideLayouts/slideLayout7.xml"); continue
    if typ.endswith("/image"):
        ext = os.path.splitext(tgt)[1]; newname = "image%d%s" % (media_no, ext); media_no += 1
        shutil.copy(os.path.join(S, "ppt/media", os.path.basename(tgt)), os.path.join(C, "ppt/media", newname))
        etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=r.get("Id"), Type=typ, Target="../media/" + newname); continue
    e = etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=r.get("Id"), Type=typ, Target=tgt)
    if r.get("TargetMode"): e.set("TargetMode", r.get("TargetMode"))
used = {r.get("Id") for r in new_rels}; n = [1]
def fresh():
    while "rId%d" % n[0] in used: n[0] += 1
    used.add("rId%d" % n[0]); return "rId%d" % n[0]
remap = {}
for el in nav_elems + [pill]:
    cp = copy.deepcopy(el)
    for e in cp.iter():
        for attr in (R_ID, R_EMBED, R_LINK):
            old = e.get(attr)
            if old and old in old_rel_map:
                if old not in remap:
                    typ, tgt, mode = old_rel_map[old]; nid = fresh(); remap[old] = nid
                    x = etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=nid, Type=typ, Target=tgt)
                    if mode: x.set("TargetMode", mode)
                e.set(attr, remap[old])
    sptree.append(cp)
i = 2
for e in sptree.iter("{%s}cNvPr" % NS["p"]): e.set("id", str(i)); i += 1
for tx in sroot.iter("{%s}t" % NS["a"]):
    if tx.text and re.fullmatch(r"Page \d\d", tx.text): tx.text = "Page %02d" % PAGE
write(st, os.path.join(C, "ppt/slides", TARGET))
etree.ElementTree(new_rels).write(os.path.join(C, "ppt/slides/_rels", TARGET + ".rels"), xml_declaration=True, encoding="UTF-8", standalone=True)
if os.path.exists(OUT): os.remove(OUT)
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    z.write(os.path.join(C, "[Content_Types].xml"), "[Content_Types].xml")
    for root, _, files in os.walk(C):
        for fn in files:
            full = os.path.join(root, fn); arc = os.path.relpath(full, C)
            if arc != "[Content_Types].xml": z.write(full, arc)
shutil.rmtree(work)
print("replaced", TARGET, "in", OUT)
