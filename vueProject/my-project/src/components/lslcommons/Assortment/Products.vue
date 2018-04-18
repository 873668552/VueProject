<template>
  <div class="moviebox">
      <img v-lazy="arrs.cover.origin" alt="">
      <p>{{arrs.name}}</p>  
   </div>        
</template>

<script>


export default {
  props:['arrs'],
  components:{ 
  }
};
</script>

<style lang="scss" scoped>
 .moviebox {
      width: 1.47rem;
      display: flex;
      flex-direction: column;
      
      img {
        width: 100%;
        height: 1.9rem;
      }
    }

</style>
