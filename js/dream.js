$(function(){
    // 获取梦想列标
    var userInfo = Options.GetUserInfo();
    TD_Request("dr","dlist",{
        uid:userInfo.openid
    },function(code,data){
        if(code == 0){
            if(data.dreams.length == 0){
                console.log(123)
                $('.empty').show();
                $('.dream_main').hide();
            }
        }
    },function(code,data){
        console.log("缺少参数"+data.context);
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