#!/bin/bash
set -e
# 确保删除旧的dist目录
if [ -d "dist" ]; then
    rm -rf dist
fi
# 创建dist目录
mkdir dist
# 复制文件到dist目录
cp -rf lib dist/lib
cp -rf model dist/model
cp -rf resources dist/resources
cp -rf defSet dist/defSet
cp -rf index.js dist/index.js
cp -rf package.json dist/package.json
cp -rf README.md dist/README.md
cp -rf README_HELP.md dist/README_HELP.md
