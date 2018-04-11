<template>
 <div class="banner swiper-container">
     <div class="swiper-wrapper">
         <div class="swiper-slide" v-for ='banner in banners' :key="banner.id">
             <img :src="banner.imageUrl" alt="加载超时">
         </div>
     </div>
     <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "AppBanner",
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getBanner() {
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
    this.getBanner();
  },
  updated() {
    //实例化让它转动
    new Swiper(".banner", {
      pagination: {
        //小点
        el: ".swiper-pagination",
         clickable :true,
      },
      loop:true,
      autoplay: true,
    });
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 1.5655rem;
  background: rgb(127, 255, 180);
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
