var uid = Options.GetUserInfo().openid;

var user = new Vue({
    el:'#user',
    data:{
        actives:2,//默认菜单
        tabbar:''
    },
    created(){
        // 获取通知数量
        console.log(common.tabbar)
    }
})