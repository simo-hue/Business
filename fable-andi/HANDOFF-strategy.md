# Handoff: Regulift strategy session

Written 18 October 2026, end of the research and analysis session. The next session walks
through the strategy step by step with Andi and Simone: which market first, which regulation
first, what the product is allowed to do where, how the money works, and how to present it
(EIT Lab application due 21 Oct 2026 17:00 CEST, investors later). This file holds every
decision, finding, file and open question from the session so nothing has to be rediscovered.

## 1. Where things stand

**Website.** Live at https://simo-hue.github.io/Business/, repo `simo-hue/Business`, branch `main`.
PR #2 and PR #3 are merged. Content is final as of 18 Oct: hero "Compliance platform. Inside-out
assessment." with Budapest, mission, inside-out section with "How is Regulift different?" compare
table, lawyer card "Real lawyers, when it matters", handoff section ("Built around the handoff.
AI prepares, lawyers decide."), "How it works." photo band with Understand / Improve / Review,
"Context leaves. Your data stays." with the inline SVG data-flow diagram, FAQ, early access,
founders. Story page deleted. Two known leftovers: the FAQ "Is this the same as hiring a law
firm?" and the handoff paragraph "Independent legal review is a separate step" still contradict
the integrated-lawyer message; `EARLY_ACCESS_ENDPOINT` in `experience.js` is empty.

**Decks** (untracked, in `pitch/`): `regulift-eit-lab-pitch.pptx` (11 slides, website style,
plus PDF), `regulift-ai-entrepreneurs-lab.pptx` (24 slides, long form), and
`regulift-compliance-lifted-by-ai.pptx` (12 slides, built from the Pitch.com template the user
supplied). Generators in `pitch/src/`. Rebuild instructions in `HANDOFF-pitch-deck.md`. All
three decks say Austria first; see section 4 below, that may change.

**Research** (untracked, in `FILES/`), all Opus subagents, graded sources A to D:
- `number-claims-sources.md`: backing for the website's numbers.
- `research-regulations.md`: which laws, in what order, with article citations.
- `research-countries.md`: 15 countries scored on seven criteria; Austria, Germany, Italy
  recommendation; section 5 is the Austrian partner-law-firm structure.
- `research-commercial.md`: pricing bands and the law-firm payment rules.
- `research-legal-it-nl.md`, `research-legal-nordics.md`, `research-legal-pl-be-ch.md`:
  18 Oct verification of the "open" markets against statutes and bar codes.
- `research-legal-open-markets.md`: one-page consolidation of the three above.

**Artifacts** (private claude.ai pages, share from the page's Share menu):
- Product proposal: https://claude.ai/artifact/1LA4hNwAQ5Cm9sH6ajY7CX. Nine sections: five product
  steps with legal status, Comply and Expand modes, feature-by-market matrix (Legal / Lawyer signs /
  Critical / Open), the improvement loop, two labels and country setting, revenue layers and the
  "never" list, market order, 90-day plan and MVP scope, six questions for an Austrian lawyer.
- EU rules by country: https://claude.ai/artifact/3i81uBzM6QRPo1bW3QASPW. Nine laws explained, what
  travels across borders, 15-country table, country notes, what applies directly vs through
  customers, the legal structure, the iteration loop, AI guidance, sequence, sources.
- Open markets: https://claude.ai/artifact/DHov1A1V2MVK2UBts2k5Po. The eight open countries only:
  at-a-glance table, feature matrix vs Austria, eight country cards, interactive weighted scoring
  (sliders) of 14 countries, constants and open points, sources.
- Market compare: https://claude.ai/artifact/YLV4Nxi1wThDxxGiZHGLm1. Ten countries (eight open plus
  Austria and Germany), checkboxes to pick criteria, cells as scores, words or both.
- Data-flow options (superseded): https://claude.ai/artifact/4ezgJxrEUqknXiPgngvwvr.

Source HTML for the four live artifacts is in the session scratchpad
`/tmp/claude-1000/-home-andi/f48438b4-0a16-4bf3-84ad-6f8357b43e23/scratchpad/` (may be gone);
re-read them with the Artifact tool's read action if needed.

## 2. Decisions already made (do not reopen without reason)

- Audience: EIT Community AI Entrepreneurs Lab 2026 application first (run by 28DIGITAL, formerly
  EIT Digital; teams of two, personal capacity, EU residents; Stage 1 scoring Excellence 15,
  Impact 5, Implementation 10; "short, creative presentation"; up to 5 x €10,000 with optional
  sub-1% SAFE; Switzerland not eligible), investors later. No funding ask in the deck.
- Product fixed points: inside-out, read-only connectors via MCP servers, collector writes a
  context report, one named representative approves it before anything leaves the company;
  partner law firms integrated in the platform; Regulift gives no legal opinions itself where
  the law reserves them; mission "compliance should get cheaper".
- Two product modes (added 18 Oct): **Comply** (stay compliant and current in the markets you
  operate in) and **Expand** (enter a new country or compare countries; same evidence graph run
  against another country's rule set, shown as a delta; country packs priced like modules; the
  country setting follows the target market).
- Revenue: platform fee by size (€3,600 / €7,200 / €14,400 a year for 10 to 49 / 50 to 249 /
  250 to 1,000 staff, GDPR included), modules per regulation (€1,800 to €6,000 a year), partner
  firms pay a flat yearly workspace fee for concrete services. Prices are a proposal inside the
  researched ranges. Never: fee per mandate or lead, share of fees, collecting client money,
  stake in a law firm.
- Regulation order: GDPR as the base, NIS2 first module, AI Act (from Q1 2027, high-risk duties
  2 Dec 2027), CRA fourth (reporting since 11 Sep 2026, full 11 Dec 2027), DORA as a "selling to
  banks" supplier module, Data Act for SaaS, EAA, PLD as a by-product; CSRD dropped.
- Customer: European B2B software and SaaS companies, 20 to 249 staff, sweet spot 50 to 249
  where NIS2 can apply directly.
- Honest stage: live website, designed collector architecture, researched, no customers, no
  signed firm. Andreas: AI integrations for SMEs, MCP servers, secure data-to-LLM connections,
  RAG in production. Simone: customers and partners, EIT Digital Master School, discovery.
- Style everywhere: website tokens (paper F6F4EE, ink 1C2B2F, teal 3E6670 only in photos and
  mist panels, Geist, sentence case, no em-dashes, thin rules, meta rows). Say "European
  companies", never "European tech companies". Competitors as categories on the public site.
  Figures labelled targets or illustrative.
- Iterate on .pptx, PDF only at the end. All subagents on Opus.

## 3. The legal map, verified 18 Oct 2026

Who may tell a company "this law applies to you" or "you comply":

| Tier | Countries | What it means for the product |
|---|---|---|
| Closed | Austria, Hungary, France, Luxembourg, Czechia (Romania unchecked, treated as closed) | Even legal information is reserved to lawyers. Regulift shows facts, evidence, technical status, the firm's checklist and templates. Applicability, case explanations, ratings and the confirmation wait for the firm's signature. Austria: VwG Wien fined an online platform in 2024; fine up to €16,000. Hungary: a crime. |
| Strict with safe harbour | Germany | BGH Smartlaw protects generic, rule-based tools (form-book pattern). Deterministic applicability rules may show directly; anything examining the user's own case goes to the lawyer. Chatbot answers are legally the company's own (OLG Hamm, May 2026). |
| Partly open | Italy | Out-of-court advice reserved only where connected to litigation, read to include future disputes (L. 247/2012 art. 2(6), Cass. 18734/2025; art. 348 c.p. is criminal). Readiness advice is free; inspections, fines, incidents with claims, disputes go to the lawyer. Reform law 137/2026 in force 16 Aug 2026. Firm must disclose AI use (L. 132/2025 art. 13), binds the firm not Regulift. |
| Open | Netherlands, Denmark, Sweden, Finland, Poland, Belgium, Switzerland | Only the lawyer title and court work are reserved. The AI may give applicability, case-specific explanations, gap ratings and filled templates as Regulift's own output, labelled as not legal advice. Switzerland is outside the EU, NIS2, the AI Act and the Lab. |

Money and ownership are closed everywhere: every bar code checked bans fees per mandate,
referral commissions and fee shares (IT CDF 37; NL Voda 5.3, 5.4; DK AER 65, 66; SE VRGA 7.9;
FI TO 4.6; PL § 23d; BE OVB 111, 262, AVOCATS.BE 4.39; CH SSR 18; DE BRAO 49b(3), BGH IX ZR
89/23; AT OGH 4 Ob 77/23m). Outside ownership of bar firms is banned everywhere except Italy
(up to one third) and Swiss advice-only units. The Netherlands alone allows a disclosed, fixed,
refusable referral fee (Gedragsregel 2(3)); recommendation: do not build it. Belgium expressly
allows paying a platform for its service and costs (AVOCATS.BE 4.12 § 2).

New constraints from the verification: Denmark's Supreme Court (5 Feb 2025) bans partner
contracts that impose quality standards, client-name reporting or exit penalties on the firm.
Belgium bans exclusivity or reciprocity promises by firms and personalised lawyer advice in
public online forums; client secrets in AI only in a closed environment. Poland criminalised
"kancelaria adwokacka" for non-lawyers and publishing advocates' list data without bar consent
(17 Oct 2026); NIS2 fines there only from 3 Apr 2028. Finland's legal-services structure is under
ministry review, memo due end 2026. Italy bans comparative ranking of firms.

Table corrections made: Sweden's NIS2 contact point is FRA since 1 Jul 2026 and there is no AI
Act law (PTS under assignment to end 2026); Denmark has three AI Act authorities and a new AI
bill (7 Oct 2026); Finland's AI Act law is 1377/2025; the Dutch draft makes the data protection
authority the default AI supervisor (not passed); Belgium's NIS2 date 18 Oct 2024 is now grade A.

No court in any of the eight open countries has ruled on software or AI giving company-specific
legal assessments (2021 to 2026). Austria has no ruling on AI in legal work either.

## 4. The open strategic tension (the main agenda item)

The country research recommended **Austria first, Germany second, Italy third, Budapest as
pilot base**, on a practical test: founder on the ground, NIS2 live 1 Oct 2026 with a three-month
registration window, lawyers at about €349 an hour, and the strictest rules so what passes there
passes everywhere. The decks and the proposal say this.

Andi then said the product should **give advice automatically, with a chatbot and maybe an
avatar**. In Austria that is reserved to lawyers; in Germany a chatbot examining the user's case
is reserved too. The verification showed where it is legal. With weights that fit an automated
adviser (advice legality x3, trigger and size x2, rest x1), the scoring on the open-markets page
gives: Netherlands 47, Sweden 42, Italy 42, Germany 41, Denmark 37 and Switzerland 37 (outside
EU), Finland 36, Belgium 36, Poland 35, Austria 33 (tenth). Set the advice weight to 1 and
Austria is back in the top five. The weights are the strategy.

Recommendation given, not yet confirmed by Andi: **Netherlands first** (adviser legal, NIS2 live
15 Aug 2026 with registration open and about 8,000 entities, English works with firms and SaaS
buyers, 28DIGITAL office in Eindhoven, the Lab ends in Amsterdam), then the **Nordics led by
Sweden** through one firm (highest lawyer prices in Europe, highest VC), then **Italy** with the
readiness-only guardrail, then **Germany and Austria firm-led** (the adviser speaks as the partner
firm's content). **Austria stays the legal seat** for aws Preseed (up to €89,000) and FFG;
Budapest stays the pilot base. Risks: no founder in the Netherlands, no Dutch, no Dutch firm yet;
"Dutch buyers in the 50 to 249 band expect Dutch" is a judgement to test in the first interviews.

Chatbot and avatar constraints everywhere: AI Act Art. 50 disclosure (since 2 Aug 2026), avatar
labelled synthetic, misleading-advertising law on status claims, Regulift's own liability for
wrong answers (professional indemnity insurance belongs in the plan), never a lawyer title or a
firm-like name in any language, two labels on every statement.

If Andi confirms the flip, these need updating: proposal sections 7 and 8 (markets, 90-day plan),
the rules page sequence section, all three decks (market, go-to-market, plan, ask slides), the
website's Budapest-only hero is fine, and `HANDOFF-pitch-deck.md` decisions list.

## 5. What NIS2 and DORA are (for the presentation)

**NIS2** (Directive 2022/2555): EU cybersecurity law for Annex I and II sectors, medium-sized and
larger (50+ staff or above €10m); cloud including SaaS is digital infrastructure, so a 50-person
SaaS company can be in scope directly. Duties: register with the national authority; the ten
Article 21 measures (risk analysis, incident handling, backups and continuity, supply chain
security, secure development and vulnerability handling, effectiveness assessment, cyber hygiene
and training, cryptography, HR security and access control and asset management, MFA);
incident reports in 24 h / 72 h / one month; management approves, oversees and is personally
liable; fines at least €10m or 2% (essential) and €7m or 1.4% (important). Reaches small suppliers
through Art. 21(2)(d): 63% of covered organisations require standards from suppliers, 48% put
them in contracts (ENISA). Germany: 20,141 registered by 30 Sep 2026. Implementing Regulation
2024/2690 gives binding technical detail for cloud and managed-service providers.

**DORA** (Regulation 2022/2554): the financial sector's resilience law, applying since 17 Jan 2025
to banks, insurers, investment and payment firms. Reaches software vendors as suppliers through
mandatory Art. 30 contract clauses (data locations, incident assistance, audit rights for critical
functions) and the Art. 28(3) register of information every financial entity must keep (only 6.5%
of 947 dry-run registers passed data-quality checks). No fine ceiling for financial entities;
direct supervision only for 19 designated critical providers (AWS, Microsoft, Google, SAP ...).
Treat as a "selling to banks and insurers" supplier module, fifth in the order.

## 6. Agenda for the strategy session

Work through these in order, one decision each, with Andi and Simone deciding:

1. **Product definition.** Confirm the adviser vision (chatbot, avatar, automatic advice) and the
   two modes, Comply and Expand. Decide the product behaviour per market tier from the proposal's
   matrix: what the country setting switches on.
2. **Market order.** Austria-first (firm-led) or Netherlands-first (adviser-led)? Use the two
   interactive pages (sliders, checkboxes) live. Decide the seat (Austria) separately from the
   first market. Decide the Nordic approach (one firm, three countries).
3. **Regulation order.** Confirm GDPR base + NIS2 first, AI Act Q1 2027, CRA, DORA supplier
   module. Decide the first country pack content for Expand.
4. **Legal structure.** Confirm the single EU model: factual output, lawyer signs where reserved,
   client contracts the firm, flat workspace fee, no equity. Add the new constraints (Denmark
   independence, Belgium no exclusivity, Poland directory consent). List what the first partner
   firm must confirm (the proposal's six questions plus Netherlands and Italy specifics).
5. **Money.** Confirm tiers and module prices, country-pack pricing, workspace fee level to be set
   with the first two firms. Insurance line for adviser liability.
6. **Plan.** Rewrite the 30/60/90 and months 4 to 12 for the chosen first market: interviews
   where, which firm, which connectors, what to measure (lawyer hours vs quote).
7. **Presentation.** Pick the deck (11-slide website-style is the application candidate), update
   market and plan slides to the decisions, export PDF, prepare the Microsoft Forms application
   and two CVs. Deadline 21 Oct 2026 17:00 CEST. Stage 1 scoring: Excellence 15 (problem clarity,
   ambition, centrality and defensibility of AI), Impact 5, Implementation 10 (founder-problem
   fit, coachability).
8. **Housekeeping.** Commit `pitch/`, `FILES/research-*.md`, both handoffs (no AI attribution in
   commits, PR base `main`, stage files by name). Fix the two website leftovers. Decide the
   early-access endpoint.

## 7. Open questions nobody has answered yet

- Whether partner lawyers may invest in Regulift (ask the Austrian Bar before any round with lawyers).
- Workspace fee level (no source; set with the first two firms).
- Whether a flat workspace fee with Swedish and Finnish bar firms is safe (no decision either way).
- Whether a non-lawyer may be a limited partner in a Polish law firm.
- Whether any Belgian statute reserves "consultation juridique" (none found; a Belgian lawyer should confirm).
- Dutch buyers' tolerance for English in the 50 to 249 band.
- Founders slide: AUSIR expanded as "Autonomous Systems and Intelligent Robotics track"; Simone's
  role as customers and partners; whether any law-firm conversations exist.
- Where the founders are resident for the Lab's RIS-country indicator.

## 8. Rules for the next session

- No `Co-Authored-By: Claude` or AI attribution in commits or PRs. PR base is `main`.
- Andi's email must not appear on the site, in decks or be sent to any service.
- Subagents on Opus. Research with graded primary sources; label judgement as judgement.
- Present options, let Andi pick a number, apply, show, commit only when told.
- Website edits: preview on `http://localhost:8799` (server may need restarting:
  `python3 -m http.server 8799` in `regulift/dist`), verify at 1400 and 400 px, bump `?v=` on CSS/JS.
- Everything here is research, not legal advice. The first partner firm in each country reviews
  the structure before launch.
