title: Git 修改用戶名和Email
tags:
  - Git
categories: []
date: 2016-05-27 01:33:00
---
## Github版本

```sh
#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

## 個人版本 
Ps. 會全部改掉

```sh
git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Username'
    GIT_AUTHOR_EMAIL='Email'
    GIT_COMMITTER_NAME='Username'
    GIT_COMMITTER_EMAIL='Email'
  " HEAD
```