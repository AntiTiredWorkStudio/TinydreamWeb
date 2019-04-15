var uid = Options.GetUserInfo().openid;

var actionClock = new Vue({
    el:'#actionClock',
    data:{
        actives:1,
        tabbar:'',
        progress1:0.5,//打卡进度
        day:'50',//距离目标天数
        continday:'50',//连续打卡天数
        clockday:'50',//已打卡天数,
        week:["日","一","二","三","四","五","六"],//周期
        opid:'',//行动 id
        currentMonth:'',//当前月份,
        isdisabled:false,//行动打卡按钮状态
        btnTxt:'立即打卡',
        isshow:false,//弹窗
        headicon:'',//用户头像
        colckinfo:'',//打卡信息
        seek:0,//日历翻页
        date:'',//当前打卡、补卡日期
        countMonth:'',//月份总数
    },
    created(){
        Options.TestServer = true;
        this.tabbar = common.tabbar;
        common.notice(this,uid);
        // 创建日历
        this.Mat(this);
        // 用户头像
        this.headicon = Options.GetUserInfo().headimgurl;
    },
    methods:{
        // 打卡
        clock(){
            this.Clock(this,this.opid);
        },
        // 创建日历
        Mat(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'日历创建中...'
            })
            TD_Request('op','cal',{uid:uid,seek: self.seek,full:'month'},function(code,data){
                console.log(data)
                self.$toast.clear();
                if(data.calendar.monthIndex.length == 1){
                    $('.icon-left,.icon-right').hide();
                }
                if(self.seek == 0){
                    $('.icon-left').hide();
                }
                if(data.calendar.monthIndex.length - 1 == self.seek){
                    $('.icon-right').hide();
                }
                // 打卡信息
                self.clockInfo(self,data.calendar.opid);
                self.countMonth = data.calendar.monthIndex.length - 1;
                self.opid = data.calendar.opid;
                console.log(data.calendar.days);
                self.currentMonth = data.calendar.currentMonth.substr(0,4) + '.' + data.calendar.currentMonth.substr(4,6);
                self.refreshDate(data.calendar.days,self,data.lastattend);
            },function(code,data){
                self.$toast.clear();
                self.$dialog.alert({
                    title:'温馨提示',
                    message:data.context
                }).then(()=>{
                    window.location.href = '../../index.html?time='+new Date().getTime();
                });
            })
        },
        // 打卡
        Clock(self,opid){
            TD_Request('op','mat',{opid:opid,uid:uid},function(code,data){
                self.btnTxt = '已打卡';
                self.isdisabled = true;
                console.log(data);
                self.clockInfo(self,opid,data.attendance.date);
                self.isshow = true;
            },function(code,data){
                console.log(data);
            })
        },
        // 生成日历
        refreshDate(days,self,lastattend){
            $('.weekDate .day').html('');
            var str = "";
            var totalDay = days.length;//天数
            var firstDay = days[0].weekDay;
            if(firstDay == '一'){
                firstDay = 1;
            }else if(firstDay == '二'){
                firstDay = 2;
            }else if(firstDay == '三'){
                firstDay = 3;
            }else if(firstDay == '四'){
                firstDay = 4;
            }else if(firstDay == '五'){
                firstDay = 5;
            }else if(firstDay == '六'){
                firstDay = 6;
            }else if(firstDay == '日'){
                firstDay = 0;
            }
            for (let i = 0; i < firstDay; i++) {
                $('<li>&nbsp;</li>').appendTo('.weekDate .day');
            }
            console.log(totalDay,firstDay);
            $.each(days,function(index,item){
                if(item.hasOwnProperty('id')){
                    if(item.dateStamp >= lastattend && item.state == 'NONE'){
                        $('<li class="enable" id="'+item.date+'"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }else if(item.state == 'NONE'){
                        $('<li class="enable leakage" data-stamp="'+item.dateStamp+'" id="'+item.date+'"><span class="normal gray">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }else if(item.state == "NOTRELAY"){
                        $('<li class="enable share" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        self.btnTxt = '分享'
                        self.isdisabled = true;
                    }else if(item.state == "RELAY"){
                        $('<li class="enable" id="'+item.date+'"><span class="normal green_bg">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        self.btnTxt = "已打卡";
                        self.isdisabled = true;
                    }else if(item.state == 'SUPPLY'){
                        $('<li class="enable" id="'+item.date+'"><span class="normal green">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }
                }else{
                    $('<li class="disabled"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                }
            })
            $('li.enable.leakage').click(function(){
                self.card(self,$(this).attr('id'));
            })
            self.clockInfo(self,self.opid,$('li.share').attr('id'));
        },
        // 打卡信息
        clockInfo(self,opid,date){
            console.log(date)
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息加载中...'
            })
            TD_Request('op','oif',{opid:opid},function(code,data){
                console.log(data)
                self.$toast.clear();
                WebApp.JSAPI.InitShare({
                    title:data.info.nickname+"已加入追梦行动派为"+data.info.theme+'坚持行动'+data.info.conday+'天',
                    desc:"有梦就行动，坚持返现金！",
                    link:'http://tinydream.ivkcld.cn/TinydreamWeb/index.html?opid='+opid,
                    imgUrl:"http://tdream.antit.top/image/titleLogo.png"
                });
                WebApp.JSAPI.OnShareTimeLine = function(res){
                    if(errMsg == 'onMenuShareTimeline:ok'){
                        self.share(self,opid,date);
                    }else if(errMsg == 'onMenuShareTimeline:cancel'){
                        self.$toast.fail('您取消了分享')
                    }
                }
                WebApp.JSAPI.OnShareFriend = function(res){
                    if(errMsg == 'onMenuShareAppMessage:ok'){
                        self.share(self,opid,date);
                    }else if(errMsg == 'onMenuShareAppMessage:cancel'){
                        self.$toast.fail('您取消了分享')
                    }
                }
                self.colckinfo = data.info;
            },function(code,data){
                console.log(data)
            })
        },
        // 关闭弹窗
        close(){
            this.isshow = false;
            this.clockInfo(this,this.opid);
        },
        // 补卡
        card(self,date){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'补卡中...'
            })
            TD_Request('op','pat',{uid:uid,date:date},function(code,data){
                console.log(data)
                self.$toast.clear();
            },function(code,data){
                self.$toast.clear();
                if(code == 87){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 88){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 89){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 90){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 91){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }
            })
        },
        // 分享
        share(self,opid,date){
            console.log(date);
            if(typeof date != 'undefined'){
                console.log(date)
                TD_Request('op','rep',{opid:opid,date:date,uid:uid},function(code,data){
                    self.$toast.success('分享成功')
                    self.clockInfo(self,opid,date)
                },function(code,data){
                    self.$toast.fail('分享失败')
                })
            }else{
                window.location.href = 'actionClock.html?time='+new Date().getTime();
            }
        },
        // 打卡日历
        left(){
            console.log(this.seek)
            $('.icon-right').show();
            if(this.seek == 0){
                $('.icon-left').hide();
            }else{
                $('.icon-left').show();
                this.seek--;
            }
            this.Mat(this)
        },
        right(){
            console.log(this.seek,this.countMonth)
            $('.icon-left').show();
            if(this.seek == this.countMonth){
               $('.icon-right').hide();
            }else{
                $('.icon-right').show();
                this.seek++;
            }
            this.Mat(this);
        }
    }
})