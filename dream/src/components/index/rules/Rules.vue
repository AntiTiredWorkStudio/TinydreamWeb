<template>
    <div class="rules">
        <div class="title">
            <div class="line left"></div>
            <div class="circle left"></div>
            <p>小梦想互助规则</p>
            <div class="circle right"></div>
            <div class="line right"></div>
        </div>
        <div class="steps">
            <van-col span="6">
                <van-icon name="http://tdream.antit.top/image/active_index1.png"></van-icon>
                <p>多人互助</p>
            </van-col>
            <van-col span="6">
                <van-icon name="http://tdream.antit.top/image/avtive_index2.png"></van-icon>
                <p>1人幸运</p>
            </van-col>
            <van-col span="6">
                <van-icon name="http://tdream.antit.top/image/avtive_index3.png"></van-icon>
                <p>启动梦想</p>
            </van-col>
            <van-col span="6">
                <van-icon name="http://tdream.antit.top/image/active_index4.png"></van-icon>
                <p>梦想报道</p>
            </van-col>
        </div>
        <div class="info">
            <div class="rule">
                <p>
                    <van-icon name="http://tdream.antit.top/image/index1.png"></van-icon>
                    <span>多人互助 — — 参与互助每个人支付少量互助金</span>
                </p>
                <p>
                    <van-icon name="http://tdream.antit.top/image/index2.png"></van-icon>
                    <span>1人幸运 — — 公平随机产生1名幸运者</span>
                </p>
                <p>
                    <van-icon name="http://tdream.antit.top/image/index3.png"></van-icon>
                    <span>启动梦想 — — 幸运者得到累计互助金启动梦想</span>
                </p>
                <p>
                    <van-icon name="http://tdream.antit.top/image/index4.png"></van-icon>
                    <span>梦想报道 — — 梦想执行跟踪报道</span>
                </p>
                <p class="more">
                    <span>了解更多</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'rules'
}
</script>

<style lang="less" scoped>
    .rules{
        width: 6.3rem;
        margin: 0 auto;
        margin-top: 0.4rem;
        position: relative;
        .title{
            width: 100%;
            font-size: 0.32rem;
            text-align: center;
            overflow: hidden;
            position: relative;
            .line{
                width: 1.76rem;
                height: 0.02rem;
                position: relative;
                top: 0.22rem;
            }
            .line.left{
                background: linear-gradient(to right, white , #00d094);
            }
            .circle{
                width: 0.1rem;
                height: 0.1rem;
                background-color: #00d094;
                border-radius: 50%;
                position: absolute;
            }
            .circle.left{
                left: 1.76rem;
                top: 0.18rem;
            }
            p{
                float: left;
                text-align: center;
                margin-left: 2rem;
                color: #00d094;
            }
            .circle.right{
                right: 1.76rem;
                top: 0.18rem;
            }
            .line.right{
                float: right;
                background: linear-gradient(to right, #00d094 , white);
                top: 0.2rem;
            }
        }
        .steps{
            overflow: hidden;
            margin-top: 0.6rem;
            .van-icon{
                font-size: 0.38rem;
            }
            .van-col{
                text-align: center;
            }
            p{
                margin-top: 0.20rem;
                text-align: center;
                font-size: 0.26rem;
                color: #595959;
            }
        }
        .info{
            width: 100%;
            height: 3.82rem;
            background: #fafbfc;
            border-radius:0.2rem;
            margin-top: 0.3rem;
            .rule{
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
                width: 5.9rem;
                margin: 0 auto; 
                p{
                    margin-bottom: 0.24rem;
                    .van-icon{
                        font-size: 0.36rem;
                        margin-right: 0.1rem;
                        vertical-align: middle;
                    }
                    span{
                        font-size: 0.26rem;
                        color: #999;
                        vertical-align: middle;
                    }
                }
                .more{
                    margin-top: 0.38rem;
                    padding-bottom: 0.42rem;
                    text-align: center;
                    span{
                        font-size: 0.26rem;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
