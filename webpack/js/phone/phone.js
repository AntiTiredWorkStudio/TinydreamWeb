// 手机管理页面
var phone = new Vue({
    el:'#phone',
    data:{
        phoneText:'请输入需要绑定的手机号',//绑定手机的提示文字，默认为'请输入需要绑定的手机号'
        phoneTip:'',//绑定手机显示当前手机号，默认为空
        phone:'',//需要绑定的或者修改绑定的手机号
        codeState:false,//验证码获取按钮状态
        showKeyboard:false,//键盘是否显示
        codeKey:false
    },
    created(){
        var that = this;
        TD_Request('va','pbind',{
            uid:app.userInfo.openid
        },function(code,data){
            if(data.tele != ''){
                that.phoneTip = '当前绑定的手机号为'+data.tele;
                that.phoneText = '请输入需要更换绑定的手机号'
            }else{
                that.phoneText = '请输入需要绑定的手机号';
                that.phoneTip = data.tele;
            }
        },function(code,data){
            console.log(data)
        })
    },
    methods:{
        // 发送验证码
        sendCode(){
            var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if(this.phone == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~绑定的手机号不能为空哦！'
                }).then(function(){
                    return false;
                })
            }else if(reg.test(this.phone) == false){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~需要绑定的手机号好像不对哦，检查后再输入！'
                }).then(function(){
                    $('.phoneNum input').val('')
                    this.phone = '';
                    return false;
                })
            }else{
                this.$toast.loading({
                    duration: 0,
                    forbidClick: true,
                    loadingType: 'circular',
                    message: '发送中...'
                })
                this.getCode(this.phone,this);
            } 
        },
        // 获取验证码
        getCode(phone,obj){
            TD_Request('va','gcode',{tele:phone},function(code,data){
                obj.$toast.clear();
                obj.$toast.success('已发送');
                obj.codeState = true;
                obj.codeKey = true;
                obj.phoneTip = '当前手机号为'+obj.phone;
            },function(code,data){
                if(code == 4){
                    obj.$toast.clear();
                    obj.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~还没有到再次发送的时间哦！'
                    }).then(function(){
                        return false;
                    })
                } else {
                    obj.$toast.clear();
                    obj.$toast.fail('发送失败')
                    return false;
                }
            })
        },
        // 自定义键盘
        focus(){
            document.activeElement.blur();
            this.showKeyboard = true;
            if(this.phone == ''){
                $('.phoneNum input').val('')
                this.phone = '';
            }
        },
        onInput(key){
            this.phone = this.phone+key;
        },
        onDelete(){
            this.phone = this.phone.slice(0, this.phone.length - 1);
        },
        codeFocus(){
            document.activeElement.blur();
            this.codeKey = true;
        },
        // 绑定手机
        submit(val){
            this.$toast.loading({
                duration: 0,       // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                loadingType: 'circular',
                message: '提交中'
            })
            var that = this;
            var uid = app.userInfo.openid;
            var tele = this.phone;
            TD_Request('va','bind',{
                uid:uid,
                tele:tele,
                code:val
            },function(code,data){
                that.$toast.clear();
                that.$toast.success('绑定成功');
                setTimeout(function(){
                    if($_GET.type == 'dream'){
                        window.location.href = '../../index.html?time='+new Date().getTime()+'&dphone=ok&pid='+$_GET.pid;
                    }else if($_GET.type == 'trade'){
                        window.location.href = '../../index.html?time='+new Date().getTime()+'&tphone=ok&pid='+$_GET.pid;
                    }else{
                        window.location.href = '../../index.html?time='+new Date().getTime()
                    }
                },2000)
            },function(code,data){
                if(code == 2){
                    that.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~您的验证码有误，请重新输入！'
                    }).then(function(){
                        val = '';
                        return false;
                    })
                }else if(code == 3){
                    that.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~您还没有获取验证码！'
                    }).then(function(){
                        that.codeKey = false;
                        return false;
                    })
                }else if(code == 16){
                    that.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~您的验证码已失效，请重新获取！'
                    }).then(function(){
                        that.codeKey = false;
                        return false;
                    })
                }else{
                    that.$toast.fail('绑定失败')
                }
            })
        },
        codeBtn(val){
            console.log(val)
        }
    }
})