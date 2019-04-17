var uid = Options.GetUserInfo().openid;
WebApp.JSAPI.InitShare({
    title:'行动打卡',
    desc:"有梦就行动，坚持返现金！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/clockIn.html?time='+ new Date().getTime(),
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
var clockIn = new Vue({
    el:'#clockIn',
    data:{
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
    },
    created(){
        this.tabbar = common.tabbar;
        common.notice(this,uid);
        Options.TestServer = true;
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
            alert(cid);
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
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'列表获取中...'
            })
            TD_Request('co','list',{},function(code,data){
                console.log(data);
                self.contractType = data.themes;
                self.contracts = data.contracts;
                self.cattention = data.cattention;
                self.$toast.clear()
            },function(code,data){
                self.$toast.clear();
                alert(data.context)
            })
        },
        // 获取合约信息
        ContractInfo(self,cid){
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息获取中...'
            })
            TD_Request('co','info',{cid:cid},function(code,data){
                console.log(data)
                self.title = data.contract.title;
                self.desc = data.contract.description;
                self.price = data.contract.price / 100;
                self.cid = data.contract.cid;
                if(cid == 'CO0000000001'){
                    $('#warm').html( self.cattention.CO0000000001);
                }else if(cid == 'CO0000000002'){
                    $('#warm').html( self.cattention.CO0000000002);
                }
                self.$toast.clear();
            },function(code,data){
                self.$toast.clear();
                alert(data.context);
            })
        },
        // 微信支付
        wxpay(self,cid,theme){
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'准备中...'
            })
            TD_Request('op','joi',{cid:cid,uid:uid},function(code,data){
                console.log(data)
                self.$toast.clear();
                self.wxpayweb(self,data.pay,data.order.oid,cid,theme)
            },function(code,data){
                self.$toast.clear();
                if(code == 81){
                    self.$dialog.alert({
                        title:'错误提示',
                        message:'合约ID有误，请联系客服进行处理'
                    }).then(()=>{
                        // 旧 UI 跳转
                        window.location.href = 'cach.html?time='+new Date().getTime()
                        // 新 UI 跳转
                        // window.location.href = '../coach/coach.html?time='+ new Date().getTime();
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
                        // 旧 UI 跳转
                        window.location.href = '../../../html/phoneManage.html?time='+new Date().getTime()
                        // 新 UI 跳转
                        // window.location.href = '../phoneManage/phoneManage.html?time='+ new Date().getTime();
                    })
                }else if(code == 58){
                    self.$dialog.confirm({
                        title:'错误提示',
                        message:'订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！'
                    }).then(()=>{
                        // 旧 UI 跳转
                        window.location.href = '../../../html/cach.html?time='+new Date().getTime()
                        // 新 UI 跳转
                        // window.location.href = '../cach/cach.html?time='+ new Date().getTime();
                    }).catch(()=>{
                        return;
                    })
                }
                console.log(data);
            })
        },
        // 唤醒支付
        wxpayweb(self,pay,oid,cid,theme){
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'支付中...'
            })
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
                        self.paySuccess(cid,oid,uid,theme)
                  } else if(res.err_msg == "get_brand_wcpay_request:cancel" ){
                        self.$toast.fail('支付取消');
                  }
               }); 
        },
        // 支付成功
        paySuccess(cid,oid,uid,theme){
            TD_Request('op','jof',{
                cid:cid,
                oid:oid,
                uid:uid,
                theme:theme
            },function(code,data){
                self.$toast.success('购买成功');
                window.location.href = '../actionClock/actionClock.html?time='+ new Date().getTime();
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
            $('.banner').css('background','url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem');
            this.custom = '其他';
            this.theme = '';
            this.status = null;

        },
        // 联系客服
        callMe(){
            window.location.href = '../../../html/cach.html?time='+new Date().getTime()
        },
        // 订单信息
        Orders(self){
            TD_Request('op','eomp',{uid:uid},function(code,data){
                console.log(data)
                self.feedback = data.feedback;
                var order = data.orders.shift();
                self.order = order;
                data.orders.push(order);
                self.orders = data.orders;
                self.loop(self)
                console.log(data.orders);
            },function(code,data){
                console.log(data)
                if(code == 82){
                    $('body').html('');
                    window.location.href = '../actionClock/actionClock.html?time='+new Date().getTime();
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
    },
    watch:{
        value(data){
            if(data.length >= 8){
                this.value = data.substr(0,20);
                console.log(this.value)
            }
        }
    }
})