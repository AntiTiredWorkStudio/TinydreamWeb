var uid = Options.GetUserInfo().openid;

var pay = new Vue({
    el:'#payrecord',
    data:{
        active:0,//默认菜单
        loading:false,//是否处于加载列表状态
        finished:false,//是否加载完毕，
        list:[],//消费订单
        seek:0,
        total:0,
    },
    created(){
        // 消费信息
        this.spend(this,this.seek)
    },
    methods:{
        onLoad(){
            this.loading = true;
            this.seek++;
            this.spend(this,this.seek);
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
                self.loading = false;
                self.total = data.total;
                self.$toast.clear();
                $.each(data.orders,function(index,item){
                    var time = parseInt(item.ptime) * 1000;
                    var dt = new Date(time);    
                    item.time = dt.toLocaleString().replace(/\//g,'-')                
                    if(item.oid.substr(0,1) == 1 && item.did.substr(0,2) == 'DR'){
                        item.title = '购买小梦想互助'
                    }else if(item.oid.substr(0,1) == 1 && item.did.substr(0,2) == 'TR'){
                        item.title = '购买小生意互助'
                    }else if(item.oid.substr(0,1) == 3){
                        item.title = '购买行动打卡合约'
                    }else if(item.oid.substr(0,1) == 9){
                        item.title = '购买小梦想梦想互助--红包领取'
                    }
                    self.list.push(item);
                })
                if(self.list.length>=self.total){
                    self.finished = true;
                } 
                console.log(self.list.length)
            },function(code,data){
                console.log(data);
            })
        },
        load(){
            this.loading = true;
            this.seek++;
            this.spend(this,this.seek);
        },
        // 支出
        tabChange(index,title){
            this.seek = 0;
            this.list = [];
            console.log(title)
            if(title == '支出'){
                this.spend(this,this.seek)
            }
        }
    }
})