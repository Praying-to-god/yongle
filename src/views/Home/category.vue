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
    <searchBar :fcitys="fcitys" :typeas="typeas" @addre="addre" @kinds="kinds" @tim="tim"/>
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
      ...mapMutations('show', ['getAddress','getkinds','gettimes']),
      ...mapActions('show', ['getShowList','getMoreList','getChoiceList']),
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
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
    // console.log(fcitys());
  },
}

</script>

<style lang="scss">

</style>
