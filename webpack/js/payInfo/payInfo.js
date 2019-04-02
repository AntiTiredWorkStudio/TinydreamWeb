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
                $('.time').show();
            }else if($_GET.type == 'TRADE'){
                $('title').html('小生意支付');
                $('.time').hide();
                $('.ubill').css('margin-top',0);
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
        // 预支付订单
        Ord(self,actions){
            TD_Request('ds','ord',{
                action:actions
            },function(code,data){
                console.log(data)
                // 备份 actions
                self.actions = data.actions;
                self.pool = DreamPoolAnalysis(data.pool);
                self.progress1 = data.pool.cbill / data.pool.tbill;
                // 倒计时
                var ptime = parseInt(self.pool.ptime);
                var daurtion = parseInt(self.pool.duration);
                self.timeout = self.SetTimeOut(ptime + daurtion);
                setInterval(()=>{
                    self.timeout = self.SetTimeOut(ptime + daurtion)
                },1000)
                // 填写信息

            },function(code,data){
                console.log(data);
            })
        },
        // 倒计时
        SetTimeOut(timeStamp){
            var time = parseInt(new Date().getTime() / 1000);
            var timeout = parseInt(timeStamp - time);
            var h = Math.floor(timeout/60/60) < 10 ? '0' + Math.floor(timeout/60/60) : Math.floor(timeout/60/60);
            var m = Math.floor(timeout/60%60) < 10 ? '0' + Math.floor(timeout/60%60) : Math.floor(timeout/60%60);
            var s = Math.floor(timeout%60) < 10 ? '0' + Math.floor(timeout%60) : Math.floor(timeout%60); 
            if(h == 0 && m == 0 && s == 0){
                window.location.reload();
            }
            var time = h + ":" + m + ":" + s;
            return time;
        },
    }
})