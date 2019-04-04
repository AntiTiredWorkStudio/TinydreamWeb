var uid = Options.GetUserInfo().openid;

var user = new Vue({
    el:'#user',
    data:{
        actives:2,//默认菜单
        tabbar:''
    },
    created(){
        this.tabbar = common.tabbar;
    }
})