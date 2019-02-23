$(function () {
    var url = localStorage.getItem('img');
    var userInfo = Options.GetUserInfo();
    $('.bg').attr('src',url).css({
        width:$('.share').width(),
        height:$('.share').height(),
        position:"absolute",
        top:0,
        left:0
    });
    $('.headicon').attr('src',userInfo.headimgurl)
    if(userInfo.nickname.length > 6){
        $('.nickname .name').html(userInfo.nickname.substring(0,7));
    }else{
        $('.nickname .name').html(userInfo.nickname);
    }

    var canvas = document.getElementById('canvas');
    canvas.width = $('.share').width();
    canvas.height = $('.share').height();
    var ctx = canvas.getContext('2d');
    var bg = new Image();
    bg.src = url;
    var head = new Image();
    head.src = userInfo.headimgurl;
    window.onload = function(){
        ctx.drawImage(bg,0,0,$('.share').width(),$('.share').height())
        ctx.drawImage(head,10,40,50,50);
        alert(1)
    }
    // html转为图片
//   setTimeout(function(){
//         html2canvas(document.getElementById('share')).then(function(canvas){
//             var url = canvas.toDataURL('image/png');
//             $('#share').html('<img src='+url+' />');
//             $('img').width($('.share').width());
//             $('img').height($('.share').height())
//             alert(url)
//         })
//     },10000)

})