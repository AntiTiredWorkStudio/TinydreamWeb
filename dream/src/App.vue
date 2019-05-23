<template>
  <div id="app">
    <router-view/>
    <router-view name="payInfo"></router-view>
    <router-view name="share"></router-view>
    <router-view name='poolinfo'></router-view>
    <router-view name="dream"></router-view>
    <router-view name="luckyinfo"></router-view>
    <router-view name="user"></router-view>
    <router-view name="clock"></router-view>
    <router-view name="phone"></router-view>
    <router-view name="auth"></router-view>
    <router-view name="help"></router-view>
    <router-view name='fill'></router-view>
    <router-view name="list"></router-view>
    <router-view name="friend"></router-view>
    <router-view name="payRecord"></router-view>
    <router-view name="cach"></router-view>
    <router-view name="question"></router-view>
    <router-view name="notice"></router-view>
    <router-view name="history"></router-view>
    <router-view name="historyinfo"></router-view>
    <router-view name="tool"></router-view>
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
    if(!ExistStorage("userInfo")){
      window.location.href = 'http://tinydream.ivkcld.cn/TInydreamWeb/dream'
    }

    // 分享
    if(GetStorage('share') == 'guide'){
      RemoveStorage('share')
      this.$router.push('/question')//分享--指引
    }else if(GetStorage('share') == 'clock'){
      RemoveStorage('share')
      this.$router.push('/clock')
    }else if(JSON.parse(GetStorage('share')).url == 'friend'){
      SaveStorage('share',JSON.stringify({opid:JSON.parse(GetStorage('share')).opid,type:JSON.parse(GetStorage('share')).type}))
      this.$router.push('/friend')
    }

    //end
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
/*
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
