import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { Icon } from '@iconify/vue';

import './assets/styles/main.scss';

const app = createApp(App);

app.component('yiyi-icon', Icon);

app.use(createPinia());
app.use(router);

app.mount('#app');
