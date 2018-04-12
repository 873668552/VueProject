<template>
  <div>
    <div class="mynews" v-for="mynew in mynews" :key="mynew.key" >
          <p><img :src="mynew.myimg" alt="加载中"></p>
          <h2>
            <p>{{mynew.content1}}</p><span>{{mynew.time1}}</span>
            <p>{{mynew.content2}}</p><span>{{mynew.time2}}</span>
          </h2>
      </div>
  </div>   
</template>

<script>
export default {
  name: "Appmynews",
  data() {
    return {
      mynews: [
        {
          id: 1,
          myimg: "http://www.zhongyunshop.com/public/m/img/yy_info.png",
          content1:'关于2018年清明节放假',
          time1:'2018-04-04',
          content2:'关于3.15整顿违规商家',
          time2:'2018-03-21',
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
    .mynews{
        border-top: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        >p{
            display: flex;
            width: 0.65rem;
            height: 0.48rem;
            padding: 0.1rem;
            border-right: 1px solid #e6e6e6;
            >img{
                width: 100%;
                height: 100%;
            }
        }
       >h2{
           flex: 1;
           display: flex;
           font-size: 0.12rem;
           flex-wrap: wrap;
           justify-content: space-between;
           >p{
               width: 1.68rem; 
               text-align: left;
               padding-left: 0.1rem;
           }
           >span{
               width: 0.72rem;
               padding-right: 0.1rem;
           }
       } 
    }
</style>
