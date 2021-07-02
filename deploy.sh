#!/bin/bash

git pull origin main
git add .
git commit -m "x"
git push origin main
netlify deploy --prod
