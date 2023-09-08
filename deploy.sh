#!/bin/bash

echo "⚙ Building..."
git add .
git remote remove origin
git remote add origin git@github.com:mexpenses/mexpenses.github.io.git
git commit -m '[Deploy: Landing Page] => 🚀 GitHub Pages Mexpenses'
echo "[Mexpenses] => 🚀 Uploading files for GitHub Pages... (mexpenses.github.io.git)"
git push origin main -f
yarn cache clean -f
git remote remove origin
git remote add origin git@github.com:HectorFront/nextjs-landingpage-mexpenses.git