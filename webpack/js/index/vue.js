// $(function(){
// |------- Vue ------------------------————----------------------------------------------------------------|
    var app = new Vue({
        // 首页 js
        el:"#app",
        data:{
            userInfo:'',//用户信息

            buyInfo:'',//最近购买信息------展示公屏
            tbill:'',//互助总金额
            pid:'',//梦想池id,
            realBill:'',//互助累计金额
            ubill:'',//互助单价
            context:'',//互助文字
            time:'',//倒计时
            mainpool:'',//梦想池信息

            contxt:'',//生意互助文字
            tpid:'',//小生意 id
            stbill:'',//生意互助总金额
            sbill:'',//生意互助累计互助金额
            subill:'',//生意互助单价
            bannerUrl:'',//生意互助 banner 图
            active:'0',//tab 切换下标
            progress1:'',//进度条
            progress2:'',//进度条（生意）
            maintrade:'',//生意池信息

            actions:'',//后期支付需要
        },
        created(){
            // 此处上线用
            // WebApp.Init('wxc5216d15dd321ac5',function(result,data){
            //     console.log(data)
            // })
            console.log(Vue)

            this.userInfo = {
                headimgurl:"http://thirdwx.qlogo.cn/mmopen/vi_32/xO4y8dNCtic6O4iccJmKHGN0IQY0ImY8zwRSqOVYhRYPp5rPMNCrvIQ15oOrOOwCq6vyBCGJ1gDa3J51sUvo7eDw/132",
                nickname:"暮色👑 微凉城",
                openid:"oSORf5kkXvHNxhIx8lQVe3DFRFvw"
            }

            // 自动调用准备购买的接口
            if($_GET.dphone == 'ok'){
                this.pid = $_GET.pid;
                this.buy('dream')
            }else if($_GET.tphone == 'ok'){
                this.tpid = $_GET.pid;
                this.buy('trade')
            }else if($_GET.dream == 'ok'){
                this.pid = $_GET.pid;
                this.buy('dream')
            }else{
                Get(this.userInfo,this);
            }
            


            // 得到梦想池信息，购买信息，以及自己的个人信息
            // Get参数解释
            /**
             * userinfo:Options.GetUserInfo()
             * obj:vue对象
             */
            Get(this.userInfo,this);
            function Get(userinfo,obj={}){
                console.log(userinfo.openid,userinfo.nickname,userinfo.headimgurl)
                TD_Request('us','enter',{
                    uid:userinfo.openid,
                    nickname:userinfo.nickname,
                    headicon:userinfo.headimgurl,
                    dblink:'test'
                },function(code,data){
                    // 判断是否有生意梦想池
                    console.log(data.mainpool.length)
                    if(data.maintrade.length == 0){
                        // $('.trdream').html('暂无更多小生意').css({
                        //     "text-align":"center",
                        //     "height":"1.5rem",
                        //     "font-size":"0.32rem",
                        //     "line-height":"1.5rem",
                        //     "color":"#CCC",
                        // })
                    }else{
                        obj.bannerUrl = data.maintrade.trade.bannerUrl;
                        console.log(data.maintrade)
                    };
                    // 判断是否有互助梦想池
                    if(data.mainpool.length == 0){
                        $('.sdream').html('暂无更多梦想池').css({
                            "text-align":"center",
                            "height":"1.5rem",
                            "font-size":"0.32rem",
                            "line-height":"1.5rem",
                            "color":"#CCC",
                        })
                    }



                    // 公屏的购买信息
                    var buyinfo = data.buyinfo;
                    $.each(buyinfo,function(index,item){
                        // 时间转换
                        var time = DescriptionTime((new Date() / 1000) - item.ptime);
                        buyinfo[index].time = time;
                    })
                    obj.buyInfo = buyinfo;
    



                    //梦想池信息
                    var mainpool = DreamPoolAnalysis(data.mainpool);
                    var maintrade = DreamPoolAnalysis(data.maintrade);
                    obj.mainpool = mainpool;
                    obj.maintrade = maintrade;
                    
                    console.log(mainpool);
                    
                    // 小梦想互助部分
                    
                    obj.progress1 = mainpool.realBill / mainpool.rtbillValue;// 进度百分比
                    obj.realBill = mainpool.realBill + mainpool.realUnit;//累计互助金
                    obj.context = mainpool.billHint;
                    obj.tbill = mainpool.rtbillValue + mainpool.rtbillUnit;//目标互助金
                    obj.ubill = mainpool.rubillValue + mainpool.rubillUnit;//单价
                    obj.pid = mainpool.pid;
                    
                    var ptime = parseInt(mainpool.ptime);
                    var duration = parseInt(mainpool.duration);
                    var timeStemp = ptime + duration;
                    obj.TimeOut(timeStemp,obj);
                    
                    









                    // 生意梦想池
                    obj.stbill = maintrade.rtbillValue + maintrade.rtbillUnit;
                    obj.sbill = maintrade.realBill + maintrade.realUnit;
                    obj.subill = maintrade.rubillValue + maintrade.rubillUnit;
                    obj.progress2 = maintrade.realBill / maintrade.rtbillValue;
                    obj.tpid = maintrade.pid;
                    obj.contxt = maintrade.billHint;
                    
                    



                    
                    // 个人信息
                    var selfinfo = data.selfinfo;
                },function(code,data){
                    console.log(data)
                })
            }

        },
        methods:{
            // 准备购买梦想
            buy(state){
                if(state == 'dream'){
                    this.buyPay('dream',this.pid,this,this.userInfo.openid);
                }else if(state == 'trade'){
                    this.buyPay('trade',this.tpid,this,this.userInfo.openid);
                }
            },
            change_tab(index,title){
                if(index == 1 && title=="小生意互助"){
                    setTimeout(function(){
                        $('.trade').show();
                        $('.yd-progressbar.progress').hide()
                        // $('.progress').hide();
                        console.log(1)
                    },200)
                }else if(index == 0 && title=="梦想互助"){
                    $('.yd-progressbar.progress').show();
                    setTimeout(function(){
                        $('.trade').hide()
                    },200)
                }
            },
            //倒计时
            TimeOut(timeStemp,obj){
                setInterval(function(){
                    var date = parseInt(new Date().getTime() / 1000);
                    var second = timeStemp - date;
                    var h = Math.floor(second/60/60) < 10 ? '0' + Math.floor(second/60/60) : Math.floor(second/60/60);
                    var m = Math.floor(second/60%60) < 10 ? '0' + Math.floor(second/60%60) : Math.floor(second/60%60);
                    var s = Math.floor(second%60) < 10 ? '0' + Math.floor(second%60) : Math.floor(second%60);
                    var time = h+':'+m+':'+s;
                    obj.time = time;
                },1000)  
            },
            buyPay(state,pid,obj,openid){
                TD_Request('ds','buy',{
                    uid:openid,
                    pid:pid,
                    dblink:'test'
                },function(code,data){
                    console.log(data)
                    if(state == 'dream'){
                        if(!data.actions.hasOwnProperty('editdream')){
                            SaveStorage('buy',JSON.stringify(data.actions))
                            window.location.href = 'html/payInfo/payInfo.html?time='+new Date().getTime()+'&type=dream';
                        }else{
                            // SaveStorage('buy',JSON.stringify(data.actions));
                            // SaveStorage('mainpool',JSON.stringify(obj.mainpool))
                            obj.$dialog.confirm({
                                title:'是否前往',
                                message:'亲~您还没有添加梦想，添加梦想后即可参与互助哦！'
                            }).then(() => {
                                window.location.href = 'html/dream/add.html?time='+new Date().getTime()+'&type=add&pid='+pid;
                            }).catch(() => {
                                window.location.href = 'index.html?time='+new Date().getTime();
                            })
                        }
                    }else if(state == 'trade'){
                        SaveStorage('buy',JSON.stringify(data.actions));
                        window.location.href = 'html/payInfo/payInfo.html?time='+new Date().getTime()+'&type=trade'
                    }
                },function(code,data){
                    if(code == 11){
                        console.log(obj.$dialog)
                        obj.$dialog.alert({
                            title: '温馨提示',
                            message: '亲~系统检测到您还未绑定手机哦，绑定手机即可参与互助哦！'
                        }).then(function(res){
                            if(state == 'dream'){
                                window.location.href = 'html/phone/phone.html?time='+new Date().getTime()+'&type=dream&pid='+pid;
                            }else if(state == 'trade'){
                                window.location.href = 'html/phone/phone.html?time='+new Date().getTime()+'&type=trade&pid='+pid;
                            }
                        })
                    }else if(code == 5){
                        obj.$dialog.alert({
                            title: '温馨提示',
                            message: '亲~该梦想池已经结束了哦！'
                        }).then(function(){
                            window.location.href = 'index.html?time='+ new Date().getTime();
                        })
                    }
                })
            }
        }
    })

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

    // 小梦想添加页面
    
    var add = new Vue({
        el:'#add',
        data:{
            pageTitle:'添加梦想',//页面标题
            dr_title:'',//梦想标题
            message:'',//梦想简介
            gh:'',//小梦想公函上传预览链接
            selectText:'选择文件',//选择文件按钮文字
            checked:true,//是否勾选了协议
        },
        created(){
            $('title').html(this.pageTitle)
            if($_GET.type == 'add'){
                this.pageTitle = '添加梦想';
                $('.gh_content').hide();
            }else if($_GET.type == 'edit'){
                this.pageTitle = '编辑梦想';
                $('.gh_content').hide();
            } else if($_GET.type == 'perfect'){
                this.pageTitle = '完善梦想';
                $('.gh_content').show();
            }else{
                this.pageTitle = '添加梦想';
                $('.gh_content').hide();
            }
        },
        methods:{
            // 查看/下载公函
            look_gh(){
                vant.ImagePreview({
                    images:['http://tdream.antit.top/image/transactionform.jpg']
                })
            },
            // 查看已上传公函
            gh_self(){
                vant.ImagePreview({
                    images:[this.gh]
                })
            },
            // 选择文件
            onRead(file,content){
                this.gh = file.content;
                this.selectText = '重新选择'
            },
            // 提交梦想
            submit(){
                if(this.dr_title == ''){
                    this.$dialog.alert({
                        title:'温馨提示',
                        message:'亲~梦想不能没有标题哦(⊙v⊙)'
                    }).then(()=>{
                        return false;
                    })
                }else if(this.message == ''){
                    this.$dialog.alert({
                        title:'温馨提示',
                        message:'简单的介绍一下你的梦想吧！'
                    }).then(()=>{return false;})
                }else if(this.checked == false){
                    this.$dialog.setDefaultOptions({
                        confirmButtonText:'勾选并提交',
                        cancelButtonText:'取消'
                    })
                    this.$dialog.confirm({
                        title:'勾选协议',
                        message:'是否同意勾选下方协议'
                    }).then(()=>{
                        this.checked = true;
                        this.$dialog.resetDefaultOptions();
                        this.dedit(app.userInfo.openid,this.dr_title,this.message);
                    }).catch(()=>{
                        this.checked = false;
                        this.$dialog.resetDefaultOptions()
                        return;
                    })
                }else{
                    this.dedit(app.userInfo.openid,this.dr_title,this.message);
                }
            },
            // 发布梦想
            dedit(uid,title,content){
                var that = this;
                TD_Request('dr','dedit',{
                    uid:uid,
                    title:title,
                    content:content
                },function(code,data){
                    that.$toast.success('添加成功');
                    setTimeout(()=>{
                        if($_GET.type == 'add'){
                            window.location.href = '../../index.html?time='+new Date().getTime()+'&dream=ok&pid='+$_GET.pid;
                        }else{
                            window.location.href = 'dream.html?time='+new Date().getTime();
                        }
                    },2000)
                },function(code,data){
                    that.$toast.fail('添加失败')
                    setTimeout(()=>{
                        window.location.reload();
                    },2000)
                })
            }
        },
        watch:{
            dr_title(data){
                if(data.length>20){
                    this.dr_title = data.slice(0,20);
                }
            },
            message(data){
                if(data.length > 140){
                    this.message = data.slice(0,140);
                }
            }
        }
    })
// })