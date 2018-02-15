import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from '../pages/IndexPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import NotFound from '../pages/404.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: IndexPage },
    { path: '/vuelogin/', component: LoginPage },
    { path: '/login/',  beforeEnter: (to, from, next) => {
          window.location = "/login"
        }
    },
    { path: '/vueprofile/', component:ProfilePage},
    { path: '/contacts/', component: ContactsPage },
    { path: '/about/', component: AboutPage },
   { path: '*', component: NotFound }
  ]
});

export default router;
