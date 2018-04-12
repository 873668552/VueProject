<template>
 <footer class="footer">
   <router-link v-for="btn in btns" :key="btn.id" :to="btn.path">
     <i :class="btn.font"></i>
     {{btn.title}}
   </router-link>
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
          path: "/main",
          font: "fa fa-home"
        },
        {
          id: 2,
          title: "分类",
          path: "/classify",
          font: "fa fa-indent"
        },
        {
          id: 3,
          title: "购物车",
          path: "/shopping",
          font: "fa fa-shopping-cart"
        },
        {
          id: 4,
          title: "订单",
          path: "/order",
          font: "fa fa-file-text"
        },
        {
          id: 5,
          title: "个人中心",
          path: "/regist",
          font: "fa fa-user-o"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  height: 0.48rem;
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid #e2e2e2;
  > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 0.64rem;
    font-size: 0.12rem;
    > i {
      font-size: 0.24rem;
    }
  }
  .router-link-active {
    color: orange;
  }
}
</style>
