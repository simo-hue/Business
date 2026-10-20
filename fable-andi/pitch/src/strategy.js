// Strategy slides for Simone's deck (Canva export, 20 x 11.25 in, Poppins).
// Generates five slides: the gate table, Germany, the Netherlands map, the business model, why us.
// Nav bar and page pill are NOT drawn here: assemble.py copies them from Simone's slides.
// Run from ~/deckbuild: NODE_PATH=$B/node_modules PPTX_SKILL=<skill> ASSETS=<assets dir> OUT=<file> node strategy.js
const pptxgen = require("pptxgenjs");
const { applyTheme } = require(process.env.PPTX_SKILL + "/scripts/apply_theme.js");
const path = require("path");

const OUT = process.env.OUT || "strategy-slides.pptx";
const A = process.env.ASSETS || path.join(__dirname, "assets");

// Simone's palette (read from her slides)
const C = { paper: "FBFBFB", ink: "171717", muted: "687075", muted2: "56636A", line: "DADBD6", mist: "E8F2F2", teal: "497078", tealDeep: "315D66", grey: "E9E9E6", grey2: "DEDEDA", grey3: "CFCFCB", rust: "A95E53", path: "C9654A", white: "FFFFFF", text: "3B3E3C" };
const BOLD = "Poppins", REG = "Poppins"; // bold via the bold flag, so PowerPoint, Canva and LibreOffice all resolve it
const THEME = { name: "Regulift", headFontFace: "Poppins", bodyFontFace: "Poppins",
  colors: { dk1: C.ink, lt1: C.paper, dk2: C.muted, lt2: C.mist, accent1: C.teal, accent2: C.rust, accent3: C.line, accent4: C.grey, accent5: C.white, accent6: C.tealDeep, hlink: C.teal, folHlink: C.muted } };

const pres = new pptxgen();
pres.defineLayout({ name: "SIMONE", width: 20, height: 11.25 });
pres.layout = "SIMONE";
pres.theme = { headFontFace: "Poppins", bodyFontFace: "Poppins" };
pres.author = "Simone Mattioli, Andreas Herzinger"; pres.company = "Regulift"; pres.title = "Regulift. Strategy slides.";
pres.defineSlideMaster({ title: "CONTENT", background: { color: C.paper }, objects: [] });

// geometry shared with Simone's slides
const M = 1.17, CW = 17.72, R = M + CW; // left margin, content width, right edge
const T = (s, text, o) => s.addText(text, Object.assign({ fontFace: REG, fontSize: 14.5, color: C.text, margin: 0, isTextBox: true, valign: "top" }, o));
const H = (s, text, o) => T(s, text, Object.assign({ fontFace: BOLD, bold: true, color: C.ink }, o));
const rr = (s, x, y, w, h, fill, line, r, extra) => s.addShape(pres.ShapeType.roundRect, Object.assign({ x, y, w, h, fill: { color: fill }, line: line ? { color: line, width: 0.75 } : { color: fill, width: 0 }, rectRadius: r == null ? 0.18 : r }, extra || {}));
const hr = (s, x, y, w, c) => s.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: c || C.line, width: 0.75 } });
const UP = t => t.toUpperCase();

// header block in Simone's positions: kicker 2.18, title 2.73, lead 3.89, rule 4.43
function frame(kicker, title, accent, lead, opts) {
  opts = opts || {};
  const s = pres.addSlide({ masterName: "CONTENT" });
  T(s, UP(kicker), { x: M, y: 2.18, w: 10, h: 0.38, fontFace: BOLD, bold: true, fontSize: 17, color: C.teal, charSpacing: 1 });
  s.addText([{ text: UP(title) + " ", options: { color: C.ink } }, { text: UP(accent), options: { color: C.teal } }],
    { x: M - 0.03, y: 2.73, w: CW, h: 0.95, fontFace: BOLD, bold: true, fontSize: 53, margin: 0, isTextBox: true, valign: "top", charSpacing: -1 });
  if (lead) T(s, lead, { x: M, y: 3.89, w: opts.leadW || CW, h: 0.46, fontSize: 19.5, color: C.muted });
  if (!opts.noRule) hr(s, M, 4.43, CW, C.line);
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
const L = (t, url) => ({ text: t, options: { hyperlink: { url }, color: C.muted } });
const K = t => ({ text: t, options: { fontFace: BOLD, bold: true, color: C.ink } });
const P = t => ({ text: t });
function sources(s, runs, y, h, size) {
  s.addText(runs, { x: M, y: y || 9.95, w: CW - 2.3, h: h || 0.5, fontFace: REG, fontSize: size || 10, color: C.muted, margin: 0, isTextBox: true, valign: "top" });
}

// =====================================================================
// Slide A: the gate table (restyled from market.js)
// =====================================================================
{
  const s = frame("Market analysis", "Four criteria.", "One is a gate.", "", { noRule: true,
    notes: "Ten candidate markets, four criteria scored one to five on sourced facts. The first column is the gate: may software give a company its legal answer? Grey rows fail it. Sources: FILES/research-countries.md and FILES/research-legal-*.md." });
  // legend right of the title
  const lx = R - 6.1, ly = 2.85;
  const legend = (y, dots, label, text) => {
    rr(s, lx, y + 0.05, 0.55, 0.24, C.white, C.line, 0.05);
    dots.forEach((d, i) => s.addShape(pres.ShapeType.ellipse, { x: lx + 0.1 + i * 0.14, y: y + 0.115, w: 0.11, h: 0.11, fill: { color: d }, line: { color: d, width: 0 } }));
    s.addText([{ text: label + " ", options: { fontFace: BOLD, bold: true, color: C.ink } }, { text }], { x: lx + 0.75, y, w: 5.4, h: 0.4, fontFace: REG, fontSize: 12.5, color: C.text, margin: 0, isTextBox: true, valign: "top" });
  };
  legend(ly, [C.muted, C.muted, C.line], "Grey rows", "fail the gate.");
  legend(ly + 0.5, [C.ink, C.ink, C.ink], "Black rows", "pass the gate.");

  const CRIT = [
    { name: "AI may advise", sub: "legal without a lawyer signing" },
    { name: "Market size", sub: "firms with 50 or more staff" },
    { name: "Savings potential", sub: "on lawyer cost" },
    { name: "New regulation enforcement", sub: "deadline live, fines starting" },
  ];
  const ROWS = [
    { c: "Netherlands", st: "open", s: [5, 4, 4, 5] }, { c: "Sweden", st: "open", s: [5, 3, 5, 4] }, { c: "Germany", st: "closed", s: [2, 5, 4, 4] },
    { c: "Belgium", st: "open", s: [5, 3, 3, 3] }, { c: "Italy", st: "partly", s: [3, 5, 2, 4] }, { c: "Austria", st: "closed", s: [1, 3, 5, 5] },
    { c: "Denmark", st: "open", s: [5, 2, 3, 3] }, { c: "Finland", st: "open", s: [5, 2, 2, 3] }, { c: "Poland", st: "open", s: [5, 4, 1, 2] },
    { c: "Switzerland", st: "outside EU", s: [5, 3, 5, 1] },
  ];
  ROWS.forEach(r => r.t = r.s.reduce((a, b) => a + b, 0));
  const cx = [M, M + 3.6, M + 6.5, M + 9.4, M + 12.3, M + 15.3];
  const ty = 4.55, rh = 0.4, gap = 0.045, y0 = ty + 0.85;
  const bandX = cx[1] - 0.15, bandW = 2.65, bandY = ty - 0.42, bandH = y0 + 9 * (rh + gap) + rh + 0.1 - bandY;
  rr(s, bandX, bandY, bandW, bandH, C.mist, null, 0.1);
  s.addShape(pres.ShapeType.line, { x: bandX + bandW + 0.08, y: bandY, w: 0, h: bandH, line: { color: C.line, width: 0.75 } });
  T(s, "The gate", { x: cx[1], y: ty - 0.36, w: 1.9, h: 0.3, fontSize: 11.5, fontFace: BOLD, bold: true, color: C.ink });
  T(s, "Ranking criteria", { x: cx[2], y: ty - 0.36, w: 4, h: 0.3, fontSize: 11.5, color: C.muted });
  H(s, "Country", { x: cx[0] + 0.3, y: ty, w: 3.0, h: 0.35, fontSize: 13 });
  CRIT.forEach((c, i) => {
    s.addText([{ text: c.name + " " }, { text: String(i + 1), options: { superscript: true, color: C.muted } }], { x: cx[i + 1], y: ty, w: 2.85, h: 0.35, fontSize: 13, fontFace: BOLD, bold: true, color: C.ink, margin: 0, isTextBox: true, valign: "top", wrap: false });
    T(s, c.sub, { x: cx[i + 1], y: ty + 0.33, w: 2.85, h: 0.3, fontSize: 11, color: C.muted });
  });
  H(s, "Total", { x: cx[5], y: ty, w: 2.4, h: 0.35, fontSize: 13 });
  T(s, "of 20", { x: cx[5], y: ty + 0.33, w: 2.4, h: 0.3, fontSize: 11, color: C.muted });
  hr(s, M, ty + 0.72, CW, C.ink);
  let rank = 0;
  ROWS.forEach((r, i) => {
    const y = y0 + i * (rh + gap), top = i === 0, closed = r.st === "closed", eu = r.st !== "outside EU";
    const fg = top ? C.paper : closed ? C.muted : C.ink, dim = top ? "8FA3A8" : C.muted;
    rr(s, M, y, CW, rh, top ? C.ink : C.white, top ? C.ink : C.line, 0.1);
    s.addShape(pres.ShapeType.rect, { x: bandX, y, w: bandW, h: rh, fill: { color: top ? "2E3F42" : C.mist }, line: { color: top ? "2E3F42" : C.mist, width: 0 } });
    if (eu) rank++;
    T(s, eu ? rank + "." : "", { x: M + 0.3, y: y + 0.09, w: 0.5, h: 0.3, fontSize: 13.5, color: dim });
    H(s, r.c, { x: M + 0.75, y: y + 0.07, w: 2.0, h: 0.32, fontSize: 15.5, color: fg });
    if (!eu) T(s, "outside EU", { x: M + 0.75 + 1.55, y: y + 0.12, w: 1.2, h: 0.3, fontSize: 11, color: C.muted });
    r.s.forEach((v, k) => {
      const x = cx[k + 1];
      H(s, String(v), { x, y: y + 0.06, w: 0.4, h: 0.34, fontSize: 16.5, color: fg });
      for (let d = 0; d < 5; d++) {
        const col = d < v ? (top ? C.paper : closed ? C.muted : C.ink) : (top ? "3A4D53" : C.line);
        s.addShape(pres.ShapeType.ellipse, { x: x + 0.5 + d * 0.2, y: y + 0.16, w: 0.11, h: 0.11, fill: { color: col }, line: { color: col, width: 0 } });
      }
    });
    H(s, String(r.t), { x: cx[5], y: y + 0.05, w: 0.6, h: 0.36, fontSize: 18, color: fg });
    const bx = cx[5] + 0.75, bw = 1.5;
    rr(s, bx, y + 0.17, bw, 0.09, top ? "3A4D53" : C.line, null, 0.04);
    rr(s, bx, y + 0.17, bw * r.t / 20, 0.09, top ? C.paper : closed ? C.line : C.teal, null, 0.04);
  });
  const BR = { text: "", options: { breakLine: true } };
  s.addText([
    K("1  AI may advise  "), P("NL "), L("wetten.overheid.nl", "https://wetten.overheid.nl/BWBR0002093/2026-01-01"), P("  SE "), L("riksdagen.se", "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1985354-om-forbud-mot-juridiskt-eller_sfs-1985-354/"), P("  DK "), L("retsinformation.dk", "https://www.retsinformation.dk/eli/lta/2025/1298/pdf"), P("  FI "), L("finlex.fi", "https://opendata.finlex.fi/finlex/avoindata/v1/akn/fi/act/statute-consolidated/1958/496/fin@20250543"), P("  PL "), L("sejm.gov.pl", "https://api.sejm.gov.pl/eli/acts/DU/2026/1290/text.pdf"), P("  BE "), L("ejustice.just.fgov.be", "https://www.ejustice.just.fgov.be/eli/loi/1967/10/10/1967101053/justel"), P("  CH "), L("fedlex.admin.ch", "https://www.fedlex.admin.ch/eli/cc/2002/153/de"), P("  DE "), L("gesetze-im-internet.de", "https://www.gesetze-im-internet.de/rdg/"), P(", "), L("bundesgerichtshof.de", "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2021/2021171.html"), P("  IT "), L("normattiva.it", "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art2"), P("  AT "), L("ris.bka.gv.at", "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001673&Paragraf=8"), BR,
    K("2  Market size  "), P("Eurostat sbs_sc_ovw 2024 "), L("ec.europa.eu/eurostat", "https://ec.europa.eu/eurostat/databrowser/view/sbs_sc_ovw/default/table"), P("  CH "), L("bfs.admin.ch", "https://dam-api.bfs.admin.ch/hub/api/dam/assets/36734571/master"), P("     "),
    K("3  Savings potential  "), P("Eurostat sbs_ovw_act, tps00001 "), L("ec.europa.eu/eurostat", "https://ec.europa.eu/eurostat/databrowser/view/sbs_ovw_act/default/table"), P("  BE, IT, PL "), L("e-justice.europa.eu", "https://e-justice.europa.eu/topics/taking-legal-action/where-and-how/costs_en"), P(" (2007)"), BR,
    K("4  New regulation enforcement  "), P("NL "), L("rdi.nl", "https://www.rdi.nl/actueel/nieuws/2026/08/15/de-cyberbeveiligingswet-treedt-in-werking"), P("  SE "), L("riksdagen.se", "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/"), P("  DK "), L("retsinformation.dk", "https://www.retsinformation.dk/eli/lta/2025/434"), P("  FI "), L("finlex.fi", "https://www.finlex.fi/fi/lainsaadanto/2025/124"), P("  PL "), L("sejm.gov.pl", "https://api.sejm.gov.pl/eli/acts/DU/2026/252"), P("  DE "), L("bsi.bund.de", "https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251205_NIS-2-Umsetzungsgesetz_in_Kraft.html"), P("  IT "), L("gazzettaufficiale.it", "https://www.gazzettaufficiale.it/eli/id/2024/10/01/24G00155/sg"), P("  AT "), L("ris.bka.gv.at", "https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40273890/NOR40273890.pdf"), P("  EU "), L("digital-strategy.ec.europa.eu", "https://digital-strategy.ec.europa.eu/en/policies/nis-transposition"),
  ], { x: M, y: 9.92, w: CW - 2.0, h: 0.55, fontFace: REG, fontSize: 8, color: C.muted, margin: 0, isTextBox: true, valign: "top", paraSpaceAfter: 1 });
}

// =====================================================================
// Slide B: Germany is the goal. Why not start there?
// =====================================================================
{
  const s = frame("Market entry", "Germany is the goal.", "Why not start there?", "In Germany an AI adviser may not advise. Start there, and we build a product we can never test.",
    { notes: "Germany is the destination from day one. Starting there would force a gated product before anyone knows whether the ungated one sells. So the full adviser is built and proven where it may speak, and Germany arrives as an upgrade our Dutch customers buy." });
  const labW = 2.95, sx = M + 0.3 + labW + 0.3, sw = R - 0.3 - sx, n = 4, g = 0.2, bw = (sw - (n - 1) * g) / n;
  ["Build", "Learn", "Expand", "Arrive"].forEach((t, i) => T(s, UP(t), { x: sx + i * (bw + g) + 0.1, y: 4.72, w: bw, h: 0.28, fontSize: 10.5, color: C.muted, charSpacing: 1.5 }));
  const track = (y, h, dark, small, smallCol, label, labelCol, strike, steps) => {
    rr(s, M, y, CW, h, dark ? C.grey : C.white, dark ? C.grey : C.line, 0.2);
    T(s, UP(small), { x: M + 0.35, y: y + 0.45, w: labW, h: 0.3, fontSize: 10.5, color: smallCol, charSpacing: 1.5 });
    H(s, UP(label), { x: M + 0.35, y: y + 0.78, w: labW, h: 0.8, fontSize: 19, color: labelCol, strike: strike });
    steps.forEach((st, i) => {
      const x = sx + i * (bw + g), by = y + 0.3, bh = h - 0.6;
      rr(s, x, by, bw, bh, st.fill, st.fill, 0.14);
      s.addText([{ text: UP(st.t), options: { fontFace: BOLD, bold: true, fontSize: 14.5, color: st.fg, breakLine: true } }, { text: st.d, options: { fontFace: REG, fontSize: 13, color: st.fg2 } }],
        { x: x + 0.3, y: by, w: bw - 0.6, h: bh, margin: 0, isTextBox: true, valign: "middle", paraSpaceAfter: 2 });
      if (i > 0) T(s, "→", { x: x - g - 0.05, y: by, w: g + 0.1, h: bh, fontSize: 14, color: C.muted, align: "center", valign: "middle" });
    });
  };
  track(5.1, 2.1, true, "If we started in Germany", C.rust, "Germany first", C.muted, true, [
    { t: "Gated adviser", d: "A lawyer signs every answer.", fill: C.grey2, fg: "5A5D5A", fg2: "5A5D5A" },
    { t: "No proof", d: "We never learn if the adviser sells.", fill: C.grey2, fg: "5A5D5A", fg2: "5A5D5A" },
    { t: "Stuck", d: "Built for the strictest market. Travels badly.", fill: C.grey2, fg: "5A5D5A", fg2: "5A5D5A" },
    { t: "Cold start", d: "No customers, no firm, no references.", fill: C.grey3, fg: "3A3A38", fg2: "3A3A38" },
  ]);
  track(7.4, 2.1, false, "What we do instead", C.teal, "Open first", C.ink, false, [
    { t: "Full adviser", d: "Sold in the Netherlands, where it may speak.", fill: C.ink, fg: C.white, fg2: "D7DEDC" },
    { t: "Proof", d: "Companies pay for the software itself.", fill: C.ink, fg: C.white, fg2: "D7DEDC" },
    { t: "Repeat", d: "New market, same product. Add a firm and a country pack.", fill: C.mist, fg: "2A3A3C", fg2: "2A3A3C" },
    { t: "Germany, as an upgrade", d: "Dutch customers buy the Germany pack. Same product, German rules, a German firm signs.", fill: C.teal, fg: C.white, fg2: "E6EFF0" },
  ]);
  sources(s, [K("Germany's rule  "), P("generic, rule-based tools are allowed (BGH Smartlaw, 2021). Case-specific advice stays with lawyers. "), L("bundesgerichtshof.de", "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2021/2021171.html")], 9.85, 0.4, 11);
}

// =====================================================================
// Slide C: So we start in the Netherlands (map)
// =====================================================================
{
  const s = frame("Market entry", "So we start in", "the Netherlands.", "Where the adviser may speak, the deadline is live, and the proof is clean.",
    { notes: "Only the ten countries from the analysis are coloured. Black: software may advise. Teal: the adviser prepares and a lawyer signs. Grey: firm-led. Orange: our path, the Netherlands first, the open markets next, Germany as the upgrade." });
  const mw = 7.2, mh = mw * 1924 / 2816, mx = M, my = 4.7;
  s.addImage({ path: path.join(A, "map-nl.png"), x: mx, y: my, w: mw, h: mh, rounding: false });
  // legend under the map
  const keys = [[C.ink, "Software may advise"], [C.teal, "Lawyer must sign"], ["D3D4D0", "Firm-led"], ["F1F2EF", "Not in the analysis"], [C.path, "Our path"]];
  let kx = mx + 0.05;
  keys.forEach(([col, t], i) => {
    const w = 0.22 + t.length * 0.085 + 0.25;
    if (i === 4) s.addShape(pres.ShapeType.ellipse, { x: kx, y: my + mh + 0.17, w: 0.17, h: 0.17, fill: { color: col }, line: { color: col, width: 0 } });
    else rr(s, kx, my + mh + 0.16, 0.19, 0.19, col, col === "F1F2EF" ? C.line : col, 0.04);
    T(s, t, { x: kx + 0.27, y: my + mh + 0.12, w: w, h: 0.3, fontSize: 11, color: C.text });
    kx += w + 0.1;
  });
  // three reasons
  const rx = mx + mw + 0.9, rw = R - rx, ry0 = 4.75, rh = 1.68, rg = 0.12;
  [["Legal", "The adviser may speak", "Dutch law reserves only the lawyer's title. Software may give a company its answer. In Germany and Austria it may not."],
   ["Timing", "The deadline is live", "NIS2 in force since August 2026. About 8,000 companies in scope, more than half not registered."],
   ["Proof", "Companies pay for software", "No lawyer is needed to make the sale. So we learn the one thing that matters: does the adviser sell on its own."]].forEach((r, i) => {
    const y = ry0 + i * (rh + rg);
    if (i > 0) hr(s, rx, y - rg / 2, rw, C.line);
    T(s, UP(r[0]), { x: rx, y: y + 0.55, w: 1.3, h: 0.3, fontSize: 10.5, color: C.teal, charSpacing: 1.5, rotate: 270, align: "center" });
    H(s, UP(r[1]), { x: rx + 0.75, y: y + 0.28, w: rw - 0.75, h: 0.5, fontSize: 25 });
    T(s, r[2], { x: rx + 0.75, y: y + 0.82, w: rw - 0.9, h: 0.8, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.05 });
  });
  sources(s, [K("Sources  "), L("wetten.overheid.nl", "https://wetten.overheid.nl/BWBR0002093/2026-01-01"), P("  ·  "), L("gesetze-im-internet.de", "https://www.gesetze-im-internet.de/rdg/"), P("  ·  "), L("ris.bka.gv.at", "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001673&Paragraf=8"), P("  ·  "), L("rdi.nl", "https://www.rdi.nl/actueel/nieuws/2026/08/15/de-cyberbeveiligingswet-treedt-in-werking"), P("  ·  "), L("nctv.nl", "https://www.nctv.nl/onderwerpen/c/cyberbeveiligingswet/vragen-en-antwoorden")], 10.12, 0.3, 11);
}

// =====================================================================
// Slide D: Enter with NIS2. Grow with every law. (business model)
// =====================================================================
{
  const s = frame("Business model", "Enter with NIS2.", "Grow with every law.", "One evidence graph. Every new regulation is a module, every new country a pack. The second sale costs almost nothing.",
    { notes: "Prices are proposed, inside the researched ranges. The lawyer column is illustrative: 40 hours at the German standard rate of 244 euro (BRAK STAR 2024). One NIS2 applicability opinion alone sells for 3,900 euro fixed. The country pack at 600 euro is a proposal, a third of a module." });
  // stack
  const sx = M, sw = 8.3;
  const layer = (x, y, w, h, fill, title, sub, fg, fg2, price, priceSub) => {
    rr(s, x, y, w, h, fill, fill, 0.16);
    s.addText([{ text: UP(title), options: { fontFace: BOLD, bold: true, fontSize: 18, color: fg, breakLine: true } }, { text: sub, options: { fontFace: REG, fontSize: 12.5, color: fg2 } }],
      { x: x + 0.35, y: y + 0.12, w: w - 2.9, h: h - 0.24, margin: 0, isTextBox: true, valign: "top", paraSpaceAfter: 1 });
    s.addText([{ text: price, options: { fontFace: BOLD, bold: true, fontSize: 18, color: fg, breakLine: true } }, { text: priceSub, options: { fontFace: REG, fontSize: 10.5, color: fg2 } }],
      { x: x + w - 2.55, y: y + 0.12, w: 2.3, h: h - 0.24, margin: 0, isTextBox: true, valign: "top", align: "right", paraSpaceAfter: 1 });
  };
  layer(sx + 0.9, 4.85, sw - 1.8, 0.95, C.mist, "Country packs", "Same evidence, another country's rules", "2A3A3C", C.muted2, "from €600", "a year, per country");
  layer(sx + 0.45, 5.9, sw - 0.9, 1.95, C.teal, "Modules", "One law at a time", C.white, "E6EFF0", "from €1,800", "a year, per regulation");
  // chips inside the modules layer
  const chips = [["NIS2 · ENTRY", 1.45, true], ["AI Act", 0.95], ["Cyber Resilience Act", 1.95], ["DORA", 0.85], ["Data Act", 1.05], ["more", 0.8, false, true]];
  let cxp = sx + 0.45 + 0.35, cy = 6.85;
  chips.forEach((c, i) => {
    if (i === 3) { cxp = sx + 0.45 + 0.35; cy += 0.42; }
    const lit = c[2], dash = c[3];
    rr(s, cxp, cy, c[1], 0.33, lit ? C.white : "3A5C63", lit ? C.white : "5A7C83", 0.165, dash ? { line: { color: "C5D6D8", width: 0.75, dashType: "dash" }, fill: { color: C.teal } } : {});
    T(s, c[0], { x: cxp, y: cy, w: c[1], h: 0.33, fontSize: 10.5, fontFace: REG, bold: !!lit, color: lit ? C.tealDeep : dash ? "C5D6D8" : "E6EFF0", align: "center", valign: "middle" });
    cxp += c[1] + 0.12;
  });
  layer(sx, 7.95, sw, 0.95, C.ink, "Platform", "Evidence graph, adviser, GDPR included", C.white, "B9C4C2", "€1,800 to 7,200", "a year, by company size");
  T(s, "Built once. Every layer above reuses it.", { x: sx, y: 8.98, w: sw, h: 0.28, fontSize: 11, color: C.muted, align: "center" });
  // comparison
  const qx = sx + sw + 0.6, qw = 2.4, cw2 = (R - qx - qw - 2 * 0.15) / 2, c1 = qx + qw + 0.15, c2 = c1 + cw2 + 0.15;
  T(s, UP("Today, with lawyer hours"), { x: c1 + 0.2, y: 4.75, w: cw2, h: 0.28, fontSize: 10.5, color: C.muted, charSpacing: 1.5 });
  T(s, UP("With Regulift"), { x: c2 + 0.2, y: 4.75, w: cw2, h: 0.28, fontSize: 10.5, color: C.tealDeep, charSpacing: 1.5 });
  const rows = [["First law, first country", "about €9,800", "40 lawyer hours, one-off.", "€5,400 a year", "Platform plus NIS2, mid-size company.", C.ink],
    ["Every new law", "again €9,800", "Same fact-finding again.", "+ €1,800", "Same evidence, new rules.", C.teal],
    ["Every new country", "again €9,800", "New firm, new review.", "+ €600", "Same evidence, new country.", C.teal]];
  rows.forEach((r, i) => {
    const y = 5.12 + i * 1.33, h = 1.18;
    H(s, r[0], { x: qx + 0.15, y, w: qw - 0.2, h, fontSize: 14.5, valign: "middle" });
    rr(s, c1, y, cw2, h, C.grey, C.grey, 0.14);
    s.addText([{ text: r[1], options: { fontFace: BOLD, bold: true, fontSize: 21, color: "4A4D4A", breakLine: true } }, { text: r[2], options: { fontFace: REG, fontSize: 12, color: "5A5D5A" } }], { x: c1 + 0.3, y, w: cw2 - 0.5, h, margin: 0, isTextBox: true, valign: "middle", paraSpaceAfter: 2 });
    rr(s, c2, y, cw2, h, r[5], r[5], 0.14);
    s.addText([{ text: r[3], options: { fontFace: BOLD, bold: true, fontSize: 21, color: C.white, breakLine: true } }, { text: r[4], options: { fontFace: REG, fontSize: 12, color: "E6EFF0" } }], { x: c2 + 0.3, y, w: cw2 - 0.5, h, margin: 0, isTextBox: true, valign: "middle", paraSpaceAfter: 2 });
  });
  // claim band
  rr(s, M, 9.32, CW, 0.72, C.mist, C.mist, 0.16);
  T(s, UP("Why it matters"), { x: M + 0.35, y: 9.32, w: 2.2, h: 0.72, fontSize: 10.5, color: C.tealDeep, fontFace: BOLD, bold: true, charSpacing: 1.5, valign: "middle" });
  H(s, "Compliance that gets cheaper with every law and every border makes European companies more competitive.", { x: M + 2.6, y: 9.32, w: CW - 2.9, h: 0.72, fontSize: 15, valign: "middle" });
  sources(s, [K("Prices proposed.  "), P("Companies pay; law firms use the workspace free, sign where the law requires it, no fee per mandate or fee share. Lawyer column illustrative: 40 hours at the German standard rate of €244 (BRAK STAR 2024, "), L("beck-aktuell.de", "https://www.beck-aktuell.de/rechtsbranche/anwaltschaft/brak-star-umfrage-statistik-anwaltschaft-maenner-frauen-unterschiede-einkommen-2026-02-10"), P("); Dutch average €241 (Knab 2026). One NIS2 applicability opinion alone: €3,900 fixed ("), L("srd-rechtsanwaelte.de", "https://www.srd-rechtsanwaelte.de/nis2-anwendbarkeit-pruefen"), P(").")], 10.1, 0.4, 8.5);
}

// =====================================================================
// Slide E: Why us
// =====================================================================
{
  const s = frame("Team", "Why", "us.", "We have met this problem at work. Now we build the way out of it.",
    { notes: "Founder-problem fit: Andreas builds the kind of system the product is; Simone owns customers and partners, which is what year one needs. Stage: live website, designed collector, researched legal map, legal model under verification, no customer yet, no firm signed." });
  const cw = (CW - 0.4) / 2, cy = 4.75, ch = 4.25;
  const card = (x, img, k, name, role, body) => {
    rr(s, x, cy, cw, ch, C.white, C.line, 0.2);
    const ph = ch - 0.7, pw = ph * 504 / 678;
    s.addImage({ path: path.join(A, img), x: x + 0.35, y: cy + 0.35, w: pw, h: ph, rounding: false });
    const tx = x + 0.35 + pw + 0.45, tw = cw - (tx - x) - 0.4;
    T(s, UP(k), { x: tx, y: cy + 0.75, w: tw, h: 0.3, fontSize: 10.5, color: C.muted, charSpacing: 1.5 });
    H(s, UP(name), { x: tx, y: cy + 1.05, w: tw, h: 0.5, fontSize: 22 });
    T(s, role, { x: tx, y: cy + 1.55, w: tw, h: 0.35, fontSize: 13.5, fontFace: BOLD, bold: true, color: C.tealDeep });
    T(s, body, { x: tx, y: cy + 2.0, w: tw, h: 1.9, fontSize: 14.5, color: C.text, lineSpacingMultiple: 1.08 });
  };
  card(M, "andreas.png", "Builds the product", "Andreas Herzinger", "Product & engineering", "Builds AI integrations for companies: secure connectors, data to LLM, RAG in production. Has seen how compliance turns every integration into a legal question. The evidence graph is his craft.");
  card(M + cw + 0.4, "simone.png", "Builds the market", "Simone Mattioli", "AI & product development", "Customers, partners and discovery. EIT Digital Master School. The first year is interviews, one Dutch firm and two design partners, which is his ground.");
  rr(s, M, 9.25, CW, 0.95, C.ink, C.ink, 0.16);
  T(s, UP("Why we do it"), { x: M + 0.35, y: 9.25, w: 2.2, h: 0.95, fontSize: 10.5, fontFace: BOLD, bold: true, color: "B9C4C2", charSpacing: 1.5, valign: "middle" });
  T(s, "We are a European generation that wants to bring something forward. Cheaper compliance makes Europe's companies more competitive, and we bring the professional experience to make it happen.", { x: M + 2.6, y: 9.25, w: CW - 2.9, h: 0.95, fontSize: 14.5, color: C.white, valign: "middle" });
}

(async () => { await pres.writeFile({ fileName: OUT }); await applyTheme(OUT, THEME); console.log("written", OUT); })().catch(e => { console.error(e); process.exit(1); });
