<template>
  <!-- 影片列表页 -->
  <div class="subject">
    <div class="subject-head">
      <img src="https://static.228.cn/upload/2019/06/21/1561085418197_z8x2_m1.jpg!t640x260.jpg" alt />
      <div class="head-icon">
        <router-link to="/main">
          <i class="gobacks"></i>
        </router-link>
      </div>
    </div>
    <div class="subject-content">
      <h4 class="tc">2019谢春花【无声叛逆】巡回演出</h4>
      <div class="tl">
        <p>愿你也一样，有坚定的叛逆，拒绝世界变得无聊和扭曲；</p>
        <p>愿你不一样，与平庸不一样，与妥协不一样。</p>
        <p>“我与我周旋久，宁做我。”徘徊之后，你也做了一样的选择吗？</p>
        <p>谢春花2019巡演——无声叛逆，讲述生活，看见生命。</p>
        <p>内心巨响，如此表达，为懂得的人唱。</p>
      </div>
    </div>
    <div>
      <div class="subject-list">
        <a href="#" class="goods-con" v-for="(item,index) in list" :key="index">
          <div class="left">
            <img :src="`https://static.228.cn${item.PSMILLIMG}`" />
            <i class="gradual-red tip tip-grabSeat">售票中</i>
          </div>
          <div class="right">
            <b class="name">{{item.NAME}}</b>
            <span class="spanone">{{item.SHOWDATE}}</span>
            <span class="spantwo">{{item.VNAME}}</span>
            <span class="spanthree">
              <b class="red">{{item.MINPRICE}} - {{item.MAXPRICE}}元</b>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'Subject',
  data() {
    return {
      list: []
    }
  },
  created() {
    request.get('/api/server/subject/detail-xiechunhua0621.json').then(res => {
      console.log(res)
      this.list = res.data.subjectProductList
    })
  }
}
</script>

<style lang="scss">
.subject-list {
  padding: 20px;
}
.goods-con {
  display: block;
  margin-bottom: 15px;
  border-bottom: 1px solid #fafafb;
  padding-bottom: 15px;
  overflow: hidden;
  color: #333;
  .left {
    position: relative;
    float: left;
    width: 85px;
    height: 113px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
    i {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      height: 20px;
      line-height: 20px;
      color: #fff;
      font-style: normal;
      font-size: 11px;
      font-weight: bold;
      border-radius: 10px 0;
      padding: 0 5px;
      text-align: center;
      background-origin: url('../../assets/imges/icon.png');
      background-position: 0 -2419px;
      background-image: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
    }
  }
  .right {
    width: 235px;
    margin-left: 15px;
    float: left;
    .name {
      height: 40px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-weight: bold;
    }
    .spanone {
      display: block;
      color: #999ea3;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 10px 0 2px 0;
    }
    .spantwo {
      display: block;
      color: #999ea3;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
    }
    .spanthree {
      display: block;
      color: #999ea3;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
      margin-top: 10px;
      .red {
        color: #ff3a56;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}

.subject-head {
  width: 100%;
  height: 190px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .head-icon {
    i {
      position: absolute;
      background: url('../../assets/imges/icon.png') 0 -3454px no-repeat;
      left: 16px;
      top: 10px;
      width: 40px;
      height: 31px;
      display: block;
      background-size: 150px;
      z-index: 11;
    }
  }
}
.subject-content {
  margin: 20px;
  .tc {
    font-size: 17px;
    color: #000;
    margin-bottom: 15px;
    text-align: center;
  }
  .tl {
    text-align: left;
    p {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 2px;
      color: #7b8187;
    }
  }
}
</style>
