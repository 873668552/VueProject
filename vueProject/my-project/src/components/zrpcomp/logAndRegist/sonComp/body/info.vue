<template>
  <div id="infoDiv">
    <div id="imgDiv"><img src="" alt=""></div>
    <ul>
        
    </ul>
  </div>
</template>

<script>
import { mapState , mapGetters,mapMutations,mapActions} from 'vuex'
import {CHANGE_USERNAME,CHANGE_PASSWORD,CHANGE_KEY} from '../../../../../store/zrpvuex/const'
export default {
  name:'log',
  data(){
      return{
          message:'log'
      }
  },
  computed:{
      ...mapState({
          test:(state)=>{return state.zrpStor.test},
          username:(state)=>{return state.zrpStor.username},
          password:(state)=>{return state.zrpStor.password}
      }),
      ...mapGetters(['getTest']),
      
  },
  
  methods:{
      // 注册同步修改方法
      ...mapMutations([CHANGE_USERNAME,CHANGE_PASSWORD,CHANGE_KEY]),
      // 注册异步修改方法去
      ...mapActions(['sendMsg']),
      action(){
          console.log()
      },
      changename(){
          this.$store.commit(CHANGE_USERNAME,'111')
          this.CHANGE_PASSWORD('aaa'),
        //   this.$store.dispatch('sendMsg')
          this.sendMsg({name:'haha',word:'hoho'})
      }
  },
  created(){
      console.log(this.$store.state.zrpStor.title)
  }
}
</script>

<style lang="scss" scoped>
.full{height:100%;display: flex;flex-direction: column;background: pink}
#infoDiv{
    @extend .full;
    >div{
        flex:1;
        background: orange;
    }
    >ul{
        flex:2;
        background: white
    }
}
</style>
