#!/bin/bash
# Build the strategy slides, assemble them into Simone's deck, validate, render.
# usage: build-deck.sh [render dir]
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
B=~/deckbuild
S="/home/andi/.claude/skills/synced/52a21279-8eac-4e92-97f6-12e52d682b8b_7de9907a-34c3-4d9a-838d-8cd970e00ba2/pptx"
SIMONE="$HERE/assets/simone-deck-2026-10-19.pptx"
STRAT="$HERE/../strategy-slides.pptx"
OUT="$HERE/../../../regulift-deck.pptx"
R="${1:-$HERE/render}"; mkdir -p "$R"
cp "$HERE/strategy.js" "$B/strategy.js"
(cd "$B" && NODE_PATH="$B/node_modules" PPTX_SKILL="$S" ASSETS="$HERE/assets" OUT="$STRAT" node strategy.js | tail -1)
python3 "$HERE/assemble.py" "$SIMONE" "$STRAT" "$OUT"
python3 "$S/scripts/office/validate.py" "$OUT" --original "$SIMONE" | tail -3
cd "$R" && rm -f *.pdf slide-*.jpg
LC_ALL=en_US.UTF-8 python3 "$S/scripts/office/soffice.py" --headless --convert-to pdf "$OUT" >/dev/null 2>&1 || true
pdftoppm -jpeg -r 90 regulift-deck.pdf slide
echo "slides: $(ls slide-*.jpg | wc -l)  size: $(du -h "$OUT" | cut -f1)"; ls -1 "$R"/slide-*.jpg
