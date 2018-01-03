import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import NotFound from '../pages/404.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: IndexPage },
    { path: '/contacts/', component: ContactsPage },
    { path: '/about/', component: AboutPage },
    { path: '*', component: NotFound }
  ]
});

export default router;
