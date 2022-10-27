import { createApp } from 'vue'
import App from './App'
import MyUI from './libs/MyUI';

const app = createApp(App);

app.use(MyUI, {
  btnShadow: true
});
app.mount('#app');
