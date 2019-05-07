<template>
  <div id="app">
    <router-view/>
    <router-view name="payInfo"></router-view>
    <router-view name="share"></router-view>
    <router-view name='poolinfo'></router-view>
    <router-view name="dream"></router-view>
    <tab-bar v-if="istab"></tab-bar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar'
export default {
  name:'App',
  data () {
    return {
      istab:true,
    }
  },
  created(){
    console.error('End.vue尚未接入')
    let href = window.location.href;
    if(href.includes(''))
    if(this.$route.path != '/' && this.$route.path != '/clock' && this.$route.path != '/user'){
      this.istab = false;
    }else{
      this.istab = true;
    }
    this.$store.commit('uid',JSON.parse(GetStorage('userInfo')).openid)
  },
  methods:{
    
  },
  components:{
    TabBar:Tabbar
  },
  mounted(){
    this.$store.commit('uid',JSON.parse(GetStorage('userInfo')).openid)
  },
  watch:{
    $route(to,from){
      if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
        location.href = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/#' + to.path
      }
      this.$store.commit('uid',JSON.parse(GetStorage('userInfo')).openid)
      console.log(to.path,to)
      if(to.path != '/' && to.path != '/clock' && to.path != '/user'){
        this.istab = false;
      }else{
        this.istab = true;
      }
    }
  }
}
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
