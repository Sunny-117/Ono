import Vue from 'vue';
import App from './App';
import { MessageBox } from './components/MyUI';

Vue.use(MessageBox);

new Vue({
  render: h => h(App)
}).$mount('#app');