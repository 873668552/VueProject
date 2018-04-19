<template>
  <div id="personinfo">
    <top-div></top-div>
    <con-div ></con-div>
  </div>
</template>

<script>
// 头部
import TopDiv from './sonComp/top.vue'
import conDiv from './sonComp/condiv.vue'
export default {
  name:'Regist',
  components:{
      TopDiv,
      conDiv
  }
}
</script>

<style lang="scss" scoped>
@mixin setFlex($dir:0,$bg:0){
    display: flex;
    @if($dir!=0){
        flex-direction: column;
    }
    @if($bg!=0){
        background: $bg
    }
}
#personinfo{
    @include setFlex(1 );
    width: 100vw;
    height: 100vh;
}
</style>
