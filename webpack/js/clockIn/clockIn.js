var uid = Options.GetUserInfo().openid;

var clockIn = new Vue({
    el:'#clockIn',
    data:{
        actives:1,
        tabbar:'',
        show:true,//是否显示弹窗
        contractType:[
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'早起'
            }
        ]
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
    },
    watch:{
        contractType(data){
            console.log(data);
        }
    }
})