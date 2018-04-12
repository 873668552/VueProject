<template>
  <div id="list">
      <!-- 列表页 -->
      <typelist v-if='isType'
        @goto='gotoGoods'></typelist>
        <!-- 详情页 -->
      <goods v-else :tar-str='tarStr'></goods>
  </div>
</template>

<script>
// 引入两个组件 
import typelist from './typelist'
import goods from './goods'

export default {
  name:'list',
  components:{
      typelist,goods
  },
  data(){
      return {
          isType:true,
          tarStr:''
      }
  },methods:{
      gotoGoods(res){
          this.isType = false;
          this.tarStr = res;
      }
  }
}
</script>

<style scoped>
    #list{
        flex:1;
        background: red;
        display: flex;
    }
</style>
