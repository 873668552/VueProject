<template>
  <div>
      {{message}}
  </div>
</template>
<script>
export default {
  name:'first',
  data(){
      return {
          message:'hello vue'
      }
  }
}
</script>
// scoped 只能被当组件使用
<style scoped>

</style>

