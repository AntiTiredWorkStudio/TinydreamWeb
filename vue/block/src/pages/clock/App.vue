<template>
  <div class="clock">
    <pay-info v-if="ispay" :feed="feedback"></pay-info>
    <van-tabbar v-model="actives" active-color="#00d094">
      <van-tabbar-item v-for="(tab,index) in tabbar" :url="tab.url" :key="index">
          <span>{{tab.title}}</span>
          <img slot-scope="props" slot="icon" :src="props.active ? tab.active : tab.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import payInfo from '@/components/payInfo'
import tabbar from '@/components/tabbar'

export default {
  name: 'App',
  data () {
    return {
      actives:1,
      ispay:false,
      userInfo:'',//个人信息
      tabbar:'',
      contracts:'',//合约列表
      show:false,//是否显示弹窗
      payCancel:false,//支付取消弹窗
      cid:'',//合约 id
      desc:'',//合约描述
      title:'',//合约标题
      contractType:'',//可选类型
      // checkArr:[],//选择的数组
      price:'',//合约金
      // bill:'',//返现
      day:'',//合约天数
      warm:'',//注意事项
      status:null,
      theme:'',//所选主题
      isshow:false,//是否显示自定义主题
      custom:'',//自定义主题
      value:'',//自定义主题
      cattention:'',//注意事项列表
      feedback:'',//用户反馈
      order:'',//订单信息
      orders:'',//订单列表
      cPerson:'',
      cAttendence:''
    }
  },
  components: {
    payInfo,
  },
  created(){
    this.tabbar = tabbar.data.tabbar;
    this.GetUserInfo(this);
  },
  methods:{
     GetUserInfo(self){
        self.$toast.loading({
            duration:0,
            forbidClick:true,
            loadingType:'circular',
            message:'信息拉取中...'
        })
        WebApp.Init('wxc5216d15dd321ac5',//appid
        function(result,data){//result:请求状态,data 请求结果
            console.log(Options.GetUserInfo());
            // self.tabbar = common.tabbar;
            self.userInfo = Options.GetUserInfo();
            // 开启测试服务器
            Options.TestServer = false;
            self.$toast.clear();
            // 新用户注册信息
            self.Register(self);
        });
    },
    // 信息注册
    Register(self){
        self.$toast.loading({
          duration:0,
          forbidClick:true,
          loadingType:'circular',
          message:'信息注册中...'
        })
        TD_Request('us','enter',{
            uid:self.userInfo.openid,
            nickname:self.userInfo.nickname,
            headicon:self.userInfo.headimgurl
        },function(code,data){
            console.log(data)
            WebApp.JSAPI.InitShare({
                title:self.userInfo.nickname+'已加入追梦行动派',
                desc:"有梦就行动，坚持返现金！",
                link:'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time='+new Date().getTime(),
                imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
            });
            self.$toast.clear();
            self.Orders(self,self.userInfo.openid)
        },function(code,data){
            console.log(data)
            self.$toast.clear()
        })
    },
    // 订单信息
    Orders(self,uid){
      this.$toast.loading({
        duration:0,
        forbidClick:true,
        loadingType:'circular',
        message:'数据加载中...'
      })
      TD_Request('op','eomp',{uid:uid},function(code,data){
          self.ispay = true;
          console.log(data)
          self.feedback = data.feedback;
          var order = data.orders.shift();
          self.cPerson = data.cPerson;
          self.cAttendence = data.cAttendence;
          self.order = order;
          data.orders.push(order);
          self.orders = data.orders;
          self.$toast.clear()
          self.loop(self)
          console.log(data.orders);
      },function(code,data){
          console.log(data)
          self.$toast.clear()
          if(code == 82){
            window.location.href = 'actionClock.html?time='+new Date().getTime();
          }
      })
    },
    loop(self){
      setInterval(function(){
          var order = self.orders.shift();
          self.order = order;
          self.orders.push(order)
      },3000)
    }
  }
}
</script>

<style scoped lang="less">

</style>



