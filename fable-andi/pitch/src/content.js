// All copy and numbers for the Regulift application deck (short form, 11 slides).
// Every figure carries its source. Keep the source line truthful when a number changes:
// find the figure in FILES/research-*.md or FILES/number-claims-sources.md first.
module.exports = {
  programme: "Application to the EIT Community AI Entrepreneurs Lab 2026",

  cover: {
    left: "Compliance platform. Inside-out assessment.",
    right: "EIT Community AI Entrepreneurs Lab 2026  |  Simone Mattioli and Andreas Herzinger",
    statement: "We assess compliance from inside your own systems and prepare it for real lawyers, so companies spend less on legal work and more on competing.",
    notes: "Open with the one sentence: Regulift reads a company's systems from the inside, prepares the evidence, and brings partner lawyers into the same workspace. The result is less money on compliance and more on competing. Ten slides follow, each backed by a source.",
  },

  problem: {
    kicker: "The problem.\nWhere the money goes.", kicker2: "Billing data, not opinion",
    title: "A fifth of every legal bill buys facts, not advice",
    stat: { value: "19 to 23%", label: "of lawyers' invoiced hours go to fact-finding tasks, before any judgement is given. In a first compliance review of a software company the share is higher: the lawyer has to learn the whole setup first." },
    points: [
      "Before anyone can advise on GDPR, NIS2 or the AI Act, someone must establish what the company actually runs: systems, vendors, data flows, models. Law firms bill that by the hour.",
      "AI assistants make the lawyer about 20% faster at the same task. They do not remove the task.",
      "Small companies feel it most: 34% of NIS2-covered entities say they cannot obtain the extra budget, a share that is highest for SMEs.",
    ],
    chartTitle: "Share of invoiced hours by task, US firms with fewer than 1,000 lawyers",
    chart: { labels: ["Legal analysis and strategy", "Legal writing", "Fact investigation", "Case administration", "Document review", "Due diligence", "Advising clients", "Document management"], values: [27.0, 17.7, 9.6, 5.6, 3.6, 3.4, 3.2, 0.7] },
    chartNote: "Teal bars are fact-finding. Together about 23% of the bill.",
    source: "Sources: Remus and Levy, Can Robots Be Lawyers?, Georgetown Journal of Legal Ethics 30 (2017), Table 1, Sky Analytics billing data. Schwarcz et al., AI-Powered Lawyering, 2025. ENISA NIS Investments 2024, p. 46.",
    notes: "The chart is from billing data on US firms, the best public split of lawyer time by task. The teal bars are fact-finding: fact investigation, case administration, document review, due diligence, about 23 percent together. Compliance readiness for a small software company is more discovery-heavy than this average. The 20 percent figure is what AI gives a lawyer who still does the discovery. We remove the discovery before the clock starts.",
  },

  now: {
    kicker: "Why now.\nThe regulatory wave.", kicker2: "Dates read on EUR-Lex, 18 October 2026",
    title: "Five EU laws in four years. Budgets cannot keep up",
    lead: "Each law brings its own evidence duties and the deadlines overlap. A software company selling to regulated customers meets most of them through procurement questionnaires, long before a regulator calls.",
    start: 2024.6, end: 2028.8,
    events: [
      { t: 2024.80, date: "18 Oct 2024", label: "NIS2 applies, national laws vary" },
      { t: 2025.08, date: "Jan and Feb 2025", label: "DORA applies; AI Act prohibitions and AI literacy" },
      { t: 2025.70, date: "12 Sep 2025", label: "Data Act applies" },
      { t: 2026.60, date: "2 Aug 2026", label: "AI Act transparency duties, Article 50" },
      { t: 2026.70, date: "11 Sep 2026", label: "CRA vulnerability reporting, Article 14" },
      { t: 2027.92, date: "2 Dec 2027", label: "AI Act Annex III high-risk duties", future: true },
      { t: 2027.95, date: "11 Dec 2027", label: "CRA fully applies", future: true },
      { t: 2028.60, date: "2 Aug 2028", label: "AI Act Annex I embedded systems", future: true },
    ],
    legend: "Filled dots: in force today. Open dots: still ahead. GDPR has applied since May 2018 and sits under all of it.",
    figures: [
      { value: "+12.5%", label: "security spending growth in 2026, to $240 bn (Gartner)" },
      { value: "11% a year", label: "growth of GRC software spending to 2029, to $9.08 bn (Verdantix)" },
      { value: "€140 bn", label: "turnover of legal activities in the EU-27 in 2022 (Eurostat)" },
      { value: "25 to 35%", label: "cut in reporting burden the Commission targets for companies and SMEs" },
    ],
    source: "Sources: Directive (EU) 2022/2555, Regulations (EU) 2022/2554, 2023/2854, 2024/1689 as amended by 2026/1744, 2024/2847, all on EUR-Lex. Gartner, Jul 2025. Verdantix, Jan 2025. Eurostat sbs_ovw_act, NACE M69.1. COM(2025) 47.",
    notes: "Point at the overlap between 2025 and 2027. The Digital Omnibus moved the AI Act high-risk duties to December 2027, verified on EUR-Lex, so the pressure is scheduled, not gone. The CRA reporting duty went live five weeks ago. Below the timeline: spending keeps rising by double digits while the Commission itself wants compliance cost down by a quarter. Whoever makes compliance cheaper for the companies that cannot afford it today has a market.",
  },

  solution: {
    kicker: "The solution.\nInside-out, not outside-in.", kicker2: "The usual way, and ours",
    title: "Others ask. We read",
    lead: "Every incumbent asks the company what it does: forms, interviews, questionnaires. Regulift connects to the systems themselves with read-only access and reads what the company actually runs.",
    left: { title: "The usual way: outside-in", items: ["Forms and interviews that rely on memory", "A snapshot that is out of date the week after", "Billable hours spent collecting facts, not giving advice", "Evidence assembled by hand before every review"] },
    right: { title: "The Regulift way: inside-out", items: ["Connects to repositories, cloud, HR and CRM tools, read-only", "Builds the data and AI inventory from real flows, not recollection", "Stays current as the systems change", "Hands lawyers evidence, so their hours go to judgement"] },
    principles: [
      { title: "Read-only, by design", body: "We never change your systems. Access can be revoked at any time." },
      { title: "Hosted in Europe", body: "Materials and findings stay on European infrastructure, under European law." },
      { title: "Real lawyers, when it matters", body: "Partner law firms work inside the platform. Advice comes from a lawyer, never from a model." },
      { title: "You own the record", body: "Export the inventory and evidence at any time. No lock-in." },
    ],
    source: "Design principles of the platform as published on the Regulift website, section Inside-out, October 2026.",
    notes: "This is the core idea. Everyone else asks the company what it does. We read it. The left column is what the market sells today. The right column is what changes when the starting point is the company's own systems. The four principles at the bottom answer the first objections a CTO raises.",
  },

  flow: {
    kicker: "How it works.\nWhere the data goes.", kicker2: "Read-only, approved by the company",
    title: "Context leaves. The data stays",
    lead: "A collector reads inside the company and writes a report about what runs and where data flows, never the records themselves. One named representative approves it. Only then does it reach the platform.",
    steps: [
      { meta: "01", title: "Understand", body: "Regulift maps data flows, AI use and third parties from the approved report and builds the context for an assessment that fits the business." },
      { meta: "02", title: "Improve", body: "Every missing piece of evidence becomes a ranked action. Most close without a lawyer: a processing agreement, a retention schedule, an incident playbook." },
      { meta: "03", title: "Review", body: "Partner lawyers open the same workspace, with inventory, evidence and open items in place, and confirm compliance in writing." },
    ],
    source: "Diagram from the Regulift website. The approval step is a product rule, not an option. No records, no file contents, no credentials leave the company.",
    notes: "This slide answers the first question every CTO asks: what leaves my company. Answer: a report about technologies, flows and vendors. No records, no file contents, no credentials. And nothing at all until one person on their side approves it. Then three steps: understand, improve, review. Step three is what makes us different from a tool: the lawyer does not get a PDF by email, they open the same workspace.",
  },

  ai: {
    kicker: "Why AI is central.\nTwo layers, one safe harbour.", kicker2: "Centrality, novelty, defensibility",
    title: "AI does the groundwork. People make the call",
    lead: "The AI is not a chat window on top of a checklist. Without agents that read systems at scale there is no inside-out product. A deterministic layer written by lawyers keeps it on the right side of the law.",
    cards: [
      { meta: "Layer 1, deterministic", title: "Lawyer-authored applicability trees", body: "Partner law firms write the yes-or-no logic that decides which obligations apply: headcount, sector, role, data categories. Mechanical rules of this kind are what the German Federal Court protected in the Smartlaw ruling, so the platform never gives an individual legal opinion itself." },
      { meta: "Layer 2, agentic", title: "A collector that reads systems through MCP", body: "Agents connect to repositories, cloud accounts, HR and CRM tools through Model Context Protocol servers with read-only scopes. They identify services, models, processors and data flows and write the context report the representative approves. No questionnaire can do this." },
      { meta: "On top", title: "Architecture-to-law mapping and evidence graph", body: "Language models map the approved report onto obligations: which flow is a transfer, which model decides about people, which service is a supplier under NIS2 or DORA. Every finding links to its evidence. Grey-zone questions route to the partner lawyer, never to an autogenerated verdict." },
    ],
    moat: { title: "What compounds", items: ["An evidence graph per company that grows with every connector and every review", "A rule base per jurisdiction, authored and signed by partner firms under their own name", "A network of law firms that refer clients because the platform sends them better work"] },
    source: "Sources: BGH, judgment of 9 Sep 2021, I ZR 113/20 (Smartlaw). Model Context Protocol specification, modelcontextprotocol.io. Regulation (EU) 2024/1689, Article 6 and Annex III.",
    notes: "Judges score centrality and defensibility of the AI approach. Centrality: without the agentic collector there is no product. Defensibility: the evidence graph per company, the lawyer-authored rule base and the law firm network all compound, and none of them can be copied by adding a chat window to a questionnaire tool. The two-layer split is also what keeps us legal in Germany and Austria, where software may not give individual legal advice.",
  },

  market: {
    kicker: "Market and competition.\nHow the market does it.", kicker2: "Public product descriptions, October 2026",
    title: "Every incumbent asks the company. None reads it",
    columns: [
      { name: "What you get" },
      { name: "Regulift", sub: "inside-out, lawyers inside" },
      { name: "Compliance consultancies", sub: "DataGuard, heyData, Secjur" },
      { name: "Questionnaire platforms", sub: "OneTrust, Vanta, Drata" },
      { name: "AI governance tools", sub: "Credo AI, Holistic AI, trail" },
    ],
    rows: [
      { label: "Starts from your real systems, not a form", cells: ["y", "n", "n", "p"] },
      { label: "GDPR, AI Act, NIS2 and DORA in one view", cells: ["y", "p", "p", "n"] },
      { label: "Lawyer review built into the journey", cells: ["y", "y", "n", "n"] },
      { label: "Stays current after the first assessment", cells: ["y", "n", "p", "y"] },
      { label: "Built to lower your legal bill", cells: ["y", "n", "p", "n"] },
    ],
    legend: "● Yes    ◐ Partly, or at extra cost    ○ Not the focus.  Twelve vendors reviewed. Closest single players: Justima (law-firm-backed monitoring), Norm Ai (US finance only).",
    customer: { title: "Who we build for first", body: "B2B software and SaaS companies and managed IT providers with 20 to 249 staff. They sell to regulated customers, run on cloud and code we can read, and rarely have a compliance department." },
    figures: [
      { value: "23,370", label: "EU software firms with 20 to 249 staff (Eurostat, NACE J62, 2024)" },
      { value: "119,784", label: "enterprises with 50 or more staff in Austria, Germany and Italy, our first three markets" },
      { value: "USD 20,000", label: "median yearly spend on Vanta, usually for one framework (Vendr, 374 purchases)" },
    ],
    source: "Sources: Regulift market scan of public product pages and funding announcements, 14 Oct 2026. Eurostat sbs_sc_ovw 2024. Vendr marketplace data, Feb 2026. Vendor names are examples per category.",
    notes: "The table is the one on our website, with example vendors for this audience. Two players each hold one piece: Justima has the law firm, Norm Ai has lawyer-supervised agents but only for US finance. Nobody starts from the company's systems. That is the row that changes every other row. On the right: the customer we build for first and three numbers that size the opportunity.",
  },

  gtm: {
    kicker: "Go to market.\nStart narrow.", kicker2: "Legal texts and national gazettes checked 18 October 2026",
    title: "Three laws, one country, one channel",
    lead: "Start where the evidence says the pain is, with a structure that is lawful in every market we plan to enter.",
    cols: [
      { meta: "Which laws first", title: "GDPR, NIS2, AI Act", body: ["GDPR applies to every company that handles personal data; the inventory comes straight from the collector", "NIS2 reaches small suppliers through their customers: 63% of covered organisations require security standards from suppliers", "AI Act high-risk duties apply from 2 Dec 2027, so the inventory work starts now", "Next, in this order: CRA, DORA as a supplier module, Data Act for SaaS. CSRD dropped"] },
      { meta: "Which country first", title: "Austria, then Germany, then Italy", body: ["Austria: NIS2 law in force since 1 Oct 2026, registration due within three months, the freshest trigger of any candidate", "861 firms with 50 or more staff per million inhabitants against an EU average of 680; legal spend about €441 per head a year", "One founder is Austrian; Vienna is under three hours from Budapest, where pilots start", "Germany is the biggest prize (80,043 firms with 50 or more staff); Italy adds a native-speaking founder"] },
      { meta: "Through whom", title: "Partner law firms", body: ["Firms refer clients because the evidence pack removes the hours clients resent and leaves the advisory hours they value", "A partner firm authors the rules for its jurisdiction, reviews inside the platform and confirms compliance in writing", "The firm pays a flat yearly workspace fee, never a share of fees or a fee per mandate, which bar rules forbid in DE, AT, IT and FR", "The client picks the firm from a list and is billed by the firm directly"] },
    ],
    source: "Sources: NIS2 Art. 2(1) and 21(2)(d); ENISA NIS Investments 2025, p. 26. RIS, BGBl. I Nr. 94/2025 (NISG 2026). Eurostat sbs_sc_ovw 2024, nama_10_co3_p3. BRAO §49b(3), BGH IX ZR 89/23, ÖRAK RL-BA §47(3), Italian CDF art. 37, French RIN art. 11.3. Full scoring of 15 countries in the research reports.",
    notes: "Three decisions, each from a research report. Laws: three reach almost every B2B software company today. Country: on equal weights Germany and Italy score higher, Austria wins on the two things that matter for a two-person team in the next twelve months: we can be in the room, and the trigger is live right now. Austrian legal-advice rules are the strictest, so a partner model that passes in Vienna passes in Berlin. Channel: law firms, with a fee structure we checked against the bar rules in five countries.",
  },

  model: {
    kicker: "Commercial model.\nPrice architecture.", kicker2: "Published price points, bar rules per country",
    title: "Platform, modules, and lawyers who bill their own work",
    tiers: [
      { meta: "Platform base, GDPR included", price: "€3,600 to €14,400", unit: "per year, by company size", body: "Three bands: 10 to 49 staff €3,600, 50 to 249 staff €7,200, 250 to 1,000 staff €14,400. Read-only connectors, context report, inventory and the GDPR module." },
      { meta: "Regulation modules", price: "€1,800 to €6,000", unit: "per regulation per year, by size", body: "AI Act, NIS2 readiness, DORA for ICT suppliers, CRA. Each adds its gap list and evidence pack. A mid-sized company with three modules lands at €14,400 to €18,000 a year.", hi: true },
      { meta: "Partner law firms", price: "Flat yearly fee", unit: "same for every firm, never per mandate", body: "The firm bills its legal work directly to the client. Regulift takes no share and no fee per mandate or lead." },
    ],
    chart: { title: "Lawyer hours in our illustrative case", sub: "Forty hours quoted, sixteen as our target. Labelled a target until pilots are measured.", labels: ["Law firm quote", "With Regulift, target"], fact: [26, 2], judge: [14, 14] },
    chartNote: "Target: a legal bill about 60% lower for a readiness review. Published trials measure about 20% when the lawyer keeps doing the discovery. We remove the discovery before the clock starts.",
    source: "Sources: Vendr, Feb 2026. Vanta and Drata AWS Marketplace listings, Oct 2026. StartComply pricing, Oct 2026. BRAK STAR survey 2024 (€244 an hour average German rate). Schwarcz et al. 2025. Clio Legal Trends 2024. Tier prices are our proposal within the researched ranges; the 40-hour split is an assumption.",
    notes: "The architecture is the research result, the tier prices are our proposal within the ranges it found. Mid tier 9 to 18 thousand euros sits between StartComply at 10,500 for two frameworks and Vanta at 20 to 40 thousand dollars for one framework at this size. A fee per mandate was voided by the German Federal Court in 2024, so the firm pays a flat workspace fee and the client chooses the firm. Do not oversell the chart: say the target out loud, say what the studies measure, say why our mechanism differs, and say we will publish pilot numbers.",
  },

  plan: {
    kicker: "Plan.\n30, 60, 90 days, then the first year.", kicker2: "Honest stage: concept with a validated design",
    title: "How we really build this",
    status: [
      { meta: "Live", body: "Name, positioning and website with the inside-out model, data-flow design, comparison and FAQ" },
      { meta: "Designed", body: "Collector architecture: read-only MCP connectors, context report, approval step, evidence graph" },
      { meta: "Researched", body: "Twelve-vendor scan, source-checked figures, regulation, country and pricing decisions" },
      { meta: "Not yet", body: "No customers and no signed law firm. The plan below is built to change that" },
    ],
    cols: [
      { meta: "Days 1 to 30, the bootcamp weeks", title: "Prove the pain", body: ["15 discovery interviews with CTOs and founders of 50 to 250 person software companies in Austria and Budapest", "Letter of intent from one Vienna law firm, model reviewed against Austrian bar rules", "Collector prototype: GitHub and one cloud provider, read-only, context report generated"] },
      { meta: "Days 31 to 60", title: "Prove the flow", body: ["Two design partners connect real systems", "Representative approval and report sync working end to end", "First inventory and gap list reviewed by the partner firm"] },
      { meta: "Days 61 to 90", title: "Prove the value", body: ["First evidence pack confirmed in writing by the partner firm", "Measured lawyer hours against the firm's own quote", "Pricing tested with both design partners; company incorporated"] },
      { meta: "Months 4 to 12", title: "Scale the loop", body: ["HR and CRM connectors; NIS2 and AI Act modules live on top of GDPR", "Ten paying pilots in Austria, second law firm signed, aws Preseed application", "Germany opened through a partner firm; pre-seed round on measured pilot data"] },
    ],
    notes: "Be plain about the stage: a live site, a designed architecture, researched decisions, no customers yet. The jury scores evidence and coachability, not inflated claims. The plan is what we execute with or without the award, and every block ends with something a jury can check: an interview count, a signed letter, a working connector, a paying pilot.",
  },

  close: {
    kicker: "The founders and the ask.", kicker2: "EIT Digital Master School, 28DIGITAL, Budapest",
    title: "Two founders, one problem we have both touched",
    people: [
      { name: "Simone Mattioli", role: "Co-founder. Customers, partners, programme", bio: "EIT Digital Master School, Autonomous Systems and Intelligent Robotics track. Leads discovery, partner law firms and the application.", photo: "simone-r.png" },
      { name: "Andreas Herzinger", role: "Co-founder. Product and engineering", bio: "EIT Digital Master School, Data Science. Freelance AI engineer: SME integrations, MCP servers, secure LLM data connections, RAG in production.", photo: "andreas-r.png" },
    ],
    why: "The problem found us through Andreas's integration work: every SME project started with the same unanswered compliance questions, and every answer cost a lawyer's hours. The collector is the kind of system he already builds. Simone runs discovery and partners.",
    asks: [
      { title: "What we ask for", body: "A place in the cohort. One week to test the inside-out model with customers, mentors and investors, and to meet partner law firms through the programme's network." },
      { title: "What the €10,000 award would buy", body: "The legal review budget of the first two pilots, so a partner firm's hours are paid and the hour reduction is measured, plus the second and third collector connectors." },
      { title: "What you can check today", body: "The live website, the source behind every number in this deck, and the research reports on regulations, countries and pricing." },
    ],
    contact: "simo-hue.github.io/Business   |   Simone Mattioli and Andreas Herzinger, EIT Digital Master School, Budapest",
    notes: "Founder-problem fit is a third of the Stage 1 score. Andreas built the exact kind of integrations the collector needs, for the exact kind of company we target. Simone owns the commercial side. Say what each of you will personally do in the first thirty days. The ask is a place, not money. Say what the award would be spent on in one breath, then stop and take questions.",
  },
};
