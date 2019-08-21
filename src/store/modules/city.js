import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    cities: [], //存储全部城市数据
    hotCity: [], //存储热门城市数据
    cityjx: [], //存储城市缩写
    fconfigid: [] //存储场馆编码
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
    }
  },
  actions: {
    //获得城市列表数据
    getCities({ commit }) {
      request
        .get('http://localhost:29709/api/server/content/city/list.json')
        .then(res => {
          console.log(res.data.fcitys)
          console.log(res.data.hotCitys)
          // console.log(res.data.hotCitys.PRODUCTNUM)

          if (res.result.code == 1) {
            commit({
              type: 'setCities',
              cities: res.data.fcitys,
              hotCity: res.data.hotCitys
            })
          }
        })
    },
    // 获取选择城市首页数据
    getCityType({ commit, state }) {
      request
        .get(
          `http://localhost:29709/api/server/content/city/${state.cityjx}.json`
        )
        .then(res => {
          console.log(res)
          console.log(state.cityjx)
          if (res.result.code == 1) {
            commit({
              // 进行对仓库state赋值处理
            })
          }
        })
    },
    //获取选择场馆数据
    getCityVenue({ commit, state }) {
      request
        .get(
          `http://localhost:29709/api//server/content/moreProductPlay.json?fcity=${state.fconfigid}&pageNum=1&type=1`
        )
        .then(res => {
          console.log(res)
          console.log(state.fconfigid)
          if (res.result.code == 1) {
            commit({
              // 进行对仓库state赋值处理
            })
          }
        })
    }
  }
}
