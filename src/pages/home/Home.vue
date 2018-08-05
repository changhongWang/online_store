<template>
  <div>
    <home-header></home-header>
    <navbar :links="navLinks"></navbar>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import navbar from '../common/navbar/Navbar.vue'
import HomeFooter from './components/Footer.vue'
export default {
  name: 'home',
  data () {
    return {
      navLinks: [{
        id: '001',
        name: 'Baidu',
        href: 'https://www.baidu.com'
      }, {
        id: '002',
        name: 'google',
        href: 'https://www.google.com'
      }, {
        id: '003',
        name: 'youtube',
        href: 'https://youtube.com'
      }]
    }
  },
  components: {
    HomeHeader,
    navbar,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
