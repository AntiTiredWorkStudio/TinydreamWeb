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
        $('.nickname .name').html(userInfo.nickname.substring(0,7)+'...');
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
    var qr = new Image();
    qr.src = 'https://tdream.antit.top/LongPress2ShareQR.jpg';
    window.onload = function(){
        ctx.save()
        ctx.drawImage(bg,0,0,$('.share').width(),$('.share').height())
        ctx.globalCompositeOperation = 'source-over'
        // ctx.drawImage(head,0,0,50,50);
        ctx.drawImage(head,15,40,50,50);
        ctx.fillStyle = '#fff';
        ctx.font = '15px 微软雅黑';
        if(userInfo.nickname.length > 6){
            var name = userInfo.nickname.substring(0,7)+'...';
        }else{
            var name = userInfo.nickname;
        }
        ctx.fillText(name + ' #2019小梦想#',75,56);
        var dream = '云南鲜花饼店...';
        ctx.font = '19px 微软雅黑'
        ctx.fillText(dream+'(已成功参与互助)',75,88);
        ctx.font = '28px 微软雅黑';
        ctx.fillText('小梦想互助',-25,-85);
        alert(1)
        // $('#canvas').remove()
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