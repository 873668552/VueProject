<template>
  <div>
    <form id="formbox">
        <p><span>姓名</span><input type="text" v-model="username"><span></span></p>
        <p><span>密码</span><input type="text" v-model="password"><span></span></p>
        <div><button @click="sendLog">注册</button></div>
    </form>
  </div>
</template>

<script>
let username = ''
import {mapState,mapActions,mapMutations} from 'vuex'
import {CHANGE_KEY} from '../../../../../store/zrpvuex/const'
export default {
  name:'reg',
  data(){
      return{
          message:'reg',
          isLog:false,
          username:'',
          password:''
      }
  },
  //计算属性
  computed:{
      ...mapState({
           title:(state)=>{return state.zrpStor.title}
      })
  },
  // fangfa 
  methods:{
      ...mapActions(['sendMsg','regUser']),
      ...mapMutations([CHANGE_KEY]),
      sendLog(){
        //   console.log(123)
        username = this.username;
        this.regUser({name:this.username,word:this.password,getRes})
    },
  },
  created(){
      this.CHANGE_KEY({title:'注册'})
  }
  
}

function getRes(res){
    console.log(res)
    if(!res){
        alert('注册失败')
    }else{
        localStorage.username = username;
        location.href = '?#/regist/info'
    }
}
</script>

<style lang="scss" scoped>
#formbox{
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    >p{
        margin-top: 10px;
        display: flex;
        >span{
            flex:1;
        }
        >input{
            flex:2
        }
    }
    >div{
        padding: 35px 20vw;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
}
</style>
