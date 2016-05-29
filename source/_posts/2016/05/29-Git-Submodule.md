----
title: Git Submodule
date: 2016-05-29 16:08:53
tags:
- Git
----
## 建立 Git Submodule


```sh
git submodule add <repository> [<path>]
```

## 刪除 Git Submodule


```sh
git rm --cached <repository>
git rm  <repository>
vi .gitmodules
vi .git/config
git submodule sync
```