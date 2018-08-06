<template>
  <section class="navbar">
    <ul class="link-list">
      <li class="link" v-for="(link, index) in links" :key="link.id">
        <router-link :to="link.href">{{link.name}}</router-link>
        <span v-show="ifShowSlash(index)" class="slash">/</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    links: {
      type: Array,
      default () {
        return [{id: '001', name: '首页', href: '#'}]
      }
    }
  },
  methods: {
    ifShowSlash (index) {
      return index < this.links.length - 1
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~styles/variables.less";
  @import "~styles/mixins.less";
  .navbar{
    width: 100%;
    height: 90px;
    background: @navbarBgColor;
    .link-list{
      .clear-fix;
      list-style: none;
      margin: 0 50px;
      padding: 0;
      .link{
        float: left;
        font-size: 0;
        line-height: 90px;
        height: 90px;
        a{
          color: @navbarFontColor;
          text-decoration: none;
          font-size: 14px;
          outline: 0;
          &:hover{
            color: @navbarHoverColor;
          }
        }
        .slash{
          font-size: 14px;
          color: @navbarFontColor;
          padding: 0 3px;
        }
      }
    }
  }
</style>
