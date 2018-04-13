<template>
  <main class="main">  
     <!-- <router-view></router-view> -->
      <div class="my-mains">      
          <app-banner></app-banner>
          <app-loc></app-loc>
          <app-new></app-new>
          <app-smallbanner></app-smallbanner>
          <app-show></app-show>
          <app-smallbanner></app-smallbanner>
          <app-recommend></app-recommend>
      </div>
  </main>
</template>

<script>
import AppBanner from "../smallmmons/Banner";
import AppLoc from '../smallmmons/LocationNav'
import AppNew from '../smallmmons/LocationNews'
import AppSmallbanner from '../smallmmons/SmallBanner'
import AppShow from '../smallmmons/Exhibition'
import AppRecommend from '../smallmmons/Recommend'
export default {
  name: "AppMains",
  components: {
    AppBanner,
    AppLoc,
    AppNew,
    AppSmallbanner,
    AppShow,
    AppRecommend
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main {
  // background: darkblue;
  flex: 1;
  overflow: scroll;
  .my-mains {
    display: flex;
    flex-direction: column;    
  }
}
</style>
