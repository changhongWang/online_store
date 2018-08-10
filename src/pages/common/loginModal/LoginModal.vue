<template>
  <div class="login-modal-wrapper" v-if="this.$store.state.login_modal_show">
    <div class="login-modal">
      <div>
        <h2 class="login-title">登录</h2>
        <i class="iconfont close-btn" @click="handleCloseModal">&#xe60f;</i>
      </div>
      <ul class="login-form">
        <li class="login-form-item">
          <!--防止浏览器自动填充-->
          <input type="password" style="display: none">
          <i class="iconfont login-form-icon">&#xe633;</i>
          <input type="text" placeholder="用户名" v-model="userName" autocomplete="new-password">
        </li>
        <li class="login-form-item">
          <i class="iconfont login-form-icon">&#xe60e;</i>
          <input type="password" placeholder="密码" v-model="password" autocomplete="new-password">
        </li>
        <li class="login-btn-wrapper">
          <button class="login-btn" @click="handleLoginClick">登录</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    handleCloseModal () {
      this.$store.commit('hideLoginModal')
    },
    handleLoginClick () {
      if (this.userName !== '' && this.password !== '') {
        // 非空
        const userName = this.userName.trim()
        const password = this.password.trim()
        this.$store.dispatch('handleLogin', {
          username: userName,
          pwd: password
        })
      } else if (this.userName === '') {
        alert('用户名为空')
      } else if (this.password === '') {
        alert('密码为空')
      }
    }
  },
  beforeMount () { // 清空数据
    this.userName = ''
    this.password = ''
  }
}
</script>

<style lang="less" scoped>
  @import "~styles/variables.less";
  @import "~styles/mixins.less";
  .login-modal-wrapper{
    position: fixed;
    background: rgba(0, 0, 0, .5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .login-modal{
      .clear-fix;
      position: absolute;
      margin: 0 auto;
      padding: 10px 30px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      font-size: 18px;
      background: #fff;
      .close-btn{
        float: right;
        line-height: 33px;
        height: 33px;
        width: 30px;
        cursor: pointer;
        text-align: center;
      }
      .login-title{
        vertical-align: middle;
        display: inline-block;
        line-height: 40px;
        font: 24px normal;
        margin: 0;
        color: @miColor;
      }
      .login-form{
        list-style: none;
        margin: 40px 0;
        padding: 0;
        .login-form-item{
          border: 1px solid #777;
          padding: 0 10px;
          font-size: 0;
          margin-bottom: 10px;
          .login-form-icon{
            color: @miColor;
            font-size: 20px;
          }
          input{
            border: none;
            box-sizing: border-box;
            width: 350px;
            margin-left: 8px;
            outline: none;
            font-size:14px;
            line-height: 40px;
          }
        }
      }
      .login-btn{
        margin: 20px 0 0;
        width: 400px;
        border: none;
        outline: none;
        height: 50px;
        background: #1e90ff;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
