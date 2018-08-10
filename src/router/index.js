import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Cart from '@/pages/cart/Cart'
import learnVuex from '@/pages/learn_vuex/learn_vuex'
import other from '@/pages/other/other'
import 'styles/lib/normalize.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/vuex',
      name: 'learn_vuex',
      component: learnVuex
    },
    {
      path: '/other',
      name: 'other',
      component: other
    }
  ]
})
