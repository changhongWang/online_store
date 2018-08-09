import axios from 'axios'
export default {
  changeName (ctx, name) { // ctx: 上下文
    ctx.commit('changeName', name)
  },
  handleLogin (ctx, obj) {
    // ajax
    ctx.commit('showLoading')
    axios.post('/api/users/login', {
      userName: obj.username,
      userPwd: obj.pwd
    }).then((res) => {
      ctx.commit('hideLoading')
      if (parseInt(res.data.status) === 0) {
        const userName = res.data.result.userName
        ctx.commit('showAlert', `欢迎您，${userName}`)
        ctx.commit('changeLoginStatus', true)
        ctx.commit('changeUserName', userName)
        setTimeout(() => {
          ctx.commit('hideAlert')
        }, 3000)
      } else if (parseInt(res.data.status) === 1) {
        ctx.commit('showAlert', '用户名或密码不正确')
        ctx.commit('changeLoginStatus', false)
        ctx.commit('changeUserName', '')
        setTimeout(() => {
          ctx.commit('hideAlert')
        }, 3000)
      }
    }).catch((e) => {
      ctx.commit('hideLoading')
      console.log(e)
    })
  },
  checkLogin (ctx) {
    // 检查用户登录状态
    axios.get('/api/users/checkLogin').then((res) => {
      if (res.data.status === '1') {
        ctx.commit('changeLoginStatus', false)
        ctx.commit('changeUserName', '')
      } else if (res.data.status === '0') {
        ctx.commit('changeLoginStatus', true)
        ctx.commit('changeUserName', res.data.result.userName)
      }
    }).catch((e) => {
      console.log(e)
    })
  },
  handleLogOut (ctx) {
    ctx.commit('showLoading')
    axios.post('/api/users/logout').then((res) => {
      ctx.commit('hideLoading')
      if (res.data.status === '0') {
        ctx.commit('changeLoginStatus', false)
        ctx.commit('changeUserName', '')
        alert('登出成功')
      }
    }).catch((e) => {
      ctx.commit('hideLoading')
      console.log(e)
    })
  }
}
