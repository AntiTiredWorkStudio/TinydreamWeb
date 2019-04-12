var app = new Vue({
    el:'#app',
    data:{
        userInfo:'',//个人信息
        buyinfo:'',//购买信息
        active:0,//默认激活
        progress1: '0',//当前进度
        mainpool:'',//小梦想互助池
        timeout:'',//倒计时
        maintrade:'',//小生意互助池
        progress2:'',//小生意互助进度
        tradeStyle:'',//小生意banner图
        actives:0,//默认激活
        show:false,//是否显示弹窗,
        luckyMessage:'',//幸运提示
        luckBtn:'',//弹窗按钮文本
        luckDid:'',//中奖 did
        activeKey:0,
        tabbar:''
    },
    created(){
        this.GetUserInfo(this);
    },
    methods:{
        // 拉取信息
        /**
         * 参数 self = vue
         */
        GetUserInfo(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息拉取中...'
            })
            WebApp.Init('wxc5216d15dd321ac5',//appid
            function(result,data){//result:请求状态,data 请求结果
                console.log(Options.GetUserInfo());
                self.tabbar = common.tabbar;
                common.notice(Options.GetUserInfo().openid);
                console.log(common.notice())
                self.userInfo = Options.GetUserInfo();
                // 开启测试服务器
                Options.TestServer = true;
                self.$toast.clear();
                self.$toast.loading({
                    duration:0,
                    forbidClick:true,
                    loadingType:'circular',
                    message:'信息注册中...'
                })
                // 新用户注册信息
                self.Register(self);
            });
        },
        // 信息注册
        Register(self){
            TD_Request('us','enter',{
                uid:self.userInfo.openid,
                nickname:self.userInfo.nickname,
                headicon:self.userInfo.headimgurl
            },function(code,data){
                console.log(data)
                self.$toast.clear();
                self.$toast.loading({
                    duration:0,
                    forbidClick:true,
                    loadingType:'circular',
                    message:'公屏加载中...'
                })
                // 判断购买信息是否为空
                if(data.buyinfo.length == 0){
                    $('.screen_main').html('暂无人购买').css({
                        'color':'#999',
                        'font-size':'0.26rem',
                        'text-align':'center'
                    })
                    self.$toast.clear();
                }else{
                    self.Screen(data.buyinfo);
                    let that = self;
                    setInterval(() => {
                        that.Screen(data.buyinfo)
                    },4000)
                }
                // 判断梦想池是否为空
                self.$toast.loading({
                    duration:0,
                    forbidClick:true,
                    loadingType:'circular',
                    message:'奖池加载中...'
                })
                if(data.mainpool.length == 0){
                    $('.dream').html('暂无更多梦想池').css({
                        color:'#999',
                        'font-size':'0.26rem',
                        'text-align':'center',
                        'line-height':'1.5rem',
                        padding:'0'
                    })
                    self.$toast.clear();
                }else{
                    let mainpool = DreamPoolAnalysis(data.mainpool);
                    self.progress1 = mainpool.cbill / mainpool.tbill;
                    
                    var ptime = parseInt(mainpool.ptime);
                    var daurtion = parseInt(mainpool.duration);
                    self.mainpool = mainpool;
                    self.mainpool.time = self.SetTimeOut(ptime + daurtion);
                    setInterval(()=>{
                        self.timeout = self.SetTimeOut(ptime + daurtion)
                    },1000)
                    self.$toast.clear()
                }
                // 判断生意梦想池是否为空
                if(data.maintrade.length == 0){
                    $('.trade').html('暂无更多小生意').css({
                        color:'#999',
                        'font-size':'0.26rem',
                        'text-align':'center',
                        'line-height':'1.5rem',
                        padding:'0'
                    })
                }else{
                    let maintrade = DreamPoolAnalysis(data.maintrade);
                    self.progress2 = maintrade.cbill / maintrade.tbill;
                    self.tradeStyle = {
                        background:'url('+maintrade.trade.bannerUrl+') no-repeat 0 0 / 6.8rem 3.86rem'
                    }
                    self.maintrade = maintrade;
                }
                // 判断是否中奖
                if(data.award.result){
                    self.popState('dream',self)
                    $('.msg').css('font-size','0.32rem');
                    self.luckyMessage = '恭喜您成为梦想互助'+data.award.pid+'期幸运者,幸运编号为'+data.award.lid+',本期中奖梦想为'+data.award.title+',请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内为您颁发梦想互助金!'
                    self.luckDid = data.award.did;
                    self.show = true;
                }else if(data.tradeaward.length != 0){
                    self.popState('trade',self)
                    self.luckyMessage = "恭喜您参与的小生意互助"+data.tradeaward.pid+"期成为幸运者，幸运编号为"+data.tradeaward.lid+"，本期免费获得项目为："+data.tradeaward.trade.title+".   我们工作人员会在3个工作日内联系您安排项目对接，请您保持电话畅通。 为更好地给您对接项目，请您务必在7个工作日内完成实名认证。"
                    self.show = true;
                }else{
                    self.show = false;
                }
                // 获取通知数量
                self.notice(self.userInfo.openid,self);
            },function(code,data){
                console.log(data)
            })
        },
        // 公屏信息展示
        Screen(buyinfo){
            var buyInfo;
            buyInfo = buyinfo.shift();
            buyinfo.push(buyInfo);
            var date = parseInt(new Date().getTime() / 1000);
            var time = DescriptionTime(date - buyInfo.ptime);
            this.buyinfo = {
                dcount:buyInfo.dcount,
                nickname:buyInfo.nickname,
                time:time,
                ptype:buyInfo.ptype,
                headStyle:{
                    'background':'url('+ buyInfo.headicon +') no-repeat center center / 0.48rem 0.48rem'
                }
            };
            this.$toast.clear();
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
        // 跳转梦想池列表页面
        dream(){
            window.location.href = 'html/dreampool/dreampool.html?time='+new Date().getTime()+'&active=0'
        },
        // 跳转生意详情页
        tradeInfo(){
            window.location.href = 'html/tradeInfo/tradeInfo.html?time='+new Date().getTime()+'&id='+this.maintrade.trade.url;
        },
        // 参与互助
        join(state){
            if(state == 'dream'){
                this.buy('dream',this.mainpool.pid,this);
            }else if(state == 'trade'){
                this.buy('trade',this.maintrade.pid,this);
            }
        },
        // 准备购买梦想
        buy(state,pid,self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'准备订单中...'
            })
            TD_Request('ds','buy',{
                uid:self.userInfo.openid,
                pid:pid
            },function(code,data){
                self.$toast.clear();
                console.log(data,data.actions.hasOwnProperty('editdream'));
                if(state == 'trade'){
                    SaveStorage('buy',JSON.stringify(data.actions))
                    window.location.href = 'html/payInfo/payInfo.html?time='+new Date().getTime()+'&type=TRADE'
                }else{
                    if(!data.actions.hasOwnProperty('editdream')){
                        SaveStorage('buy',JSON.stringify(data.actions));
                        window.location.href = 'html/payInfo/payInfo.html?time='+new Date().getTime()+'&type=DREAM'
                    }else{
                        self.$dialog.setDefaultOptions({
                            confirmButtonText:'添加梦想',
                        })
                        self.$dialog.confirm({
                            title:'温馨提示',
                            message:'亲~您还没有添加梦想或者您的梦想已经实现，是否前往添加新梦想！'
                        }).then(()=>{
                            self.$dialog.resetDefaultOptions();
                            window.location.href = 'html/dream/add.html?time='+new Date().getTime()+'&type=dream&pid='+self.mainpool.pid;
                        }).catch(()=>{
                            self.$dialog.resetDefaultOptions();
                            window.location.href = 'index.html?time='+new Date().getTime();
                        })
                    }
                }
            },function(code,data){
                self.$toast.clear();
                console.log(data);
                if(code == 11){
                    self.$dialog.setDefaultOptions({
                        confirmButtonText:'绑定手机',
                    })
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~您还没有绑定手机，绑定手机后即可参与互助!'
                    }).then(()=>{
                        self.$dialog.resetDefaultOptions();
                        if(state == 'dream'){
                            window.location.href = 'html/phoneManage/phone.html?time='+new Date().getTime()+'&type=phone&pid='+self.mainpool.pid;
                        }else if(state == 'trade'){
                            window.location.href = 'html/phoneManage/phone.html?time='+new Date().getTime()+'&type=phone&pid='+self.maintrade.pid;
                        }
                    })
                } else if(code == 18){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~您今日购买次数已达上限，请您明天再来吧!'
                    }).then(()=>{
                        window.location.href = 'index.html?time='+new Date().getTime();
                    })
                }
            })
        },
        // 查看规则
        rules(){
            window.location.href = 'html/rules/rules.html?time='+new Date().getTime();
        },
        // 弹窗监测状态
        popState(state,self){
            TD_Request('us','rnamegx',{
                uid:self.userInfo.openid
            },function(code,data){
                if(state == 'dream'){
                    self.luckBtn = '完善梦想'
                }else if(state == 'trade'){
                    self.luckBtn = 'ok,我知道了'
                }
            },function(code,data){
                console.log(data)   
                self.luckBtn = '实名认证'
            });
        },
        // 点击弹窗
        lucky(message){
            this.show = false;
            console.log(message)
            if(message == 'ok,我知道了'){
                window.location.href = 'index.html?time='+new Date().getTime();
            }else if(message == '完善梦想'){
                localStorage.setItem('dr','{"did":"'+did+'","state":"all"}')
                window.location.href = 'html/add.html?time='+new Date().getTime()
            }else{
                window.location.href = 'html/auth.html?time='+new Date().getTime()
            }
        },
        // 获取通知数量
        notice(uid,self){
            TD_Request('no','nc',{uid:uid},function(code,data){
                self.tabbar[2].info = data.ncount;
            },function(code,data){
                console.log(data);
            })
        },
    }
})