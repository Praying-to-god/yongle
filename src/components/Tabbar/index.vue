<template>
  <ul class="mz-tabbar">
    <li v-for="tab in tabs" :key="tab.id">
      <router-link :to="tab.href">
        <span class="iconfont" :class="[tab.icon]"></span>
        <i>{{ tab.name }}</i>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    tabs: Array
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/common/mixin.scss';
.mz-tabbar {
  @include border-top;
  display: flex;
  height: 50px;
  li {
    flex: 1;
  }
  a {
    width: 100%;
    height: 100%;
    color: #797d82;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    &.router-link-active {
      color: #ff2959;
    }
  }
  i {
    font-size: 14px;
  }
  .iconfont {
    font-size: 22px;
    padding-bottom: 4px;
  }
}
</style>
