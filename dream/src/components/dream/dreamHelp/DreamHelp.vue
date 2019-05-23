<template>
    <div class="help">
        <van-tabs v-model="active" swipeable @change="onChange" color="#00d094" line-height="1" title-active-color="#00d094" >
            <van-tab title="进行中">
                <van-list v-model="loading" :finished="finished" @load="onLoad" finished-text="没有更多了" >
                    <div class="pool" v-for="(pool,index) in runpool" :key="index" @click.stop="lookinfo(pool)">
                        <div class="main">
                            <van-col span="13">
                                <p class="title">{{runpool == '' ? '' : pool.ptitle}}</p>
                                <p class="time">
                                    <van-icon name="clock-o"></van-icon>
                                    <span class="timeout">{{runpool == '' ? '' : pool.timeLess}}</span>
                                </p>
                                <p class="realbill">{{runpool == '' ? '' : pool.realBill + pool.realUnit}}</p>
                                <p class="tip" style="margin-bottom:0.3rem">{{runpool == "" ? '' : pool.billHint}}</p>
                                <p class="tip">{{runpool == "" ? '' : '互助目标'+pool.rtbillValue + pool.rtbillUnit+' '+'价格'+pool.rubillValue+pool.rubillUnit}}</p>
                            </van-col>
                            <van-col span="11" style="text-align:right">
                                <div class="progress">
                                    <yd-progressbar :progress="runpool == '' ? 0 : pool.cbill / pool.tbill" trail-width="4" stroke-color="#edf0f5" trail-color="#ffc054">
                                        {{runpool == '' ? 0 : parseInt(pool.cbill / pool.tbill * 100) + '%'}}
                                    </yd-progressbar>
                                </div>
                                <van-button type="primary" round @click.stop="join(pool.ptype,pool)">参与互助</van-button>
                            </van-col>
                        </div>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="我参与">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onload">
                    <div class="pool" v-for="(pool,index) in joinpool" :key="index" @click.stop="lookinfo(pool)">
                        <div class="main">
                            <van-col span="13">
                                <p class="title">{{joinpool == '' ? '' : pool.ptitle}}</p>
                                <p class="time" v-show="pool.state == 'RUNNING' ? true : false">
                                    <van-icon name="clock-o"></van-icon>
                                    <span class="timeout">{{joinpool == '' ? '' : pool.timeLess}}</span>
                                </p>
                                <p class="realbill">{{joinpool == '' ? '' : pool.realBill + pool.realUnit}}</p>
                                <p class="tip" style="margin-bottom:0.3rem">{{joinpool == "" ? '' : pool.billHint}}</p>
                                <p class="tip">{{joinpool == "" ? '' : '互助目标'+pool.rtbillValue + pool.rtbillUnit+' '+'价格'+pool.rubillValue+pool.rubillUnit}}</p>
                            </van-col>
                            <van-col span="11" style="text-align:right">
                                <div class="progress" :style="{background:pool.state == 'RUNNING' ? '' : 'url(http://tdream.antit.top/image/ended.jpg) no-repeat top left / 1.48rem 1.48rem'}">
                                    <yd-progressbar v-show="pool.state == 'RUNNING' ? true : false" :progress="joinpool == '' ? 0 : pool.cbill / pool.tbill" trail-width="4" stroke-color="#edf0f5" trail-color="#ffc054">
                                        {{joinpool == '' ? 0 : parseInt(pool.cbill / pool.tbill * 100) + '%'}}
                                    </yd-progressbar>
                                </div>
                                <van-button type="primary" round @click.stop="join(pool.ptype,pool)" v-show="pool.state == 'RUNNING' ? true : false">参与互助</van-button>
                            </van-col>
                        </div>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="已结束">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="Onload">
                    <div class="pool" v-for="(pool,index) in endpool" :key="index" @click.stop="lookinfo(pool)">
                        <div class="main">
                            <van-col span="13">
                                <p class="title">{{endpool == '' ? '' : pool.ptitle}}</p>
                                <p class="time" v-show="pool.state == 'RUNNING' ? true : false">
                                    <van-icon name="clock-o"></van-icon>
                                    <span class="timeout">{{endpool == '' ? '' : pool.timeLess}}</span>
                                </p>
                                <p class="realbill">{{endpool == '' ? '' : pool.realBill + pool.realUnit}}</p>
                                <p class="tip" style="margin-bottom:0.3rem">{{endpool == "" ? '' : pool.billHint}}</p>
                                <p class="tip">{{endpool == "" ? '' : '互助目标'+pool.rtbillValue + pool.rtbillUnit+' '+'价格'+pool.rubillValue+pool.rubillUnit}}</p>
                            </van-col>
                            <van-col span="11" style="text-align:right">
                                <div class="progress" :style="{background:pool.state == 'RUNNING' ? '' : 'url(http://tdream.antit.top/image/ended.jpg) no-repeat top left / 1.48rem 1.48rem'}">
                                    <yd-progressbar v-show="pool.state == 'RUNNING' ? true : false" :progress="endpool == '' ? 0 : pool.cbill / pool.tbill" trail-width="4" stroke-color="#edf0f5" trail-color="#ffc054">
                                        {{endpool == '' ? 0 : parseInt(pool.cbill / pool.tbill * 100) + '%'}}
                                    </yd-progressbar>
                                </div>
                                <van-button type="primary" round @click.stop="join(pool.ptype,pool)" v-show="pool.state == 'RUNNING' ? true : false">参与互助</van-button>
                            </van-col>
                        </div>
                    </div>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
import join from '@/components/index/mainpool/Mainpool'
export default {
    name:'help',
    data () {
        return {
            loading:true,
            finished:false,
            seek:0,
            runCount:'',//进行中的梦想池数
            joinCount:'',//我参与的梦想池总数
            endCount:'',//已结束的梦想池总数
            runpool:[],
            joinpool:[],
            endpool:[],
            active:1,
            mainpool:'',//梦想池信息
            trade:'',//生意互助池
        }
    },
    created(){
        this.total(this,this.active)
    },
    methods:{
        onload(){
            this.seek+=10;
            this.joinning(this,this.seek)
           console.log(this.seek);
           
        },
        onLoad(){
            this.seek+=10;
            this.running(this,this.seek)
        },
         Onload(){
            this.seek+=10;
            this.ended(this,this.seek)
        },
        onChange(index,title){
            if(index == 0){
                this.runpool = [];
                this.finished = false;
                this.seek = 0;
                this.loading = true;
                this.running(this,0)
            }else if(index == 1){
                this.joinpool = []
                this.finished = false;
                this.seek = 0;
                this.loading = true;
                this.joinning(this,0)
            }else if(index == 2){
                this.endpool = []
                this.finished = false;
                this.seek = 0;
                this.loading = true;
                this.ended(this,0)
            }
        },
        // 参与互助
        join(type,pool){
            /**
             * @params type 池子类型
             */
            if(type == 'TRADE'){
                type = 'trade'
                this.trade = pool;
            }else{
                type = 'dream'
                this.mainpool = pool;
            }
            
            join.methods.Buy(this,type)
        },
        // 查看详情
        lookinfo(pool){
            SaveStorage('pinfo',JSON.stringify(pool));
            this.$router.push('/pinfo')
        },
        // 获取梦想池总数
        total(app,index = 1){
            TD_Request('ds','pcount',{uid:app.$store.state.uid},function(code,data){
                console.log(data)
                app.runCount = data.rcount;
                app.joinCount = data.ucount;
                app.endCount = data.fcount;
                if(index == 0){

                }else if(index == 1){
                    app.seek = 0
                    app.joinning(app,app.seek)
                }else if(index == 2){
                    app.seek = 0
                    app.ended(app,app.seek)
                }
            },function(code,data){
                console.log(data)
            })
        },
        // 进行中的梦想池
        running(app,seek){
            TD_Request('ds','plistr',{seek:seek,count:10},function(code,data){
                console.log(data)
                if(data.Pools.length == 0){
                    app.loading = false;
                    app.finished = true;
                }
                $.each(data.Pools,function(index,item){
                    DreamPoolAnalysis(item)
                    app.runpool.push(item)
                })
                if(app.runpool == '' || app.runpool.length >= app.runCount){
                    app.loading = false;
                    app.finished = true;
                }
            },function(code,data){
                console.log(data)
            })
        },
        // 我参与
        joinning(app,seek){
            TD_Request('ds','plistj',{uid:app.$store.state.uid,seek:seek,count:10},function(code,data){
                console.log(data)
                if(data.Pools.length == 0){
                    app.finished = true;
                }
                $.each(data.Pools,function(index,item){
                    DreamPoolAnalysis(item)
                    app.joinpool.push(item);
                })
                app.loading = false;
                if(app.joinCount <= app.joinpool.length){
                    console.log(app.joinCount <= app.joinpool.length);
                    app.finished = true;
                }
            },function(code,data){
                console.log(data)
            })
        },
        // 结束
        ended(app,seek){
            console.log(seek)
            TD_Request('ds','plistf',{seek:seek,count:10},function(code,data){
                console.log(data)
                if(data.Pools.length == 0){
                    app.finished = true;
                }
                $.each(data.Pools,function(index,item){
                    DreamPoolAnalysis(item)
                    app.endpool.push(item)
                })
                app.loading = false;
                if(app.endCount <= app.endpool.length){
                    app.finished = true;
                }
            },function(code,data){
                console.log(data)
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .help{
        width: 100%;
        background: #fff;
        height: 100%;
        .pool{
            margin-top: 0.3rem;
            width: 6.8rem;
            margin: 0.3rem auto 0;
            min-height: 2.92rem;
            border-radius: 0.1rem;
            box-shadow: 0.02rem 0rem 0.01rem 0.02rem #cee5f9, -0.02rem 0 0.01rem 0.02rem #cee5f9, 0 0.02rem 0.01rem 0.02rem #cee5f9, 0 -0.02rem 0.01rem 0.02rem #cee5f9;
            .main{
                width: 6.2rem;
                margin: 0 auto;
                padding: 0.3rem 0;
                overflow: hidden;
                .title{
                    font-size: 0.32rem;
                }
                .time{
                    font-size: 0.28rem;
                    color: #00d094;
                    margin-top: 0.1rem;
                    margin-bottom: 0.22rem;
                }
                .realbill{
                    font-size: 0.48rem;
                    color: #ffc057;
                    margin-bottom: 0.1rem;
                }
                .tip{
                    font-size: 0.24rem;
                    color: #999;
                }
                .progress{
                    width: 1.7rem;
                    height: 1.7rem;
                    margin-bottom: 0.3rem;
                    display: inline-block;
                }
            }
        }
    }
</style>
