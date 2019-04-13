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
                self.day_1 = data.calendar.days.filter(k=>k.weekDay == '一');
                console.log(self.day_1);
                
                self.currentMonth = data.calendar.currentMonth.substr(0,4) + '.' + data.calendar.currentMonth.substr(4,6);
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
        }
    }
})