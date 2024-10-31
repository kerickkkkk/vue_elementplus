#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e


npm run build

#切換到 dist 目錄
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kerickkkkk/vue_elementplus.git main:gh_page

echo "結束"
