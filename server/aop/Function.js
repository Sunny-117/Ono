/**
 * 
 * fn -> 变化的逻辑
 * 
*/

Function.prototype.before = function (cb) {
  var __self__ = this;

  return function () {
    var res = cb.apply(__self__, arguments);
    return __self__.call(__self__, res);
  }
}

Function.prototype.after = function (cb) {
  var __self__ = this;

  return function () {
    var res = __self__.apply(__self__, arguments);
    cb.call(__self__, res);
    return res;
  }
}