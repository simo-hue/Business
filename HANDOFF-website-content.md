# Handoff: Regulift website content pass

Written 2026-10-18 at the end of the rebrand/redesign session. The next session adjusts the
**content** (copy, claims, structure of text) of the Regulift landing page. The visual design is
settled and accepted by Andi; do not restart it.

## State of things

- Live site: https://simo-hue.github.io/Business/ (GitHub Pages, workflow mode).
- Repo: `simo-hue/Business`, default branch `main`. PR #1 (rebrand ComplAI → Regulift, redesign)
  is merged. Local checkout is on `main` at `7eb4947`, clean.
- Deploy: `.github/workflows/deploy.yml` runs on every push to `main` and publishes
  `regulift/dist/` as-is. There is no build step. Changes go live about a minute after merge.
- Work on a branch, open a PR to `main`, merge. The `pr` skill's config says base `develop`;
  this repo uses `main`. Say so when you open the PR.
- Variant branch `hero-europe-variant` (pushed) holds a rejected-for-now hero: Europe from orbit
  (NASA Blue Marble crop) with a USP side column and bold/teal highlights inside body text. Andi
  asked to park it, not delete it. Cherry-pick from it only if asked.

## Files

```
regulift/dist/index.html      the whole page, ~45 long lines, hand-written HTML
regulift/dist/styles.css      token-based CSS (~207 lines), breakpoints 1100/760/480
regulift/dist/experience.js   scroll reveal + early-access form handler
regulift/dist/assets/         photos (Picsum, Unsplash licence), founder portraits
DOCUMENTATION.md              append a short entry per pass (existing convention)
FILES/Andi-website-thoughts   Andi's original brief for this refinement
FILES/head_to_head_competitive_matrix.md   competitor notes (never name vendors on the site)
FILES/Compliance Brain Market Scan.pdf, Caas Idea.pdf   background material
```

Memory for this project lives at
`/home/andi/.claude/projects/-home-andi-Dokumente-Business-Simone-Business-Business/memory/`
(see `project-regulift-brand.md`).

## Page map (section ids are the nav anchors)

| Section id | Class | What it holds |
|---|---|---|
| hero | `.hero-photo` | misty river photo, giant "regulift" wordmark, meta row, two `.statement` paragraphs, center link |
| `#platform` | `.frameworks` | photo grid: GDPR, EU AI Act, NIS2, DORA |
| `#mission` | `.mission` + `.figures` | "Less spending, more competing", figures 4 / 60% / 16 h / EU (labelled illustrative) |
| `#inside-out` | `.flip` + `.columns` + `.principles` + `.compare` | outside-in vs inside-out, four trust principles, comparison table by category |
| `#approach` | `.approach` + `.steps` + `.preview` | Understand → Improve → Review, preview card "AI does the groundwork. People make the call." |
| `#story` | `.story` + `.timeline` + `.figures.results` | illustrative Northstar Technologies (Berlin, fictional) case; Day 1 Connect … ; results 14 / 11 → 2 / 16 h / 60% |
| `#questions` | `.faq` | six `<details>` items (who for, certify?, which regulations, vs law firm, access, use today?) |
| `#early-access` | `.early` + `form.signup` | "Let's make clear happen.", email field, Join button, privacy line |
| founders | `.founders` | Simone Mattioli, Andreas Herzinger, photos |
| footer | | "© 2026 Regulift. Concept preview. Photos via Picsum, Unsplash licence." |

## Content rules Andi has set (do not relitigate)

- Name is **Regulift**, tagline "Regulation, lifted." Never anything with "lex". ComplAI is gone.
- Say **"European companies"**, never "European tech companies".
- Positioning: **inside-out** (reads the company's real systems, read-only) versus **outside-in**
  (questionnaires, interviews, consultants). Mission: "the compliance market grows, we want it to
  shrink", so companies become more competitive. USP target: cut the legal bill by about 60%
  before the lawyer starts the clock. AI prepares, real lawyers decide.
- Competitors are compared only as **categories**, never by vendor name.
- Figures are **targets or illustrative**, and the page says so next to them. Keep that honesty.
- No em-dashes anywhere in copy. Sentence case, no all-caps labels. Plain, serious, trustworthy
  voice. Short sentences.
- The demo was replaced by the illustrative Northstar article on purpose. Keep FAQ and the blocks
  below it.
- Early-access copy promises: only emails about early access, no tracking, no newsletter.

## Design rules (settled, touch only if content forces it)

Egg-white paper background, real photography, Geist font, sentence case, teal only inside photos
and mist panels, no bulky type, no glassmorphism, no dark sections. Tokens are in `:root` in
`styles.css`. Scroll reveal is in `experience.js` and respects reduced motion. If you add a new
block, add its selector to the reveal list in `experience.js` and check the three breakpoints.

## How to preview and verify

```bash
python3 -m http.server 8799 --directory regulift/dist     # http://localhost:8799/
fuser -k 8799/tcp                                           # stop it (pkill -f kills your own shell)
```

Browser caching bit us several times. The HTML links `styles.css?v=…` and `experience.js?v=…`;
bump the `v` value when you change either file. Verify with Playwright screenshots at 1400px and
400px wide. Phones need the hero wordmark and headlines to fit without clipping.

## Open items the next session may pick up

1. **Early-access form is not wired.** `EARLY_ACCESS_ENDPOINT` in `experience.js` line 6 is an
   empty string, so the live form shows "Sign-up is not connected yet". Andi needs to create a
   Formspree (or similar JSON POST) endpoint and paste its URL there. Do not invent one.
2. `assets/hero-lift.jpg` is an unused Gemini illustration from an earlier pass. Delete if the
   page still does not use it.
3. The page title and meta description are the only SEO copy; nothing else was tuned.

## Repo hygiene

- Commit messages: no `Co-Authored-By: Claude` or any AI attribution trailer (Andi's global
  CLAUDE.md). PR titles and bodies: conventional-commit style, no AI attribution.
- Andi's email (herzingerai@gmail.com) must not appear on the site or be sent to any service.
- Secret scanning (GitGuardian) runs on PRs. No automated code reviewer exists on this repo, so
  do not wait for one.
