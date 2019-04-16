var uid = Options.GetUserInfo().openid;

var fill = new Vue({
    el:'#fill',
    data:{
        headicons:'',//头像
        info:'',//详情信息
    },
    created(){
        this.Info(this)
        this.headIcon(this);
    },
    methods:{
        // 详情信息
        Info(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息加载中...'
            })
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                self.$toast.clear();
                console.log(data)
                self.info = data.info;
            },function(code,data){
                self.$toast.clear();
                console.log(data);
            })
        },
        headIcon(self){
            TD_Request('op','ihics',{uid:uid},function(code,data){
                console.log(data)
                self.headicons = data.headicons;
                if(data.headicons.length == 0){
                    $('.tip').html('当前你还没有邀请到小伙伴呢，快去邀请小伙伴们一起参加追梦行动吧！').show();
                }
            },function(code,data){
                console.log(data);
            })
        }
    }
})