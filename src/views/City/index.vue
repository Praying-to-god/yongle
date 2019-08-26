<template>
  <!-- 城市列表页 -->
  <div class="city-list">
    <div class="title">
      <div @click="ret">
        <span
          class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing"
        ></span>
      </div>
      <h3>选择演出城市</h3>
      <i></i>
    </div>
    <div class="city-con">
      <div class="left" ref="leftBox">
        <!-- <div class="current_city">
          <h4>当前城市</h4>
          <span class="active">{{this.cityName}}</span>
        </div> -->
        <h4>热门城市</h4>
        <div class="hot_city">
          <span>全国</span>
          <!-- <span
            v-for="i in hotCity"
            :key="i.CITYJX"
            @click="choiceHot(i)"
            :class="{'active': i.JXNAME == cityName}"
          >{{i.JXNAME}}</span>-->
          <span v-for="i in hotCity" :key="i.CITYJX" @click="choiceHot(i)">{{
            i.JXNAME
          }}</span>
        </div>
        <h4>更多城市</h4>
        <ul class="more_city">
          <li
            v-for="item in cityList"
            :key="item.py"
            :ref="'item-' + item.py"
            @click="choice(item.list)"
          >
            <ul class="more_con">
              <i class="more_title">{{ item.py }}</i>
              <li
                v-for="city in item.list"
                :key="city.CITYJX"
                @click="dianji(city)"
              >
                {{ city.CITYNAME }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li @click="istop">#</li>
          <li v-for="i in cityList" :key="i.py" @click="search(i.py)">
            {{ i.py }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'City',
  data() {
    return {
      cityName: '深圳'
    }
  },
  computed: {
    ...mapGetters('city', ['cityList']),
    ...mapState('city', ['hotCity', 'tuijian'])
  },
  methods: {
    ...mapActions('city', ['getCities', 'getCityType']),
    ...mapMutations('city', ['setCityjx', 'setFconfigid', 'clearcities']),
    // 点击左侧字母右侧滚动到相应位置
    search(py) {
      let itemLi = this.$refs[`item-${py}`][0]
      let t = itemLi.offsetTop - 36
      this.$refs['leftBox'].scrollTop = t
    },
    istop() {
      this.$refs['leftBox'].scrollTop = 0
    },
    // 获取点击更多城市信息
    choice(list) {
      //点击相应城市 改变当前城市
      let cityName = list[0].CITYNAME
      this.cityName = cityName
      // 点击将城市缩写与场馆编号存储到仓库
      let cityId = list[0].CITYJX
      let venueId = list[0].FCONFIGID
      this.setCityjx(cityId)
      this.setFconfigid(venueId)
    },
    //点击返回按钮
    ret() {
      this.clearcities()
      this.getCityType()
      this.$nextTick(() => {
        this.$router.push({ path: 'main' })
      })
    },
    //点击更多城市跳转
    dianji(city) {
      this.cityName = city.JXNAME
      let cityId = city.CITYJX
      let venueId = city.FCONFIGID
      this.setCityjx(cityId)
      this.setFconfigid(venueId)

      this.getCityType()
      this.$nextTick(() => {
        this.$router.push({ path: 'main' })
      })
    },
    // 获取点击热门城市信息
    choiceHot(city) {
      this.cityName = city.JXNAME
      let cityId = city.CITYJX
      let venueId = city.FCONFIGID
      this.setCityjx(cityId)
      this.setFconfigid(venueId)
      this.getCityType()
      this.$nextTick(() => {
        this.$router.push({ path: 'main' })
      })
    }
  },
  created() {
    this.getCities()
  }
}
</script>

<style lang="scss">
.city-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9fafa;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 20px;
    .iconfont {
      position: relative;
      left: 8px;
      color: #ff3a56;
    }
  }
  .city-con {
    display: flex;
    flex: 1;
    overflow: hidden;
    .left {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      overflow-y: auto;
      padding-left: 10px;
      h4 {
        font-size: 16px;
        color: #999;
        margin: 20px 0;
      }
      .active {
        box-shadow: 0px 0px 12px 0px #ff3a56;
        color: #ff3a56;
      }
    }
    span {
      font-size: 18px;
      width: 26%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      display: inline-block;
      border-radius: 20px;
      background-color: white;
      color: #ff3a56;
    }
    .hot_city {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      span {
        color: #7b8187;
        margin-bottom: 10px;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      ul {
        width: 100%;

        li {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
    .current_city {
      span {
        width: auto;
        padding: 0 20px;
      }
    }
  }
  .more_city {
    .more_title {
      color: #797d82;
      height: 30px;
      line-height: 30px;
      box-sizing: border-box;
    }
  }
  .more_con i {
    padding-right: 6px;
    position: relative;
    top: 30px;
    font-size: 16px;
  }
  .more_con li {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color: #7b8187;
    padding-left: 18px;
  }
}
</style>
