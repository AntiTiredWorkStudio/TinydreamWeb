<template>
    <div class="screen">
        <div class="warp">
            <van-col span="12">
                <van-icon :name="info.headicon" class="headicon"></van-icon>
                <span class="nickname">{{info.nickname}}</span>
            </van-col>
            <van-col span="12" style="text-align:right;font-size:0.26rem">
                {{info.message}}
            </van-col>
        </div>
    </div>
</template>

<script>
export default {
    name:'screen',
    data () {
        return {
            buyinfo:'',//总订单,
            info:'',//单人购买信息
        }
    },
    props:{
        orders:{
            type:[Array,Object],
            default:function(){
                return []
            }
        }
    },
    created(){
        this.check();
    },
    methods:{
        interval(){
            var self = this;
            var info = self.buyinfo.shift()
            var dt = new Date().getTime() / 1000;
            var time = DescriptionTime(dt - parseInt(info.ptime))
            if(info.ptype == "STANDARD"){
                var type = '小梦想';
            }else if(info.ptype == "TRADE"){
                var type = '小生意';
            }
            info.message = time + '前购买了' + info.dcount + '份' + type;
            self.buyinfo.push(info);
            self.info = info;
            setInterval(function(){
                if(self.buyinfo != ''){
                    var info = self.buyinfo.shift()
                    var dt = new Date().getTime() / 1000;
                    var times = parseInt(dt) - parseInt(info.ptime)
                    var time = DescriptionTime(times)
                    console.log(times,time)
                    if(info.ptype == "STANDARD"){
                        var type = '小梦想';
                    }else if(info.ptype == "TRADE"){
                        var type = '小生意';
                    }
                    info.message = time + '前购买了' + info.dcount + '份' + type;
                    self.buyinfo.push(info);
                    self.info = info;
                } 
            },3000)
        },
        check(){
            var self = this;
            var timer = setInterval(function(){
                if(self.buyinfo != ''){
                    self.interval();
                    clearInterval(timer);
                }
            },20)
        }
    },
    watch:{
        orders(data){
            this.buyinfo = data;
        }
    }
}
</script>

<style lang="less" scoped>
    .screen{
        overflow: hidden;
        width: 6.8rem;
        margin: 0 auto;
        height: 0.68rem;
        line-height: 0.68rem;
        border-radius: 0.10rem;
        margin-bottom: 0.20rem;
        box-shadow: 0.02rem 0px 0.1rem 0.02rem rgba(0, 54, 208, .1), -0.02rem 0 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1), 0 -0.02rem 0.1rem 0.02rem rgba(0, 54, 208, .1);
        background: #fff;
        .warp{
            width: 6.4rem;
            margin: 0 auto;
            overflow: hidden;
            line-height: 0.68rem;
            .headicon{
                font-size: 0.48rem;
                border-radius: 50%;
                margin: 0.1rem 0.1rem 0 0;
                img{
                    width: 0.48rem;
                    height:0.48rem;
                    border-radius: 50%;
                }
            }
            .nickname{
                font-size: 0.26rem;
                vertical-align: text-bottom;
            }
        }
    }
</style>
