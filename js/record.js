WebApp.JSAPI.Init();
$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    // var arr = [];
    var userInfo = Options.GetUserInfo();
    var number;
    var r_state;
    r_state = 'get'
    number = 0;
    redpack('get','gurpr',number)
    // 模板字符串
    var templateStr = $('#template').html();
    var compiled = _.template(templateStr);
    // 排序方法

    // function compare(property){
    //     return function(a,b){
    //         var value1 = a[property];
    //         var value2 = b[property];
    //         return value2 - value1;
    //     }
    // }

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
            // arr.push(data.packs);
            if(state == 'get'){
                // 收到红包
                // 数组降序排序
                // data.packs.sort(compare("gtime"));
                $('.tip_txt').html('收到编号<span style="color:#f25542">'+data.stats.countPack+'</span>个').css('font-size','0.3rem');
                // console.log(arr)
                _.each(data.packs,function(item){
                    var time = GetLocalTime(item.gtime);
                    item.rcount = item.pcount;
                    item.cstate = 'done';
                    item.state = '';
                    item.coun = '';
                    item.rstate = '';
                    item.time = time;
                    console.log(item)
                    var str = compiled(item);
                    var $dom = $(str);
                    $dom.appendTo('.content')
                })
            }else if(state == 'give'){
                // $('.content').empty();
                // 发出红包
                // data.packs.sort(compare("ctime"))
                $('.tip_txt').html('发出红包金额<span style="color:#f25542">'+data.stats.totalBill / 100+'</span>元').css('font-size','0.3rem');
                _.each(data.packs,function(item){
                    // 发出时间
                    // console.log(item);
                    // item.rstate = '';
                    var time = GetLocalTime(item.ctime)
                    item.time = time;
                    // console.log(time)
                    item.nickname = userInfo.nickname;
                    if(item.pstate == 'FINISHED' && item.gcount < item.rcount){
                        item.rstate = '已过期'
                    } else {
                        item.rstate = ''
                    }
                    item.coun = item.gcount + '/' + item.rcount;
                    if(item.gcount < item.rcount && item.state == 'RUNNING' && item.psate=='FINISHED'){
                        item.cstate = 'share'
                    }else{
                        item.cstate = 'done'
                    }
                    var str = compiled(item);
                    var $dom = $(str);
                    $dom.appendTo('.content')
                })
            }
            $('.info').click(function(){
                console.log(1)
                if($('.rstate').html() == '已过期' || $(this).attr('data-cstate') == 'done'){
                    var rid = $(this).attr('data-rid');
                    TD_Request('rp','grp',{rid:rid},function(code,data){
                        var rinfo = data.redpack 
                        TD_Request('us','selfinfo',{
                            uid:data.redpack.uid
                        },function(code,data){
                            localStorage.setItem('rinfo',JSON.stringify({pid:rinfo.pid,ptbill:rinfo.ptbill / 100,rid:rid,headicon:data.selfinfo.headicon,nickname:data.selfinfo.nickname,content:rinfo.content}));
                            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/GetRedPack.html?type=get'
                        })
                        console.log(userInfo.headicon);
                        
                    },function(code,data){
                        // window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html'
                        console.log(data)
                    })
                }else if($(this).attr('data-state') == 'RUNNING' && $(this).attr('data-cstate') == 'share'){
                    var rid = $(this).attr('data-rid');
                    localStorage.setItem('msg','ok');
                    window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.html?rid='+rid;
                }
            })
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
    $('.headicon').css({
        'background':'url('+userInfo.headimgurl+') no-repeat',
        'background-size':'1.6rem 1.6rem'
    })
    $('.tip').html(userInfo.nickname+'收到的梦想红包共')
    $('.top ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    // // 收到红包
    $('.r_left')[0].addEventListener('click',function(){  
        number = 0;
        // arr = [];
        $('.tip').html(userInfo.nickname+'收到的梦想红包共');
        $('.content').empty();
        redpack('get','gurpr',number);
        r_state = 'get'
    },false)
    $('.r_right')[0].addEventListener('click',function(){  
        // arr = [];
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