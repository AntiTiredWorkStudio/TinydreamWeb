$(function(){
    var url;
    console.log($('body').height());
    var img = localStorage.getItem('img');
    $('.share').css({
        background:'url('+img+') no-repeat',
        'background-size':'cover'
    });
    // 获取画布
    var canvas = document.getElementById('canvas')
    canvas.width = $('.share').width();
    canvas.height = $('.share').height();
    // 获取图形上下文
    var ctx = canvas.getContext('2d');
    var imgs = new Image();
    ctx.beginPath();
    imgs.onload = function () {
        ctx.drawImage(imgs,0,0,$('.share').width(),$('.share').height())
        img(canvas.toDataURL('image/png'))
    } 
    function img(url){
        alert(canvas.toDataURL("image/png"))
        $('img').attr('src',canvas.toDataURL("image/png"))
        $('#canvas').remove();
    }
    console.log(url);
})