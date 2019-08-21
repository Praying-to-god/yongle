import request from '../../utils/request'
export default {
  namespaced: true,

  state: {
    account: [],
    password: []
  },

  mutations: {
    store(state, payload) {
      ;(state.account = payload && payload.account2),
        (state.password = payload && payload.password2)
    }
  },

  actions: {
    getacc({ commit }, payload) {
      request
        .post('http://localhost:3000/name', {
          account2: payload.account1,
          password2: payload.password1
        })
        .then(data => {
          commit('store', data)
        })
    }
  }
}
