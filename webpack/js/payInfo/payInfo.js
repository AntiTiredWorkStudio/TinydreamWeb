var uid = Options.GetUserInfo().openid;
var pay = new Vue({
    el:'#pay',
    data:{
        actions:'',//支付信息
        pool:'',//奖池信息
        progress1:'',//进度
        timeout:'',//倒计时
        did:'',//梦想 id
        pay:'',//总钱数
        count:1,//份数
        buy:'',//预订单信息
        dream:'',//选择的梦想
        actions:[],//梦想选择列表
        show:false,//是否显示上拉菜单
    },
    created(){
        Options.TestServer = true;
        if(!ExistStorage('buy')){
            $('body').html('');
            window.location.href = '../../index.html'
        }else{
            // 读取 buy
            var buy = JSON.parse(GetStorage('buy'))
            this.buy = buy.buy;
            console.log(buy)
            if($_GET.type == 'DREAM'){
                $('title').html('小梦想支付')
                $('.time').show();
                $('#dream').html(this.buy.dream.title);
                this.dreamList(this,uid);
            }else if($_GET.type == 'TRADE'){
                $('title').html('小生意支付');
                $('.time').hide();
                $('.ubill').css('margin-top',0);
                $('.dream .txt').html('本期项目');
                self.did = buy.buy.dream.tid;
                $('.arrow').hide();
                $('#dream').html(this.buy.dream.title);
            }
            this.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'订单生成中...'
            })
            this.Ord(this,GetStorage('buy'));
        }
    },
    methods:{
        // 预支付订单
        Ord(self,actions){
            TD_Request('ds','ord',{
                action:actions
            },function(code,data){
                console.log(data)
                // 备份 actions
                self.action = data.actions;
                self.pool = DreamPoolAnalysis(data.pool);
                self.progress1 = data.pool.cbill / data.pool.tbill;
                // 倒计时
                var ptime = parseInt(self.pool.ptime);
                var daurtion = parseInt(self.pool.duration);
                self.timeout = self.SetTimeOut(ptime + daurtion);
                setInterval(()=>{
                    self.timeout = self.SetTimeOut(ptime + daurtion)
                },1000)
                // 填写信息
                self.pay = self.pool.rubillValue * self.count;
                self.$toast.clear();
            },function(code,data){
                console.log(data);
            })
        },
        // 倒计时
        SetTimeOut(timeStamp){
            var time = parseInt(new Date().getTime() / 1000);
            var timeout = parseInt(timeStamp - time);
            var h = Math.floor(timeout/60/60) < 10 ? '0' + Math.floor(timeout/60/60) : Math.floor(timeout/60/60);
            var m = Math.floor(timeout/60%60) < 10 ? '0' + Math.floor(timeout/60%60) : Math.floor(timeout/60%60);
            var s = Math.floor(timeout%60) < 10 ? '0' + Math.floor(timeout%60) : Math.floor(timeout%60); 
            if(h == 0 && m == 0 && s == 0){
                window.location.reload();
            }
            var time = h + ":" + m + ":" + s;
            return time;
        },
        // 加份数
        add(){
            this.count++;
            console.log(this.count)
            this.Ord(this,GetStorage('buy'))
            if(this.count >= 5){
                this.count = 5;
            }else if(this.count >= this.buy.dayLim){
                this.count = this.buy.dayLim;
            }
            this.pay = this.pool.rubillValue * this.count;
        },
        // 减份数
        incre(){
            this.count--;
            console.log(this.count)
            this.Ord(this,GetStorage('buy'))
            if(this.count <= 0){
                this.count = 1;
            }
            this.pay = this.pool.rubillValue * this.count;
        },
        // 梦想选择
        selectDream(){
            this.show = true;
        },
        // 获取梦想列表
        dreamList(self,uid){
            TD_Request('dr','dlist',{
                uid:uid
            },function(code,data){
                console.log(data)
                $.each(data.dreams,function(index,item){
                    console.log(item);
                    if(item.state == "FAILD" || item.state == "SUBMIT"){
                        self.actions.push({
                            name:item.title,
                            did:item.did
                        })
                    }
                })
            },function(code,data){
                console.log(data);
            })
        },
        // 点击选择触发事件
        onSelect(item){
            console.log(item);
            $('#dream').html(item.name);
            this.did = item.did;
            this.show = false;
        },
        // 取消选择时触发的事件
        onCancel(){
            this.show = false;
            return;
        },
        // 进行下单
        wxPay(){
            console.log(1)
            this.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'正在支付...'
            })
            this.wxpay(this.action.pay.oid,0.01 * 100,uid,this);
        },
        // 统一下单
        wxpay(oid,bill,uid,self){
            TD_Request('ds','wxpayweb',{
                oid:oid,
                bill:bill,
                uid:uid
            },function(code,data){
                self.$toast.clear();
                self.wechat(data.appId,data.timeStamp,data.nonceStr,data.package,data.signType,data.paySign,self)
            },function(code,data){
                console.log(data);
            })
        },
        // 唤醒支付
        wechat(appId,timeStamp,nonceStr,package,signType,paySign,self){
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                "appId":appId,     //公众号名称，由商户传入     
                "timeStamp":timeStamp,         //时间戳，自1970年以来的秒数     
                "nonceStr":nonceStr, //随机串     
                "package":package,     
                "signType":signType,         //微信签名方式：     
                "paySign":paySign //微信签名 
                },function(res){
                    alert(JSON.stringify(res));
                  if(res.err_msg == "get_brand_wcpay_request:ok" ){
                  // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    self.paySuccess(uid,self.action.pay.oid,self.pay * 100,self.count,JSON.stringify(self.action),self.did,self,pool.pid);   
                  }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                      self.$toast.fail('支付取消')
                  }
               });
        },
        // 支付成功
        paySuccess(uid,oid,bill,pcount,action,did,self,pid){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'编号生成中...'
            })
            TD_Request('ds','pay',{
                uid:uid,
                oid:oid,
                bill:bill,
                pcount:pcount,
                action:action,
                did:did
            },function(code,data){
                alert(JSON.stringify(data))
                self.$toast.clear();
                localStorage.setItem('info',JSON.stringify({'did':did,'pid':pid}));
                localStorage.removeItem('buy');
                alert()
                window.location.href = '../../html/share/share.htm?time='+new Date().getTime()+'&type='+$_GET.type;
            },function(code,data){
                alert(code)
                self.$toast.clear();
                console.log(data)
            })
        }
    }
})