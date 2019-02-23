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

    $('.nickname .name').html(userInfo.nickname);
    console.log(userInfo.nickname.split(6))
})