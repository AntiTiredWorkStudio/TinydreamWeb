$(function(){
    console.log($('body').height());
    var img = localStorage.getItem('img');
    $('.share').css({
        background:'url('+img+') no-repeat',
        'background-size':'cover'
    });
})