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
                    self.buyinfo = data.buyinfo;
                    // 公屏信息展示
                    self.Screen();
                }
            },function(code,data){
                console.log(data);
            })
        },
        // 公屏信息展示;
        Screen(){
            let buyInfo = null;
            buyInfo = this.buyinfo.shift();
            console.log(this.buyinfo)
            console.log(buyInfo)
        }
    }
})