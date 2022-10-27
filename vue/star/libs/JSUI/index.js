import Stars from './components/Stars';

const JSUI = {};

const componentPool = [
  Stars
];

JSUI.install = function (Vue) {
  componentPool.forEach(component => {
    Vue.component(component.name, component);
  });
}

export default JSUI;