$(function(){
    var userInfo = Options.GetUserInfo();
    TD_Request("us","selfinfo",{
        uid:userInfo.openid
    },function(code,data){
        if(code == 0){
            console.log(data)
        }
    },function(code,data){
        if(code!=0){
            console.log(data);
        }
    })
})