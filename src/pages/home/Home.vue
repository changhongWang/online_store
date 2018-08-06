<template>
  <div>
    <home-header></home-header>
    <navbar :links="navLinks"></navbar>
    <home-main-area></home-main-area>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import navbar from '../common/navbar/Navbar.vue'
import HomeMainArea from './components/MainArea.vue'
export default {
  name: 'home',
  data () {
    return {
      navLinks: [{
        id: '001',
        name: '主页',
        href: '/'
      }, {
        id: '002',
        name: '商品',
        href: '/'
      }]
    }
  },
  components: {
    HomeHeader,
    navbar,
    HomeMainArea
  }
}
</script>

<style scoped>

</style>
