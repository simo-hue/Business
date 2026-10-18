# Regulift landing page: source check of the number claims

Prepared 2026-10-18. All sources below were opened and read on 2026-10-18 unless a line says otherwise. Figures are quoted from the source. Where a figure could not be verified in the primary document, the report says so.

Quality grades:

- **A**: official EU or national government document, statistical office, EU agency, or peer-reviewed or law-review research with stated method.
- **B**: named analyst house or large practitioner dataset with a described method.
- **C**: vendor or practitioner survey with self-reported or modelled figures.
- **D**: vendor blog, internal estimate, or secondary snippet.

## Summary

| Claim on the page | Verdict | Best source |
| :--- | :--- | :--- |
| 1. "The compliance market is growing. Every forecast says spending goes up, year after year." | Partially backed. Analyst forecasts for security and GRC software do rise every year. "Every forecast" is too strong. EU policy now aims to cut compliance cost, and legal-services turnover did not grow in real terms in Germany or France from 2021 to 2024. | Gartner information security forecast, July 2025 (B). Verdantix GRC forecast, Jan 2025 (B). Eurostat structural business statistics (A). Commission COM(2025) 47 (A). |
| 2. "60% lower legal bill. The target we are building towards." | Not backable as a result. Keep it as a target. The measured literature supports roughly 13% to 22% time savings on lawyer work, with modelled upper bounds far higher. No study measures a pre-lawyer evidence pack in a compliance readiness engagement. | Schwarcz et al., randomized controlled trial, 2025 (A). Remus and Levy, Georgetown Journal of Legal Ethics, 2017 (A). |
| 3. "16 h of lawyer time instead of 40, in our illustrative case." | Not backable from published data. The 16 h figure is just 40 h minus 60%. No fee survey or regulator gives hour counts for a GDPR, NIS2 or AI Act readiness review of a 40-person software company. 40 h is plausible but unproven. | UK government cost model: one DPIA is costed at 4 hours of a legal professional plus 2 clerical hours (A, but UK and low). |
| 4. The four regulations (GDPR, AI Act, NIS2, DORA) are the ones that matter for a European software SME. | Partially backed. GDPR applies. The AI Act applies in part, depending on role. NIS2 usually does not apply directly to a 40-person company, but reaches it through customers' supply-chain duties. DORA only applies indirectly, and only if the company sells to financial firms. The Cyber Resilience Act (CRA) is missing and matters more for many software makers than DORA. | The regulations themselves on EUR-Lex (A). |
| 5. Northstar story: "nine of eleven actions close without a lawyer", "fourteen systems mapped". | Not backable. No source measures what share of compliance gaps are operational rather than legal. Enforcement data cut both ways. | EDPB coordinated enforcement report on the right of access, Jan 2025 (A). CMS GDPR Enforcement Tracker Report 2025 (B). |

## Claim 1: "The compliance market is growing. Every forecast says spending goes up, year after year."

### Evidence for growth

**Information security spending, worldwide (Gartner, July 2025).** Quote: "Worldwide end-user spending on information security is projected to reach $213 billion in 2025, up from $193 billion in 2024, according to Gartner, Inc. Spending is estimated to increase 12.5% in 2026 to total $240 billion." The analyst names regulation as a driver: "higher defense budgets, rising threats, increasing regulatory pressure and better cybersecurity awareness – especially among small and medium-sized businesses – will keep cybersecurity spending strong in the medium to long term." Table totals: 193,408 (2024), 213,025 (2025), 239,759 (2026), million US dollars.

- A secondary blog (softwarestrategiesblog.com, 5 Oct 2026) reports a newer Gartner 3Q26 update with 2026 spending at $247.5 billion and $372.8 billion by 2030. I could not open the Gartner original, so do not cite this figure.

**GRC software, worldwide and Europe (Verdantix, Jan 2025).** Quote: "the global market for governance, risk and compliance (GRC) software will nearly double from $4.98 billion in 2023 to $9.08 billion by 2029, representing a compound annual growth rate (CAGR) of 11%." On regions: "Expenditures on GRC software will continue to remain concentrated in North America and Europe, with CAGRs of 10% and 11% respectively." Caveat: the blog names the CSRD as a main growth driver ("set to impact approximately 50,000 organizations"). The 2025 Omnibus I package has since cut CSRD scope sharply, so this forecast may be too high for Europe.

- An older IDC forecast (2021) projected GRC revenue from $11.3 billion (2020) to about $15.2 billion (2025). I only saw this in search results and did not open the IDC original. It is older and uses a wider market definition.

**NIS2 compliance spending (European Commission impact assessment, Dec 2020).** SWD(2020) 345 final, Part 1/3, p. 90: "an average increase of ICT security spending per sector for three to four years ranging from 12% for the current NIS sectors up to a 22% for the new NIS sectors would lead to a proportionate benefit of such investments". The same document (p. 75) confirms that "a size cap would be applied to exclude from the NIS scope micro and small enterprises."

**NIS2 budgets in practice (ENISA NIS Investments, Nov 2024).** p. 6: "Most organisations anticipate a one-off or permanent increase in their cybersecurity budgets for compliance with NIS 2 though a substantial number of entities will not be able to ask for the required additional budget, a percentage that is especially high for SMEs (34%)." p. 46: "34% of the entities foresee permanent increase to their security budget to maintain NIS 2 Directive compliance and 14% will only need a one-off investment", while "38% of the organisations declare not needing additional budget". p. 27: the median entity "earmarks 9.0% of its IT investments for information security", up 1.9 points on 2022. p. 89: "The IS spend as a share of IT spend continues to grow year-on-year for both SMEs and LEs."

**AI Act compliance cost (European Commission impact assessment, Apr 2021).** SWD(2021) 84 final, Part 1/2, p. 75: "The additional fixed compliance costs per AI system have been estimated at €6 000 - €7 000 for an average high-risk AI system of € 170 000, with another €3 000 to € 7 500 for conformity assessment". p. 70 adds that this is "roughly 4-5%" of development cost and that human oversight costs for AI users are €7,764. p. 72: quality management system audits by notified bodies cost "between €1 000 and €2 000 per day". These are costs per high-risk system, so they only apply where a company has Annex III systems.

**GDPR cost for firms, and the SME burden (Frey and Presidente, Economic Inquiry, 2024).** Peer-reviewed, DOI 10.1111/ecin.13213. Abstract: "We find that the GDPR had the unintended consequence of harming the profitability of companies targeting European consumers through the cost channel. Technology firms experienced a 2.1% decline in profits, but not in sales. [...] The main burdens have been borne by smaller companies."

### Evidence against "every forecast" and "year after year"

**EU policy now targets lower compliance cost (Commission Communication "A simpler and faster Europe", COM(2025) 47, 11 Feb 2025).** p. 6: "the Commission had set the targets to reduce reporting burdens by at least 25% for all companies and 35% for SMEs". Also: "Eurostat has approximated overall recurring administrative costs at EUR 150 billion in the EU in 2022. A 25% reduction of this baseline will require cutting recurring administrative costs by EUR 37.5 billion by the end of the [mandate]." Since then, the Digital Omnibus on AI (Regulation (EU) 2026/1744) has delayed high-risk AI Act duties to December 2027 and softened the AI literacy duty. The Omnibus IV proposal (May 2025) would extend the GDPR record-keeping exemption to firms under 750 staff (not yet verified as adopted).

**The Commission says low-risk SMEs carry little GDPR burden (Second GDPR report, COM(2024) 357, 25 Jul 2024).** Section 5.2: "In line with the GDPR's risk-based approach, SMEs carrying out low-risk processing activities do not bear a substantial compliance burden." It also says "SMEs in certain Member States perceive compliance as complex and fear enforcement" and "most SMEs do not have in-house data protection expertise".

**Legal-services turnover did not grow in real terms everywhere (Eurostat).** Turnover of NACE M69.1 "legal activities", million euros, from dataset sbs_ovw_act, compared with the HICP all-items price index from prc_hicp_aind. Retrieved through the Eurostat API on 2026-10-18.

| Country | Turnover 2021 | Turnover 2024 | Nominal change | Consumer prices 2021 to 2024 |
| :--- | ---: | ---: | ---: | ---: |
| Germany | 31,464 | 33,179 | +5.4% | +18.1% |
| Austria | 3,308 | 4,039 | +22.1% | +20.4% |
| France | 28,946 | 31,892 | +10.2% | +14.5% |
| Italy | 17,989 | 21,013 | +16.8% | +16.5% |

EU-27 legal activities turnover was an estimated €140 billion in 2022. The other EU-27 years in that dataset are confidential. The older series sbs_na_1a_se_r2 shows about €95 billion in 2011 and €120 billion in 2020 (Eurostat rounds these). This is all legal work, not only compliance, so it is a proxy.

### Sources for claim 1

| Source | Publisher | Date | URL | Grade and reason |
| :--- | :--- | :--- | :--- | :--- |
| Gartner forecasts worldwide end-user spending on information security to total $213 billion in 2025 | Gartner | 29 Jul 2025 | https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025 | B. Named analyst with a published forecast series. Security is adjacent to compliance, not the same thing. |
| Spend on GRC software to surpass $9 billion in 2029 (C. O'Donnell) | Verdantix | 29 Jan 2025 | https://www.verdantix.com/insights/blog/spend-on-grc-software-to-surpass-9-billion-dollars-in-2029 | B. Named analyst. The full method sits behind a paywall. The CSRD driver is now out of date. |
| Impact assessment for NIS2, SWD(2020) 345 final, Part 1/3 | European Commission | 16 Dec 2020 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52020SC0345 | A. Official impact assessment. |
| NIS Investments 2024 | ENISA | Nov 2024 | https://www.enisa.europa.eu/sites/default/files/2024-11/CSPA%20-%20NIS%20Investments%20-%202024_0.pdf | A. EU agency survey with a published method. |
| Impact assessment for the AI Act, SWD(2021) 84 final, Part 1/2 | European Commission | 21 Apr 2021 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021SC0084 | A. Official impact assessment. Costs are per high-risk system. |
| Privacy regulation and firm performance: estimating the GDPR effect globally (Frey and Presidente) | Economic Inquiry (Wiley) | 2024 | https://ora.ox.ac.uk/objects/uuid:184b0c7e-6e52-491e-9bac-b9e14e35608c | A. Peer-reviewed econometric study. |
| A simpler and faster Europe, COM(2025) 47 | European Commission | 11 Feb 2025 | https://commission.europa.eu/document/download/8556fc33-48a3-4a96-94e8-8ecacef1ea18_en?filename=250201_Simplification_Communication_en.pdf | A. Official policy document. |
| Second report on the application of the GDPR, COM(2024) 357 | European Commission | 25 Jul 2024 | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52024DC0357 | A. Official report. |
| Eurostat sbs_ovw_act, sbs_na_1a_se_r2, prc_hicp_aind | Eurostat | Data updated 30 Sep 2026 | https://ec.europa.eu/eurostat/databrowser/view/sbs_ovw_act/default/table | A. Official statistics. Only a proxy for compliance spend. |

### Recommended website wording

> The compliance market is growing. Analysts expect spending on security and compliance software to keep rising by double digits each year. We want it to shrink.

If you want a footnote: "Gartner forecasts 12.5% growth in security spending for 2026. Verdantix forecasts 11% a year for GRC software in Europe to 2029."

Drop "every forecast" and "year after year". Some forecasts are flat in real terms, and the EU is actively cutting compliance burden.

## Claim 2: "60% lower legal bill. The target we are building towards."

### What the evidence measures

**Measured time savings from AI on lawyer tasks (randomized controlled trial).** Schwarcz, Manning, Barry, Cleveland, Prescott and Rich, "AI-Powered Lawyering", 2025 working paper (University of Minnesota and University of Michigan). Upper-level law students did six legal tasks with Vincent AI, with OpenAI o1-preview, or without AI. Abstract: "AI assistance significantly boosts productivity in five out of six tested legal tasks, with Vincent yielding statistically significant gains of approximately 38% to 115% and o1-preview increasing productivity by 34% to 140%". On time alone, p. 46: "in the prior study GPT-4 reduced completion time by an average of approximately 22% across four assignments, while Vincent AI achieved an average reduction of 21% across six assignments, and o1-preview resulted in a 19% improvement." "Productivity" here combines quality and speed. The time saving is about 20%.

**How lawyers' billed time splits between fact-finding and judgement.** Remus and Levy, "Can Robots Be Lawyers? Computers, Lawyers, and the Practice of Law", 30 Georgetown Journal of Legal Ethics 501 (2017). Table 1, invoiced hours 2012 to 2015, United States, from Sky Analytics billing data:

| Task | Tier 1 firms, over 1,000 lawyers | Tier 2 to 5 firms |
| :--- | ---: | ---: |
| Document management | 0.4% | 0.7% |
| Case administration and management | 3.7% | 5.6% |
| Document review | 4.1% | 3.6% |
| Due diligence | 2.0% | 3.4% |
| Fact investigation | 9.2% | 9.6% |
| Subtotal of fact-finding-type tasks | 19.4% | 22.9% |
| Legal analysis and strategy | 28.5% | 27.0% |
| Legal writing | 11.4% | 17.7% |
| Advising clients | 9.3% | 3.2% |

The subtotal is my sum of their rows. Their headline estimate (p. 536): "If all the technology above were implemented at one time, it would result in an estimated thirteen percent reduction in hours." This predates generative AI and covers mostly litigation-heavy large-firm work, not compliance reviews.

**Modelled upper bound (Clio Legal Trends Report 2024).** Quote: "Seventy-four percent of billable work that's billed by the hour could be automated by generative AI. The types of work that have the highest automation potential include documenting and recording information, getting information, and analyzing data or information—all of which make up an average of 66% of hourly work that the average law firm takes on." Method: over 7 million time entries, scored by AI against O*NET work activities. This is potential, not a measured saving.

**Self-reported expectation (Thomson Reuters Future of Professionals 2025, 26 Jun 2025).** "survey respondents across industries also predict that professionals using AI will save 5 hours weekly within the next year, up from 4 hours predicted in 2024". Survey of 2,275 professionals across legal, tax, accounting, risk and compliance, Feb to Mar 2025. This is a prediction across several professions, not a legal-only measurement.

**Where fact-finding dominates, review is most of the cost (RAND, 2012).** Pace and Zakaras, "Where the Money Goes: Understanding Litigant Expenditures for Producing Electronic Discovery", summary p. xiv: "the major cost component in our cases was the review of documents for relevance, responsiveness, and privilege (typically about 73 percent)." Also: "expenditures for the services of outside counsel consumed about 70 percent of total e-discovery production costs." Based on 57 large productions in US litigation. This shows that when the work is mainly fact-finding, lawyer review time is the biggest cost. It says nothing directly about compliance reviews.

**Machine-assisted review can beat full manual review (Grossman and Cormack, 2011).** 17 Richmond Journal of Law and Technology 11. Abstract: technology-assisted review processes, "while indeed more efficient, can also yield results superior to those of exhaustive manual review, as measured by recall and precision". I could only open the abstract, so I give no effort-reduction figure.

- The often-quoted Goldman Sachs figure that 44% of legal tasks could be automated (March 2023) appeared only in secondary coverage. I could not open the original and do not rely on it.

### Assessment

A 60% cut in lawyer hours is well above anything measured. Controlled studies of AI-assisted lawyering show about 20% time savings per task. Billing data put fact-finding-type tasks at about 19% to 23% of large-firm litigation hours. Modelled automation potential reaches 66% to 74%, but that is a ceiling, not a result.

The 60% target can still be argued on a different logic. A first-time compliance readiness review for a small software company is more fact-finding-heavy than average legal work. The lawyer has to learn the systems, processors and data flows before giving any advice. If an organised evidence pack replaces that discovery phase, the remaining hours are judgement. No published study measures this. The only honest basis for 60% would be Regulift's own pilot data: lawyer hours with and without the evidence pack, on comparable engagements.

### Sources for claim 2

| Source | Publisher | Date | URL | Grade and reason |
| :--- | :--- | :--- | :--- | :--- |
| AI-Powered Lawyering: AI Reasoning Models, Retrieval Augmented Generation, and the Future of Legal Practice (Schwarcz et al.) | University of Minnesota Law School, University of Michigan Law School; Berkeley-hosted PDF | Mar 2025 working paper. A 2026 journal version reports 50% to 130% productivity gains (seen in search results, not opened). | https://www.law.berkeley.edu/wp-content/uploads/archive/2025/12/AI-Powered-Lawyering.pdf | A. Randomized controlled trial. Participants were law students, not practising lawyers. |
| Can Robots Be Lawyers? (Remus and Levy) | Georgetown Journal of Legal Ethics, vol. 30, p. 501 | 2017 | https://www.iadclaw.org/assets/1/7/10.1-_Remus_Levy.pdf | A. Law review with billing data. Pre-generative-AI and US large-firm data. |
| Highlights from the 2024 Legal Trends Report | Clio | 2024 | https://www.clio.com/blog/highlights-from-2024-legal-trends-report/ | C. Vendor with a large dataset. Automation potential is AI-scored and is not a measured saving. |
| 2025 Future of Professionals report (press release) | Thomson Reuters | 26 Jun 2025 | https://www.thomsonreuters.com/en/press-releases/2025/june/the-ai-adoption-reality-check-firms-with-ai-strategies-are-twice-as-likely-to-see-ai-driven-revenue-growth-those-without-risk-falling-behind | C. Self-reported predictions across several professions. |
| Where the Money Goes (Pace and Zakaras), summary | RAND Institute for Civil Justice | 2012 | https://www.rand.org/pubs/monographs/MG1208.html | A. Independent research institute. Old, US litigation only. |
| Technology-Assisted Review in E-Discovery Can Be More Effective and More Efficient Than Exhaustive Manual Review (Grossman and Cormack) | Richmond Journal of Law and Technology, vol. 17, issue 3 | 2011 | https://scholarship.richmond.edu/jolt/vol17/iss3/5/ | A. Peer-reviewed. Only the abstract was read. |

### Recommended website wording

> Our target: cut your lawyer's hours on a readiness review by up to 60%. Studies of AI-assisted legal work measure time savings of around 20% per task. We aim higher by removing the fact-finding before your lawyer starts. We will publish results from our pilots.

Keep the label "target" next to the number everywhere it appears, including the hero line in usp.txt ("Cut your legal bill by 60%"). As written, that line reads as a promise.

## Claim 3: "16 h of lawyer time instead of 40, in our illustrative case."

### Evidence found

- **No published hour benchmark exists.** I found no fee survey, bar association data or regulator guidance that gives hours or fees for a GDPR, NIS2 or AI Act readiness review or gap analysis of a 40-person software company. German law firms that offer GDPR audits do not publish prices. Soldan Institut and JUVE hourly-rate data that I could find were from 2009 and 2015 and did not cover data protection specifically.
- **UK government cost model (A, but low and UK-specific).** The UK Data Protection and Digital Information Bill impact assessment (March 2023), Table 14, p. 56 to 57, costs "Preparing Data Protection Impact Assessments (DPIAs)" at "£935/year cost of legal advice (equivalent to 4 hours of a legal professional and 2 hours of a clerical worker)". It costs general "Seeking legal advice" the same way. The source is a 2012 Ministry of Justice estimate. This is an average across all businesses, so it is low for a multi-regulation review.
- **AI Act impact assessment.** It costs compliance work at an hourly rate of €32, the Eurostat average for the ICT sector, not at lawyer rates. It gives no lawyer-hour figure.
- **Vendor estimates (D).** A German vendor blog (legiscope.com) puts an external GDPR audit for firms under 20 staff at two to three consultant days, €2,000 to €5,000, at day rates of about €1,000 to €1,800. These are consultants, not lawyers, and the figures are not independent.
- **Your own market scan (D).** "Compliance Brain Market Scan" (14 Oct 2026) estimates "German business lawyers at €300 to €400/hour, so a multi-act scoping costs an estimated €6k to €24k (our estimate)". That works out to about 15 to 80 lawyer hours. It is an internal estimate, not a source.

### Assessment

Forty hours for a first review that covers GDPR, an NIS2 position for a customer, and an AI Act position is plausible. It sits inside the internal range of 15 to 80 hours, and above the UK model for a single DPIA. But it cannot be backed by any published source. The 16 h figure follows only from applying the 60% target to 40 h, so it inherits both problems.

The cheapest way to back this is to ask two or three partner law firms for written quotes on the Northstar scenario. Then cite "quotes from partner firms, 2026" on the page.

### Sources for claim 3

| Source | Publisher | Date | URL | Grade and reason |
| :--- | :--- | :--- | :--- | :--- |
| Data Protection and Digital Information (No. 2) Bill impact assessment, updated March 2023 | UK Department for Science, Innovation and Technology, deposited in Parliament | Mar 2023 | https://data.parliament.uk/DepositedPapers/Files/DEP2023-0355/Updated_Final_DPDI_2_Bill_Impact_Assessment_March_2023.docx.pdf | A for method. UK only, and it relies on a 2012 estimate. |
| DSGVO Audit Kosten | legiscope (vendor blog) | not dated | https://www.legiscope.com/blog/dsgvo-audit-kosten-software.html | D. Vendor blog, read only through search results. |
| Compliance Brain Market Scan | internal (FILES folder) | 14 Oct 2026 | local file | D. Internal estimate. |

### Recommended website wording

> In our example, a law firm quotes 40 hours to understand the setup. With an organised evidence pack, our target is 16. Your numbers will depend on your company.

Keep "illustrative" or "example" next to both numbers. Replace it with "based on quotes from partner firms" once you have written quotes.

## Claim 4: are GDPR, the AI Act, NIS2 and DORA the four that matter for a 40-person software company?

### What applies, with dates

| Regulation | Applies from | Does it apply to a 40-person software company? |
| :--- | :--- | :--- |
| GDPR, Regulation (EU) 2016/679 | 25 May 2018 | Yes, to any company that processes personal data. |
| AI Act, Regulation (EU) 2024/1689, as amended by Regulation (EU) 2026/1744 | Prohibitions and AI literacy: 2 Feb 2025. General-purpose AI models: 2 Aug 2025. Transparency duties in Article 50: 2 Aug 2026. Annex III high-risk systems: 2 Dec 2027. Annex I product-embedded systems: 2 Aug 2028. | Partly. It depends on whether the company provides or deploys AI systems and whether any are high-risk. A model that screens job applicants or scores credit falls under Annex III. |
| NIS2, Directive (EU) 2022/2555 | Transposition deadline 17 Oct 2024, applied from 18 Oct 2024. National laws vary. | Usually not directly. Article 2(1) covers entities "which qualify as medium-sized enterprises" or larger. A company under 50 staff is small unless both turnover and balance sheet exceed €10 million. Exceptions in Article 2(2) cover DNS, top-level domain and trust service providers and some others. It does reach small companies indirectly. Article 21(2)(d) requires covered entities to manage "supply chain security, including security-related aspects concerning the relationships between each entity and its direct suppliers or service providers". |
| DORA, Regulation (EU) 2022/2554 | 17 Jan 2025 | No, unless the company sells to banks, insurers or other financial entities. Then it faces contract terms under Article 30 ("Key contractual provisions"). Direct oversight only applies to ICT providers designated as critical, which a 40-person company will not be. |
| Cyber Resilience Act (CRA), Regulation (EU) 2024/2847 | Reporting duties in Article 14: 11 Sep 2026. Full application: 11 Dec 2027. Notified bodies: 11 Jun 2026. | Yes, if the company places software products on the EU market, such as installable software, apps or firmware. Pure SaaS is mostly outside. Recital 12 says cloud services built outside a product's remote data processing "do not fall within the scope of this Regulation", and that "Directive (EU) 2022/2555 applies to cloud computing services and cloud service models, such as Software as a Service (SaaS)". |

### Assessment

The page's Northstar story fits the evidence well. A prospect asks for NIS2 readiness, which is exactly the supply-chain route. A model that makes decisions about people is the AI Act route. But a visitor could read the page as saying all four laws apply directly to a small software company. That is not true for NIS2 and DORA. DORA is the weakest of the four for this audience. The CRA is a stronger fit for software makers and is already live for vulnerability reporting.

The Commission's own impact assessment confirms the NIS2 size cap: "a size cap would be applied to exclude as a rule from the NIS scope micro and small enterprises" (SWD(2020) 345, p. 89).

### Sources for claim 4

| Source | Publisher | Date | URL | Grade |
| :--- | :--- | :--- | :--- | :--- |
| Directive (EU) 2022/2555 (NIS2), Articles 2 and 21, Annex I | Official Journal of the EU | 27 Dec 2022 | https://eur-lex.europa.eu/eli/dir/2022/2555/oj | A |
| Regulation (EU) 2022/2554 (DORA), Articles 30 and 64 | Official Journal of the EU | 27 Dec 2022 | https://eur-lex.europa.eu/eli/reg/2022/2554/oj | A |
| Regulation (EU) 2024/2847 (CRA), recital 12 and Article 71 | Official Journal of the EU | 20 Nov 2024 | https://eur-lex.europa.eu/eli/reg/2024/2847/oj | A |
| Regulation (EU) 2026/1744 (Digital Omnibus on AI), amending Article 113 of the AI Act | Official Journal of the EU, OJ L 2026/1744 | adopted 8 Jul 2026, published 24 Jul 2026 | https://eur-lex.europa.eu/eli/reg/2026/1744/oj | A |
| Regulation (EU) 2024/1689 (AI Act) | Official Journal of the EU | 12 Jul 2024 | https://eur-lex.europa.eu/eli/reg/2024/1689/oj | A (not re-read for this report; dates taken from the 2026 amendment) |

Quoted amendment text from Regulation (EU) 2026/1744, replacing point (c) of the third paragraph of Article 113 of the AI Act: "Chapter III, Sections 1, 2, and 3, with the exception of Article 6(5), shall apply from: (i) 2 December 2027 as regards AI systems classified as high-risk pursuant to Article 6(2) and Annex III; and (ii) 2 August 2028 as regards AI systems classified as high-risk pursuant to Article 6(1) and Annex I". Recital 8 of the same regulation says Article 4 is amended so providers and deployers must "take measures to support the development of AI literacy", which is softer than the original duty.

### Recommended website wording

> Four EU laws shape how European software companies handle data, AI and security. GDPR applies to almost everyone. The AI Act applies once you build or use AI that affects people. NIS2 reaches you through your customers, even if you are too small to be covered yourself. DORA matters if you sell to banks or insurers.

Consider adding the CRA: "If you ship software products, the Cyber Resilience Act's reporting duties have applied since September 2026."

## Claim 5: the Northstar numbers

### Evidence found

No study measures what share of compliance gaps can be closed with operational work rather than legal advice. Two serious sources point in different directions.

- **Documentation gaps are common (EDPB, 20 Jan 2025).** The coordinated enforcement action on the right of access covered 1,185 controllers and 30 data protection authorities. Quote: "seven challenges were identified. One of them is the lack of documented internal procedures to handle access requests." This kind of gap is operational and documentary.
- **The most common fine trigger needs legal judgement (CMS GDPR Enforcement Tracker Report 2025).** Quote: "At the top of the list of types of violations in terms of number of fines and average amount are 'insufficient legal basis for data processing' (669 fines, average EUR 2.9 million) and 'non-compliance with general data processing principles' (644 fines, average EUR 3.8 million). Next on the list is 'insufficient technical and organisational measures to ensure information security' (418 fines, average EUR 2.0 million)." Choosing a legal basis is a judgement call for a lawyer. Security measures are mostly operational.

### Assessment

"Nine of eleven" and "fourteen systems" are story details. They need no source as long as the page marks the story as illustrative. Do not present nine of eleven (82%) as a typical rate. The enforcement data suggest the issues that cost the most often need a lawyer.

### Sources for claim 5

| Source | Publisher | Date | URL | Grade and reason |
| :--- | :--- | :--- | :--- | :--- |
| CEF 2024: EDPB identifies challenges to the full implementation of the right of access | European Data Protection Board | 20 Jan 2025 | https://www.edpb.europa.eu/news/cef-2024-edpb-identifies-challenges-to-the-full-implementation-of-the-right-of-access_en | A. EU body, coordinated enforcement. |
| GDPR Enforcement Tracker Report 2025, executive summary | CMS (law firm) | 2025 | https://cms.law/en/aut/publication/gdpr-enforcement-tracker-report-2025/executive-summary | B. Large public dataset of published fines, compiled by a law firm. Fines that were not published are missing. |

### Recommended website wording

> In this example, Northstar closes nine of eleven actions on its own. The two that remain need a lawyer's judgement. That is where the lawyer's hours go.

Keep a visible "illustrative example" label on the story.

## Claims that cannot be backed, and honest alternatives

| Page text | Why it cannot be backed | Honest alternative |
| :--- | :--- | :--- |
| "Every forecast says spending goes up, year after year." | Not every forecast rises. EU policy targets a 25% cut in administrative cost, and legal-services turnover fell in real terms in Germany and France from 2021 to 2024. | "Analysts expect spending on security and compliance software to keep rising." |
| "60% lower legal bill" | No study measures it. Controlled studies show about 20% time savings on lawyer tasks. | "Our target: up to 60% fewer lawyer hours on a readiness review. We will publish pilot results." |
| usp.txt: "Cut your legal bill by 60% before your lawyer even starts the clock." | It reads as a promise, and there is no evidence for it. | "Built to cut your lawyer's hours by up to 60%. That is our target, and we measure it." |
| "16 h of lawyer time instead of 40" | There is no published hour benchmark. 16 is just 40 minus 60%. | "In our example: 40 hours quoted, 16 as our target." Replace with partner-firm quotes when you have them. |
| "Nine of eleven actions close without a lawyer." | There is no data on the split between operational and legal work. | Keep it as part of an example that is labelled as illustrative. |
| The four regulations presented as equally relevant | NIS2 and DORA usually do not apply directly to a 40-person software company. | Explain the indirect routes (customers, financial clients). Consider adding the CRA. |

## What I looked for and did not find

- A Thomson Reuters "Cost of Compliance" report from 2023 or later. Search returned only editions from 2014 to 2017, which are too old to use.
- An IDC GRC forecast for 2024 to 2028 with a CAGR. Only a 2021 forecast and a data-privacy software title appeared.
- Any law firm fixed-fee offer, bar association fee survey, or regulator figure for a GDPR, NIS2 or AI Act readiness review. None was published in what I could reach.
- A figure for GDPR savings from the Omnibus IV record-keeping change. The €400 million figure covers the whole package, not GDPR.
- The Goldman Sachs 2023 source document behind "44% of legal tasks". I found secondary coverage only.
- The 1.9% review-effort figure attributed to Grossman and Cormack. I could not open the full text to check it.
- Grand View and similar market-research mills were deliberately not used.

## Full source list

All accessed 2026-10-18.

1. European Commission. Impact assessment accompanying the NIS2 proposal, SWD(2020) 345 final, Part 1/3. 16 Dec 2020. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52020SC0345. Grade A.
2. European Commission. Impact assessment accompanying the AI Act proposal, SWD(2021) 84 final, Part 1/2. 21 Apr 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021SC0084. Grade A.
3. European Commission. A simpler and faster Europe: communication on implementation and simplification, COM(2025) 47. 11 Feb 2025. https://commission.europa.eu/document/download/8556fc33-48a3-4a96-94e8-8ecacef1ea18_en?filename=250201_Simplification_Communication_en.pdf. Grade A.
4. European Commission. Second report on the application of the GDPR, COM(2024) 357. 25 Jul 2024. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52024DC0357. Grade A.
5. ENISA. NIS Investments 2024. Nov 2024. https://www.enisa.europa.eu/sites/default/files/2024-11/CSPA%20-%20NIS%20Investments%20-%202024_0.pdf. Grade A.
6. Eurostat. Datasets sbs_ovw_act and sbs_na_1a_se_r2 (NACE M69.1) and prc_hicp_aind (CP00). Data updated 30 Sep 2026. https://ec.europa.eu/eurostat/databrowser/view/sbs_ovw_act/default/table. Grade A.
7. EDPB. CEF 2024: EDPB identifies challenges to the full implementation of the right of access. 20 Jan 2025. https://www.edpb.europa.eu/news/cef-2024-edpb-identifies-challenges-to-the-full-implementation-of-the-right-of-access_en. Grade A.
8. Directive (EU) 2022/2555 (NIS2). https://eur-lex.europa.eu/eli/dir/2022/2555/oj. Grade A.
9. Regulation (EU) 2022/2554 (DORA). https://eur-lex.europa.eu/eli/reg/2022/2554/oj. Grade A.
10. Regulation (EU) 2024/2847 (Cyber Resilience Act). https://eur-lex.europa.eu/eli/reg/2024/2847/oj. Grade A.
11. Regulation (EU) 2026/1744 (Digital Omnibus on AI). OJ L 2026/1744, 24 Jul 2026. https://eur-lex.europa.eu/eli/reg/2026/1744/oj. Grade A.
12. Frey, C. B. and Presidente, G. Privacy regulation and firm performance: estimating the GDPR effect globally. Economic Inquiry, 2024, DOI 10.1111/ecin.13213. https://ora.ox.ac.uk/objects/uuid:184b0c7e-6e52-491e-9bac-b9e14e35608c. Grade A.
13. Schwarcz, D., Manning, S., Barry, P., Cleveland, D. R., Prescott, J. J. and Rich, B. AI-Powered Lawyering: AI Reasoning Models, Retrieval Augmented Generation, and the Future of Legal Practice. Working paper, Mar 2025. https://www.law.berkeley.edu/wp-content/uploads/archive/2025/12/AI-Powered-Lawyering.pdf. Grade A.
14. Remus, D. and Levy, F. Can Robots Be Lawyers? Computers, Lawyers, and the Practice of Law. 30 Georgetown Journal of Legal Ethics 501, 2017. https://www.iadclaw.org/assets/1/7/10.1-_Remus_Levy.pdf. Grade A.
15. Pace, N. M. and Zakaras, L. Where the Money Goes: Understanding Litigant Expenditures for Producing Electronic Discovery. RAND, 2012. https://www.rand.org/pubs/monographs/MG1208.html. Grade A.
16. Grossman, M. R. and Cormack, G. V. Technology-Assisted Review in E-Discovery Can Be More Effective and More Efficient Than Exhaustive Manual Review. 17 Richmond Journal of Law and Technology 11, 2011. https://scholarship.richmond.edu/jolt/vol17/iss3/5/. Grade A, abstract only.
17. UK Department for Science, Innovation and Technology. Data Protection and Digital Information (No. 2) Bill impact assessment, March 2023. https://data.parliament.uk/DepositedPapers/Files/DEP2023-0355/Updated_Final_DPDI_2_Bill_Impact_Assessment_March_2023.docx.pdf. Grade A, UK only.
18. Gartner. Gartner forecasts worldwide end-user spending on information security to total $213 billion in 2025. 29 Jul 2025. https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025. Grade B.
19. Verdantix (C. O'Donnell). Spend on GRC software to surpass $9 billion in 2029. 29 Jan 2025. https://www.verdantix.com/insights/blog/spend-on-grc-software-to-surpass-9-billion-dollars-in-2029. Grade B.
20. CMS. GDPR Enforcement Tracker Report 2025, executive summary. 2025. https://cms.law/en/aut/publication/gdpr-enforcement-tracker-report-2025/executive-summary. Grade B.
21. Clio. Highlights from the 2024 Legal Trends Report. 2024. https://www.clio.com/blog/highlights-from-2024-legal-trends-report/. Grade C.
22. Thomson Reuters. 2025 Future of Professionals report, press release. 26 Jun 2025. https://www.thomsonreuters.com/en/press-releases/2025/june/the-ai-adoption-reality-check-firms-with-ai-strategies-are-twice-as-likely-to-see-ai-driven-revenue-growth-those-without-risk-falling-behind. Grade C.
23. legiscope. DSGVO Audit Kosten (vendor blog). https://www.legiscope.com/blog/dsgvo-audit-kosten-software.html. Grade D, seen only in search results.
24. Internal: FILES/Compliance Brain Market Scan.pdf, 14 Oct 2026. Grade D.
