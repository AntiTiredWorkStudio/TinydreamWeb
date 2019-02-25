$(function(){
    var rid = $_GET().rid;
    TD_Request('rp','grp',{rid:rid},function(code,data){
        var userInfo = data.userinfo;
        $('.headicon').css({
            background:'url('+userInfo.headicon+') no-repeat',
            'background-size':'0.88rem 0.88rem'
        });
        $('.title').html(userInfo.nickname+'的梦想红包');
        $('.msg').html(redpack.content);
        $('button').click(function(){
            localStorage.setItem('rinfo',JSON.stringify({rid:rid,headicon:userInfo.headicon,nickname:userinfo.nickname}));
            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/GetRedPack.html'
        })
    })
})