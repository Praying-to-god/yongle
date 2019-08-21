<template>
  <!-- 个人中心页 -->
  <div class="person">
      <div class="person-head">
        <div class="head-bg">
        </div>
         <div class="head-icon">
          <router-link to="/main">
            <span style="color:gray" class="iconfont icon-xiangzuoyuanjiantouzuojiantouxiangzuomianxing"></span>
          </router-link>
        </div>
        <div class="con">
          <div class="top">
            <div class="head-portrait">
              <img style="height:64px;border:2px solid #fff;border-radius:50%" src="../../assets/imges/head-photo.png" alt="">    
              <h4>user</h4>
            </div>
            <div class="right">
              <a href="#">
                <span class="iconfont icon-kefu1"></span>
              </a>
              <router-link to="/profile">
                <span class="iconfont icon-shezhi"></span>
              </router-link>
            </div>
          </div>
          <div class="bot">
            <span><a href="#">0张<br/>现金券</a></span>
            <span><a href="#">未启用<br/>电子钱包</a></span>
            <span><a href="#">0<br/>积分</a></span>
          </div>
        </div>
      </div>

      <div class="person-content">
        <div class="con-center">
            <a href="#">
              <i class="iconfont icon-dingdan"></i>
              <p>我的订单</p>
            </a>
            <a href="#">
              <i class="iconfont icon-weibiaoti--"></i>
              <p>现金券</p>
            </a>
        </div>
        <div class="con-bot">
          <ul>
            <li v-for="item in botList" :key="item.id">
               <router-link :to="item.href">
                <i class="iconfont" :class="[item.icon]"></i>
                <p>{{item.name}}</p>
               </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
 
</template>


<script>
export default {
  data() {
    return {
      botList: [
        { id: 1, name: '收货地址', icon: 'icon-dizhi', href: 'person' },
        { id: 2, name: '我的收藏', icon: 'icon-ziyuanc', href: 'person' },
        { id: 3, name: '我的登记', icon: 'icon-wodedengji', href: 'person' },
        { id: 4, name: '我的提问', icon: 'icon-icon-test', href: 'person' },
        { id: 5, name: '观影凭证', icon: 'icon-pingzheng', href: 'person' }
      ]
    }
  }
}
</script>


<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.person {
  a {
    color: black;
  }
  .head-icon {
    padding: 10px;
  }
  .iconfont {
    color: black;
    font-size: 22px;
  }
}
.person-head {
  width: 100%;
  position: relative;
  z-index: 1;
  .head-bg {
    background: url(../../assets/imges/head-poho-bg.jpg) no-repeat top;
    width: 100%;
    height: 70%;
    position: absolute;
    background-size: 120%;
  }
  .head-icon {
    position: relative;
  }
  .con {
    background: url(../../assets/imges/person-titBg.png) top no-repeat;
    background-size: 100%;
    position: relative;
    width: 100%;
    margin-top: 110px;
  }
  .head-portrait {
    text-align: center;
  }
  .right {
    float: right;
    position: relative;
    top: -50px;
    a {
      margin-right: 22px;
    }
  }
  .bot {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 10px;
    @include border-bottom;
    span {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
.person-content {
  .con-center {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 22px 0;
    @include border-bottom;
    p {
      margin-top: 14px;
    }
  }
  .con-bot {
    ul {
      overflow: hidden;
      text-align: center;

      li {
        width: 33%;
        float: left;
        padding: 20px 0;
      }

      p {
        margin-top: 14px;
      }
      a {
        color: #7b8187;
      }
    }
  }
}
</style>
