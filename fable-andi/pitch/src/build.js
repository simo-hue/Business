// Regulift application deck, short form (cover plus ten content slides), in the website's own tokens.
// Run: NODE_PATH=... PPTX_SKILL=... OUT=... node build.js
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require(process.env.PPTX_SKILL + "/scripts/apply_theme.js");
const C = require("./content.js");

const OUT = process.env.OUT || "/home/andi/Dokumente/Business/Simone Business/Business/pitch/regulift-eit-lab-pitch.pptx";
const IMG = path.join(__dirname, "img");

// ---- tokens straight from styles.css ----
const T = {
  paper: "F6F4EE", white: "FCFBF8", ink: "1C2B2F", ink2: "55676B", muted: "8A9A9D",
  line: "E3E0D7", line2: "CFD6D3", mist: "E7EDEC", teal: "3E6670", ok: "4F8A6A",
};
const THEME = {
  name: "Regulift",
  headFontFace: "Geist",
  bodyFontFace: "Geist",
  colors: { dk1: T.ink, lt1: T.paper, dk2: T.ink2, lt2: T.mist, accent1: T.teal, accent2: T.muted, accent3: T.line, accent4: T.line2, accent5: T.white, accent6: T.ok, hlink: T.teal, folHlink: T.ink2 },
};
const HEAD = "Geist Medium";
const BODY = "Geist";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = "Simone Mattioli, Andreas Herzinger";
pres.company = "Regulift";
pres.title = "Regulift. Regulation, lifted.";

const W = 13.333, H = 7.5, M = 0.6, CW = W - 2 * M; // content width 12.133

// ---- layouts ----
const footer = [
  { text: { text: "regulift", options: { x: M, y: 6.98, w: 2, h: 0.3, fontFace: HEAD, fontSize: 11, color: T.ink, margin: 0, isTextBox: true } } },
  { text: { text: "Regulation, lifted.", options: { x: M + 1.0, y: 6.98, w: 3, h: 0.3, fontFace: BODY, fontSize: 9, color: T.muted, margin: 0, isTextBox: true } } },
];
pres.defineSlideMaster({ title: "COVER", background: { color: T.paper }, objects: [] });
pres.defineSlideMaster({
  title: "CONTENT", background: { color: T.paper },
  objects: [
    { line: { x: M, y: 0.5, w: CW, h: 0, line: { color: T.line, width: 0.75 } } },
    ...footer,
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 0.6, w: 7, h: 0.32, fontFace: BODY, fontSize: 10, color: T.ink2, margin: 0, valign: "top" }, text: "" } },
    { placeholder: { options: { name: "kicker2", type: "body", x: W - M - 5.5, y: 0.6, w: 5.5, h: 0.32, fontFace: BODY, fontSize: 10, color: T.ink2, margin: 0, align: "right", valign: "top" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 1.0, w: 11.5, h: 0.9, fontFace: HEAD, fontSize: 30, color: T.ink, margin: 0, valign: "top", align: "left", charSpacing: -0.5 }, text: "" } },
  ],
  slideNumber: { x: W - M - 0.8, y: 6.98, w: 0.8, h: 0.3, fontFace: BODY, fontSize: 9, color: T.muted, align: "right" },
});

// ---- helpers ----
const tb = (s, text, o) => s.addText(text, Object.assign({ fontFace: BODY, fontSize: 14, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
const head = (s, text, o) => s.addText(text, Object.assign({ fontFace: HEAD, fontSize: 18, color: T.ink, margin: 0, isTextBox: true, valign: "top" }, o));
const meta = (s, text, o) => s.addText(text, Object.assign({ fontFace: BODY, fontSize: 10, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
const rule = (s, x, y, w, color) => s.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: color || T.line, width: 0.75 } });
const vrule = (s, x, y, h, color) => s.addShape(pres.ShapeType.line, { x, y, w: 0, h, line: { color: color || T.line, width: 0.75 } });
const card = (s, x, y, w, h, fill, lineColor) => s.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: fill || T.white }, line: { color: lineColor || T.line, width: 0.75 }, rectRadius: 0.08 });
const source = (s, text) => meta(s, text, { x: M, y: 6.6, w: CW, h: 0.3, fontSize: 9, color: T.muted });
const img = (s, file, o) => s.addImage(Object.assign({ path: path.join(IMG, file) }, o));
const bullets = (s, items, o) => s.addText(items.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < items.length - 1, paraSpaceAfter: 6 } })), Object.assign({ fontFace: BODY, fontSize: 12, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
const lead = (s, text, o) => tb(s, text, Object.assign({ x: M, y: 1.95, w: CW, h: 0.6, fontSize: 13.5, color: T.ink }, o));

function slide(section, a, title) {
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: section });
  s.addText(a.kicker, { placeholder: "kicker" });
  s.addText(a.kicker2, { placeholder: "kicker2" });
  s.addText(title === undefined ? a.title : title, { placeholder: "title" });
  if (a.notes) s.addNotes(a.notes);
  return s;
}

// figures row like .figures on the site: n items with vertical rules
function figures(s, items, x, y, w, h, opts) {
  const n = items.length, cw = w / n, vs = (opts && opts.valueSize) || 36;
  const vh = vs >= 30 ? 0.7 : 0.5, ly = vs >= 30 ? 1.0 : 0.72;
  rule(s, x, y, w); rule(s, x, y + h, w);
  items.forEach((it, i) => {
    const px = x + i * cw;
    if (i > 0) vrule(s, px, y, h);
    const tx = i === 0 ? px : px + 0.28;
    head(s, it.value, { x: tx, y: y + 0.2, w: cw - 0.4, h: vh, fontSize: vs, charSpacing: -1 });
    tb(s, it.label, { x: tx, y: y + ly, w: cw - 0.45, h: h - ly - 0.05, fontSize: 10.5, color: T.ink2 });
  });
}

// column list block with top rule per column, like .steps / .columns
function columns(s, cols, y, h, opts) {
  const n = cols.length, gap = (opts && opts.gap) || 0.4, cw = (CW - gap * (n - 1)) / n;
  cols.forEach((c, i) => {
    const x = M + i * (cw + gap);
    rule(s, x, y, cw, (opts && opts.ruleColor) || T.ink);
    if (c.meta) meta(s, c.meta, { x, y: y + 0.14, w: cw, h: 0.3 });
    head(s, c.title, { x, y: y + (c.meta ? 0.46 : 0.16), w: cw, h: 0.5, fontSize: (opts && opts.titleSize) || 18 });
    const by = y + (c.meta ? 1.0 : 0.7);
    if (Array.isArray(c.body)) bullets(s, c.body, { x, y: by, w: cw, h: h - (by - y), fontSize: (opts && opts.bodySize) || 12 });
    else tb(s, c.body, { x, y: by, w: cw, h: h - (by - y), fontSize: (opts && opts.bodySize) || 12.5 });
  });
}

const chartBase = {
  chartColors: [T.teal], showValue: true, dataLabelFontSize: 10, dataLabelColor: T.ink2, dataLabelFontFace: "+mn-lt",
  catAxisLabelFontSize: 10, catAxisLabelColor: T.ink2, catAxisLabelFontFace: "+mn-lt",
  valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, catAxisLineShow: false, valAxisLineShow: false,
  showLegend: false, showTitle: false,
};

// ================= 1 Cover =================
pres.addSection({ title: "Opening" });
{
  const s = pres.addSlide({ masterName: "COVER", sectionTitle: "Opening" });
  const hh = CW * 800 / 1920;
  img(s, "hero-r.png", { x: M, y: 0.55, w: CW, h: hh });
  s.addText("regulift", { x: M, y: 0.55 + hh - 2.35, w: CW, h: 2.4, fontFace: HEAD, fontSize: 150, color: T.paper, align: "center", valign: "bottom", margin: 0, isTextBox: true, charSpacing: -8 });
  const my = 0.55 + hh + 0.18;
  meta(s, C.cover.left, { x: M, y: my, w: 6, h: 0.3 });
  meta(s, C.cover.right, { x: W - M - 7, y: my, w: 7, h: 0.3, align: "right" });
  tb(s, C.cover.statement, { x: M + 1, y: my + 0.5, w: CW - 2, h: 0.95, fontFace: HEAD, fontSize: 21, color: T.ink, align: "center", charSpacing: -0.5 });
  s.addNotes(C.cover.notes);
}

// ================= 2 Problem =================
pres.addSection({ title: "Problem" });
{
  const a = C.problem;
  const s = slide("Problem", a);
  const lw = 5.2;
  head(s, a.stat.value, { x: M, y: 1.95, w: lw, h: 0.75, fontSize: 44, charSpacing: -1.5 });
  tb(s, a.stat.label, { x: M, y: 2.75, w: lw, h: 1.0, fontSize: 12.5, color: T.ink });
  rule(s, M, 3.85, lw, T.line);
  bullets(s, a.points, { x: M, y: 4.0, w: lw, h: 2.5, fontSize: 11.5, color: T.ink2 });
  const cx = 6.4, cw = W - M - cx;
  card(s, cx, 1.95, cw, 4.5, T.white, T.line);
  meta(s, a.chartTitle, { x: cx + 0.25, y: 2.12, w: cw - 0.5, h: 0.3, color: T.ink });
  s.addChart(pres.ChartType.bar, [{ name: "Share of invoiced hours", labels: a.chart.labels, values: a.chart.values }], Object.assign({}, chartBase, {
    x: cx + 0.15, y: 2.45, w: cw - 0.3, h: 3.55, barDir: "bar", barGapWidthPct: 55,
    chartColors: [T.line2, T.line2, T.teal, T.teal, T.teal, T.teal, T.line2, T.line2],
    dataLabelPosition: "outEnd", dataLabelFormatCode: '0.0"%"', catAxisOrientation: "maxMin",
  }));
  meta(s, a.chartNote, { x: cx + 0.25, y: 6.05, w: cw - 0.5, h: 0.3, color: T.muted });
  source(s, a.source);
}

// ================= 3 Why now =================
pres.addSection({ title: "Why now" });
{
  const a = C.now;
  const s = slide("Why now", a);
  lead(s, a.lead);
  const y0 = 3.7, x0 = M + 0.3, x1 = W - M - 0.3, t0 = a.start, t1 = a.end;
  rule(s, x0, y0, x1 - x0, T.line2);
  a.events.forEach((e, i) => {
    const x = x0 + (e.t - t0) / (t1 - t0) * (x1 - x0);
    s.addShape(pres.ShapeType.ellipse, { x: x - 0.07, y: y0 - 0.07, w: 0.14, h: 0.14, fill: { color: e.future ? T.paper : T.teal }, line: { color: T.teal, width: 1 } });
    const up = i % 2 === 0;
    vrule(s, x, up ? y0 - 0.4 : y0 + 0.07, 0.33, T.line2);
    const ty = up ? y0 - 1.2 : y0 + 0.45;
    meta(s, e.date, { x: x - 1.0, y: up ? ty : ty + 0.5, w: 2.0, h: 0.22, align: "center", color: T.muted, fontSize: 9.5 });
    tb(s, e.label, { x: x - 1.0, y: up ? ty + 0.22 : ty, w: 2.0, h: 0.55, fontSize: 10.5, align: "center", color: T.ink });
  });
  meta(s, a.legend, { x: M, y: 4.98, w: CW, h: 0.25, color: T.muted, fontSize: 9.5 });
  figures(s, a.figures, M, 5.3, CW, 1.15, { valueSize: 22 });
  source(s, a.source);
}

// ================= 4 Solution =================
pres.addSection({ title: "Solution" });
{
  const a = C.solution;
  const s = slide("Solution", a);
  lead(s, a.lead);
  const cw = (CW - 0.5) / 2;
  [a.left, a.right].forEach((col, i) => {
    const x = M + i * (cw + 0.5);
    rule(s, x, 2.7, cw, T.ink);
    head(s, col.title, { x, y: 2.84, w: cw, h: 0.4, fontSize: 16 });
    col.items.forEach((it, k) => {
      const y = 3.3 + k * 0.5;
      rule(s, x, y, cw, T.line);
      s.addText(i === 0 ? "○" : "●", { x, y: y + 0.1, w: 0.3, h: 0.35, fontFace: BODY, fontSize: 11, color: i === 0 ? T.muted : T.ink, margin: 0, isTextBox: true });
      tb(s, it, { x: x + 0.35, y: y + 0.1, w: cw - 0.4, h: 0.38, fontSize: 12, color: T.ink });
    });
  });
  const py = 5.45, n = a.principles.length, gap = 0.3, pw = (CW - gap * (n - 1)) / n;
  card(s, M, py, CW, 1.0, T.mist, T.mist);
  a.principles.forEach((p, i) => {
    const x = M + 0.25 + i * (pw + gap - 0.125);
    head(s, p.title, { x, y: py + 0.15, w: pw - 0.4, h: 0.3, fontSize: 12.5 });
    tb(s, p.body, { x, y: py + 0.45, w: pw - 0.4, h: 0.55, fontSize: 10.5, color: T.ink2 });
  });
  source(s, a.source);
}

// ================= 5 How it works =================
{
  const a = C.flow;
  const s = slide("Solution", a);
  lead(s, a.lead);
  const fw = 10.6, fh = fw * 996 / 3840;
  img(s, "flow.png", { x: (W - fw) / 2, y: 2.55, w: fw, h: fh });
  const sy = 5.45, n = a.steps.length, gap = 0.4, cw = (CW - gap * (n - 1)) / n;
  a.steps.forEach((st, i) => {
    const x = M + i * (cw + gap);
    rule(s, x, sy, cw, T.ink);
    meta(s, st.meta, { x, y: sy + 0.13, w: 0.5, h: 0.3, color: T.muted });
    head(s, st.title, { x: x + 0.4, y: sy + 0.1, w: cw - 0.4, h: 0.32, fontSize: 14 });
    tb(s, st.body, { x, y: sy + 0.45, w: cw, h: 0.65, fontSize: 10.5 });
  });
  source(s, a.source);
}

// ================= 6 Why AI =================
{
  const a = C.ai;
  const s = slide("Solution", a);
  lead(s, a.lead);
  const n = a.cards.length, gap = 0.3, cw = (CW - gap * (n - 1)) / n;
  a.cards.forEach((c, i) => {
    const x = M + i * (cw + gap);
    card(s, x, 2.7, cw, 2.85, i === 1 ? T.mist : T.white, i === 1 ? T.mist : T.line);
    meta(s, c.meta, { x: x + 0.25, y: 2.86, w: cw - 0.5, h: 0.28 });
    head(s, c.title, { x: x + 0.25, y: 3.12, w: cw - 0.5, h: 0.55, fontSize: 15 });
    tb(s, c.body, { x: x + 0.25, y: 3.7, w: cw - 0.5, h: 1.8, fontSize: 11 });
  });
  const my = 5.72;
  rule(s, M, my, CW, T.ink);
  head(s, a.moat.title, { x: M, y: my + 0.12, w: 2.0, h: 0.3, fontSize: 13 });
  const iw = (CW - 2.2) / 3;
  a.moat.items.forEach((t, i) => {
    const x = M + 2.2 + i * iw;
    tb(s, "● " + t, { x, y: my + 0.12, w: iw - 0.25, h: 0.7, fontSize: 10.5, color: T.ink });
  });
  source(s, a.source);
}

// ================= 7 Market and competition =================
pres.addSection({ title: "Market" });
{
  const a = C.market;
  const s = slide("Market", a);
  const tw = 7.7;
  const bd = (c, pt) => [{ type: "none" }, { type: "none" }, { type: "solid", color: c, pt }, { type: "none" }];
  const hdr = a.columns.map((c, i) => ({ text: c.name, options: { fontFace: HEAD, fontSize: 10, color: T.ink, align: i === 0 ? "left" : "center", fill: { color: i === 1 ? T.mist : T.paper }, border: bd(T.ink, 0.75), valign: "bottom", margin: [4, 4, 5, 0] } }));
  const sub = a.columns.map((c, i) => ({ text: c.sub || "", options: { fontSize: 8, color: T.muted, align: i === 0 ? "left" : "center", fill: { color: i === 1 ? T.mist : T.paper }, border: bd(T.line, 0.5), margin: [3, 4, 4, 0] } }));
  const glyph = { y: "●", p: "◐", n: "○" };
  const rows = a.rows.map(r => [
    { text: r.label, options: { fontSize: 11, color: T.ink, fontFace: HEAD, border: bd(T.line, 0.5), margin: [7, 4, 7, 0], valign: "middle" } },
    ...r.cells.map((c, i) => ({ text: glyph[c], options: { fontSize: 11, color: c === "n" ? T.muted : T.ink, align: "center", fill: { color: i === 0 ? T.mist : T.paper }, border: bd(T.line, 0.5), margin: [7, 4, 7, 4], valign: "middle" } })),
  ]);
  s.addTable([hdr, sub, ...rows], { x: M, y: 1.95, w: tw, colW: [2.9, 1.1, 1.25, 1.25, 1.2], fontFace: BODY, autoPage: false });
  meta(s, a.legend, { x: M, y: 5.75, w: tw, h: 0.6, color: T.muted, fontSize: 9.5 });
  const rx = M + tw + 0.5, rw = W - M - rx;
  rule(s, rx, 1.95, rw, T.ink);
  head(s, a.customer.title, { x: rx, y: 2.08, w: rw, h: 0.35, fontSize: 15 });
  tb(s, a.customer.body, { x: rx, y: 2.45, w: rw, h: 1.05, fontSize: 11.5 });
  a.figures.forEach((f, i) => {
    const y = 3.6 + i * 0.95;
    rule(s, rx, y, rw, T.line);
    head(s, f.value, { x: rx, y: y + 0.1, w: rw, h: 0.4, fontSize: 22, charSpacing: -0.5 });
    tb(s, f.label, { x: rx, y: y + 0.5, w: rw, h: 0.42, fontSize: 10, color: T.ink2 });
  });
  source(s, a.source);
}

// ================= 8 Go to market =================
pres.addSection({ title: "Strategy" });
{
  const a = C.gtm;
  const s = slide("Strategy", a);
  lead(s, a.lead, { h: 0.4 });
  columns(s, a.cols, 2.5, 4.0, { titleSize: 17, bodySize: 11 });
  source(s, a.source);
}

// ================= 9 Commercial model =================
{
  const a = C.model;
  const s = slide("Strategy", a);
  const lw = 6.4;
  a.tiers.forEach((t, i) => {
    const y = 1.95 + i * 1.5;
    rule(s, M, y, lw, i === 0 ? T.ink : T.line);
    meta(s, t.meta, { x: M, y: y + 0.12, w: 3.4, h: 0.28 });
    head(s, t.price, { x: M, y: y + 0.38, w: 3.4, h: 0.5, fontSize: 22, charSpacing: -0.5 });
    meta(s, t.unit, { x: M, y: y + 0.88, w: 3.4, h: 0.3, color: T.muted });
    tb(s, t.body, { x: M + 3.5, y: y + 0.14, w: lw - 3.5, h: 1.3, fontSize: 10.5 });
  });
  const cx = M + lw + 0.5, cw = W - M - cx;
  card(s, cx, 1.95, cw, 4.5, T.white, T.line);
  meta(s, a.chart.title, { x: cx + 0.25, y: 2.12, w: cw - 0.5, h: 0.3, color: T.ink });
  meta(s, a.chart.sub, { x: cx + 0.25, y: 2.36, w: cw - 0.5, h: 0.45, color: T.muted, fontSize: 9.5 });
  s.addChart(pres.ChartType.bar, [
    { name: "Fact-finding", labels: a.chart.labels, values: a.chart.fact },
    { name: "Judgement", labels: a.chart.labels, values: a.chart.judge },
  ], Object.assign({}, chartBase, {
    x: cx + 0.15, y: 2.8, w: cw - 0.3, h: 2.75, barDir: "col", barGrouping: "stacked", barGapWidthPct: 70,
    chartColors: [T.line2, T.teal], dataLabelPosition: "ctr", dataLabelFormatCode: '0" h"', dataLabelColor: T.ink,
    showLegend: true, legendPos: "b", legendFontSize: 10, legendColor: T.ink2, legendFontFace: "+mn-lt",
  }));
  tb(s, a.chartNote, { x: cx + 0.25, y: 5.6, w: cw - 0.5, h: 0.8, fontSize: 10, color: T.ink2 });
  source(s, a.source);
}

// ================= 10 Plan =================
{
  const a = C.plan;
  const s = slide("Strategy", a);
  const sy = 1.95, n = a.status.length, gap = 0.3, sw = (CW - gap * (n - 1)) / n;
  card(s, M, sy, CW, 1.05, T.mist, T.mist);
  a.status.forEach((st, i) => {
    const x = M + 0.25 + i * (sw + gap - 0.125);
    meta(s, st.meta, { x, y: sy + 0.13, w: sw - 0.4, h: 0.25, fontFace: HEAD, color: T.ink, fontSize: 11 });
    tb(s, st.body, { x, y: sy + 0.4, w: sw - 0.4, h: 0.62, fontSize: 10, color: T.ink2 });
  });
  columns(s, a.cols, 3.3, 3.2, { titleSize: 17, bodySize: 11, gap: 0.3 });
  meta(s, "Each block ends with evidence a jury can check: an interview count, a signed letter, a working connector, a paying pilot.", { x: M, y: 6.6, w: CW, h: 0.3, fontSize: 9, color: T.muted });
}

// ================= 11 Founders and the ask =================
pres.addSection({ title: "Close" });
{
  const a = C.close;
  const s = slide("Close", a);
  const pw = 2.0, ph = pw * 875 / 700, gap = 0.35;
  a.people.forEach((p, i) => {
    const x = M + i * (pw + gap);
    img(s, p.photo, { x, y: 1.95, w: pw, h: ph });
    head(s, p.name, { x, y: 1.95 + ph + 0.12, w: pw, h: 0.3, fontSize: 13 });
    meta(s, p.role, { x, y: 1.95 + ph + 0.42, w: pw, h: 0.45, fontSize: 9.5 });
    tb(s, p.bio, { x, y: 1.95 + ph + 0.82, w: pw, h: 1.15, fontSize: 9.5 });
  });
  const wx = M + 2 * pw + gap + 0.5, ww = 2.9;
  rule(s, wx, 1.95, ww, T.ink);
  head(s, "Why us", { x: wx, y: 2.08, w: ww, h: 0.35, fontSize: 15 });
  tb(s, a.why, { x: wx, y: 2.45, w: ww, h: 3.5, fontSize: 11.5 });
  const ax = wx + ww + 0.5, aw = W - M - ax;
  a.asks.forEach((k, i) => {
    const y = 1.95 + i * 1.4;
    rule(s, ax, y, aw, i === 0 ? T.ink : T.line);
    head(s, k.title, { x: ax, y: y + 0.12, w: aw, h: 0.35, fontSize: 15 });
    tb(s, k.body, { x: ax, y: y + 0.48, w: aw, h: 0.9, fontSize: 11 });
  });
  card(s, M, 6.3, CW, 0.45, T.mist, T.mist);
  tb(s, a.contact, { x: M + 0.3, y: 6.4, w: CW - 0.6, h: 0.3, fontSize: 11.5, color: T.ink, align: "center" });
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("written", OUT);
})().catch(e => { console.error(e); process.exit(1); });
