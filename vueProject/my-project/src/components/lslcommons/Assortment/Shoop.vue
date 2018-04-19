<template>
  <h2>购物页</h2>
</template>

<script>
export default {
  // 路由传参 ,传一个商品id
  created(){
    console.log(this.$router.currentRoute.query)
  },
}
</script>

<style lang="scss" scoped>

</style>
