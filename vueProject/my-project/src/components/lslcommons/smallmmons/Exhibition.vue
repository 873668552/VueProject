<template>
  <section id="mycontents">
        <div class="My_shows" v-for="creat in creature" :key = 'creat.id'>
              <img :src="creat.cover.origin" alt="">
              <p>{{creat.name}}</p>            
        </div>
         <a href=""><img src="http://www.yunzhuan.net.cn//att/thum/image/20170630/20170630032536_97799.jpg" alt=""></a>
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
            count: 8
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
#mycontents {
  display: flex;
  flex-wrap: wrap;
}
.My_shows {
  width: 0.8rem;
  height: 1.05rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img{
      width: 0.64rem;
      height: 0.64rem;
  }
}
</style>
