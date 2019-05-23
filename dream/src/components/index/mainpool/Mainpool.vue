<template>
    <div class="pool">
        <van-tabs v-model="active" swipeable title-active-color="#00d094" color="#00d094" line-width="20" line-height="1">
            <van-tab title="梦想互助" class="dream">
                <div class="main">
                    <h3 class="title">{{mainpool != '' ? mainpool.ptitle : ''}}</h3>
                    <div class="progress">
                       <yd-progressbar v-show="mainpool == '' ? false : true" :progress="mainpool == '' ? 0 : mainpool.cbill / mainpool.tbill" trail-width="4" stroke-color="#edf0f5" trail-color="#ffc054">
                           <van-col span="24" class="timeouts">
                               <van-icon name="clock-o" class="icon_clock"></van-icon>
                               <span>{{timeout == '' ? '' : timeout}}</span>
                           </van-col>
                           <van-col class="current" span="24">
                               <span class="money">{{ mainpool != '' ? mainpool.realBill + mainpool.realUnit : ''}}</span>
                           </van-col>
                           <van-col class="text" span="24">
                               <span>{{mainpool == '' ? '' : mainpool.billHint}}</span>
                           </van-col>
                       </yd-progressbar>
                    </div>
                    <div class="poolInfo">
                        <van-col span="12">
                            <p>{{mainpool == '' ? '' : mainpool.rtbillValue + mainpool.rtbillUnit}}</p>
                            <p>互助目标</p>
                        </van-col>
                        <van-col span="12" style="text-align:right">
                            <p>{{mainpool == '' ? '' : mainpool.rubill + mainpool.rubillUnit}}</p>
                            <p>价格</p>
                        </van-col>
                    </div>
                    <div class="buybtn">
                        <van-button type="primary" @click.stop="join('dream')" size="large" round>参与互助</van-button>
                    </div>
                </div>
                <p class="tip">每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！</p>
            </van-tab>
            <van-tab title="生意互助" class="trade">
                <div class="main">
                    <div class="banner" :style="{background:trade == '' ? '' : 'url('+trade.trade.bannerUrl+') no-repeat center center / 6.8rem 3.86rem'}">
                        <p>
                            <span>{{trade == '' ? '' : trade.ptitle}}</span>
                            <span>生意详情&gt;&gt;</span>
                        </p>
                    </div>
                    <div class="tradeInfo">
                        <p>{{trade == '' ? '' : trade.billHint}}<span>{{trade == '' ? '' : trade.realBill + trade.realUnit}}</span></p>
                        <div class="progress">
                            <yd-progressbar style="height:0.3rem" type="line" :progress="trade == '' ? 0 : trade.cbill / trade.tbill" trail-width="4" stroke-color="#edf0f5" trail-color="#ffc054"></yd-progressbar>
                        </div>
                        <div class="info">
                            <van-col span="12">
                                <p>{{trade == '' ? '' : trade.rtbillValue + trade.rtbillUnit}}</p>
                                <p>互助目标(不满不开)</p>
                            </van-col>
                            <van-col span="12">
                                <p>{{trade == '' ? '' : trade.rubillValue + trade.rubillUnit}}</p>
                                <p>价格</p>
                            </van-col>
                        </div>
                        <div class="tradeBtn">
                            <van-button type="primary" size="large" round @click.stop="join('trade')">参与互助</van-button>
                        </div>
                    </div>
                </div>
                <p class="tip">没人支付少量互助金，从中随机产生1名幸运者成为指定目标的免费获得者</p>
            </van-tab>
        </van-tabs>
         <pop :show="status" :state="aStatus"/>
    </div>
</template>

<script>
import pop from '@/components/dream/add/Add'
export default {
    name:'pool',
    data () {
        return {
            mainpool:'',//梦想池
            trade:'',//生意池
            active:0,//默认 tab
            timeout:this.timeout(),
            aStatus:"add",//梦想状态
            did:'',//中奖 did
            dtitle:'',//梦想标题
            dinfo:'',//梦想简介
            status:false,//是否展示添加梦想弹窗
        }
    },
    mounted(){
        if(GetStorage('type') == 'clock'){
            var opid = JSON.parse(GetStorage('info')).opid;
            var type = JSON.parse(GetStorage('info')).type;
            SaveStorage('share',JSON.stringify({type:type,opid:opid}))
            RemoveStorage('info');
            this.$router.push('/frined')
        }
    },
    components:{pop},
    props:{
        pools:{
            type:[Array,Object],
            default: () => {
                return [];
            }
        }
    },
    methods:{
        // 倒计时
        timeout(){
            var self = this;
            setInterval(function(){
                var dt = parseInt(new Date().getTime() / 1000)
                var timestamp = (parseInt(self.mainpool.ptime) + parseInt(self.mainpool.duration)) - dt;
                var h = Math.floor(timestamp / 3600) >= 10 ? Math.floor(timestamp / 3600) : '0' + Math.floor(timestamp / 3600);
                var m = Math.floor(timestamp / 60 % 60) >= 10 ? Math.floor(timestamp / 60 % 60) : '0' + Math.floor(timestamp / 60 % 60);
                var s = Math.floor(timestamp % 60) >= 10 ? Math.floor(timestamp % 60) : '0' + Math.floor(timestamp % 60);
                self.timeout = h + ':' + m + ':' + s;
            },1000)
        },
        // 参与互助
        join(type){
            /**
             * @params type 池子状态 dream trade
             * @params 传入参数 type this(vue实例)
             * @params Buy方法 准备购买的请求
             */
            this.Buy(this,type)
        },
        // 准备购买的请求
        Buy(app,type){
            /**
             * @params app vue实例
             */
            RemoveStorage('dream')
            RemoveStorage('trade')
            var pid = type == 'dream' ? app.mainpool.pid : app.trade.pid;
            TD_Request('ds','buy',{uid:app.$store.state.uid,pid:pid},function(code,data){
                console.log(data)
                if(data.actions.hasOwnProperty('editdream')){
                    app.$dialog.confirm({
                        title:'添加梦想',
                        message:'您还没有添加梦想，添加梦想后即可参与互助，是否前往添加',
                        confirmButtonText:'去添加',
                        confirmButtonColor:'#00d094'
                    }).then(() => {
                        SaveStorage('type','dream')
                        app.status = true;
                    }).catch(()=>{
                        return;
                    })
                } else {
                    app.$store.commit('actions',data.actions)
                    console.error('梦想互助支付页面')
                    SaveStorage('action',JSON.stringify(app.$store.state.actions))
                    SaveStorage('type',type)
                    app.$router.push('/payinfo')
                }
            },function(code,data){
                console.log(data)
                if(code == 11){
                    app.$dialog.alert({
                        title:'绑定手机',
                        message:'您尚未绑定手机，绑定手机后就可以参与互助啦！',
                        confirmButtonText:'去绑定',
                        confirmButtonColor:'#00d094'
                    }).then(() => {
                        SaveStorage('type',type)
                        app.$router.push('/phone')
                    })
                }
            })
        }
    },
    watch:{
        pools(data){
            console.log(this.$store.state)
            console.log(data)
            if(data[0].code == 0){
                this.trade = data[0].maintrade;
                this.mainpool = data[0].mainpool;
            }else if(data[0].code == 1){
                this.trade = data[0].maintrade;
                $('.dream').html(data[0].context).css({
                    color:'#999',
                    'font-size':'0.26rem',
                    'line-height':'1.5rem',
                    'text-align':'center'
                })
            }else if(data[0].code == 2){
                this.mainpool = data[0].mainpool;
                $('.trade').html(data[0].context).css({
                    color:'#999',
                    'font-size':'0.26rem',
                    'line-height':'1.5rem',
                    'text-align':'center'
                })
            }else if(data[0].code == -1){
                $('.dream').html(data[0].tcontext).css({
                    color:'#999',
                    'font-size':'0.26rem',
                    'line-height':'1.5rem',
                    'text-align':'center'
                })
                $('.trade').html(data[0].context).css({
                    color:'#999',
                    'font-size':'0.26rem',
                    'line-height':'1.5rem',
                    'text-align':'center'
                })
            }
            console.log(this.trade)
            console.log(this.mainpool)
        },
        timeout(data){
            console.log(data);
            // window.location.reload();
            if(data == '00:00:00'){
                window.location.reload();
            }
        },
        mainpool(data){
            if(GetStorage('type') == 'dream'){
                this.join('dream')
            }
        },
        trade(data){
            if(data != ''){
                if(GetStorage('type') == 'trade'){
                    this.join('trade')
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>
    .pool{
        width: 6.8rem;
        margin: 0 auto;
        border-radius: 0.1rem;
        box-shadow: 0.02rem 0px 0.1rem 0.02rem rgba(0, 54, 208, .1), -0.02rem 0 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 -0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1);
        background: #fff;
        min-height: 1.5rem;
        .van-tabs .van-hairline--top-bottom:after{
            border-width: 0!important;
        }
        .dream{
            width: 100%;
            .main{
                width: 6.2rem;
                margin: 0 auto;
                padding-top: 0.3rem;
                .title{
                    font-size: 0.32rem;
                }
                .progress{
                    margin-top: 0.5rem;
                    width: 3.8rem;
                    height: 3.8rem;
                    margin: 0 auto;
                    margin-top: 0.5rem;
                    text-align: center;
                    .timeouts{
                        font-size: 0.28rem;
                        color: #00d094;
                        text-align: center;
                        .icon_clock{
                            margin-right: 0.1rem;
                        }
                    }
                    .current{
                        margin-top: 0.3rem;
                        text-align: center;
                        margin-bottom: 0.1rem;
                        .money{
                            font-size: 0.58rem;
                            color: #ffc057;
                        }
                    }
                    .text{
                        text-align: center;
                        font-size: 0.24rem;
                        color: #999;
                    }
                }
                .poolInfo{
                    width: 100%;
                    overflow: hidden;
                    .van-col{
                        p{
                            font-size: 0.24rem;
                            color: #999;
                        }
                        p:nth-child(1){
                            font-size: 0.38rem;
                            color: #ffc057;
                        }
                    }
                }
                .buybtn{
                    margin-top: 0.34rem;
                    margin-bottom: 0.1rem;
                }
            }
            .tip{
                font-size: 0.2rem;
                color: #999;
                text-align: center;
                padding-bottom: 0.2rem;
            }
        }
        .trade{
            width: 100%;
            .main{
                padding-top: 0;
                width: 100%;
                .banner{
                    width: 100%;
                    padding-top: 3.16rem;
                    p{
                        background: rgba(255,255,255,.5);
                        height: 0.7rem;
                        line-height: 0.7rem;
                        span:nth-child(1){
                            float: left;
                            margin-left: 0.3rem;
                            font-size: 0.32rem;
                        }
                        span:nth-child(2){
                            float: right;
                            margin-right: 0.3rem;
                            font-size: 0.32rem;
                            color: #00d094;
                        }
                    }
                }
                .tradeInfo{
                    margin-top: 0.3rem;
                    p{
                        text-align: center;
                        font-size: 0.24rem;
                        color: #999;
                        span{
                            font-size: 0.48rem;
                            color: #ffc057;
                        }
                    }
                    .progress{
                        width: 6.2rem;
                        margin: 0.1rem auto 0;
                        overflow: hidden;
                    }
                    .info{
                        overflow: hidden;
                        margin: 0.2rem  auto 0.25rem;
                        width: 6.2rem;
                        .van-col:nth-child(1){
                            text-align: left;
                            p{
                                text-align: left
                            }
                        }
                        .van-col:nth-child(2){
                            text-align: right;
                            p{
                                text-align: right
                            }
                        }
                        .van-col{
                            p:nth-child(1){
                                font-size: 0.38rem;
                                color:#ffc057;
                            }
                            p:nth-child(2){
                                font-size: 0.24rem;
                                color:#999;
                            }
                        }
                    }
                    .tradeBtn{
                        width: 6.2rem;
                        margin: 0 auto 0.1rem;
                    }
                }
            }
            .tip{
                font-size: 0.2rem;
                color: #999;
                text-align: center;
                padding-bottom: 0.2rem;
            }
        }
    }
</style>
