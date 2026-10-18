#!/bin/bash
# Build, validate and render the deck to slide images.
set -e
B=/tmp/claude-1000/-home-andi/f48438b4-0a16-4bf3-84ad-6f8357b43e23/scratchpad/deckbuild
S="/home/andi/.claude/skills/synced/52a21279-8eac-4e92-97f6-12e52d682b8b_7de9907a-34c3-4d9a-838d-8cd970e00ba2/pptx"
OUT="/home/andi/Dokumente/Business/Simone Business/Business/pitch/regulift-ai-entrepreneurs-lab.pptx"
cd "$B"
NODE_PATH="$B/node_modules" PPTX_SKILL="$S" node build.js | tail -1
python3 "$S/scripts/office/validate.py" "$OUT" | tail -1
mkdir -p render && cd render && rm -f *.pdf slide-*.jpg
LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8 python3 "$S/scripts/office/soffice.py" --headless --convert-to pdf "$OUT" >/dev/null 2>&1 || true
pdftoppm -jpeg -r 80 regulift-ai-entrepreneurs-lab.pdf slide
echo "slides: $(ls slide-*.jpg | wc -l)  size: $(du -h "$OUT" | cut -f1)"
