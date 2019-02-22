$(function(){
    console.log($('body').height());
    localStorage.getItem('img');
    $('.share').css({
        background:'url('+img+') no-repeat',
    });
})