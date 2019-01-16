$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取梦想池信息
    var poolInfo = JSON.parse(localStorage.getItem('poolInfo'));

    // 获取开奖状态
    TD_Request("aw","lfromp",{
        pid:poolInfo.pid
    },function(code,data){
        console.log(data)
    },function(code,data){
        console.log(data)
    })
})