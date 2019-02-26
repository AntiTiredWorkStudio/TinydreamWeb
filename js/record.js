$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    var userInfo = Options.GetUserInfo();
    get('get',0);
    function get (redpack,num) {
        function record(rp){
            TD_Request('rp',rp,{
                uid:userInfo.openid,
                seek:num,
                count:5
            },function(code,data){
                console.log(data)
                $('.count').html(data.packs.length);
                var totalHeight = 0;
                var scrollHeight = $(window).scrollTop();
                
                $(window).scroll(function(){
                    totalHeight = parseFloat($(window).height())+parseFloat(scrollHeight);
                    if(($(document).height()-50) <= totalHeight && num != data.packs.length){
                       if(redpack == 'get'){
                           get('get',num+5)
                       }else{
                            get('give',num+5)
                       }
                    }
                })
                $.each(data.packs,function(index,item){
                    if(data.packs.length == 0){
                        if(redpack == 'get'){
                            $('.content').html('您还没有收到过红包').css({
                                'text-align':'center',
                                'font-size':'0.28rem',
                                'color':'#999'
                            })
                        }else{
                            $('.content').html('您还没有发出过红包').css({
                                'text-align':'center',
                                'font-size':'0.28rem',
                                'color':'#999'
                            })
                        }
                        
                    }
                    if(redpack == 'get'){
                        var date = new Date(parseInt(item.gtime) * 1000);
                        var y = date.getFullYear();
                        var m = date.getMonth() + 1;
                        if(m < 10){
                            m = '0'+m;
                        }
                        var d = date.getDate();
                        if(d < 10){
                            d = '0'+d;
                        }
                        var gtime = y+'.'+m+'.'+d;
                    }else if(redpack == 'give'){
                        var date = new Date(parseInt(item.ctime) * 1000);
                        var y = date.getFullYear();
                        var m = date.getMonth() + 1;
                        if(m < 10){
                            m = '0'+m;
                        }
                        var d = date.getDate();
                        if(d < 10){
                            d = '0'+d;
                        }
                        var gtime = y+'.'+m+'.'+d;
                        $('.info .right .coun').html(item.rcount+'个');
                        $('.info .right .f_count').html(item.gcount+'/'+item.rcount);
                        if(item.state == 'FINISHED'){
                            $('.info .right .f_count').html('已过期 '+item.gcount+'/'+item.rcount);
                        }
                    }
                    user()
                    function user () {
                        TD_Request('us','selfinfo',{uid:item.uid},function(code,data){
                            var nickname = data.selfinfo.nickname;
                            $('.content').html('<div class="info"><div class="left"><p class="username">'+nickname+'</p><p class="time">'+gtime+'</p></div><div class="right"><p class="coun">'+item.pcount+'个</p></div></div>')
                            if(redpack != 'give'){
                                $('.f_count').html('');
                            }
                        },function(code,data){
                            console.log(data);
                        })
                    }
                })
                $('.tip_txt').html('发出红包总数<span style="color:#f25542">'+data.packs.length * 5+'</span>元').css('font-size','0.3rem');
            },function(code,data){
                console.log(data)
            })
        }
        if(redpack == 'get'){
            record('gurpr')  
        }else if(redpack == 'give'){
            record('gurps')
        }
    }
    console.log(Options.GetUserInfo())
    
    // 用户头像
    $('.headicon').css('background','url('+userInfo.headimgurl+') no-repeat')
    $('.tip').html(userInfo.nickname+'收到的梦想红包共')
    $('.top ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 收到红包
    $('.r_left').click(function(){  
        $('.tip_txt').html('');
        $('.tip').html(userInfo.nickname+'收到的梦想红包共')
        get('get',0)

    })
    $('.r_right').click(function(){  
        get('give',0);
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
    })
})