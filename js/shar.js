$(function () {
    var url = localStorage.getItem('img');
    var canvas = document.getElementById('canvas');
    canvas.width = $('.share').width();
    canvas.height = $('.share').height();
    var ctx = canvas.getContext('2d');
    var x1 = canvas.width - 75;
    var x2 = canvas.width - 141;
    var x3 = canvas.width - 155;
    var y = canvas.height - 25;
    var y2 = canvas.height - 85;
    var y1 = canvas.height - 44;
    var userInfo = Options.GetUserInfo();
    
    var bg = new Image();
    bg.src = url;
    window.onload = function(){
        ctx.drawImage(bg,0,0,$('.share').width(),$('.share').height());
        var l = canvas2image(canvas);
        alert(l);
        $('.share').html('<img class="bgi" src='+l+' />');
        $('.bgi').css({
            width:$('.share').width(),
            height:$('.share').height()
        })
        alert(1);
    }
    function canvas2image(canvas){
        var head = new Image();
        head.src = userInfo.headimgurl;
        var qr = new Image();
        qr.src = 'https://tdream.antit.top/LongPress2ShareQR.jpg';
        head.onload = function(){
            ctx.globalCompositeOperation = 'destination-over'
            ctx.drawImage(head,15,40,50,50);
        }
        qr.onload = function(){
            ctx.globalCompositeOperation = 'destination-over';
            ctx.drawImage(qr,x1,y2,60,60);
        }
        ctx.globalCompositeOperation = 'source-over'
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
        ctx.font = '14px 微软雅黑';
        ctx.fillText('扫码关注',x2,y1);
        ctx.fillText('小梦想互助',x3,y);
        // var imgs = new Image();
    //    imgs.src = canvas.toDataURL('image/png');
    //    imgs.width = $('.share').width();
    //     imgs.height = $('.share').height();
    var url1 = canvas.toDataURL('image/png');
        return url1;
    }
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
    // $('#canvas').remove()
    // var imgurl = canvas.toDataURL('image/png');
    // alert(2)
    // document.getElementById('share').innerHTML = '<img class="img" src="'+imgurl+'" />';
    // $('.img').width($('.share').width())
    // $('.img').height($('.share').height())
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