$(function(){
    // 获取梦想列标
    var userInfo = Options.GetUserInfo();
    TD_Request("dr","dlist",{
        uid:userInfo.openid
    },function(code,data){
        if(code == 1){
            console.log(data)
        }
    },function(code,data){
        console.log(data);
    })
    // 查看小梦想详情
    $('.view').click(function(){
        window.location.href="../html/add.html";
    })
    // 添加梦想
    $('.add').click(function(){
        window.location.href="../html/add.html";
    })
})