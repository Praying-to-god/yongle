import Vue from 'vue'

import Vuex from 'vuex'

import show from './modules/show'
import city from './modules/city'
import ticket from './modules/ticket'
// import allLei from './modules/allLei'
// import allTime from './modules/allTime'
import home from './modules/home'

import user from '../store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    show,
    city,
    ticket,
    // allLei,
    // allTime,
    user,
    home
  }
})
