<template>
    <div class="cach">
        <div class="top">
            <img src="http://tdream.antit.top/image/titleLogo.png" alt="">
        </div>
        <div class="main">
            <div class="main_qr">
                <div class="title">联系客服</div>
                <p class="tip">长按二维码添加客服微信</p>
                <div class="qrcode">
                    <div class="main_qrcode">
                        <img src="https://tdream.antit.top/image/qrcode.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
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
    name:'cach'
}
</script>

<style lang="less" scoped>
    .cach{
        width: 100%;
        .top{
            width: 2.06rem;
            height: 2.06rem;
            border-radius: 50%;
            margin: 0.50rem auto 0;
            background-color: #fff;
            position: relative;
            z-index: 5;
            img{
                width: 1.98rem;
                height: 1.98rem;
                border-radius: 50%;
                position: absolute;
                top: 0.04rem;
                left: 0.04rem;
            }
        }
        .main{
            width: 6.80rem;
            border-radius: 0.20rem;
            background-color: #fff;
            position: absolute;
            top: 1.53rem;
            left: 50%;
            transform: translateX(-50%);
            .main_qr{
                width: 100%;
                margin-top: 1.28rem;
                text-align: center;
                padding-bottom: 0.38rem;
                .title{
                    width: 2.60rem;
                    margin: 0 auto;
                    height: 0.62rem;
                    background-color: #00d6a7;
                    color: #fff;
                    border-radius: 0.31rem;
                    font-size: 0.36rem;
                    line-height: 0.62rem;
                }
                .tip{
                    font-size: 0.28rem;
                    padding-top: 0.52rem;
                    margin-bottom: 0.60rem;
                }
                .qrcode{
                    width: 4.13rem;
                    height: 4.13rem;
                    margin: 0 auto;
                    background: url(http://tdream.antit.top/image/frame.png) no-repeat;
                    background-size: 4.13rem 4.13rem;
                    .main_qrcode{
                        width: 3.33rem;
                        height: 3.33rem;
                        position: relative;
                        top: 0.40rem;
                        left: 0.40rem;
                        img{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 3.33rem;
                            height: 3.33rem;
                        }
                    }
                }
            }
        }
    }
</style>
