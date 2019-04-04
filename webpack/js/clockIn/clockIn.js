var uid = Options.GetUserInfo().openid;

var clockIn = new Vue({
    el:'#clockIn',
    data:{
        actives:1,
        tabbar:''
    },
    created(){
        this.tabbar = common.tabbar;
    }
})