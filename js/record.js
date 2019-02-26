$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    var userInfo = Options.GetUserInfo();
    get('get','gurpr',0);

    // 获取红包函数
    /*
    参数 redpack 请求状态
    参数 rp 红包状态（gurpr:收到红包;gurps发出红包）
    参数 num 游标
    */
    function get(redpack,rp,num){
        TD_Request('rp',rp,{
            uid:userInfo.openid,
            seek:num,
            count:5,
        },function(code,data){
            console.log(data)
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
    $('.r_left').click(function(){  
        $('.tip_txt').html('');
        $('.tip').html(userInfo.nickname+'收到的梦想红包共')
        get('get','gurpr',0)

    })
    $('.r_right').click(function(){  
        get('give','gurps',0);
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
    })
})