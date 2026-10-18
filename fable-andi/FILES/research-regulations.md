# Regulift: which regulations to start with, and in what order

Prepared 2026-10-18 for the EIT Community AI Entrepreneurs Lab application (deadline 21 October 2026) and later investor conversations. All sources were opened on 2026-10-18 unless a line says otherwise. Legal texts were read on EUR-Lex. Figures are quoted from the source with their location.

Quality grades, as in the earlier source check (number-claims-sources.md):

- **A**: EU or national legal text, official EU or national document, EU agency, statistical office, or peer-reviewed research.
- **B**: named analyst, commissioned study, or large practitioner dataset with a described method.
- **C**: vendor or practitioner survey with self-reported figures, or law-firm commentary.
- **D**: vendor blog, internal estimate, or secondary snippet.

## 1. One-page summary

**Recommended starting set: GDPR, NIS2 and the AI Act. Add the Cyber Resilience Act (CRA) as the fourth module for companies that ship installable software or firmware.**

**Order of the next additions:**

1. CRA, as the fourth module. Its vulnerability reporting duty has applied since 11 September 2026. Full application follows on 11 December 2027.
2. DORA, as a "selling to banks and insurers" supplier module. It is not a direct obligation for the target customer.
3. Data Act, for SaaS providers. The cloud-switching chapter applies to them directly, and switching charges must reach zero from 12 January 2027.
4. European Accessibility Act, for software companies with consumer-facing e-commerce or banking services.
5. Product Liability Directive, as a by-product of the CRA evidence. It has no regulator and no fines.
6. Drop CSRD. After Omnibus I it only reaches companies with more than 1,000 staff and more than €450 million turnover. It also protects smaller suppliers from data requests.

**Why this set:**

- **GDPR is the one law that applies to every customer.** It also creates the sales trigger. Every business customer must use only processors "providing sufficient guarantees" (GDPR Art. 28(1)). Fines reached about €1.2 billion in 2025.
- **NIS2 has the strongest demand evidence and the most machine-readable evidence.** Germany alone has 20,141 registered entities. ENISA finds that in-scope organisations push security standards, audits and contract clauses down to their suppliers. The required measures (MFA, logging, backup, patching, asset inventory, supplier directory) can largely be read from cloud, identity and HR systems.
- **The AI Act is where scoping is hardest and judgement matters most.** That makes the inside-out context report plus law-firm confirmation most valuable here. AI literacy and transparency duties already apply. High-risk duties for Annex III systems apply from 2 December 2027, which leaves a clear 13-month preparation window.
- **The CRA is a better fourth law than DORA for software makers.** It applies directly to anyone who places software products on the EU market. Its evidence (software bill of materials, vulnerability handling, update mechanism) lives in repositories and CI pipelines.

**The trap, stated plainly.** For a 40-person software company, these apply **directly**:

- GDPR, always.
- The AI Act, depending on its role as provider or deployer.
- The CRA, if it sells installable software, apps or firmware. Pure SaaS is mostly outside the CRA.
- The Data Act cloud-switching rules, if it is a SaaS provider.
- The Accessibility Act, if it offers consumer e-commerce or banking services.
- The Product Liability Directive, for software placed on the market after 9 December 2026.

These arrive **only through customers**:

- **NIS2.** Article 2(1) covers only medium-sized and larger entities. A company with fewer than 50 staff is small unless both its turnover and its balance sheet exceed €10 million. The exceptions in Article 2(2) do not cover ordinary software companies.
- **DORA.** It reaches ICT providers through the contract terms that financial entities must impose under Article 30, and through the register of information under Article 28(3). Direct oversight is only for providers designated as critical. Nineteen were designated in November 2025, including AWS, Google Cloud, Microsoft and SAP.
- **CSRD.** It applies only above 1,000 staff, and suppliers up to 1,000 staff have a statutory right to refuse data requests beyond the voluntary standard.

**One threshold changes the picture.** A SaaS or managed-service company that crosses 50 staff can fall directly under NIS2. Recital 33 of NIS2 says cloud computing includes "Software as a Service (SaaS)". Recital 12 of the CRA says medium-sized cloud providers "fall within the scope of that Directive". National authorities decide how far that reaches, so it is a question for the partner law firm.

**Recommended customer profile.** European B2B software and SaaS companies with 20 to 249 staff that sell to larger or regulated customers. The EU has about 14,989 software firms (NACE J62) with 20 to 49 staff and 8,381 with 50 to 249 (Eurostat, 2024). The sweet spot is 50 to 249 staff, where NIS2 can apply directly and the AI Act and GDPR are real work. Below 50 staff, NIS2 and DORA are supplier questionnaires, so the pitch is "answer your customers' questions with evidence".

## 2. Comparison table

"Share of technical evidence" is our own reading of the article texts, not a measured figure. No study measures it.

| Regulation | Who is in scope (key article) | Dates as of Oct 2026 | Maximum fines | Share of technical evidence | Demand signal | Verdict |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GDPR (2016/679) | Any controller or processor of personal data (Art. 2, 3). Records of processing exemption under 250 staff, with exceptions (Art. 30(5)). | Applies since 25 May 2018. Omnibus IV change to Art. 30(5) is agreed but not yet adopted. | €20m or 4% (Art. 83(5)). €10m or 2% (Art. 83(4)). | Medium. Records of processing fields, processors, transfers, retention and security measures are readable. Legal basis and purposes are judgement. | Strong. Fines of about €1.2bn in 2025. 97% of German firms with 20+ staff report a high burden. | **Start.** |
| NIS2 (2022/2555) | Annex I or II sectors, medium-sized and larger (Art. 2(1)). Cloud (incl. SaaS, recital 33), data centres, managed service providers (Annex I pt 8, 9). Small firms only via exceptions (Art. 2(2)). Suppliers via Art. 21(2)(d). | Transposition due 17 Oct 2024. Germany in force 6 Dec 2025. Austria in force 1 Oct 2026. Amendment proposal of 20 Jan 2026 pending. | Essential: at least €10m or 2%. Important: at least €7m or 1.4% (Art. 34(4), (5)). Management liability (Art. 20). | High. MFA, logging, backup, patching, asset inventory and supplier directory are readable. Scope and proportionality are judgement. | Strongest. 20,141 German registrations. Commission referred four states to the Court. ENISA finds supplier requirements are widespread. | **Start**, as supplier evidence below 50 staff and as a direct duty above. |
| AI Act (2024/1689, amended by 2026/1744) | Providers and deployers (Art. 2(1)). High-risk uses in Annex III, e.g. recruitment (pt 4(a)) and credit scoring (pt 5(b)). | Prohibitions and literacy since 2 Feb 2025. General-purpose AI since 2 Aug 2025. Art. 50 transparency since 2 Aug 2026. Annex III high-risk from 2 Dec 2027. Annex I from 2 Aug 2028. | €35m or 7% (Art. 99(3)). €15m or 3% (Art. 99(4)). €7.5m or 1% (Art. 99(5)). Lower of the two for SMEs (Art. 99(6)) and small mid-caps (new Art. 99(6a)). | Low to medium. AI inventory, versions, interfaces and logs are readable. Classification, role and the Art. 6(3) exemption are judgement. | Medium. AI use rose to 20% of EU firms in 2025. Only 24% of German firms had dealt with the Act in 2024. No enforcement yet. | **Start.** |
| CRA (2024/2847) | Manufacturers placing products with digital elements on the market (Art. 2, 3(1)). SaaS mostly outside (recital 12). | Notified bodies since 11 Jun 2026. Reporting (Art. 14) since 11 Sep 2026. Full application 11 Dec 2027 (Art. 71). | €15m or 2.5% (Art. 64(2)). €10m or 2% (Art. 64(3)). Micro and small firms are not fined for missing the 24-hour deadline (Art. 64(10)(a)). | High. Software bill of materials, vulnerability handling, tests and updates are readable. Product class and risk assessment are judgement. | Medium. Impact assessment: about €29bn in costs. In an ENISA SME survey, 13% understood the documentation requirements well. | **Fourth module, next addition.** |
| DORA (2022/2554) | Financial entities (Art. 2). ICT providers via contracts (Art. 30) and register data (Art. 28(3)). Critical providers overseen directly (Art. 31). | Applies since 17 Jan 2025 (Art. 64). | Set by member states (Art. 50), with no fixed ceiling in DORA. Critical providers: up to 1% of average daily turnover per day (Art. 35(8)). | Medium to high on the supplier side. Data locations, subcontractors and service levels are readable. Criticality and contract terms are judgement. | Strong in finance. Only 6.5% of 947 registers passed all data-quality checks in the dry run. | **Later module** for suppliers to finance. |
| Data Act (2023/2854) | Connected-product makers (Ch. II, micro and small exempt, Art. 7(1)). All data processing service providers, incl. SaaS (Ch. VI, recital 81), with no SME carve-out. | Applies since 12 Sep 2025. Art. 3(1) for products placed on the market after 12 Sep 2026. No switching charges from 12 Jan 2027 (Art. 29(1)). | Set by member states (Art. 40). Data protection authorities can fine up to the GDPR Art. 83(5) level for Ch. II, III, V (Art. 40(4)). | Low. Data formats and export endpoints are readable. Most duties are contract terms. | Weak. Commission cost estimates only. No enforcement found. | **Later**, as a SaaS contract module. |
| European Accessibility Act (2019/882) | Listed products and services, including consumer e-commerce and banking. Micro service providers exempt (Art. 4(5)). | Applies since 28 Jun 2025 (Art. 31(2)). | Set by member states (Art. 30). | Medium. Accessibility can be tested automatically. The disproportionate burden assessment is judgement. | Not researched in depth. | **Later**, only for consumer-facing software. |
| Product Liability Directive (2024/2853) | Manufacturers of products, including software and SaaS (Art. 4(1), recital 13). Non-commercial open source is excluded (Art. 2(2)). | Products placed on the market after 9 Dec 2026 (Art. 2(1)). Transposition by 9 Dec 2026 (Art. 22). | No fines. Civil, no-fault liability. Only natural persons are compensated, and professional property and data are excluded (Art. 6). | Low as a duty. Useful as evidence for court disclosure (Art. 9) and for rebutting a presumed defect (Art. 10). | Weak. No enforcement yet. | **By-product** of CRA evidence. No standalone module. |
| CSRD (2022/2464, amended by 2026/470) | Above €450m turnover and above 1,000 staff. Suppliers up to 1,000 staff may refuse requests beyond the voluntary standard. | Omnibus I of 24 Feb 2026 in force. | Set by member states. | Low for our collector. Data is finance and sustainability, not IT systems. | Collapsed. The Commission says the number of companies falls by about 80%. | **Drop.** |

## 3. One section per regulation

### 3.1 GDPR

**Scope.** GDPR applies to the processing of personal data by any controller or processor in the EU, and to non-EU firms that target EU residents (Art. 2 and 3). The records of processing duty in Art. 30 "shall not apply to an enterprise or an organisation employing fewer than 250 persons unless the processing it carries out is likely to result in a risk to the rights and freedoms of data subjects, the processing is not occasional, or the processing includes special categories of data" (Art. 30(5)). A software company that processes customer data routinely is "not occasional", so in practice it keeps records.

**Dates.** GDPR has applied since 25 May 2018. Two changes are pending, and neither is law yet:

- The Omnibus IV proposal (COM(2025) 501, procedure 2025/0130(COD)) would widen the Art. 30(5) exemption to 750 staff, according to law-firm summaries. The Parliament's committee approved the text agreed with the Council on 2 July 2026. The Legislative Observatory status on 18 October 2026 is "Awaiting Parliament's position in 1st reading".
- The Digital Omnibus on data (COM(2025) 837, procedure 2025/0360(COD), 19 November 2025) amends GDPR, the Data Act, NIS2 and DORA. Its status is "Awaiting committee decision".

**Penalties.** Up to €20 million or 4% of worldwide annual turnover (Art. 83(5)). Up to €10 million or 2% for breaches such as processor and security duties (Art. 83(4)).

**Readiness engagement.** A typical review produces:

- Records of processing under Art. 30(1)(a) to (g): purposes, categories of data subjects and data, recipients, third-country transfers, erasure time limits, and a description of security measures.
- Processor contracts under Art. 28(3).
- Data protection impact assessments under Art. 35(7): description of processing, necessity and proportionality, risks, and measures.
- Breach procedures under Art. 33, which sets a 72-hour notification.

**Technical evidence versus judgement.** Medium. These can be read from systems:

- Categories of data, from database schemas and HR and CRM fields.
- Recipients, from the vendor list and payment records.
- Transfers, from cloud regions.
- Retention, from deletion jobs.
- Security measures, from identity and encryption settings.

These need judgement:

- The legal basis under Art. 6.
- The purposes.
- The necessity and risk parts of an impact assessment.
- Whether a processor contract is adequate.

The earlier source check found that the most common fine triggers are "insufficient legal basis" (669 fines) and "non-compliance with general data processing principles" (644 fines). Next is "insufficient technical and organisational measures" (418 fines) (CMS Enforcement Tracker Report 2025, B). The first two are judgement. The third is mostly evidence.

**Demand signals.**

- DLA Piper: "European supervisory authorities issued fines totalling approximately EUR1.2bn" for the year from 28 January 2025, "broadly matching the previous year's figure". Cumulative fines are "EUR7.1bn" since May 2018. Breach notifications per day rose by "22%", from 363 to 443 (Jan 2026, p. 4, B).
- CMS Enforcement Tracker: "a total of 2,685 fines" and "approximately EUR 6.11 billion" in published fines as of March 2026. CMS adds that real case numbers are "likely to be significantly higher" (2026 executive summary, pp. 2 to 3, B).
- Bitkom: "praktisch alle Unternehmen (97 Prozent)" report a high data protection burden, and 44% a very high one. Method: 603 firms with 20+ staff, phone survey, 2025 (9 Sep 2025, B). Bitkom lobbies for reform, so read this as a pain signal, not as neutral measurement.
- The Commission's own view: "SMEs carrying out low-risk processing activities do not bear a substantial compliance burden", but "most SMEs do not have in-house data protection expertise" (COM(2024) 357, section 5.2, A).

**Verdict.** Start here. GDPR is the only regulation that applies to every customer. It is also the entry point into every B2B sales cycle, through processor due diligence.

### 3.2 NIS2

**Scope.** NIS2 applies to entities "of a type referred to in Annex I or II which qualify as medium-sized enterprises under Article 2 of the Annex to Recommendation 2003/361/EC, or exceed the ceilings for medium-sized enterprises" (Art. 2(1)). Under that Recommendation, a small enterprise has fewer than 50 staff and turnover or balance sheet of no more than €10 million. Exceptions "regardless of their size" (Art. 2(2)) cover telecoms providers, trust service providers, top-level domain registries and DNS providers, sole providers of essential services, and entities designated as critical. Ordinary software companies are not on that list.

The digital rows of Annex I include:

- Point 8: "Cloud computing service providers", "Data centre service providers", "Content delivery network providers" and "Trust service providers".
- Point 9: "Managed service providers" and "Managed security service providers".

Recital 33 says the service models of cloud computing "include, inter alia, Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)". So a SaaS company with 50 or more staff can be an important entity. Above the medium-sized ceilings (250 staff, or turnover above €50m and balance sheet above €43m) it becomes essential (Art. 3(1)(a)). National authorities apply this definition. A partner firm must confirm it per country.

**The supplier route.** Covered entities must address "supply chain security, including security-related aspects concerning the relationships between each entity and its direct suppliers or service providers" (Art. 21(2)(d)). They must take into account "the overall quality of products and cybersecurity practices of their suppliers and service providers, including their secure development procedures" (Art. 21(3)). This is how NIS2 reaches a 40-person company.

**Dates.**

- Transposition deadline: 17 October 2024, applying from 18 October 2024 (Art. 41).
- The Commission sent reasoned opinions to 19 member states on 7 May 2025 (Commission, A).
- On 8 July 2026 it referred Ireland, Spain, France and the Netherlands to the Court of Justice. It said "most complied" (IP/26/1499, A).
- Germany's implementing law was published in BGBl. 2025 I Nr. 301 and entered into force on 6 December 2025 (BSI, A).
- Austria's NISG 2026, BGBl. I Nr. 94/2025, entered into force on 1 October 2026 (RIS, A).
- The Commission proposed targeted amendments on 20 January 2026. Law-firm summaries say these include a lighter regime for small mid-caps (C, not verified on the Commission site). This is a proposal, not law.

**Penalties.** Essential entities: "a maximum of at least EUR 10 000 000 or of a maximum of at least 2 % of the total worldwide annual turnover" (Art. 34(4)). Important entities: at least €7 million or 1.4% (Art. 34(5)). Management bodies "approve the cybersecurity risk-management measures", "oversee its implementation and can be held liable" (Art. 20(1)).

**Readiness engagement.** The core is the list of ten measures in Art. 21(2)(a) to (j). Among them:

- Risk analysis.
- Incident handling.
- "business continuity, such as backup management and disaster recovery".
- Supply chain security.
- "vulnerability handling and disclosure".
- Cryptography.
- "human resources security, access control policies and asset management".
- "the use of multi-factor authentication".

For cloud, data-centre, managed service and several other digital providers, Implementing Regulation (EU) 2024/2690 adds binding technical detail. Its annex covers, for example, monitoring and logging (3.2), backup (4.2), the supplier directory (5.2), patch management (6.6), access rights (11.2), privileged accounts (11.3), MFA (11.7) and asset inventory (12.4) (A). Reporting runs on a 24-hour early warning, a 72-hour notification and a final report after one month (Art. 23(4)).

**Technical evidence versus judgement.** High. ENISA's implementation guidance lists evidence such as "Logs showing MFA being used", "Configuration settings of the logging function" and a "Registry of direct suppliers and service providers" (ENISA Technical Implementation Guidance v1.0, June 2025, A). ENISA also maps each requirement to ISO/IEC 27001:2022 and other frameworks. It notes that "a single piece of evidence may support various requirements". It warns that the mapping is not "a measure of equivalency" (A). Judgement is needed for scope and size, proportionality, and whether an incident is "significant".

**Demand signals.**

- BSI: "Bis zum 30.09.2026 ... insgesamt 20.141 Einrichtungen nach NIS-2 registriert", of which 13,252 are important and 6,837 essential. Manufacturing is the largest sector with 4,739 (NIS-2 in Zahlen, Q3 2026, A).
- BSI expects "rund 29.500" supervised entities (press release, 5 Dec 2025, A). The gap of about 9,000 unregistered entities is our own calculation, not a BSI statement.
- Commission estimate: about 110,000 entities in scope across the EU, of which about 67,000 essential and 43,000 important (SWD(2020) 345, Part 1, p. 71, A).
- ENISA, on suppliers: "90%" of organisations implement specific supply chain controls. These include "requiring suppliers to comply with security standards and maintain certifications (63%)", "supplier risk assessments or audits (54%)" and "cybersecurity requirements in supplier contracts (48%)" (NIS Investments 2025, p. 26, n=1,080, A). This is the clearest evidence that NIS2 reaches small software suppliers.
- ENISA, on readiness: 63% of SMEs had no security assessment in the past 12 months (NIS Investments 2025, p. 22, A). "89% of organisations will require more cybersecurity staff to comply with NIS 2" (NIS Investments 2024, A).

**Verdict.** Start here. For firms under 50 staff, position NIS2 as "answer your customers' supplier questionnaires with evidence". For SaaS and managed-service firms with 50 or more staff, it is a direct duty that a partner firm must confirm.

### 3.3 EU AI Act

**Scope.** The AI Act applies to "providers placing on the market or putting into service AI systems ... in the Union", to "deployers of AI systems that have their place of establishment or are located within the Union", and to non-EU providers and deployers whose output is used in the EU (Art. 2(1)(a) to (c)). Annex III lists high-risk uses. Two matter for software companies and their customers:

- "AI systems intended to be used for the recruitment or selection of natural persons, in particular ... to analyse and filter job applications, and to evaluate candidates" (point 4(a)).
- AI systems "to evaluate the creditworthiness of natural persons or establish their credit score" (point 5(b)).

A provider who decides that an Annex III system is not high-risk under Art. 6(3) "remains obligated to document its assessment before that AI system is placed on the market" (Regulation 2026/1744, recital on Art. 6(3) registration, A).

**Dates, after the Digital Omnibus on AI.** Regulation (EU) 2026/1744 of 8 July 2026 was published on 24 July 2026 (A).

- Prohibitions and AI literacy have applied since 2 February 2025. New prohibitions inserted by the omnibus apply from 2 December 2026 (amended Art. 113(a)).
- General-purpose AI rules have applied since 2 August 2025 (Art. 113(b)).
- The general application date, including the Art. 50 transparency duties, was 2 August 2026. Generative systems already on the market before then have until 2 December 2026 to meet the marking duty in Art. 50(2) (new Art. 111(4)).
- High-risk duties apply "2 December 2027 as regards AI systems classified as high-risk pursuant to Article 6(2) and Annex III" and "2 August 2028 as regards AI systems classified as high-risk pursuant to Article 6(1) and Annex I" (amended Art. 113(c)).
- The AI literacy duty is softer. Providers and deployers "shall take measures to support the development of AI literacy", and this "does not require providers or deployers to guarantee any specific level of AI literacy" (new Art. 4(1)).

**Penalties.**

- Prohibited practices: up to €35 million or 7% (Art. 99(3)).
- Provider, deployer and Art. 50 duties: up to €15 million or 3% (Art. 99(4)).
- Misleading information to authorities: up to €7.5 million or 1% (Art. 99(5)).
- For SMEs, the lower of the two amounts applies (Art. 99(6)). The omnibus extends that rule to small mid-caps (new Art. 99(6a)).

**Readiness engagement.** The first step is an inventory: which AI systems the company builds or uses, in which role, and for which purpose. Then comes classification against Art. 5, Art. 6 and Annex III. For providers of high-risk systems, technical documentation follows. It "shall contain, at a minimum, the elements set out in Annex IV" (Art. 11(1)). Annex IV starts with purpose, version, interactions with other systems, software versions and hardware.

**Technical evidence versus judgement.** Low at the start, then documentation-heavy. These can be read from systems:

- The inventory of AI services and models, from code, API keys, billing and SaaS lists.
- Versions and interfaces, from repositories.
- Logs.

Classification needs judgement. appliedAI classified 106 enterprise AI systems: "18% of the AI systems are in the high-risk class, 42% are low-risk, and for 40% it is unclear" (appliedAI, March 2023, p. 4, B). Three caveats apply to this figure:

- It used the 2021 draft, not the final Act.
- The sample is appliedAI's own use-case database.
- The authors say "most of the unclear cases could fall into the lower risk category".

**Cost.** The Commission's impact assessment puts fixed compliance costs at "€6 000 - €7 000 for an average high-risk AI system of € 170 000, with another €3 000 to € 7 500 for conformity assessment" (SWD(2021) 84, p. 75, A). The supporting CEPS study gives per-requirement costs, for example "Document and record keeping: EUR 4,390" and "Human oversight: EUR 7,764". It states that "We made the methodological choice to exclude the costs of external legal advice and consultancy fees" (CEPS et al., April 2021, B).

**Demand signals.**

- Eurostat: the share of EU enterprises with 10+ staff using AI rose from 13.5% in 2024 to 20.0% in 2025. Medium firms (50 to 249 staff) rose from 21.0% to 30.4%. Small firms (10 to 49 staff) rose from 11.2% to 17.0% (dataset isoc_eb_ai, A).
- Bitkom: 24% of German firms had dealt with the AI Act and 24% had never heard of it (602 firms with 20+ staff, Sep 2024, B). This is now two years old.
- No AI Act enforcement action was found.

**Verdict.** Start here. The AI Act is where the inside-out inventory plus law-firm confirmation is most valuable, because the facts are hidden in systems and the classification is a legal judgement.

### 3.4 Cyber Resilience Act

**Scope.** The CRA covers "a software or hardware product and its remote data processing solutions" (Art. 3(1)). Recital 12 limits it for SaaS: "cloud services designed and developed outside the responsibility of a manufacturer of a product with digital elements do not fall within the scope of this Regulation. Directive (EU) 2022/2555 applies to cloud computing services and cloud service models, such as Software as a Service (SaaS)". A company that ships installable software, mobile apps, agents, SDKs or firmware is in scope. A pure web SaaS company mostly is not.

**Dates.** "This Regulation shall apply from 11 December 2027. However, Article 14 shall apply from 11 September 2026 and Chapter IV (Articles 35 to 51) shall apply from 11 June 2026" (Art. 71(2)). Under Article 14, manufacturers must send "an early warning notification of an actively exploited vulnerability, without undue delay and in any event within 24 hours". This applies to products already on the market.

**Penalties.**

- Essential requirements and Art. 13 and 14 duties: up to €15 million or 2.5% (Art. 64(2)).
- Other listed duties: up to €10 million or 2% (Art. 64(3)).
- Misleading information: up to €5 million or 1% (Art. 64(4)).
- Micro and small manufacturers are not fined for missing the 24-hour early-warning deadline (Art. 64(10)(a)).

**Readiness engagement.** The engagement covers:

- The Annex I essential requirements.
- Vulnerability handling (Annex I, Part II), including "a software bill of materials in a commonly used and machine-readable format covering at the very least the top-level dependencies".
- A coordinated vulnerability disclosure policy, security testing and secure updates.
- The technical documentation in Annex VII.

**Technical evidence versus judgement.** High. The software bill of materials, dependency and vulnerability data, test reports and update mechanisms all live in repositories and CI pipelines. Product class, the risk assessment, the support period and whether a vulnerability is "actively exploited" need judgement. The impact assessment estimates that "documentation and reporting obligations would respectively represent 60 % and 40% of the total costs" of that cost item. It notes that "SMEs tend to turn to external consultants" (SWD(2022) 282, A).

**Demand signals.**

- The Commission estimated compliance costs of "up to roughly EUR 29 billion". It counted 388,532 to 615,272 enterprises in scope, "99.58%" of them SMEs (SWD(2022) 282, Part 1, p. 27, A).
- ENISA's SME survey found that 66% were familiar with the CRA, but only 13% understood the documentation requirements well (June 2026, n=194, A). ENISA states that the sample is not representative.
- ENISA reported that 85% of organisations need more staff to meet the CRA (NIS Investments 2024, A).

**Verdict.** Add as the fourth module, first among the next additions. It belongs in the starting set for any customer that ships software products.

### 3.5 DORA

**Scope.** DORA applies to financial entities (Art. 2). An "ICT third-party service provider" is simply "an undertaking providing ICT services" (Art. 3(19)). Providers are reached in two ways:

- Contracts must contain the terms in Art. 30. For all ICT services, these include locations "where data is to be processed, including the storage location", incident assistance and cooperation with authorities (Art. 30(2)). For critical or important functions, they add "unrestricted rights of access, inspection and audit" and participation in threat-led penetration testing (Art. 30(3)).
- Financial entities must keep "a register of information in relation to all contractual arrangements on the use of ICT services" (Art. 28(3)).

Only providers designated as critical are supervised directly (Art. 31). The ESAs designated 19 on 18 November 2025, including AWS, Google Cloud, Microsoft, SAP, Deutsche Telekom and IBM (ESAs list, A).

**Dates.** DORA has applied since 17 January 2025 (Art. 64).

**Penalties.** DORA sets no fine ceiling for financial entities. Member states lay down the rules (Art. 50). The "2% or €10m" figure in the strategy brief is not in the regulation. Critical providers face periodic penalty payments of "up to 1 % of the average daily worldwide turnover" (Art. 35(8)).

**Readiness engagement, supplier side.** Suppliers need to:

- Fill the customer's register fields, under Implementing Regulation (EU) 2024/2956. These include supply-chain rank and the "Location of the data at rest (storage) using the ISO 3166-1 alpha-2 code".
- Accept the Art. 30 contract terms.
- Prove business continuity and security.

**Technical evidence versus judgement.** Medium to high on the supplier side. Subcontractors, data locations, service levels and continuity tests can be read. Whether a function is "critical or important", substitutability and contract terms need judgement.

**Demand signals.** In the ESAs' register dry run, "Out of the 947 registers ... analysed, 6.5% successfully passed all data quality checks". "Missing mandatory information" made up "86% of all data errors" (ESA 2024 35, 17 Dec 2024, pp. 4 to 5, A). The 6.5% is a share of the 947 analysed registers, not of all 1,039 participants. No DORA fines were found.

**Verdict.** Later module, for customers who sell to banks and insurers. Keep it on the website as "if you sell to financial firms", not as a law that applies to all.

### 3.6 Data Act

**Scope.** The Data Act has two parts relevant to software companies:

- **Connected products and related services (Chapter II).** Chapter II "shall not apply to data generated through the use of connected products manufactured or designed or related services provided by a microenterprise or a small enterprise", unless it has larger partners or linked enterprises (Art. 7(1)).
- **Switching between data processing services (Chapter VI).** A data processing service is a digital service giving "on-demand network access to a shared pool of configurable, scalable and elastic computing resources" (Art. 2). Recital 81 names IaaS, PaaS and SaaS. Chapter VI has no SME exemption. The only carve-outs are custom-built services and test versions (Art. 31).

**Dates.** "It shall apply from 12 September 2025." Art. 3(1) applies "to connected products and the services related to them placed on the market after 12 September 2026" (Art. 50). "From 12 January 2027, providers of data processing services shall not impose any switching charges" (Art. 29(1)).

**Penalties.** Member states set penalties (Art. 40(1)). Data protection authorities may fine for Chapters II, III and V "up to the amount referred to in Article 83(5)" of GDPR (Art. 40(4)).

**Technical evidence versus judgement.** Low. Export formats and data structures can be read. The duties themselves are mostly contract terms: notice periods, transition periods, exit support and charges.

**Demand signals.** The impact assessment estimates "EUR 410 million in one-off costs and EUR 88 million in recurrent costs" for manufacturers (SWD(2022) 34, section 8.1, A). No enforcement was found.

**Verdict.** Later, as a SaaS contract module. Note it in the customer's context report from day one, because it applies directly to every SaaS provider.

### 3.7 European Accessibility Act

**Scope.** The Act covers listed products and services, including "e-commerce services" and consumer banking. "Microenterprises providing services shall be exempt" (Art. 4(5)). A microenterprise has fewer than 10 staff and no more than €2 million turnover or balance sheet (Art. 3).

**Dates.** Member states apply the measures from 28 June 2025 (Art. 31(2)). **Penalties** are national (Art. 30).

**Technical evidence versus judgement.** Medium. Accessibility can be tested automatically against the web interface. The disproportionate burden assessment needs judgement.

**Verdict.** Later, only for consumer-facing software. Demand was not researched in depth.

### 3.8 Product Liability Directive

**Scope.** "'product' ... includes electricity, digital manufacturing files, raw materials and software" (Art. 4(1)). Recital 13 says this applies "irrespective of whether the software is stored on a device, accessed through a communication network or cloud technologies, or supplied through a software-as-a-service model". Free and open-source software "developed or supplied outside the course of a commercial activity" is excluded (Art. 2(2)). Compensation covers death or injury, damage to property except "property used exclusively for professional purposes", and "destruction or corruption of data that are not used for professional purposes" (Art. 6(1)). For B2B software this sharply limits exposure.

**Dates.** The Directive applies "to products placed on the market or put into service after 9 December 2026" (Art. 2(1)). Transposition is due by the same date (Art. 22).

**Penalties.** None. This is civil, no-fault liability.

**Technical evidence.** The Directive imposes no compliance duty to evidence. Its value is defensive. Courts can order disclosure of evidence (Art. 9). Non-compliance with mandatory safety requirements, including "safety-relevant cybersecurity requirements", feeds a presumption of defect (Art. 7(2), Art. 10). A missing security update can remove the manufacturer's defence (Art. 11(2)). CRA evidence serves this directly.

**Verdict.** By-product of the CRA module. Do not sell it on its own.

### 3.9 CSRD

**Scope after Omnibus I.** Directive (EU) 2026/470 of 24 February 2026 limits reporting to "undertakings which, on their balance sheet dates, exceed a net turnover of EUR 450 000 000 and an average number of 1 000 employees" (amended Art. 19a(1) of Directive 2013/34/EU, A). Suppliers up to 1,000 staff are "protected undertakings". They get "a statutory right to refuse to provide information exceeding those limits" of the voluntary standard (recital 12 of 2026/470, A). The Commission's proposal said the number of companies in scope would be "reduced by about 80%" (COM(2025) 81, p. 5, A).

**Correction to the strategy brief.** The brief says the thresholds are "more than 1,000 employees AND (more than €50M turnover or more than €25M assets)". The adopted text says more than €450 million turnover and more than 1,000 employees.

**Verdict.** Drop. The data is financial and sustainability data, not IT systems, and the target customer is protected from requests.

## 4. Where lawyer and consultant hours go

No published study measures the split between fact-finding and legal judgement in a compliance readiness engagement. The best available evidence:

- **The AI Act cost study left legal fees out.** CEPS states that "Calculating the number of hours of legal advice a company would need ... is not yet possible". It quotes legal fees "ranging from EUR 250 to EUR 1,600 per hour" (CEPS et al., April 2021, pp. 165 to 166, B).
- **CRA documentation is the bulk of conformity cost.** Documentation and reporting are about "9% of additional product development costs", split 60% documentation and 40% reporting. The Commission notes that the underlying estimate "could not be verified" (SWD(2022) 282, Box 1, A).
- **NIS2 costs centre on documenting compliance.** The impact assessment names "documenting compliance through audit reports, results of tests, scanning". It notes that "less than half of enterprises reported maintaining log files for analysis after security incidents (45 %)" (SWD(2020) 345, Part 1, pp. 74 to 75, A).
- **Data mapping is informal.** An IAPP survey from 2016 found that "more than 66 percent of companies conduct data inventory and mapping informally with email and spreadsheets" (IAPP news, 31 Jul 2017, C, old).
- **Billing data from US firms.** Billing data put fact-finding-type tasks at about 19% to 23% of large-firm hours, mostly in litigation (Remus and Levy, 2017, A). This was covered in the earlier source check.
- **The register dry run shows the cost of missing facts.** "Missing mandatory information" caused 86% of data errors in the DORA register dry run (ESAs, Dec 2024, A).

The honest conclusion is that the documentation and evidence layer is the largest identifiable cost in the CRA and NIS2 estimates, and the facts are missing in practice. The hours a lawyer spends on fact-finding are not measured anywhere. Regulift's pilots should measure them.

## 5. The customer profile the set implies

**Size band: 20 to 249 staff, with the sweet spot at 50 to 249.**

- **Below 20 staff** there is little budget, and NIS2, DORA and most of the AI Act's high-risk duties do not apply.
- **From 20 to 49 staff** GDPR applies in full and the AI Act applies by role. NIS2 and DORA arrive as customer questionnaires and contract terms. The product sells as "answer your customers with evidence".
- **From 50 to 249 staff** a SaaS, cloud or managed-service company can be a NIS2 important entity in its own right. AI use is more common: 30.4% of medium firms used AI in 2025 (Eurostat, A). This is where the multi-law overlap is densest and in-house legal capacity is thin.
- **From 250 staff** companies tend to have GRC teams and enterprise tools.

**Sector: B2B software and SaaS, plus managed IT service providers.** The market size, from Eurostat structural business statistics (sbs_sc_ovw, NACE J62 computer programming and consultancy, EU-27, 2024, A):

| Size class | Enterprises |
| :--- | ---: |
| 20 to 49 persons employed | 14,989 |
| 50 to 249 persons employed | 8,381 |
| 250 or more | 1,897 |

That is about 23,400 software firms in the target band, before counting NACE J63 data processing and hosting firms. Customers that ship installable software or firmware get the CRA module. Customers that sell to banks and insurers get the DORA module.

**Buyer.** The CTO or head of engineering together with the managing director. The trigger is a customer security questionnaire, a processor contract, or an AI feature reaching production.

## 6. Slide-ready facts

1. Germany registered 20,141 NIS2 entities by 30 September 2026, against about 29,500 the BSI expects to supervise. (BSI, NIS-2 in Zahlen, Q3 2026, and press release of 5 Dec 2025, A)
2. 63% of organisations covered by NIS2 require suppliers to comply with security standards and maintain certifications, and 48% write cybersecurity requirements into supplier contracts. (ENISA, NIS Investments 2025, p. 26, A)
3. Only 6.5% of 947 DORA registers of information passed all data-quality checks in the 2024 dry run, and 86% of errors were missing mandatory information. (ESAs, ESA 2024 35, Dec 2024, A)
4. European data protection authorities issued about €1.2 billion in GDPR fines in 2025, and €7.1 billion since 2018. (DLA Piper GDPR fines survey, Jan 2026, B)
5. The share of EU firms using AI rose from 13.5% in 2024 to 20.0% in 2025, and to 30.4% among firms with 50 to 249 staff. (Eurostat, isoc_eb_ai, A)
6. AI Act high-risk duties for Annex III systems such as recruitment and credit scoring now apply from 2 December 2027. (Regulation (EU) 2026/1744, amended Art. 113, A)
7. In a study of 106 enterprise AI systems, 40% could not be clearly classified as high-risk or not. (appliedAI, 2023, B, based on the 2021 draft)
8. Cyber Resilience Act reporting of actively exploited vulnerabilities within 24 hours has applied since 11 September 2026. (Regulation (EU) 2024/2847, Art. 71(2), A)
9. NIS2 counts Software as a Service as cloud computing, so a SaaS company with 50 or more staff can be covered directly. (Directive (EU) 2022/2555, recital 33 and Annex I, A)
10. Only 13% of SMEs in an ENISA survey said they understood the CRA's documentation requirements well. (ENISA SME CRA survey, June 2026, n=194, A, not representative)
11. After Omnibus I, CSRD only applies to companies with more than 1,000 staff and more than €450 million turnover. (Directive (EU) 2026/470, A)
12. 97% of German firms with 20 or more staff report a high data protection burden. (Bitkom, Sep 2025, n=603, B)
13. Nearly two-thirds of European SMEs name regulatory complexity as their top concern. (European Commission SME survey, 2 Jul 2025, A)
14. NIS2 and the CRA both use a 24-hour, 72-hour and one-month reporting clock, and GDPR's 72-hour breach notice fits inside it. (Directive (EU) 2022/2555 Art. 23(4), Regulation (EU) 2024/2847 Art. 14, Regulation (EU) 2016/679 Art. 33, A)

## 7. What could not be found or verified

- No measured split between fact-finding hours and judgement hours in a compliance engagement.
- No credible survey of how many companies receive security questionnaires from customers. Only vendor claims exist.
- No AI Act enforcement action and no DORA fine.
- No Austrian NIS2 registration count.
- No official count of CSRD companies after Omnibus I. Only the Commission's "about 80%" reduction from the proposal exists.
- The Commission's own page for the 20 January 2026 NIS2 amendment proposal was not opened. The summary relies on law-firm commentary (C).
- No grade A or B evidence on whether SOC 2 or ISO 27001 certification satisfies NIS2. ENISA's mapping explicitly says it does not show equivalence.
- The strategy brief's figures on shadow AI and on "85% of CRA firms need staff" come from vendor sources. Only the ENISA staff figure was verified.
- Accessibility Act demand and enforcement were not researched.

## 8. Full source list

All accessed 2026-10-18.

**EU legal texts (EUR-Lex, grade A)**

1. Regulation (EU) 2016/679 (GDPR), Art. 2, 3, 28, 30, 33, 35, 83. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679
2. Regulation (EU) 2024/1689 (AI Act), Art. 2, 6, 11, 26, 99, 113, Annex III, Annex IV. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689
3. Regulation (EU) 2026/1744 (Digital Omnibus on AI), 8 Jul 2026, OJ L 24.7.2026. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202601744
4. Directive (EU) 2022/2555 (NIS2), Art. 2, 3, 20, 21, 23, 34, 41, recital 33, Annex I. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555
5. Commission Implementing Regulation (EU) 2024/2690 (NIS2 technical requirements). https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R2690
6. Regulation (EU) 2022/2554 (DORA), Art. 2, 3, 28, 30, 35, 50, 64. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2554
7. Commission Implementing Regulation (EU) 2024/2956 (register of information templates). https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R2956
8. Commission Delegated Regulation (EU) 2025/301 (DORA incident reporting). https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R0301
9. Regulation (EU) 2024/2847 (Cyber Resilience Act), Art. 3, 14, 64, 71, recital 12, Annex I, Annex VII. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847
10. Regulation (EU) 2023/2854 (Data Act), Art. 2, 3, 7, 23, 29, 31, 40, 50, recital 81. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202302854
11. Directive (EU) 2024/2853 (Product Liability Directive), Art. 2, 4, 6, 7, 9, 10, 11, 22, recital 13. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402853
12. Directive (EU) 2019/882 (European Accessibility Act), Art. 3, 4, 30, 31. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882
13. Directive (EU) 2026/470 (Omnibus I, CSRD and CSDDD), 24 Feb 2026, OJ L 26.2.2026. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202600470

**Legislative procedure records (European Parliament Legislative Observatory, grade A)**

14. Procedure 2025/0130(COD), Omnibus IV, COM(2025) 501. Status "Awaiting Parliament's position in 1st reading". https://oeil.secure.europarl.europa.eu/oeil/en/procedure-file?reference=2025/0130(COD)
15. Procedure 2025/0360(COD), Digital Omnibus, COM(2025) 837. Status "Awaiting committee decision". https://oeil.secure.europarl.europa.eu/oeil/en/procedure-file?reference=2025/0360(COD)

**Commission impact assessments and reports (grade A)**

16. SWD(2020) 345 final, NIS2 impact assessment, Part 1, 16 Dec 2020. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52020SC0345
17. SWD(2021) 84 final, AI Act impact assessment, Part 1, 21 Apr 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021SC0084
18. SWD(2022) 282 final, CRA impact assessment, 15 Sep 2022. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52022SC0282
19. SWD(2022) 34, Data Act impact assessment. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52022SC0034
20. COM(2025) 81, Omnibus I proposal on sustainability reporting, 26 Feb 2025. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52025PC0081
21. COM(2024) 357, Second report on the application of the GDPR, 25 Jul 2024. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52024DC0357
22. European Commission, "Commission calls on 19 Member States to fully transpose the NIS2 Directive", 7 May 2025. https://digital-strategy.ec.europa.eu/en/news/commission-calls-19-member-states-fully-transpose-nis2-directive
23. European Commission, press release IP/26/1499 on NIS2 referrals to the Court of Justice, 8 Jul 2026. https://ec.europa.eu/commission/presscorner/api/documents?reference=IP/26/1499&language=en
24. European Commission, SME survey news release, 2 Jul 2025. https://single-market-economy.ec.europa.eu/news/europes-small-and-medium-sized-enterprises-remain-ambitious-continue-face-persistent-hurdles-scaling-2025-07-02_en

**EU agencies and supervisors (grade A)**

25. ENISA, NIS Investments 2025, main report, Dec 2025. https://www.enisa.europa.eu/sites/default/files/2026-02/NIS%20Investments%202025%20-%20Main%20report.pdf
26. ENISA, NIS Investments 2024, Nov 2024. https://www.enisa.europa.eu/sites/default/files/2024-11/CSPA%20-%20NIS%20Investments%20-%202024_0.pdf
27. ENISA, NIS2 Technical Implementation Guidance v1.0, June 2025, and mapping table v1.2. https://www.enisa.europa.eu/publications/nis2-technical-implementation-guidance
28. ENISA, SME CRA survey report, June 2026. https://digital-skills-jobs.europa.eu/sites/default/files/2026-09/SME%20CRA%20survey%20report.pdf
29. ESAs, DORA dry run exercise summary report, ESA 2024 35, 17 Dec 2024. https://eba.europa.eu/sites/default/files/2024-12/c1454b59-15cc-445e-be14-966e3338cedc/ESA%202024%2035%20DORA%20Dry%20Run%20exercise%20summary%20report%20for%20publication.pdf
30. ESAs, list of designated critical ICT third-party providers, 18 Nov 2025. https://www.eiopa.europa.eu/document/download/56b1ca78-5dd2-4d36-8377-47a538eb7558_en?filename=List%20of%20designated%20CTPPs.pdf

**National authorities and official journals (grade A)**

31. BSI, NIS-2 in Zahlen, Q3 2026 update. https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-in-Zahlen/nis-2-in-zahlen.html
32. BSI, press release "NIS-2-Umsetzungsgesetz in Kraft", 5 Dec 2025. https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251205_NIS-2-Umsetzungsgesetz_in_Kraft.html
33. Bundesgesetzblatt 2025 I Nr. 301, German NIS2 implementation act. https://www.recht.bund.de/bgbl/1/2025/301/VO.html
34. RIS Austria, NISG 2026, BGBl. I Nr. 94/2025. https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40273862/NOR40273862.pdf

**Statistics (Eurostat, grade A)**

35. Eurostat, isoc_eb_ai, enterprises using AI technologies, updated 15 Jun 2026. https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ai?format=JSON&geo=EU27_2020&indic_is=E_AI_TANY&unit=PC_ENT&lang=en
36. Eurostat, sbs_sc_ovw, enterprises by size class, NACE J62, EU-27, 2024, updated 30 Sep 2026. https://ec.europa.eu/eurostat/databrowser/view/sbs_sc_ovw/default/table

**Studies and research**

37. CEPS, ICF, Wavestone. Study to support an impact assessment of regulatory requirements for AI in Europe, final report, Apr 2021. Grade B. https://digital-strategy.ec.europa.eu/en/library/study-supporting-impact-assessment-ai-regulation (copy opened: https://artificialintelligenceact.eu/wp-content/uploads/2022/06/AIA-COM-Impact-Assessment-3-21-April.pdf)
38. appliedAI Initiative. AI Act: Risk Classification of AI Systems from a Practical Perspective, Mar 2023. Grade B. https://www.appliedai.de/uploads/files/Whitepapers/appliedAI-Whitepaper-Risk-Classification-of-AI-Systems-from-a-Practical-Perspective-2023-EN.pdf
39. Remus, D. and Levy, F. Can Robots Be Lawyers? 30 Georgetown Journal of Legal Ethics 501, 2017. Grade A. https://www.iadclaw.org/assets/1/7/10.1-_Remus_Levy.pdf

**Practitioner datasets and surveys**

40. DLA Piper, GDPR fines and data breach survey, Jan 2026. Grade B. https://blogs.dlapiper.com/advocatus/files/2026/01/dla-piper-gdpr-fines-and-data-breach-survey-2026.pdf
41. CMS, GDPR Enforcement Tracker Report 2026, executive summary. Grade B. https://cms.law/en/content/download/882763/file/Enforcement-Tracker-Report%202026_Executive%20Summary_f.pdf
42. CMS, GDPR Enforcement Tracker Report 2025, executive summary. Grade B. https://cms.law/en/aut/publication/gdpr-enforcement-tracker-report-2025/executive-summary
43. Bitkom, "Unternehmen ächzen unterm Datenschutz", 9 Sep 2025, n=603. Grade B. https://www.bitkom.org/Presse/Presseinformation/Unternehmen-aechzen-unterm-Datenschutz
44. Bitkom, "Jedes vierte Unternehmen beschäftigt sich mit AI Act", 9 Sep 2024, n=602. Grade B. https://www.bitkom.org/Presse/Presseinformation/Jedes-vierte-Unternehmen-beschaeftigt-mit-AI-Act
45. IAPP, "Checking that pesky data-mapping box", 31 Jul 2017. Grade C. https://iapp.org/news/a/checking-that-pesky-data-mapping-box

**Commentary used only where no primary source was opened (grade C)**

46. Covington Inside Privacy, "European Commission proposes targeted amendments to NIS2", Jan 2026. https://www.insideprivacy.com/data-security/cybersecurity/european-commission-proposes-targeted-amendments-to-nis2-to-simplify-compliance-and-align-with-proposed-cybersecurity-act-2/
47. Hannes Snellman, "GDPR simplification: what is changing" (Omnibus IV, 750-employee threshold). https://www.hannessnellman.com/news-and-views/blog/gdpr-simplification-what-is-changing/

**Internal inputs (grade D, used as leads only)**

48. number-claims-sources.md, source check of 18 Oct 2026 (this folder).
49. gemini-code-1792061965814.md, strategy brief, section 5 (this folder). Corrections: the CSRD thresholds and the DORA fine ceiling are wrong in the brief.
50. Compliance Brain Market Scan.pdf, 14 Oct 2026 (this folder).
