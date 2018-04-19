<template>
  <div id="topDiv">
      <p>
          个人中心
      </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'top',
  data(){
      return{
          message:'top'
      }
  },
  // 计算属性
  computed:{
      ...mapState({
          title:(state)=>{return state.zrpStor.title}
      })
    // 
  },
  beforeMount(){
      console.log(this)
      console.log(this.title)
      if(this.title === ''){
          this.message = '登录'
      }else{
          this.message = this.title;
      }
  }
}
</script>

<style lang="scss" scoped>
    #topDiv{
        display: flex;
        flex:1;
        justify-content: space-around;
        flex-direction: column;
        >p{
            font-size: 16px;
            height: 16;
        }
    }
</style>
