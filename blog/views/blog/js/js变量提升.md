---
config: {
    top: false,
    dir: false,
    tag: ['js'],
    valine: false,
}
title: js变量提升
---

# js变量提升

js引擎在正式执行代码之前会进行一次预编译，变量和函数的声明会移动到函数或者全局代码的顶部，及开头位置

> 函数只有函数声明的形式才有变量提升，且其优先级高于变量提升，且变量提升不会覆盖（同名）函数提升，只有变量再次赋值了才会覆盖



先开上简单例子来看看变量提升是咋回事

```javascript
num = 6;
num++;
var num;
console.log(num) // 7 

// 上面没报错是因为var num这句话被提升到了顶部，可以理解为
var num;
num = 6;
num++;
console.log(num)
```



再来看个变量提升和函数声明提升且同名的例子

```javascript
console.log(bar);  // f bar() { console.log(123) }
console.log(bar()); // undefined
var bar = 456;
function bar() {
    console.log(123); // 123
}
console.log(bar); // 456
bar = 789;
console.log(bar); // 789
console.log(bar()) // bar is not a function

相当于
// js执行步骤
 
// 函数提升，函数提升优先级高于变量提升
var bar = function() {
    console.log(123)
};
// 变量提升，变量提升不会覆盖（同名）函数提升，只有变量再次赋值时，才会被覆盖
var bar;
console.log(bar);
console.log(bar());
// 变量赋值，覆盖同名函数字面量
bar = 456;
console.log(bar);
// 再次赋值
bar = 789
console.log(bar);
console.log(bar()); // 报错 bar不是函数
```

**总结**

函数提升优先级高于变量提升，且不会被同名变量声明时覆盖，但是会被变量赋值覆盖



# 函数形参的优先级

> 函数内部的优先级(包括形参，函数内部变量)，函数内先看有没有变量，如果没有变量还会去找参数有没有（PS：函数形参是引用类型的话 函数内部对形参的修改那么外部的变量也是会跟着修改的）

**优先级**

- 先找函数内部有没有变量，如果变量为undefined则形参是否有
  - 参数有：则使用形参
  - 参数没有：则找window是否有全局的变量

- 在函数中，如果有形参并且赋值的话，相当于默认值，如果实参没传则用形参赋值的值，如果实参传了值，则使用实参传的值

  - ps：当形参有赋值的话且内部有同名变量声明或者函数声明的话会被形参掉覆盖，直到函数内重新对变量赋值了它才会发生变化

  

**例子**

```javascript
var b = {name: 'b'}
function test (obj) {
  obj.name = 'a'
}
test(b)
console.log(b) // {name: 'a'} 外部引用也跟着修改，因为修改的是同一个地址的引用
```

```javascript
(function fun4(a){
  console.log(a); // 100, 因为内部变量声明 变量提升之后a是undefined，则取形参传进来的100
  var a = 10;
}(100));
```

```javascript
(function fun4(a){
  console.log(a); // function a, 函数声明的变量提升优于变量提升
  var a = 10;
  function a () {}
}(100));
```

```javascript
(function fun4(a = 100){
  console.log(a); // 50， 函数内部同名变量和函数声明被形参上的私有变量覆盖，实参传了值则使用实参传的值即50，没传才会使用形参的默认值即100
  var a = 10;
  console.log(a); // 10, a = 10,a被重新赋值了
  function a () {} // 这一句一开始变量提升被形参覆盖了
}(50));
```



