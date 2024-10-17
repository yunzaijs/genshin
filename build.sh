#!/bin/bash
set -e
mkdir dist
cp -rf lib dist/lib
cp -rf model dist/model
cp -rf resources dist/resources
cp -rf defSet dist/defSet
cp -rf index.js dist/index.js
cp -rf package.json dist/package.json
cp -rf README.md dist/README.md
cp -rf README_HELP.md dist/README_HELP.md