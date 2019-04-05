var uid = Options.GetUserInfo().openid;

var clockIn = new Vue({
    el:'#clockIn',
    data:{
        actives:1,
        tabbar:'',
        show:false,//是否显示弹窗
        contractType:[
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'早起'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'看书'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'早睡'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'记单词'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'喝水'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'画画'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'练字'
            },
            {
                check:false,
                normal:'https://tdream.antit.top/1morningIU.png',
                active:'https://tdream.antit.top/1morningIA.png',
                title:'写日记'
            }
        ],//可选类型
        checkArr:[],//选择的数组
        cbill:'',//合约金
        bill:'',//返现
        day:'',//合约天数
        warm:'',//注意事项
    },
    created(){
        this.tabbar = common.tabbar;
    },
    methods:{
        // 点击购买合约
        buy(state){
            if(state == 100){
                // 100天合约
                this.day = 100;
                this.cbill = 99;
                this.bill = 200;
                this.show = true;
            }else if(state == 21){
                // 21天合约
                this.day = 21;
                this.cbill = 98;
                this.bill = 98;
                this.show = true;
            }
        },
        // checkbox
        conType(title,index){
            console.log(title,index);
            this.contractType[index].check = !this.contractType[index].check;
            if(this.contractType[index].check){
                this.checkArr.push(title)
            }else{
                this.removeArray(this.checkArr,title);
            }
        },
        // 数组删除方法
        removeArray(arr, val) {
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        },
        // 关闭弹窗
        close(){
            this.show = false;
        },
        // 支付
        pay(bill){
            if(this.checkArr == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！'
                }).then(()=>{
                    return;
                })
            }else{
                console.log('微信支付')
            }
        }
    },
})