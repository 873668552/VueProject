<template>
  <div id="log" ref="logDiv">1111</div>
</template>
<script>

export default {
  name:'log',
  mounted(){
    this.$refs.logDiv.onclick = ()=>{
      // return false;
      alert(1)
    }
  }
}
</script>

<style scoped lang='scss'>
.full{
  width:100%;
  height: 100%;
  display: flex;
  position: absolute;
  top:0;
  left: 0;
  // background: #fff;
}
#log{
    display: flex;
    @extend .full;
}
</style>


