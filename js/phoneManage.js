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
                $('.oldPhoneNum').html(data.tele);
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
})