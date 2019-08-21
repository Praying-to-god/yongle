<template>
  <!-- 账号管理 -->
  <div class="profile">
    <div class="title">
      <router-link to="/person">
      <span class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing"></span>
       </router-link>
      <h2>账号管理</h2>   
      <i></i>   
    </div>
    <div class="con">
      <label>
        <b>昵称
        <span style="padding-left:52px">X******</span>
        </b>
      </label>
      <label>
        <b>注册手机
        <span>X******</span>
        </b>
      </label>
       <label>
        <b>注册邮箱
        <span>无</span>
        </b>
      </label>
      <label>
        <b>收货地址</b>
        <p>
          <a href="#">
          <em>未认证</em>
          <i class="iconfont icon-xiangyou"></i>
          </a>
        </p>
      </label>
      <label v-for="item in mes" :key="item.id">
        <b>{{item.name}}</b>
        <p>
          <a href="#">
          <i class="iconfont icon-xiangyou"></i>
          </a>
        </p>
      </label>
    </div>
    <div class="bot">
      <button>安全退出</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mes: [
        { id: '1', name: '收货地址' },
        { id: '2', name: '常用购票人' },
        { id: '3', name: '修改密码' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.profile {
  height: 100%;
  b {
    color: #7b8187;
    span {
      color: black;
    }
  }
  .title {
    height: 10%;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
    a .iconfont {
      position: relative;
      left: 20px;
      color: #ff3a56;
    }
  }
  .con {
    height: 80%;
    padding: 0 6%;
    label {
      @include border-bottom;
      display: flex;
      height: 12%;
      align-items: center;
      font-size: 16px;
      justify-content: space-between;
      a {
        color: #ff3a56;
      }
    }
    span {
      padding-left: 20px;
    }
    em {
      padding-right: 10px;
    }
  }
  .bot {
    @include border-top;
    height: 50px;
    display: flex;
    button {
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      width: 94%;
      text-align: center;
      margin: 2px auto;
      border-radius: 28px;
      color: white;
      align-items: center;
    }
  }
}

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
      color: #ff5f16;
    }
  }
}
</style>
