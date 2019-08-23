<template >
    <div class="category-list" v-if="pagerMemorys.length !== 0">
        <ul class="category-list__ul">
            <!-- 添加点击事件 跳转相关购票详情 -->
            <li class="category-list__item" v-for="item in pagerMemorys" :key="item.isdate"  @click="ticketD(item)">
                <a href="#" class="goods-con">
                    <div class="left">
                        <img :src="pbgimgs[pagerMemorys.indexOf(item)]" :alt="item.name">
                        <i :class="sale(item.status)" class="tip">{{contxt(item.status)}}</i>
                    </div>
                    <div class="right">
                        <span v-html="item.name"></span>
                        <span>{{item.begindate===item.enddate?(item.begindate.replace(/-/g,'.')):(item.begindate.replace(/-/g,'.')+'~'+item.enddate.replace(/-/g,'.'))}}</span>
                        <span>{{item.vname}}</span>
                        <strong v-if="item.minprice!==''">{{parseInt(item.minprice)+'-'+item.maxprice+'元'}}</strong>
                    </div>
                </a>
            </li>
        </ul>
        <div class="lode-more" @click="loadMore"><span :style="{color: pageType== 0 ? '#FF2959' : '#000'}">{{pageType === 0 ? '查看更多':'以加载全部'}}</span></div>
    </div>
    <div v-else class="noneMeg">
        <img src="../../../public/ca.jpg" alt="">
        <p>没找到相关信息</p>
        <p>换个分类试试</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'categoryList',
    data(){
        return{
        }
    },
    props:{
        pagerMemorys:Array,
        pbgimgs:Array,
        pageType:Number,
        highLight:String
    },
    methods: {
        loadMore(){
            this.$emit("loadMore");
        },
        sale(a){
            return a==='0'?'gradual-red':(a==='1'?'ticket-state-blue':(a==='3'?'gradual-gold':'gradual-gray'))
        },
        contxt(a){
            return a==='0'?'售票中':(a==='1'?'预定':(a==='3'?'待定':'售完'))
        },
    ticketD(item) {
        this.$router.push({
            path: '/ticket',
            query: {
            ticket: item.productid
            }
        })
      //点击保存相关购票页id到ticket仓库
        this.setProductid(item.productid)
    }

    },
    //跳转到相关购票页面
    
}
</script>
<style lang="scss">
.category-list{
    width: 100%;
    padding:0 20px;
    box-sizing: border-box;
    .lode-more{
        width: 100px;
        height: 27px;
        line-height: 27px;
        text-align: center;
        border-radius: 10px;
        margin: auto;
        background: #fff;
        box-shadow: 0px 2px 6px 0px rgba(255, 58, 86, 0.2);
    }
    .red{
        color:red;
    }
    .category-list__ul{
        width: 335px;
        .goods-con{
            display: block;
            margin-bottom: 15px;
            border-bottom: 1px solid #fafafb;
            padding-bottom: 15px;
            overflow: hidden;
            color:#000;
        }
        .left{
            position: relative;
            float: left;
            width: 85px;
            height: 113px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
        }
        img{
            width:100%;
            position: absolute;
        }
        .tip{
            display: block;
            height: 20px;
            line-height: 20px;
            color: #fff;
            font-style: normal;
            position: absolute;
            top: 0;
            font-size: 11px;
            font-weight: bold;
            border-radius: 10px 0;
            padding: 0 5px;
            left: 0;
            text-align: center;
            // background-position: 0 -24.19rem;
        }
        .ticket-state-blue{
            background: linear-gradient(to right, #3dd9c1, #00a0c2);
        }
        .gradual-red{
            background: linear-gradient(to right, #ff7e6f, #ff2959);
            box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
        }
        .gradual-gray{
            background: linear-gradient(to left, #8da0a9, #d5dde1 );
        }
        .gradual-gold{
            background: linear-gradient(to left, #5052bb, #0a18d8 );
        }
        }
        .right{
            margin-left: 15px;
            float: left;
            width: calc(100% - 100px);
        }
        span:nth-of-type(1){
            height: 40px;
            line-height: 20px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-weight: bold;
            font-size: 14px;
            color:#000;
        }
        span:nth-of-type(2){
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 4px;
        }
        span:nth-of-type(3){
            font-size: 12px;
            margin-bottom: 10px;
        }
        span{
            display: block;
            color:#999ea3;
        }
        strong{
            color:#ff3a56;
            font-size: 14px;
            font-weight: bold;
        }
    }
    img {
      width: 100%;
      position: absolute;
    }
    .tip {
      display: block;
      height: 20px;
      line-height: 20px;
      color: #fff;
      font-style: normal;
      position: absolute;
      top: 0;
      font-size: 11px;
      font-weight: bold;
      border-radius: 10px 0;
      padding: 0 5px;
      left: 0;
      text-align: center;
    }
    .ticket-state-blue {
      background: linear-gradient(to right, #3dd9c1, #00a0c2);
    }
    .gradual-red {
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
    }
    .gradual-gray {
      background: linear-gradient(to left, #8da0a9, #d5dde1);
    }

.right {
    margin-left: 15px;
    float: left;
    width: calc(100% - 100px);
  }
  p {
    height: 40px;
    line-height: 20px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: bold;
    font-size: 14px;
  }
  span:nth-of-type(1) {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 4px;
  }
  span:nth-of-type(2) {
    font-size: 12px;
    margin-bottom: 10px;
  }
  span {
    display: block;
    color: #999ea3;
  }
  strong {
    color: #ff3a56;
    font-size: 14px;
    font-weight: bold;
  }

.noneMeg {
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 30px;
  text-align: center;
  img {
    width: 140px;
  }
  p:nth-of-type(1) {
    font-size: 14px;
    color: #999;
    font-weight: 900;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    color: #999;
  }
}
</style>
