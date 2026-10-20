#!/usr/bin/env python3
"""Assemble the Regulift deck: Simone's Canva-exported slides plus the generated strategy slides.

usage: assemble.py simone.pptx strategy.pptx out.pptx

- Keeps Simone's slides 1 to 4 (title, pain points, inside-out, loop), drops slide 5 (packages),
  inserts the five generated slides, keeps slides 6 and 7 (early access, thanks).
- Every generated slide gets Simone's nav bar (copied from her slide 3, "Service" active) and
  her page pill; the "Why us" slide gets "Team" active. Page pills are renumbered by position.
- Generated slides must keep all content below y = 2.0 in; nothing above that line is expected.
"""
import sys, os, re, copy, shutil, zipfile, tempfile
from lxml import etree

SIMONE, STRAT, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
EMU = 914400
NS = {"p": "http://schemas.openxmlformats.org/presentationml/2006/main",
      "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
      "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
      "rel": "http://schemas.openxmlformats.org/package/2006/relationships"}
RELNS = NS["rel"]; CTNS = "http://schemas.openxmlformats.org/package/2006/content-types"
R_ID = "{%s}id" % NS["r"]; R_EMBED = "{%s}embed" % NS["r"]; R_LINK = "{%s}link" % NS["r"]
A_T = "{%s}t" % NS["a"]; SRGB = "{%s}srgbClr" % NS["a"]
parse = etree.parse
def write(tree, p): tree.write(p, xml_declaration=True, encoding="UTF-8", standalone=True)

# plan: (generated slide number, insert after this Simone slide file, active nav section)
PLAN = [(1, "slide4.xml", "Service"), (2, None, "Service"), (3, None, "Service"), (4, None, "Service"), (5, None, "Team")]
DROP = ["slide5.xml"]

work = tempfile.mkdtemp(prefix="assemble-")
C = os.path.join(work, "simone"); zipfile.ZipFile(SIMONE).extractall(C)
S = os.path.join(work, "strategy"); zipfile.ZipFile(STRAT).extractall(S)

# ---- nav bar and page pill from Simone's slide 3 (everything above 2.0 in, and the pill below 10.4 in)
nav_src = parse(os.path.join(C, "ppt/slides/slide3.xml")); nav_sp = nav_src.find(".//p:cSld/p:spTree", NS)
nav_rels = parse(os.path.join(C, "ppt/slides/_rels/slide3.xml.rels")).getroot()
nav_rel_map = {r.get("Id"): (r.get("Type"), r.get("Target"), r.get("TargetMode")) for r in nav_rels}
nav_elems, pill = [], None
for ch in nav_sp:
    if etree.QName(ch).localname in ("nvGrpSpPr", "grpSpPr"): continue
    off = ch.find(".//a:off", NS)
    if off is None: continue
    y = int(off.get("y")) / EMU
    if y < 2.0: nav_elems.append(ch)
    elif y > 10.4 and "Page" in "".join(t.text or "" for t in ch.iter(A_T)): pill = ch
assert len(nav_elems) >= 7 and pill is not None, (len(nav_elems), pill)

def set_active(elems, section):
    """Nav pills: active = bg 171717 + text FAFAFA, inactive = bg CCCCCC + text 171717."""
    for el in elems:
        txt = "".join(t.text or "" for t in el.iter(A_T)).strip()
        if txt not in ("About", "Service", "Team", "Conclusion"): continue
        cols = list(el.iter(SRGB))
        if len(cols) < 2: continue
        if txt == section: cols[0].set("val", "171717"); cols[1].set("val", "FAFAFA")
        else: cols[0].set("val", "CCCCCC"); cols[1].set("val", "171717")

# ---- package bookkeeping
pres_path = os.path.join(C, "ppt/presentation.xml"); pres = parse(pres_path); proot = pres.getroot()
prels_path = os.path.join(C, "ppt/_rels/presentation.xml.rels"); prels = parse(prels_path); prroot = prels.getroot()
ct_path = os.path.join(C, "[Content_Types].xml"); ct = parse(ct_path); ctroot = ct.getroot()
sldIdLst = proot.find("p:sldIdLst", NS)
rid_to_file = {r.get("Id"): r.get("Target") for r in prroot if r.get("Type", "").endswith("/slide")}
def next_num(items): return max([int(re.sub(r"\D", "", x) or 0) for x in items] + [0]) + 1
slide_no = next_num([f for f in os.listdir(os.path.join(C, "ppt/slides")) if f.endswith(".xml")])
media_no = next_num(os.listdir(os.path.join(C, "ppt/media")))
rid_no = max(int(r.get("Id")[3:]) for r in prroot) + 1
sld_id = max(int(e.get("id")) for e in sldIdLst) + 1

# ---- drop slides
for f in DROP:
    for e in list(sldIdLst):
        if rid_to_file.get(e.get(R_ID)) == "slides/" + f:
            rid = e.get(R_ID); sldIdLst.remove(e)
            for r in list(prroot):
                if r.get("Id") == rid: prroot.remove(r)
            for o in list(ctroot):
                if o.get("PartName") == "/ppt/slides/" + f: ctroot.remove(o)
            os.remove(os.path.join(C, "ppt/slides", f)); os.remove(os.path.join(C, "ppt/slides/_rels", f + ".rels"))
            del rid_to_file[rid]
# other slides may link to the dropped slide (nav hyperlinks): re-point to slide1
for f in os.listdir(os.path.join(C, "ppt/slides/_rels")):
    p = os.path.join(C, "ppt/slides/_rels", f); t = parse(p); changed = False
    for r in t.getroot():
        if r.get("Type", "").endswith("/slide") and r.get("Target") in DROP: r.set("Target", "slide1.xml"); changed = True
    if changed: write(t, p)

# ---- insert generated slides
last = None
for src_idx, after, active in PLAN:
    st = parse(os.path.join(S, "ppt/slides/slide%d.xml" % src_idx)); sroot = st.getroot()
    srels = parse(os.path.join(S, "ppt/slides/_rels/slide%d.xml.rels" % src_idx)).getroot()
    sptree = sroot.find(".//p:cSld/p:spTree", NS)
    # drop the slide background pptxgenjs writes, so Simone's layout background shows
    bg = sroot.find(".//p:cSld/p:bg", NS)
    if bg is not None: bg.getparent().remove(bg)
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
    copies = [copy.deepcopy(el) for el in nav_elems]
    set_active(copies, active)
    for cp in copies + [copy.deepcopy(pill)]:
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
    i = 2
    for e in sptree.iter("{%s}cNvPr" % NS["p"]): e.set("id", str(i)); i += 1
    fname = "slide%d.xml" % slide_no; slide_no += 1
    write(st, os.path.join(C, "ppt/slides", fname))
    etree.ElementTree(new_rels).write(os.path.join(C, "ppt/slides/_rels", fname + ".rels"), xml_declaration=True, encoding="UTF-8", standalone=True)
    etree.SubElement(ctroot, "{%s}Override" % CTNS, PartName="/ppt/slides/" + fname, ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml")
    rid = "rId%d" % rid_no; rid_no += 1
    etree.SubElement(prroot, "{%s}Relationship" % RELNS, Id=rid, Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide", Target="slides/" + fname)
    new_sld = etree.Element("{%s}sldId" % NS["p"]); new_sld.set("id", str(sld_id)); new_sld.set(R_ID, rid); sld_id += 1
    anchor = after or last
    for k, e in enumerate(sldIdLst):
        if rid_to_file.get(e.get(R_ID)) == "slides/" + anchor: sldIdLst.insert(k + 1, new_sld); break
    else: raise SystemExit("anchor not found: " + str(anchor))
    rid_to_file[rid] = "slides/" + fname; last = fname

# notes slides from the generated deck are dropped (no notesMaster in Simone's deck); keep it simple.
write(pres, pres_path); write(prels, prels_path); write(ct, ct_path)

# ---- renumber page pills by position
for pos, e in enumerate(sldIdLst, start=1):
    f = os.path.join(C, "ppt", rid_to_file[e.get(R_ID)]); t = parse(f); changed = False
    for tx in t.iter(A_T):
        if tx.text and re.fullmatch(r"Page \d\d", tx.text): tx.text = "Page %02d" % pos; changed = True
    if changed: write(t, f)

# ---- zip
if os.path.exists(OUT): os.remove(OUT)
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    z.write(os.path.join(C, "[Content_Types].xml"), "[Content_Types].xml")
    for root, _, files in os.walk(C):
        for fn in files:
            full = os.path.join(root, fn); arc = os.path.relpath(full, C)
            if arc != "[Content_Types].xml": z.write(full, arc)
shutil.rmtree(work)
print("order:", [rid_to_file[e.get(R_ID)] for e in sldIdLst])
