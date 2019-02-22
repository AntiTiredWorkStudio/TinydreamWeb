$(function(){
    var url;
    console.log($('body').height());
    var img = localStorage.getItem('img');
    $('.share').css({
        background:'url('+img+') no-repeat',
        'background-size':'cover'
    });
    var imgs = new Image();
    imgs.src = img;
    // 获取画布
    var canvas = document.getElementById('canvas')
    canvas.width = $('.share').width();
    canvas.height = $('.share').height();
    // 获取图形上下文
    var ctx = canvas.getContext('2d');
    imgs.onload = function(){
        ctx.beginPath();
        ctx.drawImage(imgs,0,0,$('.share').width(),$('.share').height())
        
    }
    alert(canvas.toDataURL("image/png"))
    console.log(url);
})