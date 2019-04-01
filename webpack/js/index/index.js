var app = new Vue({
    el:'#app',
    data:{
        userInfo:'',//个人信息
    },
    created(){
        this.GetUserInfo(this)
    },
    methods:{
        // 拉取信息
        /**
         * 参数 self = vue
         */
        GetUserInfo(self){
            WebApp.Init('wxc5216d15dd321ac5',//appid
            function(result,data){//result:请求状态,data 请求结果
                console.log(Options.GetUserInfo());
                self.userInfo = Options.GetUserInfo();
            });
        }
    }
})