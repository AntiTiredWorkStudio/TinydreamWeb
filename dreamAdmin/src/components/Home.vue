<template>
  <!-- 总组件 -->
  <div class="home">
    <van-row class="top van-hairline--bottom" type="flex" align="center" justify="center">
      <van-col class="topBar">
        <div class="left" @click="back" style="position:relative;z-index:999"></div>
        <span @click="back" style="position:relative;z-index:999">小梦想互助平台</span>
        <h3 class="center_title">{{title == '' ? '首页' : title}}</h3>
        <div class="right" @click="user" :style="{display:isuser}"></div>
        <van-popup v-model="show" class="btn" position="right" :overlay="false">
            <van-button type="danger" @click="logout">退出登录</van-button>
        </van-popup>
      </van-col>
    </van-row>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      show:false,
      // 页面标题
      title:'',
      state:0,
      isuser:'none'
    }
  },
  // components:{
  //   index
  // },
  updated(){
    if(this.$route.path == "/index/%E9%A6%96%E9%A1%B5/inline-block"){
      this.isuser = this.$route.params.state;
    }
    this.title = decodeURI(this.$route.params.title)
    if(this.state == 1){
       this.show=true
      this.isuer='inline-block'
      this.$router.push('/index/'+encodeURI('首页/inline-block'))
    }else{
      this.show=false
      this.isuer='none'
    }
  },
  methods: {
    title_back(data){
      console.log(data)
    },
    back(){
      this.$router.push('/'+encodeURI('首页'))
    },
    user(){
      this.show = !this.show
    },
    logout(){
      this.show = !this.show
      console.log(1)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home{
    width: 100%;
    .top{
      width: 100%;
      height: 15vw;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      position: fixed;
      top: 0;
      z-index: 999;
      .topBar{
        width: 92vw;
        height: 100%;
        line-height: 15vw;
        position: relative;
        span{
          font-size: 3vw;
        }
        .center_title{
          position: absolute;
          top: 0;
          text-align: center;
          width:100%;
          font-size: 4vw;
          color: #07c160;
        }
        .left{
          float: left;
          width: 10vw;
          height: 10vw;
          background: url(http://tdream.antit.top/image/titleLogo.png) no-repeat;
          background-size: 10vw 10vw;
          position: relative;
          top: 2.5vw;
          margin-right: 1vw;
          vertical-align: middle;
        }
        .right{
          z-index: 999;
          float: right;
          width: 9vw;
          height: 9vw;
          position: relative;
          top: 2vw;
          background: url(https://tdream.antit.top/image/miniLogo.jpg) no-repeat center;
          background-size: 9vw 9vw;
          border: 1px solid #eee;
          border-radius: 50%;
        }
        .btn{
          position: absolute;
          top: 20vw;
          right: -5vw;
          width: 25vw;
          height: 13.5vw;
        }
      }
    }
    .content{
      padding-top: 18vw;
      background-color: #fff;
      width: 100%;
    }
  }
</style>
