var uid = Options.GetUserInfo().openid;

var user = new Vue({
    el:'#user',
    data:{
        tabbar:[
            {
                title:'参与互助',
                normal:'http://tdream.antit.top/image/nav_index_disable.png',
                active:'http://tdream.antit.top/image/nav_index.png',
                url:'../../index.html',
                info:''
            },
            {
                title:'行动打卡',
                normal:'https://tdream.antit.top/ActiveSignInOff.png',
                active:'https://tdream.antit.top/ActiveSignInOk.png',
                url:'../clockIn/clockIn.html',
                info:''
            },
            {
                title:'个人中心',
                normal:'http://tdream.antit.top/image/nav_owner_disable.png',
                active:'http://tdream.antit.top/image/nav_owner.png',
                url:'user.html',
                info:''
            }
        ]
    }
})