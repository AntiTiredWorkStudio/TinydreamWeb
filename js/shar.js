$(function () {
    var url = localStorage.getItem('img');
    var userInfo = Options.GetUserInfo();
    $('.share').css({
        background:'url('+url+') no-repeat',
        'background-size':'cover'
    })
    $('.headicon').css({
        'background':'url('+userInfo.headimgurl+') no-repeat',
        'background-size':'0.8rem 0.8rem'
    })
    $('.nickname .name').html(userInfo.nickname);
})