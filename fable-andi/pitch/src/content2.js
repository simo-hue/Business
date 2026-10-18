// Copy and numbers for the Pitch-template version. Every figure carries its source.
module.exports = {
  cover: {
    title: "Compliance,\nlifted by AI.",
    sub: "EIT Community AI Entrepreneurs Lab 2026\nApplication deck, October 2026. Simone Mattioli and Andreas Herzinger",
    notes: "One line to open: Regulift reads a company's systems from the inside, prepares the evidence, and brings partner lawyers into the same workspace, so compliance costs less. Everything that follows is sourced.",
  },
  problem: {
    title: "Companies pay twice: once for tools, once for lawyers to find the facts",
    cards: [
      { title: "Too much to prove", body: "Five EU laws land on the same companies within four years: GDPR, NIS2, the AI Act, DORA and the Cyber Resilience Act. Small suppliers meet them through their customers: 63% of NIS2-covered organisations require security standards from suppliers, 48% write them into contracts." },
      { title: "Too expensive to show", body: "Before a lawyer can advise, someone has to establish what the company runs. Fact-finding tasks are 19 to 23% of lawyers' invoiced hours, at about €244 an hour in Germany. A first readiness review often starts with a quote of forty hours just to understand the setup." },
    ],
    source: "Sources: EUR-Lex texts, read 18 Oct 2026. ENISA NIS Investments 2025, p. 26. Remus and Levy, Georgetown Journal of Legal Ethics 30 (2017), Table 1. BRAK STAR survey 2024 via beck-aktuell, Feb 2026.",
    notes: "The problem is not that rules exist. It is that proving compliance is discovery work billed by the hour, repeated for every law and every customer questionnaire.",
  },
  stats: {
    title: "The cost of falling behind is rising",
    cards: [
      { value: "$240B", label: "worldwide information security spending forecast for 2026, up 12.5% in one year (Gartner)" },
      { value: "20,141", label: "NIS2 entities registered in Germany by 30 September 2026, against about 29,500 the BSI expects" },
      { value: "€1.2B", label: "GDPR fines issued by European regulators in 2025, €7.1 billion since 2018 (DLA Piper)" },
      { value: "2027", label: "AI Act high-risk duties apply from 2 December 2027 (Regulation (EU) 2026/1744). CRA reporting already applies since 11 Sep 2026" },
    ],
    source: "Sources: Gartner press release, Jul 2025. BSI registration figures, Sep 2026. DLA Piper GDPR fines and data breach survey, Jan 2026. Regulation (EU) 2026/1744, OJ L 24 Jul 2026. Regulation (EU) 2024/2847, Art. 14.",
    notes: "Four numbers, four primary sources. Spending rises, registrations are real, fines are real, and the next deadline is dated.",
  },
  solution: {
    kicker: "The solution",
    title: "Regulift reads your systems from the inside and turns them into evidence a lawyer can sign.",
    notes: "Others ask the company what it does. We read it, read-only, and hand the lawyer the facts already organised.",
  },
  ai: {
    title: "AI at the core",
    lead: "Remove the AI and there is no product: machines reading systems at scale is what makes inside-out possible. The moat is the evidence graph we build per company, the lawyer-authored rule base, and the law-firm network.",
    cards: [
      { title: "Read", body: "Agents connect to repositories, cloud accounts, HR and CRM tools through MCP servers with read-only scopes. They identify services, models, processors and data flows and write a context report. One named representative approves it before anything leaves the company." },
      { title: "Map", body: "Language models map the approved report onto obligations: which flow is a transfer, which model decides about people, which service is a NIS2 supplier. Which obligations apply is decided by deterministic rules written by partner lawyers, the logic the German Federal Court protected in Smartlaw." },
      { title: "Confirm", body: "Every finding links to its evidence. Gaps become ranked actions; most close without a lawyer. Grey-zone questions route to a partner law firm, which opens the same workspace and confirms compliance in writing. Advice comes from a lawyer, never from a model." },
    ],
    source: "Sources: BGH, 9 Sep 2021, I ZR 113/20 (Smartlaw). Model Context Protocol specification. Regulation (EU) 2024/1689, Art. 6 and Annex III.",
    notes: "Centrality and defensibility are a third of the Stage 1 score. Centrality: the collector is the product. Defensibility: per-company evidence graph, lawyer-authored rules, the firm network. The two-layer split also keeps us lawful in Germany and France, where software may not give individual legal advice.",
  },
  flow: {
    title: "Context leaves. Your data stays.",
    lead: "The collector writes a report about what you run and where data flows, never the records themselves. Your representative approves it. Only then does it reach the Regulift platform, which builds the inventory, the gap list and the evidence pack for your lawyer.",
    source: "Diagram from the Regulift website. The approval step is a product rule, not an option.",
    notes: "This answers the first CTO question: what leaves my company. A report about technologies, flows and vendors. No records, no file contents, no credentials, and nothing until one person on their side approves.",
  },
  market: {
    title: "A European market built by regulation",
    points: [
      "TAM: global GRC software, $4.98 billion in 2023 to $9.08 billion by 2029 (Verdantix). Security spending overall reaches $240 billion in 2026 (Gartner).",
      "SAM: 23,370 EU software firms with 20 to 249 staff (Eurostat NACE J62, 2024) at our €10,000 average yearly price.",
      "SOM: 1,200 companies by 2029, one percent of the 119,784 firms with 50 or more staff in Austria, Germany and Italy, at €14,000 a year.",
      "SAM and SOM are our estimates from Eurostat counts and our price bands, to validate in pilots.",
    ],
    tam: { value: "$9.1B", label: "TAM, GRC software 2029" }, sam: { value: "€230M", label: "SAM, EU software firms" }, som: { value: "€17M", label: "SOM, first three markets" },
    source: "Sources: Verdantix GRC software forecast, Jan 2025. Gartner, Jul 2025. Eurostat sbs_sc_ovw 2024 (J62 and all sectors, Austria, Germany, Italy). Price bands from the pricing research, Oct 2026.",
    notes: "The TAM is a named analyst figure. SAM and SOM are counts times our price, labelled as estimates. The point for the jury: the serviceable market is thousands of companies that have no compliance department and now face three to five laws.",
  },
  fit: {
    title: "Where Regulift fits",
    lead: "We reviewed twelve vendors' public materials. Everyone asks the company to fill in frameworks and questionnaires. Nobody reads the company's systems, and nobody puts a lawyer's written confirmation inside the product.",
    cards: [
      { icon: "users", title: "Consultancies", body: "Experts in the loop, outside-in: questionnaires, interviews and a report that is out of date the week after. Examples: DataGuard, heyData, Secjur. Lawyer sign-off only at extra cost." },
      { icon: "grid", title: "Control platforms", body: "Built for enterprises with compliance teams, US-centric, priced per framework. The median Vanta buyer pays USD 20,000 a year for one framework (Vendr, 374 purchases). Examples: Vanta, Drata, OneTrust." },
      { icon: "arrow", title: "Regulift", body: "Inside-out: reads the real systems, read-only, approved by the company. GDPR, NIS2 and the AI Act in one view, stays current, partner lawyers inside the workspace. €9,000 to €18,000 a year for three to four regulations." },
    ],
    source: "Sources: Regulift market scan of twelve vendors' public materials, 14 Oct 2026. Vendr marketplace data, Feb 2026. Closest single players: Justima (law-firm-backed) and Norm Ai (US finance only).",
    notes: "The two closest players each hold one piece: Justima has the law firm, Norm Ai has lawyer-supervised agents for US finance. Nobody starts from the company's systems, and that is the row that changes every other row.",
  },
  model: {
    title: "Business model",
    lead: "Three layers. The company pays a yearly platform fee by size, adds a module per regulation, and picks a partner law firm from a list. The firm bills its own work. Per-framework pricing is the market norm; a fee per legal mandate is unlawful in our first markets, so there is none.",
    tiers: [
      { title: "Platform", price: "€3,600 to €14,400 a year", who: "By company size, GDPR included", items: ["10 to 49 staff €3,600, 50 to 249 €7,200, 250 to 1,000 €14,400", "Read-only connectors, context report, inventory", "GDPR module and the evidence pack"] },
      { title: "Modules", price: "€1,800 to €6,000 per regulation a year", who: "AI Act, NIS2, DORA, CRA", items: ["Each adds its gap list and evidence pack", "A mid-sized company with three modules: €14,400 to €18,000", "StartComply charges €4,500 per framework; Drata USD 7,500"] },
      { title: "Partner law firms", price: "Flat yearly workspace fee", who: "Same for every firm, never per mandate", items: ["The client chooses the firm, the firm bills directly", "No share of fees: forbidden in DE, AT, IT, FR (BGH IX ZR 89/23)", "Firms author the rules and confirm in writing"] },
    ],
    source: "Sources: Vendr, Feb 2026. Vanta and Drata AWS Marketplace listings and StartComply pricing, Oct 2026. BRAO §49b(3), BGH IX ZR 89/23, ÖRAK RL-BA §47, Italian CDF art. 37, French RIN art. 11.3. Tier prices are our proposal.",
    notes: "Mid tier 9 to 18 thousand euros sits between StartComply at 10,500 for two frameworks and Vanta at 20 to 40 thousand dollars for one framework at this size. The lawyer layer is where juries probe: we checked the bar rules in five countries, so the firm pays a flat workspace fee and the client chooses the firm. The level of that fee comes from pilot talks.",
  },
  team: {
    title: "Founders who met the problem at work",
    caption: "Simone Mattioli and Andreas Herzinger, EIT Digital Master School, Budapest",
    points: [
      "Andreas Herzinger, product and engineering: freelance AI engineer building AI integrations for SMEs, MCP servers, secure connections between company data and language models, RAG systems in production. That work is the collector.",
      "Simone Mattioli, customers and partners: EIT Digital Master School, leads discovery, partner law firms and this application.",
      "The problem found us: every SME integration started with the same unanswered compliance questions.",
      "Honest stage: live website, designed collector architecture, researched regulations, countries and pricing with primary sources. No customers and no signed firm yet; the plan on the next slide is built to change that.",
    ],
    notes: "Founder-problem fit is a third of the Stage 1 score. Andreas built the exact integrations the collector needs for the exact companies we target. Simone owns the commercial side. Say what each of you does personally in the first thirty days.",
  },
  ask: {
    title: "The ask",
    body: "A place in the five-day Entrepreneurs Lab cohort to test the inside-out model with customers, founders and investors, and to meet partner law firms in Paris, Brussels and Amsterdam. The €10,000 award would fund the legal review budget of the first two pilots, so a partner firm's hours are paid and the hour reduction is measured, plus the next collector connectors.",
    steps: [
      { when: "Q4 2026", title: "Lab and prototype", body: "15 discovery interviews in Austria and Budapest, letter of intent from one Vienna law firm, collector prototype on GitHub and one cloud provider" },
      { when: "Q1 2027", title: "Design partners", body: "Two companies connect real systems, approval and sync end to end, first evidence pack confirmed in writing, hours measured against the firm's quote" },
      { when: "Q2 2027", title: "Austria launch", body: "NIS2 and AI Act modules live on top of GDPR, ten paying pilots, second law firm, aws Preseed application (up to €89,000)" },
      { when: "H2 2027", title: "Germany, pre-seed", body: "Second market opened through a partner firm, pre-seed round on measured pilot data, Italy prepared" },
    ],
    notes: "The ask is a place, not money. The award buys measured evidence: paid lawyer hours on two pilots so the 60 percent target becomes a number we can publish.",
  },
  close: {
    title: "Let's lift\ncompliance",
    line1: "simo-hue.github.io/Business",
    line2: "Simone Mattioli and Andreas Herzinger, EIT Digital Master School, Budapest",
    notes: "Close on the mission: less spending on compliance, more on competing. Then take questions.",
  },
};
