$(function(){
    var rinfo = JSON.parse(localStorage.getItem('rinfo'));
    var userInfo = Options.GetUserInfo();
    // 获取梦想池信息
    function mainPool(pid){
        TD_Request('dp','pinfo',{
            pid:pid
        },function(code,data){
            var obj = DreamPoolAnalysis(data.pool)
            localStorage.setItem('poolInfo',JSON.stringify(obj))
            if(obj.state == 'RUNNING'){
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/helpInfo.html";
            }else{
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/end.html";
            }    
        })
    }
    $('.title').html(rinfo.nickname+'的梦想红包');
    $('.msg').html(rinfo.content);
    $('.headicon').css({
        background:'url('+rinfo.headicon+') no-repeat',
        'background-size':'0.88rem 0.88rem'
    })
    TD_Request('rp','orp',{uid:userInfo.openid,rid:rinfo.rid},function(code,data){
        console.log(data);
        // $('.get_num').html('已领取编号');
        // var lid;
        // $.each(data.nums,function(index,item){
        //     console.log(item);
        //     lid = item.lid;
        // })
        // $('.number').html(lid);
        // $('button').html('查看详情');
        // $('button').click(function(){
        //     window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/record.html'
        // })
    },function(code,data){
        console.log(data)
        if(code == 72){
            $('.get_num').html('已领取编号：<span class="number">'+data.reco.lid+'</span>');
            $('.tip').html('该编号自动参与小梦想互助平台'+data.pid+'期的幸运者抓阄，幸运者可以领取'+data.totalBill/100+'元梦想互助金去启动梦想')
            $('button').html('查看详情').click(function(){
                mainPool(data.pid);
            })
        }
        // if(code == 11){
        //     $('.get_num').html('待取编号');
        //     $('.number').html('1个');
        //     $('button').html('绑定手机');
        //     $('button').click(function(){
        //         window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html?phone=false'
        //     })
        // }else if(code == 71){
        //     $('button').html('添加梦想');
        //     $('button').click(function(){
        //         window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/dream.html?dream=false'
        //     })
        // }else if(code == 72){
        //     $('.get_num').html('已领取编号');
        //     $('.number').html(data.reco.lid);
        //     $('button').html('查看详情');
        //     $('button').click(function(){
        //         window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/record.html'
        //     })
        // }else if(code == 18){
        //     alert('您当日购买次数已达上限,无法领取该红包');
        //     return;
        // }else if(code== 5){
        //     alert(data.context);
        //     return;
        // }
    })
})