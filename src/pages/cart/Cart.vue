<template>
  <div>
    <cart-header></cart-header>
    <navbar :links="navLinks"></navbar>
    <cart-main-area></cart-main-area>
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
      }]
    }
  },
  components: {
    CartHeader,
    navbar,
    CartMainArea
  }
}
</script>

<style scoped>

</style>
