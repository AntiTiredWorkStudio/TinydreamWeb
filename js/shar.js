$(function(){
    console.log($('body').height());
    var img = localStorage.getItem('img');
    $('.share').css({
        background:'url('+img+') no-repeat',
        'background-size':'cover'
    });
    // 获取画布
    var canvas = document.getElementById('canvas')
    canvas.style.width = $('.share').width();
    canvas.style.height = $('.share').height();
    // 获取图形上下文
    var ctx = canvas.getContext('2d');
})