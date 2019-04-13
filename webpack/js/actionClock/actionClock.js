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
        day_1:'',//星期一的数组
        day_2:'',//星期二的数组
        day_3:'',//星期三的数组
        day_4:'',//星期四的数组
        day_5:'',//星期五的数组
        day_6:'',//星期六的数组
        day_7:'',//星期日的数组
        days:'',
        currentMonth:'',//当前月份
    },
    created(){
        this.tabbar = common.tabbar;
        common.notice(this,uid);
        // 创建行动实例
        this.Mat(this);
    },
    methods:{
        // 打卡
        clock(){
            console.log('已打卡')
        },
        Mat(self){
            TD_Request('op','cal',{uid:uid,seek:0,full:'month'},function(code,data){
                console.log(data)
                // 创建打卡记录
                self.Clock(self,data.calendar.opid);
                console.log(data.calendar.days);
                self.currentMonth = data.calendar.currentMonth.substr(0,4) + '.' + data.calendar.currentMonth.substr(4,6);
                self.refreshDate(data.calendar.days)
            },function(code,data){
                console.log(data);
            })
        },
        // 打卡
        Clock(self,opid){
            TD_Request('op','mat',{opid:opid,uid:uid},function(code,data){
                console.log(data);
            },function(code,data){
                console.log(data);
            })
        },
        // 生成日历
        refreshDate(days){
            var str = "";
            var totalDay = days.length;//天数
            var firstDay = days[0].weekDay;
            if(firstDay == '日'){
                firstDay = 0;
            }else if(firstDay == '一'){
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
            }
            console.log(totalDay,firstDay);
            $.each(days,function(index,item){
                console.log(item)
                $('<li><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                console.log(item.hasOwnProperty('id'))
                if(!item.hasOwnProperty('id') == true){
                    $('.weekDate .day li').attr('class','enable')
                }else{
                    $('.weekDate .day li').attr('class','disabled')
                }
            })
        }
    }
})