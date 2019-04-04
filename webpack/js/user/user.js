var uid = Options.GetUserInfo().openid;

var user = new Vue({
    el:'#user',
    data:{
        actives:2,//默认菜单
        tabbar:'',//tabbar
        selfinfo:'',//个人信息,
        headicon:'',//个人头像,
        ncount:'',
    },
    created(){
        this.tabbar = common.tabbar;
        // 获取个人信息
        this.GetSelfInfo(this)
    },
    mounted(){
        console.log(common.ncount)
        this.notice(this,uid)
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
                self.headicon = {
                    background:'url('+data.selfinfo.headicon+') no-repeat center center / 1.32rem 1.32rem'
                }
                self.selfinfo = data.selfinfo;
            },function(code,data){
                console.log(data)
            })
        },
        notice(self,uid){
            TD_Request('no','nc',{uid:uid},function(code,data){
                if(data.ncount == 0){
                    self.ncount = '';
                }else if(data.ncount >= 99){
                    self.ncount = '99+'
                }
                self.ncount = data.ncount;
            },function(code,data){
                console.log(data);
            })
        }
    }
})