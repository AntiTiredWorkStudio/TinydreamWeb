var uid = Options.GetUserInfo().openid;

var clockIn = new Vue({
    el:'#clockIn',
    data:{
        actives:1,
        tabbar:'',
        contracts:'',//合约列表
        show:false,//是否显示弹窗
        payCancel:false,//支付取消弹窗
        cid:'',//合约 id
        contractType:'',//可选类型
        checkArr:[],//选择的数组
        cbill:'',//合约金
        bill:'',//返现
        day:'',//合约天数
        warm:'',//注意事项
    },
    created(){
        this.tabbar = common.tabbar;
        Options.TestServer = false;
        // 获取合约列表
        this.list(this)
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
            this.payCancel = true;
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
                this.wxpay(this)
            }
        },
        // 获取合约列表
        list(self){
            TD_Request('co','list',{},function(code,data){
                self.contractType = data.themes;
                self.contracts = data.contracts;
                $.each(self.contracts,function(index,item){
                    self.contracts[index].description = self.contracts[index].description.substr(0,15) + '<br>' + self.contracts[index].description.substr(15)
                })
            },function(code,data){
                alert(data.context)
            })
        },
        // 微信支付

    },
})