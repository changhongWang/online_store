<template>
  <div id="app">
    <keep-alive exclude="Cart">
      <router-view/>
    </keep-alive>
    <loading></loading>
    <alert></alert>
  </div>
</template>

<script>
import loading from 'common/loading/Loading'
import alert from 'common/alert/Alert'
export default {
  name: 'App',
  components: {
    loading,
    alert
  }
}
</script>

<style>
</style>
