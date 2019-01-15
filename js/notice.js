$(function(){
    var userInfo = Options.GetUserInfo();

    TD_Request("no","ng",{
        uid:userInfo.openid,
        seek:0,
        count:20
    },function(code,data){
        console.log(data)
    },function(code,data){
        console.log(data)
    })
})