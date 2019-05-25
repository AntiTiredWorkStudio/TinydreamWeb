<template>
    <div class="add_main">
        <van-popup class="add_popup" v-model="isshow" position="bottom">
            <div class="close">
                <span><van-icon class="cls" name="close" @click="close"></van-icon></span>
            </div>
            <div class="main">
                <p class="title">梦想标题(20字以内)</p>
                <p class="tip">梦想类型只支持:创业/投资/做生意</p>
                <div class="ptitle">
                    <van-field placeholder="请输入梦想标题" v-model="dtitle"></van-field>
                </div>
                <p class="title">梦想简介(140字以内)</p>
                <div class="pinfo ptitle">
                    <van-field placeholder="请输入梦想简介" v-model="dinfo" type="textarea" autosize rows="3"></van-field>
                </div>
                <div class="up" :style="style">
                    <p class="title">上传打印盖章的<span style="font-size:0.26rem;">《幸运者梦想互助金申请公函》</span></p>
                    <p class="tip" style="color:#000">点击下载<span style="font-size:0.26rem;color:#00d094" @click="download">《幸运者梦想互助金申请公函》</span></p>
                    <div class="upload">
                        <van-uploader :after-read="onRead" class="ptitle">
                            <van-button type='primary'>{{btnTxt}}</van-button>
                        </van-uploader>
                        <div class="img" v-show="src == '' ? false : true">
                            <img :src="src" alt="">
                            <span @click="lookpic">查看大图</span>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <p>我承诺:</p>
                    <p class="txt">
                        我填写的梦想是本人的真实梦想，不存在任何虚构、隐瞒及伪造的情况，并积极配合平台的的审核和采访报道。如违背上述说明，愿意承担全部法律责任，并不能获得幸运者梦想互助金！
                    </p>
                </div>
                <div class="subbtn">
                    <van-button type="primary" size="large" @click="submit" round>提 交</van-button>
                </div>
                <div class="check">
                    <van-checkbox v-model="checked" checked-color="#00d094">
                        <p style="font-size:0.26rem;color:#999">阅读并同意 <router-link to="/agree" style="color:#00d094" tag="span">《梦想互助参与协议》</router-link></p>
                    </van-checkbox>
                </div>
            </div>
        </van-popup>
        <van-popup v-model="tipshow" class="pop" :lock-scroll="true">
            <div class="bg">
                <div class="title">资料提交成功</div>
                <div class="tip">{{Tip}}</div>
                <div class="btn">
                    <van-button type='primary' round size='large' @click="tclose">我知道了</van-button>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
WebApp.InitUpload();
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
import { ImagePreview } from 'vant';

export default {
    name:'add',
    props:{
        show:{
            type:[Boolean],
        },
        state:{
            type:[String],
        },
        did:{
            type:[String],
        },
    },
    data(){
        return {
            dtitle:'',//梦想标题
            dinfo:'',//梦想简介
            checked:true,//默认选中
            isshow:false,
            status:'',//是否为完善梦想
            style:{display:'none'},//是否显示上传界面
            src:'',//本地 url,
            tdid:'',//梦想 id
            DataObj:'',//提交审核的数据对象
            tipshow:false,//资料提交成功弹窗
            btnTxt:'点击上传',//上传按钮文案
            Tip:'',//弹窗文案
            fileObj:'',//上传的文件对象
        }
    },
    created(){
        if(this.state == 'all'){
            this.style.display = 'block'
        } else {
            if(this.state == 'add'){
                this.status = 'add'
            }
            this.style.display = 'none'
        }
    },
    methods:{
        onRead(file){
            console.log(file)
            this.fileObj = file.file
            this.src = file.content;
        },
        // 关闭弹窗
        close(){
            RemoveStorage('type')
            this.$router.replace('/refesh');
        },
        // 准备编辑梦想
        ready(app){
            if(app.state == 'all'){
                var json = {uid:app.$store.state.uid,did:app.tdid,state:app.state}
            }else{
                var json = {uid:app.$store.state.uid,did:app.tdid}
            }
            TD_Request('dr','gdream',json,function(code,data){
                console.log(data)
                app.DataObj = data;
                app.dtitle = data.dream.title
                app.dinfo = data.dream.content
            },function(code,data){
                console.log(data)
            })
        },
        // 提交审核
        submit(){
            console.log(this.checked)
            var app = this;
            console.log(this.status)
            if(this.dtitle == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请填写梦想标题'
                }).then(()=>{
                    return;
                })
            }else if(this.dinfo == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请简述下您的梦想吧！'
                }).then(()=>{
                    return;
                })
            }else if(this.state == 'all' && this.src == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请上传《幸运者梦想互助金申请公函》！'
                }).then(()=>{
                    return;
                })
            }else if(this.checked == false){
                this.$dialog.confirm({
                    title:' 阅读协议',
                    message:'继续提交系统将视为您已同意协议内容并且愿意承担相应的法律责任，是否继续提交',
                    cancelButtonText:'不提交',
                    confirmButtonText:'继续提交',
                    confirmButtonColor:'#00d094',
                }).then(()=>{
                    console.log(this)
                    console.log(this.status)
                    if(this.status == 'add'){
                        this.checked = true;
                        this.add(this);
                    }else if(this.state == 'all'){
                        this.checked = true;
                        this.upload(this);
                    }else{
                        this.checked = true;
                        this.gdream(this);
                    }
                           
                })
            }else if(this.state == 'all'){
                console.log(this.status)
                this.upload(this)
            }else{
                console.log(this.status)
                if(this.status == 'add'){
                    this.add(this);
                }else{
                    this.gdream(this);
                }
            }
        },
        // 修改梦想
        gdream(app){
            TD_Request('dr','gedit',{uid:app.$store.state.uid,did:app.did,contentList:JSON.stringify({title:app.DataObj.dream.title,content:app.DataObj.dream.content,videourl:app.DataObj.dream.videourl})},function(code,data){
                console.log(data)
                if(app.status != 'all'){
                    app.$toast.success('修改成功');
                    app.isshow = false;
                    app.$router.replace('/refesh')
                }
            },function(code,data){
                console.log(data)
                if(code == 44){
                    app.$toast.success('无内容变更');
                    app.isshow = false;
                    app.$router.replace('/refesh')
                }else{
                    app.$toast.fail('提交失败');
                }
            })
        },
        // 上传公函
        upload(app){
            WebApp.UploadWithSDK(app.DataObj.upload.uptoken,app.DataObj.upload.upurl, app.fileObj,app.DataObj.upload.filename,function(res){
                console.log(res);
                app.$dialog.confirm({
                    title:'提交审核',
                    message:'是否提交审核',
                }).then(()=>{
                    app.serv(app)
                }).catch(() => {
                    app.$router.replace('/refesh')
                })
            })  
        },
        // 提交审核
        serv(app){
            TD_Request('ds','sver',{uid:app.$store.state.uid,did:app.tdid},function(code,data){
                console.log(data)
                app.Tip = '平台将在48小时内进行审核，请您尾号为'+data.tele.substr(7,11)+'的手机保持畅通，我们工作人员会联系您'
                app.$toast.success('提交成功');
                setTimeout(()=>{
                    app.tipshow = true
                },1000)
            },function(code,data){
                app.$toast.fail('提交失败');
                app.$router.replace('/refesh')
            })
        },
        // 添加梦想
        add(app){
            TD_Request('dr','dedit',{uid:app.$store.state.uid,title:app.dtitle,content:app.dinfo},function(code,data){
                console.log(data)
                app.$toast.success('添加成功');
                app.$router.replace('/refesh')
            },function(code,data){
                console.log(data)
            })
        },
        tclose(){
            this.tipshow = false;
            this.$router.push('/dream')
        },
        // 查看图片
        lookpic(){
            console.log(ImagePreview)
            ImagePreview([this.src])
        },
        download(){
            ImagePreview(['http://tdream.antit.top/image/transactionform.jpg'])
        }
    },
    watch:{
        show(data){
            this.isshow = data;
        },
        dtitle(data){
            var str = data.replace(/\ +/g,"");
            var str = str.replace(/[\r\n]/g,"");
            if(str.length > 20){
                this.dtitle = str.substr(0,20);
            }else{
                this.dtitle = str;
            }
        },
        dinfo(data){
            console.log(data)
            var str = data.replace(/\ +/g,"");
            var str = str.replace(/[\r\n]/g,"");
            if(str.length > 140){
                this.dinfo = str.substr(0,140);
            }else{
                this.dinfo = str;
            }
        },
        state(data){
            console.log(this.state)
            this.status = data;
            console.log(data)
        },
        did(data){
            console.log(data)
            this.tdid = data;
            if(data != ''){
                this.ready(this)
            }
        },
    }
}
</script>

<style lang="less" scoped>
     .add_popup{
        width: 100%;
        background: #fff;   
        .main{
            width: 6.9rem;
            margin: 0 auto;
            .title{
                padding-top: 0.4rem;
                font-size: 0.36rem;
            }
            .tip{
                font-size: 0.26rem;
                color: #999;
            }
            .ptitle{
                margin-top: 0.2rem;
                height: 0.88rem;
                box-shadow: 0.02rem 0rem 0.2rem 0.02rem rgba(0, 54, 208, .05), -0.02rem 0 0.2rem 0.02rem rgba(0, 54, 208, .05), 0 0.02rem 0.2rem 0.02rem rgba(0, 54, 208, .05), 0 -0.02rem 0.2rem 0.02rem rgba(0, 54, 208, .05);
                border-radius: 0.1rem
            }
            .pinfo{
                height: auto;
            }
            .up{
                .img{
                    text-align: center;
                    width: 2rem;
                    height: 2rem;
                    border:1px solid #eee;
                    margin: 0 auto;
                    img{
                        width: 1rem;
                        height: 1.41rem;
                        position: relative;
                        display: block;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    span{
                        text-decoration: underline;
                        font-size: 0.26rem;
                        color: #00d094;
                    }
                }
                .upload{
                    text-align: center;
                    margin-bottom: 0.2rem;
                }
            }
            .area{
                margin-top: 1.2rem;
                font-size: 0.26rem;
                color: #999;
                .txt{
                    text-indent: 2em;
                }
            }
            .check{
                text-align: center;
                padding-bottom: 0.5rem;
            }
            .subbtn{
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
            }
        }
        .close{
            padding-top: 0.2rem;
            border-bottom: 1px solid #eee;
            line-height: 0.5rem;
            text-align: right;
            span{
                font-size: 0.7rem;
            }

        }
    }
    .pop{
            background: rgba(0,0,0,0,);
            .bg{
                width: 5.10rem;
                min-height: 3.26rem;
                padding-top: 2.64rem;
                background: url(http://tdream.antit.top/image/detial.png) no-repeat;
                background-size: 5.10rem 6.00rem;
                padding-bottom: 0.30rem;
                .title{
                    margin-top: 0.30rem;
                    text-align: center;
                    font-size: 0.28rem;
                    margin-bottom: 0.10rem;
                }
                .tip{
                    width: 3.66rem;
                    margin: 0 auto;
                    font-size: 0.22rem;
                    text-align: center;
                    color: #808080;
                    margin-bottom: 0.26rem;
                    line-height: 0.40rem;
                }
                .btn{
                    width: 4rem;
                    margin: 0 auto;
                }
            }
        }
</style>
