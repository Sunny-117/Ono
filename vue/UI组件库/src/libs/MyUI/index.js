import MyButton from './components/MyButton';
import MyAlert from './components/MyAlert';

import navChange from './directives/navChange';

const componentMap = [
  MyButton,
  MyAlert
];

const directiveMap = {
  'nav-change': navChange
}

export default {
  install: (app, options) => {
    const { btnShadow } = options ? options : {};

    app.config.globalProperties.$MyUI = {
      btnShadow: !!btnShadow
    }

    componentMap.forEach(component => {
      app.component(component.name, component);
    });

    for (let k in directiveMap) {
      app.directive(k, directiveMap[k]);
    }

    

    // app.component(/* 组件名称 */, /**组件 */);

    // app.mixin  app.directive

    // app.config.globalProperties.$a

    // this.$MyUI.btnShadow
  }
}