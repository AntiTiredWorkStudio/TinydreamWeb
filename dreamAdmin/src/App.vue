<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home'
export default {
  name: 'App',
  components:{
    Home
  }
}
</script>

<style>
@import 'assets/icon/iconfont.css';
#app{
  width: 100%;
  height: calc(100% - 10px);
}
.active{
  color: #fff;
}
</style>
