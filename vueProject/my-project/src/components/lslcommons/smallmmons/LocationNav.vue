<template>
    <div class="LocationNav">
        <router-link class="my_loc" v-for="loc in locnav" :key="loc.id" :to = "loc.path" >
          <img :src="loc.font" alt="加载中">
          <i>{{loc.title}}</i>
        </router-link>      
    </div>
</template>

<script>

export default {
  name: "AppLocaltionNav",
  data() {
    return {
      locnav: [
        {
          id: 1,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163707_21277.png",
          title: "万五区",
          path: "wwq"
        },
        {
          id: 2,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163523_81132.png",
          title: "368品牌",
          path: "wwq"
        },
        {
          id: 3,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163720_96681.png",
          title: "区域代理",
          path: "wwq"
        },
        {
          id: 4,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163656_10245.png",
          title: "新人体验",
          path: "wwq"
        },
        {
          id: 5,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163631_66524.png",
          title: "315区",
          path: "wwq"
        },
        {
          id: 6,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163552_13181.png",
          title: "便利店",
          path: "wwq"
        },
        {
          id: 7,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163644_17405.png",
          title: "直购专区",
          path: "wwq"
        },
        {
          id: 8,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163812_35620.png",
          title: "联盟商家",
          path: "wwq"
        },
        {
          id: 9,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163859_54982.png",
          title: "元旦专区",
          path: "wwq"
        },
        {
          id: 10,
          font:
            "http://www.yunzhuan.net.cn//att/thum/image/20180304/20180304163824_83160.png",
          title: "秒杀专区",
          path: "wwq"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.LocationNav {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.my_loc {
  display: flex;
  flex-direction: column;
  width: 0.64rem;
  height: 0.7359rem;
  font-size: 0.14rem;
  align-items: center;
  justify-content: space-around;
  > img {
    width: 0.3839rem;
    height: 0.3839rem;
  }
}
// .mynews {
//   width: 100%;
//   border-top: 1px solid #f6f6f6;
//   display: flex;
// }
</style>
