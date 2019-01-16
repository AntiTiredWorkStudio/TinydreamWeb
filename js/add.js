$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取梦想id
    var dr = JSON.parse(localStorage.getItem('dr'));
    if(dr.state!="all"){
        $('.supper').hide();
        $('title').html('编辑梦想')
    }else{
        $('.supper').show();
        $('title').html('完善梦想')
        var state = "all"
    }
    TD_Request("dr","gdream",{
        uid:userInfo.openid,
        did:dr.did,
        state: state
    },function(code,data){
        console.log(data)
        $('.title').value = data.dream.title;
        $('.dr_info').value = data.dream.content;
    },function(code,data){
        console.log("错误信息："+data.context);
    })
})