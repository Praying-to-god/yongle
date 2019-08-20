import Vue from 'vue'

import Vuex from 'vuex'

import show from './modules/show'
import city from './modules/city'
import allLei from './modules/allLei'
import allTime from './modules/allTime'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    show,
    city,
    allLei,
    allTime
  }
})
