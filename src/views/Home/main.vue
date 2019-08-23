<template>
  <!-- 首页 -->
  <div class="yongle-main">
    <!-- 头部 -->
    <div class="main-head">
      <router-link to="/city" class="main-city">
        <span>{{dizhi}}</span>
        <i class="iconfont icon-xiala"></i>
      </router-link>
      <div class="main-search">
        <router-link to="/search">
          <input type="text" placeholder="搜索" />
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </div>
    <!-- 轮播图组件 -->
    <Banner :imgs="bannerList" />
    <!-- 标题导航 -->
    <div class="main-title-nav">
      <p>
        <router-link to="#">
          <i></i>
          演唱会
        </router-link>
        <router-link to="#">
          <i></i>
          话剧舞台
        </router-link>
        <router-link to="#">
          <i></i>
          体育赛事
        </router-link>
        <router-link to="#">
          <i></i>
          儿童亲子
        </router-link>
      </p>
      <p class="mt25">
        <router-link to="#">
          <i></i>
          全部分类
        </router-link>
        <router-link to="#">
          <i></i>
          活动
        </router-link>
        <router-link to="#">
          <i></i>
          永乐说
        </router-link>
        <router-link to="#">
          <i></i>
          我的
        </router-link>
      </p>
    </div>
    <!-- 谢春花链接 -->
    <div class="first-pay-first">
      <router-link to="/subject">
        <img src="https://static.228.cn/upload/2019/06/21/1561085435056_e4a0_m1.jpg" alt />
      </router-link>
    </div>
    <!-- 列表组件 -->
    <Homelist :recommendlist="tuijian" :gymList="gymList" :cur="cur" @abc="bcd" />
  </div>
</template>
<script>
import Banner from '../../components/Banner'
import Homelist from '../../components/Homelist'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Main',
  data() {
    return {
      cur: 0
    }
  },
  components: {
    Banner,
    Homelist
  },
  computed: {
    // ...mapState('home', ['bannerList', 'recommendlist', 'gymList']),
    ...mapState('city', ['bannerList', 'tuijian', 'gymList', 'dizhi'])
  },
  methods: {
    // ...mapActions('home', ['getrecommendlist', 'getgymList']),
    ...mapActions('city', ['getCityType', 'getCityVenue']),
    bcd(a) {
      this.cur = a
    }
  },
  created() {
    // this.getrecommendlist()
    // this.getgymList()
    this.getCityType()
    this.getCityVenue()
  }
}
</script>
<style lang="scss">
.main-head {
  height: 48px;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
  padding: 4px 15px 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-city {
    width: 65px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    i {
      font-size: 20px;
      margin-left: 8px;
    }
  }
  .main-search {
    position: relative;
    input {
      position: relative;
      width: 285px;
      height: 34px;
      line-height: 34px;
      font-size: 13px;
      border: none;
      text-align: center;
      border-radius: 100px;
    }
    i {
      position: absolute;
      top: 10px;
      left: 110px;
      font-size: 18px;
      font-weight: bolder;
      color: #ff2959;
    }
  }
}
.main-title-nav {
  margin: 25px 20px;
  height: 135px;
  p {
    display: flex;
  }
  a {
    flex: 1;
    text-align: center;
    color: rgb(123, 129, 135);
    i {
      display: block;
      width: 36px;
      height: 36px;
      margin: auto;
    }
  }
  .mt25 {
    margin-top: 25px;
    a:nth-child(1) i {
      background: url('../../assets/imges/icon.png') 0 -870px no-repeat;
      background-size: 75px;
    }
    a:nth-child(2) i {
      background: url('../../assets/imges/icon.png') 0 -914px no-repeat;
      background-size: 75px;
    }
    a:nth-child(3) i {
      background: url('../../assets/imges/icon.png') 0 -956px no-repeat;
      background-size: 75px;
    }
    a:nth-child(4) i {
      background: url('../../assets/imges/icon.png') 0 -1002px no-repeat;
      background-size: 75px;
    }
  }
}
.main-title-nav p:nth-child(1) {
  a:nth-child(1) i {
    background: url('../../assets/imges/icon.png') 0 -690px no-repeat;
    background-size: 75px;
  }
  a:nth-child(2) i {
    background: url('../../assets/imges/icon.png') 0 -736px no-repeat;
    background-size: 75px;
  }
  a:nth-child(3) i {
    background: url('../../assets/imges/icon.png') 0 -780px no-repeat;
    background-size: 75px;
  }
  a:nth-child(4) i {
    background: url('../../assets/imges/icon.png') 0 -824px no-repeat;
    background-size: 75px;
  }
}
.first-pay-first {
  margin: 20px;

  img {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
