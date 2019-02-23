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

    var bg = new Image();
    bg.src = url;
    var head = new Image();
    head.src = userInfo.headimgurl;
    var qr = new Image();
    qr.src = 'https://tdream.antit.top/LongPress2ShareQR.jpg';
    bg.onload = function(){
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(bg,0,0,$('.share').width(),$('.share').height());
        head.onload = function(){
            ctx.drawImage(head,15,40,50,50);
            qr.onload = function(){
                ctx.drawImage(qr,x1,y2,60,60);
            }
        }
    }
    $(window).load(function(){
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
        var url = canvas.toDataURL('image/png');
        alert(1)
        
        alert(url);
        document.getElementById('share').innerHTML = '<img src="'+url+'" />';
        $('.bg').remove();
    })
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