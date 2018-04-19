<template>
  <div id="goods">
     <h2>{{tarStr}}</h2>
      <!-- <li v-for="(val,id) in this.arr" :key="id">val</li> -->
      <!-- {"id":1,"name":"苹果手机","price":1888,"curPrice":"1000",
      "summer":"我们的最爱",
      "type":"plsX","img":"../img/1.jpg"}, to="/shopping"
      <router-link :to="{ path: 'register', query: { plan: 'private' -->
      <ul>
          <!-- <router-link tag="li" v-for="(val) in arr" :to="{path:'/shopping',query:{plan:val}}"  :key="val.id" :ind='val.id'>
              <p>{{val.name}}</p>
              <img :src='val.img' alt="">
              <p>价格：{{val.price}}</p>
          </router-link> -->
          <li tag="li" @click="jump" v-for="(val) in arr"   :key="val.id" :ind='val.id'>
              <p>{{val.name}}</p>
              <img :src='val.img' alt="">
              <p>价格：{{val.price}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
let hub = new Vue();
export default {
  name:'goods',
  props:['tarStr'],
  data(){
      return {
          arr:[],
      }
  },
  computed:{
      ...mapState({
          showGood:(state)=>{  return state.zrpStor.showGood}
      })
  },
  created(){
    this.arr = this.showGood
  },
  methods:{
      jump(e){
          let tar = e.target || e.srcElement,
          ID;
          
          if(tar.nodeName.toUpperCase() == 'LI'){
                console.log(111, tar.ind ,tar,)
                ID = tar.getAttribute('ind');
          }else{
              ID =tar.parentNode.getAttribute('ind');
            //   console.log(111, tar.parentNode.ind, tar.parentNode,tar.parentNode.getAttribute('ind'))
          }
        this.$router.push({path:'/shopping',query:{id:ID}})// get
        // this.$router.push({path:'/shopping',params:{key:1}});//类似post传参
    }
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
                display: flex;
                flex-direction: column;
                width: 45vw;
                height: 45vw;
                background: orange;
                margin: 2vw;
                >img{
                    width:35vw;
                    height:35vw;
                    display: block;
                    align-self: center;
                }
            }
        }
    }
</style>

