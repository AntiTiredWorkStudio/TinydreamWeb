var uid = Options.GetUserInfo().openid;

var clockIn = new Vue({
    el:'#clockIn',
    data:{
        actives:1,
        tabbar:'',
        show:true,//是否显示弹窗
    },
    created(){
        this.tabbar = common.tabbar;
    },
    methods:{
        // 点击购买合约
        buy(state){
            if(state == 100){
                // 100天合约
            }else if(state == 21){
                // 21天合约
            }
        }
    }
})