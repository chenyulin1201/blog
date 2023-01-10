---
config: {
    top: false,
    dir: false,
    tag: ['js'],
    valine: false,
}
title: object.created和new object和{}的区别
---

- {}字面量创建对象：通过字面量创建的对象是object的实例，其原型执行object.prototype， 继承内置对象object。
- new关键字创建对象：通过new创建的对象也是object的实例，其原型执行object.prototype，并继承内置对象object。
- object.create(arg, pro):  这种方式创建的对象的原型取决于arg，如果arg是null，新对象则是空对象，没有原型也不继承任何对象，arg为指定对象的话，新对象的原型指向对象，继承指定对象；