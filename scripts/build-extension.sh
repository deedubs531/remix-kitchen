#!/bin/sh
# Packages the app as a browser extension zip (Chrome Web Store / Firefox Add-ons).
# The repo root also loads as-is via "Load unpacked"; this just leaves out web-only files.
set -e
cd "$(dirname "$0")/.."
VERSION=$(sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' manifest.json)
OUT="dist/remix-kitchen-extension-$VERSION.zip"
mkdir -p dist
rm -f "$OUT"
zip -q "$OUT" manifest.json index.html app.js icon-192.png icon-512.png
echo "Built $OUT"
