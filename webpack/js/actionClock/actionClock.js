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
        disabled:false,//行动打卡按钮状态
        isshow:false,//弹窗
        headicon:'',//用户头像
        colckinfo:'',//打卡信息
        seek:0,//日历翻页
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
                // 打卡信息
                self.clockInfo(self,data.calendar.opid);
                self.opid = data.calendar.opid;
                console.log(data.calendar.days);
                self.currentMonth = data.calendar.currentMonth.substr(0,4) + '.' + data.calendar.currentMonth.substr(4,6);
                self.refreshDate(data.calendar.days,self)
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
                console.log(data);
                self.clockInfo(self,self.attendance.opid);
                self.isshow = true;
            },function(code,data){
                console.log(data);
            })
        },
        // 生成日历
        refreshDate(days,self){
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
                    if(item.state == 'NONE'){
                        $('<li class="enable" id="'+item.date+'"><span class="normal gray">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }else if(item.state == "NOTRELAY"){
                        $('<li class="enable" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }else if(item.state == "RELAY"){
                        $('<li class="enable" id="'+item.date+'"><span class="normal green_bg">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }else if(item.state == 'SUPPLY'){
                        $('<li class="enable" id="'+item.date+'"><span class="normal green">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                    }
                }else{
                    $('<li class="disabled"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                }
            })
            $('li.enable').click(function(){
                self.card(self,$(this).attr('id'));
            })
        },
        // 打卡信息
        clockInfo(self,opid){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息加载中...'
            })
            TD_Request('op','oif',{opid:opid},function(code,data){
                console.log(data)
                self.$toast.clear();
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
                self.dialog.alert({
                    title:'温馨提示',
                    message:data.context
                })
            })
        }
    }
})