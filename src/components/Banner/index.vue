<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  @click="ticketD(img)">
        <img :src="`https://static.228.cn${img.IMG}`" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>

    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { mapMutations } from 'vuex'
export default {
  name: 'Banner',
  props: {
    imgs: Array,
    pagination: {
      type: Boolean,
      default: true
    },
    navigation: Boolean
  },
  methods: {
    ...mapMutations('ticket', ['setProductid']),
    initSwiper() {
      /* 实例轮播图 */
      let swiper = new Swiper(this.$el, {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: this.pagination
          ? {
              el: '.swiper-pagination'
            }
          : {},

        navigation: this.navigation
          ? {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          : {}
      })
      Swiper.use({
        swiper
      })
    },

    //点击轮播图片 跳转相关详情
    ticketD(img) {
      this.$router.push({
        path: '/ticket',
        query: {
          ticket: img.URL
        }
      })
      //点击保存相关购票页id到ticket仓库
      this.setProductid(img.URL)
    }
  },

  updated() {
    this.initSwiper()
  }
}
</script>
<style lang="scss">
.swiper-container {
  height: 152px;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #ff2959;
  }
}
</style>
