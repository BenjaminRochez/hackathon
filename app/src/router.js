import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue')
    },
    {
      path: '/login-selector',
      name: 'selector',
      component: () => import(/* webpackChunkName: "about" */ './views/LoginSelector.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import(/* webpackChunkName: "about" */ './views/Shop.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
    },
    {
      path: '/Badges',
      name: 'Badges',
      component: () => import(/* webpackChunkName: "about" */ './views/Badges.vue')
    },

    {
      path: '/product/:product_slug',
      name: 'Product',
      component: () => import(/* webpackChunkName: "about" */ './views/Product.vue')
    },
  ]
})
