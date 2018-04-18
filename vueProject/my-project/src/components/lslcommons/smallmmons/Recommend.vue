<template>
  <section id="recommend">
    
       <a href=""><img src="http://www.zhongyunshop.com/public/m/img/imgtitle.jpg" alt=""></a>
        <div class="My_recommend" v-for="creat in creature" :key = 'creat.id'>
              <img v-lazy="creat.cover.origin" alt="">
              <p>{{creat.name}}</p>            
        </div>
        
 </section>
    
</template>
<script>
export default {
  name: "ShowThing",
  data() {
    return {
      creature: []
    };
  },
  methods: {
    getSing() {
      this.$http
        .get("/lb/v4/api/film/now-playing", {
          params: {
            __t: Date.now(),
            page: 1,
            count: 1000,
          }
        })
        .then(res => {
        //   console.log(res);
          this.creature = res.data.data.films;
        });
    }
  },
  created() {
    this.getSing();
  }
};
</script>

<style lang="scss" scoped>
#recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.My_recommend {
  width: 1.47rem;
  height: 2.03rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img{
      width: 1.47rem;
      height: 1.47rem;
  }
}
</style>
