$(function(){
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
        convertCanvasToImage(canvas)
    }
    function convertCanvasToImage(canvas) {  
        //新Image对象，可以理解为DOM  
        var image = new Image();  
        // canvas.toDataURL 返回的是一串Base64编码的URL
        // 指定格式 PNG  
        image.src = canvas.toDataURL("image/png");  
        image.appendTo('.share');
        $('#canvas').remove(); 
    }  
})