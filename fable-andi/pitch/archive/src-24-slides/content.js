// All copy and numbers for the Regulift deck. Every figure carries its source.
// Strings containing "TBD" are filled from the research reports before delivery.
module.exports = {
  dividerRight: "Regulift, application to the EIT Community AI Entrepreneurs Lab 2026",

  cover: {
    right: "EIT Community AI Entrepreneurs Lab 2026  |  Simone Mattioli and Andreas Herzinger",
    statement: "We assess compliance from inside your own systems and prepare it for real lawyers, so companies spend less on legal work and more on competing.",
    notes: "Open with the one sentence: Regulift reads a company's systems from the inside, prepares the evidence, and brings partner lawyers into the same workspace. The result is less money on compliance and more on competing. Everything that follows backs that sentence with sources.",
  },

  thesis: {
    statement: "The compliance market is growing.\nRegulift is built to shrink it.",
    figures: [
      { value: "+12.5%", label: "growth of worldwide information security spending forecast for 2026, to $240 billion (Gartner)" },
      { value: "11% a year", label: "growth of GRC software spending to 2029, from $4.98 billion in 2023 to $9.08 billion (Verdantix)" },
      { value: "25 to 35%", label: "cut in reporting burden the European Commission targets for all companies and for SMEs (COM(2025) 47)" },
      { value: "19 to 23%", label: "of lawyers' invoiced hours go to fact-finding tasks, before any judgement is given (Remus and Levy, 2017)" },
    ],
    source: "Sources: Gartner press release, Jul 2025. Verdantix GRC software forecast, Jan 2025. European Commission, A simpler and faster Europe, COM(2025) 47, Feb 2025. Remus and Levy, Georgetown Journal of Legal Ethics 30 (2017), Table 1.",
    notes: "Spending on security and compliance software keeps rising by double digits, while the EU itself wants compliance cost down by a quarter. Those two facts do not contradict each other: companies pay more for tools and still pay lawyers to find facts. The last figure is the gap we attack: about a fifth of billed hours is fact-finding that software can do.",
  },

  analysis: {
    divider: {
      title: "Companies pay twice: once for tools, once for lawyers to find the facts.",
      body: "The analysis section covers where the money goes, the regulatory wave that keeps it growing, the size of the market, and why every incumbent works from the outside in.",
      notes: "Section one. Four slides: where lawyer money goes, the wave of EU regulation with its dates, the market size, and the competitive landscape.",
    },
    hours: {
      kicker: "Analysis.\nWhere the money goes.", kicker2: "Billing data, not opinion",
      title: "A fifth of every legal bill buys facts, not advice",
      lead: "Before a lawyer can advise on GDPR, NIS2 or the AI Act, someone has to establish what the company actually runs: systems, vendors, data flows, models. In law firms that work is billed by the hour.",
      points: [
        "Fact investigation, document review, due diligence and case administration make up 19 to 23% of invoiced hours in US firm billing data.",
        "A randomised trial of AI-assisted legal work measured about 20% time saved per task. That is the lawyer working faster, not the fact-finding disappearing.",
        "In a first compliance review of a software company the share is higher: the lawyer has to learn the whole setup before any judgement.",
        "Our wedge: hand the lawyer the facts already organised, so their hours go to judgement.",
      ],
      chartTitle: "Share of invoiced hours by task, firms with fewer than 1,000 lawyers",
      chart: { labels: ["Legal analysis and strategy", "Legal writing", "Fact investigation", "Case administration", "Document review", "Due diligence", "Advising clients", "Document management"], values: [27.0, 17.7, 9.6, 5.6, 3.6, 3.4, 3.2, 0.7] },
      source: "Sources: Remus and Levy, Can Robots Be Lawyers?, Georgetown Journal of Legal Ethics 30 (2017), Table 1, Sky Analytics billing data 2012 to 2015. Schwarcz et al., AI-Powered Lawyering, working paper 2025. Fact-finding share is the sum of the four highlighted task rows.",
      notes: "The chart is from billing data on US firms, the best public split of lawyer time by task. Fact-finding tasks are the four lighter bars: fact investigation, case administration, document review, due diligence. Together about 23 percent. Compliance readiness work for a small company is more discovery-heavy than this average. The randomised trial figure of 20 percent is what AI gives a lawyer who still does the discovery. We remove the discovery.",
    },
    timeline: {
      kicker: "Analysis.\nThe regulatory wave.", kicker2: "Dates as of October 2026, from EUR-Lex",
      title: "Five EU laws land on the same companies in four years",
      lead: "Each law brings its own evidence duties, and the deadlines overlap. A software company selling into regulated customers meets most of them through procurement questionnaires, long before a regulator calls.",
      start: 2024.6, end: 2028.8,
      events: [
        { t: 2024.80, date: "18 Oct 2024", label: "NIS2 applies, national laws vary" },
        { t: 2025.08, date: "17 Jan and 2 Feb 2025", label: "DORA applies; AI Act prohibitions and AI literacy" },
        { t: 2025.70, date: "12 Sep 2025", label: "Data Act applies" },
        { t: 2026.60, date: "2 Aug 2026", label: "AI Act transparency duties, Article 50" },
        { t: 2026.70, date: "11 Sep 2026", label: "CRA vulnerability reporting, Article 14", },
        { t: 2027.92, date: "2 Dec 2027", label: "AI Act Annex III high-risk duties", future: true },
        { t: 2027.95, date: "11 Dec 2027", label: "CRA fully applies", future: true },
        { t: 2028.60, date: "2 Aug 2028", label: "AI Act Annex I product-embedded systems", future: true },
      ],
      legend: "Filled dots: in force today. Open dots: still ahead. GDPR has applied since May 2018 and sits under all of it.",
      source: "Sources: Directive (EU) 2022/2555 (NIS2), Regulation (EU) 2022/2554 (DORA), Regulation (EU) 2024/1689 (AI Act) as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI, OJ L 24 Jul 2026), Regulation (EU) 2023/2854 (Data Act), Regulation (EU) 2024/2847 (CRA). All read on EUR-Lex, 18 Oct 2026.",
      notes: "Point at the overlap between 2025 and 2027. The Digital Omnibus moved the AI Act high-risk duties to December 2027, which we verified on EUR-Lex, so the pressure is not gone, it is scheduled. The CRA reporting duty went live five weeks ago. NIS2 reaches small companies through their customers, not directly, and we say so on the next slides.",
    },
    market: {
      kicker: "Analysis.\nThe market.", kicker2: "Primary sources, figures in the notes",
      title: "Budgets rise every year. Small companies pay the most",
      lead: "Security and compliance budgets grow by double digits. Legal services in the EU are a 140 billion euro market. Small companies pay the most relative to their size and most often lack the budget.",
      points: [
        "Worldwide information security spending: $193 billion in 2024, $213 billion in 2025, $240 billion forecast for 2026.",
        "GRC software: $4.98 billion in 2023 to $9.08 billion by 2029, concentrated in North America and Europe.",
        "EU-27 turnover of legal activities: about 140 billion euros in 2022 (Eurostat).",
        "34% of entities expect they cannot obtain the extra budget NIS2 needs, a share that is highest for SMEs (ENISA).",
      ],
      chart1: { title: "Information security spending", sub: "Worldwide end-user spending, $ billion", series: "Spending", labels: ["2024", "2025", "2026f"], values: [193, 213, 240], fmt: '"$"0"B"' },
      chart2: { title: "GRC software market", sub: "Worldwide, $ billion", series: "Market", labels: ["2023", "2029f"], values: [4.98, 9.08], fmt: '"$"0.0"B"' },
      source: "Sources: Gartner, Jul 2025. Verdantix, Jan 2025. Eurostat sbs_ovw_act, NACE M69.1, 2022. ENISA NIS Investments 2024, p. 6 and p. 46. European Commission SWD(2021) 84, p. 75.",
      notes: "Two charts, both from named analysts with public methodology. The point is not the exact size of our slice. It is that the spend keeps rising while the Commission wants compliance cheaper. Whoever makes compliance cheaper for the companies that cannot afford it today has a market.",
    },
    compete: {
      kicker: "Analysis.\nHow the market does it.", kicker2: "Public product descriptions, October 2026",
      title: "Every incumbent asks the company. None reads it",
      lead: "We reviewed twelve vendors' public materials. All of them make the customer pick frameworks and answer questions. None derives what applies from the company's own systems, and none publishes a per-obligation lawyer sign-off.",
      columns: [
        { name: "What you get" },
        { name: "Regulift", sub: "inside-out, lawyers inside" },
        { name: "Compliance consultancies", sub: "DataGuard, heyData, Secjur" },
        { name: "Questionnaire and control platforms", sub: "OneTrust, Vanta, Drata" },
        { name: "AI governance tools", sub: "Credo AI, Holistic AI, trail" },
      ],
      rows: [
        { label: "Starts from your real systems, not a form", cells: ["y", "n", "n", "p"] },
        { label: "GDPR, AI Act, NIS2 and DORA in one view", cells: ["y", "p", "p", "n"] },
        { label: "Lawyer review built into the journey", cells: ["y", "y", "n", "n"] },
        { label: "Stays current after the first assessment", cells: ["y", "n", "p", "y"] },
        { label: "Built to lower your legal bill", cells: ["y", "n", "p", "n"] },
      ],
      legend: "● Yes     ◐ Partly, or at extra cost     ○ Not the focus.   Closest single players: Justima (law-firm-backed monitoring) and Norm Ai (US finance only).",
      source: "Source: Regulift market scan of public product pages and funding announcements, 14 Oct 2026, twelve vendors. Vendor names are examples per category.",
      notes: "The table is the one on our website, with example vendors added for this audience. The two closest players each hold one piece: Justima has the law firm, Norm Ai has lawyer-supervised agents but only for US finance. Nobody starts from the company's systems. That is the row that changes every other row.",
    },
  },

  solution: {
    divider: {
      title: "Others ask. We read.",
      body: "The solution section shows the inside-out model, where the data goes and where it does not, the three steps from connection to legal confirmation, why AI is central to it, and what exists today.",
      notes: "Section two. The product in four slides plus an honest status slide.",
    },
    flip: {
      kicker: "Solution.\nInside-out, not outside-in.", kicker2: "The usual way, and ours",
      title: "Outside-in asks. Inside-out reads",
      lead: "Outside-in tools rely on memory and produce a snapshot that is out of date a week later. Inside-out starts from the systems themselves, with read-only access, and stays current as they change.",
      left: { title: "The usual way: outside-in", items: ["Forms and interviews that rely on memory", "A snapshot that is out of date the week after", "Billable hours spent collecting facts, not giving advice", "Evidence assembled by hand before every review"] },
      right: { title: "The Regulift way: inside-out", items: ["Connects to repositories, cloud, HR and CRM tools with read-only access", "Builds the data and AI inventory from real flows, not recollection", "Stays current as the systems change", "Hands lawyers evidence, so their hours go to judgement"] },
      source: "Read-only access, hosting in Europe and export of the full record are design principles of the platform. See regulift website, section Inside-out.",
      notes: "This is the core idea. Everyone else asks the company what it does. We read it. The left column is what the market sells today. The right column is what changes when the starting point is the company's own systems.",
    },
    flow: {
      kicker: "Solution.\nWhere the data goes.", kicker2: "Read-only, approved by the company",
      title: "Context leaves. The data stays",
      lead: "A collector reads inside the company and writes a report about what runs and where data flows, never the records themselves. One named representative approves the report. Only then does it reach the Regulift platform.",
      source: "Diagram from the Regulift website. The approval step is a product rule, not an option.",
      notes: "This slide answers the first question every CTO asks: what leaves my company. Answer: a report about technologies, flows and vendors. No records, no file contents, no credentials. And nothing at all until one person on their side approves it. The platform builds the inventory, the gap list and the evidence pack from that approved report only.",
    },
    steps: {
      kicker: "Solution.\nHow it works.", kicker2: "Technology first, human expertise next",
      cols: [
        { meta: "01", title: "Understand", body: "Regulift maps the company's data flows, AI use and third parties from the approved report and builds the context for an assessment that fits the business." },
        { meta: "02", title: "Improve", body: "Every missing piece of evidence becomes a concrete action, ranked by what matters most. Most of them close without a lawyer: a processing agreement, a retention schedule, an incident playbook." },
        { meta: "03", title: "Review", body: "Partner lawyers are ready inside Regulift when the company is. They open the same workspace, with inventory, evidence and open items already in place, and confirm compliance in writing." },
      ],
      lawyers: { title: "Real lawyers, when it matters", body: "Partner law firms are part of Regulift. The platform prepares the evidence. Advice comes from a lawyer, never from a model. Certification is a label only some regulations offer; a lawyer's written confirmation of compliance is what customers and auditors actually ask for." },
      notes: "Three steps, one journey. Step three is the one that makes us different from a tool: the lawyer does not get a PDF by email, they open the same workspace. No re-explaining, no forty hours of discovery.",
    },
    ai: {
      kicker: "Solution.\nWhy AI is central.", kicker2: "Two layers, one legal safe harbour",
      title: "AI does the groundwork. People make the call",
      lead: "The AI is not a chat window on top of a checklist. It is the collector and the mapping engine that turn a company's technical footprint into legal evidence. A deterministic layer written by lawyers keeps it on the right side of the law.",
      cards: [
        { meta: "Layer 1, deterministic", title: "Lawyer-authored applicability trees", body: "Partner law firms write the yes-or-no logic that decides which obligations apply: headcount, sector, role, data categories. Mechanical rules of this kind are what the German Federal Court of Justice protected in the Smartlaw ruling (BGH I ZR 113/20), so the platform never gives an individual legal opinion itself." },
        { meta: "Layer 2, agentic", title: "A collector that reads systems through MCP", body: "Agents connect to repositories, cloud accounts, HR and CRM tools through Model Context Protocol servers with read-only scopes. They identify services, models, processors and data flows, and write the context report the representative approves. This is the part no questionnaire can do." },
        { meta: "On top", title: "Architecture-to-law mapping and evidence graph", body: "Language models map the approved report onto obligations: which flow is a transfer, which model decides about people, which service is a supplier under NIS2 or DORA. Every finding links to its evidence. Grey-zone questions route to the partner lawyer, never to an autogenerated verdict." },
      ],
      source: "Sources: BGH, judgment of 9 Sep 2021, I ZR 113/20 (Smartlaw). Model Context Protocol specification, modelcontextprotocol.io. Regulation (EU) 2024/1689, Article 6 and Annex III for high-risk classification.",
      notes: "Judges score centrality and defensibility of the AI approach. Centrality: without the agentic collector there is no product, the inside-out idea depends on machines reading systems at scale. Defensibility: the evidence graph per company, the lawyer-authored rule base, and the law firm network all compound. The two-layer split is also what keeps us legal in Germany and France, where software may not give individual legal advice.",
    },
    today: {
      kicker: "Solution.\nWhat exists today.", kicker2: "Honest stage: concept with a validated design",
      title: "Where we stand on 18 October 2026",
      caption: "simo-hue.github.io/Business, live since 17 October 2026",
      rows: [
        { meta: "Live", title: "Positioning, website and name", body: "Public site with the inside-out model, data-flow design, comparison and FAQ." },
        { meta: "Designed", title: "Collector architecture", body: "MCP read-only connectors, context report, representative approval, evidence graph. Built on Andreas's SME integration work." },
        { meta: "Researched", title: "Market, regulations, countries, pricing", body: "Twelve-vendor scan, source-checked figures, regulation and country selection with primary sources." },
        { meta: "Next", title: "Pilot and partner law firm", body: "No customers and no signed firm yet. The 30/60/90-day plan is built to change that." },
      ],
      notes: "Be plain about the stage. A live site, a designed architecture, researched decisions, no customers yet. The jury scores evidence and coachability, not inflated claims. The plan slide shows what the bootcamp weeks are for.",
    },
  },

  strategy: {
    divider: {
      title: "Start narrow, where the evidence says the pain is.",
      body: "The strategy section settles which regulations first, which country first, how partner law firms become the channel, and the plan for the first 90 days and the first year.",
      notes: "Section three. Four decisions, each backed by the research reports in the appendix folder.",
    },
    regs: {
      kicker: "Strategy.\nWhich regulations first.", kicker2: "Legal texts checked on EUR-Lex, 18 Oct 2026",
      title: "Start with GDPR, NIS2 and the AI Act. Add the CRA next",
      lead: "Three laws reach almost every B2B software company today, directly or through its customers. The CRA follows for installable software, DORA as a supplier module, the Data Act as a SaaS module. CSRD is dropped: it now applies only above 1,000 staff.",
      cards: [
        { meta: "Start", title: "GDPR", body: "Applies to every company that handles personal data. About €1.2 billion in fines in 2025 and €7.1 billion since 2018. The inventory and data-flow map come straight from the collector.", first: true },
        { meta: "Start", title: "NIS2", body: "Reaches small suppliers through their customers: 63% of covered organisations require security standards from suppliers, 48% put them in contracts. Germany alone has 20,141 registered entities.", first: true },
        { meta: "Start", title: "EU AI Act", body: "AI use among EU firms rose from 13.5% in 2024 to 20.0% in 2025, and 30.4% among firms with 50 to 249 staff. High-risk duties apply from 2 Dec 2027, so the inventory work starts now.", first: true },
        { meta: "Next, in this order", title: "CRA, DORA, Data Act", body: "CRA reporting duties have applied since 11 Sep 2026 for installable software. DORA as a module for suppliers to banks and insurers. Data Act switching rules for every SaaS provider from 12 Jan 2027." },
      ],
      customer: { title: "Who we build for first", body: "B2B software and SaaS companies and managed IT providers with 20 to 249 staff, best fit 50 to 249. Eurostat counts 14,989 EU software firms with 20 to 49 staff and 8,381 with 50 to 249 (NACE J62, 2024)." },
      source: "Sources: EUR-Lex texts of GDPR, NIS2 (Art. 2(1), 21(2)(d)), AI Act as amended by 2026/1744, CRA, DORA (Art. 30), Data Act, Directive 2026/470. BSI registrations, 30 Sep 2026. ENISA NIS Investments 2025, p. 26. DLA Piper GDPR fines survey, Jan 2026. Eurostat isoc_eb_ai and sbs_sc_ovw.",
      notes: "Say the trap out loud: for a 40-person software company, GDPR and the AI Act apply directly, NIS2 and DORA arrive through customers. That is still real pressure, because 63 percent of NIS2-covered organisations push security requirements down to suppliers. One nuance a lawyer must confirm per country: NIS2 counts SaaS as cloud computing, so a SaaS company with 50 or more staff can be covered directly. CSRD is out of the product after Omnibus I. The full report with every article reference is in the research folder.",
    },
    markets: {
      kicker: "Strategy.\nRoad to market.", kicker2: "Eurostat, national gazettes and courts, 18 Oct 2026",
      title: "Austria first, then Germany, then Italy",
      lead: "Austria wins on the practical test: a founder on the ground, a live NIS2 trigger, dense mid-sized companies and expensive lawyers. Germany is the biggest prize once the partner model is proven. Italy adds a native-speaking founder. Budapest stays the base for pilots. Together: 119,784 enterprises with 50 or more staff.",
      cols: [
        { meta: "First market, 2027", title: "Austria", body: ["NIS2 law in force since 1 Oct 2026, registration due within three months: the freshest trigger of any candidate", "861 firms with 50 or more staff per million inhabitants, against an EU average of 680", "Legal spend about €441 per head a year, against €100 in Hungary; tariff rate about €349 an hour", "One founder is Austrian, Vienna is 2 h 48 from Budapest. Strict legal-advice rules like Germany's, so the partner model carries over"] },
        { meta: "Second", title: "Germany", body: ["80,043 firms with 50 or more staff, the largest market in the EU", "NIS2 in force since Dec 2025, 20,141 entities registered by 30 Sep 2026; AI Act authority designated (Bundesnetzagentur)", "Government estimates 2,752 hours a year of NIS2 effort per particularly important entity", "Crowded compliance-software field, so entry runs through partner firms rather than direct sales"] },
        { meta: "Third", title: "Italy", body: ["31,851 firms with 50 or more staff and a native-speaking founder", "Own national AI law (Law 132/2025) and NIS2 in force since Oct 2024", "The most open legal-advice rules of the three, so more of the workflow can run in the product", "Lawyers are cheaper, so the cost-saving pitch is weaker; lead with readiness and speed"] },
      ],
      source: "Sources: RIS, BGBl. I Nr. 94/2025 (NISG 2026). BGBl. 2025 I Nr. 301 and BSI registration figures, Sep 2026. Bundestag Drucksache 21/1501. Eurostat sbs_sc_ovw 2024 and nama_10_co3_p3. OGH 4 Ob 77/23m. Law 132/2025 (Italy). ÖBB timetable. Full scoring across 15 countries in FILES/research-countries.md.",
      notes: "Be honest about the scoring: on equal weights Germany and Italy tie at the top and Austria is fifth. Austria wins on the two things that matter for a two-person team in the next twelve months: we can be in the room, and the trigger is live right now. Austrian legal-advice rules are the strictest, which is deliberate: a partner model that passes in Vienna passes in Berlin. An Austrian lawyer reviews the model before launch. The Netherlands is the best English-language fourth market.",
    },
    channel: {
      kicker: "Strategy.\nThe channel.", kicker2: "Partner law firms, inside the platform",
      title: "Law firms are the channel, not the competition",
      lead: "A partner firm recommends Regulift to its clients because it removes the fact-finding the client does not want to pay for and sends the firm organised, higher-margin judgement work instead.",
      points: [
        "The firm gets mandates with the evidence pack already in place: fewer unbillable discovery hours, more advisory hours at its full rate.",
        "The client gets the same lawyer at a lower bill, with the work visible in one workspace, and chooses the firm from a list.",
        "Regulift gets distribution through trusted advisers, and stays lawful: the firm pays a flat yearly workspace fee, never a share of fees or a fee per mandate.",
        "That structure holds in Germany, Austria, Italy and France, where bar rules forbid paying for mandates, and in the Netherlands.",
      ],
      box: {
        meta: "What a partner firm commits to",
        rows: [
          { title: "Authors the rules", body: "Writes and maintains the applicability trees for its jurisdiction, under its name." },
          { title: "Reviews inside the platform", body: "Opens the workspace, reviews the evidence pack, confirms compliance in writing." },
          { title: "Refers clients", body: "Recommends Regulift to clients facing GDPR, AI Act or NIS2 questions, without exclusivity." },
          { title: "Pays a flat workspace fee", body: "Same for every firm, independent of mandates. Bills its own legal work directly to the client." },
        ],
      },
      source: "Sources: BRAO §49b(3) and BGH IX ZR 89/23 (per-mandate platform fees void, Apr 2024). ÖRAK RL-BA 2015 §47(3). Italian Codice Deontologico Forense art. 37. French RIN art. 11.3 and 19.4.2. Dutch Verordening op de advocatuur, conditions on fee sharing. All read 18 Oct 2026.",
      notes: "Law firms are the channel because the economics work for them: the evidence pack removes the hours clients resent paying for and leaves the hours they value. The legal structure matters as much as the pitch. We checked the bar rules in five countries. Paying a firm for mandates is forbidden in four of them, so the firm pays a flat fee for the workspace and the client picks the firm. This is the same conclusion the market leaders in legal tech reached.",
    },
    plan: {
      kicker: "Strategy.\nScaling plan.", kicker2: "30, 60, 90 days, then the first year",
      title: "How we really build this",
      lead: "The bootcamp weeks are the first thirty days. Each block ends with evidence a jury can check: an interview count, a signed letter, a working connector, a paying pilot.",
      cols: [
        { meta: "Days 1 to 30", title: "Prove the pain", body: ["15 discovery interviews with CTOs and founders of 50 to 250 person software companies in Austria and Budapest", "Letter of intent from one Vienna law firm, model reviewed against Austrian bar rules", "Collector prototype: GitHub and one cloud provider, read-only, context report generated"] },
        { meta: "Days 31 to 60", title: "Prove the flow", body: ["Two design partners connect real systems", "Representative approval and report sync working end to end", "First inventory and gap list reviewed by the partner firm"] },
        { meta: "Days 61 to 90", title: "Prove the value", body: ["First evidence pack confirmed in writing by the partner firm", "Measured lawyer hours against the firm's own quote", "Pricing tested with both design partners; incorporate the company"] },
        { meta: "Months 4 to 12", title: "Scale the loop", body: ["HR and CRM connectors, NIS2 and AI Act modules live on top of GDPR", "Ten paying pilots in Austria, second law firm signed; aws Preseed application (up to €89,000)", "Germany opened through a partner firm there; pre-seed round on measured pilot data"] },
      ],
      notes: "This is the plan we would execute with or without the award. The award money goes into the legal review budget of the first two pilots, so the partner firm's hours are paid and we can measure the real reduction. Every block has a checkable artefact.",
    },
  },

  commercial: {
    divider: {
      title: "Priced so the lawyer's bill drops and the firm still earns more.",
      body: "The commercial section shows the price architecture, the numbers behind it, and why the customer's total cost falls even though a lawyer still signs.",
      notes: "Section four. A full business plan is not required at this stage; this is the commercial logic and the three numbers behind it.",
    },
    model: {
      kicker: "Commercial model.\nPrice architecture.", kicker2: "Published price points, bar rules per country",
      title: "Platform, modules, and lawyers who bill their own work",
      lead: "The company pays a yearly platform fee by size, adds a module per regulation it needs, and picks a partner law firm that bills its legal work directly. Per-framework pricing is the market norm. A fee per legal mandate is not lawful in our first markets, so there is none.",
      tiers: [
        { meta: "Platform base, GDPR included", price: "€3,600 to €14,400", unit: "per year, by company size", body: "Three bands: 10 to 49 staff €3,600, 50 to 249 staff €7,200, 250 to 1,000 staff €14,400. Includes the read-only connectors, context report, inventory and the GDPR module." },
        { meta: "Regulation modules", price: "€1,800 to €6,000", unit: "per regulation per year, by size", body: "AI Act, NIS2 supply-chain readiness, DORA for ICT suppliers, CRA. Each adds its gap list and evidence pack. A mid-sized company with three modules lands at €14,400 to €18,000.", hi: true },
        { meta: "Partner law firms", price: "Flat yearly fee", unit: "same for every firm, never per mandate", body: "The client chooses the firm from a list. The firm bills its legal work directly. Regulift takes no share and no fee per mandate or lead, which German, Austrian, Italian and French bar rules forbid." },
      ],
      figures: [
        { value: "€9,000 to €18,000", label: "a year for a 50 to 249 person company with three to four regulations, our mid tier" },
        { value: "USD 20,000", label: "median yearly spend on Vanta, usually one framework (Vendr, 374 purchases)" },
        { value: "€244 an hour", label: "average standard rate of German lawyers in 2024 (BRAK STAR survey)" },
      ],
      source: "Sources: Vendr marketplace data, Feb 2026. Vanta and Drata AWS Marketplace listings, Oct 2026. StartComply pricing page, Oct 2026 (€4,500 per framework). BRAK STAR survey via beck-aktuell, Feb 2026. BGH IX ZR 89/23 (Apr 2024), BRAO §49b(3), ÖRAK RL-BA §47, Italian CDF art. 37, French RIN art. 11.3 and 19.4.2. Tier prices are our proposal.",
      notes: "The architecture is the research result, the tier prices are our proposal within the defensible ranges it found. Mid tier 9 to 18 thousand euros sits between StartComply at 10,500 for two frameworks and Vanta at 20 to 40 thousand dollars for one framework at this size. Small companies compare us with data protection officer services at 700 to 5,400 euros, so the small band must stay under 7,200. The lawyer layer is the part most juries will probe: we checked the bar rules in five countries. A fee per mandate was voided by the German Federal Court in 2024, so the firm pays a flat workspace fee and the client chooses the firm. The level of that fee is the one number we cannot back yet; it comes from pilot talks.",
    },
    cheaper: {
      kicker: "Commercial model.\nWhy it gets cheaper.", kicker2: "Target, labelled as such",
      title: "Same lawyer, fewer hours: the target and the evidence",
      lead: "Our target is a legal bill about 60% lower for a readiness review. Published studies measure about 20% time saved when a lawyer uses AI and still does the discovery. The difference is where the hours go: we remove the discovery before the clock starts.",
      points: [
        "Randomised trial: about 20% time saved per legal task with AI assistance (Schwarcz et al., 2025).",
        "Billing data: fact-finding-type tasks are 19 to 23% of invoiced hours on average, more in a first compliance review (Remus and Levy, 2017).",
        "Modelled ceiling: 66 to 74% of hourly billed work has automation potential (Clio Legal Trends 2024). A ceiling, not a result.",
        "We will publish measured hours from the first pilots. Until then the 60% stays labelled a target, on the website and here.",
      ],
      chart: { title: "Lawyer hours in our illustrative case", sub: "Forty hours quoted, sixteen as our target", labels: ["Law firm quote", "With Regulift, target"], fact: [26, 2], judge: [14, 14] },
      source: "Sources: Schwarcz, Manning, Barry, Cleveland, Prescott and Rich, AI-Powered Lawyering, 2025. Remus and Levy, 2017, Table 1. Clio Legal Trends Report 2024. The illustrative split of 40 hours is our assumption and is labelled as such.",
      notes: "Do not oversell this. Say the target out loud, say what the studies measure, and say why our mechanism is different from what they measured. Then say we will publish pilot numbers. Juries reward that.",
    },
  },

  conclusion: {
    divider: {
      title: "Two founders, one problem we have both touched.",
      body: "The conclusion covers who we are, why this problem is ours, and what the bootcamp week would be used for.",
      notes: "Section five. Founders and the ask.",
    },
    founders: {
      kicker: "Conclusion.\nThe people behind Regulift.", kicker2: "EIT Digital Master School, 28DIGITAL",
      title: "Meet the founders",
      lead: "We are Simone and Andreas, students at EIT Digital Master School. We met in Budapest during our entry year at ELTE and started building Regulift together.",
      why: "Why us: Andreas has spent the last years connecting company data to AI safely for small and medium companies, building MCP servers and retrieval systems in production. That is the collector. Simone brings the business and innovation track of the programme and runs customer discovery and partnerships. The problem found us through that work: every SME integration started with the same unanswered compliance questions.",
      people: [
        { name: "Simone Mattioli", role: "Co-founder. Customers, partners, programme", bio: "EIT Digital Master School, Autonomous Systems and Intelligent Robotics track. Leads discovery, partner law firms and the application.", photo: "simone-r.png", ratio: 620 / 700 },
        { name: "Andreas Herzinger", role: "Co-founder. Product and engineering", bio: "EIT Digital Master School, Data Science. Freelance AI engineer: AI integrations for SMEs, MCP servers, secure data connections to language models, RAG systems in production.", photo: "andreas-r.png", ratio: 821 / 700 },
      ],
      notes: "Founder-problem fit is a third of the Stage 1 score. Andreas built the exact kind of integrations the collector needs, for the exact kind of company we target. Simone owns the commercial side. Say what each of you will personally do in the first thirty days.",
    },
    close: {
      kicker: "Conclusion.", kicker2: "Regulift, Budapest, October 2026",
      statement: "Regulation, lifted.\nLess spending on compliance, more on competing.",
      cols: [
        { title: "What we ask for", body: "A place in the cohort. Five days to test the inside-out model with customers, founders and investors, and to meet the partner law firms Paris, Brussels and Amsterdam can offer." },
        { title: "What the award would buy", body: "The legal review budget of the first two pilots, so a partner firm's hours are paid and the hour reduction is measured, plus the second and third collector connectors." },
        { title: "What you can check today", body: "The live website, the source-checked figures behind every number in this deck, and the research reports on regulations, countries and pricing." },
      ],
      contact: "simo-hue.github.io/Business   |   Simone Mattioli and Andreas Herzinger, EIT Digital Master School, Budapest",
      notes: "Close on the mission sentence. The ask is a place, not money. Say what the award would be spent on in one breath, then stop and take questions.",
    },
  },
};
