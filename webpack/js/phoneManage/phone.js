//uid
var uid = Options.GetUserInfo().openid;

var phone = new Vue({
    el:'#phone',
    data:{
        title:'请输入需要绑定的手机号',//标题
        tip:'当前手机号为1777777777',//描述
        sendState:false,//发送状态
    },
    methods:{

    }
})