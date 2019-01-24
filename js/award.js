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
            $('.progress_main .index').eq(0).addClass('active')
        }else if(data.dream.state == 'VERIFY'){
            $('.title .left').html('资料审核')
            $('.title .right').html('审核中').css('color','green')
            $('.tip').html('资料审核1——2个工作日');
            $('.progress_main .index.active .line').addClass('activeLine')
        }
    },function(code,data){
        console.log(data)
    })
})