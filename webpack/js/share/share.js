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
        var img = this.imgArr[randomNum];
        console.log(img)
        // 获取 canvas
        var canvas = document.getElementById('canvas');
        // 获取图形上下文
        var ctx = canvas.getContext('2d');
        console.log($(window).width(),$(window).height())
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
        // next(this.newImgArr,0,0,0,$(window).width() * ratio,$(window).height() * ratio,canvas);
    }
})