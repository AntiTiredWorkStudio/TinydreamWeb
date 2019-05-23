<template>
    <div class="payInfo">
        <div class="clockIn">
            <!-- banner -->
            <van-col span="24">
                <div class="banner">
                    <p>已成功帮助{{cPerson == '' ? '--' : cPerson}}位追梦人，坚持行动{{cAttendence == '' ? '--' : cAttendence}}次！</p>
                </div>
            </van-col>
            <!-- screen公屏 -->
            <van-col span="24" style="background: #fff;margin-top:0.3rem">
                <div class="screen">
                    <span class="circle">·</span>
                    <span class="info">{{order == '' ? '--' : order.nickname}}支付{{order == '' ? '--' : order.bill /
                        100}}元合约</span>
                    <span class="time">刚刚</span>
                </div>
            </van-col>
            <!-- 合约类型 -->
            <van-col span="24" class="contract">
                <div class="main">
                    <van-col span="24">
                        <div class="day-100" @click.stop="buy(contracts[1].cid)">
                            <h3 class="title">{{contracts == '' ? '--' : contracts[1].title}}</h3>
                            <p class="desc">
                                {{contracts == '' ? '--' : contracts[1].description}}
                            </p>
                            <van-button round size="small" type="primary" class="buy" @click.stop="buy(contracts[1].cid)">立即购买</van-button>
                        </div>
                    </van-col>
                    <van-col span="24">
                        <div class="day-21" @click.stop="buy(contracts[0].cid)">
                            <h3 class="title right">{{contracts == '' ? '--' : contracts[0].title}}</h3>
                            <p class="desc right">
                                {{contracts == '' ? '--' : contracts[0].description}}
                            </p>
                            <van-col span="24" style="text-align:right">
                                <van-button round size="small" class="buy right" type="primary" @click.stop="buy(contracts[0].cid)">立即购买</van-button>
                            </van-col>
                        </div>
                    </van-col>
                </div>
            </van-col>
            <!-- 用户反馈 -->
            <van-col class="model" style="width:6.8rem;margin:0 0 0 0.3rem">
                <span></span>
                <h3 class="title">用户反馈</h3>
            </van-col>
            <van-col span="24" class="feedback">
                <van-row class="feed_main" v-for="(feed,index) in feedback" :key="index">
                    <van-col span="5">
                        <div class="head">
                            <van-icon :name="feed.headicon"></van-icon>
                        </div>
                    </van-col>
                    <van-col span="19">
                        <h3 class="type">{{feed.title}}<span class="nickname">{{feed.username}}</span></h3>
                        <p class="message">
                            {{feed.content}}
                        </p>
                    </van-col>
                </van-row>
            </van-col>
            <!-- tabbar -->
            <!-- <van-tabbar v-model="actives" active-color="#00d094">
                <van-tabbar-item v-for="tab in tabbar" :url="tab.url" :info="tab.info">
                    <span>{{tab.title}}</span>
                    <img slot-scope="props" slot="icon" :src="props.active ? tab.active : tab.normal">
                </van-tabbar-item>
            </van-tabbar> -->
            <!-- 弹出层 -->
            <van-popup v-model="show" position="bottom" :overlay="true">
                <div class="popup">
                    <van-col span="24" class="title_big">
                        <van-icon name="cross" @click="close"></van-icon>
                        <span class="title">{{title == '' ? '--' : title}}</span>
                    </van-col>
                    <van-col span='24' class="bill">
                        <span class="unit">￥</span>
                        <span class="bill_num">{{price == '' ? '--' : price}}</span>
                    </van-col>
                    <van-col span="24" class="tip">
                        <p class="tip_txt">支付{{desc == '' ? '--' : desc}}</p>
                    </van-col>
                    <van-col span="24" class="main_title">
                        <p class="main_tit_txt">选择行动主题:</p>
                    </van-col>
                    <van-col span="24" class="clock_type">
                        <ul>
                            <li v-for="(contract,index) in contractType" :key="index" class="contract" :class="index == status ? 'active' : ''"
                                @click.stop="conType(index,contract.check,contract.title)">
                                <van-icon :name="index == status ? contract.active : contract.normal"></van-icon>
                                <span class="cont_title">{{contractType == '' ? '--' : contract.title}}</span>
                            </li>
                            <li class="contract" style="width:100%" :class="status == 12 ? 'active' : ''" @click="conType(12)">
                                <van-icon :name="status == 12 ? 'https://tdream.antit.top/5drinkingIA.png' : 'https://tdream.antit.top/5drinkingIU.png'"></van-icon>
                                <span class="cont_title">{{status == 12 ? custom : '其他'}}</span>
                            </li>
                        </ul>
                        <van-dialog v-model="isshow" title="自定义主题(8字以内)" show-cancel-button @confirm="confirm" @cancel="cancel">
                            <van-field v-model="value" id="theme" placeholder="请输入主题" />
                        </van-dialog>
                    </van-col>
                    <van-col span="24" class="warm">
                        <p class="warning">注意事项:</p>
                    </van-col>
                    <van-col span="24" id="warm">

                    </van-col>
                    <van-col span="24" class="btn">
                        <van-button type="primary" round size="normal" @click="pay(cid)">立即支付</van-button>
                    </van-col>
                </div>
            </van-popup>
            <!-- 弹出层 -->
            <van-popup v-model="payCancel" class="contrace">
                <div class="paycancel">
                    <div class="main">
                        <div class="avatar"></div>
                        <div class="text">
                            <div class="container">
                                <!-- <p>寻梦导师</p> -->
                                <p>追梦行动达人</p>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <div class="left">
                            <van-button round class="callMe" @click="callMe">和她聊聊</van-button>
                        </div>
                        <div class="right">
                            <van-button round class="againPay" @click="againPay">重新支付</van-button>
                        </div>
                    </div>
                </div>
                <div class="icon" style="text-align:center;font-size:0.88rem;margin-top: 0.6rem">
                    <van-icon name="https://tdream.antit.top/DaKaOKX.png" @click="payCancel = false"></van-icon>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
// var uid = Options.GetUserInfo().openid;
export default {
    name:'payInfo',
    data () {
        return {
            actives:1,
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
    created(){
        // this.tabbar = common.tabbar;
        // common.notice(this,uid);
        // Options.TestServer = false;
        console.log(this)
        // 获取合约列表
        this.list(this)
        this.Orders(this)
    },
    methods:{
        // 点击购买合约
        buy(cid){
            this.show = true;
            // 合约信息
            this.ContractInfo(this,cid);
            
        },
        // checkbox
        conType(index,status,title){
            this.status = index;
            if(index != 12){
                this.theme = this.contractType[index].title;
            }else{
                this.isshow = true;
                $('.banner').css('background','rgba(0,0,0,.5) url(undefined)');
                $('#theme.van-field__control').focus();
            }    
        },
        // 数组删除方法
        removeArray(arr, val) {
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        },
        // 关闭弹窗
        close(){
            this.status = null;
            this.show = false;
            this.payCancel = true;
        },
        // 支付
        pay(cid){
            if(this.theme == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！'
                }).then(()=>{
                    return;
                })
            }else{
                var theme = this.theme;
                console.log(theme);
                // 微信支付
                this.wxpay(this,cid,theme)
            }
        },
        // 获取合约列表
        list(self){
            TD_Request('co','list',{},function(code,data){
                console.log(data);
                self.contractType = data.themes;
                self.contracts = data.contracts;
                self.cattention = data.cattention;

            },function(code,data){
                alert(data.context)
            })
        },
        // 获取合约信息
        ContractInfo(self,cid){
            TD_Request('co','info',{cid:cid},function(code,data){
                console.log(data)
                self.title = data.contract.title;
                self.desc = data.contract.description;
                self.price = data.contract.price / 100;
                self.cid = data.contract.cid;
                if(cid == 'CO0000000001'){
                    $('#warm').html( self.cattention.CO0000000001).css({
                        'font-size': '0.26rem',
                        color: '#999'
                    });
                }else if(cid == 'CO0000000002'){
                    $('#warm').html( self.cattention.CO0000000002).css({
                        'font-size': '0.26rem',
                        color: '#999'
                    });
                }
;
            },function(code,data){
;
                alert(data.context);
            })
        },
        // 微信支付
        wxpay(self,cid,theme){
            TD_Request('op','joi',{cid:cid,uid:Options.GetUserInfo().openid},function(code,data){
                console.log(data)
;
                self.wxpayweb(self,data.pay,data.order.oid,cid,theme)
            },function(code,data){
;
                if(code == 81){
                    self.$dialog.alert({
                        title:'错误提示',
                        message:'合约ID有误，请联系客服进行处理'
                    }).then(()=>{
                       self.$router.push('/cach')
                    })
                }else if(code == 82){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:'您的合约正在进行中'
                    }).then(()=>{
                        return;
                    })
                }else if(code == 11){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:'绑定手机后才可以购买合约哦！'
                    }).then(()=>{
                        self.$router.push('/phone')
                    })
                }else if(code == 58){
                    self.$dialog.confirm({
                        title:'错误提示',
                        message:'订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！'
                    }).then(()=>{
                        self.$router.push('/cach')
                    }).catch(()=>{
                        return;
                    })
                }
                console.log(data);
            })
        },
        // 唤醒支付
        wxpayweb(self,pay,oid,cid,theme){
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                "appId":pay.appId,     //公众号名称，由商户传入     
                "timeStamp":pay.timeStamp,         //时间戳，自1970年以来的秒数     
                "nonceStr":pay.nonceStr, //随机串     
                "package":pay.package,     
                "signType":pay.signType,         //微信签名方式：     
                "paySign":pay.paySign //微信签名 
                },function(res){
                  if(res.err_msg == "get_brand_wcpay_request:ok" ){
                  // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                        self.paySuccess(self,cid,oid,Options.GetUserInfo().openid,theme)
                  } else if(res.err_msg == "get_brand_wcpay_request:cancel" ){
                        self.$toast.fail('支付取消');
                  }
               }); 
        },
        // 支付成功
        paySuccess(self,cid,oid,uid,theme){
            TD_Request('op','jof',{
                cid:cid,
                oid:oid,
                uid:uid,
                theme:theme
            },function(code,data){
                self.$router.replace('/refesh')
            },function(code,data){
                alert(code)
            })
        },
        // 重新支付
        againPay(){
            this.payCancel = false;
            this.show = true;
        },
        // 自定义主题
        confirm(){
            $('.banner').css('background','url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem');
            if(this.value == ''){
                this.custom = '其他';
                this.theme = '';
                this.status = 'undefined';
            }else{
                this.custom = this.value;
                this.theme = this.value;
            }
        },
        cancel(){
            $('.banner').css('background','url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem');
            this.custom = '其他';
            this.theme = '';
            this.status = null;

        },
        // 联系客服
        callMe(){
            this.$router.push('/cach')
        },
        // 订单信息
        Orders(self){
            TD_Request('op','eomp',{uid:Options.GetUserInfo().openid},function(code,data){
                console.log(data)
                console.log(self.feedback)
                if(data.cPerson < 1000){
                    var person = parseInt(data.cPerson);
                    person += 1000
                }else{
                    var person = data.cPerson;
                }
                if(data.cAttendence < 10000){
                    var num = parseInt(data.cAttendence);
                    num += 10000
                }else{
                    var num = data.cAttendence;
                }
                self.cPerson = person;
                self.cAttendence = num;
                self.feedback = data.feedback;
                if(data.orders.length == 0){
                    $('.info').hide();
                    $('.time').html('暂无人购买合约');
                    return;
                }
                var order = data.orders.shift();
                self.order = order;
                data.orders.push(order);
                self.orders = data.orders;
                self.loop(self)
                console.log(data.orders);
            },function(code,data){
                console.log(data)
            })
        },
        loop(self){
            setInterval(function(){
                var order = self.orders.shift();
                self.order = order;
                self.orders.push(order)
            },3000)
        }
    },
    watch:{
        value(data){
            if(data.length >= 8){
                this.value = data.substr(0,8);
                console.log(this.value)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .clockIn{
    width: 100%;
    padding-bottom: 1.29rem;
    .banner{
        width: 100%;
        height: 2.3rem;
        background: url('https://tdream.antit.top/ActiveContractBanner.jpg?time=20190423') no-repeat;
        background-size:7.5rem 2.3rem;
        p{
            padding-top: 1.82rem;
            margin-left: 0.92rem;
            color: #fff;
            font-size: 0.24rem;
        }
    }
    // 公屏
    .screen{
        width: 6.8rem;
        margin: 0 auto;
        height: 0.84rem;
        line-height: 0.84rem;
        background: #fff;
        .circle{
            display: inline-block;
            font-size: 0.4rem;
            color: #000;
            margin-right: 0.2rem;
            vertical-align: middle;
            font-weight: bolder;
        }
        .info{
            font-size: 0.26rem;
            color: #000;
        }
        .time{
            font-size: 0.26rem;
            color: #999;
        }
    }
    // 合约类型
    .contract{
        width: 100%;
        margin: 0.3rem auto;
        background: #fff;
        .main{
            width: 6.8rem;
            margin: 0 auto;
            padding-top: 0.3rem;
            .day-100{
                width: 100%;
                height: 2.8rem;
                background: url('https://tdream.antit.top/100DayContract.jpg') no-repeat;
                background-size: 6.8rem 2.8rem;
                margin-bottom: 0.2rem;
                .desc{
                    width: 3.8rem;
                }
            }
            .day-21{
                width: 100%;
                height: 2.8rem;
                background: url('https://tdream.antit.top/21DayContract.jpg') no-repeat;
                background-size: 6.8rem 2.8rem;
                margin-bottom: 0.2rem;
                text-align: right;
                .right{ 
                    margin-right: 0.3rem;
                    margin-left: 0;
                }
                .desc{
                    width: 2.9rem;
                    float: right;
                    text-align: left;
                }
            }
            .title{
                padding-top: 0.3rem;
                margin-left: 0.3rem;
                font-size: 0.4rem;
                margin-bottom: 0.1rem;
                color: #9b500e;
            }
            .desc{
                font-size: 0.24rem;
                color: #9b500e;
                margin-left: 0.3rem;
                line-height: 1.8;
                margin-bottom: 0.1rem;
            }
            .buy{
                margin-left: 0.3rem;
            }
        }
    }
    .model{
        width: 100%;
        margin-bottom: 0.2rem;;
        span{
            font-size: 0.28rem;
            color: #00d094;
            font-weight: bolder;
            display: inline-block;
            width: 0.06rem;
            height: 0.28rem;
            background: #00d094;
            margin-right: 0.1rem;
            vertical-align: middle;
        }
        .title{
            display: inline-block;
            font-size: 0.28rem;
        }
    }
    .feedback{
        width: 100%;
        padding-bottom: 1.2rem;
        margin-top: 0.3rem;
        .feed_main{
            width: 6.8rem;
            margin: 0 auto;
            height: 3.22rem;
            border-radius: 0.1rem;
            background: #fff;
            padding: 0.2rem;
            margin-bottom: 0.2rem;
            .head{
                font-size: 1rem;
            }
            .type{
                font-size: 0.3rem;
                color: #4c4c4c;
                margin-bottom: 0.2rem;
            }
            .message{
                font-size: 0.26rem;
                color: #999;
            }
        }
    }
    .popup{
        width: 6.8rem;
        margin: 0 auto;
        .title_big{
            height: 0.88rem;
            line-height: 0.88rem;
            border-bottom: 1px solid #eee;
            .van-icon{
                font-size: 0.3rem;
                vertical-align: middle;
            }
            .title{
                font-size: 0.3rem;
                color: #000;
                margin-left: 1.92rem;
            }
        }
        .bill{
            padding-top: 0.54rem;
            text-align: center;
            .unit{
                font-size: 0.3rem;
                color: #000;
            }
            .bill_num{
                font-size: 0.5rem;
                color: #000;
            }
        }
        .tip{
            min-height: 0.54rem;
            border-radius: 0.27rem;
            line-height: 0.54rem;
            background: #f0f0f0;
            margin-top: 0.4rem;
            margin-bottom: 0.3rem;
            .tip_txt{
                width: 6.08rem;
                margin: 0 auto;
                font-size: 0.29rem;
                color: #999;
            }
        }
        .main_title{
            font-size: 0.3rem;
        }
        .clock_type{
            margin-bottom: 0.4rem;
            overflow: hidden;
            ul{
                width: 100%;
                height: 2.8rem;
                overflow: auto;
                li{
                    float: left;
                    width: 1.5rem;
                    height: 0.88rem;
                    line-height: 0.88rem;
                    margin-right: 0.2rem;
                    border-radius: 0.1rem;
                    background-color: #f0f0f0;
                    font-size: 0.26rem;
                    color: #999;
                    text-align: center;
                    margin-bottom: 0;
                }
                li.active{
                    color: #fff;
                    background: #00d094;
                }
            }
        }
        .warm{
            font-size: 0.3rem;
            color: #000;
            margin-bottom: 0.2rem;
        }
        .btn{
            margin-top: 0.3rem;
            text-align: center;
            padding-bottom: 0.55rem;
        }
    }
    // 支付取消弹窗
    .contrace{
        background: rgba(0,0,0,0);
        .paycancel{
            width: 5.8rem;
            height: 6.9rem;
            background: url(https://tdream.antit.top/image/contract.jpg?time=20190424) no-repeat center center / 5.8rem 6.9rem;
            position: relative;
            .main{
              position: relative;  
              top: 2.65rem;
              width: 4.88rem;
              margin: 0 auto;
              .avatar{
                  position: absolute;
                  width: 1.38rem;
                  height: 1.38rem;
                  top: -0.69rem;
                  left: 50%;
                  transform: translateX(-50%);
                  border-radius: 50%;
                  background: url(https://tdream.antit.top/image/miniLogo.jpg) no-repeat center center / 1.38rem 1.38rem;
                  box-shadow: 0.02rem 0px 0.1rem 0.02rem rgba(0, 54, 208, .1), -0.02rem 0 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 -0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1);
              }
              .text{
                  width: 100%;
                  height: 2.4rem;
                  background: #fff;
                  border-radius: 0.1rem;
                  .container{
                      padding-top: 1.15rem;
                      text-align: center;
                      font-size: 0.36rem;
                      color: #666;
                      p{
                          margin-bottom: 0.1rem;
                      }
                  }
              }
            }
            .btn{
                position: absolute;
                bottom: 0.3rem;
                width: 5.4rem;
                left: 50%;
                transform: translateX(-50%);
                height: 0.88rem;
                font-size: 0.36rem;
                div{
                    .van-button{
                        border:none;
                        width: 2.6rem;
                        height: 100%;
                        line-height: 0.88rem;
                        color: #4c4c4c;
                        border-radius: 0.44rem;
                    }
                    .againPay{
                        background: #00d094;
                        color: #fff;
                    }
                }
                .left{
                    float: left;
                }
                .right{
                    float: right;
                }
            }
        }
    }
}
</style>

