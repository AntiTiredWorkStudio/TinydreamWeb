// console.log(app.userInfo)
var uid = app.userInfo.openid;
var pay = new Vue({
    el:'#pay',
    data:{
        progress1:'0',//进度
        dreamTitle:'',//梦想标题
        time:'',//倒计时
        bill:'',//累计互助金
        ubill:'',//价格
        pay:'',//支付金额
        text:'',//梦想池文字
        tbill:'',//互助目标
        count:'1',//当日可购买份数,
        pless:'',//可购买份数
        dreamType:'选择梦想',//可选值 制定项目
        show:false,
        rubillValue:'',//单价（用于结算）
        dream:'--',//梦想
        actions:['123'],
        pay_action:'',
        oid:'',//订单号
        did:'',//梦想 id
        pid:'',//梦想池期号
    },
    created(){
        if(!ExistStorage('buy')){
            $('body').html('');
            window.location.href = '../../index.html?time='+new Date().getTime();
        }else{
            if($_GET.type == 'dream'){
                $('title').html('小梦想支付');
                $('#arrow').show();
                $('.time').show();
                $('.bill').css('margin-top','0.4rem');
                // 选择默认梦想
                this.GETDREAM(uid,this);
            }else if($_GET.type == 'trade'){
                this.dream = JSON.parse(GetStorage('buy')).buy.dream.title;
                $('title').html('小生意支付');
                $('.time').hide();
                this.dreamType = '指定项目';
                $('#arrow').hide();
                $('.bill').css('margin-top',0);
            }

            // 调用下单
            this.ORD(GetStorage('buy'),this);
        }
    },
    methods:{
        // 下单
        ORD(actions,obj){
            TD_Request('ds','ord',{action:actions,dblink:'test'},function(code,data){
                console.log(data)
                obj.pless = data.actions.pay.pless;
                if($_GET.type == 'trade'){
                    obj.did = data.actions.pay.did;
                }
                var pool = DreamPoolAnalysis(data.pool);
                console.log(pool)
                obj.dreamTitle = pool.ptitle;
                obj.ubill = pool.rubillValue + pool.rubillUnit;
                obj.rubillValue = pool.rubillValue;
                obj.pay = obj.count * obj.rubillValue;
                obj.bill = pool.realBill + pool.realUnit;
                obj.text = pool.billHint;
                obj.pay_action = data.actions;
                obj.oid = data.actions.pay.oid;//订单号
                obj.did = data.actions.pay.did;//初始梦想 id
                obj.pid = data.actions.pay.pid;//梦想池期号
                obj.progress1 = pool.realBill / pool.rtbillValue;
                obj.tbill = pool.rtbillValue + pool.rtbillUnit;
                var ptime = parseInt(pool.ptime);
                var duration = parseInt(pool.duration);
                var timeStemp = ptime + duration;
                obj.TimeOut(timeStemp,obj);
            },function(code,data){
                console.log(data);
            })
        },
        // 倒计时
        TimeOut(timeStemp,obj){
            setInterval(function(){
                var date = parseInt(new Date().getTime() / 1000);
                var second = timeStemp - date;
                var h = Math.floor(second/60/60) < 10 ? '0' + Math.floor(second/60/60) : Math.floor(second/60/60);
                var m = Math.floor(second/60%60) < 10 ? '0' + Math.floor(second/60%60) : Math.floor(second/60%60);
                var s = Math.floor(second%60) < 10 ? '0' + Math.floor(second%60) : Math.floor(second%60);
                var time = h+':'+m+':'+s;
                obj.time = time;
            },1000)  
        },
        // 获取梦想列表
        GETDREAM(uid,obj){
            TD_Request('dr','dlist',{
                uid:uid,
                dblink:'test'
            },function(code,data){
                console.log(data)
                obj.dream = data.dreams[data.dreams.length-1].title;
                obj.did = data.dreams[data.dreams.length-1].did;
                var dreamArr = [];
                $.each(data.dreams,function(index,item){
                    dreamArr.push({name:item.title,did:item.did});
                })
                obj.actions = dreamArr;
                console.log(obj.actions)
            },function(code,data){
                console.log(data)
            })
        },
        onSelect(item){
            console.log(item)
            this.did = item.did;
            this.dream = item.name;
            this.show = false;
        },
        select(){
            // 选择梦想
            if($_GET.type == 'dream'){
                this.show = true
            }else{
                this.show = false
            }
        },
        // 增加份数
        add(pless){
            var buy = JSON.parse(GetStorage('buy'));
            console.log(pless)
            $('.incre').removeAttr('disabled')
            if(this.count>=buy.buy.dayLim){
                this.count = buy.buy.dayLim;
                $('.add').attr('disabled','disabled')
            }else if(this.count >= pless){
                this.count = pless
            }else{
                $('.add').removeAttr('disabled');
                this.count++;
                this.pay = this.count * this.rubillValue;
            }
        },
        incre(pless){
            $('.add').removeAttr('disabled');
            if(this.count<=1){
                this.count = 1;
                $('.incre').attr('disabled','disabled');
            }else{
                $('.incre').removeAttr('disabled');
                this.count--;
                this.pay = this.count * this.rubillValue;
            }
        },
        // 微信支付
        Pay(){
            this.wxPay(this.oid,this.pay,uid,this)
        },
        // 统一下单
        wxPay(oid,bill,uid,obj){
            TD_Request('ds','wxpayweb',{
                oid:oid,
                bill:bill,
                uid:uid,
                dblink:'test'
            },function(code,data){
                console.log(data)
                console.log(data)
                obj.WXJSAPI(data.appId,data.timeStamp,data.nonceStr,data.package,data.signType,data.paySign,obj)
                
            },function(code,data){
                console.log(data);
            })
        },
        // 唤醒支付
        WXJSAPI(appId,timeStamp,nonceStr,package,signType,paySign,vue){
            // console.log(appId,timeStamp,nonceStr,package,signType,paySign,vue)
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', 
                {
                    "appId":appId,     //公众号名称，由商户传入     
                    "timeStamp":timeStamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr":nonceStr, //随机串     
                    "package":package,     
                    "signType":signType,         //微信签名方式：     
                    "paySign":paySign //微信签名 
                },function(res){
                    alert(JSON.stringify(res))
                if(res.err_msg == "get_brand_wcpay_request:ok" ){
                  vue.SUCCESS(uid,vue.oid,0.01*100,vue.count,vue.pay_action,vue.did,vue);
                } 
            }); 
        },
        // 支付完成
        SUCCESS(uid,oid,fee,pcount,actions,did,vue){
            TD_Request('ds','pay',{
                uid:uid,
                oid:oid,
                bill:fee,
                pcount:pcount,
                action:actions,
                did:did,
                dblink:'test'
            },function(code,data){
                localStorage.setItem('info',JSON.stringify({'did':did,'pid':vue.pid}));
                localStorage.removeItem('buy');
                window.location.href = '../share/share.html?time='+new Date().getTime();
            },function(code,data){
                console.log(data)
            })
        }
    }
})