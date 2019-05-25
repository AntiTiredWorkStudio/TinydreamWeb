<template>
    <div class="history">
        <van-tabs v-model="active" :border="false" @change="change" color="#00d094" title-active-color="#00d094" title-inactive-color="#333" line-height="1">
            <van-tab title="小梦想互助幸运者">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad('DR')">
                    <div class="main" v-for="(list,index) in dList" :key="index">
                        <van-col span="8" style="text-align:center">
                            <div class="headicon"><img :src="list.headicon"></div>
                        </van-col>
                        <van-col span="12">
                            <p class="title">{{list.ptitle}}</p>
                            <p class="nickname txt">昵 称：{{list.nickname}}</p>
                            <p class="dtitle txt">梦 想：{{list.dtitle}}</p>
                            <p class="bill txt">金 额：{{list.realBill + list.realUnit}}</p>
                        </van-col>
                        <van-col span="4" style="text-align:right">
                            <div class="right" @click="info(list)">
                                <div class="main_txt">
                                    <p>查</p>
                                    <p>看</p>
                                    <p>详</p>
                                    <p>情</p>
                                </div>
                            </div>
                        </van-col>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="小生意互助幸运者">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad('TR')">
                    <div class="main" v-for="(list,index) in tList" :key="index">
                        <van-col span="8" style="text-align:center">
                            <div class="headicon"><img :src="list.headicon" alt=""></div>
                        </van-col>
                        <van-col span="12">
                            <p class="title">{{list.ptitle}}</p>
                            <p class="nickname txt">昵 称：{{list.nickname}}</p>
                            <p class="dtitle txt">梦 想：{{list.dtitle}}</p>
                        </van-col>
                        <van-col span="4" style="text-align:right">
                            <div class="right" @click="info(list)">
                                <div class="main_txt">
                                    <p>查</p>
                                    <p>看</p>
                                    <p>详</p>
                                    <p>情</p>
                                </div>
                            </div>
                        </van-col>
                    </div>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name:'history',
    data () {
        return {
            dcount:'',
            tcount:'',
            active:0,
            loading:true,
            finished:false,
            dList:[],
            tList:[],
            seek:0,
        }
    },
    created(){
        WebApp.JSAPI.InitShare({
            title:'追梦行动派',
            desc:"我刚刚参与了一份小梦想，你也一起来吧！",
            link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
            imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
        });
        this.count(this)
    },
    methods:{
        onLoad(type){
            this.seek+=5;
            this.list(this,this.seek,type)
        },
        count(app,index=0){
            if(index == 0){
                var type = 'DR'
            }else{
                var type = 'TR'
            }
            TD_Request('aw','cplu',{awardtype:type},function(code,data){
                console.log(data)
                if(type == "DR"){
                    app.dcount = data.count;
                }else{
                    app.tcount = data.count;
                }
                app.list(app,0,type)
            },function(code,data){
                console.log(data)
            })
        },
        list(app,seek,type){
            TD_Request('aw','gplu',{seek:seek,count:5,awardtype:type},function(code,data){
                app.loading = false;
                if(data.awards.length == 0){
                    app.finished = true;
                }
                $.each(data.awards,function(index,item){
                    app.conversion(item);
                    if(type == 'DR'){
                        app.dList.push(item);
                        if(app.dList.length >= app.dcount){
                            app.finished = true;
                        }
                    }else{
                        app.tList.push(item);
                        if(app.tList.length >= app.tcount){
                            app.finished = true;
                        }
                    }
                })
            },function(code,data){
                console.log(data)
            })
        },
        conversion(award){
            var realBill = award.abill / 100;
            var realUnit = award.abill >= 1000000 ? '万元' : '元';
            var dtitle = award.title.length > 10 ? award.title.substr(0,8).concat('...') : award.title;
            var ptitle = award.ptype == "STANDARD" ? '小梦想互助'+award.pid+'期幸运者' : '小生意互助'+award.pid+'期幸运者'
            award.realBill = realBill;
            award.realUnit = realUnit;
            award.dtitle = dtitle;
            award.ptitle = ptitle;
            return award;
        },
        info(award){
            SaveStorage('award',JSON.stringify(award))
            this.$router.push('/historyInfo')
        },
        change(index,title){
            this.dList = [];
            this.tList = [];
            this.seek = 0;
            this.finished = false;
            this.loading = true;
            this.count(this,index)
        }
    }
}
</script>

<style lang="less" scoped>
    .history{
        width: 100%;

        .main{
            width: 6.9rem;
            margin: 0 auto;
            height: 2.40rem;
            border-radius: 0.10rem;
            box-shadow: 0.02rem 0rem 0.2rem 0.02rem rgba(0, 54, 208, .05), -0.02rem 0 0.2rem 0.02rem rgba(0, 54, 208, .05), 0 0.02rem 0.2rem 0.02rem rgba(0, 54, 208, .05), 0 -0.02rem 0.2rem 0.02rem rgba(0, 54, 208, .05);
            background-color: #fff;
            margin-top: 0.3rem;
            overflow: hidden;
            .headicon{
                margin-left: 0.20rem;
                margin-top: 0.30rem;
                width: 1.60rem;
                height: 1.60rem;
                border-radius: 50%;
                margin-right: 0.20rem;
                img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
            }
            .title{
                font-size: 0.28rem;
                color: #00d094;
                margin-bottom: 0.10rem;
                padding-top: 0.2rem;
            }
            .txt{
                font-size: 0.26rem;
                color: #b2b2b2;
            }
            .right{
                width: 0.80rem;
                font-size: 0.32rem;
                height: 2.4rem;
                display: inline-block;
                background: #00d094;
                color: #fff;
                position: relative;
                border-top-right-radius: 0.10rem;
                border-bottom-right-radius: 0.10rem;
                .main_txt{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
        }
    }
</style>
