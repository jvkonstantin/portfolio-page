#!/bin/bash

git pull origin gatsby-main
git add .
git commit -m "x"
git push origin gatsby-main
netlify deploy --prod
