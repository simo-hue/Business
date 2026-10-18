// Regulift application deck, built in the website's own tokens.
// Run: node build.js  -> writes OUT and applies the theme.
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require(process.env.PPTX_SKILL + "/scripts/apply_theme.js");
const content = require("./content.js");

const OUT = process.env.OUT || "/home/andi/Dokumente/Business/Simone Business/Business/pitch/regulift-ai-entrepreneurs-lab.pptx";
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
const HEAD = "Geist Medium"; // 500 weight like the site; falls back to Geist/Arial if not installed
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
pres.defineSlideMaster({
  title: "DIVIDER", background: { color: T.paper },
  objects: [
    { line: { x: M, y: 0.5, w: CW, h: 0, line: { color: T.line, width: 0.75 } } },
    ...footer,
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 0.6, w: 7, h: 0.32, fontFace: BODY, fontSize: 10, color: T.ink2, margin: 0, valign: "top" }, text: "" } },
    { placeholder: { options: { name: "kicker2", type: "body", x: W - M - 5.5, y: 0.6, w: 5.5, h: 0.32, fontFace: BODY, fontSize: 10, color: T.ink2, margin: 0, align: "right", valign: "top" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 1.9, w: 6.3, h: 3.1, fontFace: HEAD, fontSize: 40, color: T.ink, margin: 0, valign: "top", align: "left", charSpacing: -1 }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: M, y: 5.15, w: 5.6, h: 1.4, fontFace: BODY, fontSize: 13, color: T.ink2, margin: 0, valign: "top", align: "left" }, text: "" } },
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

function slide(master, section, kicker, kicker2, title) {
  const s = pres.addSlide({ masterName: master, sectionTitle: section });
  if (kicker !== undefined) s.addText(kicker, { placeholder: "kicker" });
  if (kicker2 !== undefined) s.addText(kicker2, { placeholder: "kicker2" });
  if (title !== undefined) s.addText(title, { placeholder: "title" });
  return s;
}

// figures row like .figures on the site: n items with vertical rules
function figures(s, items, y, h, opts) {
  const n = items.length, cw = CW / n, vs = (opts && opts.valueSize) || 40;
  const vh = vs >= 36 ? 0.8 : 0.5, ly = vs >= 36 ? 1.15 : 0.75;
  rule(s, M, y, CW); rule(s, M, y + h, CW);
  items.forEach((it, i) => {
    const x = M + i * cw;
    if (i > 0) vrule(s, x, y, h);
    const px = i === 0 ? x : x + 0.28;
    head(s, it.value, { x: px, y: y + 0.22, w: cw - 0.4, h: vh, fontSize: vs, charSpacing: -1 });
    tb(s, it.label, { x: px, y: y + ly, w: cw - 0.45, h: h - ly - 0.1, fontSize: 11.5, color: T.ink2 });
  });
}

// three or four column list block with top rule per column, like .steps / .columns
function columns(s, cols, y, h, opts) {
  const n = cols.length, gap = 0.4, cw = (CW - gap * (n - 1)) / n;
  cols.forEach((c, i) => {
    const x = M + i * (cw + gap);
    rule(s, x, y, cw, (opts && opts.ruleColor) || T.ink);
    if (c.meta) meta(s, c.meta, { x, y: y + 0.14, w: cw, h: 0.3 });
    head(s, c.title, { x, y: y + (c.meta ? 0.5 : 0.16), w: cw, h: 0.5, fontSize: (opts && opts.titleSize) || 18 });
    const by = y + (c.meta ? 1.05 : 0.7);
    if (Array.isArray(c.body)) {
      s.addText(c.body.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < c.body.length - 1, paraSpaceAfter: 6 } })), { x, y: by, w: cw, h: h - (by - y), fontFace: BODY, fontSize: 12.5, color: T.ink2, margin: 0, isTextBox: true, valign: "top" });
    } else {
      tb(s, c.body, { x, y: by, w: cw, h: h - (by - y), fontSize: 13 });
    }
  });
}

function notes(s, t) { s.addNotes(t); }

// ================= SLIDES =================
const C = content;

// 0 Cover
pres.addSection({ title: "Opening" });
{
  const s = slide("COVER", "Opening");
  const hh = CW * 800 / 1920;
  img(s, "hero-r.png", { x: M, y: 0.55, w: CW, h: hh });
  s.addText("regulift", { x: M, y: 0.55 + hh - 2.35, w: CW, h: 2.4, fontFace: HEAD, fontSize: 150, color: T.paper, align: "center", valign: "bottom", margin: 0, isTextBox: true, charSpacing: -8 });
  const my = 0.55 + hh + 0.18;
  meta(s, "Compliance platform. Inside-out assessment.", { x: M, y: my, w: 6, h: 0.3 });
  meta(s, C.cover.right, { x: W - M - 7, y: my, w: 7, h: 0.3, align: "right" });
  tb(s, C.cover.statement, { x: M + 1, y: my + 0.5, w: CW - 2, h: 0.95, fontFace: HEAD, fontSize: 21, color: T.ink, align: "center", charSpacing: -0.5 });
  notes(s, C.cover.notes);
}

// 1 Thesis
{
  const s = slide("CONTENT", "Opening", "Our mission.", "Figures with their sources", undefined);
  s.addText(C.thesis.statement, { x: M, y: 1.0, w: CW, h: 1.9, fontFace: HEAD, fontSize: 38, color: T.ink, align: "center", valign: "middle", margin: 0, isTextBox: true, charSpacing: -1 });
  figures(s, C.thesis.figures, 3.25, 2.55);
  source(s, C.thesis.source);
  notes(s, C.thesis.notes);
}

// ---- helper for dividers
function divider(section, num, title, body, photo, ratio) {
  pres.addSection({ title: section });
  const s = slide("DIVIDER", section, num + "  " + section + ".", C.dividerRight, title);
  s.addText(body, { placeholder: "body" });
  const pw = 5.4, ph = pw * ratio; const py = Math.max(1.0, (H - ph) / 2 - 0.1);
  img(s, photo, { x: W - M - pw, y: py, w: pw, h: Math.min(ph, 5.7) });
  return s;
}

// ================= ANALYSIS =================
notes(divider("Analysis", "01", C.analysis.divider.title, C.analysis.divider.body, "towers-r.png", 1.25), C.analysis.divider.notes);

// A1 problem: where lawyer hours go
{
  const a = C.analysis.hours;
  const s = slide("CONTENT", "Analysis", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 2.0, w: 5.0, h: 1.3, fontSize: 14, color: T.ink });
  s.addText(a.points.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < a.points.length - 1, paraSpaceAfter: 7 } })), { x: M, y: 3.4, w: 5.0, h: 3.1, fontFace: BODY, fontSize: 12, color: T.ink2, margin: 0, isTextBox: true, valign: "top" });
  // native bar chart
  card(s, 6.2, 2.0, W - M - 6.2, 4.45, T.white, T.line);
  meta(s, a.chartTitle, { x: 6.45, y: 2.18, w: 6, h: 0.3, color: T.ink });
  s.addChart(pres.ChartType.bar, [{ name: "Share of invoiced hours", labels: a.chart.labels, values: a.chart.values }], {
    x: 6.35, y: 2.5, w: W - M - 6.5, h: 3.85, barDir: "bar", barGapWidthPct: 55,
    chartColors: [T.teal], invertedColors: [T.line2],
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: '0.0"%"', dataLabelFontSize: 10, dataLabelColor: T.ink2, dataLabelFontFace: "+mn-lt",
    catAxisLabelFontSize: 10, catAxisLabelColor: T.ink2, catAxisLabelFontFace: "+mn-lt", catAxisOrientation: "maxMin",
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, catAxisLineShow: false, valAxisLineShow: false,
    showLegend: false, showTitle: false,
  });
  source(s, a.source);
  notes(s, a.notes);
}

// A2 regulatory wave: timeline
{
  const a = C.analysis.timeline;
  const s = slide("CONTENT", "Analysis", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  const y0 = 4.35, x0 = M + 0.3, x1 = W - M - 0.3;
  const t0 = a.start, t1 = a.end; // years as decimals
  rule(s, x0, y0, x1 - x0, T.line2);
  a.events.forEach((e, i) => {
    const x = x0 + (e.t - t0) / (t1 - t0) * (x1 - x0);
    s.addShape(pres.ShapeType.ellipse, { x: x - 0.07, y: y0 - 0.07, w: 0.14, h: 0.14, fill: { color: e.future ? T.paper : T.teal }, line: { color: T.teal, width: 1 } });
    const up = i % 2 === 0;
    const ty = up ? y0 - 1.35 : y0 + 0.3;
    vrule(s, x, up ? y0 - 0.45 : y0 + 0.07, 0.38, T.line2);
    meta(s, e.date, { x: x - 1.0, y: up ? ty : ty + 0.55, w: 2.0, h: 0.25, align: "center", color: T.muted });
    tb(s, e.label, { x: x - 1.0, y: up ? ty + 0.25 : ty, w: 2.0, h: 0.6, fontSize: 11, align: "center", color: T.ink });
  });
  meta(s, a.legend, { x: M, y: 5.95, w: CW, h: 0.3, color: T.muted });
  source(s, a.source);
  notes(s, a.notes);
}

// A3 market
{
  const a = C.analysis.market;
  const s = slide("CONTENT", "Analysis", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 2.0, w: 4.6, h: 1.5, fontSize: 14, color: T.ink });
  s.addText(a.points.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < a.points.length - 1, paraSpaceAfter: 7 } })), { x: M, y: 3.6, w: 4.6, h: 2.9, fontFace: BODY, fontSize: 12, color: T.ink2, margin: 0, isTextBox: true, valign: "top" });
  const cx = 5.6, cw = (W - M - cx - 0.3) / 2;
  [a.chart1, a.chart2].forEach((ch, i) => {
    const x = cx + i * (cw + 0.3);
    card(s, x, 2.0, cw, 4.45, T.white, T.line);
    meta(s, ch.title, { x: x + 0.25, y: 2.18, w: cw - 0.5, h: 0.3, color: T.ink });
    meta(s, ch.sub, { x: x + 0.25, y: 2.42, w: cw - 0.5, h: 0.3, color: T.muted });
    s.addChart(pres.ChartType.bar, [{ name: ch.series, labels: ch.labels, values: ch.values }], {
      x: x + 0.15, y: 2.85, w: cw - 0.3, h: 3.45, barDir: "col", barGapWidthPct: 60,
      chartColors: [T.teal], showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: ch.fmt, dataLabelFontSize: 10, dataLabelColor: T.ink2, dataLabelFontFace: "+mn-lt",
      catAxisLabelFontSize: 10, catAxisLabelColor: T.ink2, catAxisLabelFontFace: "+mn-lt",
      valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, valAxisLineShow: false,
      showLegend: false, showTitle: false,
    });
  });
  source(s, a.source);
  notes(s, a.notes);
}

// A4 competition table
{
  const a = C.analysis.compete;
  const s = slide("CONTENT", "Analysis", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  const hdr = a.columns.map((c, i) => ({ text: c.name, options: { bold: false, fontFace: HEAD, fontSize: 11, color: T.ink, align: i === 0 ? "left" : "center", fill: { color: i === 1 ? T.mist : T.paper }, border: [{ type: "none" }, { type: "none" }, { type: "solid", color: T.ink, pt: 0.75 }, { type: "none" }], valign: "bottom", margin: [4, 6, 6, 0] } }));
  const sub = a.columns.map((c, i) => ({ text: c.sub || "", options: { fontSize: 8.5, color: T.muted, align: i === 0 ? "left" : "center", fill: { color: i === 1 ? T.mist : T.paper }, border: [{ type: "none" }, { type: "none" }, { type: "solid", color: T.line, pt: 0.5 }, { type: "none" }], margin: [3, 6, 5, 0] } }));
  const glyph = { y: "●", p: "◐", n: "○" };
  const rows = a.rows.map(r => [
    { text: r.label, options: { fontSize: 12, color: T.ink, fontFace: HEAD, border: [{ type: "none" }, { type: "none" }, { type: "solid", color: T.line, pt: 0.5 }, { type: "none" }], margin: [8, 6, 8, 0], valign: "middle" } },
    ...r.cells.map((c, i) => ({ text: glyph[c], options: { fontSize: 12, color: c === "n" ? T.muted : T.ink, align: "center", fill: { color: i === 0 ? T.mist : T.paper }, border: [{ type: "none" }, { type: "none" }, { type: "solid", color: T.line, pt: 0.5 }, { type: "none" }], margin: [8, 6, 8, 6], valign: "middle" } })),
  ]);
  s.addTable([hdr, sub, ...rows], { x: M, y: 2.6, w: CW, colW: [4.2, 1.9, 2.0, 2.0, 2.033], fontFace: BODY, autoPage: false });
  meta(s, a.legend, { x: M, y: 6.22, w: CW, h: 0.3, color: T.muted });
  source(s, a.source);
  notes(s, a.notes);
}

// ================= SOLUTION =================
notes(divider("Solution", "02", C.solution.divider.title, C.solution.divider.body, "foam-r.png", 1.25), C.solution.divider.notes);

// S1 inside-out vs outside-in
{
  const a = C.solution.flip;
  const s = slide("CONTENT", "Solution", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  const cw = (CW - 0.5) / 2;
  [a.left, a.right].forEach((col, i) => {
    const x = M + i * (cw + 0.5);
    rule(s, x, 2.75, cw, T.ink);
    head(s, col.title, { x, y: 2.9, w: cw, h: 0.45, fontSize: 18 });
    col.items.forEach((it, k) => {
      const y = 3.5 + k * 0.62;
      rule(s, x, y, cw, T.line);
      s.addText(i === 0 ? "○" : "●", { x, y: y + 0.12, w: 0.3, h: 0.4, fontFace: BODY, fontSize: 11, color: i === 0 ? T.muted : T.ink, margin: 0, isTextBox: true });
      tb(s, it, { x: x + 0.35, y: y + 0.12, w: cw - 0.4, h: 0.48, fontSize: 13, color: T.ink });
    });
  });
  source(s, a.source);
  notes(s, a.notes);
}

// S2 where your data goes
{
  const a = C.solution.flow;
  const s = slide("CONTENT", "Solution", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: 9, h: 0.6, fontSize: 14, color: T.ink });
  img(s, "flow.png", { x: M, y: 2.75, w: CW, h: CW * 996 / 3840 });
  source(s, a.source);
  notes(s, a.notes);
}

// S3 how it works
{
  const a = C.solution.steps;
  const s = slide("CONTENT", "Solution", a.kicker, a.kicker2, a.title);
  columns(s, a.cols, 2.1, 3.0, { titleSize: 20 });
  card(s, M, 5.3, CW, 1.1, T.mist, T.mist);
  head(s, a.lawyers.title, { x: M + 0.3, y: 5.48, w: 3.6, h: 0.4, fontSize: 16 });
  tb(s, a.lawyers.body, { x: M + 4.0, y: 5.48, w: CW - 4.3, h: 0.8, fontSize: 12.5, color: T.ink });
  notes(s, a.notes);
}

// S4 why AI is central
{
  const a = C.solution.ai;
  const s = slide("CONTENT", "Solution", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  const n = a.cards.length, gap = 0.3, cw = (CW - gap * (n - 1)) / n;
  a.cards.forEach((c, i) => {
    const x = M + i * (cw + gap);
    card(s, x, 2.75, cw, 3.65, i === 1 ? T.mist : T.white, i === 1 ? T.mist : T.line);
    meta(s, c.meta, { x: x + 0.25, y: 2.95, w: cw - 0.5, h: 0.3 });
    head(s, c.title, { x: x + 0.25, y: 3.25, w: cw - 0.5, h: 0.8, fontSize: 17 });
    tb(s, c.body, { x: x + 0.25, y: 4.1, w: cw - 0.5, h: 2.2, fontSize: 12 });
  });
  source(s, a.source);
  notes(s, a.notes);
}

// S5 what exists today
{
  const a = C.solution.today;
  const s = slide("CONTENT", "Solution", a.kicker, a.kicker2, a.title);
  const iw = 6.4;
  img(s, "site-r.png", { x: W - M - iw, y: 2.0, w: iw, h: iw * 900 / 1440 });
  meta(s, a.caption, { x: W - M - iw, y: 2.0 + iw * 900 / 1440 + 0.12, w: iw, h: 0.3, color: T.muted });
  a.rows.forEach((r, k) => {
    const y = 1.95 + k * 1.13;
    rule(s, M, y, 5.4, k === 0 ? T.ink : T.line);
    meta(s, r.meta, { x: M, y: y + 0.1, w: 5.4, h: 0.28 });
    head(s, r.title, { x: M, y: y + 0.33, w: 5.4, h: 0.34, fontSize: 15 });
    tb(s, r.body, { x: M, y: y + 0.66, w: 5.4, h: 0.45, fontSize: 11 });
  });
  notes(s, a.notes);
}

// ================= STRATEGY =================
notes(divider("Strategy", "03", C.strategy.divider.title, C.strategy.divider.body, "hills-r.png", 1.25), C.strategy.divider.notes);

// T1 starting regulations and customer
{
  const a = C.strategy.regs;
  const s = slide("CONTENT", "Strategy", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  const n = a.cards.length, gap = 0.3, cw = (CW - gap * (n - 1)) / n;
  a.cards.forEach((c, i) => {
    const x = M + i * (cw + gap);
    card(s, x, 2.7, cw, 2.65, c.first ? T.mist : T.white, c.first ? T.mist : T.line);
    meta(s, c.meta, { x: x + 0.22, y: 2.85, w: cw - 0.44, h: 0.3 });
    head(s, c.title, { x: x + 0.22, y: 3.12, w: cw - 0.44, h: 0.45, fontSize: 17 });
    tb(s, c.body, { x: x + 0.22, y: 3.62, w: cw - 0.44, h: 1.68, fontSize: 11 });
  });
  card(s, M, 5.5, CW, 0.9, T.white, T.line);
  head(s, a.customer.title, { x: M + 0.3, y: 5.66, w: 3.2, h: 0.4, fontSize: 15 });
  tb(s, a.customer.body, { x: M + 3.6, y: 5.66, w: CW - 3.9, h: 0.7, fontSize: 12, color: T.ink });
  source(s, a.source);
  notes(s, a.notes);
}

// T2 road to market: countries
{
  const a = C.strategy.markets;
  const s = slide("CONTENT", "Strategy", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  columns(s, a.cols, 2.7, 3.75, { titleSize: 20 });
  source(s, a.source);
  notes(s, a.notes);
}

// T3 channel: law firms
{
  const a = C.strategy.channel;
  const s = slide("CONTENT", "Strategy", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: 5.2, h: 1.6, fontSize: 14, color: T.ink });
  s.addText(a.points.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < a.points.length - 1, paraSpaceAfter: 8 } })), { x: M, y: 3.6, w: 5.2, h: 2.8, fontFace: BODY, fontSize: 12.5, color: T.ink2, margin: 0, isTextBox: true, valign: "top" });
  const x = 6.4, cw = W - M - x;
  card(s, x, 2.0, cw, 4.4, T.mist, T.mist);
  meta(s, a.box.meta, { x: x + 0.3, y: 2.2, w: cw - 0.6, h: 0.3 });
  a.box.rows.forEach((r, k) => {
    const y = 2.6 + k * 0.92;
    rule(s, x + 0.3, y, cw - 0.6, T.line2);
    head(s, r.title, { x: x + 0.3, y: y + 0.12, w: 2.2, h: 0.7, fontSize: 14 });
    tb(s, r.body, { x: x + 2.6, y: y + 0.12, w: cw - 3.0, h: 0.75, fontSize: 11.5, color: T.ink });
  });
  source(s, a.source);
  notes(s, a.notes);
}

// T4 scaling plan: 30/60/90 and 12 months
{
  const a = C.strategy.plan;
  const s = slide("CONTENT", "Strategy", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  columns(s, a.cols, 2.75, 3.75, { titleSize: 18 });
  notes(s, a.notes);
}

// ================= COMMERCIAL =================
notes(divider("Commercial model", "04", C.commercial.divider.title, C.commercial.divider.body, "interior-r.png", 1.25), C.commercial.divider.notes);

// C1 price architecture
{
  const a = C.commercial.model;
  const s = slide("CONTENT", "Commercial model", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: CW, h: 0.6, fontSize: 14, color: T.ink });
  const n = a.tiers.length, gap = 0.3, cw = (CW - gap * (n - 1)) / n;
  a.tiers.forEach((c, i) => {
    const x = M + i * (cw + gap);
    card(s, x, 2.7, cw, 2.45, c.hi ? T.mist : T.white, c.hi ? T.mist : T.line);
    meta(s, c.meta, { x: x + 0.22, y: 2.85, w: cw - 0.44, h: 0.3 });
    head(s, c.price, { x: x + 0.22, y: 3.1, w: cw - 0.44, h: 0.55, fontSize: 24, charSpacing: -0.5 });
    meta(s, c.unit, { x: x + 0.22, y: 3.65, w: cw - 0.44, h: 0.3, color: T.muted });
    tb(s, c.body, { x: x + 0.22, y: 3.98, w: cw - 0.44, h: 1.12, fontSize: 11 });
  });
  figures(s, a.figures, 5.3, 1.2, { valueSize: 22 });
  source(s, a.source);
  notes(s, a.notes);
}

// C2 why it gets cheaper: hours before/after
{
  const a = C.commercial.cheaper;
  const s = slide("CONTENT", "Commercial model", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: 5.4, h: 1.7, fontSize: 14, color: T.ink });
  s.addText(a.points.map((t, k) => ({ text: t, options: { bullet: { code: "25CF" }, breakLine: k < a.points.length - 1, paraSpaceAfter: 8 } })), { x: M, y: 3.7, w: 5.4, h: 2.7, fontFace: BODY, fontSize: 12.5, color: T.ink2, margin: 0, isTextBox: true, valign: "top" });
  const x = 6.6, cw = W - M - x;
  card(s, x, 2.0, cw, 4.4, T.white, T.line);
  meta(s, a.chart.title, { x: x + 0.25, y: 2.18, w: cw - 0.5, h: 0.3, color: T.ink });
  meta(s, a.chart.sub, { x: x + 0.25, y: 2.42, w: cw - 0.5, h: 0.3, color: T.muted });
  s.addChart(pres.ChartType.bar, [
    { name: "Fact-finding", labels: a.chart.labels, values: a.chart.fact },
    { name: "Judgement", labels: a.chart.labels, values: a.chart.judge },
  ], {
    x: x + 0.15, y: 2.85, w: cw - 0.3, h: 3.4, barDir: "col", barGrouping: "stacked", barGapWidthPct: 70,
    chartColors: [T.line2, T.teal], showValue: true, dataLabelPosition: "ctr", dataLabelFormatCode: '0" h"', dataLabelFontSize: 10, dataLabelColor: T.ink, dataLabelFontFace: "+mn-lt",
    catAxisLabelFontSize: 10, catAxisLabelColor: T.ink2, catAxisLabelFontFace: "+mn-lt",
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, valAxisLineShow: false,
    showLegend: true, legendPos: "b", legendFontSize: 10, legendColor: T.ink2, legendFontFace: "+mn-lt", showTitle: false,
  });
  source(s, a.source);
  notes(s, a.notes);
}

// ================= CONCLUSION =================
notes(divider("Conclusion", "05", C.conclusion.divider.title, C.conclusion.divider.body, "rock-r.png", 1000 / 1400), C.conclusion.divider.notes);

// F1 founders
{
  const a = C.conclusion.founders;
  const s = slide("CONTENT", "Conclusion", a.kicker, a.kicker2, a.title);
  tb(s, a.lead, { x: M, y: 1.95, w: 4.6, h: 2.6, fontSize: 14, color: T.ink });
  tb(s, a.why, { x: M, y: 3.6, w: 4.6, h: 2.8, fontSize: 12.5 });
  const pw = 2.55; const gap = 0.35; let x = 6.0;
  a.people.forEach((p, i) => {
    const ph = pw * 1.25;
    img(s, p.photo, { x, y: 2.0, w: pw, h: ph });
    head(s, p.name, { x, y: 2.0 + ph + 0.15, w: pw + 0.6, h: 0.35, fontSize: 15 });
    meta(s, p.role, { x, y: 2.0 + ph + 0.5, w: pw + 0.6, h: 0.3 });
    tb(s, p.bio, { x, y: 2.0 + ph + 0.78, w: pw + 0.85, h: 1.6, fontSize: 10.5 });
    x += pw + gap + 0.85;
  });
  notes(s, a.notes);
}

// F2 closing
{
  const a = C.conclusion.close;
  const s = slide("CONTENT", "Conclusion", a.kicker, a.kicker2, undefined);
  s.addText(a.statement, { x: M, y: 1.0, w: CW, h: 1.6, fontFace: HEAD, fontSize: 36, color: T.ink, align: "center", valign: "middle", margin: 0, isTextBox: true, charSpacing: -1 });
  columns(s, a.cols, 2.95, 2.5, { titleSize: 16 });
  card(s, M, 5.6, CW, 0.8, T.mist, T.mist);
  tb(s, a.contact, { x: M + 0.3, y: 5.84, w: CW - 0.6, h: 0.4, fontSize: 13, color: T.ink, align: "center" });
  notes(s, a.notes);
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("written", OUT);
})().catch(e => { console.error(e); process.exit(1); });
