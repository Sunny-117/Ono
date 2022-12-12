
> basic fe
API full 
举个例子：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
axios -> axios.post header: x-www-form-urlencoded application/json text/ withCredential cookie 跨域
官方文档

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

```

举个例子
```js
const obj1 = {a:1}
const obj2 = obj1;
const m = new Map()
m.set(obj1, 1)
/**
 * 多少次引用？ 3次
 */
栈内存：普通值，不可变 let a = 1; a=2;其实是变得a，不是变得1(值)
堆内存：容器 可变
obj1 xxx-------x---1次----{a:1}
obj2 xxx-------x---2次----{a:1}
m key xxx-------x---3次----{a:1}
obj1=null// 相当于断掉了，并不是删除了
obj2=null
m.delete
{a:1} 0次引用 垃圾回收 ；垃圾回收机制的行为是不可预测的
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management
```

# 垃圾回收机制
```js
var obj1 = {a:1}
var obj2 = obj1
// 垃圾回收计数 1 2
const m = new WeakMap()// key是Object，弱引用，如果强引用没有了，他就会消失
m.set(obj1, 1)
obj1=null // -1
obj2=null// -1
// 计数：=0，但是不是立即回收，所以接着打印还会有
console.log(m)
setTimeout(() => {
    console.log(m)
}, 10000);
// 思考：为什么WeakMap没有遍历，size， clear方法：不可预测

```