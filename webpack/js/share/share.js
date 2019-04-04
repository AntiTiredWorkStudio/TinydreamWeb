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
        did:'DR1000000000',
        pid:'20190401'
    },
    created(){
        Options.TestServer = true;
        var randomNum = Math.floor(Math.random()*this.imgArr.length);
        var img = this.imgArr[randomNum];//随机背景
        var headicon = Options.GetUserInfo().headimgurl;//微信头像
        this.newImgArr.push(img,headicon,'http://tdream.antit.top/LongPress2ShareQR.jpg');
        console.log(img,this.newImgArr)
        // 获取 canvas
        var canvas = document.getElementById('canvas');
        // 获取图形上下文
        var ctx = canvas.getContext('2d');
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
        var ratio = (window.devicePixelRatio || 1) / backingStore;
        console.log(ratio);
        // 物理像素比
        canvas.width = $(window).width() * ratio;
        canvas.height = $(window).height() * ratio;


        var x1 = $(window).width() * ratio - 75 * ratio;
        var y = $(window).height() * ratio - 25 * ratio;
        var y2 = $(window).height() * ratio - 85 * ratio;
        // 进行绘制下一张图片
        this.next(this.newImgArr,0,0,0,$(window).width() * ratio,$(window).height() * ratio,canvas,ctx);
    },
    methods:{
        // 绘制图片
        next(src,index,x,y,width,height,ctx){
            try{
                var img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');//允许图片跨域
                img.src = src[index];
            }catch(err){

            }
            img.onload = function(){
                if(index != 2){
                    ctx.drawImage(img,x,y,width,height);
                    // 绘制下一张
                    console.log(this);
                }
            }
        }
    }
})