// $(function(){
// |------- Vue ------------------------————----------------------------------------------------------------|
    var app = new Vue({
        // 首页 js
        el:"#app",
        data:{
            userInfo:'',//用户信息

            buyInfo:'',//最近购买信息------展示公屏
            tbill:'',//互助总金额
            pid:'',//梦想池id,
            realBill:'',//互助累计金额
            ubill:'',//互助单价
            context:'',//互助文字
            time:'',//倒计时
            mainpool:'',//梦想池信息

            contxt:'',//生意互助文字
            tpid:'',//小生意 id
            stbill:'',//生意互助总金额
            sbill:'',//生意互助累计互助金额
            subill:'',//生意互助单价
            bannerUrl:'',//生意互助 banner 图
            active:'0',//tab 切换下标
            progress1:'',//进度条
            progress2:'',//进度条（生意）
            maintrade:'',//生意池信息

            actions:'',//后期支付需要
        },
        created(){
            this.$toast.loading({
                duration: 0, 
                forbidClick: true,
                loadingType: 'circular',
                message:'信息加载中...'
            })
            var that = this;
            // 此处上线用
            WebApp.Init('wxc5216d15dd321ac5',function(result,data){
                console.log(data)
                console.log(that)
                console.log(Vue)
                that.userInfo = Options.GetUserInfo();
                that.$toast.clear();
                that.$dialog.loading({
                    duration: 0, 
                    forbidClick: true,
                    loadingType: 'circular',
                    message:'模块加载中...'
                })

                // this.userInfo = {
                //     headimgurl:"http://thirdwx.qlogo.cn/mmopen/vi_32/xO4y8dNCtic6O4iccJmKHGN0IQY0ImY8zwRSqOVYhRYPp5rPMNCrvIQ15oOrOOwCq6vyBCGJ1gDa3J51sUvo7eDw/132",
                //     nickname:"暮色👑 微凉城",
                //     openid:"oSORf5kkXvHNxhIx8lQVe3DFRFvw"
                // }

                // 自动调用准备购买的接口
                if($_GET.dphone == 'ok'){
                    that.pid = $_GET.pid;
                    that.buy('dream')
                }else if($_GET.tphone == 'ok'){
                    that.tpid = $_GET.pid;
                    that.buy('trade')
                }else if($_GET.dream == 'ok'){
                    that.pid = $_GET.pid;
                    that.buy('dream')
                }else{
                    Get(that.userInfo,that);
                }
                


                // 得到梦想池信息，购买信息，以及自己的个人信息
                // Get参数解释
                /**
                 * userinfo:Options.GetUserInfo()
                 * obj:vue对象
                 */
                Get(that.userInfo,that);
                function Get(userinfo,obj={}){
                    console.log(userinfo.openid,userinfo.nickname,userinfo.headimgurl)
                    TD_Request('us','enter',{
                        uid:userinfo.openid,
                        nickname:userinfo.nickname,
                        headicon:userinfo.headimgurl,
                        dblink:'test'
                    },function(code,data){
                        // 判断是否有生意梦想池
                        console.log(data.mainpool.length)
                        if(data.maintrade.length == 0){
                            // $('.trdream').html('暂无更多小生意').css({
                            //     "text-align":"center",
                            //     "height":"1.5rem",
                            //     "font-size":"0.32rem",
                            //     "line-height":"1.5rem",
                            //     "color":"#CCC",
                            // })
                        }else{
                            obj.bannerUrl = data.maintrade.trade.bannerUrl;
                            console.log(data.maintrade)
                        };
                        // 判断是否有互助梦想池
                        if(data.mainpool.length == 0){
                            $('.sdream').html('暂无更多梦想池').css({
                                "text-align":"center",
                                "height":"1.5rem",
                                "font-size":"0.32rem",
                                "line-height":"1.5rem",
                                "color":"#CCC",
                            })
                        }



                        // 公屏的购买信息
                        var buyinfo = data.buyinfo;
                        $.each(buyinfo,function(index,item){
                            // 时间转换
                            var time = DescriptionTime((new Date() / 1000) - item.ptime);
                            buyinfo[index].time = time;
                        })
                        obj.buyInfo = buyinfo;
        



                        //梦想池信息
                        var mainpool = DreamPoolAnalysis(data.mainpool);
                        var maintrade = DreamPoolAnalysis(data.maintrade);
                        obj.mainpool = mainpool;
                        obj.maintrade = maintrade;
                        
                        console.log(mainpool);
                        
                        // 小梦想互助部分
                        
                        obj.progress1 = mainpool.realBill / mainpool.rtbillValue;// 进度百分比
                        obj.realBill = mainpool.realBill + mainpool.realUnit;//累计互助金
                        obj.context = mainpool.billHint;
                        obj.tbill = mainpool.rtbillValue + mainpool.rtbillUnit;//目标互助金
                        obj.ubill = mainpool.rubillValue + mainpool.rubillUnit;//单价
                        obj.pid = mainpool.pid;
                        
                        var ptime = parseInt(mainpool.ptime);
                        var duration = parseInt(mainpool.duration);
                        var timeStemp = ptime + duration;
                        obj.TimeOut(timeStemp,obj);

                        // 加载
                        obj.$toast.clear()
                        
                        









                        // 生意梦想池
                        obj.stbill = maintrade.rtbillValue + maintrade.rtbillUnit;
                        obj.sbill = maintrade.realBill + maintrade.realUnit;
                        obj.subill = maintrade.rubillValue + maintrade.rubillUnit;
                        obj.progress2 = maintrade.realBill / maintrade.rtbillValue;
                        obj.tpid = maintrade.pid;
                        obj.contxt = maintrade.billHint;
                    
                        
                        



                        
                        // 个人信息
                        var selfinfo = data.selfinfo;
                    },function(code,data){
                        console.log(data)
                    })
                }
            })
        },
        methods:{
            // 准备购买梦想
            buy(state){
                if(state == 'dream'){
                    this.buyPay('dream',this.pid,this,this.userInfo.openid);
                }else if(state == 'trade'){
                    this.buyPay('trade',this.tpid,this,this.userInfo.openid);
                }
            },
            change_tab(index,title){
                if(index == 1 && title=="小生意互助"){
                    setTimeout(function(){
                        $('.trade').show();
                        $('.yd-progressbar.progress').hide()
                        // $('.progress').hide();
                        console.log(1)
                    },200)
                }else if(index == 0 && title=="梦想互助"){
                    $('.yd-progressbar.progress').show();
                    setTimeout(function(){
                        $('.trade').hide()
                    },200)
                }
            },
            //倒计时
            TimeOut(timeStemp,obj){
                setInterval(function(){
                    var date = parseInt(new Date().getTime() / 1000);
                    var second = timeStemp - date;
                    var h = Math.floor(second/60/60) < 10 ? '0' + Math.floor(second/60/60) : Math.floor(second/60/60);
                    var m = Math.floor(second/60%60) < 10 ? '0' + Math.floor(second/60%60) : Math.floor(second/60%60);
                    var s = Math.floor(second%60) < 10 ? '0' + Math.floor(second%60) : Math.floor(second%60);
                    var time = h+':'+m+':'+s;
                    obj.time = time;
                },1000)  
            },
            buyPay(state,pid,obj,openid){
                TD_Request('ds','buy',{
                    uid:openid,
                    pid:pid,
                    dblink:'test'
                },function(code,data){
                    console.log(data)
                    if(state == 'dream'){
                        if(!data.actions.hasOwnProperty('editdream')){
                            SaveStorage('buy',JSON.stringify(data.actions))
                            window.location.href = 'html/payInfo/payInfo.html?time='+new Date().getTime()+'&type=dream';
                        }else{
                            // SaveStorage('buy',JSON.stringify(data.actions));
                            // SaveStorage('mainpool',JSON.stringify(obj.mainpool))
                            obj.$dialog.confirm({
                                title:'是否前往',
                                message:'亲~您还没有添加梦想，添加梦想后即可参与互助哦！'
                            }).then(() => {
                                window.location.href = 'html/dream/add.html?time='+new Date().getTime()+'&type=add&pid='+pid;
                            }).catch(() => {
                                window.location.href = 'index.html?time='+new Date().getTime();
                            })
                        }
                    }else if(state == 'trade'){
                        SaveStorage('buy',JSON.stringify(data.actions));
                        window.location.href = 'html/payInfo/payInfo.html?time='+new Date().getTime()+'&type=trade'
                    }
                },function(code,data){
                    if(code == 11){
                        console.log(obj.$dialog)
                        obj.$dialog.alert({
                            title: '温馨提示',
                            message: '亲~系统检测到您还未绑定手机哦，绑定手机即可参与互助哦！'
                        }).then(function(res){
                            if(state == 'dream'){
                                window.location.href = 'html/phone/phone.html?time='+new Date().getTime()+'&type=dream&pid='+pid;
                            }else if(state == 'trade'){
                                window.location.href = 'html/phone/phone.html?time='+new Date().getTime()+'&type=trade&pid='+pid;
                            }
                        })
                    }else if(code == 5){
                        obj.$dialog.alert({
                            title: '温馨提示',
                            message: '亲~该梦想池已经结束了哦！'
                        }).then(function(){
                            window.location.href = 'index.html?time='+ new Date().getTime();
                        })
                    }
                })
            }
        }
    })
// })