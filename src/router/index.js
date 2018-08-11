import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Cart from '@/pages/cart/Cart'
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
    }
  ]
})
