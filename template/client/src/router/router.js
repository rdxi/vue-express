import Vue from 'vue';
import VueRouter from 'vue-router';
import store  from '../modules/store/';
import IndexPage from '../pages/IndexPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import getUser from '../pages/getUser.vue';
import isLoggedIn from '../pages/loggedIn.vue';
import Authentication from '../pages/Authentication.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import NotFound from '../pages/404.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: IndexPage },
    { path: '/vuelogin', component: LoginPage },
     {
       path: '/vueprofile',
       component:ProfilePage,
       meta: { requiresAuth: true }
      },
        { path: '/login/',  beforeEnter: (to, from, next) => {
          window.location = "/login"
        }
    },

    { path: '/isLoggedIn', component:isLoggedIn},
    { path: '/getUser', component: getUser },
    { path: '/contacts', component:ContactsPage},
    { path: '/about/', component: AboutPage },
   { path: '*', component: NotFound }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
// this route requires auth, check if logged in
// if not, redirect to login page.
store.dispatch('isLoggedIn');//.then(function(res));
    if(store.state.isLoggedIn!==1){
            next({
   path: '/vuelogin/',
   query: { redirect: to.fullPath }
 });
    }
    else{
     next();
    }

  }
    else {
next();                      // make sure to always call next()!
}
});
export default router;
