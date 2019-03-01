WebApp.JSAPI.Init();
$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    var userInfo = Options.GetUserInfo();
    var number;
    var r_state;
    r_state = 'get'
    number = 0;
    redpack('get','gurpr',number)
    // 排序方法

    function compare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
        }
    }
    // 时间转化
    function time(date){
        
        console.log(h)
       
        return time;
    }
    // 红包记录数据
    function redpack(state,actions,num){
        // $('.content').empty();
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
                // 收到红包
                // 数组降序排序
                data.packs.sort(compare("gtime"))
                $('.tip_txt').html('收到编号<span style="color:#f25542">'+data.stats.countPack+'</span>个').css('font-size','0.3rem');
                $.each(data.packs,function(index,item){
                    // 收到时间
                    var date = new Date(parseInt(item.gtime) * 1000)
                    var y,m,d,h,M,s
                    y = date.getFullYear();
                    m = date.getMonth() + 1;
                    d = date.getDate();
                    h = date.getHours();
                    M = date.getMinutes();
                    s = date.getSeconds();
                    if(m<10){
                        m = '0'+m;
                    }
                    if(d < 10){
                        d = '0'+d;
                    }
                    if(h < 10){
                        h = '0'+h;
                    }
                    if(M < 10){
                        M = '0'+M;
                    }
                    if(s < 10){
                        s = '0'+s;
                    }
                    var time = y+'.'+m+'.'+d+' '+h+':'+M+':'+s;
                    $('<div class="info"><div class="left"><p class="username">'+item.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.pcount+'个</p></div></div>').appendTo('.content')
                })
            }else if(state == 'give'){
                // $('.content').empty();
                // 发出红包
                data.packs.sort(compare("ctime"))
                $('.tip_txt').html('发出红包金额<span style="color:#f25542">'+data.stats.totalBill / 100+'</span>元').css('font-size','0.3rem');
                $.each(data.packs,function(index,item){
                    // 发出时间
                    // console.log(item);
                    var date = new Date(parseInt(item.ctime) * 1000)
                    var y,m,d,h,M,s
                    y = date.getFullYear();
                    m = date.getMonth() + 1;
                    d = date.getDate();
                    h = date.getHours();
                    M = date.getMinutes();
                    s = date.getSeconds();
                    if(m<10){
                        m = '0'+m;
                    }
                    if(d < 10){
                        d = '0'+d;
                    }
                    if(h < 10){
                        h = '0'+h;
                    }
                    if(M < 10){
                        M = '0'+M;
                    }
                    if(s < 10){
                        s = '0'+s;
                    }
                    var time = y+'.'+m+'.'+d+' '+h+':'+M+':'+s;
                    console.log(time)
                    TD_Request('us','selfinfo',{
                        uid:item.uid
                    },function(code,data){
                        var user = data.selfinfo;
                        console.log(user.nickname)
                        $('<div class="info"><div class="left"><p class="username">'+user.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.rcount+'个</p><p class="f_count">'+item.gcount+'/'+item.rcount+'</p></div></div>').appendTo('.content')
                        if(item.pstate == 'FINISHED' && item.gcount < item.rcount){
                            $('.right .coun').html(item.rcount+'个').css('text-align','right');
                            $('.right .f_count').html('已过期'+item.gcount+'/'+item.rcount).css('text-align','right')
                        }
                    })
                })
            }
        },function(code,data){
            console.log(data);
        })
    }

    /**
     * 参数state 红包请求状态
     * 参数actions 请求动作
     * 参数num 游标
     */
    // function redpack(state,actions,num){
    //     TD_Request('rp',actions,{
    //         uid:userInfo.openid,
    //         seek:num,
    //         count:10
    //     },function(code,data){
    //         console.log(data)
    //         if(data.packs.length<10 || data.packs.length == 0){
    //             $('.loading').hide();
    //         }else{
    //             $('.loading').show();
    //         }
    //         $('.count').html(data.stats.countPack)
    //         if(state == 'get'){
    //             $('.tip_txt').html('收到编号<span style="color:#f25542">'+data.stats.countPack+'</span>个').css('font-size','0.3rem');
    //         }else{
    //             $('.tip_txt').html('发出红包金额<span style="color:#f25542">'+data.stats.totalBill / 100+'</span>元').css('font-size','0.3rem');
    //         }
    //         if(state == 'get'){
    //             data.packs.sort(compare('gtime'))
    //         }else{
    //             data.packs.sort(compare('ctime'))
    //         }
    //         $.each(data.packs,function(index,item){
    //             console.log(item);
    //             TD_Request('us','selfinfo',{uid:item.uid},function(code,data){
    //                 console.log(data.selfinfo.nickname)
    //                 if(state == 'get'){
    //                     var date = new Date(parseInt(item.gtime) * 1000);
    //                 }else{
    //                     var date = new Date(parseInt(item.ctime) * 1000);
    //                 }
    //                 // 获取时间
    //                 var y,m,d,h,M,s
    //                 y = date.getFullYear();
    //                 m = date.getMonth() + 1;
    //                 d = date.getDate();
    //                 h = date.getHours();
    //                 M = date.getMinutes();
    //                 s = date.getSeconds();
    //                 if(m<10){
    //                     m = '0'+m;
    //                 }
    //                 if(d < 10){
    //                     d = '0'+d;
    //                 }
    //                 if(h < 10){
    //                     h = '0'+h;
    //                 }
    //                 if(M < 10){
    //                     M = '0'+M;
    //                 }
    //                 if(s < 10){
    //                     s = '0'+s;
    //                 }
    //                 console.log(h)
    //                 var time = y+'.'+m+'.'+d+' '+h+':'+M+':'+s;
    //                 if(state == 'get'){
    //                     $('<div class="info"><div class="left"><p class="username">'+item.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.pcount+'个</p></div></div>').appendTo('.content')
    //                 }else{
    //                     console.log(item)
    //                     $('<div class="info"><div class="left"><p class="username">'+data.selfinfo.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun">'+item.rcount+'个</p><p class="f_count">'+item.gcount+'/'+item.rcount+'</p></div></div>').appendTo('.content')
    //                     if(item.pstate == 'FINISHED' && item.gcount == 0){
    //                         $('<div class="info"><div class="left"><p class="username" style="text-align:left">'+data.selfinfo.nickname+'</p><p class="time">'+time+'</p></div><div class="right"><p class="coun" style="text-align:right">'+item.rcount+'个</p><p class="f_count" style="text-align:right">已过期'+item.gcount+'/'+item.rcount+'</p></div></div>').css('text-align','right').appendTo('.content') 
    //                     }
    //                 }
    //             },function(code,data){
    //                 console.log(data)
    //             })
    //         })
    //     },function(code,data){
    //         console.log(data)
    //     })
    // }
    
    // console.log(Options.GetUserInfo())
    // 用户头像
    if(userInfo.headimgurl == ''){
        userInfo.headimgurl = 'https://tdream.antit.top/image/miniLogo.jpg'
    }
    $('.headicon').css('background','url('+userInfo.headimgurl+') no-repeat')
    $('.tip').html(userInfo.nickname+'收到的梦想红包共')
    $('.top ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    // // 收到红包
    $('.r_left')[0].addEventListener('click',function(){  
        number = 0;
        $('.tip').html(userInfo.nickname+'收到的梦想红包共');
        $('.content').empty();
        redpack('get','gurpr',number);
        r_state = 'get'
    },false)
    $('.r_right')[0].addEventListener('click',function(){  
        $('.content').empty();
        number = 0;
        redpack('give','gurps',number);
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
        r_state = 'give'
    },false)

    $('.loading')[0].addEventListener('click',function(){
        number = number+10;
        if(r_state == 'give'){
            console.log('give')
            redpack('give','gurps',number);
        }
        if(r_state == 'get'){
            console.log('get')
            redpack('get','gurpr',number);
        };
    },false);
})