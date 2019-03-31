var app = new Vue({
    el:'#app',
    data:{
        userInfo:'',//用户信息
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
                self.Register(self.userInfo.openid,self.userInfo.nickname,self.userInfo.headimgurl)
                // $('.screen_main').html('暂无人购买').css({
                //     color:'#999',
                //     'font-size':'0.24rem'
                // })
            });
        },
        // 注册信息
        Register(uid,nickname,headicon){
            TD_Request('us','enter',{
                uid:uid,
                nickname:nickname,
                headicon:headicon
            },function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data);
            })
        }
    }
})