<template>
 <div class="smbanner swiper-container">
      <h2>商品推荐</h2>
      <div  class="my_sw swiper-wrapper">
        <div class="swiper-slide" v-for ='banner in banners' :key="banner.id">
             <img :src="banner.imageUrl" alt="加载超时">
         </div>
      </div>
    <!-- 如果需要分页器 -->
      <div class="sp swiper-pagination"></div>
</div>

</template>

<script>
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "AppSmallbanner",
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getSmallbanner() {
      this.$http
        .get("/mz/v4/api/billboard/home?", {
          params: {
            __t: Date.now()
          }
        })
        .then(res => {
          this.banners = res.data.data.billboards;
        });
    }
  },
  created() {
    this.getSmallbanner();
  },
  updated() {
    //实例化 让其转动
    new Swiper(".smbanner", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: ".sp",
        type: "bullets"
        //type: 'fraction',
        //type : 'progressbar',
        //type : 'custom',
      },
      loop:true,
      autoplay: true,
    });
  }
};
</script>
<style lang="scss" scoped>
.smbanner {
  width: 100%;
  height: 1.66rem;
  > h2 {
    text-align: left;
    height: 0.38rem;
    font-size: 0.14rem;
  }
  .my_sw {
    img {
      width: 0.96rem;
      height: 0.96rem;
    }
  }
  .sp{
    bottom: 15px;
  }
}
</style>
