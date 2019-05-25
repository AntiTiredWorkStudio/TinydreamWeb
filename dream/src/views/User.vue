<template>
    <div class="users" v-show="user">
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
                        <p class="font-40">{{selfinfo.dayBuy}}</p>
                        <p class="font-24">今日参与</p>
                    </van-col>
                    <van-col span="6" class="middle">
                        <p class="font-40">{{selfinfo.totalJoin}}</p>
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
            <van-row type="flex" align="center" justify="center" class="userApp" style="margin:0">
                <van-col span="8">
                    <router-link to="/dreampool">
                        <div class="icon icon_join"></div>
                        <p class="tip">我的参与</p>
                    </router-link>
                </van-col>
                <van-col span="8" class="line">
                    <router-link to="/dream">
                        <div class="icon icon_dream"></div>
                        <p class="tip">小梦想</p>
                    </router-link>
                </van-col>
                <van-col span="8">
                    <router-link to="/clock">
                        <div class="icon icon_clock"></div>
                        <p class="tip">行动打卡</p>
                    </router-link>
                </van-col>
            </van-row>
            <van-row type="flex" class="userApp">
                <van-col span="8" class="line">
                    <router-link to="/tool">
                        <div class="icon icon_tool"></div>
                        <p class="tip">行动工具</p>
                    </router-link>
                </van-col>
            </van-row>
            <van-col span="24" class="model">
                <span></span>
                <h3 class="title">其他</h3>
            </van-col>
            <van-row type="flex" align="center" justify="center" class="userApp" style="margin:0;">
                <van-col span="8">
                    <div @click="redpack">
                        <div class="icon icon_pack"></div>
                        <p class="tip">梦想红包</p>
                    </div>
                </van-col>
                <van-col span="8" class="line">
                    <router-link to="/phone">
                        <div class="icon icon_phone"></div>
                        <p class="tip">手机号管理</p>
                    </router-link>
                </van-col>
                <van-col span="8">
                    <router-link to="/auth">
                        <div class="icon icon_auth"></div>
                        <p class="tip">实名认证</p>
                    </router-link>
                </van-col>
            </van-row>
            <van-row type="flex" align="center" justify="center" class="userApp">
                <van-col span="8">
                    <router-link to="/notice">
                        <div class="icon icon_notice" style="position:relative"></div>
                        <p class="tip">系统通知</p>
                    </router-link>
                </van-col>

                <van-col span="8" class="line">
                    <router-link to="/cach">
                        <div class="icon icon_cach"></div>
                        <p class="tip">联系客服</p>
                    </router-link>
                </van-col>
                <van-col span="8">
                    <router-link to="/question">
                        <div class="icon icon_question"></div>
                        <p class="tip">新手指引</p>
                    </router-link>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    name:'user',
    data () {
        return {
            selfinfo:'',//个人信息,
            clock:'',//打卡信息
            headicon:'',//头像样式
            cAttendence:'',
            cPerson:'',
            conday:'',
            user:false,//是否显示用户页面
        }
    },
    created(){
        this.GetSelfInfo(this)
    },
    methods:{
        /**
         * @params self vue实例对象
         */
        GetSelfInfo(self){
            TD_Request('us','selfinfo',{uid:self.$store.state.uid},function(code,data){
                self.headicon = {
                    background:'url('+data.selfinfo.headicon+') no-repeat center center / 1.32rem 1.32rem'
                }
                console.log(data);
                self.selfinfo = data.selfinfo;
                if(data.total['SUM(`alrday`)'] == null){
                    data.total['SUM(`alrday`)'] = 0;
                }
                if(data.total['SUM(`conday`)'] == null){
                    data.total['SUM(`conday`)'] = 0;
                }
                self.cAttendence = data.total['SUM(`alrday`)'];
                self.conday = data.total['SUM(`conday`)'];
                
                self.user = true;
                
            },function(code,data){
                console.log(data)
            })
        },
        record(){
            this.$router.push('/record')
        },
        redpack(){
            this.$dialog.alert({
                title:'系统提示',
                message:'红包功能正在更新中，敬请期待...'
            })
        }   
    }
}
</script>

<style lang='less' scoped>
.user{
    width: 6.9rem;
    margin: 0.3rem auto;
    padding-bottom: 1.29rem;
    background: #fff;
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
        .icon_tool{
            background: url('https://tdream.antit.top/190523_01.png') no-repeat center center / 0.6rem 0.66rem;
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
