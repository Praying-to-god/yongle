<template>
  <!-- 购票详情页 -->
  <div class="ticket">
    <div class="head">
      <div class="head_bg">
        <div class="bgImg">
          <div class="bgImgBg"></div>
        </div>
      </div>
      <div class="head-icon">
          <a href="#" class="back">
            <span class="iconfont icon-xiangzuoyuanjiantouzuojiantouxiangzuomianxing"></span>
          </a>
          <div>
            <i class="iconfont icon-xingxing"></i>
            <a href="#">
              <i class="iconfont icon-fenxiang1"></i>
            </a>
          </div>
      </div>
      <div class="head-con">
        <div class="left">
          <img src="//static.228.cn/upload/2019/05/10/AfterTreatment/1557476738683_m7w4-0.jpg" alt="">
          <i>售票中</i>
        </div>
        <div class="right">
          <h3>第二十三届深圳大剧院艺术节 俄罗斯格林卡国家模范歌剧芭蕾舞剧院芭蕾舞剧 《安娜•卡列尼娜》 </h3>
          <b>
            <em>￥</em>100 -
            <em>￥</em>880 
          </b>
        </div>
      </div>  
    </div>
    <div class="pad">
      <div class="tiemore">
          <a href="#">
            <p>
              <i class="iconfont icon-weizhi"></i>
              <span>2019.10.25-2019.10.26</span>
            </p>
            <p>
              <i class="iconfont icon-shijian"></i>
              <span>深圳大剧院</span>
            </p>
            
          </a>
          <em class="iconfont icon-xiangyou"></em>
      </div>
      <h4>注意事项</h4>
      <div class="need-attention">
        a)演出详情仅供参考，具体信息以现场为准；</br>b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；</br>c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。</br>d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
      </div>
      <h4>演出详情</h4>
      <div class="details" :style="isShow?classA:classB">
        <p style="text-indent:2em;"><strong>演出时长：约90分钟（以现场为准）</strong></p><p style="text-indent:2em;"><strong>演出简介</strong></p><p style="text-indent:2em;">俄罗斯格林卡国家模范歌剧芭蕾舞剧院</p><p style="text-indent:2em;">俄罗斯格林卡国家模范歌剧芭蕾舞剧院是继格林卡之后的车里雅宾斯克歌剧芭蕾舞剧院于1956年9月29日成立。芭蕾舞团的第一批艺术家都毕业于列宁格勒学校，他们凭着共同的风格，执着的态度及经典的表演，创建了一个芭蕾舞团并很快闻名全国。就当时的表演艺术水平已使格林卡芭蕾剧院在国家舞蹈界中占据了领先位置。</p><p style="text-indent:2em;">一年一度的“Ekaterina Maksimova奖章” 芭蕾舞节在车里雅宾斯克歌剧和芭蕾舞剧院的舞台上举行。剧院的演出受到来自俄罗斯，美国，中国，德国，奥地利，英国，法国，韩国等60多个城市的观众的赞赏。近年来，剧院制作了Minkus的“La Bayadere”和“Paquita”， Puni的“La Esmeralda”和Carl Orff的“Carmina Burana”等芭蕾舞剧，获得了巨大的成功。</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;">芭蕾舞剧《安娜·卡列尼娜》介绍</p><p style="text-indent:2em;">《安娜·卡列尼娜》芭蕾舞剧改编自“文学泰斗”托尔斯泰的同名文学名著，讲述了十九世纪俄罗斯上流社会贵妇安娜·卡列尼娜曲折而充满悲剧色彩的人生，是一部充满内在张力的作品。它精准地把握了人物的心理情感冲突并将其展现给观众。舞剧抛开列夫•托尔斯泰小说中的故事副线，将重点聚焦于“安娜-卡列宁-沃伦斯基”三人的感情纠葛，成功描绘了一个因为爱的激情与本能而脱胎换骨的女性。</p><p style="text-indent:2em;">俄罗斯联邦艺术家维拉·阿布卓用舞蹈的语言勾勒出一个女人的重生。对爱的激情和渴求促使女主人公奋起反抗当时社会道德准则，让她的母性之爱沦丧，让她的内心世界坍塌，使她义无反顾地挥霍她的激情并最终为之毁灭。舞作述说的不仅仅是过去的时代，剧目中所蕴含的永恒的情感话题也能在当今观众中产生共鸣。令人难忘的编舞以及舞者的高超技艺，极具冲击力地再度诠释了文豪托尔斯泰的伟大著作。</p><p style="text-indent:2em;">此次推出的《安娜 卡列尼娜》是由俄罗斯格林卡国家模范歌剧芭蕾舞剧院专为中国巡演而创作，此据编舞是马林斯基首席舞蹈艺术家、俄罗斯联邦艺术家维拉阿布卓娃，她曾两次被授予圣彼得堡“金色极至”最高剧院奖！自2010年以来，一直是马林斯基剧院的首席舞蹈艺术家和编舞。</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;"><strong>剧情介绍</strong></p><p style="text-indent:2em;">芭蕾舞剧《安娜·卡列尼娜》借助一个著名的悲剧故事，将爱情与欲望、伪善与欺骗、绝望与死亡呈现在舞台上，将人所面临的最极致的情绪都浓缩于一部芭蕾舞剧中。</p><p style="text-indent:2em;"> &nbsp; &nbsp;这部芭蕾舞剧借古喻今，表演的是永恒情感内容，与当今现实生活有着显而易见的相似之处，与观众们产生共鸣。这是一部集精湛表演艺术和诗歌般璀璨于一体的令人惊叹的剧目；一部让广大喜爱经典剧的观众叹为观止的典范之作；一部巨幅展现了十九世纪下半叶圣彼得堡和莫斯科贵族们的礼仪和生活的剧目。</p><p style="text-indent:2em;">编剧将神秘人物以人物的精神内心世界来反映，并作为整个芭蕾舞剧的主旋律来呈现。这有助于理解角色的复杂关系，他们未实现的希望和梦想，他们对未来的渴望以及对现在的感知。编舞者没有强迫观众得出任何结论，而只是推动人们从不同寻常的角度去思考这部世界名著。</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;">四大亮点</p><p style="text-indent:2em;">1、列夫·托尔斯，泰著名小说改编</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;">《安娜·卡列尼娜》是俄国作家列夫·托尔斯泰创作的长篇小说，也是其代表作品。</p><p style="text-indent:2em;">矛盾的时期、矛盾的制度、矛盾的人物、矛盾的心理，使全书在矛盾的漩涡中颠簸。这部小说是新旧交替时期紧张惶恐的俄国社会的写照。</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;">2、现代技术与传统经典结合</p><p style="text-indent:2em;">本次中国巡演将首次融入现代灯光科技，结合华丽的实景，完美呈现沙皇时期的时代背景；</p><p style="text-indent:2em;">淋漓尽致的体现了这部剧的精华，充分展示了安娜的爱情至上和她的悲剧。</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;">3、芭蕾舞剧罕见剧目</p><p style="text-indent:2em;">《安娜·卡列尼娜》由于剧目的特殊性，世界上仅有少数剧院演出。</p><p style="text-indent:2em;">俄罗斯克格林卡国家模范歌剧-芭蕾舞剧院作为为数不多编排此剧本的芭蕾舞团，此次来华巡演更是不容错过。</p><p style="text-indent:2em;"><br /></p><p style="text-indent:2em;">4、舞美焕然一新</p><p style="text-indent:2em;">本次俄罗斯克格林卡国家模范歌剧-芭蕾舞剧院来华巡演，特地为中国观众精心创编。从服装设计、灯光音响、音乐创作等将焕然一新，为中国巡演带来最期待的呈现</p><p style="text-indent:2em;"><br /></p><p style="text-align:center"><img src="http://static.228.cn/upload/Image/201905/1557476622054_9174_x.jpg" alt="1" width="382" height="505" border="0" hspace="0" vspace="0" title="1" style="width:382px;height:505px;" /></p><p style="text-indent:2em;"><br /></p><p><br /></p>
      </div>
      <div class="tc">
        <span @click="switchDepartment">{{isShow?'收起':'查看更多'}}</span>
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
      isShow: false
    }
  },
  computed: {
    // ...mapState('ticket', ['ticket'])待处理
  },
  methods: {
    switchDepartment() {
      this.isShow = !this.isShow
    },
    ...mapActions('ticket', ['getTicket'])
  },
  created() {
    this.getTicket()
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
        i {
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
          background: linear-gradient(to right, #ff7e6f, #ff2959);
          box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
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
    background: url(//static.228.cn/upload/2019/05/10/AfterTreatment/1557476738683_m7w4-0.jpg)
      center center / 50% 800px no-repeat;
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
