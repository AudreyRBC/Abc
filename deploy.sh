#!/bin/bash
source ./function.sh
# abort on errors
set -e

# Define the commit command
while getopts c: option
do
case "${option}"
in
c) COMMIT=${OPTARG};;
esac
done

# build 
npm run build

if [ -n "$(git status --porcelain)" ]; then
   update
   echo 'update';
elif [ -n "$(git log origin/master..master)" ]; then
   change
fi

cd src/AutoComplete
sh deploy.sh -c "$COMMIT"
cd ../Filter
sh deploy.sh -c "$COMMIT"
cd ../Select
sh deploy.sh -c "$COMMIT"
cd ../Range
sh deploy.sh -c "$COMMIT"

cd ../../build/abc
npm publish
cd ../abc_autocomplete
npm publish
cd ../abc_filter
npm publish
cd ../abc_select
npm publish
cd ../abc_range
npm publish