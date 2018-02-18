import Vue from 'vue';
import router from './router/router.js';
import App from './components/App.vue';
import store  from './modules/store/';

new Vue({
  el: '#vue-app',
  store:store,
  router: router,
  render: createElement => createElement(App)
});
