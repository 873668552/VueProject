<template>
  <main class="main">  
     <!-- <router-view></router-view> -->
      <div class="my-mains">      
          <app-banner></app-banner>
      </div>
  </main>
</template>

<script>
import AppBanner from "../smallmmons/Banner";
export default {
  name: "AppMains",
  components: {
    AppBanner
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: darkblue;
  flex: 1;
  overflow: scroll;
  .my-mains {
    display: flex;
    flex-direction: column;    
  }
}
</style>
