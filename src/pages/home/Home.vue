<template>
  <div>
    <home-header></home-header>
    <navbar :links="navLinks"></navbar>
    <home-main-area></home-main-area>
    <home-footer></home-footer>
    <loading></loading>
    <alert></alert>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import navbar from 'common/navbar/Navbar.vue'
import loading from 'common/loading/Loading'
import alert from 'common/alert/Alert'
import HomeMainArea from './components/MainArea.vue'
import HomeFooter from './components/Footer.vue'

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
    HomeMainArea,
    HomeFooter,
    loading,
    alert
  }
}
</script>

<style scoped>

</style>
