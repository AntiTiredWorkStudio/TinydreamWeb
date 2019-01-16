$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取奖池信息
    var poolInfo = JSON.parse(localStorage.getItem('poolInfo'));
    console.log(poolInfo);

    // 动态填入数据
    $('.dream_title').html(poolInfo.ptitle);
    $('.help_money').html(poolInfo.realBill + poolInfo.realUnit)
    $('.present_money').html(poolInfo.billHint);
    $('.target_money').html(poolInfo.rtbillValue+poolInfo.rtbillUnit);
    if(poolInfo.state == "RUNNING") {
        $('.state').html('互助中');
        $('.join_help').removeAttr('disabled').html('参与互助').css({background:'#00d094',color:'#fff'})
    }else if(poolInfo.state != "RUNNING" && poolInfo.award == "NO"){
        $('.state').html('已结束');
        $('.join_help').attr('disabled').html('等待开奖').css({background:'#ccc',color:'#b2b2b2'})
    }else if(poolInfo.state != "RUNNING" && poolInfo.award == "YES"){
        $('.state').html('已结束');
        $('.join_help').attr('disabled').html('已完成').css({background:'#f60',color:'#fff'})
    }

    // 获取开奖奖池状态
    TD_Request('aw','lfromp',{
        pid:poolInfo.pid,
    },function(code,data){
        console.log(data);
    },function(code,data){
        console.log('获取失败：'+data.context)
    })
})