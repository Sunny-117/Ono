import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { generateRouter } from '@/libs/utils';

import '@/assets/css/common.css';

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {
    await store.dispatch('setUserRouters');
    const newRoutes = generateRouter(store.state.userRouters);
    router.addRoutes(newRoutes);
    next({path: to.path})
  } else {
    next();
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
