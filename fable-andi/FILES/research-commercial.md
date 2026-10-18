# Regulift: commercial model and price architecture, with sources

Prepared 2026-10-18 for the EIT Community AI Entrepreneurs Lab application, deadline 21 October 2026. Every source was opened on 2026-10-18 unless a line says otherwise. Raw page copies sit in the session scratchpad. Figures are quoted as the source gives them. US dollar figures are not converted.

Quality grades follow the scheme in number-claims-sources.md:

- **A**: statute, court ruling, bar rule, official statistics, EU or national government document, audited filing.
- **B**: a vendor's own pricing page or marketplace listing, used only for that vendor's own price. Also named analyst or lender surveys with a described method.
- **B/C**: Vendr transaction data. The method is described, but the sample is self-selected buyers.
- **C**: practitioner or vendor surveys, press reports from people familiar with a company.
- **D**: aggregators, review sites, competitor comparison pages, single offer pages, internal estimates.

## 1. One-page summary

### The answer in five sentences

The 9,000 to 18,000 euro range is credible for a company with 50 to 249 staff that needs three or four regulations. It is too high for companies under 50 staff, where data protection services sell for 700 to 5,400 euros a year. Model 1 as written does not work: a fee on each law-firm mandate is unlawful in Germany, Austria, Italy and France. The evidence supports a combination: a size-tiered platform base with GDPR included, plus regulation modules priced per year. Law firms pay a flat workspace fee that never depends on mandates, and they bill their legal work directly to the client.

### Recommended price architecture

**Layer 1: platform base, tiered by company size, billed yearly.** It includes the read-only connectors, the context report, the inventory, and the GDPR module. GDPR applies to almost every customer, so it belongs in the base.

**Layer 2: regulation modules, per year.** The modules are the AI Act, NIS2 supply-chain readiness, DORA for ICT suppliers to financial firms, and the Cyber Resilience Act (CRA). Each one adds its gap list and evidence pack. The module price scales with company size.

**Layer 3: partner law firms.** The firm pays Regulift a flat annual workspace fee, the same for every firm and unrelated to how many mandates it gets. The client chooses the firm from a list. The firm bills its legal work directly to the client. Regulift takes no share of legal fees and no fee per mandate or per lead. This structure is lawful in all five countries checked (section 4).

| Size band | Base, GDPR included | Each extra module | Typical bundle | Typical annual price |
| :--- | ---: | ---: | :--- | ---: |
| Small, 10 to 49 staff | €3,600 | €1,800 | Base plus one module | €5,400 |
| Mid, 50 to 249 staff | €7,200 | €3,600 | Base plus two or three modules | €14,400 to €18,000 |
| Upper mid, 250 to 1,000 staff | €14,400 | €6,000 | Base plus three or four modules | €32,400 to €38,400 |
| Partner law firm workspace | flat yearly fee, same for all firms | none | none | to be set in pilots, not backed |

### Defensible annual range per company size

| Size band | Defensible range | Why this range holds |
| :--- | ---: | :--- |
| 10 to 49 staff | €3,600 to €7,200 | Above data protection officer (DPO) services at €708 to €5,400 a year (heyData, Proliance). Below Secureframe's US entry price of USD 7,500 for one framework. Near StartComply's €4,500 per framework. |
| 50 to 249 staff | €9,000 to €18,000 | StartComply charges €10,500 for two frameworks plus vendor risk. Vendr reports USD 20,000 to 40,000 for one Vanta framework at 51 to 200 staff. |
| 250 to 1,000 staff | €18,000 to €40,000 | Vendr reports USD 30,000 to 70,000 for two or three Vanta frameworks at 50 to 200 staff, and USD 30,000 to 55,000 for Drata's growth tier. |

### The three numbers for the slide

1. **€9,000 to €18,000 a year** for a 50 to 249 person company covering three to four EU regulations. This is our recommended mid-tier price.
2. **USD 20,000 a year**, which is what the median buyer pays for Vanta (Vendr, 374 purchases, February 2026). Vanta's entry tier covers one framework.
3. **€244 an hour**, the average standard rate of German lawyers in 2024 (Federal Bar survey, BRAK STAR, reported February 2026). This is the cost an evidence pack saves on.

### What cannot be backed

- **Fees on mandates.** A platform or referral fee on law-firm mandates. It is unlawful in Germany, Austria, Italy and France, and only conditionally possible in the Netherlands.
- **The law-firm workspace fee.** No source gives a price level. It must come from pilot talks.
- **SME compliance spend.** Euro spend per SME on compliance or on external lawyers. No representative survey exists for any of the five countries.
- **Sales cycle.** No source with a stated method gives a sales cycle for compliance software.
- **Churn.** No source gives compliance-specific churn.
- **Competitor prices that are not published.** DataGuard, Kertos, Secjur, Credo AI, Holistic AI, trail, Justima, Norm Ai and OneTrust list prices.
- **Willingness to pay.** Customer willingness to pay at these prices. Only pilot letters of intent can show it.

## 2. Price points of comparable products

| Category | Vendor and tier | Price as quoted | Scope | Source and date | Grade |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Compliance automation | Vanta Essentials | USD 14,000 for 12 months | "Starting cost for 1-20 employees", one framework | AWS Marketplace listing, live on 2026-10-18 | B |
| Compliance automation | Vanta Plus and Professional | USD 21,500 and USD 23,000 for 12 months | 1 to 20 employees | Same listing | B |
| Compliance automation | Vanta add-on modules | Trust Center USD 6,000. Trust Center Advanced USD 10,000. Vendor risk USD 13,600 for 50 vendors. Questionnaires USD 10,000 to 16,000. | Per module per year | Same listing | B |
| Compliance automation | Vanta, Vendr data | Median USD 20,000 a year. Range USD 7,500 to 57,207. | "Based on data from 374 purchases". One framework: USD 12,000 to 25,000 at 1 to 50 staff, USD 20,000 to 40,000 at 51 to 200. Two or three frameworks: USD 30,000 to 70,000 at 50 to 200 staff. | Vendr, "Last updated: February 2026" | B/C |
| Compliance automation | Drata platform fee | USD 25,000 for 12 months | "capacity for a 100 FTE org" | AWS Marketplace listing, live | B |
| Compliance automation | Drata, Vendr data | Median USD 24,934 a year. Range USD 9,415 to 68,250. | 236 purchases. Under 50 staff: USD 12,000 to 25,000. Readiness services: USD 5,000 to 20,000. | Vendr, February 2026 | B/C |
| Compliance automation | Secureframe Fundamentals | "Starting at $7,500/year" | One framework | secureframe.com/pricing, live | B |
| Compliance automation | Secureframe, Vendr data | Median USD 20,000 a year. Two or three frameworks: USD 25,000 to 45,000. | none | Vendr, February 2026 | B/C |
| Compliance automation | Vanta, implied revenue per customer | About USD 18,750 per customer, our division | "crossed $300 million in annual recurring revenue", "more than 16,000 customers" | Fortune, 29 Apr 2026 | C |
| EU compliance as a service | heyData Starter, Professional, Enterprise | €59, €99 and €169 a month billed annually | External DPO. Professional includes "15 hours/Year" legal support. | direct.heydata.eu/en/prices, live | B |
| EU compliance as a service | Proliance Basis, Medium, Premium | From €125, €275 and €450 a month, plus one-off audits of €500, €1,500 and €2,000 | Up to 20, up to 50, and over 50 staff | proliance.ai/preise, live | B |
| EU compliance as a service | Proliance information security management system (ISMS) guide | "Ab 1.000 € / Monat - im 1. Jahr" | ISMS build-out with gap analysis | Same page | B |
| EU compliance as a service | DataGuard | Not published. Base, Pro and Enterprise tiers, all "Get a quote". | none | dataguard.com/pricing, live | B, structure only |
| EU compliance as a service | Kertos, Secjur | Not published. "Angebot anfordern". | none | kertos.io/pricing, secjur.com | none |
| EU compliance as a service | Trusted Shops START and PRO | From €119 and €199 a month. PRO is "inkl. rechtlicher Absicherung". | Up to €100,000 shop turnover | business.trustedshops.de/preise, live | B |
| EU framework modules | StartComply | "Frameworks and Policies €4,500 per year", per framework. Vendor risk €1,500 a year. | NIS2, ISO 27001, DORA. Implementation included. | startcomply.com/pricing, live | B |
| EU framework modules | Copla | €3,500 to €4,500 per framework, "20% off each additional framework" | Fewer than 50 users | zerometric.net review. The vendor page no longer shows prices. | D |
| EU framework modules | DORA GRC Starter and Professional | €490 and €990 a month | DORA only, up to 5 or 20 users | doragrc.com/pricing, live | B |
| AI governance | ComplyLayer Premium | "$1,499/year or $149/month" | AI Act, ISO 42001, NIST AI RMF and GDPR readiness checks | complylayer.com/pricing, live | B |
| AI governance | Credo AI | "based on number of AI use cases", private offer | none | AWS Marketplace listing | B, structure only |
| AI governance | Holistic AI, trail | Not published | none | none | none |
| Privacy and GRC platform | OneTrust, Vendr data | Median USD 12,150 a year. Range USD 1,620 to 48,811. Implementation "20–40% of the annual subscription". | 310 purchases | Vendr, February 2026 | B/C |
| Privacy platform | Osano, Vendr data | Median USD 8,750 a year | 44 purchases | Vendr | B/C |
| Legal tech with law-firm backing | Justima (Osborne Clarke) | Not published. justima.com is a parked domain. | none | Legal Technology launch coverage | none |
| Legal tech with law-firm backing | Norm Ai and Norm Law LLP | Not published. Outcome-based billing reported. | none | Press coverage only | D |
| Client-paid legal membership | Rocket Lawyer Standard, Plus, Pro | USD 149, 249 and 349 a year | Attorney services bundled in membership | rocketlawyer.com/pricing, live | B |

**Earlier leads, checked.**

- **Gemini file's ComplyLayer price.** It quoted "€29/mo per add-on". That is outdated. The live page shows USD 1,499 a year.
- **Market scan's Trusted Shops price.** It quoted €24.90 a month. Not found. Membership starts at €119 a month.
- **Market scan's Drata entry price.** It quoted about USD 7,500. That is Secureframe's entry price and Drata's per-framework price.
- **Gemini file's Vanta Core range.** It quoted USD 10,000 to 15,000. The list price for Essentials is USD 14,000.
- **Competitive matrix's OneTrust figure.** It quoted €50,000+ a year. Vendr's median is USD 12,150. The €50,000 figure applies to enterprise suites, not the median buyer.
- **Competitive matrix's AI governance range.** It quoted €30,000 to €80,000 for Holistic AI and Credo AI. Unverified. Neither publishes a price.
- **Confirmed figures.** StartComply at €4,500 to €10,500 and Proliance at €125 to €450 a month plus audits are both confirmed.

## 3. Per-module and per-framework pricing

| Vendor | Price per framework or module per year | Grade |
| :--- | :--- | :--- |
| Drata | USD 7,500 per framework, for example "GDPR Framework GDPR control set $7,500.00", on top of the USD 25,000 platform fee | B |
| StartComply | €4,500 per framework. "Every framework and policy package carries the same annual list price." | B |
| Copla | €3,500 to €4,500 per framework, 20% off each additional one | D |
| Vanta | Modules cost USD 6,000 to 16,000 each. Vendr says each framework "is priced separately". No per-framework list price is published. | B for modules, B/C for structure |
| Secureframe | Additional frameworks are quote-only. Two or three frameworks run USD 25,000 to 45,000 (Vendr). | B/C |
| Market scan's lead of "USD 3,000 to 10,000 per extra framework" | Not verified. It came from an aggregator. | none |

**What this means.** Per-framework pricing is the market norm. Published per-framework prices sit between €3,500 and USD 7,500. Regulift's proposed module prices of €1,800, €3,600 and €6,000 by size band fall inside that range.

## 4. Lawyer rates and readiness fees by country

| Country | Figure | Exact quote and location | Source and date | Grade |
| :--- | :--- | :--- | :--- | :--- |
| Germany | €195 lowest, €244 standard, €292 top hourly rate, financial year 2024 | "Die Regelstundensätze lagen bundesweit durchschnittlich bei 244 Euro" and "Tophonoraren von im Schnitt 292 Euro" | beck-aktuell, 10 Feb 2026, reporting the BRAK STAR survey by the Institut für Freie Berufe, 3,596 usable questionnaires. https://www.beck-aktuell.de/rechtsbranche/anwaltschaft/brak-star-umfrage-statistik-anwaltschaft-maenner-frauen-unterschiede-einkommen-2026-02-10 | A data, read through a law publisher. All practice areas. |
| Germany | 33% of fee agreements are time-based | "Großteil (33%) auf Zeithonorare" | Same article | A, secondary |
| Germany | Large firms charge 67% more, specialists about 10% more | "Sozietäten mit mehr als 20 Anwälten … bei ihren Mindestsätzen liegen sie 67% über dem statistischen Mittel", "Fachanwaltstitel … rund 10% höhere Stundensätze" | Soldan Institut press release, 12 Jul 2006. https://ra-rausch.com/download/Stundensaetze_in_deutschen_Anwaltskanzleien.pdf | B, old. Use for the size gap only. |
| Germany | Partner average €408, range €300 to €625, top 50 business firms | "liegt der Stundensatz eines Partners im Durchschnitt bei 408 Euro, die Spanne bei 300 bis 625 Euro" | WirtschaftsWoche, 24 Aug 2011. https://www.wiwo.de/unternehmen/wirtschaftskanzleien-honorare-fuer-top-anwaelte-schrumpfen/5320966.html | B, 15 years old. Historical floor for large firms. |
| Germany | No statutory fee for business advice | Section 34(1) RVG: the lawyer "soll … auf eine Gebührenvereinbarung hinwirken" | gesetze-im-internet.de/rvg/__34.html | A |
| Germany | NIS2 applicability opinion, €3,900 plus VAT, fixed price | "bieten wir für einen Festpreis in Höhe von 3.900 Euro (zzgl. USt) an" | SRD Rechtsanwälte, undated. https://www.srd-rechtsanwaelte.de/nis2-anwendbarkeit-pruefen | D, this firm's own price. The only published law-firm fixed fee found. |
| Germany | AI law check offered at a fixed price, amount not stated | "Rechts-Check „KI" … auf Festpreisbasis" | Menold Bezler, 2025 PDF. https://menoldbezler.de/fileadmin/user_upload/Blog_PDFs/MB_Rechts-Check_KI_2025_Social_Media.pdf | D, format only |
| Germany | Free AI Act check used to win paid mandates | "Jetzt kostenlos prüfen" | WBS.LEGAL. https://www.wbs.legal/ki-sofort-check/ | D |
| Germany | External DPO from €149 a month, fixed price | Page title "ab 149 € / Monat · Festpreis" | gesellschaft-datenschutz.de/externer-datenschutzbeauftragter/ | D, own price |
| Austria | No advisory hourly rate in the bar's fee guidelines | The guidelines set "für die erste halbe Stunde 238 Euro" for criminal hearings only (section 9). Legal opinions follow the value-based court tariff (section 8). | ÖRAK, Allgemeine Honorar-Kriterien (AHK), version of 1 Oct 2024. https://oerak.at/fileadmin/user_upload/Gesetzestexte/AHK/AHK_01102024.pdf | A |
| Austria | Consultant status check subsidised at up to €400 for half a day | "½ Tag, 80% gefördert, maximale Fördersumme 400 €" | WKÖ and BMAW, KMU.DIGITAL 2025. https://wko.at/oe/information-consulting/kmu.digital-2025.pdf | A for the rule. This implies about €500 per half day of consulting, not of lawyers. |
| Italy | Average out-of-court fee parameters by matter value | €1,985 up to €26,000. €2,410 up to €52,000. €4,536 for €52,000 to €260,000. Table 25 "Prestazioni di assistenza stragiudiziale". | Ministry of Justice decree DM 147/2022, Gazzetta Ufficiale n. 236, 8 Oct 2022 | A. Reference values. Fees are normally agreed. |
| Netherlands | €241 an hour excluding VAT, self-employed lawyers, 2026 | "Het gemiddelde uurtarief van een zzp-advocaat ligt in 2026 op € 241 per uur (excl. btw)" | Knab, Zzp Uurtarievenboekje 2026, updated 1 Jun 2026. https://bieb.knab.nl/wat-verdient-een-advocaat-zzp-bekijk-uurtarief-en-winst | C. Self-employed lawyers only. |
| France | Court-assessed hourly rates of €270 to €400 excluding VAT | Paris Court of Appeal fee decisions, Dec 2024 to May 2025 | doctrine.fr, read as search snippets only | B as rulings, but not opened and single cases |
| France | No national rate survey | The CNB model fee agreement "ne constitue pas des préconisations" | CNB, 2023. https://cnb.avocat.fr/medias/cnb-modele-convention-honoraires-tarif-horaire-honoraire-resultat-2023-6900a9efddd308.31428115.pdf | A. Do not cite "€200 to €400 average". |

**Not found.**

- **Data protection rates.** No bar survey of data protection or IT lawyer rates exists in any of the five countries.
- **Current hourly surveys.** No current JUVE or Soldan survey was found. Austria, the Dutch bar (NOvA) and the French bar council (CNB) publish none.
- **Fixed fees outside Germany.** No law firm in Austria, Italy, the Netherlands or France publishes a priced readiness review. No law firm anywhere publishes a priced multi-act GDPR, NIS2 and AI Act review.

**Illustrative comparison, our arithmetic.** Forty hours at the German standard rate of €244 cost €9,760. The SRD fixed fee for one NIS2 applicability opinion is €3,900. Regulift's mid tier at €14,400 a year therefore costs about the same as one multi-act review. It is a recurring subscription, while the review is a one-off.

## 5. Fee sharing and referral rules: what structure is lawful

### Rules by country

**Germany.**

- **Commission ban.** BRAO section 49b(3): "Die Abgabe und Entgegennahme eines Teils der Gebühren oder sonstiger Vorteile für die Vermittlung von Aufträgen, gleichviel ob im Verhältnis zu einem Rechtsanwalt oder Dritten gleich welcher Art, ist unzulässig." (A, gesetze-im-internet.de/brao/__49b.html)
- **No profit stakes.** BRAO section 59i(3): "Dritte dürfen nicht am Gewinn der Berufsausübungsgesellschaft beteiligt werden." (A)
- **Key ruling.** BGH, 18 Apr 2024, IX ZR 89/23. A portal invoiced partner firms "Lizenzgebühren" only for clients with legal-expenses insurance. The court held the agreement void, and the portal could not even recover the value it had delivered. The ban covers "Provisionszahlungen für ein konkret vermitteltes Mandat". Conventional advertising is not covered. "Entscheidend ist, für welche Tätigkeit die Beklagte vereinbarungsgemäß bezahlen sollte." (A ruling, read through Verlag Dr. Otto Schmidt, Anwaltsblog 21/2024. The full text was not opened.)

**Austria.**

- **Commission ban.** RL-BA 2015, section 47(3) no. 6, forbids "das Anbieten oder Gewähren von Vorteilen für Mandatszuführungen".
- **Profit sharing.** Section 46 forbids profit-sharing agreements with third parties except as section 21c RAO allows. (A, ÖRAK, RL-BA as of 29 Sep 2023)
- **Narrower ownership.** The Berufsrechts-Änderungsgesetz 2026, BGBl. I 63/2026, narrowed permitted non-lawyer shareholders from 31 Jul 2026. (A)

**Italy.**

- **Commission ban.** Codice deontologico forense, art. 37(2): the lawyer "non deve offrire o corrispondere a colleghi o a terzi provvigioni o altri compensi quale corrispettivo per la presentazione di un cliente o per l'ottenimento di incarichi professionali". The sanction is censure. (A, CNF)
- **Flat-fee platforms.** Consiglio di Stato 1164/2016 upheld a €912,536.40 competition fine on the bar council. In part, the fine concerned the council's opinion that a flat-fee platform was a disciplinary breach. (B, secondary reports)

**Netherlands.**

- **Conditional allowance.** Gedragsregels advocatuur 2018, rule 2(3), forbids rewards for obtaining clients, "tenzij de advocaat kan aantonen dat hij daarbij niet handelt in strijd met de kernwaarden en voorts dat hierbij slechts het belang van de rechtzoekende bepalend is".
- **Official commentary.** It accepts matching websites under conditions. It says "een vast bedrag [is] minder van invloed op de onafhankelijkheid en partijdigheid dan een percentage van de (potentiele) omzet. Datzelfde geldt voor een vast abonnementstarief". (A, NOvA)

**France.**

- **Fees and referrals.** RIN art. 11.3: "L'avocat ne peut percevoir d'honoraires que de son client ou d'un mandataire de celui-ci. La rémunération d'apports d'affaires est interdite."
- **Platform fees.** RIN art. 19.4.2 allows a lawyer to contribute "de façon forfaitaire aux frais de fonctionnement de ce site ... à l'exclusion de toute rémunération établie en fonction des honoraires que l'avocat perçoit". (A)
- **CNB platform guide.** It forbids "le prélèvement par la plateforme d'un montant forfaitaire par dossier" and buying quotes. It allows "une participation financière fixe ou proportionnelle à l'utilisation". (B, CNB guide, March 2020)
- **Live consultation.** The CNB is consulting until 10 Nov 2026, with a vote on 4 Dec 2026. The option on the table concerns referral pay between lawyers only. (A, cnb.avocat.fr)

**Cross-border work.** The CCBE code, art. 5.4, forbids paying or accepting "a fee, commission or any other compensation" for a referral. (A, CCBE 2019)

### Summary table

| Structure | DE | AT | IT | NL | FR |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Client pays Regulift for software. The firm bills its legal work separately. | Lawful | Lawful | Lawful | Lawful | Lawful |
| Flat annual workspace or seat fee paid by the firm, not linked to mandates | Lawful | Lawful | Lawful | Lawful | Lawful, RIN 19.4.2 |
| Usage-based firm fee, such as per seat | Likely lawful | Likely lawful | Likely lawful | Lawful | Expressly lawful |
| Fixed fee per lead or per mandate | High risk, per BGH 2024 | Forbidden | Forbidden | Possible with conditions | Expressly forbidden |
| Percentage of the lawyer's fee | Forbidden | Forbidden | Forbidden | Strongly disfavoured | Forbidden |
| Equity or profit stake in a partner firm | Forbidden | Forbidden | Up to one third allowed | Forbidden | Not checked |

### What is lawful for Regulift

- **Charge the company.** The company pays Regulift's subscription and modules. That is software, not legal work.
- **Charge each partner firm a flat workspace fee.** The fee is the same for every firm and does not change with the number of mandates or with fees earned. A per-seat fee is a lawful variant.
- **Let the client choose.** Show several listed firms and let the client pick. If Regulift assigns a specific firm to a specific matter, it looks like referral under the BGH test.
- **Keep fees apart.** The law firm bills the client directly. Regulift never collects or shares legal fees.
- **Drop the per-mandate fee.** Do not use it in Germany, Austria, Italy or France. The Netherlands allows a transparent fixed fee under conditions, but a single model across the EU is simpler.

### Gaps

- **Per-lead fees in Germany.** No ruling settles a flat fee per lead with no exclusivity.
- **Austria.** No platform-specific ruling exists.
- **Ownership texts not verified.** The current Dutch ownership rule (Verordening art. 5.4) and French ownership rules were not verified.
- **Marketplace revenue models.** These were only partly researched. Lexoo and Justima publish nothing, and LegalZoom's 10-K could not be opened.

## 6. SME compliance and legal spend

No representative survey in the EU or in the five countries gives a euro figure per SME for compliance or for external lawyers. What exists is below.

| Figure | Exact quote or calculation | Source and date | Grade |
| :--- | :--- | :--- | :--- |
| Legal-services turnover equals 0.31% (DE), 0.36% (AT), 0.46% (IT), 0.34% (NL) and 0.55% (FR) of business-economy turnover in 2023 | Our division of legal activities turnover by business-economy turnover, for example DE 31,559 over 10,072,897 million euros. It includes household and public clients, so it is an upper bound. | Eurostat sbs_ovw_act, retrieved by API on 2026-10-18 | A data, D derived |
| Bureaucracy costs a 150-person machinery firm 6.3% of turnover | "für das kleinste Unternehmen (150 Beschäftigte, 35 Millionen Euro Jahresumsatz) eine Belastung von 2,18 Millionen Euro – umgerechnet 6,3 Prozent vom Umsatz" | IfM Bonn for IMPULS-Stiftung of the VDMA, press release 27 Mar 2025, https://idw-online.de/de/news849686 | B. Three case studies, one sector, all bureaucracy. |
| A 250-person Dutch employer bears about €1.1m a year in regulatory cost | "de 'regeldrukkosten' van een middelgrote werkgever met 250 werknemers ruim 1,1 miljoen euro per jaar" | AWVN, study by Sira Consulting, https://www.awvn.nl/publicaties/regeldrukreductie-het-kan-wel/ | C. Employer duties only. Lobby client. |
| 97% of German firms with 20+ staff report a high data protection workload | "praktisch alle Unternehmen (97 Prozent) hohen Aufwand" | Bitkom, 9 Sep 2025, 603 firms, https://www.bitkom.org/Presse/Presseinformation/Unternehmen-aechzen-unterm-Datenschutz | C. Perception. Bitkom lobbies for reform. |
| 55% of SMEs name administrative burden among their biggest problems | "Administrative burden or regulatory obstacles are among the biggest problems for 55% of SMEs" | European Commission, SME Relief Package, COM(2023) 535, Figure 1, from Flash Eurobarometer 486 | A |
| 64% of SMEs name regulatory complexity as their main barrier to growth | "64% of SMEs flag regulatory complexity as their main barrier to growth" | Commission summary of the 2025 Eurobarometer on SMEs, start-ups and scale-ups, https://futurium.ec.europa.eu/lv/node/17036 | A-. Summary read, not the full report. |
| 59% of trading EU firms see compliance with new regulation as an obstacle | "compliance with new regulations, standards or certifications (57% vs 59% EU average)" | EIB Investment Survey 2025, Ireland report p. 1, https://www.eib.org/files/publications/20250218-091225-econ-eibis-2025-ireland-en.pdf | A |
| Median privacy budget USD 375,000 in organisations that run privacy programmes | "the median privacy budget remained at USD 375,000 for the third year in a row" | IAPP Privacy Governance Report 2024, via AIGL summary | C. Skewed to large firms. |
| Median information security spend of NIS2-scope organisations €1.4m in 2023 | "median spending for information security of organisations in the EU was 1,4 M€ 2023" | ENISA, NIS Investments 2024, p. 27 | A. Not SME-specific. |
| A third of UK small businesses have a legal issue each year, and a quarter use professional help | "Around one-third (32%) of small businesses experience a legal issue annually" | Legal Services Board, 23 May 2022 | A. UK only. |

**What this supports.** Legal spend scales with turnover at roughly 0.3% to 0.55%. For a company with €10m turnover that suggests up to €30,000 to €55,000 a year for all legal work. This is an upper-bound proxy, not compliance spend. A €14,400 subscription is a plausible share of that. Regulation is the top complaint of European SMEs in every official survey found. No survey shows what they pay.

## 7. Unit-economics benchmarks

| Metric | Benchmark | Source and method | Grade |
| :--- | :--- | :--- | :--- |
| Gross revenue retention | Median 91%, about 90% to 91% for contracts under USD 250,000 | SaaS Capital, 2025 B2B SaaS Retention Benchmarks, Sep 2025, over 1,000 private firms. https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf | B |
| Net revenue retention | Median 101%. 103% for contracts of USD 12,000 to 25,000. | Same | B |
| Gross margin, pure software | About 83%, our sum of the median cost lines (hosting 5%, DevOps 4%, services 5%, other 3% of ARR) | SaaS Capital, 2026 Spending Benchmarks, 10 Jun 2026, over 1,000 firms. https://www.saas-capital.com/blog-posts/spending-benchmarks/ | B inputs, D derived |
| Gross margin, compliance reporting software | 78.5% total. About 83% on subscription and about 25% on professional services, our calculation. | Workiva Form 10-K, fiscal 2025, SEC. https://www.sec.gov/Archives/edgar/data/1445305/000144530526000016/wk-20251231.htm | A |
| Gross margin range | "the average gross margin for a cloud business regardless of maturity is 65-70%", middle half "~60-80%" | Bessemer, Scaling to $100 Million, 21 Sep 2021 | B- |
| Early-stage gross margin trend | "down nearly 10 pts year-on-year for early-stage companies, likely driven by AI costs" | Kyle Poyar and High Alpha, 2025 SaaS Benchmarks, 12 Nov 2025, over 800 firms | B- |
| CAC payback | "SMB-focused accounts, you should target CAC payback <12 months; for mid-market-focused accounts, target CAC payback <18 months" | Bessemer, Scaling to $100 Million, 2021 | B- |
| Customer churn | "SMB-focused companies often have higher churn rates (often approximately 20% gross)" | Bessemer, 10 Laws of Cloud, 19 Jun 2019 | C |
| Retention trend | Gross retention "expected to approach the 90% threshold … after declining to 86% in 2023" | KeyBanc and Sapphire Ventures, 16th Private SaaS Company Survey, 13 Nov 2025 | B |
| Net retention and acquisition cost | "Net Revenue Retention compressed to 101%, while new customer acquisition costs rose 14%" | Benchmarkit 2025, presented by Pavilion | B- |
| Category growth | Vanta "has crossed $300 million in annual recurring revenue … a tripling of ARR in two years", net retention "over 100 percent" | Fortune, 29 Apr 2026 | C |

**What this means for Regulift.**

- **Gross margin.** A target of 75% to 80% is defensible if lawyer fees stay off Regulift's books. If Regulift resells expert or legal hours, the Workiva services line shows margins near 25% on that part.
- **Retention.** At a €14,400 contract the benchmark is about 90% gross and 101% to 103% net retention. Upsell of new modules drives net retention above 100%.
- **Payback.** The target CAC payback for this segment is under 12 to 18 months.
- **Sales cycle.** No benchmark with a stated method was found. Do not quote one.

## 8. Slide-ready facts

Each fact is one sentence with its source.

1. The median buyer pays USD 20,000 a year for Vanta, based on 374 purchases (Vendr, February 2026).
2. Vanta lists its entry tier at USD 14,000 a year for 1 to 20 employees and one framework (AWS Marketplace, October 2026).
3. Drata charges USD 7,500 per framework per year on top of a USD 25,000 platform fee for 100 staff (AWS Marketplace, October 2026).
4. European challenger StartComply charges €4,500 per framework per year (startcomply.com, October 2026).
5. German lawyers charged an average standard rate of €244 an hour in 2024 (BRAK STAR survey, beck-aktuell, February 2026).
6. One German firm sells a NIS2 applicability opinion alone for a fixed €3,900 plus VAT (SRD Rechtsanwälte, October 2026).
7. Self-employed Dutch lawyers charge an average of €241 an hour excluding VAT in 2026 (Knab, June 2026).
8. 64% of European SMEs name regulatory complexity as their main barrier to growth (Eurobarometer 2025, European Commission).
9. 97% of German firms with 20 or more staff report a high data protection workload (Bitkom, September 2025).
10. Median gross revenue retention for B2B SaaS is 91% and net retention is 101% (SaaS Capital, 2025, over 1,000 firms).
11. German law voids any platform fee charged per referred mandate (BGH, IX ZR 89/23, April 2024).
12. French bar rules allow a platform fee only if it is flat or usage-based and never tied to the lawyer's fees (RIN art. 19.4.2).

## 9. Full source list

All accessed 2026-10-18.

1. Vanta. AWS Marketplace listing. https://aws.amazon.com/marketplace/pp/prodview-5ophamrbfxt44. B.
2. Vanta. Pricing page. https://www.vanta.com/pricing. B, structure only.
3. Vendr. Vanta pricing, last updated February 2026. https://www.vendr.com/marketplace/vanta. B/C.
4. Drata. AWS Marketplace listing. https://aws.amazon.com/marketplace/pp/prodview-3ubrmmqkovucy. B.
5. Vendr. Drata pricing, February 2026. https://www.vendr.com/marketplace/drata. B/C.
6. Secureframe. Pricing page. https://secureframe.com/pricing. B.
7. Vendr. Secureframe pricing, February 2026. https://www.vendr.com/marketplace/secureframe. B/C.
8. Vendr. OneTrust pricing, February 2026. https://www.vendr.com/marketplace/onetrust. B/C.
9. Vendr. Osano pricing. https://www.vendr.com/marketplace/osano. B/C.
10. Credo AI. AWS Marketplace listing. https://aws.amazon.com/marketplace/pp/prodview-x67krdatcdday. B, structure only.
11. heyData. Prices. https://direct.heydata.eu/en/prices. B.
12. Proliance. Preise. https://www.proliance.ai/preise. B.
13. DataGuard. Pricing. https://www.dataguard.com/pricing. B, structure only.
14. Kertos. Pricing. https://www.kertos.io/pricing. B, structure only.
15. Trusted Shops. Preise. https://business.trustedshops.de/preise. B.
16. StartComply. Pricing. https://startcomply.com/pricing. B.
17. Zerometric. Copla review. https://zerometric.net/review/copla/. D.
18. ComplyLayer. Pricing. https://complylayer.com/pricing. B.
19. DORA GRC. Pricing. https://doragrc.com/pricing. B.
20. Rocket Lawyer. Pricing. https://www.rocketlawyer.com/pricing. B.
21. Legal Technology. Osborne Clarke launches independent company for AI regulatory monitoring. https://legaltechnology.com/osborne-clarke-launches-independent-company-for-ai-regulatory-monitoring/. C.
22. Fortune. Exclusive: Vanta ARR $300 million, 29 Apr 2026. https://fortune.com/2026/04/29/exclusive-vanta-arr-300-million-sequoia-shadow-ai-claude-cursor/. C.
23. beck-aktuell. BRAK STAR survey report, 10 Feb 2026. https://www.beck-aktuell.de/rechtsbranche/anwaltschaft/brak-star-umfrage-statistik-anwaltschaft-maenner-frauen-unterschiede-einkommen-2026-02-10. A data, secondary.
24. Soldan Institut. Stundensätze in deutschen Anwaltskanzleien, 12 Jul 2006. https://ra-rausch.com/download/Stundensaetze_in_deutschen_Anwaltskanzleien.pdf. B, old.
25. WirtschaftsWoche. Honorare für Top-Anwälte schrumpfen, 24 Aug 2011. https://www.wiwo.de/unternehmen/wirtschaftskanzleien-honorare-fuer-top-anwaelte-schrumpfen/5320966.html. B, old.
26. RVG section 34. https://www.gesetze-im-internet.de/rvg/__34.html. A.
27. SRD Rechtsanwälte. NIS2 Anwendbarkeit prüfen. https://www.srd-rechtsanwaelte.de/nis2-anwendbarkeit-pruefen. D, own price.
28. Menold Bezler. Rechts-Check KI, 2025. https://menoldbezler.de/fileadmin/user_upload/Blog_PDFs/MB_Rechts-Check_KI_2025_Social_Media.pdf. D.
29. WBS.LEGAL. KI-Sofort-Check. https://www.wbs.legal/ki-sofort-check/. D.
30. Gesellschaft für Datenschutz. Externer Datenschutzbeauftragter. https://gesellschaft-datenschutz.de/externer-datenschutzbeauftragter/. D, own price.
31. ÖRAK. Allgemeine Honorar-Kriterien, 1 Oct 2024. https://oerak.at/fileadmin/user_upload/Gesetzestexte/AHK/AHK_01102024.pdf. A.
32. WKÖ and BMAW. KMU.DIGITAL 2025. https://wko.at/oe/information-consulting/kmu.digital-2025.pdf. A.
33. Italian Ministry of Justice. DM 13 Aug 2022 n. 147, Gazzetta Ufficiale n. 236, 8 Oct 2022. https://www.dirittobancario.it/wp-content/uploads/2022/10/Decreto-Ministero-della-Giustizia-n.-147-del-13-agosto-2022.pdf. A.
34. Knab. Zzp Uurtarievenboekje 2026, advocaat. https://bieb.knab.nl/wat-verdient-een-advocaat-zzp-bekijk-uurtarief-en-winst. C.
35. CNB. Modèle de convention d'honoraires, 2023. https://cnb.avocat.fr/medias/cnb-modele-convention-honoraires-tarif-horaire-honoraire-resultat-2023-6900a9efddd308.31428115.pdf. A.
36. Cour d'appel de Paris fee decisions, 2024 to 2025, on doctrine.fr. https://www.doctrine.fr/d/CA/Paris/2025/CAPA9E2F19E6619EAD55B92. B, snippets only.
37. BRAO sections 49b, 59c, 59i, 43b. https://www.gesetze-im-internet.de/brao/__49b.html. A.
38. Verlag Dr. Otto Schmidt. Anwaltsblog 21/2024 on BGH IX ZR 89/23. https://www.otto-schmidt.de/blog/zivil-und-zivilverfahrensrecht-blog/anwaltsblog-21-2024-verstoss-gegen-das-berufsrechtliche-provisionsverbot-bei-der-vermittlung-von-rechtsanwaltsmandaten-durch-dritte-auf-einer-online-plattform-ZRBLOG0003122.html. A ruling via B summary.
39. ÖRAK. RL-BA 2015, as of 29 Sep 2023. https://www.oerak.at/fileadmin/user_upload/Gesetzestexte/RL-BA/RL-BA_2015_29092023.pdf. A.
40. OGH 26 Ds 3/17s, 14 Feb 2018. https://www.ogh.gv.at/entscheidungen/entscheidungen-ogh/provisionen-auch-fuer-rechtsanwaelte/. A.
41. Berufsrechts-Änderungsgesetz 2026, BGBl. I 63/2026. https://ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2026_I_63/BGBLA_2026_I_63.pdf. A.
42. CNF. Codice deontologico forense. https://www.consiglionazionaleforense.it/codice-deontologico-forense. A.
43. Corte costituzionale. Ruling 138/2026. https://www.cortecostituzionale.it/scheda-pronuncia/2026/138. A.
44. NOvA. Gedragsregels advocatuur 2018, rule 2 and commentary. https://www.advocatenorde.nl/voor-advocaten/wet-en-regelgeving/gedragsregels/gedragsregels-advocatuur/de-maatschappelijke-rol. A.
45. CNB. Guide pratique: participation des avocats aux plateformes détenues par des tiers, March 2020. https://www.cnb.avocat.fr/sites/default/files/cnb_guide_pratique_participation_des_avocats_aux_plateformes_detenues_par_des_tiers.pdf. A for rule text, B for guidance.
46. CNB. Jurisystem: la Cour de cassation tranche en faveur du CNB. https://cnb.avocat.fr/actualite/jurisystem-la-cour-de-cassation-tranche-en-faveur-du-cnb. A ruling via bar note.
47. CNB. Rémunération de l'apport d'affaires entre avocats: concertation, 15 Sep 2026. https://cnb.avocat.fr/actualite/remuneration-de-l-apport-d-affaires-entre-avocats-le-cnb-ouvre-la-concertation. A.
48. CCBE. Code of Conduct for European Lawyers, 2019. https://www.ccbe.eu/fileadmin/speciality_distribution/public/documents/DEONTOLOGY/DEON_CoC/EN_DEON_CoC.pdf. A.
49. Eurostat. sbs_ovw_act, 2023 data. https://ec.europa.eu/eurostat/databrowser/view/sbs_ovw_act/default/table. A.
50. IfM Bonn for IMPULS-Stiftung, press release 27 Mar 2025. https://idw-online.de/de/news849686. B.
51. AWVN and Sira Consulting. Regeldrukreductie: het kan wel. https://www.awvn.nl/publicaties/regeldrukreductie-het-kan-wel/. C.
52. Bitkom. Unternehmen ächzen unterm Datenschutz, 9 Sep 2025. https://www.bitkom.org/Presse/Presseinformation/Unternehmen-aechzen-unterm-Datenschutz. C.
53. Destatis. Bürokratiekosten. https://www.destatis.de/DE/Themen/Staat/Buerokratiekosten/_inhalt.html. A.
54. European Commission. SME Relief Package, COM(2023) 535. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52023DC0535. A.
55. European Commission. Futurium summary of the 2025 Eurobarometer on SMEs. https://futurium.ec.europa.eu/lv/node/17036. A-.
56. EIB. EIBIS 2025 Ireland overview, Feb 2025. https://www.eib.org/files/publications/20250218-091225-econ-eibis-2025-ireland-en.pdf. A.
57. IAPP. Privacy Governance Report 2024, via https://www.aigl.blog/privacy-governance-report-2024.md. C.
58. ENISA. NIS Investments 2024. https://www.enisa.europa.eu/sites/default/files/2024-11/CSPA%20-%20NIS%20Investments%20-%202024_0.pdf. A.
59. Legal Services Board. Small business legal needs research, 23 May 2022. https://legalservicesboard.org.uk/news/new-research-reveals-the-legal-struggles-facing-small-businesses-lsb-calls-on-the-government-for-a-legal-support-strategy. A.
60. SaaS Capital. 2025 B2B SaaS Retention Benchmarks. https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf. B.
61. SaaS Capital. 2026 Spending Benchmarks, 10 Jun 2026. https://www.saas-capital.com/blog-posts/spending-benchmarks/. B.
62. Workiva. Form 10-K, fiscal 2025. https://www.sec.gov/Archives/edgar/data/1445305/000144530526000016/wk-20251231.htm. A.
63. Bessemer Venture Partners. Scaling to $100 Million, 21 Sep 2021. https://www.bvp.com/atlas/scaling-to-100-million. B-.
64. Bessemer Venture Partners. 10 Laws of Cloud, 19 Jun 2019. https://www.bvp.com/atlas/10-laws-of-cloud. C.
65. KeyBanc Capital Markets and Sapphire Ventures. 16th Private SaaS Company Survey, 13 Nov 2025. https://sapphireventures.com/?p=258480. B.
66. Benchmarkit and Pavilion. 2025 B2B SaaS Benchmarks. https://www.joinpavilion.com/resource/b2b-saas-performance-benchmarks. B-.
67. Kyle Poyar and High Alpha. 2025 SaaS Benchmarks, 12 Nov 2025. https://kylepoyar.substack.com/p/2025-saas-benchmarks-report. B-.

**Searched and not found.**

- **Competitor prices.** DataGuard, Kertos, Secjur, Holistic AI, trail, Justima, Norm Ai and OneTrust list prices.
- **G2 pricing.** G2 pages for Vanta and Drata were not machine-readable.
- **Lawyer rate surveys.** A current JUVE or Soldan survey, and bar surveys of hourly rates in Austria, the Netherlands, France and Italy.
- **Priced readiness reviews.** No law firm publishes a priced multi-act readiness review.
- **SME spend.** Euro compliance spend per SME by size class.
- **Sales cycle.** A sales-cycle benchmark with a stated method.
- **Compliance-specific metrics.** Churn and margins for compliance as a service.
- **Marketplace models.** LegalZoom, Lexoo and Axiom revenue structures were only partly checked.
