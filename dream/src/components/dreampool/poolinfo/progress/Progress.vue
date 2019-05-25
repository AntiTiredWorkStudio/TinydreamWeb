<template>
    <div class="progress">
        <div class="main">
            <h3>{{pool == '' ? '' : pool.ptitle}}</h3>
            <div class="progre">
                <yd-progressbar :progress="pool.cbill / pool.tbill" trail-width="4" stroke-color="#edf0f5" trail-color="#ffc054">
                    <van-col span="24" class="timeouts" v-show="isshow">
                        <van-icon name="clock-o" class="icon_clock"></van-icon>
                        <span>{{timeout == '' ? '' : timeout}}</span>
                    </van-col>
                    <van-col class="current" span="24">
                        <span class="money">{{ pool != '' ? pool.realBill + pool.realUnit : ''}}</span>
                    </van-col>
                    <van-col class="text" span="24">
                        <span>{{pool == '' ? '' : pool.billHint}}</span>
                    </van-col>
                </yd-progressbar>
            </div>
            <div class="info">
                <van-col span="8">
                    <p class="green">{{pool == '' ? '' : pool.rtbillValue + pool.rtbillUnit}}</p>
                    <p class="title">目标金额</p>
                </van-col>
                <van-col span="8">
                    <p class="green">互助中</p>
                    <p class="title">中奖者编号</p>
                </van-col>
                <van-col span="8">
                    <p class="green">{{count}}</p>
                    <p class="title"> 总参与份数</p>
                </van-col>
            </div>
            <div class="join">
                <van-button round size="large" @click="join(type)" style="background:#00d094;border:none;color:#fff">参与互助</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import join from '@/components/index/mainpool/Mainpool'

export default {
    name:'progress',
    data(){
        return {
            mainpool:'',// 备份
            pool:"",//梦想池信息
            timeout:'',//倒计时
            isshow:true,//是否展示倒计时
            count:'',//总参与份数
            tip:'',//状态
            type:'',//池子类型
        }
    },
    created(){
        this.pool = JSON.parse(GetStorage('pinfo'));
        this.type = this.pool.state;
        this.count = JSON.parse(GetStorage('pinfo')).pcount;
        if(this.pool.ptype == 'TRADE'){
            this.isshow = false
        }
        this.timeouts(this);
        console.log(this.pool);
        console.log(join)
    },
    // components:{
    //     Tab
    // },
    methods:{
        // 倒计时
        timeouts(self){
            setInterval(function(){
                var dt = parseInt(new Date().getTime() / 1000)
                var timestamp = (parseInt(self.pool.ptime) + parseInt(self.pool.duration)) - dt;
                var h = Math.floor(timestamp / 3600) >= 10 ? Math.floor(timestamp / 3600) : '0' + Math.floor(timestamp / 3600);
                var m = Math.floor(timestamp / 60 % 60) >= 10 ? Math.floor(timestamp / 60 % 60) : '0' + Math.floor(timestamp / 60 % 60);
                var s = Math.floor(timestamp % 60) >= 10 ? Math.floor(timestamp % 60) : '0' + Math.floor(timestamp % 60);
                self.timeout = h + ':' + m + ':' + s;
            },1000)
        },
        // 参与互助
        join(type){
            /**
             * @params type 池子类型
             */
            if(type == 'TRADE'){
                type = 'trade'
            }else{
                type = 'dream'
            }
            this.mainpool = this.pool;
            join.methods.Buy(this,type)
        }
    }
}
</script>

<style lang="less" scoped>
    .progress{
        width: 6.8rem;
        padding-top: 0.3rem;
        margin:0.3rem auto;
        border-radius: 0.10rem;
        box-shadow: 0.02rem 0rem 0.1rem 0.02rem rgba(0, 54, 208, .1), -0.02rem 0 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 -0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1);
        .main{
            width: 6rem;
            margin: 0 auto;
            h3{
                font-size: 0.4rem;
                margin-bottom: 0.44rem;
            }
            .progre{
                width: 3.4rem;
                height: 3.4rem;
                text-align: center;
                margin: 0 auto;
                margin-bottom: 0.4rem;
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
            .info{
                overflow: hidden;
                .green{
                    color: #00d094;
                    text-align: center;
                    font-size: 0.38rem;
                }
                .title{
                    font-size: 0.24rem;
                    color: #808080;
                    text-align: center;
                }
            }
            .join{
                margin: 0 auto;
                margin-top: 0.48rem;
                padding-bottom: 0.3rem;
                width: 5.8rem;
            }
        }
    }
</style>
