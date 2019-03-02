WebApp.JSAPI.Init();
$(function(){
    var rinfo = JSON.parse(localStorage.getItem('rinfo'));
    if(rinfo == '' || typeof rinfo == 'undefined' || rinfo == null){
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/RedEnvelope.html';
    }
    var userInfo = Options.GetUserInfo();
    var num;
    num = 0;
    if($_GET.type == 'get'){
        $('.r_tip').css('text-align','center');
    }else{
        $('.r_tip').css('text-align','center');
    }
    redpack(num)
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
    $('.r_tip').html('该编号自动参与小梦想互助平台'+rinfo.pid+'期的幸运者抓阄，幸运者可以领取'+rinfo.ptbill+'元梦想互助金去启动梦想');
    var templateStr = $('#template').html();
    var compiled = _.template(templateStr);
    function redpack(num){
        TD_Request('rp','grpr',{
            rid:rinfo.rid,
            seek:num,
            count:10
        },function(code,data){
            console.log(data)
            $('.num_count').html('共'+data.redpack.rcount+'个，已被领取'+data.redpack.gcount+"个");
            if(data.reco.length < 10 || data.reco.length == 0){
                $('#btn').hide();
            }else{
                $('#btn').show();
            }
            _.each(data.reco,function(item){
                var date = new Date(parseInt(item.gtime) * 1000);
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                if(item.nickname.length>8){
                    item.username = item.nickname.substring(0,8) + '...';
                }else{
                    item.username = item.nickname;
                }
                if(h<10){
                    h = '0'+h;
                } 
                if(m<10){
                    m = '0'+m;
                }
                if(s<10){
                    s = '0'+s;
                }
                if(item.headicon == ''){
                    item.headicon = 'https://tdream.antit.top/image/miniLogo.jpg'
                }
                item.time = h+':'+m+':'+s;
                var str = compiled(item);
                var $dom = $(str);
                $dom.appendTo('ul');
            })
        },function(code,data){
            console.log(data)
            if(code==70){
                alert('红包不存在');
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/RedEnvelope.html?time='+new Date().getTime()
            }
        })
    }
    // 加载跟多
    // alert(123)
    $('#btn').click(function(){
        num = num+10;
        redpack(num);
    })
    TD_Request('rp','orp',{uid:userInfo.openid,rid:rinfo.rid},function(code,data){
        console.log(data);
        var lid;
        $.each(data.nums,function(index,item){
            // console.log(item);
            lid = item.lid;
        })
        $('.get_num').html('已领取编号：<span class="number">'+lid+'</span>');
        

        // $('button').html('查看详情').click(function(){
        //     mainPool(data.pid);
        // })
        redpack(0)
        $('.fpack,.fpack span').click(function(){
            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time='+new Date().getTime();
        }).show()
        $('button').hide();
        $('.mtip').hide();
        $('.hide').show();
    },function(code,data){
        if($_GET.type == 'get'){
            $('.header').css('margin-bottom','0.6rem');
            $('.mtip').css('text-align','center')
        }else{
            $('.header').css('margin-bottom','1.2rem');
            $('.mtip').css('text-align','center')
        }
        console.log(data)
        // alert(code);
        if(code == 72){
            $('.get_num').html('已领取过该编号：<span class="number">'+data.reco.lid+'</span>');
            // $('.r_tip').html('该编号自动参与小梦想互助平台'+data.pid+'期的幸运者抓阄，幸运者可以领取'+data.totalBill/100+'元梦想互助金去启动梦想')
            // $('button').html('查看详情').click(function(){
            //     mainPool(data.pid);
            // })
            // redpack(0);
            $('.fpack,.fpack span').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time='+new Date().getTime();
            }).show()
            $('.mtip').hide();
            $('button').hide();
            $('.hide').show();  
        }else if(code == 11){
            $('.get_num').html('待取编号:1个');
            // $('.r_tip').html('该编号自动参与小梦想互助平台--期的幸运者抓阄，幸运者可以领取--元梦想互助金去启动梦想')
            $('button').show().html('绑定手机').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html?phone=false&?time='+new Date().getTime()
            })
            $('.mtip').show();
            $('.hide').hide();
        }else if(code == 71){
            $('.get_num').html('待取编号:1个');
            $('.r_tip').html('该编号自动参与小梦想互助平台--期的幸运者抓阄，幸运者可以领取--元梦想互助金去启动梦想')
            $('button').show().html('添加梦想').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/dream.html?dream=false&?time='+new Date().getTime()
            })
            $('.mtip').show();
            $('.hide').hide();
        }else if(code == 18){
            $('.mtip').hide();
            $('.r_tip').html('您当日购买次数已达上限,无法领取该红包').css('text-align','center');
            $('.get_num').hide();
            $('.fpack,.fpack span').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time='+new Date().getTime();
            }).show()
            $('button').show().html('返回首页').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html?time='+new Date().getTime()
            })
        }else if(code== 5){
            $('.mtip').hide();
            $('.r_tip').html('红包已过期');
            $('.get_num').hide();
            $('.fpack,.fpack span').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time='+new Date().getTime();
            }).show()
            $('button').show().html('返回首页').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html?time='+new Date().getTime()
            })
        }else if(code == 74){
            $('.mtip').hide();
            $('.get_num').hide();
            $('.r_tip').html('您来晚了，红包已被领完').css('text-align','center');
            $('.fpack,.fpack span').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time='+new Date().getTime();
            }).show()
            $('button').show().html('返回首页').click(function(){
                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html?time='+new Date().getTime()
            })
        }  
    })
})