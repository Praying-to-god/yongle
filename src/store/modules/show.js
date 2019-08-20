//调用ajax
import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    pagerMemoryList:[],
    pbgimgs:[],
    pbgimgsList:[]
  },
  getters: {
    
  },
  mutations: {
    setPagerMemoryList(state, payload) {
      state.pagerMemoryList = payload.pagerMemorys
      state.pbgimgs = payload.pagerMemorys.map(item => item.pbigimg)
      state.pbgimgsList=state.pbgimgs.map(item=>'//static.228.cn'+item)
      // console.log(payload.pagerMemorys)
      // state.total = payload.total
    }

  },
  actions: {

    getShowList({commit}) {
      setTimeout(() => {
        request
          .get('http://localhost:15590/api/server/category/default.json')
          .then(res => {
            // console.log(res)
            // console.log(res.data.pagerMemoryList)
            if (res.result.code == 1) {
              commit({
                type: 'setPagerMemoryList',
                pagerMemorys: res.data.pagerMemoryList
                
              })
            }
          })
      }, 500)
    }
  }
}

