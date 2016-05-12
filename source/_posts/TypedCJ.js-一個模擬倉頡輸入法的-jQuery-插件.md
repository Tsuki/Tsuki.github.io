----
title: TypedCJ.js 一個模擬倉頡輸入法的 jQuery 插件
date: 2016-05-12 23:36:38
tags:
- NodeJs
----
## TypedCJ.js 是對Typed.js 作出條改 加入倉頡輸入法的效果。

---
[View the live demo](http://blog.sukitsuki.com/TypedCJ.js/)


Installation
------------
This is really all you need to get going.

```html
<script src="jquery.js"></script>
<script src="typedCJ.js"></script>
<script>
	$(function(){
		$(".element").typed({
			strings: ["First sentence.", "Second sentence."],
			typeSpeed: 0
		});
	});
</script>
<span class="element"></span>
```