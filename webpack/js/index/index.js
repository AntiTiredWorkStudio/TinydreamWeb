var app = new Vue({
    el:'#app',
    data:{
        userInfo:'',//个人信息
        buyinfo:'',//购买信息
        active:0,
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
        }
    }
})