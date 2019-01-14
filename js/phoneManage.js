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
        console.log($(this).val());
    })
    // 获取手机验证码
})