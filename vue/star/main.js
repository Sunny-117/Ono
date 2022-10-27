import Vue from 'vue'
import App from './App.vue'
import JSUI from './libs/JSUI';

Vue.config.productionTip = false
Vue.use(JSUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
