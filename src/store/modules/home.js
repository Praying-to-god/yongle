import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    bannerList: [],
    recommendlist: [],
    gymList: []
  },
  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
    },
    setrecommendlist(state, payload) {
      state.recommendlist = payload
    },
    setgymList(state, payload) {
      state.gymList = payload
    }
  },
  actions: {
    getrecommendlist(context) {
      request.get('http://localhost:23220/api/server/content/index.json').then(data => {
        context.commit('setrecommendlist', data.data.recommendPage.list),
          context.commit('setBannerList', data.data.slideList.splice(0, 5))
      })
    },
    getgymList(context) {
      request.get('http://localhost:23220/api/server/content/moreProductPlay.json?fcity=-1&pageNum=1&type=1').then(data => {
        context.commit('setgymList', data.data.venuePage.list)
      })
    }

  }
}
