----
title: 用Quiver 寫Hexo
date: 2016-05-12 01:14:39
tags:
- Hexo
----
Quiver 這是一個朋友推薦我用的Markdown Editor

用後發現真的不錯 之後打算看看能不能用來寫Blog

一開始是打算用Ruby 的 Jekyll

但發現 配置起來實在太麻煩了

而且主題也很久沒更新

之後就想起姐太之前推介的Hexo

現在找到一個叫 [Quihex](http://www.pincer.io/node/libraries/quihex) 的插件可以同步



```sh
# Install
$ npm install -g quihex

# Setup
$ quihex init

# Sync(Quiver notes => Hexo posts)
$ quihex sync

# Hexo deploy
$ cd ~/hexo-root
$ hexo deploy
```