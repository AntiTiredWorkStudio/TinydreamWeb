$(function(){
    var dr = JSON.parse(localStorage.getItem('dr'));
    var userInfo = Options.GetUserInfo();
    TD_Request('dr','gdream',{
        uid:userInfo.openid,
        did:dr.did,
        state:'all'
    },function(code,data){
        console.log(data)
        if(data.dream.state == 'DOING'){
            $('.title .left').html('完善梦想')
            $('.title .right').html('等待完善')
            $('.tip').html('小梦想 —— 幸运梦想 —— 完善梦想即可');
            $('.progress_main .index').addClass('active')
        }else if(data.dream.state == '')
    },function(code,data){
        console.log(data)
    })
})