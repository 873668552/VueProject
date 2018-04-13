<template>
  <div id="typelist">
      <div v-for="(val,ind) in lis" :key="ind">
        <h2>{{val[0]}}</h2>
        <ul id="showul">
            <li @click="jumpGood" v-for="(value , id) in val[1]" :key="id">{{value}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
// 引入axios
import Vue from 'vue'
import axios from 'axios'
export default {
  name:'typelist',
  data(){
      return {
          lis:[],
          listr:''
      }
  },
  methods:{
      // 点击单个商品的事件
      jumpGood(){
          var e = arguments[0] || window.event,
          tar = e.target || e.srcElement;
          // 触发父组件绑定的事件
          this.$emit('goto',tar.innerText)
      }
  },
  created(){
      // 请求
      axios('http://10.9.153.48:3000/data').then((res)=>{
          this.lis = res.data;
      })
  }
}

</script>

<style scoped lang='scss'>
@mixin AddStyle($flex:0,$dir:0,$just:0,$bg:0,$overflow:0){
    @if($flex != 0){flex: #{$flex}}
    @if($dir != 0){flex-direction: column}
    @if($just != 0){justify-content: $just}
    @if($bg != 0){background: $bg}
    @if($overflow != 0){overflow: $overflow}
}
    #typelist{
        @include AddStyle(1, 1, space-around,white ,auto );
        >div{
            flex:1
        }
    }
    #showul{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10vw;
        >li{
            width: 30vw;
            height: 10vw;
            margin: 1vw;
            background:pink;
            text-align: center;
            line-height: 10vw;
        }
    }
</style>
