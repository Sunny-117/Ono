// 立即执行函数  
// IIFE   Immediately Invoked Function Expression
//         立即地       调用     （函数      表达式）

// 函数声明 !== 函数表达式
// function test1 () {
//   console.log('Function Declaration');
// }

// // 把一个（匿名）函数（函数声明式）赋值给一个变量的形式  函数表达式
// var test2 = function () {
//   console.log('Function Expression');
// }

// // () 对于函数名后面的括号，叫做执行符号
// test1();
// test2();

// 语法错误，执行符号只能跟在函数表达式后面
// function test () {
//   console.log('Function Declaration');
// }();

// 立即地       调用     （函数      表达式）
// 当一个函数需要立即执行的情况，该函数比较形成表达式形式

// 1
//(1)

//+1
//!1

// ~1

// W3C推荐的立即执行函数的编写规范
// (function () {
//   console.log('Function Expression');
// }());

// 实践中
// ;(function () {
//   console.log('Function Expression');
// })()

// ;(function () {
//   console.log('Function Expression');
// })()

(function test (a, b, c, d) {
  // 1. 可以创建一个与外界没有任何关联的作用域，独立作用域
  // 2. 执行完成以后，自动销毁
  // 3. ES3 ES5 立场上是没有模块概念，立即执行函数来模拟模块化
        // 封闭作用域、抛出接口
  // 向外部抛出一系列属性和方法
  // window上保存属性和方法
  console.log(test);
  console.log(test.length);
  console.log(arguments.length);
  console.log('Hello');
})(1,2,3);