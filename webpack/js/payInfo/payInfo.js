var uid = Options.GetUserInfo().openid;
var pay = new Vue({
    el:'#pay',
    data:{
        actions:'',//支付信息
        pool:'',//奖池信息
        progress1:'',//进度
        timeout:'',//倒计时
        did:'',//梦想 id
        pay:'',//总钱数
        count:1,//份数
        buy:'',//预订单信息
    },
    created(){
        if(!ExistStorage('buy')){
            $('body').html('');
            window.location.href = '../../index.html'
        }else{
            // 读取 buy
            var buy = JSON.parse(GetStorage('buy'))
            this.buy = buy.buy;
            console.log(buy)
            if($_GET.type == 'DREAM'){
                $('title').html('小梦想支付')
                $('.time').show();
            }else if($_GET.type == 'TRADE'){
                $('title').html('小生意支付');
                $('.time').hide();
                $('.ubill').css('margin-top',0);
                $('.dream .txt').html('本期项目');
                self.did = buy.buy.dream.tid;
                $('.arrow').hide();
                $('#dream').html(this.buy.dream.title);
            }
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
                self.pay = self.pool.rubillValue * self.count;
                self.$toast.clear();
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
        // 加份数
        add(){
            this.count++;
            console.log(this.count)
            this.Ord(this,GetStorage('buy'))
            if(this.count >= 5){
                this.count = 5;
            }else if(this.count >= this.buy.dayLim){
                this.count = this.buy.dayLim;
            }
            this.pay = this.pool.rubillValue * this.count;
        },
        // 减份数
        incre(){
            this.count--;
            console.log(this.count)
            this.Ord(this,GetStorage('buy'))
            if(this.count <= 0){
                this.count = 1;
            }
            this.pay = this.pool.rubillValue * this.count;
        }
    }
})