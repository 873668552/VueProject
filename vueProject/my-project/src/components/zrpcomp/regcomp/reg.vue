<template>
 <transition name="fold">
    <div id="reg" class="regcon">
      <!-- 账号 -->
      <p>注册页面</p>
      <p><label for="">账号:</label><input type="text" v-model="idnumber"><span id="showSpan"></span></p>
      <p><label for="">密码:</label><input type="text" v-model="idnumber1"><span id="showSpan1"></span></p>
      <p><label for="">确认密码:</label><input type="text" v-model="idnumber2"><span id="showSpan2"></span></p>
      <p><label for="">验证码:</label><input id="inpShow" disabled :value="randomStr" type="text"><span>获取</span></p>
      <p><label for="">输入验证码:</label><input  value="" type="text" v-model="idnumber3"><span id="showSpan3"></span></p>
      <button @click="change">确定</button>
      <a href="/">></a>
    </div>
 </transition>
</template>

<script>
export default {
  name:'reg',
  props:['flag'],
  data(){
    return {
      username:'',
      password:'',
      confirmword:'',
      idnumber:'',
      idnumber1:'',
      idnumber2:'',
      idnumber3:'',
      showSpan:'',
      showSpan1:'',
      showSpan2:'',
      showSpan3:'',
      flagAjax:false
    }
  },
  methods:{
    getDom(){
    this.showSpan = document.getElementById('showSpan');
    this.showSpan1 = document.getElementById('showSpan1');
    this.showSpan2 = document.getElementById('showSpan2');
    this.showSpan3 = document.getElementById('showSpan3');
   },
    change(){
      // 传参
      // this.flag({name:"123",password:"123"});
      this.judge();
      this.getMongo();
    },
    judge(){
      // 验证码
      if(this.idnumber3===''){
        this.showSpan3.innerHTML ='验证码为空';
      }else if(this.randomStr === this.idnumber3){
        this.showSpan3.innerHTML ='ok';
      }else{
        this.showSpan3.innerHTML='验证码错误';
      }
      // 账户
      if(this.idnumber===''){
        this.showSpan.innerHTML ='账户为空';
      }else{
      }
      // 密码
      if(this.idnumber1===''){
        this.showSpan1.innerHTML ='密码为空';
      }else{
      }
      // 确认
      if(this.idnumber2=== this.idnumber1){
      }else{
        this.showSpan2.innerHTML ='密码不一致';
      }
      if(this.showSpan.innerHTML === '' && this.showSpan1.innerHTML === '' &&
      this.showSpan2.innerHTML === '' && this.showSpan3.innerHTML === 'ok'){
        this.flagAjax = true;
      }else{
        this.flagAjax = false;
      }
    },
    getMongo(){
      if(this.flagAjax){
        let obj = {username: this.idnumber,  password: this.idnumber1}
        // ajxa请求
        // alert( getList4user( {username: this.idnumber,  password: this.idnumber1} ) )
        if( getList4user( obj ) ){
          this.flag(obj)
        }
      }
    }
  },
  computed:{
    randomStr:function(){
      return getIdString();
    }
  },
  created(){
    console.log(typeof this.flag)
  },
  mounted(){
   let inps = document.getElementById('reg').getElementsByTagName('input');
   for(var i = 0,len = inps.length ; i < len; i++ ){
     if(i == 3){
       continue;
     }
     // 添加聚焦事件
     onFn(inps[i]);
   }
   this.getDom();
  }
  
}
// 本地数据存储
function getList4user(obj){
  var localArr = localStorage.getItem('userArr') ? JSON.parse(localStorage.getItem('userArr')) : []
  let flag = false;
  if(localArr.length == 0){
  }else{
    for(var i = 0 ,len = localArr.length; i < len; i++){
      if(obj.username == localArr[i][Object.keys(localArr[i])[0]] ){
        flag = true;
        break
      }
    }
  }

  if(flag){
    return false
  }else{
    localArr.push(obj )
    localStorage.setItem('userArr',JSON.stringify( localArr ));
    return true
  }
}

function getInhundrend(){
  let num = parseInt( Math.random()*100 );
  while(!(num >= 65 && num <= 90)){
    num = parseInt( Math.random()*100 );
  }
  return num;
}
function getIdString(){
  return String.fromCharCode( getInhundrend() ) + parseInt( Math.random()*10 ) +
  String.fromCharCode( getInhundrend() ) + parseInt( Math.random()*10 ) + '';
}
function onFn(val){
  val.onfocus = function(e){
    let tar = e.target || e.srcElement,
    tarSpan =tar.parentElement.getElementsByTagName('span')[0] ;
    tarSpan.innerHTML = '';
  }
}
</script>

<style scoped lang='scss'>
  #reg{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: #f6f6f6;
  }
  .fold-enter-active,.fold-leave-active{
    transform: all .5s;
  }
  .regcon{
    position: relative;
    >p{
      display: flex;
      margin-bottom: 3vh;
      background: #fff;
      box-shadow: inset 5px 5px #888888 2px;
      >label,span{
        flex: 2;
        padding-right: 5vw;
        text-align: right;
        line-height: 10vw;
        cursor: pointer;
      }
      >input{
        height: 10vw;
        flex: 3;
        border: 1px solid #888;
      }
      >span{
        flex:2
      }
    }
    #inpShow{border:none;text-align: center}
    >p:nth-of-type(1){
      height: 20vh;line-height: 20vh;font-size: 32px;
      justify-content: center;
      width: 200%;
      border-bottom: 1px solid black;
      transform-origin: 0 0 ;
      transform: scale(0.5);
      background: skyblue;
    }
    p:nth-of-type(4){
      border: none;
    }
    >button{
      margin-top: 20vh;
      width: 90vw;
      height: 10vw;
    }
    >a{
      display: block;
      width:6vw;
      height: 6vw;
      position: absolute;
      color: #fff;
      font-size: 6vw;
      top: 5vw;
      left: 0;
      cursor: pointer;
    }
  }
</style>


