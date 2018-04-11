<template>
  <div class="mymain">
    <app-header></app-header>
    <app-mains></app-mains>
    <!-- <app-banner></app-banner> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "../Main/Header";
import AppFooter from "../Main/Footer";
import AppMains from "../Main/Main";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppMains,
    AppFooter,
  }
};
</script>
<style lang="scss" scoped>
.mymain {
  display: flex;
  flex-direction: column;
  height: 5.68rem;
  justify-content: space-between;
}
</style>
