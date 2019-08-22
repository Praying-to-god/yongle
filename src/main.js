import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import './assets/styles/base.scss'
import { Toast, NavBar, Icon, Dialog } from 'vant'

Vue.use(Toast)
  .use(NavBar)
  .use(Icon)
  .use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
