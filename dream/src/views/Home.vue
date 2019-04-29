<template>
  <div class="home">
    <!-- banner -->
    <div class="banner swipslider" id="banner">
      <slider ref="slider" :options="sliderinit">
        <!-- slideritem wrapped package with the components you need -->
        <slideritem v-for="(item,index) in someList" :key="index" :style="item.style"></slideritem>
      </slider>
    </div>
    <!-- screen -->
    <screen :order="orders" />
  </div>
</template>

<script>

// 轮播图
import { slider, slideritem } from 'vue-concise-slider'
import screen from '@/components/screen/Screen'
export default {
  name: 'home',
  data () {
    return {
      sliderinit: {
        currentPage: 0,
        autoplay:3000,
        loop:true,
        slidesToScroll:1,
        duration: 300
      },//轮播图配置信息
      someList:[
        {
          style:'background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 1.86rem'
        },
        {
          style:'background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 1.86rem'
        }
      ],//轮播图配置列表
      userInfo:'',//存贮个人信息,
      orders:'',//订单信息
      mainpool:'',//梦想池
      trade:'',//小生意
    }
  },
  created(){
    this.GetUserInfo(this);
  },
  components: {
    slider,
    slideritem,
    screen,
  },
  methods:{
    GetUserInfo(self){
      WebApp.Init('wxc5216d15dd321ac5',//appid
        function(result,data){//result:请求状态,data 请求结果
            console.log(Options.GetUserInfo());
            self.userInfo = Options.GetUserInfo();
            // 注册信息
            /**
             * @params self:Vue实例
             * @params self.userInfo:个人信息
             */
            self.Register(self,self.userInfo)
        }
      )
    },
    Register(self,userInfo){
      /**
       * @parmas userInfo:个人信息
       */
      TD_Request('us','enter',{uid:userInfo.openid,nickname:userInfo.nickname,headicon:userInfo.headimgurl},function(code,data){
        console.log(data)
        self.orders = data.orders;
      },function(code,data){
        console.log(data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .banner{
    width: 6.8rem;
    height: 2.5rem;
    margin: 0 auto;
  }
</style>

