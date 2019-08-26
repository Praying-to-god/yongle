//调用ajax
import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    //==========================================================分类页=========================================================
    pagerMemoryList: [],
    pbgimgs: [],
    pbgimgsList: [],
    num: 1,
    choice: 0, //筛选检索后total数量  作为三级联动参数使用
    cityjx: '', //筛选后城市简称
    typeajx: '',
    reqTotal: 0,
    fcitys: [], //导航页城市数据
    typeas: [], //导航页演出类型数据
    address: '',
    kind: '',
    times: '',
    address2: '',
    kind2: '',
    times2: '',
    datestrEscape: '',
    datestr: '',
    datestrSelected: '',
    totalPages: 0, //获取请求总页数
    pageType: 0, //获取更多按钮状态控制
    threeArr: [], //分类页三级联动数据汇整
    threeArrTrue: [],
    threeStr: '', //分类页三级联动数据拼接
    lastW: '', //获取最后一个拼接用地址
    //=========================================================搜索页==========================================================
    searchWords: '', //关键字搜索
    ticket: [] //详情页数据
  },
  getters: {},
  //********************************************mutations****************************************/
  mutations: {
    //首次设置category列表数据-------------------------------------------------------------------->
    setPagerMemoryList(state, payload) {
      state.pagerMemoryList = payload.pagerMemorys
      state.choice = payload.allLists //首次请求数据后total数量
      state.pbgimgs = payload.pagerMemorys.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
      state.fcitys = payload.allData.fcitys //导航页城市数据
      state.typeas = payload.allData.typeas //导航页演出类型数据
      //总页数
      state.totalPages = payload.totalPages
    },
    //点击更多设置category列表数据-------------------------------------------------------------------->
    setMorePagerMemorys(state, payload) {
      state.pagerMemoryList = payload.MorePagerMemorys
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
    },
    //筛选设置category列表数据-------------------------------------------------------------------->
    setChoices(state, payload) {
      state.pagerMemoryList = payload.choices
      state.cityjx = payload.cityjx // 筛选后城市简称
      state.typeajx = payload.typeajx // 筛选后演出种类简称
      state.choice = payload.allLists //筛选检索后total数量
      //以下三个为筛选时间
      state.datestrEscape = payload.datestrEscape
      state.datestr = payload.datestr
      state.datestrSelected = payload.datestrSelected
      //总页数
      state.totalPages = payload.totalPages
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
    },
    //获取地区-------------------------------------------->
    getAddress(state, payload) {
      if (payload.add == '') {
        state.address = payload.add
        state.address2 = payload.add
      } else {
        state.address = '-' + payload.add
        state.address2 = payload.add + '-'
      }
    },
    //获取种类-------------------------------------------->
    getkinds(state, payload) {
      if (payload.kin == '') {
        state.kind = payload.kin
        state.kind2 = payload.kin
      } else {
        state.kind = '-' + payload.kin
        state.kind2 = payload.kin + '-'
      }
    },
    //获取时间-------------------------------------------->
    gettimes(state, payload) {
      if (payload.tim == '') {
        state.times = payload.tim
        state.times2 = payload.tim
      } else {
        state.times = '-' + payload.tim
        state.times2 = payload.tim + '-'
      }
    },
    //获取更多按钮控制
    pageType(state, payload) {
      state.pageType = payload.a
    },
    //==================================================================搜索页================================================================
    getSearchWords(state, payload) {
      state.searchWords = payload.a
    },
    setSearchWords(state, payload) {
      state.fcitys = payload.data.fcitys //导航页城市数据
      state.typeas = payload.data.typeas //导航页演出类型数据
      state.pagerMemoryList = payload.data.pagerMemory.list // cate列表数据
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
      //总页数
      state.totalPages = payload.totalPages
    },
    setGroupList(state, payload) {
      state.pagerMemoryList = payload.data.pagerMemory.list // cate列表数据
      state.pbgimgs = state.pagerMemoryList.map(item => item.pbigimg)
      state.pbgimgsList = state.pbgimgs.map(item => '//static.228.cn' + item)
      //总页数
      state.totalPages = payload.totalPages
    },
    setThree(state, payload) {
      state.threeStr = payload.a + payload.b + payload.c
      state.threeArr.push(state.threeStr)
    },
    pushThree(state) {
      state.lastW = state.threeArr.pop()
    },
    //详情页
    getDeti(state, payload) {
      state.ticket = payload.a
    }
  },
  //********************************************actions****************************************/
  actions: {
    //首次数据获取----------------------------------------------------------分类----------------------------------------------------------->
    getShowList({ commit }) {
      request.get('/api/server/category/default.json').then(res => {
        if (res.result.code == 1) {
          commit({
            type: 'setPagerMemoryList',
            pagerMemorys: res.data.pagerMemoryList,
            //共多少页
            totalPages: res.data.pagerMemory.pages,
            allData: res.data,
            allLists: res.data.total
          })
        }
      })
    },
    //点击获取更多，数据获取----------------------------------------------------分类------------------------------------------------------->
    getMoreList({ commit, state }) {
      state.num++
      if (state.num > state.totalPages) {
        commit({
          type: 'pageType',
          a: 1
        })
      } else {
        commit({
          type: 'pageType',
          a: 0
        })
      }
      request
        .post(
          '/api/server/search/moreSearch.json',
          {
            //请求方法1
            params: {
              datestrEscape: state.datestrEscape,
              datestr: state.datestr,
              type: 1,
              tagstr: 'all',
              datestrSelected: state.datestrSelected,
              typebjx: 'all',
              orderstype: 'all',
              filter: 'all',
              total: state.choice,
              typeajx: state.typeajx, //反应演出种类简称
              cityjx: state.cityjx, //反应城市简称
              keyword: encodeURI(state.searchWords),
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
    },
    //联动数据获取---------------------------------------------------------------分类------------------------------------------------------>
    getChoiceList({ state, commit }) {
      commit({
        type: 'setThree',
        a: state.address,
        b: state.kind,
        c: state.times
      })
      if (state.threeStr == '') {
        state.links = '/api/server/category/default.json'
      } else {
        state.links = `/api/server/category/search${state.threeStr}.json`
      }
      request.get(state.links).then(res => {
        if (res.result.code == 1) {
          commit({
            type: 'setChoices',
            choices: res.data.pagerMemoryList,
            allLists: res.data.total,
            //共多少页
            totalPages: res.data.pagerMemory.pages,
            //城市-------------------------------------------------------------->
            cityjx: res.data.params.cityjx,
            //演出类型-------------------------------------------------------------->
            typeajx: res.data.params.typeajx,
            //演出时间--汉字时间-------------------------------------------------------------->
            datestrEscape: encodeURI(res.data.params.datestrEscape), //将汉字转换格式
            //演出时间--时间范围
            datestr: res.data.params.datestr.replace(',', '%2C'), //将逗号转换格式
            //演出时间--英文格式
            datestrSelected: res.data.params.datestrSelected
          })
        }
      })
    },
    //返回联动数据获取---------------------------------------------------------------分类------------------------------------------------------>
    getAgoList({ state, commit }) {
      if (state.lastW === undefined) {
        state.links = '/api/server/category/default.json'
      } else {
        state.links = `/api/server/category/search${state.lastW}.json`
      }
      request.get(state.links).then(res => {
        if (res.result.code == 1) {
          commit({
            type: 'setChoices',
            choices: res.data.pagerMemoryList,
            allLists: res.data.total,
            //共多少页
            totalPages: res.data.pagerMemory.pages,
            //城市-------------------------------------------------------------->
            cityjx: res.data.params.cityjx,
            //演出类型-------------------------------------------------------------->
            typeajx: res.data.params.typeajx,
            //演出时间--汉字时间-------------------------------------------------------------->
            datestrEscape: encodeURI(res.data.params.datestrEscape), //将汉字转换格式
            //演出时间--时间范围
            datestr: res.data.params.datestr.replace(',', '%2C'), //将逗号转换格式
            //演出时间--英文格式
            datestrSelected: res.data.params.datestrSelected
          })
        }
      })
    },
    //==================================================================搜索页==========================================================================
    //--------------------------------------------------------------------------------------------------------------------->
    getGroupList({ state, commit }) {
      request
        .get(
          `/api/server/search/s/${state.address2}${state.kind2}${
            state.times2
          }${encodeURI(state.searchWords)}.json`
        )
        .then(res => {
          if (res.result.code == 1) {
            commit({
              type: 'setGroupList',
              totalPages: res.data.pagerMemory.pages,
              data: res.data
            })
          }
        })
    },
    getWordList({ state, commit }) {
      request
        .get(`/api/server/search/s/${encodeURI(state.searchWords)}.json`)
        .then(res => {
          if (res.result.code == 1) {
            commit({
              type: 'setSearchWords',
              totalPages: res.data.pagerMemory.pages,
              data: res.data
            })
          }
        })
    },
    //==================================================================检索详情页==========================================================================
    getDetail({ commit }, products) {
      request
        .get(`/api/server/product/ticket-${products}.json?pid=${products}.html`)
        .then(res => {
          if (res.result.code == 1) {
            commit({
              type: 'getDeti',
              a: res.data.product
            })
          }
        })
    }
  }
}
