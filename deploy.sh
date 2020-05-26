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

git subtree push --prefix=src/Filter git@github.com:AudreyRBC/abc-filter.git master
git subtree push --prefix=src/Select git@github.com:AudreyRBC/abc-select.git master
git subtree push --prefix=src/Range git@github.com:AudreyRBC/abc-range.git master
git subtree push --prefix=src/Autocomplete git@github.com:AudreyRBC/abc-autocomplete.git master