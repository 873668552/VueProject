<template>
  <div id="con">
    <div id="person">
        <h2 @click="isLog = true">登录</h2>
        <h2 @click="isReg = true">注册</h2>
    </div>
    <div id="infoDiv">
        <div v-if="token || confirm">
            <p>{{user.username}}</p>
            <router-link to='#/info' tag="p">详细列表</router-link>
            <img  src='./1.jpg' alt="">
        </div>
        <div v-else>
            <p>我的信息</p>
            <img  src='' alt="">
        </div>
        <p>客服电话</p>
        <p>更多</p>
    </div>
    <reg v-if="isReg" :flag = 'change'></reg>
    <log v-if="isLog" :flag = 'change'></log>
 </div>
</template>

<script>
import reg from './reg'
import log from './log'
export default {
  name:'con',
  data(){
      return {
          isLog:false,
          isReg:false,
          token:false,
          confirm:true,
          user:{}
      }
  },
  components:{
      reg,log
  },
  methods:{
      change:function(obj){
          this.isLog = this.isReg = false;
          console.log(obj)
          confirm = true;
          user = obj;
          // 获取登录的值
      }
  },
  created(){
      this.token = localStorage.getItem('token') ? true:false;
      this.user = localStorage.getItem('logItem') ? JSON.parse(localStorage.getItem('logItem')) : {}
  }
}
</script>

<style scoped lang='scss'>
@mixin addFlex($dir:0,$just:0,$wrap:0,$flex:0,$bg:0){
    display: flex;
    @if($dir == 1){flex-direction: column}
    @if($just != 0){justify-content: $just}
    @if($wrap != 0){flex-wrap: wrap}
    @if($bg != 0){background: $bg}
    @if($flex != 0){flex:#{$flex}}
}
.myInfo{
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    height: 50vh;
}
#con{
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    >#infoDiv{
        @include addFlex(1,0 ,1 ,1 ,orange );
        >div{
            @extend .myInfo;
            >p{height: 8vh;line-height: 8vh;text-align: center}
            >img{
                display: block;
                width:20vh;height: 20vh;
                border-radius: 10vh;
                align-self: center;
                background: black;
            }
        }
        >p{
            height: 8vh;
            line-height: 8vh;text-align: center;
        }
    }
}
#person{
    display: flex;
    justify-content: space-between;
    width: 100%;
    h2{
        width: 49vw;
        height: 10vw;line-height: 10vw;text-align: center;
        background: pink;
    }
}
</style>
