
// var _default = 0;

// Object.defineProperty(window, 'a', {
//   get () {
//     return ++ _default;
//   }
// })

// // window.a

// if (a === 1 && a === 2 && a === 3) {
//   console.log(a);
//   console.log('You win!!!!!');
// }

// if (a > 0 && a > 1 && a > 2) {
//   console.log('You win win!!!!');
// }

// var _default = null;

// Object.defineProperty(window, 'a', {
//   get () {
//     return _default;
//   },
//   set (newValue) {
//     switch (newValue) {
//       case 'Object':
//       case 'Array':
//         _default = {
//           type: newValue,
//           length: newValue.length
//         }
//         break;
//       default:
//         throw new TypeError('This type is invalid');
//     }
//   }
// })

// a = 'Object';

// console.log(a);

// a = 'Array';

// console.log(a);

// a = '123';

// TypeError: This type is invalid

/**
 * {
 *   type: 'Object',
 *   length: 6 
 * }
 * 
 * {
 *   type: 'Array',
 *   length: 5
 * }
 */

//  Object.defineProperty(window, '_', {
//    get () {
//      this._c = this._c || 'a'.charCodeAt(0);
//      var _ch = String.fromCharCode(this._c);

//      if (this._c >= 'a'.charCodeAt(0) + 26) return;
//      this._c ++;

//      return _ch;
//    }
//  })

// console.log(_ + _ + _ + _ + _); //abcde .....z

/**
 * 
 * {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * }
 */

 var _obj = {
   a: 1,
   b: 2,
   c: 3
 }

 var obj = {};

 for (var k in _obj) {
   Object.defineProperty(obj, k, {
     enumerable: true,
     writable: k === 'b' ? false : true,
     configurable: true,
     value: ++ _obj[k]
   })
 }

 for (var k in obj) {
   obj[k] += 1;
 }

 delete obj.a;

 console.log(obj);

 /**
  * 
  * {
  *   b: 3,
  *   c: 5
  * }
  */
