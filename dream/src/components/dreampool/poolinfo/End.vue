<template>
    <div class="end">
        <div class="main">
            <p class="title">{{pool == '' ? '' : pool.ptitle}}（已结束）</p>
            <div class="info">
                <div class="info_main">
                    <van-col span="16">
                        <p class="tip">互助完成金额</p>
                        <p class="bill">{{pool == '' ? "" : pool.realBill + pool.realUnit}}</p>
                        <p class="lid">中奖者编号 <span style="color:#00d094">{{lid}}</span></p>
                    </van-col>
                    <van-col span="8" style="text-align:right">
                        <p class="price">价格 {{pool == '' ? '' : pool.rubillValue + pool.rubillUnit}}</p>
                        <p class="look" @click="look(pool.pid)">中奖计算步骤<van-icon name="arrow"></van-icon></p>
                    </van-col>
                </div>
            </div>
        </div>
        <van-popup v-model="isshow" class="award" position="bottom">
            <p class="title">本期中奖计算步骤(开奖福彩期号:{{award == '' ? '' : award.expect}}期)</p>
            <p class="step1 step">{{"[("+award.expect+"+"+award.code+"+"+award.pid+")/ "+award.pcount+"]取余数 +10000000"}}</p>
            <p class="step2 step">{{"=("+(parseInt(award.expect)+ parseInt(award.code)+ parseInt(award.pid))+" / "+award.pcount+") 取余数 +10000000"}}</p>
            <p class="step3 step">{{"="+((parseInt(award.expect)+ parseInt(award.code)+ parseInt(award.pid)) % award.pcount)+"+10000000（"+((parseInt(award.expect)+ parseInt(award.code)+ parseInt(award.pid)) % award.pcount)+"为余数）"}}</p>
            <p class="step4 step">得出幸运者编号为：{{award.pid+"-"+((parseInt(award.expect)+ parseInt(award.code)+ parseInt(award.pid)) % award.pcount + 10000000)}}</p>
        </van-popup>
    </div>
</template>

<script>
import Tab from '@/components/dreampool/poolinfo/tab/Tab'
export default {
    name:'end',
    data () {
        return {
            pool:'',
            lid:'',
            award:'',
            isshow:false
        }
    },
    components:{
        Tab
    },
    created(){
        this.pool = JSON.parse(GetStorage('pinfo'));
        this.Lid(this)
    },
    methods:{
        Lid(app){
            TD_Request('aw','lfromp',{pid:app.pool.pid},function(code,data){
                console.log(data)
                app.lid = data.lid
            },function(code,data){
                console.log(data);
            })
        },
        look(pid){
            this.awardInfo(this,pid)
        },
        awardInfo(app,pid){
            TD_Request('aw','calc',{pid:pid},function(code,data){
                console.log(data);
                app.award = data.awardInfo;
                app.isshow = true;
            },function(code,data){
                console.log(data)
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .end{
        width: 100%;
        height:100%;
        background: #fff;
        .main{
            width: 6.9rem;
            margin: 0 auto;
            .title{
                padding-top: 0.40rem;
                font-size: 0.32rem;
                color: #4c4c4c;
                margin-bottom: 0.30rem;
            }
            .info{
                width: 100%;
                min-height: 2.35rem;
                box-shadow: 0.02rem 0rem 0.1rem 0.02rem rgba(0, 54, 208, .1), -0.02rem 0 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 -0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1);
                border-radius: 0.10rem;
                .info_main{
                    width: 6.30rem;
                    margin: 0 auto;
                    padding-top: 0.40rem;
                    /* overflow: hidden; */
                    height: 3.50rem;
                    position: relative;
                    p{
                        font-size: 0.28rem;
                        color: #808080;
                    }
                    .bill{
                        color: #ffc057;
                        font-size: 0.92rem;
                        margin-bottom: 0.3rem;
                        margin-top: 0.2rem;
                    }
                    .price{
                        margin-bottom: 0.4rem;
                    }
                    .look{
                        width: 2.34rem;
                        height: 0.78rem;
                        background: #00d094;
                        border-top-left-radius: 0.39rem;
                        border-bottom-left-radius: 0.39rem;
                        position: relative;
                        left: 0.05rem;
                        line-height: 0.78rem;
                        vertical-align: middle;
                        color: #fff;
                        text-align: center;
                    }
                }
            }
        }
        .award{
            width: 100%;
            .title{
                font-size: 0.32rem;
                margin-bottom: 0.3rem;
                padding-top: 0.3rem;
                margin-left: 0.3rem;
            }
            .step{
                font-size: 0.27rem;
                line-height: 0.5rem;
                color: #808080;
                margin-left: 0.3rem;
            }
        }
    }
</style>
