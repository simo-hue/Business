# Deck build

Two generations live here.

## Current: `regulift-deck.pptx` (20 Oct 2026)

Simone's Canva export (`assets/simone-deck-2026-10-19.pptx`, Poppins, 20 x 11.25 in) plus five
generated slides: the gate table, Germany, the Netherlands map, the business model, why us.

```bash
pitch/src/build-deck.sh [render dir]
```

What it does, in order:

1. `strategy.js` (pptxgenjs, run from `~/deckbuild` with its `node_modules`) writes
   `pitch/strategy-slides.pptx`. All copy, prices and sources are in this file. Fonts: "Poppins"
   with the bold flag, so PowerPoint, Canva and LibreOffice all resolve the weight.
2. `assemble.py` drops Simone's packages slide, inserts the five slides after her slide 4, copies
   her nav bar and page pill onto each (the "Why us" slide gets "Team" active), renumbers all page
   pills, and writes `../../regulift-deck.pptx`.
3. The pptx validator runs against the template, then LibreOffice renders every slide to JPEG in
   the render dir.

Assets: `assets/map-nl.png` is rendered from `map-render.html` in a browser (704 x 481 CSS px at
zoom 4, so 2816 x 1924). `assets/andreas.png` and `assets/simone.png` come from Simone's deck.
`strategy-draft.html` is the approved HTML draft (also published as a claude.ai artifact).

PNG exports of the five slides at 4000 px for Canva: `pitch/export/`.

Rendering needs Poppins installed (`~/.local/share/fonts/Poppins`) and the fontconfig alias in
`~/.config/fontconfig/fonts.conf` that maps "Poppins Bold" to the family.

## Previous: the 18 Oct decks

`build.js` plus `content.js` generate `../regulift-eit-lab-pitch.pptx` (Geist, website tokens).
`market.js` and `product.js` generate the strategy slides spliced into `../../regulift-central.pptx`
by `merge.py`; `replace.py` and `render-central.sh` rebuild one slide of that deck in place.
`archive/src-24-slides/` holds the 24-slide generator. Recipes in `../../HANDOFF-pitch-deck.md`.

Research behind the strategy and commercial slides: `../../FILES/research-regulations.md`,
`../../FILES/research-countries.md`, `../../FILES/research-commercial.md`, and
`../../FILES/number-claims-sources.md`.
