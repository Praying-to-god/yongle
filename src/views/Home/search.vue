<template>
  <!-- 分类页 -->
  <div class="category">
    <van-nav-bar title="搜索" left-arrow @click-left="onClickLeft" />
    <!-- 搜索框组件 -->
    <form action="/">
      <van-search
        v-model="searchWord"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <searchBar
      v-show="sB == 0 ? false : true"
      :fcitys="fcitys"
      :typeas="typeas"
      @addre="addre"
      @kinds="kinds"
      @tim="tim"
    />
    <categoryList
      v-show="sB"
      :pagerMemorys="pagerMemoryList"
      :highLight="searchWord"
      :pbgimgs="pbgimgsList"
      :pageType="pageType"
      @loadMore="loadMore"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import searchBar from '../../components/searchBar'
import categoryList from '../../components/categoryList'

export default {
  data() {
    return {
      searchWord: '',
      sB: 0
    }
  },
  components: {
    categoryList,
    searchBar
  },
  computed: {
    ...mapState('show', [
      'pagerMemoryList',
      'pbgimgsList',
      'fcitys',
      'typeas',
      'pageType'
    ])
  },
  methods: {
    ...mapMutations('show', [
      'getSearchWords',
      'getAddress',
      'getkinds',
      'gettimes'
    ]),
    ...mapActions('show', ['getWordList', 'getGroupList', 'getMoreList']),
    onClickLeft() {
      // Toast('返回')
    },
    onSearch() {
      this.getSearchWords({ a: this.searchWord })
      this.sB = 1
      if (this.searchWord == '') {
        this.$dialog.alert({
          message: '请输入搜索内容'
        })
      } else {
        this.getWordList()
      }
    },
    onCancel() {},
    //子组件点击获取更多时，请求ajax
    loadMore() {
      this.getMoreList()
    },
    addre(a) {
      this.getAddress({ add: a })
      this.getGroupList()
    },
    kinds(a) {
      this.getkinds({ kin: a })
      this.getGroupList()
    },
    tim(a) {
      this.gettimes({ tim: a })
      this.getGroupList()
    }
  }
}
</script>

<style lang="scss">
.van-search__content {
  border-radius: 30px;
  background: #f3f4f5;
}
.van-icon-search:before {
  color: red;
}
.van-icon-arrow-left:before {
  color: red;
}
.van-search--show-action {
  padding-right: 0;
  width: 350px;
}
</style>
