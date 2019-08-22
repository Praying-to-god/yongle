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
    typeas: [],
    address: '',
    kind: '',
    times: ''
  },
  getters: {},
  mutations: {
    //首次设置category列表数据-------------------------------------------------------------------->
    setPagerMemoryList(state, payload) {
      state.pagerMemoryList = payload.pagerMemorys
      // console.log(state.pagerMemoryList)
      state.pbgimgs = payload.pagerMemorys.map(item => item.pbigimg)
      // console.log(state.pbgimgs)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
      // console.log(payload.pagerMemorys)
      state.fcitys = payload.allData.fcitys
      state.typeas = payload.allData.typeas
    },
    //点击更多设置category列表数据-------------------------------------------------------------------->
    setMorePagerMemorys(state, payload) {
      state.pagerMemoryList = payload.MorePagerMemorys
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
    },
    //筛选设置category列表数据-------------------------------------------------------------------->
    setChoices(state, payload){
      state.pagerMemoryList = payload.choices
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
    },
    //获取地区-------------------------------------------->
    getAddress(state, payload) {
      if (payload.add == '') {
        state.address = payload.add
      } else {
        state.address = '-' + payload.add
      }
      // console.log(state.address)
    },
    //获取种类-------------------------------------------->
    getkinds(state, payload) {
      if (payload.kin == '') {
        state.kind = payload.kin
      } else {
        state.kind = '-' + payload.kin
      }
      // console.log(state.kind)
    },
    //获取时间-------------------------------------------->
    gettimes(state, payload) {
      if (payload.tim == '') {
        state.times = payload.tim
      } else {
        state.times = '-' + payload.tim
      }
    }
  },
  actions: {
    //首次数据获取--------------------------------------------------------------------------------------------------------------------->
    getShowList({ commit }) {
      setTimeout(() => {
        request
          .get('http://localhost:20338/api/server/category/default.json')
          .then(res => {
            if (res.result.code == 1) {
              commit({
                type: 'setPagerMemoryList',
                pagerMemorys: res.data.pagerMemoryList,
                allData: res.data
              })
            }
          })
      }, 100)
    },
    //点击获取更多，数据获取----------------------------------------------------------------------------------------------------------->
    getMoreList({ commit, state }) {
      state.num++
      setTimeout(() => {
        request
          .post(
            'http://localhost:20338/api/server/search/moreSearch.json',
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
                pagenum: state.num,
                links: ''
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
            if (res.result.code == 1) {
              commit({
                type: 'setMorePagerMemorys',
                MorePagerMemorys: state.pagerMemoryList.concat(
                  res.data.pagerMemoryList
                )
              })
            }
          })
      }, 100)
    },
    //联动数据获取--------------------------------------------------------------------------------------------------------------------->
    getChoiceList({ state, commit }) {
      if ((state.address == '') & (state.kind == '') & (state.times == '')) {
        state.links = 'http://localhost:20338/api/server/category/default.json'
      } else {
        state.links = `http://localhost:20338/api/server/category/search${state.address}${state.kind}${state.times}.json`
      }
      setTimeout(() => {
        request.get(state.links).then(res => {
          console.log(res)
          console.log(res.data.pagerMemoryList)
          if (res.result.code == 1) {
            commit({
              type: 'setChoices',
              choices: res.data.pagerMemoryList
            })
          }
        })
      }, 100)
    }
  }
}
