<template>
    <div class="user">
            <div class="header">
                <van-row class="head_main">
                    <van-col span="18">
                        <div class="headicon" :style="headicon"></div>
                        <span class="nickname">{{selfinfo.nickname}}</span>
                    </van-col>
                    <van-col span="6" style="text-align:right">
                        <van-icon class="icon" name="https://tdream.antit.top/SZJL.png" @click="record"></van-icon>
                    </van-col>
                </van-row>
                <van-row class="info">
                    <van-col span="6" class="middle">
                        <p class="font-40">{{selfinfo == '' ? '--' : selfinfo.dayBuy}}</p>
                        <p class="font-24">今日参与</p>
                    </van-col>
                    <van-col span="6" class="middle">
                        <p class="font-40">{{selfinfo == '' ? '--' : selfinfo.totalJoin}}</p>
                        <p class="font-24">互助总数</p>
                    </van-col>
                    <van-col span="6" class="middle">
                        <p class="font-40">{{cAttendence == '' ? 0 : cAttendence}}</p>
                        <p class="font-24">打卡总数</p>
                    </van-col>
                    <van-col span="6" class="middle">
                        <p class="font-40">{{conday == '' ? 0 : conday}}</p>
                        <p class="font-24">连续打卡次数</p>
                    </van-col>
                </van-row>
            </div>
            <van-col span="24" class="model">
                <span></span>
                <h3 class="title">个人中心</h3>
            </van-col>
            <van-row type="flex" align="center" justify="center" class="userApp">
                <van-col span="8">
                    <a href="../../../html/dreamHelp.html">
                        <div class="icon icon_join"></div>
                        <p class="tip">我的参与</p>
                    </a>
                </van-col>
                <van-col span="8" class="line">
                    <a href="../../../html/dream.html">
                        <div class="icon icon_dream"></div>
                        <p class="tip">小梦想</p>
                    </a>
                </van-col>
                <van-col span="8">
                    <a href="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html">
                        <div class="icon icon_clock"></div>
                        <p class="tip">行动打卡</p>
                    </a>
                </van-col>
            </van-row>
            <van-col span="24" class="model">
                <span></span>
                <h3 class="title">其他</h3>
            </van-col>
            <van-row type="flex" align="center" justify="center" class="userApp" style="margin:0;">
                <van-col span="8">
                    <a href="../../../html/RedEnvelope.html">
                        <div class="icon icon_pack"></div>
                        <p class="tip">梦想红包</p>
                    </a>
                </van-col>
                <van-col span="8" class="line">
                    <a href="../../../html/phoneManage.html">
                        <div class="icon icon_phone"></div>
                        <p class="tip">手机号管理</p>
                    </a>
                </van-col>
                <van-col span="8">
                    <a href="../../../html/auth.html">
                        <div class="icon icon_auth"></div>
                        <p class="tip">实名认证</p>
                    </a>
                </van-col>
            </van-row>
            <van-row type="flex" align="center" justify="center" class="userApp">
                <van-col span="8">
                    <a href="../../../html/notice.html">
                        <div class="icon icon_notice" style="position:relative"></div>
                        <p class="tip">系统通知</p>
                    </a>
                </van-col>

                <van-col span="8" class="line">
                    <a href="../../../html/cach.html">
                        <div class="icon icon_cach"></div>
                        <p class="tip">联系客服</p>
                    </a>
                </van-col>
                <van-col span="8">
                    <a href="../../../html/question.html">
                        <div class="icon icon_question"></div>
                        <p class="tip">新手指引</p>
                    </a>
                </van-col>
            </van-row>
            <!-- tabbar -->
            <van-tabbar v-model="actives" active-color="#00d094">
                <van-tabbar-item v-for="(tab,index) in tabbar" :url="tab.url" :key="index">
                    <span>{{tab.title}}</span>
                    <img slot-scope="props" slot="icon" :src="props.active ? tab.active : tab.normal">
                </van-tabbar-item>
            </van-tabbar>
        </div>
</template>

<script>
WebApp.JSAPI.Init();
import tabbar from '@/components/tabbar'
var uid = Options.GetUserInfo().openid;
export default {
    name:'user',
    data () {
        return {
            actives:2,//默认菜单
            tabbar:'',//tabbar
            selfinfo:'',//个人信息,
            headicon:'',//个人头像,
            ncount:'',//通知数量
            clock:'',//打卡信息
            cAttendence:'',
            cPerson:'',
            conday:'',
        }
    },
    created(){
        console.log(tabbar)
        this.tabbar = tabbar.data.tabbar;
        // this.tabbar = common.tabbar;
        // 获取个人信息
        this.GetSelfInfo(this)
        this.cinfo(this);
    },
    // mounted(){
    //     console.log(common.ncount)
    //     this.notice(this,uid)
    // },
    methods:{
        // 获取个人信息
        GetSelfInfo(self){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'获取信息中...'
            })
            TD_Request('us','selfinfo',{uid:uid},function(code,data){
                console.log(data);
                self.$toast.clear();
                self.headicon = {
                    background:'url('+data.selfinfo.headicon+') no-repeat center center / 1.32rem 1.32rem'
                }
                self.selfinfo = data.selfinfo;
                if(data.total['SUM(`alrday`)'] == null){
                    data.total['SUM(`alrday`)'] = 0;
                }
                if(data.total['SUM(`conday`)'] == null){
                    data.total['SUM(`conday`)'] = 0;
                }
                self.cAttendence = data.total['SUM(`alrday`)'];
                self.conday = data.total['SUM(`conday`)'];
                
                
            },function(code,data){
                console.log(data)
            })
        },
        notice(self,uid){
            TD_Request('no','nc',{uid:uid},function(code,data){
                if(data.ncount == 0){
                    self.ncount = '';
                    $('.noticeNum').hide();
                }else if(data.ncount >= 99){
                    self.ncount = '99+'
                }
                self.ncount = data.ncount;
            },function(code,data){
                console.log(data);
            })
        },
        cinfo(self){
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                console.log(data);
            },function(code,data){
                console.log(data)
            })
        },
        record(){
            window.location.href = 'payRecord.html?time='+new Date().getTime();
        }
    }
}
</script>

<style lang="less" scoped>
    .user{
    width: 6.9rem;
    margin: 0.3rem auto;
    .header{
        width: 100%;
        height: 3.2rem;
        background: #fff;
        border-radius: 0.1rem;
        margin-bottom: 0.3rem;
        .head_main{
            width: 5.86rem;
            margin: 0 auto;
            padding-top: 0.5rem;
            margin-bottom: 0.3rem;
            background: #fff;
            .headicon{
                width: 1.32rem;
                height: 1.32rem;
                border-radius: 50%;
                display: inline-block;
                vertical-align: middle;
            }
            .nickname{
                font-size:0.3rem;
                margin-left: 0.3rem;
            }
            .icon{
                font-size: 1.89rem;
                height: 0.69rem;
                img{
                    margin: 0;
                }
            }
        }
        .info{
            width: 5.86rem;
            margin: 0 auto;
            .middle{
                text-align: center;
                .font-40{
                    font-size: 0.4rem;
                }
                .font-24{
                    font-size: 0.24rem;
                    color: #999;
                }
            }
        }
    }
    .model{
        width: 100%;
        margin-bottom: 0.2rem;;
        span{
            font-size: 0.28rem;
            color: #00d094;
            font-weight: bolder;
            display: inline-block;
            width: 0.06rem;
            height: 0.28rem;
            background: #00d094;
            margin-right: 0.2rem;
            vertical-align: middle;
        }
        .title{
            display: inline-block;
            font-size: 0.28rem;
        }
    }
    .userApp{
        width: 6.9rem;
        height: 1.8rem;
        border-radius: 0.1rem;
        background: #fff;
        margin-bottom: 0.3rem;
        .van-col{
            height: 1.8rem;
            text-align: center;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
        .icon{
            height: 0.66rem;
            background: url('http://tdream.antit.top/image/join.png') no-repeat center center / 0.6rem 0.66rem;
            margin-top: 0.33rem;
            margin-bottom: 0.2rem;
        }
        .icon_dream{
            background: url('https://tdream.antit.top/XMXICON.png') no-repeat center center / 0.6rem 0.66rem;
        }
        .icon_clock{
            background: url('https://tdream.antit.top/ActiveSignInOk.png') no-repeat center center / 0.6rem 0.66rem;
        }
        .icon_pack{
            background: url('https://tdream.antit.top/image/RedPackIcon.png') no-repeat center center / 0.66rem 0.66rem;
        }
        .icon_phone{
            background: url('http://tdream.antit.top/image/tele.png') no-repeat center center / 0.48rem 0.66rem;
        }
        .icon_question{
            background: url('http://tinydream.antit.top/TinydreamWeb/images/question.png') no-repeat center center / 0.66rem 0.66rem;
        }
        .icon_cach{
            background: url('http://tdream.antit.top/image/contact.png') no-repeat center center / 0.66rem 0.66rem;
        }
        .icon_auth{
            background: url('http://tdream.antit.top/image/identify.png') no-repeat center center / 0.86rem 0.66rem;
        }
        .icon_notice{
            background: url('http://tdream.antit.top/image/notice.png') no-repeat center center / 0.66rem 0.66rem;
            span{
                position: absolute;
                top: -0.1rem;
                right: 0.7rem;
                height: 0.3rem;
                border-radius: 0.15rem;
                padding: 0 0.1rem;
                line-height: 0.3rem;
                background: #f00;
                color: #fff;
                font-size: 0.2rem;
            }
        }
        .tip{
            font-size: 0.24rem;
            color: #333;
        }
        .line{
            // border-right: 1px solid #eee;
            // border-left: 1px solid #eee;
        }
    }
}
</style>
