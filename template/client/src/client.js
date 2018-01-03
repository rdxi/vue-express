import Vue from 'vue';
import router from './router/router.js';
import App from './components/App.vue';

new Vue({
  el: '#vue-app',
  router: router,
  render: createElement => createElement(App)
});