var uid = Options.GetUserInfo().openid;

var list = new Vue({
    el:"#list",
    data:{
        loading:false,
        finished:false,
        seek:0
    },
    created(){

    },
    methods:{
        load(){
            this.getList(this)
        },
        getList(self){
            TD_Request('op','olist',{uid:uid,seek:self.seek,10},function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data)
            })
        }
    }
})