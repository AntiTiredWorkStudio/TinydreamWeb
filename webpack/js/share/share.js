var uid = Options.GetUserInfo().openid;

var share = new Vue({
    el:'#share',
    data:{
        imgArr:['https://tdream.antit.top/LongPress2Share01.jpg',
        'https://tdream.antit.top/LongPress2Share02.jpg',
        'https://tdream.antit.top/LongPress2Share03.jpg',
        'https://tdream.antit.top/LongPress2Share04.jpg',
        'https://tdream.antit.top/LongPress2Share05.jpg',
        'https://tdream.antit.top/LongPress2Share06.jpg',
        'https://tdream.antit.top/LongPress2Share07.jpg',
        'https://tdream.antit.top/LongPress2Share08.jpg',
        'https://tdream.antit.top/LongPress2Share09.jpg',
        'https://tdream.antit.top/LongPress2Share10.jpg',
        'https://tdream.antit.top/LongPress2Share11.jpg',
        'https://tdream.antit.top/LongPress2Share12.jpg',],
        newImgArr:[],//新图片数组
        num:0,//图片下标
        did:'',
        pid:'',
        x1:'',
        y:'',
        y2:'',
        ratio:'',
        dream:'',
        year:'',
        dreamType:'',
    },
    created(){if(!ExistStorage('info')){
        $('body').html('')
        window.location.href = '../../index.html?time='+new Date().getTime();
    }},
    mounted(){
        Options.TestServer = true;
        this.year = new Date().getFullYear(); 
        this.did = JSON.parse(GetStorage('info')).did;
        this.pid = JSON.parse(GetStorage('info')).pid;
        if($_GET.type == 'DREAM'){
            $('title').html('购买成功-小梦想互助')
            this.dreamType = '小梦想'
        }else if($_GET.type == 'TRADE'){
            $('title').html('购买成功-小生意互助')
            this.dreamType = '小生意'
        }
        // 获取 canvas
        var canvas = document.getElementById('canvas');
        // 获取图形上下文
        var ctx = canvas.getContext('2d');
        console.log(ctx);
        console.log($(window).width(),$(window).height())
        // canvas展示宽高
        $(canvas).css({
            width:$(window).width(),
            height:$(window).height()
        });
        // 获取像素比
        var backingStore = ctx.backingStorePixelRatio ||
                    ctx.webkitBackingStorePixelRatio ||
                    ctx.mozBackingStorePixelRatio ||
                    ctx.msBackingStorePixelRatio ||
                    ctx.oBackingStorePixelRatio ||
                    ctx.backingStorePixelRatio || 1;
        this.ratio = (window.devicePixelRatio || 1) / backingStore;
        console.log(this.ratio);
        // 物理像素比
        canvas.width = $(window).width() * this.ratio;
        canvas.height = $(window).height() * this.ratio;


        this.x1 = $(window).width() * this.ratio - 75 * this.ratio;
        this.y = $(window).height() * this.ratio - 25 * this.ratio;
        this.y2 = $(window).height() * this.ratio - 85 * this.ratio;
        this.headicon(this,ctx)
    },
    methods:{
        // 绘制图片
        next(src,index,x,y,width,height,ctx,self){
            var img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');//允许图片跨域
            img.src = src[index];
            img.onload = function(){
                self.$toast.clear()
                if(index != 2){
                    self.$toast.clear()
                    ctx.drawImage(img,x,y,width,height);
                    console.log(img,x,y,width,height)
                    // 绘制下一张
                    self.next(self.newImgArr,index+1,15 * self.ratio,40 * self.ratio,50 * self.ratio,50 * self.ratio,ctx,self)

                }else{
                    self.$toast.clear()
                    x = self.x1;
					y = self.y2;
					width = 60 * self.ratio;
                    height = 60 * self.ratio;
                    ctx.drawImage(img,x,y,width,height);
                    ctx.globalCompositeOperation = 'source-over'
					ctx.fillStyle = '#fff';
                    var font = 15 * self.ratio;
                    ctx.font = font + 'px 微软雅黑';
                    if(Options.GetUserInfo().nickname.length > 7){
                        var name = Options.GetUserInfo().nickname.substring(0,7)+'...';
                    }else{
                        var name = Options.GetUserInfo().nickname;
                    }
                    ctx.fillText(name + ' #'+self.year+self.dreamType+'#',75 * self.ratio,56 * self.ratio);
					if(self.dream.length > 6){
						var dream = self.dream.substring(0,6)+"...";
					}else{
						var dream = self.dream;
                    }
                    var font = 19 * self.ratio;
					ctx.font = font + 'px 微软雅黑'
					ctx.fillText(dream+'(已成功参与互助)',75 * self.ratio,88 * self.ratio);
					var font = 14 * self.ratio;
					ctx.font = font + 'px 微软雅黑';
					ctx.fillText('扫码关注',$(window).width() * self.ratio - 141 * self.ratio,$(window).height() * self.ratio - 44 * self.ratio);
					ctx.fillText('追梦行动派',$(window).width() * self.ratio - 155 * self.ratio,$(window).height() * self.ratio - 25 * self.ratio);
					var canvas = document.getElementById('canvas');
					$('.share').css({'zoom':'1','width':$(window).width(),height:$(window).height()})
                    var url1 = canvas.toDataURL('image/png');
                    var tImage = new Image();
                    tImage.src = url1;
                    $('.share').html(tImage);
                    $('img').css('width','100%');
                    setTimeout(function(){
                        self.$toast.clear();
                        self.$toast.success('绘制完成')
                    },1000)
                }
            }
        },
        // 获取梦想
        getDream(self,ctx){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'梦想获取中...'
            })
            TD_Request('dr','gdream',{
                uid:uid,
                did:self.did,
            },function(code,data){
                // 进行绘制下一张图片
                self.$toast.clear();
                self.dream = data.dream.title;
                self.$toast.loading({
                    duration:0,
                    forbidClick:true,
                    loadingType:'circular',
                    message:'海报绘制中...'
                })
                self.next(self.newImgArr,0,0,0,$(window).width() * self.ratio,$(window).height() * self.ratio,ctx,self);
            },function(code,data){
                console.log(data);
                self.$toast.clear();
            })
        },
        // 获取微信头像
        headicon(self,ctx){
            $.post('http://tinydream.antit.top/TinydreamWeb/php/url.php',{headimgurl:Options.GetUserInfo().headimgurl},function(data){
                var randomNum = Math.floor(Math.random()*self.imgArr.length);
                var img = self.imgArr[randomNum];
                console.log(data);
                var headicon = data;
                self.newImgArr.push(img,headicon,'http://tdream.antit.top/LongPress2ShareQR.jpg');
                console.log(img,self.newImgArr,Options.GetUserInfo().headimgurl)
                self.getDream(self,ctx)
            })
        },
        // 查看详情
        lookInfo(){
            TD_Request('dp','pinfo',{
                pid:pid
            },function(code,data){
                var obj = DreamPoolAnalysis(data.pool)
                localStorage.setItem('poolInfo',JSON.stringify(obj))
                if(obj.state == 'RUNNING'){
                    window.location.href = "../../html/helpInfo.html?time"+new Date().getTime()+'&type='+$_GET.type;
                }else{
                    window.location.href = "../../html/end.html?time"+new Date().getTime()+'&type='+$_GET.type;
                }    
            },function(code,data){
                console.log(data)
            })
        }
    }
})