#!/bin/bash
# Usage: ./tasks/deploy "Commit Message"

# exit on error
set -e

# configurable values
SITE_NAME=MealTally
HOME=/Users/gmaheshwari/Documents/Gagan/site/$SITE_NAME
GITHUB_REPO="https://github.com/gaganmaheshwari/MealTally.git"

# code origin
ORIGIN_NAME="origin"
BRANCH_NAME="master"
GIT_USER_NAME="gaganmaheshwari"

if [ -z "$1" ]; then
  printf "\nUsage: Provide a commit message to push $SITE_NAME to LIVE (PRODUCTION)."
  exit -1
else
  commit_msg="$@"
fi

# Go to the appropriate website to be pushed
cd $HOME

git status
printf "\n\n"

git add -A
printf "\n\nAdded all new contents to local git"

git status

printf "\n\n"

git commit -m "$commit_msg"
printf "\n\nCommitting changes locally....."

# Push only the _site contents to the repo
git push -f $ORIGIN_NAME $BRANCH_NAME
printf "\n\nPushing changes to remote repo...."

# Remove remote after the push is done
# git remote rm $ORIGIN_NAME
# printf "\n\nRemote origin deleted...."

# Declare Success!!!
printf "\n\n*********** New Code changes successfully pushed to remote repo *********** \n\n"
exit 0