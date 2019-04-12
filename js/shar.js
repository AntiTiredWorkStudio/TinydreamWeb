WebApp.JSAPI.Init();
$(function () {
    //alert('Loading:');
    var userInfo = Options.GetUserInfo();
    //  
    // alert(1)
    Loading();
    var img = [];
    var num = 0;
    var url = localStorage.getItem('img');
    localStorage.removeItem('img');
   // alert('Loading:01');
    var tdid = JSON.parse(localStorage.getItem('info')).did;
    var pid = JSON.parse(localStorage.getItem('info')).pid;
    //alert('Loading:02');
	
	var condition = typeof url == 'undefined' || url == '' || url == null || typeof localStorage.getItem('info') == 'undefined' || localStorage.getItem('info') == null;
	
	
    //alert('Loading:'+JSON.stringify(Options));
	
    if(typeof url == 'undefined' || url == '' || url == null || typeof localStorage.getItem('info') == 'undefined' || localStorage.getItem('info') == null){
        window.location.href = '../index.html?time='+new Date().getTime();
    }else{
        $.post('../php/url.php',{headimgurl:userInfo.headimgurl},function(data){
			//alert('Loading url.php:'+JSON.stringify(data));
            console.log(data)
            var headicon = data;
			//alert('Loading openid:'+userInfo.openid);
			//alert('Loading dream:'+tdid);
            TD_Request('dr','gdream',{
                uid:userInfo.openid,
                did:tdid
            },function(code,data){
                console.log(data);
                // console.log(data)
                // FinishLoading();
                // Loading();
				//alert('Loading gdream:'+JSON.stringify(data));
                var canvas = document.getElementById('canvas');
                $(canvas).css({
                    width:$(window).width(),
                    height:$(window).height()
                })
                // $('body').css('background','red')
        
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
                // alert('ratio:'+ratio)
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
                    url,headicon,'http://tinydream.ivkcld.cn/LongPress2ShareQR.jpg'
                ];
                next(imgArr,0,0,0,$(window).width() * ratio,$(window).height() * ratio,canvas); 
                // alert('imgArr:'+JSON.stringify(imgArr))
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
					//alert("next:"+index);
					try{
						var img = new Image();
						img.setAttribute('crossOrigin', 'anonymous');
						img.onerror = function(){
							//alert("image load error");
						}
						img.src = src[index];
						//alert(img.src);
					}catch(err){
						//alert(JSON.stringify(err))
					}
                    img.onload = function(){
                        console.log(img.src)
						//alert('index1:'+index)
                         //alert('index_1:'+index)
							if(index != 2){
								// alert('index2:'+index)
								// // ctx.scale(2,2)
								ctx.drawImage(img,x,y,width,height)
								// index = 1;
								// alert(index)
								next(imgArr,index+1,15 * ratio,40 * ratio,50 * ratio,50 * ratio) 
								
								// alert('F:'+JSON.stringify(r))
							}else{
								// index = 2;
								// alert(index);
								// alert('index==2')
								// alert('index3:'+index)
								// ctx.scale(2,2)
								x = x1;
								y = y2;
								width = 60 * ratio;
								height = 60 * ratio;
								// next(imgArr,,x,y,width,height)
								ctx.drawImage(img,x,y,width,height);
								
								ctx.globalCompositeOperation = 'source-over'
								ctx.fillStyle = '#fff';
								var font = 15 * ratio;
								ctx.font = font + 'px 微软雅黑';
								if(userInfo.nickname.length > 7){
									var name = userInfo.nickname.substring(0,7)+'...';
								}else{
									var name = userInfo.nickname;
								}
								ctx.fillText(name + ' #2019小梦想#',75 * ratio,56 * ratio);
								if(data.dream.title.length > 6){
									var dream = data.dream.title.substring(0,6)+"...";
								}else{
									var dream = data.dream.title;
								}
								var font = 19 * ratio;
								ctx.font = font + 'px 微软雅黑'
								ctx.fillText(dream+'(已成功参与互助)',75 * ratio,88 * ratio);
								var font = 14 * ratio;
								ctx.font = font + 'px 微软雅黑';
								ctx.fillText('扫码关注',$(window).width() * ratio - 141 * ratio,$(window).height() * ratio - 44 * ratio);
								ctx.fillText('小梦想互助',$(window).width() * ratio - 155 * ratio,$(window).height() * ratio - 25 * ratio);
								// alert(2)
								var canvas = document.getElementById('canvas');
								$('.share').css({'zoom':'1','width':$(window).width(),height:$(window).height()})
								var url1 = canvas.toDataURL('image/png');
								// alert('imgUrl:'+url1)
								// alert(1)
								var tImage = new Image();
								tImage.src = url1;
								// tImage.width = $(window).width() * ratio;
                                // tImage.height = $(window).height() * ratio;
                                // tImage.style.height = $(window).height()
                                $('.share').html(tImage);
                                $('img').css('width','100%');
                                setTimeout(function(){
                                    FinishLoading();
                                },1000)
                                // Loading();
                                // alert('window-width:'+$(window).width())
                                // alert('window-height:'+$(window).height())
                                // alert('body-width:'+$('body').width())
                                // alert('body-height:'+$('body').height())
                                // alert('share-width:'+$('.share').width())
                                // alert('share-width:'+$('.share').height())
                                // alert('img-width:'+$('img').width())
                                // alert('img-width:'+$('img').height())
							}
        
                    }
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
                // FinishLoading();
            },function(code,data){
                console.log(data)
				alert('Loading :'+JSON.stringify(data));
            })
        })    
    
    
    //var url = 'https://tdream.antit.top/LongPress2Share10.jpg';//测试用
    $('.btn').click(function () {
        TD_Request('dp','pinfo',{
            pid:pid
        },function(code,data){
            var obj = DreamPoolAnalysis(data.pool)
            console.log(obj)
            localStorage.setItem('poolInfo',JSON.stringify(obj))
            // if(userInfo.openid == 'oSORf5hkHfOy3Yo4FQIPdbHKQljM') {
            //     return;
            // }
            if(obj.state == 'RUNNING'){
                window.location.href = "../html/helpInfo.html?time"+new Date().getTime();
            }else{
                window.location.href = "../html/end.html?time"+new Date().getTime();
            }    
        },function(code,data){
            console.log(data)
        })
    })
    WebApp.JSAPI.OnShareFriend = function(res){
        window.location.href = '../index.html?time='+new Date().getTime()
    }
}

    //alert('Loading:final');
})