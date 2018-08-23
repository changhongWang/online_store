import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Cart from '@/pages/cart/Cart'
import userAddress from '@/pages/address/Address'
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
      path: '/address',
      name: 'Address',
      component: userAddress
    }
  ]
})
