export default {
  changeName (state, name) {
    state.name = name
  },
  changeLoginStatus (state, status) {
    state.login_status = status
  },
  changeUserName (state, username) {
    state.username = username
  },
  showLoading (state) {
    state.loading_show = true
  },
  hideLoading (state) {
    state.loading_show = false
  },
  showAlert (state, msg) {
    state.alert_show = true
    state.alert_msg = msg
  },
  hideAlert (state) {
    state.alert_show = false
    state.alert_msg = ''
  },
  showLoginModal (state) {
    state.login_modal_show = true
  },
  hideLoginModal (state) {
    state.login_modal_show = false
  }
}
