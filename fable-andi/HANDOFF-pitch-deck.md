# Handoff: Regulift application deck (pptx generation)

Written 2026-10-18 at the end of the deck session. The next session iterates on the deck with
Andi and Simone, then exports the final PDF. Everything below is what you need to rebuild,
change and ship it.

## What exists

- **Deck (current):** `pitch/regulift-eit-lab-pitch.pptx`, 11 slides (cover plus ten content slides),
  16:9 wide, about 6 MB. PDF export next to it: `pitch/regulift-eit-lab-pitch.pdf`. Built 18 Oct 2026
  from the 24-slide deck to meet the call's "short, creative presentation": validates clean, renders
  without overflow, speaker notes and a source line on every slide. Order: cover, problem (fact-finding
  share of legal bills), why now (EU timeline plus market figures), solution (inside-out), how it
  works (data-flow diagram plus three steps), why AI is central (two layers plus what compounds),
  market and competition (table plus customer and three figures), go to market (laws, country,
  channel), commercial model (tiers plus hours chart), plan (status plus 30/60/90/12 months),
  founders and the ask.
- **Deck (previous):** `pitch/regulift-ai-entrepreneurs-lab.pptx`, 24 slides, about 17 MB. Kept
  untouched as the long-form version; its generator is in `pitch/archive/src-24-slides/`.
- **Generator:** `pitch/src/build.js` (layout) and `pitch/src/content.js` (every word and number,
  each figure with its source). `pitch/src/render.sh` is the build, validate and render loop and
  writes the PDF. `pitch/src/flow.svg` is the standalone data-flow diagram, `pitch/src/site-home.png`
  the website screenshot (not used in the short deck). `pitch/src/README.md` has the short version.
- **Research behind the slides:** `FILES/research-regulations.md`, `FILES/research-countries.md`,
  `FILES/research-commercial.md`, plus the earlier `FILES/number-claims-sources.md`. Each has a
  one-page summary, graded sources (A to D) and a list of slide-ready facts. Everything on the
  slides traces to one of them or to EUR-Lex.
- **Target programme:** EIT Community AI Entrepreneurs Lab 2026, run by 28DIGITAL (the new name of
  EIT Digital). Call text saved at
  `/tmp/claude-1000/-home-andi/f48438b4-0a16-4bf3-84ad-6f8357b43e23/scratchpad/eitcall/call.txt`
  (scratch, may be gone; original PDF link is on https://ai.eitcommunity.eu/entrepreneurs-lab).
  Deadline 21 October 2026, 17:00. The call says CET but the date is still summer time, so treat
  it as 17:00 CEST. Application package: form on the Microsoft Forms platform, one CV per person,
  "a short, creative presentation". No slide limit or format given. Stage 1 scoring (30 points):
  Excellence 15 (problem clarity, ambition, centrality and defensibility of the AI approach),
  Impact 5, Implementation 10 (founder-problem fit, coachability). A full business plan is not
  required. Switzerland is not an eligible country. Teams of up to two, personal capacity.

## Decisions Andi made in the grilling (do not relitigate)

- Audience: investors and programmes in one deck, the EIT Lab application first. No funding ask;
  the ask is a place in the cohort, and the slide says what the 10,000 euro award would buy.
- Fixed product points: inside-out, read-only, representative approves a context report; partner
  law firms integrated in the platform, no in-house legal opinions; mission "compliance should get
  cheaper".
- Open points were settled by research and are now on the slides: regulations (GDPR, NIS2, AI Act
  first, CRA next, then DORA and Data Act, CSRD dropped), countries (Austria, then Germany, then
  Italy, Budapest as pilot base), customer (B2B software and SaaS, 20 to 249 staff, best 50 to
  249), pricing (platform by size 3,600 to 14,400 euros plus 1,800 to 6,000 per regulation module;
  law firms pay a flat workspace fee, never per mandate, which is unlawful in DE, AT, IT, FR).
- Revenue model: model 1 (subscription plus lawyers) combined with model 3 (per-regulation
  modules). The per-mandate fee from model 1 was dropped on legal grounds.
- Financial section is a scaling plan, not a business plan: 30/60/90 days and months 4 to 12.
- Honest stage: concept with validated design, live website, collector architecture, no
  customers, no signed firm. Andreas's background: AI integrations for SMEs, MCP servers, secure
  data connections to LLMs, RAG in production.
- Iterate on the .pptx; PDF only at the end.

## Style rules (the website's, carried over exactly)

Tokens in `build.js` `T`: paper F6F4EE, white FCFBF8, ink 1C2B2F, ink2 55676B, muted 8A9A9D,
line E3E0D7, line2 CFD6D3, mist E7EDEC, teal 3E6670. Geist everywhere ("Geist Medium" for
headlines, "Geist" for body). Sentence case, no all-caps labels, no em-dashes, short sentences.
Thin rules, generous whitespace. Photos from `regulift/dist/assets` with rounded corners. Teal
only inside charts, the check badge and mist panels. No accent bars or stripes. Every slide
with a number has a source line in 9 pt muted at y 6.6. Speaker notes on every slide.

Three layouts (pptxgenjs `defineSlideMaster`): COVER, CONTENT (rule at y 0.5, kicker left and
right, left-aligned 30 pt title, footer wordmark and slide number), DIVIDER (big left title, body,
photo right). Helpers in `build.js`: `figures()` (site's figure row with vertical rules),
`columns()` (steps or column lists with top rule), `card()`, `meta()`, `head()`, `tb()`, `source()`.

## How to rebuild

The generator ran from a scratch folder with its own `node_modules`. To set up again:

```bash
mkdir -p ~/deckbuild && cd ~/deckbuild && npm init -y && npm install pptxgenjs sharp
cp "/home/andi/Dokumente/Business/Simone Business/Business/pitch/src/"{build.js,content.js,render.sh} .
mkdir img && cp "/home/andi/Dokumente/Business/Simone Business/Business/pitch/src/"{flow.svg,site-home.png} img/
```

Then regenerate the image set in `img/` with sharp (the session did this inline; the recipes):

- `flow.png`: rasterise `img/flow.svg` at density 300, width 3840.
- Rounded photos: resize each site photo, composite an SVG `<rect rx>` mask with `dest-in`,
  write PNG. Files expected by `build.js`: `hero-r.png` (1920x800, crop position south),
  `rock-r.png` (1400 wide), `sea-r.png`, `hills-r.png`, `towers-r.png`, `interior-r.png`,
  `foam-r.png` (1000 wide, 4:5), `andreas-r.png` and `simone-r.png` (700x875, fit cover,
  position attention), `site-r.png` (the screenshot with rx 16).

Environment the scripts need:

- `PPTX_SKILL` = the pptx skill folder (for `scripts/apply_theme.js` and
  `scripts/office/validate.py`, `scripts/office/soffice.py`). Current path:
  `/home/andi/.claude/skills/synced/52a21279-8eac-4e92-97f6-12e52d682b8b_7de9907a-34c3-4d9a-838d-8cd970e00ba2/pptx`
- `NODE_PATH` = your `node_modules` folder, otherwise `apply_theme.js` cannot find jszip and
  the theme colours stay at Office defaults (the file is still written, so you would not notice
  without checking).
- `OUT` = target pptx path (defaults to the repo path).
- Geist installed locally for correct PDF rendering: TTFs are in
  `~/.local/share/fonts/geist/` (from https://github.com/vercel/geist-font/releases, v1.8.1,
  OFL). Run `fc-cache -f` after copying. Without it LibreOffice substitutes and the PDF is wrong.
- `markitdown` is in `~/.local/bin` (installed with pip `--user`) for the placeholder grep.

`render.sh` does: `node build.js`, `validate.py`, LibreOffice to PDF with `LC_ALL=en_US.UTF-8`
(otherwise chart labels render with comma decimals), `pdftoppm -r 80` to `render/slide-NN.jpg`.
Look at every slide image after a change; overflow is the usual defect.

## pptxgenjs gotchas hit in this session

- Title placeholders default to centred text. Set `align: "left"` explicitly.
- A photo wider than the slide height is silently cut; compute `h = w * imgH / imgW` and keep
  the sum of photo plus text under 7.5 in. The cover photo is cropped to 1920x800 for that reason.
- Text boxes do not shrink to fit. If a title is longer than about 55 characters at 30 pt it wraps
  into the lead. Shorten the copy, do not shrink the font below the sizes in `build.js`.
- Charts: `dataLabelFormatCode` works; LibreOffice follows the system locale for decimals.
- `figures()` has a compact mode (`{ valueSize: 22 }`) for a row under cards.
- Fonts in charts must be `"+mn-lt"` to follow the theme.

## How to change content

Everything is in `content.js`, grouped by section (`thesis`, `analysis.hours`, `analysis.timeline`,
`analysis.market`, `analysis.compete`, `solution.*`, `strategy.regs`, `strategy.markets`,
`strategy.channel`, `strategy.plan`, `commercial.model`, `commercial.cheaper`,
`conclusion.founders`, `conclusion.close`). Each block has `kicker`, `kicker2`, `title`, body
fields, `source` and `notes`. Keep the source line truthful when you change a number: find the
figure in the matching research report first.

Slide order is fixed in `build.js` by the order of blocks. Dividers are created with
`divider(section, number, title, body, photo, ratio)`.

## Open items

1. **Review with Andi and Simone.** Points flagged to Andi, not yet answered: the per-tier prices
   are a proposal inside the research ranges; the founders slide expands AUSIR as "Autonomous
   Systems and Intelligent Robotics track" and gives Simone the customers and partners role;
   whether first law-firm conversations exist (the deck says none signed).
2. **PDF export at the end:** `render.sh` already produces `render/regulift-ai-entrepreneurs-lab.pdf`
   with Geist. Copy it next to the pptx when the deck is final. Check file size; the application
   platform may have an upload limit (not stated in the call).
3. **Commit.** `pitch/` and the three `FILES/research-*.md` files are untracked. Add
   `pitch/.gitignore` for `render/` and `node_modules/` if a build folder ends up in the repo.
   No AI attribution in commit messages (Andi's global rule).
4. **Possible trims.** 24 slides is long for a "short, creative presentation". Candidates to cut
   if asked: the five dividers (keep the section kicker on the first slide of each section
   instead), or merge "Budgets rise every year" into the thesis slide.
5. **Application form and CVs** are not started. The form needs JavaScript (Microsoft Forms);
   open it in the browser. CVs: one per founder, not in the repo.
6. **Legal review:** the research says an Austrian lawyer should review the partner model before
   launch. That is a venture task, not a deck task, but the deck claims the structure is lawful
   in five countries on the basis of the research, so keep the citations on the slides.

## Repo hygiene

- No `Co-Authored-By: Claude` or AI attribution in commits or PRs. PR base is `main`.
- Andi's email must not appear in the deck or be sent anywhere. The closing slide uses the
  website URL only.
- Photos: Picsum, Unsplash licence, same credit line as the website footer; the deck does not
  carry the credit line, add one on the closing slide if the deck is published beyond the jury.
