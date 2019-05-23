<template>
    <div class="toollist">
        <div class="list">
            <van-col span="24" style="margin-bottom:0.2rem">
                <div class="topbar" @click.stop="change">
                    <div class="bar">
                        <van-col style="text-align:left" span="12">
                            <span>筛选</span>
                        </van-col>
                        <van-col span="12" style="font-size:0.28rem;text-align:right">
                            <span class="class">{{category}}</span>
                            <van-icon name="arrow-down"></van-icon>
                        </van-col>
                    </div>
                    <ul>
                        <li :class="index == active ? 'active' : ''" class="classList" @click.stop="select(index,list)" v-for="(list,index) in classList" :key="index">{{list}}</li>
                    </ul>
                </div>
            </van-col>
            <van-col span="24" style="padding-top:0.8rem">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <div class="tool" v-for="(list,index) in toollist" :key="index">
                        <div class="main">
                            <van-col span="8">
                                <van-icon :name="list.icon" class="icon"></van-icon>
                            </van-col>
                            <van-col span="16">
                                <p class="title">{{list.title}}</p>
                                <p class="desc">{{list.description}}</p>
                                <p class="btn" @click="focuks(list.qrcode)">关 注</p>
                            </van-col>
                        </div>
                    </div>
                </van-list>
                <van-popup v-model="qr" style="background:rgba(0,0,0,0);height:auto">
                    <div class="qrbg">
                        <img :src="qrcode" alt="">
                        <p class="tip">长按二维码关注公众号</p>
                    </div>
                    <p class="close" style="text-align:center">
                        <van-icon name="https://tdream.antit.top/DaKaOKX.png"  @click="close"></van-icon>
                    </p>
                </van-popup>
            </van-col>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
var uid = JSON.parse(GetStorage('userInfo')).openid
export default {
    name:'toollist',
    data () {
        return {
            toollist:[],//工具列表
            category:'',//筛选内容
            classList:'',
            active:-1,
            loading:false,
            finished:false,
            seek:0,
            qr:false,
            qrcode:'',
        }
    },
    created(){
        this.tool(this,this.seek)
    },
    onLoad(){
        this.seek++;
        this.tool(this,this.category,this.seek)
    },
    methods:{
        tool(app,select = '',seek){
            /**
             * @params select 筛选主题
             */
            if(select == ''){
                var data = {uid:uid,catalog:false,seek:seek}
            }else{
                var data = {uid:uid,catalog:false,select:select,seek:seek}
            }
            TD_Request('op','opt',data,function(code,data){
                app.loading = false;
                console.log(data)
                if(data.accounts.data.length == 0){
                    app.finished = true;
                }
                $.each(data.accounts.data,function(index,item){
                    app.toollist.push(item)
                })
                app.classList = data.typelist;
                app.category = data.select;
                if(data.accounts.count == app.toollist.length){
                    app.finished = true;
                }
            },function(code,data){
                console.log(data)
            })
        },
        change(){
            $('ul').slideToggle(100);
            $('.mask').toggle();
        },
        select(index,item){
            console.log(index,item)
            this.active = index;
            this.category = item;
            this.toollist = [];
            $('ul').slideUp(100);
            $('.mask').hide();
            this.seek = 0;
            this.tool(this,this.category,this.seek);
        },
        focuks(qrcode){
            console.log(qrcode)
            this.qr = true;
            this.qrcode = qrcode;
        },
        close(){
            this.qr = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .toollist{
        width: 100%;
        height:100%;
        overflow: hidden;
        .list{
            width: 6.9rem;
            margin: 0.2rem auto 0;
            .topbar{
                background: #fff;
                height: auto;
                border-radius: 0.1rem;
                line-height: 0.86rem;
                position: absolute;
                width: 6.9rem;
                z-index: 999;
                .bar{
                    width: 6.3rem;
                    margin: 0 auto;
                    overflow: hidden;
                    span{
                        font-size: 0.28rem;
                        color: #999;
                    }
                    .class{
                        color: #00d094;
                    }
                }
                ul{
                    display: none;
                }
                .classList{
                    width: 100%;
                    border-top:1px solid #eee;
                    height: 0.85rem;
                    line-height: 0.85rem;
                    text-align: left;
                    width: 6.3rem;
                    margin: 0 auto;
                    font-size: 0.28rem;
                }
                .classList.active{
                    color: #00d094;
                }
            }
            .tool{
                width: 100%;
                height: 2.44rem;
                background: url(https://tdream.antit.top/xdgj_bj.png) no-repeat center center / 6.9rem 2.44rem;
                overflow: hidden;
                .van-list__loading{
                    text-align: left !important;
                }
                .main{
                    width: 6.3rem;
                    margin: 0 auto;
                    padding-top: 0.3rem;
                    .icon{
                        font-size: 1.6rem;
                    }
                    .title{
                        font-size: 0.28rem;
                        margin-bottom: 0.2rem;
                    }
                    .desc{
                        font-size: 0.26rem;
                        color: #999;
                    }
                    .btn{
                        float: right;
                        width: 1.4rem;
                        height: 0.45rem;
                        border-radius: 0.225rem;
                        background: #00d094;
                        color: #fff;
                        text-align: center;
                    }
                }
            }
        }
        .qrbg{
            background: url(https://tdream.antit.top/xdgj_ewmtcbj.png) no-repeat center center / 5.8rem 6rem;
            width:5.8rem;
            height: 6rem;
            position: relative;
            img{
                width:3.72rem;
                height:3.72rem;
                position: absolute;
                top: 0.8rem;
                left: 1.04rem;
            }
            .tip{
                position: absolute;
                bottom: 0.5rem;
                text-align: center;
                font-size: 0.36rem;
                color: #4c4c4c;
                width: 100%;
            }
        }
        .close{
            font-size: 0.88rem;
            margin-top: 0.6rem;
        }
        .mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 998;
            background: rgba(0,0,0,.5);
            display:none;
        }
    }
</style>
