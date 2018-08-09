<template>
  <div>
    <div class="current-employee">{{this.name}}</div>
    <div class="choose-employee">
      <ul class="employee-list">
        <li v-for="e in employees" :key="e.id" @click="handleEmployeeClick(e.name)">{{e.name}}</li>
      </ul>
    </div>
    <router-link to="/other">跳转到other</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'learn_vuex',
  data () {
    return {
      employees: [
        {
          id: '001',
          name: '王乐'
        },
        {
          id: '002',
          name: '王昌鸿'
        },
        {
          id: '003',
          name: '高萌'
        }
      ]
    }
  },
  computed: {
    ...mapState(['name'])
  },
  methods: {
    handleEmployeeClick (name) {
      this.$store.dispatch('changeName', name)
    }
  }
}
</script>

<style lang="less" scoped>
  .choose-employee{
    .employee-list{
      list-style: none;
      margin: 0 0 0 20px;
      padding: 0;
      li{
        background: deepskyblue;
        border-radius: 3px;
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        width: 100px;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
