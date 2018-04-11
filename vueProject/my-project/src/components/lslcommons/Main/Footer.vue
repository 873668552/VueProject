<template>
 <footer class="footer">
   <router-link v-for="btn in btns" :key="btn.id" :to="btn.path">{{btn.title}}</router-link>
   <!-- <a :href="'#'+btn.path" v-for = 'btn in btns' :key="btn.id">
     {{btn.title}}
   </a> -->
 </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      btns: [
        {
          id: 1,
          title: "首页",
          path: "/main"
        },
        {
          id: 2,
          title: "分类",
          path: "/classify"
        },
        {
          id: 3,
          title: "购物车",
          path: "/shopping"
        },
        {
          id: 4,
          title: "订单",
          path: "/order"
        },
        {
          id: 5,
          title: "个人中心",
          path: "/regist"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  background: yellow;
  height: 0.48rem;
  width: 100%;
  justify-content: space-around;
  > a {
    display: block;
    width: 0.64rem;
    font-size: 0.02rem;
  }
  .router-link-active{
    color: orange;
  }
}
</style>
