$(function () {
    var url = localStorage.getItem('img');
    var userInfo = Options.GetUserInfo();
    $('.share').css({
        background:'url('+url+') no-repeat',
        'background-size':'cover'
    })
    $('.headicon').css({
        'background':'url('+userInfo.headimgurl+') no-repeat',
        'background-size':'1rem 1rem'
    })
    if(userInfo.nickname.length > 6){
        $('.nickname .name').html(userInfo.nickname.substring(0,7));
    }else{
        $('.nickname .name').html(userInfo.nickname);
    }
    // html转为图片
    html2canvas(document.getElementById('share')).then(function(canvas){
        var url = canvas.toDataURL('image/png');
        $('#share').html('<img src='+url+' />');
        alert(url)
    })

})