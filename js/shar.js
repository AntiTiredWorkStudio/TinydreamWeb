$(function () {
    var img = [];
    var num = 0;
    var url = localStorage.getItem('img');
	//var url = 'https://tdream.antit.top/LongPress2Share10.jpg';//测试用
	console.log($('.share').width())
    var canvas = document.getElementById('canvas');
    canvas.width = $('.share').width() * 2;
    canvas.height = $('.share').height() * 2;
    $('body').css('background','red')
    
    var ctx = canvas.getContext('2d');
    var x1 = $('.share').width() - 75;
    var y = $('.share').height() - 25;
    var y2 = $('.share').height() - 85;
    var userInfo = Options.GetUserInfo();
	/*var userInfo = {
		headimgurl:'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELEgjjRsUFibrHsbpUicsCBkoU3eDTVuIJfkX2ibWpK2YT7ZsVsiaKobhD9bgOTkUl6IeYoo3xVPY2wRA/132',
		nickname:"Michael Kong"
	};//测试用*/
    var imgArr = [
        url,userInfo.headimgurl,'http://tdream.antit.top/LongPress2ShareQR.jpg'
    ];
    next(imgArr,0,0,0,$('.share').width(),$('.share').height()); 
    
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
    function next(src,index,x,y,width,height){
        ctx.scale(2,2)
        var img = new Image();
		img.setAttribute('crossOrigin', 'anonymous');
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
                ctx.fillText('扫码查看',$('.share').width() - 141,$('.share').height() - 44);
                ctx.fillText('小梦想互助',$('.share').width() - 155,$('.share').height() - 25);
                // alert(2)
                var canvas = document.getElementById('canvas');
                
                var url1 = canvas.toDataURL('image/png');
                // alert(1)
                var tImage = new Image();
                tImage.src = url1;
                $('#canvas').remove();
                tImage.width = $('.share').width();
                tImage.height = $('.share').height();
                $('.share').html(tImage);
            }
            
        }
    }
	//alert(canvas.toDataURL);
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
    // function canvas2image(){
        
    //     // var imgs = new Image();
    // //    imgs.src = canvas.toDataURL('image/png');
    // //    imgs.width = $('.share').width();
    // //     imgs.height = $('.share').height();
    //     // var imgs =new Image();
    //     // imgs.src = canvas.toDataURL('image/jpg',1);
    //     // var url1 = canvas.toDataURL('image/jpg',1)
    //     // return canvas;
    // }
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
		

})