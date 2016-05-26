----
title: QuiHex 更新了圖片同步啦
date: 2016-05-17 02:50:06
tags:
- Hexo
- NodeJs
----
在抄(參)考了Quiver官方的導出腳本後 再配合 Hexo的文檔
只需要把Note下的Resource文檔抄到Hexo文章當前的同名文件夾下
別外把MD的圖片格式修改成Hexo的格式

由於Quiver的Note不是以文件名作為記錄 而是以UUID作記錄
所以NoteObject加上了UUID屬性
之後有還時間 就可以補上 標題追縱

```javascript
cell.data.replace(/quiver-image-url\//gi, '').replace(/!\[(.*?)]\((.+?)(\))/gi, '{% asset_img $2 [$1] %}')
```

別外text cell也支持導出不過應該還有點問題
雖然 用raw包起來就可以 但可能把本來的md格式東西掉失(圖片連結)
``` html
{% raw %}
<html>
....
</html>
{% endraw %}
```
總結一下 
- [x] 圖片在Markdown Cell下導出
- [ ] 修正圖片是非本地(http)開始的
- [ ] text cell 下的圖片同步
- [ ] 標題tracking

總而言之 盡可能使用MarkdownCell 吧