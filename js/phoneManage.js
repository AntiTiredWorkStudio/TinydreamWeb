WebApp.JSAPI.Init();
$(function(){
    // 获取用户信息
    var userInfo = Options.GetUserInfo()
    TD_Request("va", "pbind", {
        uid:userInfo.openid,
    },function(code,data){
        // 请求成功
        if(code == 0){
            if(data.tele == ""){
                $('.oldPhoneNum').hide();
            }else{
                $('.oldPhoneNum').html("当前绑定的手机号为 "+ data.tele);
                $('.oldPhoneNum').show();
            }
        }
    },function(code,data){
        // 请求失败
        if(code!=0){
            alert('参数错误'+data.context);
            return;
        }
    })
    // 验证手机号规则
    var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    $('.phoneNum input').on('input',function(){
        $('.tip').html('').hide()
        if($(this).val().length == 11){
            if(reg.test($(this).val())){
                $('.getCode').removeAttr('disabled');
                $('.getCode').removeClass('disabled');
                $('.tip').html('').hide();
            }else{
                $('.tip').html('手机号不正确').show();
                $('.getCode').attr('disabled');
                $('.getCode').addClass('disabled');
                return;
            }
        }
    })
    // 短信验证输入框
    $('.auth_code input').on('focus',function(){
        $('.tip').html('').hide();
        $(this).prev('.icon_mail').addClass('focus');
    })
    $('.auth_code input').on('blur',function(){
        if($(this).val() == "" || null){
            $(this).prev().removeClass('focus');
        }
    })
    // 获取手机验证码
    $('.getCode').click(function(){
        TD_Request("va","gcode",{
            tele:$('.phoneNum input').val()
        },function(code,data){
            // 请求成功
            console.log(data);
            if(data.sresult.status == "OK"){
                $('.tip').html('验证码已发送，请注意查收').show().delay(1000).hide(100);
            }else{

            }
        },function(code,data){
            // 请求失败
            console.log('发送失败'+data.context)
        })
        // 进行网络请求
        var num = 60;
        $(this).addClass('disabled').html(num+'s').attr('disabled');
        var timer = setInterval(function(){
            num--;
            $('.getCode').html(num+'s')
            if(num<10){
                num = "0"+num;
                $('.getCode').html(num+'s');
            }
            if(num <= 0){
                num = 0;
                clearInterval(timer);
                $('.getCode').attr('disabled');
                $('.getCode').removeClass('disabled');
                $('.getCode').html('重新获取')
            }
        },1000)
    })
    // 绑定手机
    $('.submit').click(function(){
        if($('.phoneNum input').val() == "" || null){
            $('.tip').html('手机号不能为空').show().delay(1000).hide(100);
            return;
        }else if($('.auth_code input').val() == "" || null){
            $('.tip').html('验证码不能为空').show().delay(1000).hide(100);
            return;
        }else{
            TD_Request('va','bind',{
                uid:userInfo.openid,
                tele:$('.phoneNum input').val(),
                code:$('.auth_code input').val()
            },function(code,data){
                if(code == 0){
                    $('.tip').html('绑定成功').show().delay(1000).hide(1000);
                    var mainpool = JSON.parse(localStorage.getItem('mainpool'));
                    // 获取梦想池信息
                    console.log($_GET.phone);
                    return;
                    if($_GET.phone == 'false'){
                        $_GET.phone = !$_GET.phone;
                        window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/GetRedPack.html";
                    }else if(mainpool == '' || mainpool == undefined){
                        window.location.href = "http://tinydream.antit.top/TinydreamWeb/index.html";
                    }else{
                        console.log(mainpool)
                        TD_Request("ds","buy",{
                            uid:userInfo.openid,
                            pid:mainpool.pid
                        },function(code,data){
                            if(code == 0 || data.result == true){
                                console.log(data)
                                if(data.actions.hasOwnProperty('editdream')){
                                    console.log(data.actions)
                                    // return;
                                    if(confirm("您还没有添加梦想，添加梦想后才能参与互助")){                                   
                                        localStorage.setItem('buy',JSON.stringify(data.actions));
                                        window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
                                    }else{
                                        window.location.href = "http://tinydream.antit.top/TinydreamWeb/index.html"
                                    }
                                }else{
                                    localStorage.setItem('buy',JSON.stringify(data.actions));
                                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html";
                                }
                            }
                        },function(code,data){
                            console.log(data)
                        })
                    }
                   
                }
            },function(code,data){
                if(code == 2){
                    $('.tip').html(data.context).show().delay(1000).hide(100);
                    return;
                }else if(code == 3){
                    $('.tip').html(data.context).show().delay(1000).hide(100);
                    return;
                }else if(code == 16){
                    $('.tip').html(data.context).show().delay(1000).hide(100);
                    return;
                }
            })
        }
    })
    // WebApp.JSAPI.Init()
})