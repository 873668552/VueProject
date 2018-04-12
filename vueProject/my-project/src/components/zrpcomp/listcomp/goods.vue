<template>
  <div id="goods">
     <h2>{{tarStr}}</h2>
      <!-- <li v-for="(val,id) in this.arr" :key="id">val</li> -->
      <ul>
          <li v-for="(val,id) in arr" :key="id"></li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
let hub = new Vue();
export default {
  name:'goods',
  props:['tarStr'],
  data(){
      return {
          arr:[],
      }
  },
  created(){
   
    this.__proto__.$http('http://localhost:3000/data/goods?key='+this.tarStr).then((res)=>{
        this.arr = res.data;
        console.log(res.data)
    })
  }
}
</script>

<style scoped lang='scss'>
    #goods{
        flex:1;
        background: pink;
        >h2{
            height: 10vw;
            line-height: 10vw;
            text-align: center;
            background: red;
        }
        >ul{
            display: flex;
            flex-wrap: wrap;
            >li{
                width: 45vw;
                height: 45vw;
                background: orange;
                margin: 2vw;
            }
        }
    }
</style>

