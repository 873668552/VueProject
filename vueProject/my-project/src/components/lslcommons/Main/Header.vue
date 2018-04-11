<template>
  <header class="header">
    <h1 class="nav-search">
      <!-- <button id="searchbtn" type="button">aa</button> -->
      <input id="searchput" type="text">
    </h1>
    <div class="nav-right">

    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  dara() {
    return {
      message: "hello"
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  background: aquamarine;
  width: 100%;
  height: 0.5rem;
  padding: 0.07rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  .nav-search {
    display: flex;
    #searchput {
      height: 0.36rem;
      width: 2.72rem;
    }
  }
  .nav-right {
    float: right;
  }
}
</style>