$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    var userInfo = Options.GetUserInfo();
    get('get',0);
    function get (redpack,num) {
        if(redpack == 'get'){
            TD_Request('rp','gurpr',{
                uid:userInfo.openid,
                seek:num,
                count:5
            },function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data)
            })
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