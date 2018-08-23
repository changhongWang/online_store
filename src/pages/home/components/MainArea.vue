<template>
  <section class="main-area">
    <div class="filter-wrapper">
      <span>排序：</span>
      <ul class="filter">
        <li><a href="#" class="active">默认</a></li>
        <li>
          <a href="#" @click="handleChangeOrder">价格</a>
          <i v-show="orderFlag" class="iconfont">&#xe63a;</i>
          <i v-show="!orderFlag" class="iconfont i-reverse">&#xe63a;</i>
        </li>
      </ul>
    </div>
    <div class="goods-list-wrapper">
      <div class="price-filter">
        <h5 class="filter-title">价格：</h5>
        <ul @click="handlePriceChange">
          <li><a data-level="all" :class="{active: priceLevel === 'all'}">全部</a></li>
          <li><a data-level="0" :class="{active: priceLevel === '0'}">0.00 - 100.00</a></li>
          <li><a data-level="1" :class="{active: priceLevel === '1'}">100.00 - 500.00</a></li>
          <li><a data-level="2" :class="{active: priceLevel === '2'}">500.00 - 1000.00</a></li>
          <li><a data-level="3" :class="{active: priceLevel === '3'}">1000.00 - 8000.00</a></li>
        </ul>
      </div>
      <div class="goods-list">
        <div class="goods" v-for="goods in goodsList" :key="goods.productId">
          <img :src="'/api/static/'+goods.productImg" :alt="goods.productName" class="goods-img">
          <h5 class="goods-title">{{goods.productName}}</h5>
          <div class="goods-price">￥{{goods.productPrice}}</div>
          <button class="add-to-cart" @click="addToCart(goods.productId)">加入购物车</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'homeMainArea',
  data () {
    return {
      goodsList: [],
      page: 0,
      pageSize: 8,
      orderFlag: true,
      priceLevel: 'all'
    }
  },
  methods: {
    getGoodsList () {
      axios.get('/api/goods/list', {
        params: {
          page: this.page,
          pageSize: this.pageSize,
          orderFlag: this.orderFlag,
          priceLevel: this.priceLevel
        }
      }).then((res) => {
        this.renderGoodsList(res)
      }).catch((e) => {
        console.log(e)
      })
    },
    renderGoodsList (res) {
      if (res.status === 200) {
        if (this.goodsList.length === 0) {
          this.goodsList = res.data
        } else {
          res.data.forEach(item => this.goodsList.push(item))
        }
      }
    },
    clearGoodsList () {
      this.goodsList = []
      this.page = 0
    },
    addToCart (productId) {
      if (productId) {
        // 实际的加入购物车操作
        axios.post('/api/goods/addCar', {productId: productId}).then((res) => {
          this.addToCartSucc(res)
        }).catch((res) => {
          console.log(res)
          this.$store.commit('showAlert', '加入失败')
          setTimeout(() => {
            this.$store.commit('hideAlert')
          }, 1000)
        })
      }
    },
    addToCartSucc (res) {
      if (res.data.status === '0') {
        this.$store.commit('showAlert', res.data.msg)
      } else {
        this.$store.commit('showAlert', '加入失败')
      }
      setTimeout(() => {
        this.$store.commit('hideAlert')
      }, 1000)
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      const docHeight = document.documentElement.offsetHeight - 200 - 50 - 390
      // footer高度 200 padding-bottom 50px  390px
      if (docHeight <= top) {
        if (this.page < 4) {
          this.page++
          this.getGoodsList()
        }
      }
    },
    handleChangeOrder () {
      this.orderFlag = !this.orderFlag
      this.clearGoodsList()
      this.getGoodsList()
    },
    handlePriceChange (e) {
      this.priceLevel = e.target.dataset.level
      this.clearGoodsList()
      this.getGoodsList()
    }
  },
  mounted () {
    this.getGoodsList()
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
  @import "~styles/variables.less";
  @import "~styles/mixins.less";
  .main-area{
    padding: 60px 20px 0;
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
          .i-reverse{
            display: inline-block;
            transform: rotate(180deg);
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
              cursor: pointer;
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
