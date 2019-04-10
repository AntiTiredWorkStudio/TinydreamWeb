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
        checkArr:[],//选择的数组
        price:'',//合约金
        // bill:'',//返现
        day:'',//合约天数
        warm:'',//注意事项
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
        conType(title,index){
            console.log(title,index);
            this.contractType[index].check = !this.contractType[index].check;
            if(this.contractType[index].check){
                this.checkArr.push(title)
            }else{
                this.removeArray(this.checkArr,title);
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
            this.show = false;
            this.payCancel = true;
        },
        // 支付
        pay(bill,cid){
            if(this.checkArr == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！'
                }).then(()=>{
                    return;
                })
            }else{
                console.log(bill,cid)
                let theme = this.checkArr.join(',');
                console.log(theme);
                this.wxpay(this,cid,bill)
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
        wxpay(self,cid,bill){
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'准备中...'
            })
            
            TD_Request('op','joi',{cid:cid,uid:uid},function(code,data){
                console.log(data)
                self.$toast.clear();
                self.wxpayweb(self,pay,data.order.oid,cid)
            },function(code,data){
                self.$toast.clear();
                console.log(data);
            })
        },
        // 唤醒支付
        wxpayweb(self,pay,oid,cid){
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
                        self.$toast.success('支付成功');
                        self.paySuccess(cid,oid,uid,)
                  } 
               }); 
        }
    },
})