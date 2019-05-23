<template>
    <div class="fill">
            <div class="top" :style="css">
                <p>当前剩余{{cardinfo == '' ? '--' : cardinfo.menchance}}次补卡机会</p>
            </div>
            <div class="middle">
                <p>{{msg}}</p>
            </div>
            <div class="center">
                <p @click="guid">立即分享今日打卡</p>
            </div>
            <div class="center_b">
                <p>赶紧转发今日的打卡到朋友圈吧，</p>
                <p>每成功影响一位好友成为行动派</p>
                <p>（支付参与行动合约）</p>
                <p>可以得到1次补卡机会哦！</p>
            </div>
            <div class="bottom-t">
                <van-col span="2">
                    <van-icon name="https://tdream.antit.top/image/rightarrow.png" class="icon"></van-icon>
                </van-col>
                <van-col span="20">
                    <p>
                        您已影响身边<span>{{headicons.length}}</span>位小伙伴成为追梦行动派
                    </p>
                </van-col>
                <van-col span="2">
                    <van-icon class="icon" name="https://tdream.antit.top/image/leftarrow.png"></van-icon>
                </van-col>
            </div>
            <div class="tip"></div>
            <div class="bottom">
                <van-icon :name="headicon" v-for="(headicon,index) in headicons" class="icon" :key="index"></van-icon>
            </div>
            <!-- 分享指引 -->
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
    name:'fill',
    data () {
        return {
            headicons:'',//头像
            cardinfo:'',//详情信息
            css:'',
            ishare:false,
            msg:'',
        }
    },
    created(){
        if(this.$route.params.opid != ''){
            if(this.$route.params.state == 'success'){
                this.css = {
                    background:'url(https://tdream.antit.top/image/rightframe.png) no-repeat',
                    'background-size':'5.86rem 2.19rem',
                }
                this.mes = '补卡成功'
            }else{
                this.css = {
                    'background-image':'url(https://tdream.antit.top/BuKaCiShuBeiJing.png)',
                    'background-size':'5.86rem 2.19rem'
                }
                this.msg = '补卡失败'
            }
            this.Info(this,this.$route.params.opid)
            this.headIcon(this);
        }else{
            window.location.href = 'actionClock.html?time='+new Date().getTime();
        }
    },
    methods:{
        guid(){
            this.ishare = true;
        },
        // 详情信息
        Info(self,opid){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'加载中...'
            })
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                self.$toast.clear();
                console.log(data)
                var menchance = data.info.menchance;
                TD_Request('op','oif',{opid:opid,uid:uid},function(code,data){
                    if($_GET.type == 'new'){
                        var title = data.info.nickname + '已加入追梦行动派'
                        var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=yes&opid='+opid+'&status=new&url=friend'
                    }else{
                        var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=yes&opid='+opid+'&status=old&url=friend'
                        var title = data.info.nickname+"已加入追梦行动派为 "+data.info.theme+' 坚持行动'+data.info.alrday+'天'
                    }
                    WebApp.JSAPI.InitShare({
                        title:title,
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
                    console.log(data);
                    self.cardinfo = {
                        menchance:menchance,
                        misday:data.info['misday'],
                        menday:data.info['menday']
                    };
                },function(code,data){
                    console.log(data)
                })
            },function(code,data){
                self.$toast.clear();
                console.log(data);
            })
        },
        headIcon(self){
            TD_Request('op','ihics',{uid:uid},function(code,data){
                console.log(data)
                self.headicons = data.headicons;
                if(data.headicons.length == 0){
                    $('.tip').html('当前你还没有邀请到小伙伴呢，快去邀请小伙伴们一起参加追梦行动吧！').show();
                }
            },function(code,data){
                console.log(data);
            })
        },
        guid_close(){
            this.ishare = false;
        }
    }
}
</script>

<style lang="less" scoped>
    html{
    width: 100%;
    background: #fff;
    height: 100%;
    body{
        width: 100%;
        height: 100%;
        background: #fff;
        .fill{
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #fff;
            .top{
                width: 5.86rem;
                margin: 0.72rem auto 0.4rem;
                height: 2.19rem;
                padding-top: 1.71rem;
                p{
                    height: 0.48rem;
                    color: #fff;
                    text-align: center;
                    font-size: 0.32rem;
                }
            }
            .middle{
                width: 100%;
                margin-bottom: 0.8rem;
                p{
                    text-align: center;
                    font-size: 0.36rem;
                }
            }
            .center{
                width: 100%;
                margin-bottom: 0.6rem;
                p{
                    width: 5.8rem;
                    height: 0.88rem;
                    line-height: 0.88rem;
                    background: #00d094;
                    color: #fff;
                    text-align: center;
                    border-radius: 0.44rem;
                    margin: 0 auto;
                }
            }
            .center_b{
                width: 100%;
                margin-bottom: 0.9rem;
                p{
                    margin-bottom: 0.1rem;
                    color: #4c4c4c;
                    font-size: 0.26rem;
                    text-align: center;
                }
            }
            .bottom-t{
                width: 6.74rem;
                margin-bottom: 0.3rem;
                overflow: hidden;
                margin: 0 auto;
                .van-col--20{
                    margin: 0.08rem 0;
                }
                p{
                    font-size: 0.28rem;
                    color: #4c4c4c;
                    text-align: center;
                    span{
                        color: #00d094;
                    }
                }
                .icon{
                    font-size: 0.54rem;
                }
            }
            .bottom{
                width: 6.74rem;
                margin: 0 auto;
                text-align: center;
                .icon{
                    margin-right: 0.2rem;
                    border-radius: 50%;
                    border: 1px solid #00d094;
                    font-size: 0.8rem;
                    img{
                        width: 0.88rem;
                        height: 0.88rem;
                        border-radius: 50%;
                    }
                }
            }
            .tip{
                width: 6.74rem;
                margin: 0 auto;
                text-align: center;
                color: #999;
                display: none;
                font-size: 0.24rem;
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
}
</style>

