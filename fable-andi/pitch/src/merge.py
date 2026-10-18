#!/usr/bin/env python3
"""Splice the Regulift strategy slides (pptxgenjs, 20 x 11.25 in) into Simone's central deck.
Shifts the imported slides down to clear the nav bar, drops their own kicker row and footer,
adds the deck's nav bar and page pill, renumbers every page pill, registers the parts."""
import sys, os, shutil, copy, re, zipfile
from lxml import etree

C = sys.argv[1]            # unpacked central deck dir
OUT = sys.argv[2]          # output pptx
JOBS = [                   # (source pptx, source slide no, insert after this central slide file)
    (sys.argv[3], 1, "slide5.xml"),   # product slide after "from connection to action"
    (sys.argv[4], 1, "slide9.xml"),   # gate table after "market opportunity"
    (sys.argv[4], 2, None),           # entry path right after the table
]
EMU = 914400
OY = int(0.5 * EMU)        # shift imported content down
NS = {"p": "http://schemas.openxmlformats.org/presentationml/2006/main",
      "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
      "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
      "rel": "http://schemas.openxmlformats.org/package/2006/relationships"}
RELNS = NS["rel"]
R_ID = "{%s}id" % NS["r"]; R_EMBED = "{%s}embed" % NS["r"]; R_LINK = "{%s}link" % NS["r"]

def parse(p): return etree.parse(p)
def write(tree, p): tree.write(p, xml_declaration=True, encoding="UTF-8", standalone=True)

# --- nav bar and page pill from central slide 9 ---
nav_tree = parse(os.path.join(C, "ppt/slides/slide9.xml"))
nav_sp = nav_tree.find(".//p:cSld/p:spTree", NS)
nav_rels = parse(os.path.join(C, "ppt/slides/_rels/slide9.xml.rels")).getroot()
nav_rel_map = {r.get("Id"): (r.get("Type"), r.get("Target"), r.get("TargetMode")) for r in nav_rels}
nav_elems, pill = [], None
for ch in nav_sp:
    tag = etree.QName(ch).localname
    if tag in ("nvGrpSpPr", "grpSpPr"): continue
    name = ch.find(".//p:cNvPr", NS).get("name", "")
    txt = "".join(t.text or "" for t in ch.iter("{%s}t" % NS["a"]))
    if name in ("Group 15", "Group 33") or name.startswith("Section navigation"): nav_elems.append(ch)
    if name.startswith("Compact margin page number"): pill = ch
assert len(nav_elems) == 6 and pill is not None

pres_path = os.path.join(C, "ppt/presentation.xml"); pres = parse(pres_path); proot = pres.getroot()
prels_path = os.path.join(C, "ppt/_rels/presentation.xml.rels"); prels = parse(prels_path); prroot = prels.getroot()
ct_path = os.path.join(C, "[Content_Types].xml"); ct = parse(ct_path); ctroot = ct.getroot()
CTNS = "http://schemas.openxmlformats.org/package/2006/content-types"
sldIdLst = proot.find("p:sldIdLst", NS)
rid_to_file = {r.get("Id"): r.get("Target") for r in prroot if r.get("Type", "").endswith("/slide")}
def next_num(prefix, items):
    nums = [int(re.sub(r"\D", "", x) or 0) for x in items]; return max(nums) + 1
slide_no = next_num("slide", [f for f in os.listdir(os.path.join(C, "ppt/slides")) if f.endswith(".xml")])
media_no = next_num("image", [f for f in os.listdir(os.path.join(C, "ppt/media"))])
rid_no = max(int(r.get("Id")[3:]) for r in prroot) + 1
sld_id = max(int(e.get("id")) for e in sldIdLst) + 1

last_inserted = None
for src_pptx, src_idx, after in JOBS:
    tmp = os.path.join(os.path.dirname(OUT), "src_%d" % src_idx + os.path.basename(src_pptx))
    if os.path.isdir(tmp): shutil.rmtree(tmp)
    zipfile.ZipFile(src_pptx).extractall(tmp)
    st = parse(os.path.join(tmp, "ppt/slides/slide%d.xml" % src_idx)); sroot = st.getroot()
    srels = parse(os.path.join(tmp, "ppt/slides/_rels/slide%d.xml.rels" % src_idx)).getroot()
    sptree = sroot.find(".//p:cSld/p:spTree", NS)
    # drop kicker row and rule (y between 0.8 and 1.45 in, short), shift the rest down
    for ch in list(sptree):
        tag = etree.QName(ch).localname
        if tag in ("nvGrpSpPr", "grpSpPr"): continue
        off = ch.find(".//a:off", NS); ext = ch.find(".//a:ext", NS)
        if off is None: continue
        y = int(off.get("y")); h = int(ext.get("cy")) if ext is not None else 0
        if 0.8 * EMU <= y <= 1.45 * EMU and h < 0.5 * EMU:
            sptree.remove(ch); continue
        off.set("y", str(y + OY))
    # rels: keep hyperlinks, re-point layout, drop notes, copy media
    new_rels = etree.Element("{%s}Relationships" % RELNS, nsmap={None: RELNS})
    for r in srels:
        typ, tgt = r.get("Type"), r.get("Target")
        if typ.endswith("/notesSlide"): continue
        if typ.endswith("/slideLayout"):
            etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=r.get("Id"), Type=typ, Target="../slideLayouts/slideLayout7.xml"); continue
        if typ.endswith("/image"):
            ext = os.path.splitext(tgt)[1]; newname = "image%d%s" % (media_no, ext); media_no += 1
            shutil.copy(os.path.join(tmp, "ppt/media", os.path.basename(tgt)), os.path.join(C, "ppt/media", newname))
            etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=r.get("Id"), Type=typ, Target="../media/" + newname); continue
        e = etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=r.get("Id"), Type=typ, Target=tgt)
        if r.get("TargetMode"): e.set("TargetMode", r.get("TargetMode"))
    # nav bar and pill, with fresh rIds
    used = {r.get("Id") for r in new_rels}; n = 1
    def fresh():
        global n
        while "rId%d" % n in used: n += 1
        used.add("rId%d" % n); return "rId%d" % n
    remap = {}
    for el in nav_elems + [pill]:
        cp = copy.deepcopy(el)
        for e in cp.iter():
            for attr in (R_ID, R_EMBED, R_LINK):
                old = e.get(attr)
                if old and old in nav_rel_map:
                    if old not in remap:
                        typ, tgt, mode = nav_rel_map[old]; nid = fresh(); remap[old] = nid
                        x = etree.SubElement(new_rels, "{%s}Relationship" % RELNS, Id=nid, Type=typ, Target=tgt)
                        if mode: x.set("TargetMode", mode)
                    e.set(attr, remap[old])
        sptree.append(cp)
    # unique shape ids
    i = 2
    for e in sptree.iter("{%s}cNvPr" % NS["p"]):
        e.set("id", str(i)); i += 1
    fname = "slide%d.xml" % slide_no; slide_no += 1
    write(st, os.path.join(C, "ppt/slides", fname))
    etree.ElementTree(new_rels).write(os.path.join(C, "ppt/slides/_rels", fname + ".rels"), xml_declaration=True, encoding="UTF-8", standalone=True)
    etree.SubElement(ctroot, "{%s}Override" % CTNS, PartName="/ppt/slides/" + fname, ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml")
    rid = "rId%d" % rid_no; rid_no += 1
    etree.SubElement(prroot, "{%s}Relationship" % RELNS, Id=rid, Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide", Target="slides/" + fname)
    new_sld = etree.Element("{%s}sldId" % NS["p"]); new_sld.set("id", str(sld_id)); new_sld.set(R_ID, rid); sld_id += 1
    anchor_file = after or last_inserted
    for k, e in enumerate(sldIdLst):
        if rid_to_file.get(e.get(R_ID)) == "slides/" + anchor_file:
            sldIdLst.insert(k + 1, new_sld); break
    else: raise SystemExit("anchor not found: " + str(anchor_file))
    rid_to_file[rid] = "slides/" + fname; last_inserted = fname

write(pres, pres_path); write(prels, prels_path); write(ct, ct_path)
# renumber page pills in final order
for pos, e in enumerate(sldIdLst, start=1):
    f = os.path.join(C, "ppt", rid_to_file[e.get(R_ID)])
    t = parse(f); changed = False
    for tx in t.iter("{%s}t" % NS["a"]):
        if tx.text and re.fullmatch(r"Page \d\d", tx.text): tx.text = "Page %02d" % pos; changed = True
    if changed: write(t, f)
# zip
if os.path.exists(OUT): os.remove(OUT)
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    z.write(os.path.join(C, "[Content_Types].xml"), "[Content_Types].xml")
    for root, _, files in os.walk(C):
        for fn in files:
            full = os.path.join(root, fn); arc = os.path.relpath(full, C)
            if arc == "[Content_Types].xml": continue
            z.write(full, arc)
print("order:", [rid_to_file[e.get(R_ID)] for e in sldIdLst])
