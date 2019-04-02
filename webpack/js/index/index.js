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
        tabbar:[
            {
                title:'参与互助',
                normal:'http://tdream.antit.top/image/nav_index_disable.png',
                active:'http://tdream.antit.top/image/nav_index.png',
                url:'index.html'
            },
            {
                title:'行动打卡',
                normal:'https://tdream.antit.top/ActiveSignInOff.png',
                active:'https://tdream.antit.top/ActiveSignInOk.png',
                url:'html/clockIn/clockIn.html'
            },
            {
                title:'个人中心',
                normal:'http://tdream.antit.top/image/nav_owner_disable.png',
                active:'http://tdream.antit.top/image/nav_owner.png',
                url:'html/user/user.html'
            }
        ]
    
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
                self.userInfo = Options.GetUserInfo();
                // 开启测试服务器
                if(PERMISSION_USER(self.userInfo.openid)){
                    Options.TestServer = true;
                };
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
            console.log(1)
            // window.location.href = 'html/dreampool/dreampool.html?time='+new Date().getTime()+'&active=0'
        },
        // 参与互助
        join(state){
            console.log(state);
        }
    }
})