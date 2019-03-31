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
                }else{
                    Options.TestServer = false;
                }
            });
        }
    }
})