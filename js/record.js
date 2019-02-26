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
                $.each(data.packs,function(index,item){
                    console.log(item)
                    var gtime = parseInt(item.gtime).toLocaleDateString();
                    user()
                    function user () {
                        TD_Request('us','selfinfo',{uid:item.uid},function(code,data){
                            var nickname = data.selfinfo.nickname;
                            $('.content').html('<div class="info"><div class="left"><p class="username">'+nickname+'</p><p class="time">'+gtime+'</p></div><div class="right"><p class="coun">'+item.pcount+'个</p></div></div>')
                            if(redpack != 'get'){
                                $('.f_count').html('');
                            }
                        },function(code,data){
                            console.log(data);
                        })
                    }
                })
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
        $('.tip').html(userInfo.nickname+'收到的梦想红包共')
        $('.count').html('15')
        $('.tip_txt').html('');
        $('.info .right coun').html('2个');
        $('.info .right .f_count').html('');
    })
    $('.r_right').click(function(){  
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
        $('.count').html('15')
        $('.tip_txt').html('发出红包总数<span style="color:#f25542">75</span>元').css('font-size','0.3rem');
        $('.info .right .coun').html('3个');
        $('.info .right .f_count').html('3/3');
    })
})