import Magnifier from './components/Magnifier';
import Stars from './components/Stars';
import Modal from './components/Modal';

let JsppUI = {};

JsppUI.install = function (Vue) {
  Vue.component(Magnifier.name, Magnifier);
  Vue.component(Stars.name, Stars);
  Vue.component(Modal.name, Modal);
}

export default JsppUI;