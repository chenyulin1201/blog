---
config: {
    top: false,
    dir: false,
    tag: ['js'],
    valine: false,
}
title: for in 和for of的区别
---

# for...in的特点

- for...in 遍历对象返回的是对象的key值，遍历数组返回的是元素的下标
- for...in 还会遍历原型上的值和手动添加的其他键
- for...in 遍历出来的顺序可能跟实际数组的内部顺序不一致
- for...in 遍历数组的话 因为遍历的是下标，但是要注意的是遍历的key虽为下标，但是是字符串类型

```javascript
// 如果想只遍历出自身身上的属性的话可以用hasOwnProperty方法
for (var key in Object.hasOwnProperty(obj)){
  console.log(key)
}
```



# for...of的特点

- for...of 遍历对象会报错
- for...of 遍历的是键值对中的值，也就是说遍历数组的话遍历的是它的值

> for of不同于forEach，它可以和breakcontinue和return配合使用，forEach只能使用return结束一整个结束

```
// 如果for...of想遍历对象的话可以使用Object.keys(obj)
for (var attrName of Object.keys(obj)){
  console.log(attrName); // 打印的是对象属性名
}
```



# 总结

for in常用于遍历对象，遍历数组不建议，因为不能保证按照数组的内部实际顺序进行遍历的

for of常用于遍历数组，遍历普通对象直接报错了