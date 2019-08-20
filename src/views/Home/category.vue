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
  <categoryList :pagerMemorys="pagerMemoryList" :pbgimgs="pbgimgsList"/>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import categoryList from '../../components/categoryList'
export default {
  components: {
    categoryList,
  },
  computed:{
    ...mapState('show', ['pagerMemoryList','pbgimgsList']),
    
  },
    methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    //获取分类列表数据
    loadCategoryList(){

    },
    ...mapActions('show', ['getShowList']),
  },
  created() {
    this.getShowList()
    
    
  },
}
</script>

<style lang="scss">
  
</style>
