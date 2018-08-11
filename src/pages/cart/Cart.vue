<template>
  <div>
    <cart-header :cartList="cartInfo"></cart-header>
    <navbar :links="navLinks"></navbar>
    <cart-main-area :cartList="cartInfo"></cart-main-area>
  </div>
</template>

<script>
import CartHeader from './components/Header'
import navbar from 'common/navbar/Navbar.vue'
import CartMainArea from './components/MainArea'
export default {
  name: 'Cart',
  data () {
    return {
      navLinks: [{
        id: '001',
        name: '主页',
        href: '/'
      }, {
        id: '002',
        name: '购物车',
        href: '/cart'
      }],
      cartInfo: []
    }
  },
  methods: {
    getCartInfo () {
      const axios = require('axios')
      axios.get('/api/users/carList').then((res) => {
        this.getCartInfoSucc(res)
      }).catch((e) => {
        console.log(e)
      })
    },
    getCartInfoSucc (res) {
      if (res.status === 200) {
        this.cartInfo = res.data.result
      }
    }
  },
  components: {
    CartHeader,
    navbar,
    CartMainArea
  },
  mounted () {
    this.getCartInfo()
  }
}
</script>

<style scoped>

</style>
