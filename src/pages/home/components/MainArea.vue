<template>
  <section class="main-area">
    <div class="filter-wrapper">
      <span>排序：</span>
      <ul class="filter">
        <li><a href="#" class="active">默认</a></li>
        <li><a href="#">价格</a></li>
      </ul>
    </div>
    <div class="goods-list-wrapper">
      <div class="price-filter">
        <h5 class="filter-title">价格：</h5>
        <ul>
          <li><a href="#" class="active">全部</a></li>
          <li><a href="#">0.00 - 100.00</a></li>
          <li><a href="#">100.00 - 500.00</a></li>
          <li><a href="#">500.00 - 1000.00</a></li>
          <li><a href="#">1000.00 - 8000.00</a></li>
        </ul>
      </div>
      <div class="goods-list">
        <div class="goods" v-for="goods in goodsList" :key="goods.id">
          <img :src="goods.imgUrl" :alt="goods.name" class="goods-img">
          <h5 class="goods-title">{{goods.name}}</h5>
          <div class="goods-price">￥{{goods.price}}</div>
          <button class="add-to-cart">加入购物车</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'homeMainArea',
  data () {
    return {
      goodsList: []
    }
  },
  methods: {
    getData () {
      const axios = require('axios')
      axios.get('../static/index.json').then((res) => {
        this.renderGoodsList(res)
      }).catch((e) => {
        console.log(e)
      })
    },
    renderGoodsList (res) {
      if (res.data.stat && res.data.data) {
        this.goodsList = res.data.data
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
  @import "~styles/variables.less";
  @import "~styles/mixins.less";
  .main-area{
    padding: 120px 20px 0;
    background: @mainAreaBgColor;

    .filter-wrapper{
      background: #fff;
      text-align: right;
      padding: 0 20px;
      span{
        vertical-align: middle;
        color: @filterHoverColor;
      }
      .filter{
        .clear-fix;
        list-style: none;
        padding: 0;
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        li{
          float: left;
          line-height: 110px;
          height: 110px;
          padding: 0 20px;
          a{
            color: @filterFontColor;
            text-decoration: none;
            &:hover{
              color: @filterHoverColor;
            }
          }
          .active{
            color: @filterActiveColor
          }
        }
      }
    }
    .goods-list-wrapper{
      .clear-fix;
      margin: 50px 0 0 50px;
      padding-bottom: 50px;
      .price-filter{
        float: left;
        width: 200px;
        .filter-title{
          font-size: 16px;
          color: #605f5f;
          height: 40px;
          line-height: 40px;
          font-weight: 800;
          padding-bottom: 30px;
        }
        ul{
          list-style: none;
          padding: 0;
          margin: 0;
          li{
            height: 30px;
            line-height: 30px;
            padding-bottom: 50px;
            a{
              color: @filterFontColor;
              text-decoration: none;
              display: inline-block;
              &:hover{
                color: @filterHoverColor;
                border-left: 3px solid @filterHoverColor;
                padding-left: 20px;
                transition: padding-left .5s;
              }
              &.active{
                color: @filterHoverColor;
                border-left: 3px solid @filterHoverColor;
                padding-left: 20px;
              }
            }
          }
        }
      }
      .goods-list{
        margin-left: 200px;
        font-size: 0;
        min-width: 500px;
        .goods{
          display: inline-block;
          box-sizing: border-box;
          width: 220px;
          margin: 20px 0 0 20px;
          padding: 25px;
          border: 1px solid @goodsBorderColor;
          background: #fff;
          font-size: 16px;
          cursor: pointer;
          &:hover{
            transform: translateY(-4px);
            transition: transform 1s;
            box-shadow: 2px 2px 5px @miColor;
          }
          .goods-img{
            width: 170px;
          }
          .goods-title{
            font-size: 16px;
            color: @grayFontColor;
            height: 40px;
            line-height: 40px;
            margin: 20px 0;
          }
          .goods-price{
            height: 35px;
            color: @goodsFontColor;
          }
          .add-to-cart{
            color: @goodsFontColor;
            border: 2px solid @goodsFontColor;
            width: 170px;
            line-height: 45px;
            padding: 0;
            outline: 0;
            cursor: pointer;
            &:hover{
              background: rgba(209,67,74,.6);
              color: #fff;
              transition: background .3s;
            }
          }
        }
      }
    }
  }
</style>
