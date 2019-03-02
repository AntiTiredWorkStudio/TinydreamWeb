WebApp.JSAPI.Init();
$(function(){
    // if($_GET.type != 'test'){
        $('.block.bottom.psa').hide();
    // }else{
        // $('.block.bottom.psa').show();
        $('.footer ul li.first a').attr('href','javascript:;').click(function(){
            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html?type=test'
        })
    // }
    var userInfo = Options.GetUserInfo();
    TD_Request("us","selfinfo",{
        uid:userInfo.openid
    },function(code,data){
        if(code == 0){
            if(data.selfinfo.headicon == ''){
                data.selfinfo.headicon = 'https://tdream.antit.top/image/miniLogo.jpg'
            }
            $('.header').css({'background':'url('+data.selfinfo.headicon+') no-repeat','background-size':'1.74rem 1.74rem'});
            $('.nickName').html(data.selfinfo.nickname);
            $('.left .num').html(data.selfinfo.totalJoin);
            $('.middle .num').html(data.selfinfo.totalReward / 100);
            $('.right .num').html(data.selfinfo.dayBuy);
        }
    },function(code,data){
        if(code!=0){
            console.log(data);
        }
    })
    // WebApp.JSAPI.Init()
})