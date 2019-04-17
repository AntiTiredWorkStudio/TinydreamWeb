var uid = Options.GetUserInfo().openid;

var user = new Vue({
    el:'#user',
    data:{
        actives:2,//默认菜单
        tabbar:'',//tabbar
        selfinfo:'',//个人信息,
        headicon:'',//个人头像,
        ncount:'',//通知数量
        clock:'',//打卡信息
        cAttendence:'',
        cPerson:'',
        conday:'',

    },
    created(){
        this.tabbar = common.tabbar;
        // 获取个人信息
        this.GetSelfInfo(this)
        this.cinfo(this);
    },
    mounted(){
        console.log(common.ncount)
        this.notice(this,uid)
    },
    methods:{
        // 获取个人信息
        GetSelfInfo(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'获取信息中...'
            })
            TD_Request('us','selfinfo',{uid:uid},function(code,data){
                console.log(data);
                self.$toast.clear();
                self.headicon = {
                    background:'url('+data.selfinfo.headicon+') no-repeat center center / 1.32rem 1.32rem'
                }
                self.selfinfo = data.selfinfo;
                self.cAttendence = data.total['SUM(`alrday`)'];
                self.conday = data.total['SUM(`conday`)'];
                
            },function(code,data){
                console.log(data)
            })
        },
        notice(self,uid){
            TD_Request('no','nc',{uid:uid},function(code,data){
                if(data.ncount == 0){
                    self.ncount = '';
                    $('.noticeNum').hide();
                }else if(data.ncount >= 99){
                    self.ncount = '99+'
                }
                self.ncount = data.ncount;
            },function(code,data){
                console.log(data);
            })
        },
        cinfo(self){
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                console.log(data);
            },function(code,data){
                console.log(data)
            })
        },
        record(){
            window.location.href = '../payRecord/payRecord.html?time='+new Date().getTime();
        }
    }
})