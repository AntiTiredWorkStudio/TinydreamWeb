<template>
    <div class="action">
        <div class="warp">
            <div class="progress">
                <yd-progressbar :progress="progress1" trail-width="4" trail-color="#ffc057" style="color: #ffc057;font-size:0.6rem">{{progress1 * 100 + '%'}}</yd-progressbar>
            </div>
            <div class="info">
                <van-col span="8">
                    <p class="num">70</p>
                    <p class="tip">距离目标天数</p>
                </van-col>
                <van-col span="8">
                    <p class="num">30</p>
                    <p class="tip">连续打卡天数</p>
                </van-col>
                <van-col span="8">
                    <p class="num">30</p>
                    <p class="tip">已打卡天数</p>
                </van-col>
            </div>
            <div class="btn">
                <van-button round>一键打卡</van-button>
            </div>
        </div>
        <div class="Date">
            <div class="month">
                <van-col span="8" style="text-align:center">
                    <van-icon name="arrow-left"></van-icon>
                </van-col>
                <van-col span="8" style="text-align:center">
                    <p style="font-size:0.36rem">2015.05</p>
                </van-col>
                <van-col span="8" style="text-align:center">
                    <van-icon name="arrow"></van-icon>
                </van-col>
            </div>
            <div class="week">
                <ul class="title">
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                </ul>
                <ul class="day">

                </ul>
            </div>
            <div class="legend">
                <div class="main">
                    <van-col span="12">
                        <span class="bg"></span>
                        <span>已打卡、已转发</span>
                    </van-col>
                    <van-col span="12">
                        <span class="green"></span>
                        <span>已补卡</span>
                    </van-col>
                    <van-col span="12">
                        <span class="org"></span>
                        <span>已打卡、未转发</span>
                    </van-col>
                    <van-col span="12">
                        <span class="grey"></span>
                        <span>未打卡</span>
                    </van-col>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'action',
    data(){
        return {
            progress1:0,//打卡进度
        }
    }
}
</script>

<style lang="less" scoped>
    .warp{
        width: 6.8rem;
        height: 5.6rem;
        background: #fff;
        border-radius: 0.2rem;
        margin: 0 auto 0.3rem;
        padding-top: 0.3rem;
        .progress{
            width: 2.8rem;
            height: 2.8rem;
            margin: 0 auto;
            font-size: 0.6rem;
            margin-bottom: 0.3rem;
        }
        .info{
            overflow: hidden;
            margin-bottom: 0.3rem;
            .van-col{
                text-align: center;
                .num{
                    font-size: 0.36rem;
                }
                .tip{
                    font-size: 0.22rem;
                    color: #989898;
                }
            }
        }
        .btn{
            text-align: center;
            .van-button{
                background: #ffc057;
                color: #fff;
                border: none;
                width: 2.9rem;
            }
        }
    }
    .Date{
        margin: 0.3rem auto 0;
        width: 6.8rem;
        background: #fff;
        overflow: hidden;
        border-radius: 0.2rem;
        .month{
            padding-top: 0.38rem;
            .van-col{
                line-height: 0.5rem;
            }
        }
        .week{
            width: 6.1rem;
            margin: 0 auto;
            text-align: center;
            overflow: hidden;
            ul.title{
                width: 100%;
                margin-top: 0.3rem;
                li{
                    width: 14.28%;
                    text-align: center;
                    font-size: 0.26rem;
                    color: #999;
                    float: left;
                }
            }
            ul.day{
                width: 100%;
                margin-bottom: 0.4rem;
                overflow: hidden;
            }
        }
        .legend{
            width: 100%;
            border-top: 1px solid #eee;
            .main{
                padding-top: 0.3rem;
                width: 80%;
                .van-col{
                    span{
                        font-size: 0.22rem;
                        color:#999;
                        display: inline-block;
                    }
                }
                .bg{
                    width: 0.2rem;
                    height: 0.2rem;
                    background: #00d094;
                    border-radius: 50%;
                    margin-right: 0.1rem;
                    margin-left: 0.3rem;
                }
                .green{
                    width: 0.2rem;
                    height: 0.2rem;
                    background: #00d022;
                    border-radius: 50%;
                    margin-right: 0.1rem;
                }
                .org{
                    width: 0.2rem;
                    height: 0.2rem;
                    background: orange;
                    border-radius: 50%;
                    margin-right: 0.1rem;
                    margin-left: 0.3rem;
                }
                .grey{
                    width: 0.2rem;
                    height: 0.2rem;
                    background: #999;
                    border-radius: 50%;
                    margin-right: 0.1rem;
                }
            }
        }
    }
</style>
