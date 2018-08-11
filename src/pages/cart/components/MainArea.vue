<template>
  <div class="main-container">
    <div class="shopping-cart-wrapper">
      <h2 class="cart-title">购物车</h2>
      <div class="cart">
        <ul class="cart-list">
          <li>
            <div class="list-title list-title-first">商品</div>
            <div class="list-title">价格</div>
            <div class="list-title">数量</div>
            <div class="list-title">总价</div>
            <div class="list-title">编辑</div>
          </li>
          <li>
            <div class="list-item list-item-desc">
              <input type="checkbox">
              <img src="http://hotemotion.fun:3389/static/17.jpg" alt="小米运动蓝牙耳机" class="item-img">
              <span class="item-title">小米运动蓝牙耳机</span>
            </div>
            <div class="list-item">￥29.00</div>
            <div class="list-item">6</div>
            <div class="list-item">774.00</div>
            <div class="list-item"><i class="iconfont">&#xe61e;</i></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartMainArea'
}
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';
  div.main-container{
    background: #f5f7fc;
    padding-top: 20px;
  }
  .shopping-cart-wrapper{
    margin: 0 50px;
    .cart-title{
      font: 24px normal;
      margin: 0;
      padding: 20px 0;
      color: #333;
    }
    .cart{
      height: 1000px;
      .cart-list{
        .clear-fix;
        list-style: none;
        margin: 0;
        padding: 0;
        min-width: 1000px;
        border: 1px solid #999;
        .list-title{
          background: #605f61;
          color: #fff;
        }
        .list-title, .list-item{
          float: left;
          text-align: center;
          line-height: 40px;
          width: 15%;
        }
        .list-title-first{
          width: 40%;
        }
        .list-item{
          line-height: 100px;
        }
        .list-item-desc{
          width: 40%;
          text-align: left;
          input{
            margin-left: 20px;
            vertical-align: middle;
          }
          .item-img{
            width: 60px;
            margin: 0 20px;
            vertical-align: middle;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }
          .item-title{
            margin-left: 20px;
            width: 224px;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
