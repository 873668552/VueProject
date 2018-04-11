<template>
  <div class="mymain">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../Main/Header'
import AppBanner from '../Main/Banner'
import AppFooter from '../Main/Footer'
export default {
  name: 'Home',
  components: {
    AppBanner,
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss" scoped>
  .mymain{
    display: flex;
    flex-direction: column;
  }
</style>
