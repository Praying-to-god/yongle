<template>
  <!-- 分类页 -->
  <div class="category">
    <van-nav-bar
        title="分类"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        >
        <van-icon name="search" slot="right" />
    </van-nav-bar>
    <searchBar :fcitys="fcitys" :typeas="typeas" />
  <categoryList :pagerMemorys="pagerMemoryList" :pbgimgs="pbgimgsList" @loadMore="loadMore"/>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import searchBar from '../../components/searchBar'
import categoryList from '../../components/categoryList'

export default {
  components: {
    categoryList,
    searchBar
  },
  computed:{
    ...mapState('show', ['pagerMemoryList','pbgimgsList','fcitys','typeas']),

  },
    methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    //获取分类列表数据
    // loadCategoryList(){
    // },
    ...mapActions('show', ['getShowList','getMoreList']),
    //子组件点击获取更多时，请求ajax
    loadMore(){
      this.getMoreList();
    }
  },
  created() {
    this.getShowList();
    // console.log(this.pagerMemoryList);
  },
}

</script>

<style lang="scss">

</style>
