import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    ticket: [], //存储票的详细信息
    productId: [] //存储购票页id
  },
  mutations: {
    //修改获得的数据
    setTicket(state, payload) {
      state.ticket = payload.ticket
    },
    //修改存储的id
    setProductid(state, payload) {
      state.productId = payload
    }
  },
  actions: {
    //获取购票详情
    getTicket({ commit, state }) {
      request
        .get(
          `/api/server/product/ticket-${state.productId}.json?pid=${state.productId}.html`
        )
        .then(res => {
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
