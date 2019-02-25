$(function(){
    // 获取奖池
    TD_Request('ds','plistr',function(code,data){
        console.log(data)
    })
})