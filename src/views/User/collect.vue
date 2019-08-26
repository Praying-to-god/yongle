<template>
  <div class="collect">
    <!-- 我的收藏 -->
    <div class="title">
      <router-link to="/person">
        <span
          class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing"
        ></span>
      </router-link>
      <h2>我的收藏</h2>
      <i></i>
    </div>
    <ul class="myLove">
      <li>
        <div class="left">
          <img
            src="//static.228.cn/upload/2019/08/20/AfterTreatment/1566282023896_u8s1-0.jpg!t90x120.jpg"
            alt=""
          />
          <em>售票中</em>
        </div>
        <div class="right">
          <h4>红壶相声社•精品相声大会红点星空剧场专场演出（11月）</h4>
          <p>
            <span>2019.11.02-2019.11.16</span>
            <span>红点星空软件园剧场</span>
          </p>
          <b><em>¥50</em>&nbsp;起</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '~@/assets/styles/common/mixin.scss';
.collect {
  height: 100%;
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
  .myLove {
    padding: 0 20px;

    li {
      display: flex;
      justify-content: space-between;
      padding-bottom: 16px;
      @include border-bottom;
    }

    .left {
      position: relative;
      height: 120px;
      box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1),
        0px 2px 8px 0px rgba(58, 64, 69, 0.1);
      border-radius: 8%;
      overflow: hidden;
      img {
        border-radius: 8%;
      }
      em {
        display: block;
        height: 20px;
        line-height: 20px;
        color: #fff;
        position: absolute;
        top: 0;
        font-size: 12px;
        font-weight: bold;
        border-radius: 12px 0;
        padding: 0 4px;
        left: -2px;
        text-align: center;
        background: linear-gradient(to right, #ff6fb2, #ff2959);
        box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      }
    }
    .right {
      width: 230px;
      h4 {
        font-size: 16px;
        line-height: 24px;
      }
      p {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        color: #999ea3;
        line-height: 18px;
        font-size: 14px;
      }
      b {
        font-size: 14px;
        color: #797d82;
        padding-top: 10px;
        display: block;
      }
      em {
        color: #ff3a56;
      }
    }
  }
}
</style>
