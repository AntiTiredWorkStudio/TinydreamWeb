$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取奖池信息
    var poolInfo = JSON.parse(localStorage.getItem('poolInfo'));
    console.log(poolInfo);
})