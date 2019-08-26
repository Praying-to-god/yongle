<template>
  <!-- 购票详情页 -->
  <div class="ticket">
    <div class="head">
      <div class="head_bg">
        <div class="bgImg">
          <div
            class="bgImgBg"
            :style="{
              backgroundImage: 'url(//static.228.cn' + ticket.PBIGIMG + ')'
            }"
          ></div>
        </div>
      </div>
      <div class="head-icon">
        <p class="back" @click="goBack">
          <span
            class="iconfont icon-xiangzuoyuanjiantouzuojiantouxiangzuomianxing"
          ></span>
        </p>
        <div>
          <!-- 点击事件 喜欢功能 -->
          <i
            class="iconfont"
            :class="xXing ? 'icon-xingxing' : 'icon-starIcon'"
            :style="xXing ? '' : 'color:#e66aa4'"
            @click="isLive"
          ></i>
          <a href="#">
            <i class="iconfont icon-fenxiang1"></i>
          </a>
        </div>
      </div>
      <div class="head-con">
        <div class="left">
          <img :src="`//static.228.cn${ticket.PBIGIMG}`" alt />
          <i
            class="tip"
            :class="
              ticket.STATUS === 0
                ? 'gradual-red'
                : ticket.STATUS === 1
                ? 'ticket-state-blue'
                : ticket.STATUS === 3
                ? 'gradual-gold'
                : 'gradual-gray'
            "
            >{{
              ticket.STATUS === 0
                ? '售票中'
                : ticket.STATUS === 1
                ? '预定'
                : ticket.STATUS === 3
                ? '待定'
                : '售完'
            }}</i
          >
        </div>
        <div class="right">
          <h3>{{ ticket.NAME }}</h3>
          <b>
            <em>￥</em>
            {{ ticket.MINPRICE }} -
            <em>￥</em>
            {{ ticket.MAXPRICE }}
          </b>
        </div>
      </div>
    </div>
    <div class="pad">
      <div class="tiemore">
        <a href="#">
          <p>
            <i class="iconfont icon-weizhi"></i>
            <span>
              <b>{{ ticket.BEGINDATE }}</b>
              -&nbsp;
              <b>{{ ticket.ENDDATE }}</b>
            </span>
          </p>
          <p>
            <i class="iconfont icon-shijian"></i>
            <span>{{ ticket.VNAME }}</span>
          </p>
        </a>
        <em class="iconfont icon-xiangyou"></em>
      </div>
      <h4>注意事项</h4>
      <div class="need-attention" v-html="ticket.PRECAUTIONS">
        {{ ticket.PRECAUTIONS }}
      </div>
      <h4>演出详情</h4>
      <div
        class="details"
        :style="isShow ? classA : classB"
        v-html="ticket.INTRODUCTION"
      >
        {{ ticket.INTRODUCTION }}
      </div>
      <div class="tc">
        <span @click="switchDepartment">{{
          isShow ? '收起' : '查看更多'
        }}</span>
      </div>
      <div class="answer">
        <span>FAQ</span>
        <i class="iconfont icon-xiangyou"></i>
      </div>
      <div class="answer">
        <span>在线问答</span>
        <i class="iconfont icon-xiangyou"></i>
      </div>
      <div class="home-foot">
        <div class="top">
          <p>最新资讯</p>
          <p>合作招商</p>
          <p>联系我们</p>
        </div>
        <div class="bto">
          <i class="iconfont icon-shangbiao"></i>
          <em>永乐票务</em>
        </div>
      </div>
    </div>
    <div class="real-btn">
      <i class="iconfont icon-kefu"></i>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Ticket',
  data() {
    return {
      classA: 'height:auto',
      classB: 'height: 65px;',
      isShow: false,
      xXing: true
    }
  },
  computed: {
    ...mapState('ticket', ['ticket']),
    ...mapState('show', ['ticket'])
  },
  methods: {
    ...mapActions('ticket', ['getTicket']),
    ...mapActions('show', ['getDetail']),
    //控制演出详情更多内容的显示隐藏
    switchDepartment() {
      this.isShow = !this.isShow
    },
    //点击返回上一页
    goBack() {
      this.$router.back()
    },
    //点击喜欢
    isLive() {
      // 弹出框
      this.$dialog.alert({
        message: this.xXing ? '提示：\n喜欢成功' : '提示：\n取消喜欢成功'
      })
      this.xXing = !this.xXing
      // 获取收藏需要传递的信息
      // console.log(this.ticket)
    }
  },
  created() {
    this.getTicket()
    this.getDetail(this.$route.query.ticket)
  }
}
</script>

<style lang="scss">
.ticket {
  background: #f5f6f7;
  .pad {
    padding: 0 16px;
  }
  .head {
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    .head-icon {
      position: relative;
      top: 26px;
      display: flex;
      justify-content: space-between;
      z-index: 999;
      padding: 0 16px;
      .iconfont {
        font-size: 26px;
        color: #fff;
      }
      .back span {
        color: #55585f;
      }
      div a .iconfont {
        font-size: 20px;
        margin-left: 20px;
      }
    }
    .head-con {
      display: flex;
      position: relative;
      margin-top: 70px;
      justify-content: space-between;
      z-index: 999;
      padding: 0 16px;
      .left {
        img {
          width: 120px;
          height: 160px;
          border-radius: 8%;
        }
        .tip {
          display: block;
          height: 20px;
          line-height: 20px;
          color: #fff;
          font-style: normal;
          position: absolute;
          top: 0;
          font-size: 12px;
          font-weight: bold;
          border-radius: 12px 0;
          padding: 0 4px;
          left: 15px;
          text-align: center;
        }
        .ticket-state-blue {
          background: linear-gradient(to right, #3dd9c1, #00a0c2);
        }
        .gradual-red {
          background: linear-gradient(to right, #ff6fb2, #ff2959);
          box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
        }
        .gradual-gray {
          background: linear-gradient(to left, #8da0a9, #d5dde1);
        }
        .gradual-gold {
          background: linear-gradient(to left, #5052bb, #0a18d8);
        }
      }
      .right {
        h3 {
          color: white;
          width: 200px;
          line-height: 18px;
          font-size: 14px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          margin-top: 6px;
        }
        b {
          display: inline-block;
          margin-top: 60px;
          font-weight: 600;
        }
      }
    }
  }
  .tiemore {
    background-color: #fff;
    padding: 6px;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    a {
      color: #5f646a;
    }
    i {
      color: #e6eaed;
    }
    .icon-weizhi {
      font-size: 30px;
      position: relative;
      top: 4px;
    }
    .icon-shijian {
      padding: 0 7px;
    }
    em {
      display: flex;
      align-items: center;
      color: #ffa2b1;
    }
    b {
      width: 90px;
      overflow: hidden;
      display: inline-block;
      height: 20px;
      line-height: 28px;
    }
  }
  h4 {
    color: #000;
    font-size: 22px;
    font-weight: bold;
    padding: 20px 0;
  }
  .need-attention {
    line-height: 22px;
    letter-spacing: 1px;
    font-size: 14px;
    color: #7b8187;
  }
  .details {
    height: 65px;
    overflow: hidden;
    width: 100%;
    line-height: 22px;
    letter-spacing: 1px;
    font-size: 14px;
    color: #7b8187;
    p {
      margin-bottom: 20px;
    }
    img {
      width: 100% !important;
      height: auto !important;
    }
  }
  .tc {
    text-align: center;
    margin-bottom: 20px;
    span {
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      background-clip: text;
      color: transparent;
    }
  }
  .answer {
    padding: 16px;
    border-radius: 12px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-weight: bold;
    .iconfont {
      color: #ffa5b3;
    }
  }
  .home-foot {
    font-size: 14px;
    padding-bottom: 60px;
    .top {
      display: flex;
      color: #5f646a;

      justify-content: space-around;
      padding: 10px 20px;
    }
    .bto {
      text-align: center;
      padding-bottom: 16px;
      color: #ccd1d6;
    }
  }
  .head_bg {
    top: 0;
    position: absolute;
    height: 190px;
    width: 100%;
    overflow: hidden;
    z-index: 1;
    border-radius: 0 0 18% 18%;
  }
  .bgImg {
    position: absolute;
    content: '';
    z-index: 1;
    height: 250px;
    top: -30px;
    left: -75%;
    width: 250%;
    overflow: hidden;
  }
  .bgImgBg {
    background: center center / 50% 800px no-repeat;
    position: absolute;
    content: '';
    -webkit-filter: blur(10px);
    filter: blur(10px);
    z-index: 1;
    height: 300px;
    top: -1rem;
    left: 0;
    width: 100%;
  }
  .real-btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0px 0px 15px 0px rgba(95, 100, 106, 0.2);
    display: flex;
    button {
      flex: 1;
      text-align: center;
      height: 44px;
      border-radius: 22px;
      letter-spacing: 2px;
      font-size: 14px;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      -webkit-box-orient: vertical;
      text-align: center;
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      margin: 10px;
      color: white;
    }
    i {
      width: 44px;
      height: 44px;
      color: #ff2959;
      border-radius: 50%;
      box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
      margin: 10px;
      text-align: center;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
