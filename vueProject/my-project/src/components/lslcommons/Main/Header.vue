<template>
  <header class="header">
    <router-link pag='h2' v-for='pat in mypath' :key="pat.id" :to="pat.path" class="nav-search">
      <!-- <button id="searchbtn" type="button">aa</button> -->
      <input placeholder="男士商务正库" id="searchput" type="text">
      <i></i>
    </router-link>
    <div class="nav-right">
       <i class="fa fa-user-circle"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      mypath: [
        {
          id: 1,
          path: "/product"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 0.5rem;
  padding: 0.07rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-search {
    display: flex;
    position: relative;
    > i {
      position: absolute;
      top: 0.1rem;
      left: 0.07rem;
      width: 0.17rem;
      height: 0.15rem;
      background: url(http://www.zhongyunshop.com/public/m/img/yy_search.png)
        no-repeat;
      background-size: 100% 100%;
    }
    #searchput {
      height: 0.36rem;
      width: 2.72rem;
      background: #f6f6f6;
      border: none;
      border-radius: 0.05rem;
      padding-left: 0.4rem;
      font-size: 0.14rem;
    }
  }
  .nav-right {
    font-size: 0.24rem;
  }
}
</style>