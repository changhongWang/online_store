<template>
  <transition>
    <div class="fade" v-if="this.$store.state.loading_show">
      <div class="loading"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="less" scoped>
  .v-enter, .v-leave-to{
    opacity: 0;
  }
  .v-enter-active, .v-leave-active{
    transition: opacity 1s ease;
  }
  .fade{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(100,100,100, .1);
    z-index: 1000;
    .loading{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      border-radius: 10px;
      background-image: url('~imgs/loading.gif');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
    }
  }
</style>
