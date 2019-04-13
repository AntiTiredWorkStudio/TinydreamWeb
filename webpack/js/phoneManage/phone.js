//uid
var uid = Options.GetUserInfo().openid;

var phone = new Vue({
    el:'#phone',
    data:{
        title:'请输入需要绑定的手机号',//标题
        tip:'当前手机号为1777777777',//描述
        sendState:true,//发送状态
        phone:'',
    },
    methods:{
        sendCode(){
            if(this.phone == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~手机号不能为空哦！'
                })
            }else{
                this.sendState = true;
                this.sendCode(this,this.phone);
            }
        }
    },
    watch:{
        phone(data){
            if(data.length == 11){
                var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                if(reg.test(data)){
                    this.sendState = false;
                }else{
                    this.sendState = true;
                }
            }
        },
        send(self,phone){
            this.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'发送中...'
            })
            TD_Request('va','gcode',{tele:phone},function(code,data){
                self.$toast.clear();
                self.$toast.success('发送成功')
            })
        }
    }
})