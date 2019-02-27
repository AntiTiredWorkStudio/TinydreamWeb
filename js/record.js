WebApp.JSAPI.Init();
$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    var userInfo = Options.GetUserInfo();
    var number;
    number = 0;
    redpack('get','gurpr',number)
    /**
     * 参数state 红包请求状态
     * 参数actions 请求动作
     * 参数num 游标
     */
    function redpack(state,actions,num){
        TD_Request('rp',actions,{
            uid:userInfo.openid,
            seek:num,
            count:10
        },function(code,data){
            console.log(data)
            if(data.packs.length<10 || data.packs.length == 0){
                $('.loading').hide();
            }else{
                $('.loading').show();
            }
            $('.count').html(data.stats.countPack)
            if(state == 'get'){
                $('.tip_txt').html('收到编号<span style="color:#f25542">'+data.stats.totalBill+'</span>个).css('font-size','0.3rem');
            }else{
                $('.tip_txt').html('发出红包金额<span style="color:#f25542">'+data.stats.totalBill / 100+'</span>元').css('font-size','0.3rem');
            }
            $.each(data.packs,function(index,item){
                console.log(item);
                TD_Request('us','selfinfo',{uid:item.uid},function(code,data){
                    console.log(data.selfinfo.nickname)
                    if(state == 'get'){
                        var date = new Date(item.gtime * 1000);
                    }else{
                        var date = new Date(item.ctime * 1000);
                    }
                    var y = date.getFullYear();
                    var m = date.getMonth() + 1;
                    var d = date.getDate();
                    var time = y+'.'+m+'.'+d;
                    if(state == 'get'){
                        $('<div class="info"><div class="left"><p class="username">'+data.selfinfo.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.pcount+'个</p></div></div>').appendTo('.content')
                    }else{
                        $('<div class="info"><div class="left"><p class="username">'+data.selfinfo.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.rcount+'个</p><p class="f_count">'+item.gcount+'/'+item.rcount+'</p></div></div>').appendTo('.content')
                        if(item.state == 'FINISHED'){
                            $('<div class="info"><div class="left"><p class="username">'+data.selfinfo.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.rcount+'个</p><p class="f_count">已过期'+item.gcount+'/'+item.rcount+'</p></div></div>').appendTo('.content') 
                        }
                    }
                },function(code,data){
                    console.log(data)
                })
            })
        },function(code,data){
            console.log(data)
        })
    }
    
    console.log(Options.GetUserInfo())
    // 用户头像
    $('.headicon').css('background','url('+userInfo.headimgurl+') no-repeat')
    $('.tip').html(userInfo.nickname+'收到的梦想红包共')
    $('.top ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 收到红包
    var state;
    $('.r_left')[0].addEventListener('click',function(){  
        $('.tip').html(userInfo.nickname+'收到的梦想红包共');
        $('.content').empty();
        redpack('get','gurpr',number);
        state = 'get'

    },false)
    $('.r_right')[0].addEventListener('click',function(){  
        $('.content').empty();
        redpack('give','gurps',number);
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
        state = 'give'
    },false)

    $('.loading')[0].addEventListener('click',function(){
        number = number+10;
        if(state == 'give'){
            redpack('give','gurps',number);
        }else if(state == 'get'){
            redpack('get','gurpr',number);
        };
    },false);
})