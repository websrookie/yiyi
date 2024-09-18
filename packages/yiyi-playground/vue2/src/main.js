import Vue from 'vue';
import App from './App.vue';
import '@yiyi/ui/vue2/style';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
