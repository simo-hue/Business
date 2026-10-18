// Regulift deck, second version: the Pitch-style template adapted to the website's branding.
// Run: NODE_PATH=./node_modules PPTX_SKILL=<skill> node build2.js
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require(process.env.PPTX_SKILL + "/scripts/apply_theme.js");
const C = require("./content2.js");

const OUT = process.env.OUT || "/home/andi/Dokumente/Business/Simone Business/Business/pitch/regulift-compliance-lifted-by-ai.pptx";
const IMG = path.join(__dirname, "img"), BG = path.join(__dirname, "bg");

const T = { paper: "F6F4EE", white: "FCFBF8", ink: "1C2B2F", ink2: "55676B", muted: "8A9A9D", line: "E3E0D7", line2: "CFD6D3", mist: "E7EDEC", teal: "3E6670" };
const THEME = { name: "Regulift", headFontFace: "Geist", bodyFontFace: "Geist",
  colors: { dk1: T.ink, lt1: T.paper, dk2: T.ink2, lt2: T.mist, accent1: T.teal, accent2: T.muted, accent3: T.line, accent4: T.line2, accent5: T.white, accent6: "4F8A6A", hlink: T.teal, folHlink: T.ink2 } };
const LIGHT = "Geist", HEAD = "Geist Medium", BODY = "Geist";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.theme = { headFontFace: "Geist", bodyFontFace: "Geist" };
pres.author = "Simone Mattioli, Andreas Herzinger"; pres.company = "Regulift"; pres.title = "Regulift. Compliance, lifted by AI.";

const W = 13.333, H = 7.5, M = 0.7, CW = W - 2 * M;

pres.defineSlideMaster({ title: "BASE", background: { color: T.paper }, objects: [] });

// helpers
const txt = (s, text, o) => s.addText(text, Object.assign({ fontFace: BODY, fontSize: 14, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
const big = (s, text, o) => txt(s, text, Object.assign({ fontFace: LIGHT, fontSize: 54, color: T.ink, charSpacing: -2, lineSpacingMultiple: 0.98 }, o));
const h3 = (s, text, o) => txt(s, text, Object.assign({ fontFace: HEAD, fontSize: 24, color: T.ink, charSpacing: -0.5 }, o));
const meta = (s, text, o) => txt(s, text, Object.assign({ fontSize: 11, color: T.ink2 }, o));
const card = (s, x, y, w, h) => s.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: T.white, transparency: 18 }, line: { color: T.white, width: 0 }, rectRadius: 0.14 });
const source = (s, text) => meta(s, text, { x: M, y: 6.88, w: CW, h: 0.3, fontSize: 8.5, color: T.muted });
const icon = (s, name, x, y, size) => s.addImage({ path: path.join(BG, "ic-" + name + ".png"), x, y, w: size || 0.42, h: size || 0.42 });

function slide(bg, section) {
  const s = pres.addSlide({ masterName: "BASE", sectionTitle: section });
  if (bg) s.background = { path: path.join(BG, bg + ".png") };
  // footer wordmark, tiny, like the template's brand corner
  txt(s, "regulift", { x: M, y: 7.17, w: 1.4, h: 0.25, fontFace: HEAD, fontSize: 10, color: T.ink });
  return s;
}
function bullets(s, items, o) {
  s.addText(items.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < items.length - 1, paraSpaceAfter: 7 } })),
    Object.assign({ fontFace: BODY, fontSize: 13, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
}
// a row of n cards along the bottom, like the template
function cardRow(s, items, y, h, render) {
  const n = items.length, gap = 0.18, cw = (CW - gap * (n - 1)) / n;
  items.forEach((it, i) => { const x = M + i * (cw + gap); card(s, x, y, cw, h); render(it, x + 0.28, y + 0.3, cw - 0.56, h - 0.6, i); });
}

// 1 cover
pres.addSection({ title: "Opening" });
{ const s = slide("cover", "Opening");
  txt(s, "Regulift", { x: M, y: 0.72, w: 4, h: 0.35, fontFace: HEAD, fontSize: 14, color: T.ink });
  big(s, C.cover.title, { x: M, y: 1.25, w: 7.6, h: 3.2, fontSize: 84, charSpacing: -4 });
  txt(s, C.cover.sub, { x: M, y: 6.3, w: 7, h: 0.6, fontSize: 12.5, color: T.ink });
  s.addNotes(C.cover.notes);
}
// 2 problem
pres.addSection({ title: "Analysis" });
{ const a = C.problem; const s = slide("arc", "Analysis");
  big(s, a.title, { x: M, y: 0.7, w: 8.6, h: 3.3, fontSize: 46 });
  cardRow(s, a.cards, 4.35, 2.4, (c, x, y, w, h) => { h3(s, c.title, { x, y, w, h: 0.5, fontSize: 26 }); txt(s, c.body, { x, y: y + 0.65, w, h: h - 0.65, fontSize: 13, color: T.ink2 }); });
  source(s, a.source); s.addNotes(a.notes);
}
// 3 stats
{ const a = C.stats; const s = slide("corner", "Analysis");
  big(s, a.title, { x: M, y: 0.7, w: 7.4, h: 2.2 });
  cardRow(s, a.cards, 4.35, 2.4, (c, x, y, w, h) => { txt(s, c.value, { x, y, w, h: 0.9, fontFace: LIGHT, fontSize: 44, color: T.ink, charSpacing: -1.5 }); txt(s, c.label, { x, y: y + 0.95, w, h: h - 0.95, fontSize: 12.5, color: T.ink2 }); });
  source(s, a.source); s.addNotes(a.notes);
}
// 4 solution statement
pres.addSection({ title: "Solution" });
{ const a = C.solution; const s = slide("soft", "Solution");
  meta(s, a.kicker, { x: M, y: 1.95, w: 5, h: 0.3, fontSize: 13, color: T.ink });
  big(s, a.title, { x: M, y: 2.4, w: 8.4, h: 3.6, fontSize: 44 });
  s.addNotes(a.notes);
}
// 5 AI at the core
{ const a = C.ai; const s = slide("wave", "Solution");
  big(s, a.title, { x: M, y: 0.7, w: 7, h: 1.1 });
  txt(s, a.lead, { x: M, y: 1.85, w: 5.4, h: 1.4, fontSize: 13.5, color: T.ink });
  cardRow(s, a.cards, 3.95, 2.85, (c, x, y, w, h) => { h3(s, c.title, { x, y, w, h: 0.5, fontSize: 26 }); txt(s, c.body, { x, y: y + 0.62, w, h: h - 0.62, fontSize: 12, color: T.ink2 }); });
  source(s, a.source); s.addNotes(a.notes);
}
// 6 where the data goes (diagram)
{ const a = C.flow; const s = slide(null, "Solution");
  big(s, a.title, { x: M, y: 0.7, w: 11, h: 1.0, fontSize: 48 });
  txt(s, a.lead, { x: M, y: 1.85, w: 8.6, h: 0.9, fontSize: 13.5, color: T.ink });
  s.addImage({ path: path.join(IMG, "flow.png"), x: M, y: 3.1, w: CW, h: CW * 996 / 3840 });
  source(s, a.source); s.addNotes(a.notes);
}
// 7 market
{ const a = C.market; const s = slide(null, "Analysis");
  big(s, a.title, { x: M, y: 1.3, w: 5.8, h: 2.5, fontSize: 46 });
  bullets(s, a.points, { x: M, y: 4.05, w: 5.4, h: 2.6, fontSize: 12 });
  // nested circles
  const cx = 9.55, base = 5.9, bottom = 1.1 + base; // circles share the bottom point like the template
  [[base, T.mist, 0], [base * 0.68, T.line2, 35], [base * 0.42, T.teal, 72]].forEach(([d, col, tr]) => s.addShape(pres.ShapeType.ellipse, { x: cx - d / 2, y: bottom - d, w: d, h: d, fill: { color: col, transparency: tr }, line: { color: col, width: 0 } }));
  const lab = (v, l, yv) => { txt(s, v, { x: cx - 1.6, y: yv, w: 3.2, h: 0.7, fontFace: LIGHT, fontSize: 40, color: T.ink, align: "center", charSpacing: -1.5 }); meta(s, l, { x: cx - 1.6, y: yv + 0.72, w: 3.2, h: 0.3, align: "center", fontSize: 11.5 }); };
  lab(a.tam.value, a.tam.label, 1.35); lab(a.sam.value, a.sam.label, 3.05); lab(a.som.value, a.som.label, 4.75);
  source(s, a.source); s.addNotes(a.notes);
}
// 8 where Regulift fits
{ const a = C.fit; const s = slide("left", "Analysis");
  big(s, a.title, { x: M, y: 0.7, w: 8, h: 1.1 });
  txt(s, a.lead, { x: M, y: 1.85, w: 7.4, h: 0.9, fontSize: 13.5, color: T.ink });
  cardRow(s, a.cards, 3.6, 3.2, (c, x, y, w, h, i) => { icon(s, c.icon, x, y, 0.42); h3(s, c.title, { x, y: y + 0.85, w, h: 0.5, fontSize: 26 }); txt(s, c.body, { x, y: y + 1.5, w, h: h - 1.5, fontSize: 12.5, color: T.ink2 }); });
  source(s, a.source); s.addNotes(a.notes);
}
// 9 business model
pres.addSection({ title: "Commercial" });
{ const a = C.model; const s = slide("corner", "Commercial");
  big(s, a.title, { x: M, y: 0.7, w: 8, h: 1.1 });
  txt(s, a.lead, { x: M, y: 1.85, w: 7.6, h: 0.9, fontSize: 13.5, color: T.ink });
  cardRow(s, a.tiers, 3.1, 3.7, (c, x, y, w, h) => {
    h3(s, c.title, { x, y, w, h: 0.5, fontSize: 26 });
    txt(s, c.price, { x, y: y + 0.6, w, h: 0.4, fontFace: HEAD, fontSize: 15, color: T.ink });
    txt(s, c.who, { x, y: y + 1.15, w, h: 0.35, fontSize: 12.5, color: T.ink2 });
    bullets(s, c.items, { x, y: y + 1.55, w, h: h - 1.55, fontSize: 12.5 });
  });
  source(s, a.source); s.addNotes(a.notes);
}
// 10 founders
pres.addSection({ title: "Team" });
{ const a = C.team; const s = slide(null, "Team");
  s.addImage({ path: path.join(IMG, "founders-pair.png"), x: M, y: 0.75, w: 5.3, h: 5.3 * 875 / 1440 });
  meta(s, a.caption, { x: M, y: 0.75 + 5.3 * 875 / 1440 + 0.15, w: 5.3, h: 0.3 });
  big(s, a.title, { x: 6.6, y: 1.4, w: 6.2, h: 1.8, fontSize: 48 });
  bullets(s, a.points, { x: 6.6, y: 3.35, w: 6.1, h: 3.3, fontSize: 13 });
  s.addNotes(a.notes);
}
// 11 the ask + timeline
pres.addSection({ title: "Conclusion" });
{ const a = C.ask; const s = slide(null, "Conclusion");
  big(s, a.title, { x: M, y: 2.6, w: 5.2, h: 1.1 });
  txt(s, a.body, { x: M, y: 3.8, w: 4.9, h: 2.2, fontSize: 13.5, color: T.ink });
  const lx = 9.45, top = 0.75, step = 1.55;
  s.addShape(pres.ShapeType.line, { x: lx, y: top, w: 0, h: step * (a.steps.length - 1) + 0.5, line: { color: T.line2, width: 1 } });
  a.steps.forEach((st, i) => { const y = top + i * step;
    s.addShape(pres.ShapeType.ellipse, { x: lx - 0.1, y: y - 0.1, w: 0.2, h: 0.2, fill: { color: T.teal }, line: { color: T.paper, width: 1.5 } });
    txt(s, st.when, { x: lx - 2.1, y: y - 0.14, w: 1.8, h: 0.3, fontSize: 13, color: T.ink, align: "right" });
    txt(s, st.title, { x: lx + 0.4, y: y - 0.16, w: 3.3, h: 0.35, fontFace: HEAD, fontSize: 15, color: T.ink });
    txt(s, st.body, { x: lx + 0.4, y: y + 0.22, w: 3.3, h: 1.1, fontSize: 11.5, color: T.ink2 });
  });
  s.addNotes(a.notes);
}
// 12 closing
{ const a = C.close; const s = slide("cover", "Conclusion");
  big(s, a.title, { x: M, y: 0.75, w: 7, h: 2.6, fontSize: 72, charSpacing: -3 });
  txt(s, "Regulift", { x: 6.8, y: 5.7, w: 3, h: 0.35, fontFace: HEAD, fontSize: 14, color: T.ink });
  txt(s, a.line1, { x: 6.8, y: 6.2, w: 6, h: 0.35, fontSize: 13, color: T.ink });
  txt(s, a.line2, { x: 6.8, y: 6.55, w: 6, h: 0.35, fontSize: 13, color: T.ink2 });
  s.addNotes(a.notes);
}

(async () => { await pres.writeFile({ fileName: OUT }); await applyTheme(OUT, THEME); console.log("written", OUT); })().catch(e => { console.error(e); process.exit(1); });
