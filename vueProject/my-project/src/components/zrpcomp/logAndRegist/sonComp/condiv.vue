<template>
  <div id="mainDiv">
      <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'condiv',
  // 计算属性
  computed:{
      ...mapState({
          title:(state)=>{return state.zrpStor.title}
      })
  },
  beforeMount(){
    // this.$router.push('/regist/log')
    if(this.title == ''){
        this.$router.push('/regist/log')
    }else{
        this.$router.push('/regist/info')
    }
    
  },
  updated(){
      console.log(11111111,localStorage.username)
  }
}
</script>

<style lang="scss" scoped>
    #mainDiv{
        flex: 8;
    }
</style>
