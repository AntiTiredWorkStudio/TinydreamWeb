var uid = Options.GetUserInfo().openid;
var pay = new Vue({
    el:'#pay',
    data:{
        actions:'',//支付信息
        pool:'',//奖池信息
        progress1:'',//进度
        timeout:'',//倒计时
    },
    created(){
        if(!ExistStorage('buy')){
            $('body').html('');
            window.location.href = '../../index.html'
        }else{
            if($_GET.type == 'DREAM'){
                $('title').html('小梦想支付')
            }else if($_GET.type == 'TRADE'){
                $('title').html('小生意支付')
            }

            // 读取 buy
            var buy = JSON.parse(GetStorage('buy'))
            this.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'订单生成中...'
            })
            this.Ord(this,GetStorage('buy'));
        }
    },
    methods:{
        Ord(self,actions){
            TD_Request('ds','ord',{
                action:actions
            },function(code,data){
                console.log(data)
                // 备份 actions
                self.actions = data.actions;
                self.pool = DreamPoolAnalysis(data.pool);

            },function(code,data){
                console.log(data);
            })
        }
    }
})