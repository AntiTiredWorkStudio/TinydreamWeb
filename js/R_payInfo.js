$(function(){
    // 获取用户信息
    var userInfo = Options.GetUserInfo();
    // 获取奖池
    TD_Request('ds','plistr',{
        seek:0,
        count:100
    },function(code,data){
        console.log(data)
        var pid = [];
        $.each(data.Pools,function(index,item){
            console.log(item);
        })
        // weui.packer()
    })
})