//调用ajax
import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    pagerMemoryList: [],
    pbgimgs: [],
    pbgimgsList: [],
    num: 1,
    fcitys: [],
    typeas: []
  },
  getters: {},
  mutations: {
    setPagerMemoryList(state, payload) {
      state.pagerMemoryList = payload.pagerMemorys
      // console.log(state.pagerMemoryList)
      state.pbgimgs = payload.pagerMemorys.map(item => item.pbigimg)
      // console.log(state.pbgimgs)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
      // console.log(payload.pagerMemorys)
      state.fcitys = payload.allData.fcitys
      state.typeas = payload.allData.typeas
      console.log(state.fcitys)
      console.log(state.typeas)
    },
    setMorePagerMemorys(state, payload) {
      state.pagerMemoryList = payload.MorePagerMemorys
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
    }
  },
  actions: {
    //首次数据获取----------------------------------------------------------------------->
    getShowList({ commit }) {
      setTimeout(() => {
        request
          .get('http://localhost:16659/api/server/category/default.json')
          .then(res => {
            // console.log(res)
            // console.log(res.data.pagerMemoryList)
            if (res.result.code == 1) {
              commit({
                type: 'setPagerMemoryList',
                pagerMemorys: res.data.pagerMemoryList,
                allData: res.data
              })
            }
          })
      }, 500)
    },
    //点击获取更多，数据获取------------------------------------------------------------->
    getMoreList({ commit, state }) {
      state.num++
      setTimeout(() => {
        request
          .post(
            'http://localhost:16659/api/server/search/moreSearch.json',
            {
              //请求方法1
              params: {
                datestrEscape: 'all',
                datestr: 'all',
                type: 1,
                tagstr: 'all',
                datestrSelected: 'all',
                typebjx: 'all',
                orderstype: 'all',
                filter: 'all',
                total: 1729,
                typeajx: 'all',
                cityjx: 'all',
                keyword: '',
                pagenum: state.num
              }
              //  请求参数做修改，方法2
              // params: datestrEscape=all&datestr=all&type=1&tagstr=all&datestrSelected=all&typebjx=all&orderstype=all&filter=all&total=1729&typeajx=all&cityjx=all&keyword=&pagenum=2'}, {
            },
            {
              transformRequest: data => {
                let result = []
                for (let key in data) {
                  let a = data[key]
                  let arr = []
                  for (let i in a) {
                    arr.push(`${i}=${a[i]}`)
                  }
                  result.push(`${key}=${encodeURIComponent(arr.join('&'))}`)
                }
                return result.join('')
              }
              // 请求参数做修改，方法2
              // transformRequest: (data) => {
              //   let arr = [];
              //   for (let key in data) {
              //     arr.push(`${key}=${data[key]}`)
              //   }
              //   return arr.join('&')
            }
          )
          .then(res => {
            console.log(res.result.code)
            console.log(res.data.pagerMemoryList)
            if (res.result.code == 1) {
              commit({
                type: 'setMorePagerMemorys',
                MorePagerMemorys: state.pagerMemoryList.concat(
                  res.data.pagerMemoryList
                )
              })
            }
          })
      }, 500)
    }
  }
}
