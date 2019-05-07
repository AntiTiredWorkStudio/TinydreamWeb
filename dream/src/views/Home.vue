<template>
  <div class="home">
    <div class="banner swipslider" id="banner">
        <slider ref="slider" :options="sliderinit">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in someList" :key="index" :style="item.style"></slideritem>
        </slider>
    </div>
    <screen :orders="orders" />
    <pool :pools="pools" />
    <p class="luck">
        <router-link to="/history" tag="span" style="text-decoration:underline">往期幸运者</router-link>
    </p>
    <rules />
    <!-- 客服&消息 -->
    <div class="icon_notice">
      <div class="left"></div>
      <div class="right">
        <div class="text ntext" style="font-size:6px">0</div>
      </div>
    </div>
    <!-- 小梦想中奖弹窗 -->
    <van-popup class="dream" v-model="isdaward">
      <div class="award">
        <div class="main">
          <p class="title">幸运提示</p>
          <p class="msg">
            恭喜您成为梦想互助20190312期幸运者，请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内给您颁发梦想互助金！
          </p>
          <div class="fbtn">
            <van-button type="primary" size="large" round>完善梦想</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 轮播图
import { slider, slideritem } from 'vue-concise-slider'
import screen from '@/components/index/screen/Screen'//首页公屏
import pool from '@/components/index/mainpool/Mainpool'//梦想池--生意池
import rules from '@/components/index/rules/Rules'//规则
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
          style:'background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem'
        },
        {
          style:'background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem'
        }
      ],//轮播图配置列表
      userInfo:'',//存贮个人信息
      orders:'',//订单
      pools:'',//梦想池--生意池
      isdaward:true,//小梦想弹窗
    }
  },
  components:{
    slider,
    slideritem,
    screen,
    pool,
    rules
  },
  created(){
    if(!ExistStorage("userInfo")){
      window.location.href = 'http://tinydream.ivkcld.cn/TInydreamWeb/dream'
    }else{
      this.Register(this,JSON.parse(GetStorage('userInfo')))
    }
  },
  methods:{
    // 信息注册
    Register(self,userinfo){
      TD_Request('us','enter',{uid:userinfo.openid,nickname:userinfo.nickname,headicon:userinfo.headimgurl},function(code,data){
        console.log(data);
        // 存储 uid
        self.$store.commit('uid',JSON.parse(GetStorage('userInfo')).openid)
        self.orders = data.buyinfo;//最近 8 条购买信息
        if(data.mainpool.length != 0){
          DreamPoolAnalysis(data.mainpool)
        }
        if(data.maintrade.length != 0){
          DreamPoolAnalysis(data.maintrade)
        }
        if(data.mainpool.length == 0 && data.maintrade.length != 0){
            var poolArr = [{"code":1,"mainpool":data.mainpool,"context":'暂无更多梦想池',"maintrade":data.maintrade}]
        }else if(data.mainpool.length != 0 && data.maintrade.length == 0){
            var poolArr = [{"code":2,"mainpool":data.mainpool,"context":'暂无更多项目',"maintrade":data.maintrade}]
        }else if(data.mainpool.length == 0 && data.maintrade.length == 0){
            var poolArr = [{"code":-1,"mainpool":data.mainpool,"context":'暂无更多项目',"tcontext":'暂无更多梦想池',"maintrade":data.maintrade}]
        }else {
            var poolArr = [{"code":0,"mainpool":data.mainpool,"context":'成功',"maintrade":data.maintrade}]
        }
        self.pools = poolArr
      },function(code,data){
        console.log(data);
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .home{
      padding-bottom: 2rem;
    }
    .banner{
        width: 6.8rem;
        height: 2.5rem;
        margin: 0 auto;
    }
    .luck{
        margin: 0.2rem auto 0; 
        color: #595959;
        font-size: 0.3rem;
        text-align: right;
        width: 6.8rem;
    }
    .icon_notice{
          width: 1.90rem;
          height: 0.68rem;
          background-color: rgba(0, 0, 0, .5);
          position: fixed;
          right: 0;
          top: 1.60rem;
          border-top-left-radius: 0.34rem;
          border-bottom-left-radius: 0.34rem;
          transform: translate(0,0);
          z-index: 999;
          .left{
            width: 0.44rem;
            height: 0.50rem;
            background: url(http://tdream.antit.top/image/secretary.png) no-repeat;
            float: left;
            margin-left: 0.32rem;
            margin-top: 0.08rem;
            background-size: 0.44rem 0.50rem;
          }
          .right{
            float: right;
            margin-right: 0.32rem;
            background: url(http://tdream.antit.top/image/dialog.png) no-repeat;
            width: 0.46rem;
            height: 0.42rem;
            margin-top: 0.13rem;
            position: relative;
            background-size: 0.46rem 0.42rem;
            .text{
              width: 0.18rem;
              height: 0.18rem;
              background: red;
              border-radius: 50%;
              font-size: 0.16rem;
              color: #fff;
              text-align: center;
              line-height: 0.18rem;
              position: absolute;
              right: -0.10rem;
              top: -0.03rem;
            }
          }
    }
    // 中奖弹窗 
    .dream{
      background: rgba(0,0,0,0);
      left: 0;
      transform: translate3d(0,-50%,0);
      .award{
        width: 6.59rem;
        height: 7.18rem;
        background: url(http://tdream.antit.top/image/blankcrown.png) no-repeat top center / 6.59rem 7.18rem;
        .main{
          padding-top: 1.58rem;
          width: 5.7rem;
          margin-left: 0.88rem;
          .title{
            font-size: 0.56rem;
            color: #ffc057;
            text-align: center;
          }
          .msg{
            width: 4.98rem;
            margin: 0 auto;
            text-align: center;
            line-height: 1.5;
            font-size: 0.32rem;
            color: #808080;
            margin-top: 0.5rem;
          }
          .fbtn{
            position: absolute;
            bottom: 0.62rem;
            width: 4rem;
            left: 1.73rem;
            .van-button{
              background: rgba(0,0,0,0);
              border: none;
              height: 0.88rem;
              line-height: 0.88rem;
            }
          }
        }
      }
    }
</style>
