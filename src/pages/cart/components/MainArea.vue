<template>
  <div class="main-container">
    <div class="shopping-cart-wrapper">
      <h2 class="cart-title">购物车</h2>
      <div class="cart">
        <table class="cart-list" cellpadding="0" cellspacing="0">
          <thead>
          <tr>
            <th>商品</th>
            <th>价格</th>
            <th>数量</th>
            <th>总价</th>
            <th>编辑</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <label for=""></label>
              <input type="checkbox" style="display: none">
              <img src="http://hotemotion.fun:3389/static/19.jpg" alt="小米6X极简保护壳">
              <span>小米6X极简保护壳</span>
            </td>
            <td>￥29.00</td>
            <td>13</td>
            <td>377.00</td>
            <td><i class="iconfont">&#xe61e;</i></td>
          </tr>
          </tbody>
        </table>
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
        width: 100%;
        text-align: center;
        th{
          background: #605f61;
          color: #fff;
          line-height: 40px;
          font-weight: normal;
        }
        td{
          line-height: 100px;
        }
      }
    }
  }
</style>
