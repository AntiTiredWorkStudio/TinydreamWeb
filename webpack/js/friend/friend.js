var uid = Options.GetUserInfo().openid;

var friend = new Vue({
    el:'#friend',
    data:{
        contracts:'',//合约列表
    },
    created(){
        // 合约列表
        this.list(this);
    },
    methods:{
        buy(cid){
            console.log(cid)
        },
        // 合约列表
        list(self){
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'列表获取中...'
            })
            TD_Request('co','list',{},function(code,data){
                self.contractType = data.themes;
                self.contracts = data.contracts;
                self.$toast.clear()
            },function(code,data){
                self.$toast.clear();
                alert(data.context)
            })
        },
    }
})