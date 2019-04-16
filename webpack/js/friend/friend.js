var uid = Options.GetUserInfo().openid;

var friend = new Vue({
    el:'#friend',
    data:{
        contracts:'',//合约列表
        show:false,//是否显示弹窗
        cid:'',//合约 id
        desc:'',//合约描述
        title:'',//合约标题
        contractType:'',//可选类型
        // checkArr:[],//选择的数组
        price:'',//合约金
        // bill:'',//返现
        day:'',//合约天数
        warm:'',//注意事项
        status:null,
        theme:'',//所选主题
        isshow:false,//是否显示自定义主题
        custom:'',//自定义主题
        value:'',//自定义主题
    },
    created(){
        // 合约列表
        this.list(this);
    },
    methods:{
        buy(cid){
            console.log(cid)
            this.show = true;
        },
        // 合约列表
        list(self){
            self.$toast.loading({
                duraction:0,
                forbidClick:true,
                loadingType:'circular',
                message:'列表获取中...'
            })
            TD_Request('co','list',{},function(code,data){
                self.contractType = data.themes;
                self.contracts = data.contracts;
                self.$toast.clear()
            },function(code,data){
                self.$toast.clear();
                alert(data.context)
            })
        },
    }
})