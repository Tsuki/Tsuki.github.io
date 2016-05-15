----
title: OS X 關閉視窗截圖陰影
date: 2016-05-16 01:02:53
tags:
- Mac
- OS X
----
截圖時才發現被坑了啊。。。。
為什麼會這樣的（被打

## 關閉陰影

```html
defaults write com.apple.screencapture disable-shadow -bool true;killall SystemUIServer
```

## 還原陰影

```html
defaults write com.apple.screencapture disable-shadow -bool false;killall SystemUIServer
```