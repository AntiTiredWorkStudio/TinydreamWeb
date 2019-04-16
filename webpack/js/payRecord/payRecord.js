var uid = Options.GetUserInfo().openid;

var pay = new Vue({
    el:'#payrecord',
    data:{
        active:0,//默认菜单
        loading:true,//是否处于加载列表状态
        finished:false,//是否加载完毕，
        list:'',//消费订单
        seek:0
    },
    created(){
        // 消费信息
        this.spend(this,this.seek)
    },
    methods:{
        onLoad(){

        },
        // 消费信息
        spend(self,seek){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'订单加载中...'
            })
            TD_Request('ds','oinfo',{uid:uid,seek:seek,count:10},function(code,data){
                console.log(data)
                self.$toast.clear();
                self.list = data.orders
            },function(code,data){
                console.log(data);
            })
        }
    }
})