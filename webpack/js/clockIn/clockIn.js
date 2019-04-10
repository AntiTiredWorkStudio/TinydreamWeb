var uid = Options.GetUserInfo().openid;

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
    },
    created(){
        this.tabbar = common.tabbar;
        Options.TestServer = false;
        // 获取合约列表
        this.list(this)
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
            if(status){
                console.log($('li').eq(index).children().next())
                $('li').eq(index).children().next().html('<input type="text" id="focus" style="width:0.5rem"><span style="display:inline-block;border:1px solid #fff;height:0.44rem;margin-top:0.22rem;padding:0 0.1rem;">确定</span>');
                $('#focus').focus();
            }
            this.status = index;
            this.theme = this.contractType[index].title;
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
            this.status = '';
            this.show = false;
            this.payCancel = true;
        },
        // 支付
        pay(cid){
            if(this.checkArr == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！'
                }).then(()=>{
                    return;
                })
            }else{
                var theme = this.theme;
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
                self.contractType = data.themes;
                self.contracts = data.contracts;
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
                        window.location.href = 'phoneManage.html?time='+new Date().getTime()
                        // 新 UI 跳转
                        // window.location.href = '../phoneManage/phoneManage.html?time='+ new Date().getTime();
                    })
                }else if(code == 58){
                    self.$dialog.confirm({
                        title:'错误提示',
                        message:'订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！'
                    }).then(()=>{
                        // 旧 UI 跳转
                        window.location.href = 'cach.html?time='+new Date().getTime()
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
            },function(code,data){
                alert(code)
            })
        },
        againPay(){
            this.payCancel = false;
            this.show = true;
        }
    },
})