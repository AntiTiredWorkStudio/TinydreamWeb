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
        $('.dr_title').val(data.dream.title);
        $('.dr_info').val(data.dream.content);
    },function(code,data){
        console.log("错误信息："+data.context);
    })
    $('.submit').click(function(){
        if($('.dr_title').val() == ''){
            alert('梦想标题不能为空');
            return;
        }else if($('.dr_info').val() == ''){
            alert('梦想简介不能为空');
            return;
        }else if(!$("input[type='checkbox']").is(':checked')){
            alert('请勾选协议');
            return;  
        }else{
            TD_Request('dr','dedit',{
                uid:userInfo.openid,
                title:$('.dr_title').val(),
                content:$('.dr_info').val()
            },function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data)
            })
        }
    })
})