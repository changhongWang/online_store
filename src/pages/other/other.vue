<template>
  <div>
    <div>Vuex数据：{{this.$store.state.name}}</div>
    <router-link to="/vuex">跳回员工选择</router-link>
  </div>
</template>

<script>
export default {
  name: 'other'
}
</script>

<style scoped>

</style>
