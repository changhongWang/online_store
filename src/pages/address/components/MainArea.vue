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
          <li class="list-item-box">
            <h4>TOM</h4>
            <div class="user-address">广东省深圳市</div>
            <div>18818181920</div>
            <div class="default-and-delete">
              <span>默认地址</span>
              <i class="iconfont icon-delete">&#xe61e;</i>
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
  name: 'MainArea'
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
          &:hover{
            cursor: pointer;
            border: 2px solid #ee7a23;
            .default-and-delete{
            }
          }
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
            .icon-delete{
              font-size: 12px;
              color: #777;
              &:hover{
                color: #ee7a23;
              }
            }
          }
        }
      }
    }
  }
</style>
