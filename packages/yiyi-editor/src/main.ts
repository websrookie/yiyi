import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { Icon } from '@iconify/vue';
import App from './App.vue';
import router from './router';
import Draggable from 'vuedraggable';
import Yiyi from '@yiyi/ui';

import '@yiyi/ui/style';
import './assets/styles/main.scss';

const app = createApp(App);

app.component('yiyi-icon', Icon);
app.component('draggable', Draggable);

app.use(createPinia());
app.use(Yiyi);
app.use(router);

app.mount('#app');
