<template>
    <div class="shenhe">
        <van-row type="flex" align="center" justify="center">
            <van-col span="8" class="col">
                <van-button type="warning" @click="audit('no')">待审核</van-button>
            </van-col>
            <van-col span="8" class="col">
                <van-button type="primary" @click="audit('nosub')">未提交</van-button>
            </van-col>
            <van-col span="8" class="col">
                <van-button type="default" class="bad" @click="audit('faild')">已失效</van-button>
            </van-col>
        </van-row>
        <div class="main">
            <van-row type="flex"  align="center" class="list" justify="center">
                <van-button type="primary" plain class="btn" @click="lookAudit">
                    <van-row class="lh" align="left" type="flex">
                        <van-col span="8" class="info title" style="text-align:left">20190302期</van-col>
                        <van-col span="8" class="info sh_state" style="color:#ff976a">待审核</van-col>
                        <van-col span="8" class="info dk_state" style="color:red">未打款</van-col>
                    </van-row>
                    <van-row class="lh" align="left" type="flex">额尔敦其木格（Qimuge fashion）暮色微凉城</van-row>
                    <van-row class="lh" align="left" type="flex">133333333333</van-row>
                    <van-row class="lh" align="left" type="flex">金额：500万</van-row>
                </van-button>
            </van-row>
            <van-row type="flex" align="center" class="list" justify="center">
                <van-button type="primary" plain class="btn">
                    <van-row class="lh" align="left" type="flex">
                        <van-col span="8" class="info title" style="text-align:left">20190302期</van-col>
                        <van-col span="8" class="info sh_state" style="color:#07c160">未提交</van-col>
                        <van-col span="8" class="info dk_state" style="color:red">未打款</van-col>
                    </van-row>
                    <van-row class="lh" align="left" type="flex">额尔敦其木格（Qimuge fashion）暮色微凉城</van-row>
                    <van-row class="lh" align="left" type="flex">133333333333</van-row>
                    <van-row class="lh" align="left" type="flex">金额：500万</van-row>
                </van-button>
            </van-row>
            <van-row type="flex" align="center" class="list" justify="center">
                <van-button type="primary" plain class="btn">
                    <van-row class="lh" align="left" type="flex">
                        <van-col span="8" class="info title" style="text-align:left">20190302期</van-col>
                        <van-col span="8" class="info sh_state" style="color:#ccc">已失效</van-col>
                        <van-col span="8" class="info dk_state" style="color:red">未打款</van-col>
                    </van-row>
                    <van-row class="lh" align="left" type="flex">额尔敦其木格（Qimuge fashion）暮色微凉城</van-row>
                    <van-row class="lh" align="left" type="flex">133333333333</van-row>
                    <van-row class="lh" align="left" type="flex">金额：500万</van-row>
                </van-button>
            </van-row>
        </div>
        <van-popup v-model="show" style="width:95vw;height:70vw">
            <div class="inner">
                <van-row class="lh" type="flex" align="left">
                    <van-col span="24" class="title">20190303期</van-col>
                </van-row>
                <van-row class="lh" type="flex" align="left">
                    <van-col span="24" class="nickname">额尔敦其木格（Qimuge fashion）暮色微凉城</van-col>
                </van-row>
                <van-row class="lh" type="flex" align="left">
                    <van-col span="24" class="txt number">手机:13333333333</van-col>
                </van-row>
                <van-row class="lh" type="flex" align="left">
                    <van-col span="17" class="txt ID_num">身份证:130111111111111111</van-col>
                    <van-col span="16" class="txt ID_pic">(未提交) 手持身份证照片</van-col>
                </van-row>
                <van-row class="lh" type="flex" align="left">
                    <van-col span="24" class="txt Ic_num">银行卡:130111111111111111111 光大银行 光大银行北京海淀支行</van-col>
                </van-row>
                 <van-row class="lh" type="flex" align="left">
                    <van-col span="18" class="txt Ic_num">梦想:从小区到地铁站附近5公里的出行问题</van-col>
                     <van-col span="5" class="txt ID_pic">梦想内容</van-col>
                </van-row>
                <van-row class="lh" type="flex" align="left">
                    <van-col span="8">
                        <van-checkbox v-model="rn_checked" disabled :checked="true" checked-color="#00d094" class="check">实名认证</van-checkbox>
                    </van-col>
                    <van-col span="8">
                        <van-checkbox v-model="dr_checked" checked-color="#00d094">梦想审核</van-checkbox>
                    </van-col>
                </van-row>
                <van-row class="lh" type="flex" align="center" justify="center" style="padding-top:2vw">
                   <van-button :type="dk" :disabled="disabled">未打款</van-button>
                </van-row>   
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name:'shenhe',
    data () {
        return {
            activeName:[],
            state:0,//模拟打款状态,
            show:false,//弹窗状态,
            rn_checked:true,//实名认证审核状态
            dr_checked:false,//梦想审核状态,
            dk:'warning',//打款状态 primary 为已打款
            disabled:false //已打款为true
        }
    },
    methods: {
        audit(msg){
            if(msg == 'no') {
                // this.$router.push('/shenhe/noAudit');
                // 待审核逻辑
            }else if(msg == 'nosub'){
                // 未提交逻辑
            }else if(msg == 'faild'){
                // 失效的逻辑
            }
        },
        lookAudit(){
            // 此处根据状态写逻辑
            // 此处为模拟逻辑，请根据真实情况进行开发
            this.show = !this.show
            if(this.state == 1){
                this.dk='primary';
                this.disabled = true
            }else{
                this.dk='warning';
                this.disabled = false
            }
        },
        beforeClose(action,done){

        }
    },
}
</script>

<style scoped lang="less"> 
    .shenhe{
        width: 100%;
        background: #fff;
        .col{
            // background: #000;
            text-align: center;
            .bad{
                background-color: #f3f5f8;
            }
        }
        .main{
            background: #fff;
            padding-top: 2vw;
            width: 100%;
            .list{
                padding-bottom: 2vw;
                color: #999;
            }
            .btn{
                height: 28vw;
                width: 92vw;
                .lh{
                    line-height: 1.8;
                    text-align: center;
                    color: #999;
                    .info{
                        text-align: center;
                        color: #999;
                        font-size: 4vw;
                    }
                }
            }
        }
        .inner{
            padding: 2vw;
            .title{
                font-size: 5vw;
                color: #707070;
            }
            .lh{
                line-height: 2;
                .nickname{
                    font-size: 3vw;
                    color: #707070;
                }
                .txt{
                    font-size: 4vw;
                    color:#707070;
                }
                .ID_num{
                    font-size: 3vw;
                }
                .ID_pic{
                    color: #00add9;
                    font-size: 3vw;
                    text-decoration: underline;
                    text-align: right;
                }
                .Ic_num{
                    font-size: 3vw;
                }
            }
        }
    }
</style>
