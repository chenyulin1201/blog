---
config: {
    top: false,
    dir: false,
    tag: ['js'],
    valine: false,
}
title: parseInt详解
---

# parseInt

> 语法：parseInt(string, radix)
>
> string:  要被解析的值，如果参数不是一个字符串，则会转换为字符串，字符串开头的空白符将会被忽略
>
> radix:
>
> - radix值为2-36之间，如果第二个参数小于2或者大于36就返回NaN, 0除外，0会视为转换为10进制
> - 参数不传时，该参数默认为10

paraseInt是一个将字符串转换成整数的一个方法，它会忽略字符串前面的空格，直到找到第一个非空格字符，如果第一个是数字字符则会继续解析下面的字符直到找到非数字字符则停止。



**parseInt是如何计算的？**

我们通过一下例子来了解下parseInt的计算过程

```javascript
parseInt("123", 5); // 38

计算过程方式： 
1（字符）*5(基数)的2(从右往左数的下标)次方 + 2（字符）*5(基数)的1(从右往左数的下标)次方 + 3（字符）*5(基数)的0(从右往左数的下标)次方
=>25+10+3 = 38
字符1 * 基数的（从右往左数的下变）次方 + 字符2* 基数的（从右往左数的下变）次 + 字符3...以此类推 有几个字符做几次相加的操作
```



> 需要注意的是在计算过程中，右边的参数不可以小于左边需要计算的单个字符串，不然就返回NaN

```javascript
parseInt("3",2) // NaN
parseInt("4",3) // NaN
```



> 如果第二个参数不是number类型，则会先转换成number类型在进行计算

```javascript
parseInt("11","2")  //3  字符串被转换成数字
parseInt("2233",false)  //2233  布尔型被转换成数字
```



**例子**

经典面试题中遇到这么一题，[1,2,3].map(parseInt)

```javascript
[1,2,3].map(parseInt)
// 这道题我们解析可以按照以下几个思路
// 1.map的函数接收两个形参，分别是item，index，
// 2.将item和index带入进parseInt就是=> parseInt(item, index)

// 所以他的执行步骤可以理解为这几步
// 1.parseInt(1, 0) => 1
// 2.parseInt(2, 1) => NaN 原因是右侧的值小于左侧的值返回NaN
// 3.parseInt(3, 2) => NaN 原因也是右侧小于左侧值返回NaN
```



# parseFlot

> 可解析字符串返回一个浮点数
>
> - 开头和结尾的空格会自动忽略
> - 字符串开头如果不是一个有效的数字就会直接返回NaN

```javascript
parseFloat([]) // NaN
parseFlot('1 2 3') // 1 => 1后面的空格不是有效数字则停止解析，并返回前面的有效数字
```



