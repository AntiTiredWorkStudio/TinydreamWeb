$(function () {
    var img = [];
    var num = 0;
    var url = localStorage.getItem('img');
    var canvas = document.getElementById('canvas');
    canvas.width = $('.share').width();
    canvas.height = $('.share').height();
    $('body').css('background','red')
    
    var ctx = canvas.getContext('2d');
    var x1 = canvas.width - 75;
    var x2 = canvas.width - 141;
    var x3 = canvas.width - 155;
    var y = canvas.height - 25;
    var y2 = canvas.height - 85;
    var y1 = canvas.height - 44;
    var userInfo = Options.GetUserInfo();
    var imgArr = [
        url,userInfo.headimgurl,'http://tdream.antit.top/LongPress2ShareQR.jpg'
    ];
    next(imgArr,0,0,0,$('.share').width(),$('.share').height(),canvas); 
    
    // var l = canvas2image(canvas).then(function(res){
    //     alert(res);
    //     // $('.share').html('<img class="bgi" src='+res+' />');
    //     $('.share').html(res)
    //     console.log(res)
    // });
    // console.log(l)
    
    // $('.bgi').css({
    //     width:$('.share').width(),
    //     height:$('.share').height()
    // })
    // alert(1);
    // var total = img.length;
    function next(src,index,x,y,width,height,canvas){
        var img = new Image();
        img.src = src[index];
        img.onload = function(){
            console.log(img.src)
            if(index != 2){
                ctx.drawImage(img,x,y,width,height)
                next(imgArr,index+1,15,40,50,50) 
            }else{
                x = x1;
                y = y2;
                width = 60;
                height = 60;
                ctx.drawImage(img,x,y,width,height);
                canvas = document.getElementById('canvas');
                canvas2image(canvas).then(function(res){
                    alert(res)
                    $('.share').html(res)
                    alert('success')
                })
               
            }
            
        }
    }
    // for(let i = 0;i<imgArr.length;i++){
    //     console.log(i)
    //     img[i] = new Image();
    //     img[i].src = imgArr[i];
    //     img[i].onload = function(){
    //         if(i == 0){
    //             alert(i)
    //             ctx.drawImage(img[i],0,0,$('.share').width(),$('.share').height())
    //         }else if(i == 1){
    //             alert(i);
    //             ctx.drawImage(img[i],15,40,50,50);
    //         }else if(i == 2){
    //             alert(i)
    //             ctx.drawImage(img[num],x1,y2,60,60);
    //             alert('全部绘制完成')
    //         }
    //     }
        //     num++;
        //     if(total+1 == num){
        //         alert('success')
        //     }
        //     console.log(i)
        //     if(i == 0){
        //         ctx.drawImage(img[i],0,0,$('.share').width(),$('.share').height())
                
        //     }else if(i == 1){
        //         // num++;
        //         ctx.drawImage(img[i],15,40,50,50);
        //     }else if(total+1 == num){
        //         alert('加载完毕');
        //         ctx.drawImage(img[num],x1,y2,60,60);
        //     }
            // ctx.globalCompositeOperation = 'source-over'
            // if(i == 0){
            //     console.log(img)
            //     ctx.drawImage(img,0,0,$('.share').width(),$('.share').height())
            // }else if(i == 1){
            //     console.log(img)
            //     ctx.drawImage(img,15,40,50,50)
            // }else if(i == 2){
            //     console.log(img)
            //     ctx.drawImage(qr,x1,y2,60,60);
            //     canvas2image(canvas).then(function(res){
            //         console.log(res)
            //     })
            // }
        // }
    // }
    async function canvas2image(canvas){
        // var num = 0;
        // for (var i = 0; i<)
        // img.src = imgArr[num];
        img.onload = function(){
            // if(num == 0){
            //     ctx.drawImage(img,0,0,$('.share').width(),$('.share').height());
            //     num++;
            // }
        }

        // var bg = new Image();
        // bg.src = url;
        // var head = new Image();
        // head.src = userInfo.headimgurl;
        // var qr = new Image();
        // qr.src = 'http://tdream.antit.top/LongPress2ShareQR.jpg';
        // bg.setAttribute('crossOrigin','anonymous')
        // bg.onload =  function(){
        //     // ctx.globalCompositeOperation = 'xor'
        //      ctx.drawImage(bg,0,0,$('.share').width(),$('.share').height());
        //      canvas.toDataURL('image/png');
        //      $('.share').html('<img src='+canvas.toDataURL('image/png')+'>')
        // }
        // head.onload =  function(){
        //     ctx.globalCompositeOperation = 'destination-over'
        //     bg.setAttribute('crossOrigin','anonymous')
        //     // ctx.globalCompositeOperation = 'xor'
        //      ctx.drawImage(head,15,40,50,50);
        //      $('.share').html('<img src='+canvas.toDataURL('image/png')+'>')
        // }
        // qr.onload =  function(){
        //     bg.setAttribute('crossOrigin','anonymous')
        //     ctx.globalCompositeOperation = 'destination-over';
        //      ctx.drawImage(qr,x1,y2,60,60);
        // }
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
        var imgs =new Image();
        imgs.src = canvas.toDataURL('image/jpg',1);
        var url1 = canvas.toDataURL('image/jpg',1)
        return imgs;
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