<template>
  <header class="header">
    <div class="mi-logo-wrapper"><img src="~imgs/mi-logo.jpg" alt=""></div>
    <div class="header-main">
      <div v-if="ifLogin" class="user-info-wrapper">
        <span>{{userName}}</span>
        <a class="log-out-btn">登出</a>
        <div class="cart-wrapper">
          <i class="iconfont cart">&#xe606;</i>
          <i class="cart-number" v-show="cartNumber">{{cartNumber}}</i>
        </div>
      </div>
      <a v-else class="log-in-btn">登录</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      ifLogin: true,
      userName: 'WangChanghong',
      cartNumber: '99+'
    }
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
    }
  }
</style>
