<template>
  <div>
    <form id="formbox">
        <p><span>姓名</span><input type="text" v-model="username"><span></span></p>
        <p><span>密码</span><input type="text" v-model="password"><span></span></p>
        <div><button @click="sendLog">登录</button><router-link tag= 'button' to='/regist/reg'>注册</router-link></div>
    </form>
  </div>
</template>

<script>
let username = '';
import {mapState,mapActions} from 'vuex'
export default {
  name:'log',
  data(){
      return{
          message:'log',
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
      ...mapActions(['sendMsg']),
      sendLog(){
        //   console.log(123)
        username = this.username;
        this.sendMsg({name:this.username,word:this.password,getRes})
    },
  },
  
  created(){
      if(this.title === ''){
          this.isLog = true;
      }else{
          this.isLog = false;
      }
  }
}

function getRes(res){
    if(!res){
        alert('登录失败')
    }else{
        localStorage.username = username
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
// @import url("https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" );
</style>
