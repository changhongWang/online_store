<template>
  <div>
    <address-header></address-header>
    <navbar :links="links"></navbar>
    <main-area></main-area>
    <c-footer></c-footer>
  </div>
</template>

<script>
import AddressHeader from './components/Header'
import navbar from 'common/navbar/Navbar'
import MainArea from './components/MainArea'
import CFooter from 'common/footer/Footer'
export default {
  name: 'userAddress',
  data () {
    return {
      links: [{id: '001', name: '首页', href: '/'}, {id: '002', name: '收货地址确认', href: '/address'}]
    }
  },
  components: {
    AddressHeader,
    navbar,
    MainArea,
    CFooter
  }
}
</script>

<style lang="less" scoped>
</style>
