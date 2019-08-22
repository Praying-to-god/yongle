import request from '../../utils/request'
import router from '../../router'
import { Toast } from 'vant'
let userInfo = localStorage.getItem('userInfo')
let token = localStorage.getItem('token')
export default {
  namespaced: true,

  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    token: token || null
  },

  mutations: {
    login(state, payload) {
      let user = payload.userInfo.username
      let newName = user.slice(0, 3)
      let newName1 = user.slice(7, 11)
      let newUsername = newName + '****' + newName1
      payload.userInfo.username = newUsername
      state.userInfo = payload.userInfo
      state.token = payload.token
    },
    EmptyOnExit(state, payload) {
      state.userInfo = payload
    }
  },

  actions: {
    register({ commit }, payload) {
      request
        .post('/api/sign-up', {
          username: payload.account,
          password: payload.pwd
        })
        .then(res => {
          console.log(res)
        })
    },
    handleLogin({ commit }, payload) {
      request.post('/api/sign-in', payload).then(res => {
        if (res.code === 0) {
          commit('login', {
            userInfo: res.data.userInfo,
            token: res.data.token
          })
          localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
          localStorage.setItem('token', res.data.token)
          router.replace('/person')
        } else {
          Toast('密码或账号错误')
        }
      })
    }
  }
}
