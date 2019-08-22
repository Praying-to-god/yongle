<template>
  <div>
    <h3 class="con-tit">
      <b @click="fn1(0)" :class="{active:cur==0}">推荐</b>
      <b @click="fn1(1)" :class="{active:cur==1}">场馆</b>
    </h3>
    <ul v-show="cur==0" class="recommend">
      <!-- 绑定点击事件 点击时跳转相关购票详情 -->
      <li v-for="(item,index) in recommendlist " :key="index"  @click="ticketD(item)">
          <img :src="`https://static.228.cn${item.PBIGIMG}`" alt />
          <b class="recommend-name">{{item.NAME}}</b>
          <span class="recommend-data">{{item.BEGINDATE.replace(/-/g,'.').substring(0,10)}}</span>
          <span class="recommend-price-one">
            <b class="recommend-price">¥ {{item.MINPRICE}}</b>起
          </span>
      </li>
    </ul>
    <ul v-show="cur==1" class="gym">
      <li v-for="(item,index) in gymList " :key="index">
        <a href="#">
          <img :src="`https://static.228.cn${item.IMG}`" alt />
          <b>{{item.VNAME}}</b>
          <span>{{item.ADDRESS}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Homelist',
  props: {
    cur: Number,
    recommendlist: Array,
    gymList: Array
  },
  methods: {
    ...mapMutations('ticket', ['setProductid']),
    fn1(a) {
      this.$emit('abc', a)
    },
    ticketD(item) {
      //跳转到相关购票页面
      this.$router.push({
        path: '/ticket',
        query: {
          ticket: item.PRODUCTID
        }
      })
      //点击保存相关购票页id到ticket仓库
      this.setProductid(item.PRODUCTID)
    }
  }
}
</script>
<style lang="scss">
.gym {
  margin: 0 20px;
  li {
    float: left;
    width: 48%;
    margin-right: 2%;
    position: relative;
    overflow: hidden;
    margin-bottom: 12px;
    height: 180px;
    a {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  img {
    width: 100%;
    height: 140px;
    border-radius: 10px;
  }
  b {
    font-size: 13px;
    margin: 5px 0 2px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: rgb(51, 51, 51);
    font-weight: bolder;
  }
  span {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #999;
    font-size: 11px;
  }
}
.con-tit {
  font-size: 22px;
  color: #b5bbc1;
  height: 40px;
  margin: 10px 20px 15px 20px;
  .active {
    color: #000;
  }
  b {
    margin-right: 10px;
    font-weight: bolder;
  }
}
.recommend {
  margin: 0 20px;
  li {
    float: left;
    width: 105px;
    height: 208px;
    margin-right: 6px;
    a {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  img {
    width: 105px;
    display: block;
    border-radius: 10px;
  }
  .recommend-name {
    font-size: 13px;
    height: 34px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: bolder;
  }
  .recommend-data {
    display: block;
    font-size: 11px;
    color: #999;
  }
  .recommend-price-one {
    display: block;
    font-size: 10px;
    color: #b5bbc1;
    margin-top: 2px;
    .recommend-price {
      font-size: 14px;
      color: #ff3a56;
      margin-right: 5px;
      font-weight: bolder;
    }
  }
}
</style>
