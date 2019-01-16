$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取梦想id
    var dr = JSON.parse(localStorage.getItem('dr'));
    if(dr.state!="all"){
        $('supper').hide();
        $('title').html('编辑梦想')
    }else{
        $('.supper').show();
        $('title').html('完善梦想')
    }
    TD_Request("dr","gdream",{
        uid:userInfo.openid,
        did:dr.did,
        state:dr.state
    },function(code,data){
        console.log(data)
    },function(code,data){
        console.log("错误信息："+data);
    })
})