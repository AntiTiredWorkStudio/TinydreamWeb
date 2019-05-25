<template>
    <van-col class="friend" span="24">
            <van-col span="24" class="banner"></van-col>
            <van-col span="24" class="friend_info">
                <van-col span="16">
                    <div class="left">
                        <div class="headicon"></div>
                        <p class="msg">{{nickname == '' ? '--' : nickname}}{{type == true ? '已加入追梦行动派' : '已在追梦行动派连续为'}}</p>
                        <p class="isshow" :style="{display: type == true ? 'none' : 'inline-block'}">{{theme == '' ? '--' : theme}}行动打卡<span style="font-size:0.38rem">{{alrday == '' ? '--' :
                                alrday}}</span>天</p>
                        <p>现邀请您一起加入!</p>
                        <p style="text-align:center;margin-top:0.2rem;width:3.4rem;height:0.46rem;line-height: 0.46rem;color:#fff;background: #00d094;">坚持行动可以得{{refund
                            == '' ? '--' : refund / 100}}元现金</p>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="right" style="float:right;margin-right: 0.3rem">
                        <div class="qr">
                            <img src="http://cloud.antit.top/LongPress2ShareQR01.jpg" alt="">
                        </div>
                        <p>长按二维码</p>
                        <p>加入行动派</p>
                    </div>
                </van-col>
            </van-col>
            <van-col span="24" class="contract">
                <div class="main">
                    <van-col span="24">
                        <div class="day-100" @click="buy(contracts[1].cid)">
                            <h3 class="title">{{contracts == '' ? '--' : contracts[1].title}}</h3>
                            <p class="desc">
                                {{contracts == '' ? '--' : contracts[1].description}}
                            </p>
                            <van-button round size="small" type="primary" class="buy" @click.stop="buy(contracts[1].cid)">立即购买</van-button>
                        </div>
                    </van-col>
                    <van-col span="24">
                        <div class="day-21" @click="buy(contracts[0].cid)">
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
                            <li v-for="(contract,index) in contractType" class="contract" :class="index == status ? 'active' : ''"
                                @click.stop="conType(index,contract.check,contract.title)" :key="index">
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
                                <p>寻梦导师</p>
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
        </van-col>
</template>

<script>
export default {
    name:'friend',
    data () {
        return {
            contracts:'',//合约列表
            show:false,//是否显示弹窗
            cid:'',//合约 id
            desc:'',//合约描述
            title:'',//合约标题
            contractType:'',//可选类型
            price:'',//合约金
            day:'',//合约天数
            warm:'',//注意事项
            status:null,
            theme:'',//所选主题
            isshow:false,//是否显示自定义主题
            custom:'',//自定义主题
            value:'',//自定义主题
            payCancel:false,//支付取消弹窗
            nickname:'',//好友昵称
            theme:'',//好友参加的主题
            alrday:'',//打卡天数
            refund:'',//返还金额
            cattention:'',
            type:false,//是否为新用户，
            feedback:'',//用户反馈，
            uid:''
        }
    },
    created(){
       if(JSON.parse(GetStorage('share')).opid != ''){
           if(JSON.parse(GetStorage('share')).type == 'new'){
                this.type = true;
            }
           if(GetStorage('userInfo') == null || GetStorage('userInfo') == ''){
                window.location.href = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/index.html?time='+new Date().getTime()+'&type='+JSON.parse(GetStorage('share')).type+'&opid='+JSON.parse(GetStorage('share')).opid+'&state=clock'
            }else{
                // 合约列表
                this.uid = JSON.parse(GetStorage('userInfo')).openid;
                this.Register(this)
            }
       }else{
           this.$router.push('/')
       }
    },
    methods:{
        // 信息注册
        Register(self){
            TD_Request('us','enter',{
                uid:JSON.parse(GetStorage('userInfo')).openid,
                nickname:JSON.parse(GetStorage('userInfo')).nickname,
                headicon:JSON.parse(GetStorage('userInfo')).headimgurl
            },function(code,data){
                console.log(data)
                // 合约列表
                self.list(self);
                // 返回信息
                self.Info(self,JSON.parse(GetStorage('share')).opid);
                self.Orders(self)
            },function(code,data){
                console.log(data)
                
            })
        },
        // 个人打卡信息
        Info(self,opid){
            TD_Request('op','oshar',{opid:opid},function(code,data){
                console.log(data)
                $('.headicon').css('background','url('+data.headicon+') no-repeat center center / 1rem 1rem');
                self.nickname = data.nickname;
                self.refund = data.refund;
                TD_Request('op','oif',{opid:opid,uid:self.uid},function(code,data){
                    console.log(data)
                    self.theme = data.info.theme;
                    self.alrday = data.info.alrday;
                    if(self.type){
                        var title = data.info.nickname+'已加入追梦行动派！'
                        var url =  'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'type=clock&state=yes&opid='+opid+'status=new&url=friend'
                    }else{
                        var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'type=clock&state=yes&opid='+opid+'status=old&url=friend'
                        var title = data.info.nickname+"已加入追梦行动派为 "+data.info.theme+' 坚持行动'+data.info.alrday+'天'
                    }
                    WebApp.JSAPI.InitShare({
                        title:title,
                        desc:"有梦就行动，坚持返现金！",
                        link:url,
                        imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
                    });
                    WebApp.JSAPI.OnShareTimeLine = function(res){
                        console.log(res)
                        if(res){
                            self.isshow = false;
                            self.share(self,opid,date);
                        }else if(res){
                            self.$toast.fail('您取消了分享')
                        }
                    }
                    WebApp.JSAPI.OnShareFriend = function(res){
                        console.log(res);
                        if(res){
                            self.isshow = false;
                            self.share(self,opid,date);
                        }else if(res){
                            self.$toast.fail('您取消了分享')
                        }
                    }
                },function(code,data){
                    console.log(data);
                })
            },function(code,data){
                console.log(data)
            })
        },
        share(self,opid,date){
            console.log(date);
            if(typeof date != 'undefined'){
                console.log(date)
                TD_Request('op','rep',{opid:opid,date:date,uid:self.uid},function(code,data){
                    self.$toast.success('分享成功')
                    // return;
                    self.Mat(self)
                },function(code,data){
                    self.$toast.fail('分享失败')
                })
            }else{
                self.$router.push('/clock');
            }
        },
        // 点击购买合约
        buy(cid){
            this.show = true;
            // 合约信息
            this.cid = cid;
            this.ContractInfo(this,cid);
        },
        // checkbox
        conType(index,status,title){
            this.status = index;
            if(index != 12){
                this.theme = this.contractType[index].title;
            }else{
                this.isshow = true;
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
        Orders(self){
            TD_Request('op','eomp',{uid:self.uid},function(code,data){
                self.feedback = data.feedback;
            },function(code,data){
                console.log(data)
                if(code == 82){
                     self.$router.push('/clock')
                }
            })
        },
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
        // 合约列表
        list(self){
            TD_Request('co','list',{},function(code,data){
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
                    $('#warm').html(self.cattention.CO0000000001).css({
                        'font-size': '0.26rem',
                        color: '#999'
                    });
                }else if(cid == 'CO0000000002'){
                    $('#warm').html(self.cattention.CO0000000002).css({
                        'font-size': '0.26rem',
                        color: '#999'
                    });
                }
            },function(code,data){
                alert(data.context);
            })
        },
        // 微信支付
        wxpay(self,cid,theme){
            TD_Request('op','joi',{cid:cid,uid:self.uid},function(code,data){
                console.log(data)
                self.wxpayweb(self,data.pay,data.order.oid,cid,theme)
            },function(code,data){
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
                        SaveStorage('type','clock');
                        SaveStorage('info','{"opid":"'+app.$route.params.opid+'","type":"'+app.$route.params.type+'"}')
                        app.$router.push('/phone')
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
                        self.paySuccess(self,cid,oid,self.uid,theme)
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
                theme:theme,
                icode:JSON.parse(GetStorage('share')).opid
            },function(code,data){
                RemoveStorage('type')
                self.$router.push('/clock')
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
            this.custom = '其他';
            this.theme = '';
            this.status = 'undefined';
        },
        // 联系客服
        callMe(){
            this.$router.push('/cach')
        },
        // 关闭弹窗
        close(){
            this.status = '';
            this.show = false;
            this.payCancel = true;
        },
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
    html{
    width: 100%;
    height: 100%;
    body{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #fff;
        // 用户反馈
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
        .friend{
            width: 100%;
            height: 100%;
            background: #fff;
            .banner{
                height: 3.8rem;
                background: url(https://tdream.antit.top/FShareBanner.jpg) no-repeat center center / 7.5rem 3.8rem;
            }
            .friend_info{
                position: relative;
                top: -0.22rem;
                width: 6.8rem;
                background: #fff;
                min-height: 2.8rem;
                border-radius: 0.1rem;
                margin: 0 0.35rem;
                box-shadow: 0.02rem 0px 0.1rem 0.02rem rgba(0, 0, 0, .1), -0.02rem 0 0.1rem 0.02rem rgba(0, 0, 0, .1), 0 0.02rem 0.1rem 0.02rem rgba(0, 0, 0, .1), 0 -0.02rem 0.1rem 0.02rem rgba(0, 0, 0, .1);
                .left{
                    margin-left: 0.3rem;
                    .headicon{
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                        position: relative;
                        top: -0.4rem;
                        background: #000;
                    }
                    p{
                        position: relative;
                        top: -0.2rem;
                        font-size: 0.26rem;
                        color: #4c4c4c;
                    }
                }
                .right{
                    margin: 0.3rem 0.3rem 0 0;
                    width: 1.6rem;
                    height: 1.6rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    p{
                        font-size: 0.26rem;
                        color: #4c4c4c;
                        text-align: center;
                    }
                }
            }
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
                        font-size: 0.42rem;
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
            // 弹窗
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
                .warm_txt{
                    font-size: 0.26rem;
                    color: #999;
                }
                .btn{
                    margin-top: 0.6rem;
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
                    background: url(https://tdream.antit.top/image/contract.jpg) no-repeat center center / 5.8rem 6.9rem;
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
    }
}
</style>


