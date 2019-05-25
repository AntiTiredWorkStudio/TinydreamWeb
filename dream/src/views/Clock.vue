<template>
    <div class="clock">
        <action v-if="issshow"/>
        <pay-info :feed="feedback" v-if="ispay"/>
    </div>
</template>

<script>
import action from '@/components/clock/Action'
import payInfo from '@/components/index/payInfo/payClock'
export default {
    name:'clock',
    components:{
        action,
        payInfo,
    },
    data(){
        return {
            isshow:true,
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
            cAttendence:'',
            issshow:false,
        }
    },
    created(){
        if(!ExistStorage("userInfo")){
            window.location.href = 'http://tinydream.ivkcld.cn/TInydreamWeb/dream/index.html?time='+new Date().getTime()+'&type=clock'
        }
        this.Register(this,JSON.parse(GetStorage('userInfo')))
    },
    methods:{
        Register(self,userInfo){
            TD_Request('us','enter',{
                uid:userInfo.openid,
                nickname:userInfo.nickname,
                headicon:userInfo.headimgurl
            },function(code,data){
                console.log(data)
                WebApp.JSAPI.InitShare({
                    title:self.userInfo.nickname+'已加入追梦行动派',
                    desc:"有梦就行动，坚持返现金！",
                    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=no',
                    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
                });
                self.Orders(self,userInfo.openid)
            },function(code,data){
                console.log(data)
            })
        },
        Orders(self,uid){
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
                if(code == 82){
                    self.issshow = true;
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

<style lang="less" scoped>
    .clock{
        background: #f0f0f0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>
