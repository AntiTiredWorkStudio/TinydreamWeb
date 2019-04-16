var uid = Options.GetUserInfo().uid;

var pay = new Vue({
    el:'#payrecord',
    data:{
        active:0,//默认菜单
        loading:false,//是否处于加载列表状态
        finished:false,//是否加载完毕，
        listL:'',//消费订单
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
            },function(code,data){
                console.log(data);
            })
        }
    }
})