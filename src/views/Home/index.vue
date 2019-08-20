<template>
  <!-- home 这个一级路由页面组件 -->
  <div class="page-home">
    <!-- views/Home/index.vue这个路由页面组件的二级坑 -->
    <router-view></router-view>
    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar/index'
export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: '首页',
          icon: 'icon-if_home_house_real_e',
          href: '/main'
        },
        {
          id: 2,
          name: '分类',
          icon: 'icon-leimupinleifenleileibie',
          href: '/category'
        },
        { id: 3, name: '搜索', icon: 'icon-sousuo', href: '/search' },
        { id: 4, name: '我的', icon: 'icon-wode', href: '/person' }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
