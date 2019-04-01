var app = new Vue({
    el:'#app',
    data:{
        userInfo:'',//用户信息
        mainpool:'',//小梦想互助梦想池
        maintrade:'',//小生意互助池
        buyinfo:'',//购买信息
    },
    mounted(){
        this.GetUserInfo(this)
    },
    methods:{
        GetUserInfo(self){
            WebApp.Init('wxc5216d15dd321ac5',//appid
            function(result,data){
                self.userInfo = Options.GetUserInfo();
                console.log(self.userInfo);
                if(PERMISSION_USER(self.userInfo.openid)){
                    Options.TestServer = true;
                }
                // 注册个人信息
                self.Register(self.userInfo.openid,self.userInfo.nickname,self.userInfo.headimgurl,self)
                
            });
        },
        // 注册信息
        Register(uid,nickname,headicon,self){
            TD_Request('us','enter',{
                uid:uid,
                nickname:nickname,
                headicon:headicon
            },function(code,data){
                console.log(data)
                if(data.buyinfo.length == 0){
                    $('.screen_main').html('暂无人购买').css({
                        color:'#999',
                        'font-size':'0.24rem',
                        'text-align':'center'
                    })
                }else{
                    // 公屏信息展示
                    self.Screen(data.buyinfo);
                    
                }
            },function(code,data){
                console.log(data);
            })
        },
        // 公屏信息展示;
        Screen(buyinfo){
            var that = this;
            setInterval(function(){
                console.log(buyinfo)
                let buyInfo = null;
                buyInfo = buyinfo.shift();
                console.log(buyInfo)
                buyinfo.push(buyInfo);
                that.buyinfo = that.BUYINFO(buyInfo);
            },4000)
        },
        // 购买信息格式转化
        BUYINFO(buyinfo){
            var date = parseInt(new Date().getTime() / 1000);
            let time =  DescriptionTime(date - buyinfo.ptime);
            var buyInfo = {
                headicon:buyinfo.headicon,
                nickname:buyinfo.nickname,
                ptype:buyinfo.ptype,
                time:time,
                dcount:buyinfo.dcount,
                headStyle:{
                    'background':'url('+buyinfo.headicon+') no-repeat center center / 0.48rem 0.48rem',
                }
            };
            return buyInfo;
        },
    }
})