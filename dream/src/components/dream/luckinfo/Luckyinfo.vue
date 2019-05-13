<template>
    <div class="luckyinfo">
        <div class="bg"></div>
        <div class="tip">{{tip}}</div>
        <div class="gift"></div>
        <div class="tip_msg">提示</div>
        <div class="tipMsg">
            为了更好地给您颁发梦想互助金，请您务必在7个工作日内完善梦想和实名认证！
        </div>
        <div class="btn">
            <van-button :disabled="disable" :type="type" round @click="dream">{{btntxt}}</van-button>
            <p @click="lookpress">查看领奖进度</p>
        </div>
        <popup :show="isshow" :title="title" :did="did" :content="content" :state="status"/>
    </div>
</template>

<script>
import popup from '@/components/dream/add/Add'
export default {
    name:'luckyinfo',
    data () {
        return {
            tip:'',
            show:true,
            disable:false,
            btntxt:'完善梦想',
            state:'',
            type:'',
            isshow:false,
            title:'',//梦想标题
            did:'',//梦想 id,
            content:'',//梦想简介
            status:'all'
        }
    },
    components:{
        popup
    },
    created(){
        if(this.$route.params == {}){
            this.$router.push('/')
        }else{
            this.state = this.$route.params.state
            if(this.$route.params.state == 'SUCCESS'){
                this.disable = true
                this.type = 'primary'
                this.btntxt = '审核通过'
                this.show = false
            }else if(this.$route.params.state == 'DOING'){
                this.btntxt = '完善梦想'
                this.type = 'primary'
            }else if(this.$route.params.state == 'VERIFY'){
                this.disable = true
                this.btntxt = '审核中'
                this.type = 'warning'
            }
            this.tip = '恭喜您参与的'+this.$route.params.ptitle+'成为幸运者，幸运编号为'+this.$route.params.lid+'本期互资金为'+this.$route.params.bill+'元'
        }
    },
    methods:{
        // 完善梦想
        dream(){
            this.perfect(this)
        },
        // 完善梦想
        perfect(app){
            TD_Request('us','rnamegx',{uid:app.$store.state.uid},function(code,data){
                app.isshow = true;
                app.title = app.$route.params.title
                app.content = app.$route.params.content
                app.did = app.$route.params.did
            },function(code,data){
                if(code == 12){
                    app.$dialog.confirm({
                        title:'实名认证',
                        message:'为了更好的给您颁发梦想互助金，请您完成实名认证并完善梦想',
                        confirmButtonText:'去实名',
                        cancelButtonText:'再想想',
                        confirmButtonColor:'#00d094'
                    }).then(() => {
                        app.$router.push('/auth/lucky')
                    }).catch(()=>{
                        return;
                    })
                }
            })
        },
        lookpress(){
            
        },
    },
    watch:{
        $route(to,from){
            this.perfect(this);
        }
    }
}
</script>

<style lang="less" scoped> 
    .luckyinfo{
        width: 100%;
        background: #fff;
        .bg{
            width: 1.63rem;
            height: 0.48rem;
            margin: 1.00rem auto 0;
            background: url(http://tdream.antit.top/image/congratulate.png) no-repeat;
            background-size: 1.63rem 0.48rem;
        }
        .tip{
            width: 5.16rem;
            margin: 0.40rem auto 0;
            font-size: 0.34rem;
            color: #ffb115;
            text-align: center;
            line-height: 0.50rem;
            font-weight: bolder;
        }
        .gift{
            width: 4.86rem;
            height: 3.00rem;
            margin: 0.58rem auto 0;
            background: url(http://tdream.antit.top/image/gift.png) no-repeat;
            background-size: 4.86rem 3.00rem;
        }
        .tip_msg{
            font-size: 0.28rem;
            text-align: center;
            color: #999;
            margin: 0.58rem auto 0;
        }
        .tipMsg{
            width: 5.38rem;
            font-size: 0.28rem;
            text-align: center;
            color: #999;
            margin: 0 auto 0.3rem;
        }
        .btn{
            text-align: center;
            .van-button{
                width: 4.8rem;
            }
            p{
                margin-top: 0.2rem;
                text-align: center;
                text-decoration: underline;
                font-size: 0.32rem;
                color: #00d094;
            }
        }
    }
</style>
