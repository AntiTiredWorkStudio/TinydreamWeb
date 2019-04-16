var uid = Options.GetUserInfo().openid;

var fill = new Vue({
    el:'#fill',
    data:{
        headicons:'',//头像
        info:'',//详情信息
    },
    created(){
        this.info(this)
        this.headicon(this);
    },
    methods:{
        // 详情信息
        info(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息加载中...'
            })
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                console.log(data)
                self.info = data.info;
            },function(code,data){
                console.log(data);
            })
        },
        // headicon(self){
        //     TD_Request('op','ihics',{})
        // }
    }
})