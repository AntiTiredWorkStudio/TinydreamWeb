$(function(){
    var rid = $_GET.rid;
    TD_Request('rp','grp',{rid:rid},function(code,data){
        console.log(data)
        var userInfo = data.sender;
        $('.headicon').css({
            background:'url('+userInfo.headicon+') no-repeat',
            'background-size':'0.88rem 0.88rem'
        });
        $('.title').html(userInfo.nickname+'的梦想红包');
        $('.msg').html(data.redpack.content);
        $('button').click(function(){
            localStorage.setItem('rinfo',JSON.stringify({rid:rid,headicon:userInfo.headicon,nickname:userinfo.nickname,content:data.redpack.content}));
            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/GetRedPack.html'
        })
    },function(code,data){
        console.log(data)
    })
})