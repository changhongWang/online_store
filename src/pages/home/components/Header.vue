<template>
  <header class="header">
    <div class="mi-logo-wrapper"><img src="~imgs/mi-logo.jpg" alt=""></div>
    <div class="header-main">
      <div v-if="this.login_status" class="user-info-wrapper">
        <span>{{this.username}}</span>
        <a class="log-out-btn" @click="handleLogOutClick">登出</a>
        <router-link tag="div" to="/cart" class="cart-wrapper">
          <i class="iconfont cart">&#xe606;</i>
            <i class="cart-number" v-show="cartNumber">{{cartNumber}}</i>
        </router-link>
      </div>
      <a v-else class="log-in-btn" @click="handleLoginClick">登录</a>
    </div>
    <login-modal :showLogin="showLogin " ref="login_modal"></login-modal>
  </header>
</template>

<script>
import LoginModal from 'common/loginModal/LoginModal'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      cartNumber: '99+',
      showLogin: false
    }
  },
  methods: {
    ...mapActions(['checkLogin']),
    handleLoginClick () {
      // header组件登录按钮点击
      this.$store.commit('showLoginModal')
    },
    handleLogOutClick () {
      // header组件登出按钮点击
      this.$store.dispatch('handleLogOut')
    }
  },
  components: {
    LoginModal
  },
  computed: {
    ...mapState(['login_status', 'username'])
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<style lang="less" scoped>
  @import "~styles/variables.less";
  @import "~styles/mixins.less";
  .header{
    .clear-fix;
    font-size: 0;
    margin: 20px 50px 0;
    .mi-logo-wrapper{
      display: inline-block;
      background: #ff0000;
    }
    .header-main{
      float: right;
      line-height: 85px;
      .user-info-wrapper{
        font-size: 0;
        span, .log-out-btn{
          font-size: 16px;
          vertical-align: middle;
          padding: 0 5px;
        }
        .cart-wrapper{
          display: inline-block;
          position: relative;
          width: 45px;
          .cart{
            vertical-align: middle;
            font-size: 24px;
          }
          .cart-number{
            position: absolute;
            top: 10px;
            right: 0;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            font-size: 12px;
            font-style: normal;
            background: #d1434a;
            border-radius: 50%;
          }
        }
      }
      .log-in-btn, .log-out-btn, .cart{
        color: @grayFontColor;
        cursor: pointer;
        &:hover{
          color: #d1434a;
        }
      }
      .log-in-btn {
        font-size: 16px
      }
    }
  }
</style>
