import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/resets.css';
import '@/assets/css/border.css';
import '@/assets/js/common.js';

import MyPlugin from '@/components/common'

createApp(App).use(router).use(store).use(MyPlugin).mount('#app')
