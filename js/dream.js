$(function(){
    // 获取梦想列标
    var userInfo = Options.GetUserInfo();
    TD_Request("dr","dlist",{
        uid:userInfo.openid
    },function(code,data){
        if(code == 0){
            if(data.dreams.length == 0){
                $('.empty').show();
                $('.dream_main').hide();
            }
        }
    },function(code,data){
        console.log("缺少参数"+data.context);
    })
    // 关闭弹窗
    $('.close').click(function(e){
        e.stopPropagation();
        $(this).delay(1000).hide(100)
    })
    // 查看小梦想详情
    $('.view').click(function(){
        window.location.href="../html/add.html";
    })
    // 添加梦想
    $('.add').click(function(){
        $('.close').fadeIn();
    })
})