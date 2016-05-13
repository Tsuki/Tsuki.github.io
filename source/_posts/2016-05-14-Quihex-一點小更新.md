----
title: Quihex 一點小更新
date: 2016-05-14 01:39:59
tags:
- Hexo
- NodeJs
----
在便用quihex 更新和推送的時候 發現了一些小問題
於是手痒去改一下和開PR
首前是只支持Markdown cell的同步
由於個人 比較懶 和希望之後打理cell比較方便
所以所有code都會放進code cell 裹.
但使用quihex同步後發現 code cell 的內容沒有導
因此大吃一精(惊)
之後抄(參)考抄(參)考了一下 [quiver2jekyll](https://github.com/bradley-curran/quiver2jekyll) 這個導出腳本 發現 原來也不是太難嘛 就開始了改造大計

```javascript
if (cell.type === 'markdown') {
  logt.info(cell.type);
  return cell.data;
} else if (cell.type === 'code') {
  logt.info(cell.language);
  return `\`\`\`${cell.language}\n${cell.data}\n\`\`\``;
}
```

第二個問題就是 看到一個老開發了一個issue
就是想生成的文件名 是帶日期的
這一點其實滿重要的 因為文章多起來時 日後要整理就太麻煩了

這處理這個問題是 碰到的問題是
怎樣解決日期的格式呢
總不能Hardcode進去吧
於是又抄(參)考抄(參)考一下Hexo new 指令的源代碼
但是發現有夠覆雜
大約了解了一下思路 就開始動筆(逼)了

先從\_config.yml中找出new\_post\_name的格式

```yaml
#default
new_post_name: :title.md
#with date foramt
new_post_name: :year-:month-:day-:title.md
#date format sub folder
new_post_name: :year/:month/:day/:title.md
```

之後重寫一個parseFileName方法.
先把預留的key word 都塞進會用到的參數.
最後把參數中的key 一個一個用正規取代.

```javascript
function parseFileName(rule, hexoPostObj) {
  var date = moment(hexoPostObj.cdate);
  var filenameData = {
    year: date.format('YYYY'),
    month: date.format('MM'),
    i_month: date.format('M'),
    day: date.format('DD'),
    i_day: date.format('D'),
    title: hexoPostObj.filename
  };
  for (var key in filenameData) {
    rule = rule.replace(new RegExp(":" + key), filenameData[key])
  }
  return rule;
}
```