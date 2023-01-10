---
config: {
    top: false,
    dir: false,
    tag: ['js'],
    valine: false,
}
title: return, break和continue的区别
---

# 相同之处

三者都会将此时进行的语句停止



# 不同之处

1. break：是立即结束语句，并跳出循环结构，执行后面的语句
2. continue：结束本次循环，循环变量继续或继续判断执行下一次的循环
3. return： 停止函数(只作用于函数 且除了循环语句以及循环语句外后面的语句将不再执行)
4. 做用环境不同：break和continue是作用在for或者switch语句中，而return是用在函数语句中例如forEach等



# 示例

**break**

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) break
  console.log(i)    //1  2
}
```



**continue**

> continue语句只能用在while语句，do/while语句，for语句，或者for/in语句的循环体内

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)   //1  2  4
}
```



**return**

> 只能出现在函数体内，出现代码中的其他任何地方都会造成语法错误

```
for (let i = 1; i < 5; i++) {
  if (i === 3) return
  console.log(i)   //Uncaught SyntaxError: Illegal return statement
}
```

