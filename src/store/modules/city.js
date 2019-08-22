import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    cities: [], //存储全部城市数据
    hotCity: [], //存储热门城市数据
    cityjx: [], //存储城市缩写
    fconfigid: [], //存储场馆编码
    bannerList: [], //存储轮播图数据
    tuijian: [], //存储推荐的数据
    gymList: [], //存储场馆数据
    dizhi: '' //存储定位地址
  },
  getters: {
    //对城市数据进行处理
    cityList(state) {
      let result = []
      state.cities.forEach(item => {
        //取出当前城市的拼音首字母大写
        let py = item.CITYJX.charAt(0).toUpperCase()
        //找出result中有没有某项，它的py与这里的拼音匹配
        let index = result.findIndex(items => items.py === py)
        //判断
        if (index > -1) {
          //有匹配项
          result[index].list.push(item)
        } else {
          //没有构建包含 py 与 list 的对象
          let obj = {
            py,
            list: [item]
          }
          result.push(obj)
        }
      })
      return result
    }
  },
  mutations: {
    //修改城市及热门城市
    setCities(state, payload) {
      state.cities = payload.cities
      state.hotCity = payload.hotCity
    },
    //修改城市缩写
    setCityjx(state, payload) {
      state.cityjx = payload
    },
    //修改场馆编码
    setFconfigid(state, payload) {
      state.fconfigid = payload
    },
    setbannerList(state, payload) {
      state.bannerList = payload.bannerList
    },
    //修改推荐中的数据
    setTuijian(state, payload) {
      state.tuijian = payload.tuijian
    },
    //修改场馆中的数据
    setgymList(state, payload) {
      state.gymList = payload.gymList
    },
    //修改头图的地址
    setdizhi(state, payload) {
      state.dizhi = payload.dizhi
    },
    //清空城市数据
    clearcities(state) {
      state.cities = []
    }
  },
  actions: {
    //获得城市列表数据
    getCities({ commit }) {
      request.get('/api/server/content/city/list.json').then(res => {
        console.log(res.data.fcitys)
        console.log(res.data.hotCitys)
        // console.log(res.data.hotCitys.PRODUCTNUM)

        if (res.result.code == 1) {
          commit({
            // 进行对仓库state赋值处理
            type: 'setTuijian',
            tuijian: res.data.recommendPage.list
          }),
            commit({
              type: 'setbannerList',
              bannerList: res.data.slideList.splice(0, 5)
            }),
            commit({
              type: 'setdizhi',
              dizhi: res.data.fconfig.CITYNAME
            })
        }
      })
    },
    // 获取选择城市首页数据
    getCityType({ commit, state }) {
      if (state.cities.length == 0) {
        request.get(`/api/server/content/city/sz.json`).then(res => {
          console.log(res)
          console.log(state.cityjx)
          if (res.result.code == 1) {
            commit({
              // 进行对仓库state赋值处理
              type: 'setTuijian',
              tuijian: res.data.recommendPage.list
            }),
              commit({
                type: 'setbannerList',
                bannerList: res.data.slideList.splice(0, 5)
              }),
              commit({
                type: 'setdizhi',
                dizhi: res.data.fconfig.CITYNAME
              })
          }
        })
      } else {
        request
          .get(`/api/server/content/city/${state.cityjx}.json`)
          .then(res => {
            if (res.result.code == 1) {
              commit({
                // 进行对仓库state赋值处理
                type: 'setTuijian',
                tuijian: res.data.recommendPage.list
              })
              commit({
                type: 'setbannerList',
                bannerList: res.data.slideList.splice(0, 5)
              })
              commit({
                type: 'setdizhi',
                dizhi: res.data.fconfig.CITYNAME
              })
            }
          })
      }
    },
    //获取选择场馆数据
    getCityVenue({ commit, state }) {
      if (state.cities.length == 0) {
        request
          .get(
            `/api/server/content/moreProductPlay.json?fcity=131054&pageNum=1&type=1`
          )
          .then(res => {
            if (res.result.code == 1) {
              commit({
                // 进行对仓库state赋值处理
                type: 'setgymList',
                gymList: res.data.venuePage.list
              })
            }
          })
      } else {
        request
          .get(
            `/api/server/content/moreProductPlay.json?fcity=${state.fconfigid}&pageNum=1&type=1`
          )
          .then(res => {
            if (res.result.code == 1) {
              commit({
                // 进行对仓库state赋值处理
                type: 'setgymList',
                gymList: res.data.venuePage.list
              })
            }
          })
      }
    }
  }
}
