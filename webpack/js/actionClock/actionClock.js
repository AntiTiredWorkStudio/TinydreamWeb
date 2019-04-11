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
        days:'',//日期
        currentMonth:'',//当前月份
    },
    created(){
        this.tabbar = common.tabbar;
        // 创建行动实例
        this.Mat(self);
    },
    methods:{
        // 打卡
        clock(){
            console.log('已打卡')
        },
        Mat(self){
            TD_Request('op','cal',{uid:uid,seek:0},function(code,data){
                console.log(data)
                console.log(data.calendar.days);
                self.days = data.calendar.days;
                var currentMonth = data.calendar.currentMonth.substr(0,4) + '.' + data.calendar.currentMonth.substr(4,6);
                self.currentMonth = currentMonth;
            },function(code,data){
                console.log(data);
            })
        }
    }
})