$(function(){
    var dr = JSON.parse(localStorage.getItem('dr'));
    var userInfo = Options.GetUserInfo();
    TD_Request('dr','gdream',{
        uid:userInfo.openid,
        did:dr.did,
        state:'all'
    },function(code,data){
        console.log(data)
    },function(code,data){
        console.log(data)
    })
})