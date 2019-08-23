<template>
  <!-- 分类页 -->
  <div class="category">
    <van-nav-bar
        title="分类"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        >
        <van-icon name="search" slot="right" color="red"/>
    </van-nav-bar>
    <searchBar :fcitys="fcitys" :typeas="typeas" @addre="addre" @kinds="kinds" @tim="tim"/>
  <categoryList :pagerMemorys="pagerMemoryList" :pbgimgs="pbgimgsList" :pageType="pageType" @loadMore="loadMore"/>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import searchBar from '../../components/searchBar'
import categoryList from '../../components/categoryList'

export default {
  components: {
    categoryList,
    searchBar
  },
  computed:{
    ...mapState('show', ['pagerMemoryList','pbgimgsList','fcitys','typeas','pageType']),

  },
    methods: {
      ...mapMutations('show', ['getAddress','getkinds','gettimes','pushThree']),
      ...mapActions('show', ['getShowList','getMoreList','getChoiceList','getAgoList']),
    onClickLeft() {
      this.$router.back()
      this.pushThree()
      this.getAgoList()
    },
    onClickRight() {
      this.$router.push({
        path: '/search'
      })
    },
    //子组件点击获取更多时，请求ajax
    loadMore(){
      this.getMoreList()
    },
    addre(a){
      this.getAddress({add:a});
      this.getChoiceList()
    },
    kinds(a){
      this.getkinds({kin:a});
      this.getChoiceList()
    },
    tim(a){
      this.gettimes({tim:a});
      this.getChoiceList()
    }
  },
  created() {
    this.getShowList();
  },
}

</script>

<style lang="scss" scoped>
.van-icon-arrow-left::before{
  color:red;
}
.van-icon-search:before {
  font-size: 22px;
}
</style>
