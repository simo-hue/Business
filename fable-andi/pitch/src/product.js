// Product slide, two shapes: a horizontal loop with a return arrow, and a ring. Same six steps, the brain in the middle.
// Canvas 20 x 11.25 in, website tokens, structure of Simone's deck (kicker, big title with a period, rounded cards, one dark card).
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require(process.env.PPTX_SKILL + "/scripts/apply_theme.js");

const OUT = process.env.OUT || "product-slides.pptx";
const IMG = path.join(__dirname, "img");
const T = { paper: "F6F4EE", white: "FCFBF8", ink: "1C2B2F", ink2: "55676B", muted: "8A9A9D", line: "E3E0D7", line2: "CFD6D3", mist: "E7EDEC", teal: "3E6670" };
const THEME = { name: "Regulift", headFontFace: "Geist", bodyFontFace: "Geist",
  colors: { dk1: T.ink, lt1: T.paper, dk2: T.ink2, lt2: T.mist, accent1: T.teal, accent2: T.muted, accent3: T.line, accent4: T.line2, accent5: T.white, accent6: T.teal, hlink: T.teal, folHlink: T.ink2 } };
const HEAD = "Geist Medium", BODY = "Geist";

const pres = new pptxgen();
pres.defineLayout({ name: "SIMONE", width: 20, height: 11.25 });
pres.layout = "SIMONE";
pres.theme = { headFontFace: "Geist", bodyFontFace: "Geist" };
pres.author = "Simone Mattioli, Andreas Herzinger"; pres.company = "Regulift"; pres.title = "Regulift. The product.";

const W = 20, M = 1.25, CW = W - 2 * M;
pres.defineSlideMaster({ title: "CONTENT", background: { color: T.paper }, objects: [
  { text: { text: "regulift", options: { x: M, y: 10.78, w: 3, h: 0.35, fontFace: HEAD, fontSize: 15, color: T.ink, margin: 0, isTextBox: true } } },
  { text: { text: "Regulation, lifted.", options: { x: M + 1.45, y: 10.78, w: 4, h: 0.35, fontFace: BODY, fontSize: 12, color: T.muted, margin: 0, isTextBox: true } } },
] });

const tb = (s, text, o) => s.addText(text, Object.assign({ fontFace: BODY, fontSize: 16, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
const head = (s, text, o) => s.addText(text, Object.assign({ fontFace: HEAD, fontSize: 22, color: T.ink, margin: 0, isTextBox: true, valign: "top" }, o));
const rrect = (s, x, y, w, h, fill, line, r) => s.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: fill }, line: line ? { color: line, width: 0.75 } : { color: fill, width: 0 }, rectRadius: r || 0.12 });
const rule = (s, x, y, w, c) => s.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: c || T.line, width: 0.75 } });
// arrow from (x0,y0) to (x1,y1), straight
function arrow(s, x0, y0, x1, y1, color) {
  const o = { x: Math.min(x0, x1), y: Math.min(y0, y1), w: Math.abs(x1 - x0), h: Math.abs(y1 - y0), line: { color: color || T.ink2, width: 1.25, endArrowType: "triangle" } };
  if (x1 < x0) o.flipH = true;
  if (y1 < y0) o.flipV = true;
  s.addShape(pres.ShapeType.line, o);
}
const seg = (s, x0, y0, x1, y1, color) => s.addShape(pres.ShapeType.line, { x: Math.min(x0, x1), y: Math.min(y0, y1), w: Math.abs(x1 - x0), h: Math.abs(y1 - y0), line: { color: color || T.ink2, width: 1.25 } });

function frame(kicker, kicker2, title, notes) {
  const s = pres.addSlide({ masterName: "CONTENT" });
  tb(s, kicker, { x: M, y: 0.85, w: 9, h: 0.4, fontSize: 15, color: T.ink2 });
  tb(s, kicker2, { x: W - M - 9, y: 0.85, w: 9, h: 0.4, fontSize: 15, color: T.ink2, align: "right" });
  rule(s, M, 1.35, CW, T.line);
  head(s, title, { x: M, y: 1.6, w: CW, h: 1.05, fontSize: 54, charSpacing: -1.5 });
  if (notes) s.addNotes(notes);
  return s;
}

const STEPS = [
  { n: "01", t: "Connect", b: "Read-only connectors to repositories, cloud, HR and CRM. Nothing changed, nothing copied out." },
  { n: "02", t: "Approve", b: "The collector writes a context report. One named person approves it. Only then does it leave." },
  { n: "03", t: "Evidence", b: "Inventory, data flows, evidence graph. Re-read as systems change." },
  { n: "04", t: "Advise", b: "What applies, where you stand, the gaps ranked. Labelled prepared by Regulift or signed by the firm, by country." },
  { n: "05", t: "Fix", b: "Technical steps and filled templates. Upload, re-read, repeat." },
  { n: "06", t: "Confirm", b: "The partner lawyer reviews in the same workspace and signs in writing." },
];
const KICK = "The product. Inside-out, with an adviser.";
const KICK2 = "One evidence graph, one adviser, partner lawyers in the workspace";
const TITLE = "Reads. Advises. Loops until a lawyer signs.";
const NOTES = "The product in one loop. Steps one and two are the inside-out part: read-only connectors and a context report that one named person approves before anything leaves the company. The brain in the middle holds the evidence graph and the adviser: it knows what the company runs and answers what applies and where the company stands. Step five is the loop: fix, upload, re-read, until the gaps close. Step six is the partner lawyer, who reviews in the same workspace and signs where the law reserves the verdict. The next slide asks where the adviser may speak for itself.";
const STRIP = ["Nothing leaves before one person approves", "Every answer cites its article and its evidence", "A lawyer signs where the law reserves the verdict"];

function card(s, st, x, y, w, h, dark) {
  rrect(s, x, y, w, h, dark ? T.ink : T.white, dark ? T.ink : T.line, 0.12);
  tb(s, st.n, { x: x + 0.3, y: y + 0.25, w: 0.8, h: 0.35, fontSize: 14, color: dark ? "8FA3A8" : T.muted });
  head(s, st.t, { x: x + 0.3, y: y + 0.55, w: w - 0.6, h: 0.45, fontSize: 22, color: dark ? T.paper : T.ink });
  tb(s, st.b, { x: x + 0.3, y: y + 1.05, w: w - 0.6, h: h - 1.2, fontSize: 13, color: dark ? "B7C4C7" : T.ink2 });
}
function strip(s, y) {
  rrect(s, M, y, CW, 0.75, T.mist, T.mist, 0.12);
  const w = CW / 3;
  STRIP.forEach((t, i) => tb(s, t, { x: M + 0.4 + i * w, y: y + 0.22, w: w - 0.6, h: 0.4, fontSize: 14, color: T.ink }));
}

// ---------- two entities, minimal ----------
const MIN = [
  { n: "01", t: "Connect", b: "Read-only. Repositories, cloud, HR, CRM." },
  { n: "02", t: "Approve", b: "One named person releases the context report." },
  { n: "03", t: "Evidence", b: "Inventory, data flows, evidence graph." },
  { n: "04", t: "Advise", b: "What applies, where you stand, gaps ranked." },
  { n: "05", t: "Fix", b: "Steps and templates. Upload, re-read, repeat." },
  { n: "06", t: "Confirm", b: "The partner lawyer signs in writing." },
];
function step(s, st, x, y, w, dark) {
  rule(s, x, y, w, dark ? "4A5E64" : T.ink);
  tb(s, st.n, { x, y: y + 0.16, w: 0.8, h: 0.3, fontSize: 13, color: dark ? "8FA3A8" : T.muted });
  head(s, st.t, { x, y: y + 0.44, w, h: 0.45, fontSize: 24, color: dark ? T.paper : T.ink });
  tb(s, st.b, { x, y: y + 0.95, w, h: 0.8, fontSize: 13.5, color: dark ? "B7C4C7" : T.ink2 });
}
{
  const s = frame(KICK, KICK2, TITLE, NOTES);
  const by = 3.15, bh = 5.3, lw = 6.9, gap = 1.3, rx = M + lw + gap, rw = CW - lw - gap, pad = 0.5;
  rrect(s, M, by, lw, bh, T.mist, T.mist, 0.18);
  rrect(s, rx, by, rw, bh, T.ink, T.ink, 0.18);
  tb(s, "Inside the company", { x: M + pad, y: by + 0.35, w: lw - 2 * pad, h: 0.35, fontSize: 14, color: T.ink2 });
  tb(s, "Inside Regulift", { x: rx + pad, y: by + 0.35, w: rw - 2 * pad, h: 0.35, fontSize: 14, color: "8FA3A8" });
  // company: 01 and 02 on top, 05 below 02
  const colw = (lw - 2 * pad - 0.5) / 2, c1 = M + pad, c2 = c1 + colw + 0.5, y1 = by + 1.0, y2 = by + 3.25;
  step(s, MIN[0], c1, y1, colw);
  step(s, MIN[1], c2, y1, colw);
  step(s, MIN[4], c2, y2, colw);
  // Regulift: brain on the left half (03, 04), confirm on the right
  const bw = 5.6, bx = rx + pad, x6 = bx + bw + 0.9, w6 = rw - pad - (x6 - rx);
  s.addImage({ path: path.join(IMG, "brain-paper.png"), x: bx, y: by + 0.95, w: 0.9, h: 0.9 });
  tb(s, "The brain", { x: bx + 1.1, y: by + 1.22, w: 3, h: 0.4, fontSize: 15, color: "8FA3A8" });
  const sw = (bw - 0.5) / 2;
  step(s, MIN[2], bx, by + 2.3, sw, true);
  step(s, MIN[3], bx + sw + 0.5, by + 2.3, sw, true);
  s.addShape(pres.ShapeType.line, { x: x6 - 0.45, y: by + 1.0, w: 0, h: bh - 1.5, line: { color: "4A5E64", width: 0.75 } });
  step(s, MIN[5], x6, by + 2.3, w6, true);
  // arrows across the gap, labels on paper
  const ay = y1 + 0.6, ly = y2 + 0.6, gx = M + lw, gw = gap;
  arrow(s, gx + 0.15, ay, gx + gw - 0.15, ay);
  tb(s, "report", { x: gx, y: ay - 0.42, w: gw, h: 0.3, fontSize: 11.5, color: T.ink2, align: "center" });
  s.addShape(pres.ShapeType.line, { x: gx + 0.15, y: ly, w: gw - 0.3, h: 0, line: { color: T.ink2, width: 1.25, beginArrowType: "triangle", endArrowType: "triangle" } });
  tb(s, "gaps", { x: gx, y: ly - 0.42, w: gw, h: 0.3, fontSize: 11.5, color: T.ink2, align: "center" });
  tb(s, "evidence", { x: gx, y: ly + 0.1, w: gw, h: 0.3, fontSize: 11.5, color: T.ink2, align: "center" });
  // principles as one quiet row
  const py = by + bh + 0.45, pw = CW / 3;
  STRIP.forEach((t, i) => tb(s, t, { x: M + i * pw, y: py, w: pw - 0.4, h: 0.4, fontSize: 13, color: T.ink2 }));
}

(async () => { await pres.writeFile({ fileName: OUT }); await applyTheme(OUT, THEME); console.log("written", OUT); })().catch(e => { console.error(e); process.exit(1); });
