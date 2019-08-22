import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    ticket: [] //存储票的详细信息
  },
  mutations: {
    //修改获得的数据
    setTicket(state, payload) {
      state.ticket = payload
    }
  },
  actions: {
    //获取购票详情
    getTicket({ commit }) {
      request
        .get(
          'http://localhost:39639/api/server/product/ticket-568047097.json?pid=568047097.html'
        )
        .then(res => {
          console.log(res.data.product)
          if (res.result.code == 1) {
            commit({
              type: 'setTicket',
              ticket: res.data.product
            })
          }
        })
    }
  }
}
