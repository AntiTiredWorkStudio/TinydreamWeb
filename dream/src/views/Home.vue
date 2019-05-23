<template>
  <div class="home">
    <div class="banner swipslider" id="banner">
        <slider ref="slider" :options="sliderinit">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in someList" :key="index" class="banner_bg">
              <img :src="item.style" alt="" @click="banner(index)">
            </slideritem>
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
      <router-link tag="div" class="left" to="/cach"></router-link>
      <router-link tag="div" to="/notice" class="right">
        <div class="text ntext" style="font-size:6px">{{ncount}}</div>
      </router-link>
    </div>
    <!-- 小梦想中奖弹窗 -->
    <van-popup class="dream" v-model="isdaward">
      <div class="award">
        <div class="main">
          <p class="title">幸运提示</p>
          <p class="msg" :style="style">
            {{tip}}
          </p>
          <div class="fbtn">
            <van-button type="primary" size="large" round @click="perfect(btnTxt,did,tpid)">{{btnTxt}}</van-button>
          </div>
        </div>
      </div>
    </van-popup>
    <pop :show="ishow" :did="isdid" :state="state"/>
  </div>
</template>

<script>
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
// 轮播图
import { slider, slideritem } from 'vue-concise-slider'
import screen from '@/components/index/screen/Screen'//首页公屏
import pool from '@/components/index/mainpool/Mainpool'//梦想池--生意池
import rules from '@/components/index/rules/Rules'//规则
import pop from '@/components/dream/add/Add'
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
          style:'http://tdream.antit.top/image/banner.png'
        },
        {
          style:'https://tdream.antit.top/image/Red_SendPack.jpg'
        }
      ],//轮播图配置列表
      userInfo:'',//存贮个人信息
      orders:'',//订单
      pools:'',//梦想池--生意池
      isdaward:false,//小梦想弹窗
      style:'',//样式
      state:'all',//梦想状态
      did:'',//中奖 did
      isdid:'',
      tip:'',//中奖信息
      btnTxt:'',
      ishow:false,
      tpid:'',
      ncount:'',//通知条数
    }
  },
  components:{
    slider,
    slideritem,
    screen,
    pool,
    rules,
    pop
  },
  created(){
    // this.$router.push('/friend/new/135125797580')
    if(!ExistStorage("userInfo")){
      window.location.href = 'http://tinydream.ivkcld.cn/TInydreamWeb/dream'
    }else{
      if(GetStorage('data') != null){
        var data = JSON.parse(GetStorage('data'));
        RemoveStorage('data')
        this.router.push('/friend')
      }
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
        if(data.award.result){
            self.style = {
              width: '4.98rem',
              margin: '0 auto',
              'text-align': 'center',
              'line-height': '1.5',
              'font-size': '.32rem',
              color: 'grey',
              'margin-top': '.5rem',
            }
            self.tip = '恭喜您成为梦想互助'+data.award.pid+'幸运者,请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内为您颁发梦想互助金!'
            self.did = data.award.did;
            console.log(data.award.did);
            self.isdaward = true;
            self.realname(self,'dream')
        }else if(data.tradeaward.length != 0){
            self.style = {
              'font-size':'0.24rem'
            }
            self.type = 'trade'
            self.tip = "恭喜您参与的小生意互助"+data.tradeaward.pid+"期成为幸运者，幸运编号为"+data.tradeaward.lid+"，本期免费获得项目为："+data.tradeaward.trade.title+".   我们工作人员会在3个工作日内联系您安排项目对接，请您保持电话畅通。 提示：为更好地给您对接项目，请您务必在7个工作日内完成实名认证。"
            self.isdaward = true;
            self.tpid = data.tradeaward.pid;
            console.error('Home.vue未写小生意中奖逻辑')
            self.realname(self,'trade')
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
        // 系统通知
        self.notice(self)
      },function(code,data){
        console.log(data);
      })
    },
    // 完善梦想按钮
    perfect(msg,did = '',pid=''){
      if(msg == '实名认证'){
        this.$router.push('/auth')
      }else if(msg == 'ok,我知道了'){
        this.end(this,pid)
      }else if(msg == '完善梦想'){
        this.ishow = true;
        this.isdid = did;
      }
    },
    // 小生意互助中奖结束
    end(app,pid){
      TD_Request('aw','aend',{pid:pid,url:true},function(code,data){
        app.isdaward = false;
        app.$router.replace('/refesh')
      },function(code,data){
        console.log(data)
      })
    },
    // 获取通知列表
    notice(app){
      TD_Request('no','nc',{uid:app.$store.state.uid},function(code,data){
        app.ncount = data.ncount;
        if(data.ncount == 0){
          console.log(data.ncount)
          $('.icon_notice').css({
            'transition':'all .2s linear 0',
            'transform':'translateX(50%)'
          })
        }else{
          $('.icon_notice').css({
            'transition':'all .2s linear 0',
            'transform':'translateX(0)'
          })
        }
      },function(code,data){
        console.log(data)
      })
    },
    // 是否实名
    realname(app,type){
      TD_Request('us','rnamegx',{uid:app.$store.state.uid},function(code,data){
        console.log(data)
        if(type == 'dream'){
          app.btnTxt = '完善梦想'
        }else if(type == 'trade'){
          app.btnTxt = 'ok,我知道了'
        }
      },function(code,data){
        if(code == 12){
          app.btnTxt = '实名认证'
        }
      })
    },
    // banner图跳转
    banner(index){
      console.log(index)
      if(index == 0){
        this.$router.push('/question')
      }else{
        this.$dialog.alert({
          title:'系统提示',
          message:'红包功能正在更新，敬请期待...'
        })
      }
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
    .banner_bg img{
      width: 6.8rem;
      height:2rem;
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
          transform: translateX(0);
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
