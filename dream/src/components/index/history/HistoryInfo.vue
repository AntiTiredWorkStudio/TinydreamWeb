<template>
    <div class="historyInfo">
        &#65279;
        <div class="header">
            <img :src="award.headicon">
        </div>
        <p class="nickname">{{award.nickname}}</p>
        <p class="title">{{award.ptitle}}</p>
        <p class="info">
            <van-icon class="icon" name="http://tdream.antit.top/image/flag.png"></van-icon>
            <span>福彩{{award.expect}}期</span>
        </p>
        <div class="dreamInfo">
            <div class="dream_title">{{award.ptype == 'TRADE' ? '生意标题' : '梦 想'}}</div>
            <div class="textarea">{{award.ptype == 'TRADE' ? title : award.dtitle}}</div>
            <div class="dream_title">{{award.ptype == 'TRADE' ? '生意详情' : '梦想详情'}}</div>
            <div class="textarea">
                {{award.ptype == 'TRADE' ? tip : award.content}}<a v-show="award.ptype == 'TRADE' ? true : false" @click="trade(award.pid)">查看详情</a>
            </div>
            <div class="dream_title">{{award.ptype == 'TRADE' ? '收益分配' : '活动照片'}}</div>
            <div class="textarea" v-html="award.imgurl == '' ? '暂无照片' : '<img src='+award.imgurl+' />'" v-show="award.ptype == 'TRADE' ? false : true">
                
            </div>
            <div class="textarea" v-show="award.ptype == 'TRADE' ? true : false">
                <div class="fenpei"></div>
                <div id="main" style="width: 6rem;height:4rem;margin: 0 auto;"></div>
                <div class="lenged">
                    <p class="yellow"></p><span style="margin-right:0.1rem">幸运者</span>
                    <p class="own"></p><span style="margin-right:0.1rem">自己</span>
                    <p class="gray"></p><span>其他互助者</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'historyinfo',
    data () {
        return {
            award:'',//幸运者信息
            title:'',//生意标题
            style:'width: 100%;height: 100%;border-radius: 0.10rem;',
            tip:'',//生意详情
            url:'',//id
        }
    },
    created(){
        WebApp.JSAPI.InitShare({
            title:'追梦行动派',
            desc:"我刚刚参与了一份小梦想，你也一起来吧！",
            link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
            imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
        });
        if(!ExistStorage('award')){
            this.$router.push('/history')
        }else{
            this.award = JSON.parse(GetStorage('award'));
            if(this.award.ptype=="TRADE"){
                this.tradeInfo(this)
            }      
        }
    },
    methods:{
        tradeInfo(app){
            TD_Request('tr','gtp',{pid:app.award.pid},function(code,data){
                console.log(data)
                app.title = data.title;
                app.tip = data.awardTitle;
                app.url = data.url;
                console.log(app.title,app.tip)
                app.distribution(app)
            },function(code,data){
                console.log(data);
                app.title = data.title;
                app.url = data.url;
                app.tip = data.awardTitle;
                console.log(app.title,app.tip)
                app.distribution(app)
            })
        },
        distribution(app){
            TD_Request('tr','gtpp',{uid:app.$store.state.uid,pid:app.award.pid},function(code,data){
                console.log(data)
                app.Echats(app,data.award,data.other,data.own);
            },function(code,data){
                console.log(data)
                $('.fenpei').html('<p>幸运者收益：项目运作后，初始产生的利润额度'+data.trade.profit / 100+'元 + 之后利润的50%</p><p>互助者收益：互助者平分项目“项目运作利润达到'+ data.trade.profit / 100 +'元之后”利润的50%</p>')
                app.Echats(app,data.award,data.other,data.own);
            })
        },
        Echats(app,award,other,own){
            let echats = echarts.init(document.getElementById('main'))
            echats.setOption({
                    grid:{
                        top:'25%',
                    },
                    series: {
                        type: 'pie',
                        label:{            //饼图图形上的文本标签
                            normal:{
                            show:true,
                            position:'inner', //标签的位置
                            textStyle : {
                                fontWeight : 300 ,
                                fontSize : '0.16rem',    //文字的字体大小
                            },
                            textAlign:'center',
                            formatter:'{d}%'
                        }
                    },
                    data: [
                        {value:own,name:'自己',itemStyle:{normal:{color:'#00d094'}}},
                        {value:award,name:'幸运者',itemStyle:{normal:{color:'#ffc054'}}},
                        {value:other,name:'其他互助者',itemStyle:{normal:{color:'#666'}}},
                    ],
                }
            });
        },
        trade(pid){
            this.$router.push('/trade/'+this.url+'/'+pid);
        }
    }
}
</script>

<style lang="less" scoped>
    .historyInfo{
        width:100%;
        background: #fff;
        height:100%;
        .header{
            width: 1.80rem;
            height: 1.80rem;
            box-shadow: 0.02rem 0rem 10rem 0.02rem rgba(0, 54, 208, .05), -0.02rem 0 10rem 0.02rem rgba(0, 54, 208, .05), 0 0.02rem 10rem 0.02rem rgba(0, 54, 208, .05), 0 -0.02rem 10rem 0.02rem rgba(0, 54, 208, .05);
            border-radius: 50%;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .nickname{
            margin-top: 0.20rem;
            font-size: 0.32rem;
            color: #666;
            margin-bottom: 0.10rem;
            text-align: center;
        }
        .title{
            color: #00d094;
            font-size: 0.28rem;
            text-align: center;
            margin-bottom: 0.20rem;
            margin-top: 0.1rem;
        }
        .info{
            font-size: 0.26rem;
            color: #666;
            text-align: center;
            .icon{
                font-size: 0.22rem;
            }
        }
        .dreamInfo{
            width: 100%;
            .dream_title{
                margin-left: 0.25rem;
                width: 1.66rem;
                height: 0.48rem;
                color: #fff;
                background: #00d094;
                border-radius: 0.24rem;
                line-height: 0.48rem;
                text-align: center;
                font-size: 0.32rem;
            }
            .textarea{
                width: 6.58rem;
                margin: 0.30rem auto;
                color: #5e5e5e;
                font-size: 0.32rem;
            }
        }
    }
    .lenged{
        width: 6rem;
        margin: 0.5rem auto;
        text-align: center;
    }
    .lenged p{
        display: inline-block;
        width: 20px;
        height:14px;
        margin-right: 0.1rem;
        vertical-align: middle;
    }
    .lenged span{
        font-size: 0.24rem;
        color: #666;
    }
    .lenged .yellow{
        background: #ffc054;
    }
    .own{
        background: #00d094;
    }
    .gray{
        background: #666;
    }
</style>
<style>
.textarea img{
    width: 100%;
    height: 100%;
    border-radius: 0.10rem;
}
.textarea a{
    text-decoration: underline;
    color: #00d094;
}
</style>

