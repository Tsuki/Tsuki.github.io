----
title: Mac下 推送public key 到遠端服務器
date: 2016-05-27 01:20:42
tags:
- Linux
- OS X
----
## 先生成public key 


```sh
ssh-keygen -t ecdsa
```

## 下載 ssh-copy-id


```sh
brew install ssh-copy-id
```

## 推送


```sh
ssh-copy-id -i ./.ssh/id_ecdsa.pub user@host
```