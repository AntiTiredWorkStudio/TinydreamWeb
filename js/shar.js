$(function () {
    var img = [];
    var num = 0;
    var url = localStorage.getItem('img');
    localStorage.removeItem('img');
    var did = localStorage.getItem('did');
    localStorage.removeItem('did');
    var userInfo = Options.GetUserInfo();
    TD_Request('dr','gdream',{
        uid:userInfo.openid,
        did:did
    },function(code,data){
        console.log(data)
        var canvas = document.getElementById('canvas');
        $(canvas).css({
            width:$(window).width(),
            height:$(window).height()
        })
        $('body').css('background','red')

        var ctx = canvas.getContext('2d');
        // 获取像素比
        // var devicePixelRatio = window.devicePixelRatio || 1; 
        // 像素比
        var backingStore = ctx.backingStorePixelRatio ||
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
        var ratio = (window.devicePixelRatio || 1) / backingStore;
        console.log(ratio)
        // console.log($(window).width())
        canvas.width = $(window).width() * ratio;
        canvas.height = $(window).height() * ratio;

        // canvas.width = $('.share').width();
        // canvas.height = $('.share').height();

        // canvas.width = canvas.width * ratio;
        // canvas.height = canvas.height * ratio;

        // console.log(canvas.width,width.height);
        var x1 = $(window).width() * ratio - 75 * ratio;
        var y = $(window).height() * ratio - 25 * ratio;
        var y2 = $(window).height() * ratio - 85 * ratio;
	    /*var userInfo = {
	    	headimgurl:'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELEgjjRsUFibrHsbpUicsCBkoU3eDTVuIJfkX2ibWpK2YT7ZsVsiaKobhD9bgOTkUl6IeYoo3xVPY2wRA/132',
	    	nickname:"Michael Kong"
	    };//测试用*/
        var imgArr = [
            url,userInfo.headimgurl,'http://tdream.antit.top/LongPress2ShareQR.jpg'
        ];
        next(imgArr,0,0,0,$(window).width() * ratio,$(window).height() * ratio,canvas); 

        // var l = canvas2image(canvas).then(function(res){
        //     alert(res);
        //     // $(window).html('<img class="bgi" src='+res+' />');
        //     $(window).html(res)
        //     console.log(res)
        // });
        // console.log(l)

        // $('.bgi').css({
        //     width:$(window).width(),
        //     height:$(window).height()
        // })
        // alert(1);
        // var total = img.length;
        function next(src,index,x,y,width,height){
            var img = new Image();
	    	img.setAttribute('crossOrigin', 'anonymous');
            img.src = src[index];
            img.onload = function(){
                console.log(img.src)
                if(index != 2){
                    // ctx.scale(2,2)
                    ctx.drawImage(img,x,y,width,height)
                    next(imgArr,index+1,15 * ratio,40 * ratio,50 * ratio,50 * ratio) 
                }else{
                    // ctx.scale(2,2)
                    x = x1;
                    y = y2;
                    width = 60 * ratio;
                    height = 60 * ratio;
                    ctx.drawImage(img,x,y,width,height);
                    ctx.globalCompositeOperation = 'source-over'
                    ctx.fillStyle = '#fff';
                    var font = 15 * ratio;
                    ctx.font = font + 'px 微软雅黑';
                    if(userInfo.nickname.length > 6){
                        var name = userInfo.nickname.substring(0,7)+'...';
                    }else{
                        var name = userInfo.nickname;
                    }
                    ctx.fillText(name + ' #2019小梦想#',75 * ratio,56 * ratio);
                    var dream = '云南鲜花饼店...';
                    var font = 19 * ratio;
                    ctx.font = font + 'px 微软雅黑'
                    ctx.fillText(dream+'(已成功参与互助)',75 * ratio,88 * ratio);
                    var font = 14 * ratio;
                    ctx.font = font + 'px 微软雅黑';
                    ctx.fillText('扫码关注',$(window).width() * ratio - 141 * ratio,$(window).height() * ratio - 44 * ratio);
                    ctx.fillText('小梦想互助',$(window).width() * ratio - 155 * ratio,$(window).height() * ratio - 25 * ratio);
                    // alert(2)
                    var canvas = document.getElementById('canvas');
                    $('.share').css({'zoom':'0.5','width':$(window).width(),height:$(window).height()})
                    var url1 = canvas.toDataURL('image/png');
                    // alert(1)
                    var tImage = new Image();
                    tImage.src = url1;
                    tImage.width = $('body').width();
                    tImage.height = $('body').height();
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
    },function(code,data){
        console.log(data)
    })
	//var url = 'https://tdream.antit.top/LongPress2Share10.jpg';//测试用
})