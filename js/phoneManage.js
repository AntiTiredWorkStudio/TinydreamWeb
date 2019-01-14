$(function(){
    // 获取用户信息
    var userInfo = Options.GetUserInfo()
    TD_Request("va", "pbind", {
        uid:userInfo.openid,
    },function(code,data){
        // 请求成功
        console.log(code,data)
    },function(code,data){
        // 请求失败
        console.log(code,data);
    })
})