import Select from './Select';
import Link from './Link';

export const MySelect = {};
export const MyLink = {};

MySelect.install = Vue => Vue.component(Select.name, Select);
MyLink.install = Vue => Vue.component(Link.name, Link);

const COMPONENTS = [
  Select,
  Link
];

const MyUI = {};

MyUI.install = function (Vue) {
  // Vue.component(Select.name, Select);
  // Vue.component(Link.name, Link);

  COMPONENTS.forEach((component) => {
    Vue.component(component.name, component);
  })
}

export default MyUI;