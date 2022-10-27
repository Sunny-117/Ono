import Magnifier from './components/Magnifier';

let JsppUI = {};

JsppUI.install = function (Vue) {
  Vue.component(Magnifier.name, Magnifier);
}

export default JsppUI;