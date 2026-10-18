// Two strategy slides: market analysis (scored table) and the first-market decision.
// Canvas 20 x 11.25 in, the size of Simone's presentation.pptx, so the slides drop into it.
// Style: website tokens (paper, ink, mist, Geist, sentence case) with the reference deck's
// structure (small kicker, big title with a period, grey lead, rounded cards, one dark card).
const pptxgen = require("pptxgenjs");
const { applyTheme } = require(process.env.PPTX_SKILL + "/scripts/apply_theme.js");

const OUT = process.env.OUT || "market-slides.pptx";
const T = { paper: "F6F4EE", white: "FCFBF8", ink: "1C2B2F", ink2: "55676B", muted: "8A9A9D", line: "E3E0D7", line2: "CFD6D3", mist: "E7EDEC", teal: "3E6670" };
const THEME = { name: "Regulift", headFontFace: "Geist", bodyFontFace: "Geist",
  colors: { dk1: T.ink, lt1: T.paper, dk2: T.ink2, lt2: T.mist, accent1: T.teal, accent2: T.muted, accent3: T.line, accent4: T.line2, accent5: T.white, accent6: T.teal, hlink: T.teal, folHlink: T.ink2 } };
const HEAD = "Geist Medium", BODY = "Geist";

const pres = new pptxgen();
pres.defineLayout({ name: "SIMONE", width: 20, height: 11.25 });
pres.layout = "SIMONE";
pres.theme = { headFontFace: "Geist", bodyFontFace: "Geist" };
pres.author = "Simone Mattioli, Andreas Herzinger"; pres.company = "Regulift"; pres.title = "Regulift. Market analysis.";

const W = 20, M = 1.25, CW = W - 2 * M;
pres.defineSlideMaster({ title: "CONTENT", background: { color: T.paper }, objects: [
  { text: { text: "regulift", options: { x: M, y: 10.78, w: 3, h: 0.35, fontFace: HEAD, fontSize: 15, color: T.ink, margin: 0, isTextBox: true } } },
  { text: { text: "Regulation, lifted.", options: { x: M + 1.45, y: 10.78, w: 4, h: 0.35, fontFace: BODY, fontSize: 12, color: T.muted, margin: 0, isTextBox: true } } },
] });

const tb = (s, text, o) => s.addText(text, Object.assign({ fontFace: BODY, fontSize: 16, color: T.ink2, margin: 0, isTextBox: true, valign: "top" }, o));
const head = (s, text, o) => s.addText(text, Object.assign({ fontFace: HEAD, fontSize: 22, color: T.ink, margin: 0, isTextBox: true, valign: "top" }, o));
const rrect = (s, x, y, w, h, fill, line, r) => s.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: fill }, line: line ? { color: line, width: 0.75 } : { color: fill, width: 0 }, rectRadius: r || 0.12 });
const arrow = (s, x0, y0, x1, y1, c) => s.addShape(pres.ShapeType.line, { x: Math.min(x0, x1), y: Math.min(y0, y1), w: Math.abs(x1 - x0), h: Math.abs(y1 - y0), flipH: x1 < x0, flipV: y1 < y0, line: { color: c || T.ink2, width: 1.25, endArrowType: "triangle" } });
const rule = (s, x, y, w, c) => s.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: c || T.line, width: 0.75 } });

function frame(kicker, kicker2, title, lead, notes) {
  const s = pres.addSlide({ masterName: "CONTENT" });
  tb(s, kicker, { x: M, y: 0.85, w: 9, h: 0.4, fontSize: 15, color: T.ink2 });
  tb(s, kicker2, { x: W - M - 9, y: 0.85, w: 9, h: 0.4, fontSize: 15, color: T.ink2, align: "right" });
  rule(s, M, 1.35, CW, T.line);
  head(s, title, { x: M, y: 1.6, w: CW, h: 1.05, fontSize: 54, charSpacing: -1.5 });
  tb(s, lead, { x: M, y: 2.7, w: CW - 3.6, h: 0.4, fontSize: 18, color: T.ink2 });
  if (notes) s.addNotes(notes);
  return s;
}

// ---------- slide 1: analysis ----------
const CRIT = [
  { name: "Adviser legal", sub: "software answers directly" },
  { name: "Market size", sub: "firms with 50 or more staff" },
  { name: "Savings potential", sub: "lawyer prices" },
  { name: "Trigger freshness", sub: "NIS2 window, enforcement" },
];
const ROWS = [ // sorted by total, ties broken by the gate score, then name; Switzerland last as outside the EU
  { c: "Netherlands", st: "open", s: [5, 4, 4, 5] },
  { c: "Sweden", st: "open", s: [5, 3, 5, 4] },
  { c: "Germany", st: "closed", s: [2, 5, 4, 4] },
  { c: "Belgium", st: "open", s: [5, 3, 3, 3] },
  { c: "Italy", st: "partly", s: [3, 5, 2, 4] },
  { c: "Austria", st: "closed", s: [1, 3, 5, 5] },
  { c: "Denmark", st: "open", s: [5, 2, 3, 3] },
  { c: "Finland", st: "open", s: [5, 2, 2, 3] },
  { c: "Poland", st: "open", s: [5, 4, 1, 2] },
  { c: "Switzerland", st: "outside EU", s: [5, 3, 5, 1] },
];
ROWS.forEach(r => r.t = r.s.reduce((a, b) => a + b, 0));

function analysis(callout) {
  const s = frame("Market analysis. Ten countries, four criteria.", "Scores from the October 2026 research and the legal verification of 18 October",
    "Four criteria. One is a gate.",
    "",
    "This is the analysis before the decision. Ten candidate markets: the eight where software may give company-specific legal answers, plus Germany and Austria for comparison. Five criteria, each scored one to five on sourced facts, unweighted. Read the first column: in the Netherlands, the Nordics, Poland and Belgium the adviser may speak as Regulift's own output. In Austria even legal information is reserved to lawyers; in Germany only generic rule-based output is safe. Germany and Italy score high on size, but the adviser would have to speak as the partner firm there. Switzerland scores but sits outside the EU, NIS2, the AI Act and the Lab. Sources: FILES/research-countries.md and FILES/research-legal-*.md.");
  const cx = [M, M + 3.6, M + 6.4, M + 9.2, M + 12.0, M + 14.8]; // country, 4 criteria, total
  const cw = 2.6, ty = 3.2;
  // the gate band behind the first criterion, header to last row
  const rh = 0.46, gap = 0.06, y0 = ty + 0.85;
  const bandX = cx[1] - 0.15, bandW = 2.55, bandY = ty - 0.42, bandH = y0 + 9 * (rh + gap) + rh + 0.1 - bandY;
  rrect(s, bandX, bandY, bandW, bandH, T.mist, null, 0.1);
  s.addShape(pres.ShapeType.line, { x: bandX + bandW + 0.08, y: bandY, w: 0, h: bandH, line: { color: T.line2, width: 0.75 } });
  tb(s, "The gate", { x: cx[1], y: ty - 0.36, w: 1.9, h: 0.3, fontSize: 11.5, fontFace: HEAD, color: T.ink });
  tb(s, "Ranking criteria", { x: cx[2], y: ty - 0.36, w: 4, h: 0.3, fontSize: 11.5, color: T.muted });
  if (callout) {
    const kx = W - M - 3.3, ky = 1.55, kw = 3.3, kh = 1.15;
    rrect(s, kx, ky, kw, kh, T.ink, T.ink, 0.12);
    head(s, "7 of 10", { x: kx + 0.3, y: ky + 0.18, w: kw - 0.6, h: 0.5, fontSize: 30, color: T.paper, charSpacing: -1 });
    tb(s, "pass the gate. Italy partly, Germany and Austria only through the firm.", { x: kx + 0.3, y: ky + 0.66, w: kw - 0.6, h: 0.45, fontSize: 11.5, color: "B7C4C7" });
  }
  // header
  tb(s, "Country", { x: cx[0] + 0.3, y: ty, w: 3.0, h: 0.35, fontSize: 14, fontFace: HEAD, color: T.ink });
  CRIT.forEach((c, i) => {
    s.addText([{ text: c.name + " " }, { text: String(i + 1), options: { superscript: true, color: T.ink2 } }], { x: cx[i + 1], y: ty, w: cw, h: 0.35, fontSize: 14, fontFace: HEAD, color: T.ink, margin: 0, isTextBox: true, valign: "top" });
    tb(s, c.sub, { x: cx[i + 1], y: ty + 0.33, w: cw, h: 0.3, fontSize: 11.5, color: T.muted });
  });
  tb(s, "Total", { x: cx[5], y: ty, w: 2.7, h: 0.35, fontSize: 14, fontFace: HEAD, color: T.ink });
  tb(s, "of 20", { x: cx[5], y: ty + 0.33, w: 2.7, h: 0.3, fontSize: 11.5, color: T.muted });
  rule(s, M, ty + 0.72, CW, T.ink);
  // rows
  let rank = 0;
  ROWS.forEach((r, i) => {
    const y = y0 + i * (rh + gap);
    const top = i === 0, closed = r.st === "closed", eu = r.st !== "outside EU";
    const fg = top ? T.paper : closed ? T.ink2 : T.ink, dim = top ? "8FA3A8" : T.muted;
    rrect(s, M, y, CW, rh, top ? T.ink : T.white, top ? T.ink : T.line, 0.1);
    s.addShape(pres.ShapeType.rect, { x: bandX, y, w: bandW, h: rh, fill: { color: top ? "2E4147" : T.mist }, line: { color: top ? "2E4147" : T.mist, width: 0 } });
    if (eu) rank++;
    tb(s, eu ? rank + "." : "", { x: M + 0.3, y: y + 0.11, w: 0.5, h: 0.3, fontSize: 15, color: dim });
    tb(s, r.c, { x: M + 0.75, y: y + 0.09, w: 1.9, h: 0.32, fontSize: 17, fontFace: HEAD, color: fg });
    if (!eu) tb(s, "outside EU", { x: M + 0.75 + 1.45, y: y + 0.14, w: 1.2, h: 0.3, fontSize: 11.5, color: T.muted });
    // scores with dot meters
    r.s.forEach((v, k) => {
      const x = cx[k + 1];
      tb(s, String(v), { x, y: y + 0.08, w: 0.4, h: 0.34, fontSize: 18, fontFace: HEAD, color: fg });
      for (let d = 0; d < 5; d++) {
        s.addShape(pres.ShapeType.ellipse, { x: x + 0.5 + d * 0.2, y: y + 0.19, w: 0.12, h: 0.12,
          fill: { color: d < v ? (top ? T.paper : closed ? T.muted : T.ink) : (top ? "3A4D53" : T.line) }, line: { color: d < v ? (top ? T.paper : closed ? T.muted : T.ink) : (top ? "3A4D53" : T.line), width: 0 } });
      }
    });
    // total with bar
    tb(s, String(r.t), { x: cx[5], y: y + 0.07, w: 0.6, h: 0.36, fontSize: 20, fontFace: HEAD, color: fg });
    const bx = cx[5] + 0.75, bw = 1.65;
    rrect(s, bx, y + 0.21, bw, 0.09, top ? "3A4D53" : T.line, null, 0.04);
    rrect(s, bx, y + 0.21, bw * r.t / 20, 0.09, top ? T.paper : closed ? T.line2 : T.teal, null, 0.04);
  });
  // sources: one index per criterion, site links only, full citations in the research files
  const L = (t, url) => ({ text: t, options: { hyperlink: { url }, color: T.muted } });
  const K = t => ({ text: t, options: { fontFace: HEAD, color: T.muted } });
  const P = t => ({ text: t });
  const BR = { text: "", options: { breakLine: true } };
  const runs = [
    K("1  Adviser legal  "), P("NL "), L("wetten.overheid.nl", "https://wetten.overheid.nl/BWBR0002093/2026-01-01"), P("  SE "), L("riksdagen.se", "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1985354-om-forbud-mot-juridiskt-eller_sfs-1985-354/"), P("  DK "), L("retsinformation.dk", "https://www.retsinformation.dk/eli/lta/2025/1298/pdf"), P("  FI "), L("finlex.fi", "https://opendata.finlex.fi/finlex/avoindata/v1/akn/fi/act/statute-consolidated/1958/496/fin@20250543"), P("  PL "), L("sejm.gov.pl", "https://api.sejm.gov.pl/eli/acts/DU/2026/1290/text.pdf"), P("  BE "), L("ejustice.just.fgov.be", "https://www.ejustice.just.fgov.be/eli/loi/1967/10/10/1967101053/justel"), P("  CH "), L("fedlex.admin.ch", "https://www.fedlex.admin.ch/eli/cc/2002/153/de"), P("  DE "), L("gesetze-im-internet.de", "https://www.gesetze-im-internet.de/rdg/"), P(", "), L("bundesgerichtshof.de", "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2021/2021171.html"), P("  IT "), L("normattiva.it", "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art2"), P("  AT "), L("ris.bka.gv.at", "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001673&Paragraf=8"), BR,
    K("2  Market size  "), P("Eurostat sbs_sc_ovw 2024 "), L("ec.europa.eu/eurostat", "https://ec.europa.eu/eurostat/databrowser/view/sbs_sc_ovw/default/table"), P("  CH "), L("bfs.admin.ch", "https://dam-api.bfs.admin.ch/hub/api/dam/assets/36734571/master"), BR,
    K("3  Savings potential  "), P("Eurostat sbs_ovw_act, tps00001 "), L("ec.europa.eu/eurostat", "https://ec.europa.eu/eurostat/databrowser/view/sbs_ovw_act/default/table"), P("  BE, IT, PL "), L("e-justice.europa.eu", "https://e-justice.europa.eu/topics/taking-legal-action/where-and-how/costs_en"), P(" (2007)"), BR,
    K("4  Trigger freshness  "), P("NL "), L("rdi.nl", "https://www.rdi.nl/actueel/nieuws/2026/08/15/de-cyberbeveiligingswet-treedt-in-werking"), P("  SE "), L("riksdagen.se", "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/"), P("  DK "), L("retsinformation.dk", "https://www.retsinformation.dk/eli/lta/2025/434"), P("  FI "), L("finlex.fi", "https://www.finlex.fi/fi/lainsaadanto/2025/124"), P("  PL "), L("sejm.gov.pl", "https://api.sejm.gov.pl/eli/acts/DU/2026/252"), P("  DE "), L("bsi.bund.de", "https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251205_NIS-2-Umsetzungsgesetz_in_Kraft.html"), P("  IT "), L("gazzettaufficiale.it", "https://www.gazzettaufficiale.it/eli/id/2024/10/01/24G00155/sg"), P("  AT "), L("ris.bka.gv.at", "https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40273890/NOR40273890.pdf"), P("  EU "), L("digital-strategy.ec.europa.eu", "https://digital-strategy.ec.europa.eu/en/policies/nis-transposition"), BR,
  ];
  s.addText(runs, { x: M, y: 9.35, w: CW, h: 1.1, fontFace: BODY, fontSize: 9.5, color: T.muted, margin: 0, isTextBox: true, valign: "top", paraSpaceAfter: 3 });
}
analysis(false);

// ---------- slide 2: the entry path ----------
{
  const s = frame("Market entry. The path.", "Seat in Austria, pilots from Budapest",
    "Enter open. Grow north. Win Germany.", "",
    "The path follows the gate. We enter where the adviser is legal and the NIS2 trigger is live: the Netherlands first, then Sweden through one firm that covers the Nordics. Germany is the end goal and a hard market, so we do not arrive cold. Our Dutch and Swedish customers take their Expand pack to Germany, which brings the first German partner firm its first mandates. That firm signs the third layer, the adviser handles the first two under the Smartlaw safe harbour, and only then do we sell in Germany firm-led. NIS2 is the wedge in every column because it is the only law with a live national trigger in all three, and the only one whose rule set differs per country. The AI Act follows as the second module from the first quarter of 2027.");
  const STAGES = [
    { n: "01  Enter", c: "Netherlands", when: "2027, first half", dark: false, pill: "adviser legal",
      trig: "NIS2 live since 15 Aug 2026. Registration open, about 8,000 entities.",
      need: "One Dutch firm. 15 interviews. Two design partners." },
    { n: "02  Grow", c: "Sweden", when: "2027, second half", dark: false, pill: "adviser legal",
      trig: "NIS2 live since 15 Jan 2026. One firm for Sweden, Denmark, Finland.",
      need: "One Swedish firm. First Expand pack, Netherlands to Sweden." },
    { n: "03  Win", c: "Germany", when: "2028", dark: true, pill: "adviser gated, firm signs",
      trig: "NIS2 live since 6 Dec 2025. 20,141 registered. 80,043 firms with 50 or more staff.",
      need: "One German firm. German NIS2 rule set as the second Expand pack.",
      path: ["Arrive with customers", "Arrive with a firm", "Then sell, firm-led"] },
  ];
  // the wedge, said once
  tb(s, "Wedge: NIS2, live in all three markets.  Second module: AI Act, from Q1 2027.  Base: GDPR.", { x: M, y: 2.85, w: CW - 6, h: 0.35, fontSize: 14, color: T.ink2 });
  tb(s, "Seat in Austria, pilots from Budapest", { x: W - M - 6, y: 2.85, w: 6, h: 0.35, fontSize: 14, color: T.ink2, align: "right" });
  const y0 = 3.45, h = 6.15, gap = 0.4, cw = (CW - 2 * gap) / 3, pad = 0.45;
  STAGES.forEach((st, i) => {
    const x = M + i * (cw + gap), d = st.dark;
    rrect(s, x, y0, cw, h, d ? T.ink : T.mist, d ? T.ink : T.mist, 0.18);
    const fg = d ? T.paper : T.ink, fg2 = d ? "B7C4C7" : T.ink2, mu = d ? "8FA3A8" : T.muted;
    tb(s, st.n, { x: x + pad, y: y0 + 0.4, w: cw - 2 * pad, h: 0.3, fontSize: 13, color: mu });
    tb(s, st.when, { x: x + pad, y: y0 + 0.4, w: cw - 2 * pad, h: 0.3, fontSize: 13, color: mu, align: "right" });
    head(s, st.c, { x: x + pad, y: y0 + 0.75, w: cw - 2 * pad, h: 0.6, fontSize: 30, color: fg });
    // adviser pill
    const pw = d ? 2.6 : 1.7, py = y0 + 1.55;
    rrect(s, x + pad, py, pw, 0.36, d ? "2E4147" : T.white, d ? "2E4147" : T.line2, 0.18);
    tb(s, st.pill, { x: x + pad, y: py, w: pw, h: 0.36, fontSize: 12, color: d ? T.paper : T.ink, align: "center", valign: "middle" });
    // trigger and needs
    rule(s, x + pad, y0 + 2.35, cw - 2 * pad, d ? "4A5E64" : T.line2);
    tb(s, "Trigger", { x: x + pad, y: y0 + 2.47, w: cw - 2 * pad, h: 0.28, fontSize: 11, color: mu });
    tb(s, st.trig, { x: x + pad, y: y0 + 2.75, w: cw - 2 * pad, h: 0.75, fontSize: 14, fontFace: HEAD, color: fg });
    rule(s, x + pad, y0 + 3.6, cw - 2 * pad, d ? "4A5E64" : T.line2);
    tb(s, "We need", { x: x + pad, y: y0 + 3.72, w: cw - 2 * pad, h: 0.28, fontSize: 11, color: mu });
    tb(s, st.need, { x: x + pad, y: y0 + 4.0, w: cw - 2 * pad, h: 0.7, fontSize: 13.5, color: fg2 });
    if (st.path) {
      rule(s, x + pad, y0 + 4.7, cw - 2 * pad, "4A5E64");
      tb(s, "The path in", { x: x + pad, y: y0 + 4.82, w: cw - 2 * pad, h: 0.28, fontSize: 11, color: mu });
      st.path.forEach((t, k) => {
        tb(s, (k + 1) + "   " + t, { x: x + pad, y: y0 + 5.1 + k * 0.33, w: cw - 2 * pad, h: 0.32, fontSize: 13.5, fontFace: HEAD, color: T.paper });
      });
    }
  });
  const py = y0 + h, ph = 0;
  // sources, indexed, official only
  const L = (t, url) => ({ text: t, options: { hyperlink: { url }, color: T.muted } });
  const K = t => ({ text: t, options: { fontFace: HEAD, color: T.muted } });
  const P = t => ({ text: t });
  s.addText([
    K("1  Netherlands  "), L("rdi.nl", "https://www.rdi.nl/actueel/nieuws/2026/08/15/de-cyberbeveiligingswet-treedt-in-werking"), P("  "), L("wetten.overheid.nl", "https://wetten.overheid.nl/BWBR0002093/2026-01-01"),
    K("     2  Sweden  "), L("riksdagen.se", "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/cybersakerhetslag-20251506_sfs-2025-1506/"),
    K("     3  Germany  "), L("bsi.bund.de", "https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251205_NIS-2-Umsetzungsgesetz_in_Kraft.html"), P("  "), L("bundesgerichtshof.de", "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2021/2021171.html"), P("  "), L("gesetze-im-internet.de", "https://www.gesetze-im-internet.de/rdg/"), P("  "), L("ec.europa.eu/eurostat", "https://ec.europa.eu/eurostat/databrowser/view/sbs_sc_ovw/default/table"),
  ], { x: M, y: py + 0.25, w: CW, h: 0.3, fontFace: BODY, fontSize: 9.5, color: T.muted, margin: 0, isTextBox: true, valign: "top" });
}

(async () => { await pres.writeFile({ fileName: OUT }); await applyTheme(OUT, THEME); console.log("written", OUT); })().catch(e => { console.error(e); process.exit(1); });
