import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/relay',
      name: 'relay',
      component: () => import(/* webpackChunkName: "about" */ './views/Relay.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import(/* webpackChunkName: "about" */ './views/Shop.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Badges',
      name: 'Badges',
      component: () => import(/* webpackChunkName: "about" */ './views/Badges.vue'),
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/product/:product_slug',
      name: 'Product',
      component: () => import(/* webpackChunkName: "about" */ './views/Product.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/productor/:productor_slug',
      name: 'Productor',
      component: () => import(/* webpackChunkName: "about" */ './views/Productor.vue'),
      meta: {
        requiresAuth: true
      }
    },

  ]
});

router.beforeEach((to, from, next) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('dashboard');
  else next();
});

export default router;
