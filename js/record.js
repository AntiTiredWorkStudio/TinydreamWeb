$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    console.log(Options.GetUserInfo())
    var userInfo = Options.GetUserInfo();
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
        $('.tip_txt').html('')
    })
    $('.r_right').click(function(){  
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
        $('.count').html('15')
        $('.tip_txt').html('发出红包总数<span style="color:#f25542">15</span>元').css('font-size','0.3rem')
    })
})