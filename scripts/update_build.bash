#!/usr/bin/env bash
set -ex

WEB_DIR=/var/www/resources

npm install

npm run build

rm -rf ${WEB_DIR}/*

cp -r dist/* ${WEB_DIR}