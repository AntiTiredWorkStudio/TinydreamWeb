$(function(){
    var userInfo = Options.GetUserInfo();
    TD_Request("us","selfinfo",{
        uid:userInfo.openid
    },function(code,data){
        if(code == 0){
            $('.header img').attr('src',data.selfinfo.headicon);
            $('.nickName').html(data.selfinfo.nickname);
            $('.left .num').html(data.selfinfo.totalJoin);
            $('.middle .num').html(data.selfinfo.totalReward);
            $('.right .num').html(data.selfinfo.dayBuy);
        }
    },function(code,data){
        if(code!=0){
            console.log(data);
        }
    })
    WebApp.JSAPI.Init()
})