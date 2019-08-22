import request from '../../utils/request'
import router from '../../router'
import { Toast } from 'vant';
export default {
  namespaced: true,

  state: {
    userInfo: null,
    token: null
  },

  mutations: {
    login(state, payload) {
      state.userInfo = payload.userInfo
      state.token = payload.token
    }
  },

  actions: {
    register({ commit }, payload) {
      request
        .post('http://localhost:30070/api/sign-up', {
          username: payload.account,
          password: payload.pwd
        })
        .then(res => {
          console.log(res)
        })
    },
    handleLogin({ commit }, payload) {
      request.post('http://localhost:30070/api/sign-in', payload).then(res => {
        if (res.code === 0) {
          commit('login', {
            userInfo: res.data.userInfo,
            token: res.data.token
          })
          router.replace('/person')
        } else {
          Toast('密码或账号错误')
        }
      })
    }
  }
}
