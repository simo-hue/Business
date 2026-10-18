# Deck build

`build.js` plus `content.js` generate `../regulift-eit-lab-pitch.pptx` (cover plus ten content slides) with pptxgenjs, in the website's tokens (Geist, egg-white paper, ink, mist, teal). All copy and every figure with its source live in `content.js`; `build.js` only lays them out. The earlier 24-slide generator is in `../archive/src-24-slides/`.

To rebuild: in a folder with `npm install pptxgenjs` done, set `NODE_PATH` to its `node_modules`, `PPTX_SKILL` to a checkout of the pptx skill (for `apply_theme.js`), and create the `img/` folder next to `build.js` from `regulift/dist/assets` (rounded PNGs, recipes in `../../HANDOFF-pitch-deck.md`), then `node build.js`. `render.sh` runs the full build, validate and render loop and writes the PDF. Install Geist locally so LibreOffice renders the PDF with the right face.

Research behind the strategy and commercial slides: `../../FILES/research-regulations.md`, `../../FILES/research-countries.md`, `../../FILES/research-commercial.md`, and `../../FILES/number-claims-sources.md`.
