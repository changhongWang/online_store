<template>
    <section class="main-area">
      <div class="order-status-wrapper">
        <ul class="order-status">
          <li class="passed-process"><span>确认地址</span></li>
          <li><span>订单预览</span></li>
          <li><span>支付</span></li>
          <li><span>订单确认</span></li>
        </ul>
      </div>
      <div class="address-list-wrapper">
        <ul class="address-list">
          <li class="list-item-box" :class="{'active-item': item.isDefault}" v-for="item in addressList" :key="item.Id">
            <h4>{{item.Name}}</h4>
            <div class="user-address">{{item.Address}}</div>
            <div>{{item.Tel}}</div>
            <div class="default-and-delete">
              <span v-if="item.isDefault === 1">默认地址</span>
              <span v-else class="set-default-btn">设置默认地址</span>
              <i class="iconfont icon-delete">&#xe61e;</i>
            </div>
          </li>
        </ul>
        <div class="more-address-wrapper" v-if="ifShowMoreAddress">
          <div class="more-address" v-show="!showMoreAddStat" @click="showMoreAdd">显示更多 <i class="iconfont icon-open">&#xe695;</i></div>
          <div class="more-address" v-show="showMoreAddStat" @click="hideMoreAdd">收起 <i class="iconfont icon-close">&#xe695;</i></div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'MainArea',
  data () {
    return {
      addressList: [],
      showMoreAddStat: false
    }
  },
  methods: {
    getAddressList () {
      const axios = require('axios')
      axios.get('/api/users/addressList').then(res => this.getAddressListSucc(res))
    },
    getAddressListSucc (res) {
      if (res.status === 200 && res.data.status === '0') {
        this.addressList = this.setDefaultPosition(res.data.result)
      }
    },
    setDefaultPosition (data) {
      let pos = 0
      data.forEach((item, index) => {
        if (item.isDefault === 1) {
          pos = index
        }
      })
      let item = data.splice(pos, 1)
      data.unshift(item[0])
      return data
    },
    showMoreAdd () {
      this.showMoreAddStat = !this.showMoreAddStat
    },
    hideMoreAdd () {
      this.showMoreAddStat = !this.showMoreAddStat
    }
  },
  computed: {
    ifShowMoreAddress () {
      return this.addressList.length > 3
    },
    hidedAddList () {
      return this.addressList.filter(function (item) {
        return item.Id <= 3
      })
    }
  },
  mounted () {
    this.getAddressList()
  }
}
</script>

<style lang="less" scoped>
  @import '~styles/variables.less';
  .main-area{
    padding: 0 50px;
    background: @mainAreaBgColor;
    .order-status-wrapper{
      .order-status{
        list-style: none;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        margin: 0;
        padding: 20px 0 30px;
        li{
          flex: 1;
          line-height: 50px;
          color: #cac8ce;
          border-bottom: 2px solid #cac8ce;
          position: relative;
          &:after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: -6px;
            margin-left: -5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #cac8ce;
          }
        }
        li.passed-process{
          color: #d1434a;
          border-bottom-color: #d1434a;
          &:after{
            background: #d1434a;
          }
        }
      }
    }
    .address-list-wrapper{
      .address-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .list-item-box{
          width: 24%;
          border: 2px solid #efedf4;
          background: #ffffff;
          padding: 20px;
          box-sizing: border-box;
          margin-top: 10px;
          h4{
            margin: 0;
          }
          h4, div{
            line-height: 35px;
          }
          .user-address{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .default-and-delete{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #ee7a23;
            font-size: 12px;
            .set-default-btn{
              visibility: hidden;
            }
            .icon-delete{
              font-size: 12px;
              color: #777;
              &:hover{
                color: #ee7a23;
              }
            }
          }
          &:hover{
            cursor: pointer;
            border: 2px solid #ee7a23;
            .set-default-btn{
              visibility: visible;
            }
          }
          &.active-item{
            cursor: pointer;
            border: 2px solid #ee7a23;
          }
        }
      }
      .more-address-wrapper{
        color: #ee7a23;
        text-align: center;
        padding: 20px 0 30px;
        .more-address{
          display: inline-block;
          cursor: pointer;
          .icon-close {
            display: inline-block;
            transform: rotate(180deg);
          }
        }

      }
    }
  }
</style>
