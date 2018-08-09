<template>
  <div class="fade" v-if="this.$store.state.alert_show">
    <transition>
      <div class="alert">{{this.$store.state.alert_msg}}</div>
    </transition>
  </div>
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
    z-index: 1000;
    .alert{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, .6);
      padding: 0 40px;
      color: #eee;
      height: 50px;
      line-height: 50px;
      border-radius: 10px;
      overflow: hidden;
    }
  }
</style>
