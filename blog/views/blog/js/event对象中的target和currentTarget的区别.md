---
config: {
    top: false,
    dir: false,
    tag: ['js'],
    valine: false,
}
title: event对象中的target和currentTarget的区别
---

> target返回的是点击的元素节点
>
> currentTarget返回的是绑定事件的元素节点

**举个例子用事件委托来解释**

```javascript
<ul id="ul">ul
        <li>li<a href="">a</a></li>
        <li>li<a href="">a</a></li>
        <li>li<a href="">a</a></li>
    </ul>
    <script>
        var ul = document.getElementById("ul");
        ul.onclick = function(event){
            var tar = event.target;
            var current = event.currentTarget;
            console.log(tar);
            console.log(current);
        }
    </script>
```

当我点击a标签时

```javascript
console.log(tar); // 输出的是 a标签元素节点信息
console.log(current); // 输出的是 ul元素节点信息
```

