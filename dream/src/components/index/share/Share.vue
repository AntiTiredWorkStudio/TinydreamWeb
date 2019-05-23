<template>
    <div class="share">
        <div id="share">
            <canvas id="canvas"></canvas>
        </div>
        <p class="tip">长按图片分享</p>
        <div class="btn" @click="look"></div>
    </div>
</template>

<script>
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
export default {
    name:'share',
    data () {
        return {
            img:[
                'https://tdream.antit.top/LongPress2Share01.jpg',
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
                'https://tdream.antit.top/LongPress2Share12.jpg',
            ]
        }
    },
    created(){
        var imgNum = Math.floor(Math.random()*this.img.length);
        // 绘制图片数组
        var imgurl = this.img[imgNum]
        // 将图片缓存至本地
        var app = this;
        $.post('http://tinydream.ivkcld.cn/TinydreamWeb/php/url.php',{headimgurl:JSON.parse(GetStorage('userInfo')).headimgurl},function(data){
            console.log(imgurl,data)
            var headicon = data;
            TD_Request('dr','gdream',{
                uid:app.$store.state.uid,
                did:app.$route.params.did
            },function(code,data){
                console.log(data);
                var obj = data;
                var canvas = document.getElementById('canvas');
                $(canvas).css({
                    width:$(window).width(),
                    height:$(window).height()
                })
                var ctx = canvas.getContext('2d');
                // 像素比
                var backingStore = ctx.backingStorePixelRatio ||
                    ctx.webkitBackingStorePixelRatio ||
                    ctx.mozBackingStorePixelRatio ||
                    ctx.msBackingStorePixelRatio ||
                    ctx.oBackingStorePixelRatio ||
                    ctx.backingStorePixelRatio || 1;
                var ratio = (window.devicePixelRatio || 1) / backingStore;
                console.log(ratio)

                canvas.width = $(window).width() * ratio;
                canvas.height = $(window).height() * ratio;

                var x1 = $(window).width() * ratio - 75 * ratio;
                var y = $(window).height() * ratio - 25 * ratio;
                var y2 = $(window).height() * ratio - 85 * ratio;

                var imgArr = [
                    imgurl,headicon,'http://tdream.antit.top/LongPress2ShareQR.jpg'
                ]

                app.next(obj,app,ctx,imgArr,0,0,0,$(window).width() * ratio,$(window).height() * ratio,ratio)
            })
        })
    },
    methods:{
        next(obj,app,ctx,src,index,x,y,width,height,ratio){
            try{
				var img = new Image();
				img.setAttribute('crossOrigin', 'anonymous');
				img.src = src[index];
			}catch(err){
				
            }
            img.onload = function(){
                if(index != 2){
					ctx.drawImage(img,x,y,width,height)
					app.next(obj,app,ctx,src,index+1,15 * ratio,40 * ratio,50 * ratio,50 * ratio,ratio) 
				}else{
					x = $(window).width() * ratio - 75 * ratio;;
					y = $(window).height() * ratio - 85 * ratio;
					width = 60 * ratio;
                    height = 60 * ratio;
                    ctx.drawImage(img,x,y,width,height);	
					ctx.globalCompositeOperation = 'source-over'
					ctx.fillStyle = '#fff';
					var font = 15 * ratio;
					ctx.font = font + 'px 微软雅黑';
					if(JSON.parse(GetStorage('userInfo')).nickname.length > 7){
						var name = JSON.parse(GetStorage('userInfo')).nickname.substring(0,7)+'...';
					}else{
						var name = JSON.parse(GetStorage('userInfo')).nickname;
                    }
                    var year = new Date().getFullYear();
                    if(app.$route.params.type == 'dream'){
                        var title = '小梦想'
                    }else{
                        var title = '小生意'
                    }
                    ctx.fillText(name + ' #'+ year + title + '#',75 * ratio,56 * ratio);
					if(obj.dream.title.length > 6){
						var dream = obj.dream.title.substring(0,6)+"...";
					}else{
						var dream = obj.dream.title;
                    }
                    var font = 19 * ratio;
					ctx.font = font + 'px 微软雅黑'
					ctx.fillText(dream+'(已成功参与互助)',75 * ratio,88 * ratio);
					var font = 14 * ratio;
					ctx.font = font + 'px 微软雅黑';
					ctx.fillText('扫码关注',$(window).width() * ratio - 141 * ratio,$(window).height() * ratio - 44 * ratio);
                    ctx.fillText('追梦行动派',$(window).width() * ratio - 155 * ratio,$(window).height() * ratio - 25 * ratio);
                    var canvas = document.getElementById('canvas');
                    var url1 = canvas.toDataURL('image/png');
                    var tImage = new Image();
					tImage.src = url1;
                    $('#share').html(tImage);
                    $('img').css('width','100%');
                }
            }
        },
        // 查看详情
        look(){
            var app = this;
            TD_Request('dp','pinfo',{pid:app.$route.params.pid},function(code,data){
                console.log(data)
                // app.$store.commit('poolInfo',DreamPoolAnalysis(data.pool))
                DreamPoolAnalysis(data.pool)
                SaveStorage('pinfo',JSON.stringify(data.pool))
                app.$router.push('/pinfo')
            },function(code,data){
                console.log(data)
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .btn{
        width: 1.64rem;
        height: 0.44rem;
        font-size: 0.26rem;
        color: #fff;
        text-align: center;
        position: absolute;
        bottom: 1rem;
        left:0.3rem;
        border-radius: 0.22rem;
        background: url(https://tdream.antit.top/view_details.png) no-repeat;
        background-size: 1.64rem 0.44rem;
    }
    .tip {
        position: absolute;
        bottom: 0.4rem;
        left: 0.3rem;
        color: #fff;
        font-size: 0.28rem;
        z-index: 6;
    }
</style>
