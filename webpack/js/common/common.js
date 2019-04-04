var common = new Vue({
    data:{
        tabbar:[
            {
                title:'参与互助',
                normal:'http://tdream.antit.top/image/nav_index_disable.png',
                active:'http://tdream.antit.top/image/nav_index.png',
                url:'http://tinydream.antit.top/TinydreamWeb/webpack/index.html',
                info:''
            },
            {
                title:'行动打卡',
                normal:'https://tdream.antit.top/ActiveSignInOff.png',
                active:'https://tdream.antit.top/ActiveSignInOk.png',
                url:'http://tinydream.antit.top/TinydreamWeb/webpack/html/clockIn/clockIn.html',
                info:''
            },
            {
                title:'个人中心',
                normal:'http://tdream.antit.top/image/nav_owner_disable.png',
                active:'http://tdream.antit.top/image/nav_owner.png',
                url:'http://tinydream.antit.top/TinydreamWeb/webpack/html/user/user.html',
                info:''
            }
        ],
        ncount:''
    },
    created(){
        if(typeof Options.GetUserInfo().openid != 'undefined' || Options.GetUserInfo().openid != null){
            this.notice(this,Options.GetUserInfo().openid)
        }
    },
    methods:{
        notice(self,uid){
            TD_Request('no','nc',{uid:uid},function(code,data){
                if(data.ncount == 0){
                    self.ncount = '';
                    self.tabbar[2].info = ''
                }else if(data.ncount >= 99){
                    self.ncount = '99+'
                }
                self.ncount = data.ncount;
                self.tabbar[2].info = data.ncount;
            },function(code,data){
                console.log(data);
            })
        }
    }
})