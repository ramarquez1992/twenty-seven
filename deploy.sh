#!/bin/sh
cd ~/twenty-seven
git pull
npm install
gulp
pm2 start ./src/server.js
exit

