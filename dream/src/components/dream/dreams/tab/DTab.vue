<template>
    <div class="tab">
        <van-tabs v-model="active" title-active-color="#00d094" line-height="1" color="#00d094" swipeable>
            <van-tab title="小梦想">
                <p v-show="ishow"><van-icon name="http://tdream.antit.top/image/add.png" @click="add"></van-icon></p>
                <van-row class="dreams" v-for="(dream,index) in dreamList" :key="index">
                    <div class="main">
                        <van-col span="8">
                            <div class="bg"></div>
                        </van-col>
                        <van-col span="16">
                            <div class="title">{{dream.title}}</div>
                            <div class="time">
                                <span class="time">{{dream.stateTip}}</span>
                                <span class="btn" @click="lookinfo(dream.title,dream.did,dream.content,dream.payment)">查看详情</span>
                            </div>
                        </van-col>
                    </div>
                </van-row>
            </van-tab>
            <van-tab title="幸运梦想">
                <van-row class="lucky" v-for="(dream,index) in luckyList" :key="index">
                    <div class="main" @click="luckyinfo(dream.pool.ptype,dream.state,dream.pool.ptitle,dream.pool.cbill,dream.lottery.lid,dream.title,dream.content,dream.did,dream.payment)">
                        <van-col span="8">
                            <div class="bg">{{dream.pool.cbill / 100}}</div>
                        </van-col>
                        <van-col span="16">
                            <div class="t">
                                <div class="title">{{dream.title}}</div>
                                <van-icon :name="dream.hasOwnProperty('src') == true ? dream.src : ''"></van-icon>
                            </div>
                            <div class="time">
                                <span class="time">{{dream.pool.ptitle}}</span>
                            </div>
                        </van-col>
                    </div>
                </van-row>
            </van-tab>
        </van-tabs>
        <add :show="isshow" :did="did" :state="status" />
    </div>    
</template>

<script>
import add from '@/components/dream/add/Add'
export default {
    name:'tab',
    data () {
        return {
            active:0,//默认选中下标
            dreamList:'',//小梦想列表
            luckyList:'',//幸运梦想列表
            isshow:false,//是否展示弹窗
            title:'',
            did:'',
            content:'',
            status:'',
            ishow:true
        }
    },
    components:{
        add
    },
    created(){
        this.getDreams(this)
    },
    methods:{
        // 修改梦想状态
        modify(app,did){
            TD_Request('dr','sdjson',{did:did,state:JSON.stringify({state:'SUBMIT',payment:'0/1'})},function(code,data){
                console.log(data)
                app.getDreams(app)
            },function(code,data){
                console.log(data)
            })
        },
        // 获取梦想列表
        getDreams(app){
            TD_Request('dr','dlist',{uid:app.$store.state.uid,trade:true},function(code,data){
                console.log(data)
                if(data.dcount.code == 14){
                    app.ishow = false;
                }
                var dreamList = [];//小梦想列表
                var luckyList = [];//幸运梦想列表
                $.each(data.dreams,function(index,item){
                    if(item.state == 'FAILED'){
                        console.log(item.did);
                        app.modify(app,item.did)
                    }else if(item.state == "SUBMIT"){
                        item.stateTip = '未中奖'
                        dreamList.push(item);
                    } else if (item.state == 'SUCCESS' && item.payment == 1 || item.state == 'SUCCESS' && item.pool.ptype=='TRADE'){
                        item.src = 'http://tdream.antit.top/image/success.png'
                        luckyList.push(item)
                    }else{
                        luckyList.push(item)
                    }
                })
                app.dreamList = dreamList;
                app.luckyList = luckyList;
                console.log(app.dreamList,app.luckyList)
            },function(code,data){
                console.log(data)
            })
        },
        // 查看详情
        lookinfo(title,did,content){
            console.log(did);
            console.log(title,did,content)
            this.title = title
            this.did = did
            this.content = content
            this.isshow = true
            this.status = 'edit'
        },
        // 添加梦想
        add(){
            this.isshow = true;
            this.status = 'add'
        },
        // 幸运梦想详情
        luckyinfo(ptype,state, ptitle, bill, lid, title, content, did, payment){
            console.log(state,ptitle,bill,lid,title,content,did, payment)
            /**
             * @params state 梦想状态
             * @params ptitle 梦想池标题
             * @params bill 中奖金额
             * @params lid 中奖编号
             * @params title 梦想标题
             * @params content 梦想简介
             * @params did 梦想标题
             * 
             */
            console.log(ptype)
            if(ptype == 'TRADE'){
                return;
            }else{
                this.$router.push(encodeURI('/lucky/'+state+'/'+ptitle+'/'+bill / 100 +'/'+lid+'/'+title+'/'+content+'/'+did+'/'+payment))
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .tab{
        width: 100%;
        p{
            text-align: center;
            .van-icon{
                font-size: 1.46rem;
                margin-top: 0.3rem;
            }
        }
        .dreams{
            width: 6.9rem;
            height: 2.2rem;
            border-radius: 0.2rem;
            background: #fff;
            margin: 0.2rem auto 0;
            .main{
                width: 6.55rem;
                overflow: hidden;
                position: relative;
                .bg{
                    width: 2.05rem;
                    height: 2.2rem;
                    background: url(http://tdream.antit.top/image/dream_bg.png) no-repeat center center / 2.05rem 2.2rem;
                }
                .title{
                    width: 100%;
                    margin-top: 0.2rem;
                    padding-bottom: 0.2rem;
                    border-bottom: 1px solid #eee;
                }
                .time{
                    width: 4.3rem;
                    // margin-top: 0.5rem;
                    position: absolute;
                    bottom: 0.1rem;
                    line-height: 0.48rem;
                    .time{
                        float: left;
                        font-size: 0.27rem;
                        color: #808080;
                        position: static;
                        width: auto;
                    }
                }
                .btn{
                    float: right;
                    width: 1.6rem;
                    height: 0.48rem;
                    background: #00d094;
                    color: #fff;
                    border-radius: 0.24rem;
                    text-align: center;
                    line-height: 0.48rem;
                }
            }
        }
        .lucky{
            width: 6.9rem;
            height: 2rem;
            border-radius: 0.2rem;
            background: #fff;
            margin: 0.2rem auto 0;
            .main{
                width: 6.7rem;
                overflow: hidden;
                position: relative;
                .bg{
                    background: url(http://tdream.antit.top/image/y.png) no-repeat center center / 2.2rem 2rem;
                    font-size: 0.48rem;
                    text-align: center;
                    line-height: 2rem;
                    color: #fff;
                    height:2rem;
                    width: 2.2rem;
                }
                .t{
                    font-size: 0.84rem;
                    border-bottom: 1px solid #eee;
                    .van-icon{
                        margin-top: 0.2rem;
                    }
                }
                .title{
                    width: 3.6rem;
                    margin-top: 0.2rem;
                    padding-bottom: 0.2rem;
                    float: left;
                    font-size: 0.3rem;
                }
                .time{
                    width: 4.3rem;
                    position: absolute;
                    bottom: 0.1rem;
                    line-height: 0.48rem;
                    .time{
                        float: left;
                        font-size: 0.27rem;
                        color: #808080;
                        position: static;
                        width: auto;
                    }
                }
            }
        }
    }
</style>
