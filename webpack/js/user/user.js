var uid = Options.GetUserInfo().openid;

var user = new Vue({
    el:'#user',
    data:{
        actives:2,//默认菜单
        tabbar:'',//tabbar
        selfinfo:'',//个人信息
    },
    created(){
        this.tabbar = common.tabbar;
        // 获取个人信息
        this.GetSelfInfo(self)
    },
    methods:{
        // 获取个人信息
        GetSelfInfo(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'获取信息中...'
            })
            TD_Request('us','selfinfo',{uid:uid},function(code,data){
                console.log(data);
                self.$toast.clear();
                self.selfinfo = data.selfinfo;
            },function(code,data){
                console.log(data)
            })
        }
    }
})