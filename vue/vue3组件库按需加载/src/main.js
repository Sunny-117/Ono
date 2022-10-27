import { createApp } from 'vue'
import App from './App.vue'

// import MyUI from '../modules/my-ui';

import { MySelect, MyLink } from '../modules/my-ui';

const app = createApp(App);

app.use(MySelect);
app.use(MyLink);

app.mount('#app')
