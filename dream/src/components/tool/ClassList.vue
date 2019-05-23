<template>
    <div class="classlist">
        <div class="list" @click="tip"  style="background:url(https://tdream.antit.top/190516ydjs.png) no-repeat center center / 7.38rem 2.28rem">
            运动健身
        </div>
        <div class="list" @click="tip" style="background:url(https://tdream.antit.top/190516yyA.png) no-repeat center center / 7.38rem 2.28rem">
            英语
        </div>
        <div class="list" @click="tip" style="background:url(https://tdream.antit.top/190516ys.png) no-repeat center center / 7.38rem 2.28rem">
            艺术
        </div>
        <div class="list" @click="tip" style="background:url(https://tdream.antit.top/190516cyzc.png) no-repeat center center / 7.38rem 2.28rem">
            创业/职场
        </div>
        <div class="list" @click="tip" style="background:url(https://tdream.antit.top/190516shA.png) no-repeat center center / 7.38rem 2.28rem">
            生活
        </div>
        <van-popup v-model="isshow" class="pop">
            <div class="mask">
                <div class="tip">
                    <p>参与行动合约后</p>
                    <p>可领取</p>
                </div>
                <p class="bottom">
                    <van-button class="btn" round @click="close">我知道了</van-button>
                </p>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name:'classlist',
    data () {
        return {
            isshow:false
        }
    },
    methods:{
        tip(){
            this.isshow = true;
        },
        close(){
            this.isshow = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .classlist{
        margin-top: 0.2rem;
    }
    .list{
        width: 6.9rem;
        margin: 0 auto;
        height: 2rem;
        text-indent: -9999em;
    }
    .pop{
        background: rgba(0,0,0,0);
        .mask{
            width: 4rem;
            height: 4.75rem;
            background: url(https://tdream.antit.top/190516xf.png) no-repeat center center / 4rem 4.75rem;
            position: relative;
            .tip{
                position: absolute;
                top: 2.28rem;
                margin-bottom: 0.4rem;
                width: 100%;
                p{
                    text-align: center;
                    font-size: 0.32rem;
                }
            }
            p.bottom{
                position: absolute;
                bottom: 0.5rem;
                text-align: center;
                width: 100%;
                .btn{
                    color: #fff;
                    background: #00d094;
                    border: none;
                }
            }
        }
    }
</style>
