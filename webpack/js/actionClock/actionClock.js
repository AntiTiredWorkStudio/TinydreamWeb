var uid = Options.GetUserInfo().uid;

var actionClock = new Vue({
    el:'#actionClock',
    data:{
        actives:1,
        tabbar:'',
        progress1:0.5,
    },
    created(){
        this.tabbar = common.tabbar;
    }
})