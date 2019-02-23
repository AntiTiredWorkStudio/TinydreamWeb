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

    async function draw(){
        ctx.beginPath();
        imgs.onload = function () {await ctx.drawImage(imgs,0,0,$('.share').width(),$('.share').height())} 
        await alert(canvas.toDataURL("image/png"))
        await $('img').attr('src',canvas.toDataURL("image/png"))
        $('#canvas').remove();
    }
    draw();
    console.log(url);
})