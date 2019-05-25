<template>
    <div class="trade">
        <div class="warp">
            <div id="container"></div>
            <div class="footer" style="margin-bottom:0.2rem;margin-top: 0.2rem">
                <div class="info" style="width:95%;margin:0 auto;">
                    <p class="title">其他：</p>
                    <div class="infotxt" style="font-size:0.24rem;">
                        <span style="display:inline-block;margin-bottom: 0.1rem">如您还有疑问，可以添加小梦想客服微信详细咨询！</span> 
                        <img src="https://tdream.antit.top/image/qrcode.jpg" alt="" width="20%" height="auto" style="display:block;position:relative;left:50%;transform:translateX(-50%)">
                        <span style="display:inline-block;width:100%;text-align:center">长按识别二维码</span>
                    </div>
		        </div>
		    </div>
            <div style="padding-top:1.2rem"></div>
            <div class="fix" style="width:100%;position:fixed;bottom:0;border-top:1px solid #eee;background:#fff;height:0.78rem;">
                <button @click="buy" style="width:100%;height:0.78rem;font-size:0.28rem;color:#fff;background:#00d094;text-align:center;line-height:0.78rem;top:50%;position: relative;transform: translateY(-50%)" id="btn">立即参与互助</button>
            </div>
        </div>
    </div>
</template>

<script>
import mainpool from '@/components/index/mainpool/Mainpool'
export default {
    name:'trade',
    data(){
        return {
            trade:{}
        }
    },
    created(){
        this.trade.pid = this.$route.params.pid
        WebApp.View.BuildLayout(this.$route.params.id,function(result,data){
			if(result){
				$("#container").html(data);
			}else{
				$("#container").html(data.context);
			}
		});
    },
    methods:{
        buy(){
            mainpool.methods.Buy(this,'trade')
        }
    }
}
</script>

<style lang="less">
    .trade{
        width: 100%;
        height:100%;
        background: #fff;
    }
    .warp .banner{
        width: 95%;
        margin: 0.2rem auto;
        height: 3.86rem;
    }
    .warp .content {
        width: 95%;
        margin: 0 auto;
    }
    .warp .content .info{
        margin: 0.2rem 0 0;
    }
    .warp .content .infotxt{
        width: 100%;
        font-size: 0.24rem;
    }
    .warp .content .info .title{
        font-size: 0.32rem;
        font-weight: bolder;
    }
    .warp .content .infotxt .f_title{
        font-size: 0.24rem;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
    }
    .warp .content .infotxt .ctx{
        width: 100%;
        text-indent: 2em;
        color: #b2b2b2;
        margin-bottom: 0.1rem;
    }
    .warp .content .infotxt img{
        width: 100%;
        height: auto;
    }
</style>
