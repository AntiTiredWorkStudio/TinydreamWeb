<template>
    <div class="list">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
                <van-cell class="mt-20">
                    <div class="right" v-for="(list,index) in list" :key="index">
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
                    <p class="tip">点击右上角“...”立即分享打卡历程</p>
                </div>
                <div class="close" style="text-align:center">
                    <van-icon name="https://tdream.antit.top/DaKaOKX.png" class="icon" @click="close"></van-icon>
                </div>
            </van-popup>
        </div>
</template>

<script>
var uid = Options.GetUserInfo().openid;
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"有梦就行动，坚持返现金！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time='+new Date().getTime(),
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
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
            opid:''
        }
    },
     methods:{
        load(){
            this.getList(this);
            if(this.count>this.seek){
                this.seek++;
                this.getList(this)
            }
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
                        $('.mt-20').css('background','url(https://tdream.antit.top/image/Contract100.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000001" && item.state == 'DOING' || item.cid == "CO0000000001" && item.state == 'SUCCESS'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/image/Contract21.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000002" && item.state == 'FAILED'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/hylb100.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000001" && item.state == 'FAILED'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/hylb21.png) no-repeat center center / 6.8rem 2.7rem')
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
                if($_GET.type == 'new'){
                    var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time='+new Date().getTime()+'&opid='+this.opid+'&type=new'
                }else{
                    var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time='+new Date().getTime()+'&opid='+this.opid
                }
                WebApp.JSAPI.InitShare({
                    title:'追梦行动派',
                    desc:"有梦就行动，坚持返现金！",
                    link:url,
                    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
                });
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
                padding-top: 0.8rem;
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
}
</style>
