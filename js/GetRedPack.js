WebApp.JSAPI.init();
$(function(){
    var rinfo = JSON.parse(localStorage.getItem('rinfo'));
    var userInfo = Options.GetUserInfo();
    // 获取梦想池信息
    // function mainPool(pid){
    //     TD_Request('dp','pinfo',{
    //         pid:pid
    //     },function(code,data){
    //         var obj = DreamPoolAnalysis(data.pool)
    //         localStorage.setItem('poolInfo',JSON.stringify(obj))
    //         if(obj.state == 'RUNNING'){
    //             window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/helpInfo.html";
    //         }else{
    //             window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/end.html";
    //         }    
    //     })
    // }
    $('.title').html(rinfo.nickname+'的梦想红包');
    $('.msg').html(rinfo.content);
    if(rinfo.headicon == ''){
        rinfo.headicon = 'https://tdream.antit.top/image/miniLogo.jpg'
    }
    $('.headicon').css({
        background:'url('+rinfo.headicon+') no-repeat',
        'background-size':'0.88rem 0.88rem'
    })
    TD_Request('rp','orp',{uid:userInfo.openid,rid:rinfo.rid},function(code,data){
        console.log(data);
        var lid;
        $.each(data.nums,function(index,item){
            // console.log(item);
            lid = item.lid;
        })
        $('.get_num').html('已领取编号：<span class="number">'+lid+'</span>');
        $('.r_tip').html('该编号自动参与小梦想互助平台'+data.pid+'期的幸运者抓阄，幸运者可以领取'+data.totalBill/100+'元梦想互助金去启动梦想')
        // $('button').html('查看详情').click(function(){
        //     mainPool(data.pid);
        // })
        $('button').hide();
        $('.mtip').hide();
        $('.hide').show();
    },function(code,data){
        console.log(data)
        if(code == 72){
            $('.get_num').html('已领取编号：<span class="number">'+data.reco.lid+'</span>');
            $('.r_tip').html('该编号自动参与小梦想互助平台'+data.pid+'期的幸运者抓阄，幸运者可以领取'+data.totalBill/100+'元梦想互助金去启动梦想')
            // $('button').html('查看详情').click(function(){
            //     mainPool(data.pid);
            // })
            $('.mtip').hide();
            $('button').hide();
            $('.hide').show();  
        }else if(code == 11){
            $('.get_num').html('待取编号:1个');
            $('.r_tip').html('该编号自动参与小梦想互助平台--期的幸运者抓阄，幸运者可以领取--元梦想互助金去启动梦想')
            $('button').show().html('绑定手机').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html?phone=false'
            })
            $('.mtip').show();
            $('.hide').hide();
        }else if(code == 71){
            $('.get_num').html('待取编号:1个');
            $('.r_tip').html('该编号自动参与小梦想互助平台--期的幸运者抓阄，幸运者可以领取--元梦想互助金去启动梦想')
            $('button').show().html('添加梦想').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/dream.html?dream=false'
            })
            $('.mtip').show();
            $('.hide').hide();
        }else if(code == 18){
            $('.mtip').hide();
            $('.r_tip').html('您当日购买次数已达上限,无法领取该红包');
            $('.get_num').hide();
            $('button').show().html('返回首页').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html'
            })
        }else if(code== 5){
            $('.mtip').hide();
            $('.r_tip').html('红包已过期');
            $('.get_num').hide();
            $('button').show().html('返回首页').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html'
            })
        }else if(code == 74){
            $('.mtip').hide();
            $('.get_num').hide();
            $('.r_tip').html('您来晚了，红包已被领完').css('text-align','center');
            $('button').show().html('返回首页').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html'
            })
        }  
    })
})