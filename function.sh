set_commit(){
   git add .
   git commit -m "$COMMIT"
   git push origin master
}

set_tag() { 
   #get highest tag number
   VERSION=`git describe --abbrev=0 --tags`

   #replace . with space so can split into an array
   VERSION_BITS=(${VERSION//./ })

   #get number parts and increase last one by 1
   VNUM1=${VERSION_BITS[0]}
   VNUM2=${VERSION_BITS[1]}
   VNUM3=${VERSION_BITS[2]}
   VNUM3=$((VNUM3+1))

   #create new tag
   NEW_TAG="$VNUM1.$VNUM2.$VNUM3"

   echo "Updating $VERSION to $NEW_TAG"

   if `git describe --contains HEAD 2> /dev/null`; then
      echo "Already a tag on this commit"
   else
      git tag $NEW_TAG
      echo "Tagged with $NEW_TAG"
      git push --tags
   fi
}

update(){
   set_commit
   set_tag
}
change(){
   git push origin master
   set_tag
}

test(){
    echo "$COMMIT"
}