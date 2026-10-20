#!/bin/bash
# Rebuild market-slides.pptx from market.js, replace the gate-table slide (slide15, page 11) in the
# central deck, validate, and render the replaced slide to an image.
# usage: render-central.sh            (writes the central deck in place; keeps a .bak copy)
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
B=~/deckbuild
S="/home/andi/.claude/skills/synced/52a21279-8eac-4e92-97f6-12e52d682b8b_7de9907a-34c3-4d9a-838d-8cd970e00ba2/pptx"
CENTRAL="$HERE/../../../regulift-central.pptx"
R="${RENDER_DIR:-$HERE/render}"; mkdir -p "$R"
cp "$HERE/market.js" "$B/market.js"
(cd "$B" && NODE_PATH="$B/node_modules" PPTX_SKILL="$S" OUT="$HERE/../market-slides.pptx" node market.js | tail -1)
cp "$CENTRAL" "$R/central.bak.pptx"
python3 "$HERE/replace.py" "$R/central.bak.pptx" "$CENTRAL" "$HERE/../market-slides.pptx" 1 slide15.xml 11
python3 "$S/scripts/office/validate.py" "$CENTRAL" --original "$R/central.bak.pptx" | tail -2
cd "$R" && rm -f *.pdf slide-*.jpg
LC_ALL=en_US.UTF-8 python3 "$S/scripts/office/soffice.py" --headless --convert-to pdf "$CENTRAL" >/dev/null 2>&1 || true
pdftoppm -jpeg -r 110 -f 11 -l 11 regulift-central.pdf slide
ls -1 "$R"/slide-*.jpg
