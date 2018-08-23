<template>
  <footer class="footer">
    <div class="website-intro">
      <ul class="intro-list">
        <li><a href="#">关于我们</a></li>
        <li><a href="#">团队合作</a></li>
        <li><a href="#">隐私策略</a></li>
      </ul>
    </div>
    <section class="copyright">
      Copyright&nbsp;©&nbsp;2018TaoMall.com&nbsp;版权所有
    </section>
    <div class="area-select-wrapper">
      <label for="area-select">地区</label>
      <select name="area-select" id="area-select">
        <option value="1">中国</option>
        <option value="2">USA</option>
        <option value="3">India</option>
      </select>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
  @import "~styles/variables.less";
  .footer{
    color: @footFontColor;
    .area-select-wrapper, .copyright, .website-intro{
      height: 200px;
      line-height: 200px;
    }
    .copyright, .website-intro{
      float: right;
    }
    .area-select-wrapper{
      margin-left: 100px;
    }
    .website-intro{
      .intro-list{
        margin: 0 0 0 30px;
        padding: 0;
        list-style: none;
        li{
          float: left;
          padding-right: 20px;
          a{
            color: @footFontColor;
            text-decoration: none;
            cursor: pointer;
            &:hover{
              color: #d1434a;
            }
          }
        }
      }
    }
  }

</style>
