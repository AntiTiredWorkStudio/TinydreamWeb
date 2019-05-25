<template>
    <div class="list">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
                <van-cell class="mt-20" v-for="(list,index) in list" :key="index" :style="{background:'url('+list.bg+') no-repeat center center / 6.8rem 2.7rem'}">
                    <div class="right">
                        <van-icon :name="list.url" class="icon"></van-icon>
                        <div class="btn">
                            <van-button round @click="get(list.cid,list.alrday,list.menday,list.misday,list.conday,list.opid)">查看打卡详情</van-button>
                        </div>
                    </div>
                </van-cell>
            </van-list>
            <!-- 弹窗 -->
            <van-popup v-model="isshow" class="info">
                <div class="main">
                    <div class="mt-80">
                        <p>{{alrday}}<span style="font-size:0.28rem">天</span></p>
                        <p style="font-size:0.28rem">本合约共累计打卡</p>
                    </div>
                    <div class="mt-95">
                        <van-col span="8">
                            <p class="txt">连续打卡</p>
                            <p class="num">{{conday}}</p>
                        </van-col>
                        <van-col span="8">
                            <p class="txt">缺卡</p>
                            <p class="num">{{misday}}</p>
                        </van-col>
                        <van-col span="8">
                            <p class="txt">补卡</p>
                            <p class="num">{{menday}}</p>
                        </van-col>
                    </div>
                    <p class="tip" @click="guid">立即分享打卡历程</p>
                </div>
                <div class="close" style="text-align:center">
                    <van-icon name="https://tdream.antit.top/DaKaOKX.png" class="icon" @click="close"></van-icon>
                </div>
            </van-popup>
            <van-popup v-model="ishare" class="guid_mask">
                <div class="guid"></div>
                <div class="btn" @click="guid_close"></div>
            </van-popup>
        </div>
</template>

<script>
if(GetStorage('userInfo') != null){
    var uid = JSON.parse(GetStorage('userInfo')).openid;
}
export default {
    name:'list',
    data () {
        return {
            loading:false,
            finished:false,
            seek:0,
            count:0,
            list:[],
            isshow:false,
            alrday:'',
            menday:'',
            misday:'',
            conday:'',
            opid:'',
            ishare:false
        }
    },
    created(){
        WebApp.JSAPI.InitShare({
            title:'追梦行动派',
            desc:"有梦就行动，坚持返现金！",
            link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=no',
            imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
        });
    },
     methods:{
        load(){
            this.getList(this);
            if(this.count>this.seek){
                this.seek++;
                this.getList(this)
            }
        },
        guid(){
            this.ishare = true;
        },
        guid_close(){
            this.isshow = false;
            this.ishare = false;
        },
        getList(self){
            TD_Request('op','olist',{uid:uid,seek:self.seek,count:10},function(code,data){
                console.log(data)
                self.loading = false;
                if(data.operations.length == 0){
                    self.finished = true;
                }
                $.each(data.operations,function(index,item){
                    if(item.state == 'DOING'){
                       item.url = 'https://tdream.antit.top/active.png'
                    }else if(item.state == 'SUCCESS'){
                        item.url = 'https://tdream.antit.top/actived.png'
                    }else if(item.state == 'FAILED'){
                        item.url = 'https://tdream.antit.top/unactive.png'
                    }
                    if(item.cid == "CO0000000002" && item.state == 'DOING' || item.cid == "CO0000000002" && item.state == 'SUCCESS'){
                        item.bg = 'https://tdream.antit.top/image/Contract100.png'
                    }else if(item.cid == "CO0000000001" && item.state == 'DOING' || item.cid == "CO0000000001" && item.state == 'SUCCESS'){
                        item.bg = 'https://tdream.antit.top/image/Contract21.png'
                    }else if(item.cid == "CO0000000002" && item.state == 'FAILED'){
                        item.bg = 'https://tdream.antit.top/hylb100.png'
                    }else if(item.cid == "CO0000000001" && item.state == 'FAILED'){
                        item.bg = 'https://tdream.antit.top/hylb21.png'
                    }
                    self.list.push(item)
                    if(self.list.length >= self.count){
                        self.finished = true;
                    }
                })
            },function(code,data){
                console.log(data)
            })
        },
        get(cid,alrday,menday,misday,conday,opid){
            this.alrday = alrday
            this.menday = menday
            this.misday = misday
            this.conday = conday
            this.opid = opid
            this.isshow = true;
        },
        close(){
            this.isshow = false;
        }
    },
    watch:{
        opid (data) {
            if(data != ''){
                // alert(2)
                if(this.$route.params.type == 'new'){
                    var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=yes&opid='+this.opid+'&status=new&url=friend'
                }else{
                    var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=yes&opid='+this.opid+'&status=old&url=friend'
                }
                WebApp.JSAPI.InitShare({
                    title:'追梦行动派',
                    desc:"有梦就行动，坚持返现金！",
                    link:url,
                    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
                });
                  WebApp.JSAPI.OnShareTimeLine = function(res){
                    self.ishare = false;
                }
                WebApp.JSAPI.OnShareFriend = function(res){
                    self.ishare = false;
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .list{
    width: 6.8rem;
    margin: 0 auto;
    .mt-20{
        margin-top: 0.2rem;
        height: 2.7rem;
        // background: url(https://tdream.antit.top/image/Contract100.png) no-repeat center center / 6.8rem 2.7rem;
        .right{
            float: right;
            .icon{
                font-size: 1.2rem;
                float: right;
                margin-bottom: 0.2rem;
            }
            .van-button{
                background: #00d094;
                color: #fff;
            }
        }
    }
    .info{
        background: rgba(0,0,0,0);
        .main{
            background: url(https://tdream.antit.top/DKXQB.png) no-repeat center center / 5.8rem 5.8rem;
            width: 5.8rem;
            height: 5.8rem;
            margin: 0 auto;
            .mt-80{
                padding-top: 0.6rem;
                p{
                    font-size: 1rem;
                    color: #fff;
                    text-align: center;
                }
            }
            .mt-95{
                margin-top: 0.95rem;
                margin-bottom: 0.3rem;
                overflow: hidden;
                .van-col{
                    text-align: center;
                    .txt{
                        font-size: 0.28rem;
                        color: #999;
                    }
                    .num{
                        font-size: 0.46rem;
                    }
                }
            }
            .tip{
                width: 5.2rem;
                background: #00d094;
                height: 0.88rem;
                color: #fff;
                text-align: center;
                line-height: 0.88rem;
                border-radius: 0.44rem;
                margin: 0 auto;
                padding-bottom: 0.2rem;
            }
        }
        .icon{
            margin-top: 0.6rem;
            font-size: 0.8rem;
        }
    }
    .guid_mask{
            background: rgba(0,0,0,0);
            text-align: center;
            position: fixed;
            top: 4rem;
            .guid{
                width: 7.5rem;
                height: 3.97rem;
                background: url(https://tdream.antit.top/share_toup.png) no-repeat center center / 5.62rem 3.97rem;
                position: relative;
                left: 0.5rem;
            }
            .btn{
                width: 2.56rem;
                height: 0.7rem;
                margin-top: 2.8rem;
                background: url(https://tdream.antit.top/share_iok.png) no-repeat center center / 2.56rem 0.7rem;
                margin: 2.8rem auto 0;
            }
        }
}
</style>


