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
    if(poolInfo.state == "RUNNING" && poolInfo.award == "NO") {
        $('.state').html('互助中');
        $('.join_help').html('参与互助').css({background:'#00d094',color:'#fff'}).removeAttr('disabled')
    }else if(poolInfo.state != "RUNNING" && poolInfo.award == "NO"){
        $('.state').html('已结束');
        $('.join_help').html('等待开奖').css({background:'#ccc',color:'#b2b2b2'}).attr('disabled')
    }else if(poolInfo.state != "RUNNING" && poolInfo.award == "YES"){
        $('.state').html('已结束');
        $('.join_help').css({background:'#f60',color:'#fff'}).html('已完成').attr('disabled')
    }

    // 获取开奖奖池状态
    TD_Request('aw','lfromp',{
        pid:poolInfo.pid,
    },function(code,data){
        if(poolInfo.state != "RUNNING" && code == 0){
            var award = code;
            TD_Request('ds','pdetial',{
                uid:userInfo.openid,
                pid:poolInfo.pid
            },function(code,data){
                console.log(data)
                $.each(data.lottey,function(key,value){
                    console.log(value);
                    $('.state').html(value.lid);
                })
            },function(code,data){
                console.log("获取失败："+data.context)
            })
            $('.join_help').html('已完成').css({background:'#f60',color:'#fff'}).attr('disabled')
        }
    },function(code,data){
        console.log('获取失败：'+data.context)
        if(poolInfo.state == "RUNNING" && code == 59) {
            $('.state').html('互助中');
            $('.join_help').html('参与互助').css({background:'#00d094',color:'#fff'}).removeAttr('disabled')
        }else if(poolInfo.state != "RUNNING" && code == 59){
            $('.state').html('已结束');
            $('.join_help').html('等待开奖').css({background:'#ccc',color:'#b2b2b2'}).attr('disabled')
        }
    })

    // 获取购买总数
    TD_Request('ds','precs',{
        pid:poolInfo.pid,
    },function(code,data){
        $('.count').html(data.ordCount)
    },function(code,data){
        console.log('获取失败：'+data.context)
    })

    // 编号类型切换
    var number = 0; //初始状态
    $('.tab div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.tab div.left').click(function(){
       
    })

    // 公用
    function getOrd(number){
        console.log(userInfo,poolInfo)
    }
})