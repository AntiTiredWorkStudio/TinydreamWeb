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
                self.finished = false;
                self.$toast.clear();
                $.each(data.orders,function(index,item){
                    var time = parseInt(item.ptime) * 1000;
                    var dt = new Date(time);
                    data.orders[index].time = dt.getFullYear() + '-' + dt.getMonth() + 1 + '-' + dt.getDate() + ' ' + dt.getHours() < 10 ? '0'+dt.getHours() : dt.getHours() + ':' + dt.getMinutes < 10 ? '0'+dt.getMinutes() : dt.getMinutes() + ':' + dt.getSeconds() < 10 ? '0'+dt.getSeconds() : dt.getSeconds();
                    
                    if(item.oid.substr(0,1) == 1 && item.did.substr(0,2) == 'DR'){
                        data.orders[index].title = '购买小梦想互助'
                    }else if(item.oid.substr(0,1) == 1 && item.did.substr(0,2) == 'TR'){
                        data.orders[index].title = '购买小生意互助'
                    }else if(item.oid.substr(0,1) == 3){
                        data.orders[index].title = '购买行动打卡合约'
                    }else if(item.oid.substr(0,1) == 9){
                        data.orders[index].title = '梦想红包领取'
                    }
                })
                self.list = data.orders;
            },function(code,data){
                console.log(data);
            })
        }
    }
})