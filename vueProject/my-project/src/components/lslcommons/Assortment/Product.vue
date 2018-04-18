<template>
  <div class="mysearch">
      <!-- <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
         <div v-show="isShow" class="mask animated my_search">
             <a href="mian"><i>{{searchs.font}}</i></a> 
             <input class="inpt1"  type="text" v-model="searchs.vue"  placeholder ="" >
             <input @click="mysearchs(isShow,'coming-soon')" type="button" value="即将上映" >
             <input @click="mysearchs(isShow,'now-playing')" type="button" value="热播中" >
         </div>
      </transition> -->
        <header class="jmdb"> 
            <a href="mian"><i>{{searchs.font}}</i></a> 
            <input class="inpt1" @click="btn(isShow)" v-model="searchs.vue" type="text">
            <input @click="mysearchs('coming-soon')" type="button" value="搜索" >
        </header>
         <main class="fenlei"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          infinite-scroll-immediate-check=true>  
            <app-pro :arrs="arrs" v-for="arrs in arr" :key="arrs.id" >
            </app-pro>  
         </main>  
 
    
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "../Main/Footer";
import AppPro from "../Assortment/Products";
import { Toast } from "mint-ui";
export default {
  name: "product",
  data() {
    return {
      isShow: true,
      searchs: {
        id: 1,
        vue: "",
        vue2: "搜索",
        typ: "text",
        font: "返回"
      },
      soon: "coming-soon",
      now: "now-playing",
      arr: [],
      loading: false,
      page: 8,
      count: 6,
      hasMore: true
    };
  },
  components: {
    AppFooter,
    AppPro
  },
  methods: {
    btn: function(isShow) {
      this.isShow = !isShow;
      this.searchs.vue = "";
    },
    mysearchs: function(play) {
      let toast = Toast({
        message: "加载中.......",
        position: "center",
        iconClass: "fa fa-cog fa-spin"
      });
      //this.isShow = !isShow;
      // console.log("bbb")
      this.loading = true;
      this.$http
        .get("/lb/v4/api/film/" + play, {
          params: {
            __t: Date.now(),
            page: this.page,
            count: this.count
          }
        })
        .then(res => {
          // this.arr = res.data.data.films;
          this.arr = this.arr.concat(res.data.data.films);
          let { current, total } = res.data.data.page;
          if (total - current <= 0) this.hasMore = false;
          this.loading = false;
          // console.log(res);
          toast.close();
        });
    },
    loadMore() {
      if (!this.hasMore) {
        Toast({
          message: "没有更多数据了.......",
          position: "bottom",
          duration: 2000
        });
        //没有更多数据了
        return false;
      }
      this.page++;
      console.log(this.page);
      this.mysearchs("coming-soon");
      // this.loading = true;
      // setTimeout(() => {
      //   let last = this.list[this.list.length - 1];
      //   for (let i = 1; i <= 10; i++) {
      //     this.list.push(last + i);
      //   }
      //   this.loading = false;
      // }, 2500);
    }
  }
};
</script>

<style lang="scss" scoped>
.mysearch {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5.68rem;
  .fenlei {
    flex: 1;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .inpt1 {
    flex: 1;
  }
  .mask {
    display: flex;
    // height: 0.4rem;
    > * {
      height: 0.4rem;
    }
  }
  .jmdb {
    display: flex;
    height: 0.4rem;
  }
}
</style>
