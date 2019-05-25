<template>
    <div class="auth">
        <div class="warp" v-show="ismask">
            <div class="main">
                <van-col span="24" v-show="is_card">
                    <div class="upload">
                        <van-uploader :after-read="onRead" class="read" enctype="multipart/form-data">
                            <van-button type="primary" size="large">拍照识别身份信息</van-button>
                        </van-uploader>
                    </div>
                </van-col>
                <van-col span="24" style="border-bottom:1px solid #eee">
                    <van-col span="6" style="text-align:left">
                        <span class="left">真实姓名</span>
                    </van-col>
                    <van-col span="18" style="text-align:right" class="name">
                        <van-field placeholder="请输入姓名" v-model="realname" class="realname right" style="text-align: right;"/>
                    </van-col>
                </van-col>
                <van-col span="24" style="border-bottom:1px solid #eee">
                    <van-col span="6" style="text-align:left">
                        <span class="left">身份证号</span>
                    </van-col>
                    <van-col span="18" style="text-align:right" class="cardid">
                        <van-field type="number" placeholder="请输入身份证号" v-model="idcard_num" class="realid right" style="text-align: right;"/>
                    </van-col>
                </van-col>
                <van-col span="24" v-show="is_bank">
                    <div class="upload">
                        <van-uploader :after-read="onread" class="read" enctype="multipart/form-data">
                            <van-button type="primary" size="large">拍照识别银行卡信息</van-button>
                        </van-uploader>
                    </div>
                </van-col>
                <van-col span="24" style="border-bottom:1px solid #eee">
                    <van-col span="6" style="text-align:left">
                        <span class="left">银行卡号</span>
                    </van-col>
                    <van-col span="18" style="text-align:right" class="bankid">
                        <van-field type="number" placeholder="请输入银行卡号" v-model="bankcard" class="banid right" style="text-align: right;"/>
                    </van-col>
                </van-col>
                <van-col span="24" style="border-bottom:1px solid #eee">
                    <van-col span="6" style="text-align:left">
                        <span class="left">选择银行</span>
                    </van-col>
                    <van-col span="18" style="text-align:right" class="bank">
                        <van-field placeholder="选择银行" disabled v-model="bank" class="bank right" style="" right-icon="arrow-down" @click-right-icon="Fbank" style="color:#000;"/>
                    </van-col>
                </van-col>
                <van-col span="24" style="border-bottom:1px solid #eee">
                    <van-col span="6" style="text-align:left">
                        <span class="left">选择开户行</span>
                    </van-col>
                    <van-col span="18" style="text-align:right;height:auto" class="openbank">
                        <van-field placeholder="选择开户行" class="bank right" v-model="openbank" right-icon="arrow-down" @click-right-icon="select"/>
                    </van-col>
                </van-col>
                <van-col span="24">
                    <div class="tip">
                        <p class="title">请拍照并上传您的手持身份证正面照片</p>
                        <p class="msg">1.必须本人有效身份证，与基本信息一样</p>
                        <p class="msg">2.请手持身份证正面拍照</p>
                        <p class="msg">3.请确保照片的内容完整并清晰可见</p>
                    </div>
                    <div class="up" style="text-align:center">
                        <van-uploader :after-read="Onread" style="margin:0 auto">
                            <div class="bg"></div>
                        </van-uploader>
                    </div>
                </van-col>
            </div>
        </div>
        <div class="btn">
            <van-button round :type="btnType" size="large" :disabled="isdisable" @click="submit">{{btnTxt}}</van-button>
        </div>
        <van-popup position="bottom" v-model="cityshow">
            <van-area :area-list="areaList" columns-num="2" @confirm="confirm"	@cancel="cancel" />
        </van-popup>
        <van-popup position="bottom" v-model="open">
            <van-picker
                show-toolbar
                title="选择支行"
                :columns="columns"
                @cancel="onCancel"
                @confirm="onConfirm"
            />
        </van-popup>
        <van-popup position="bottom" v-model="isbank">
            <van-picker
                show-toolbar
                title="选择银行"
                :columns="banks"
                @cancel="closebank"
                @confirm="onbank"
            />
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
import areaList from 'vant/packages/area/demo/area.js'
import { ImagePreview } from 'vant';
export default {
    name:'auth',
    data () {
        return {
            ismask:false,//展示实名信息
            realname:'',//姓名
            idcard_num:'',//身份证号
            bankcard:'',//银行卡号
            bank:'',//银行
            openbank:'',//开户行
            is_card:false,//是否展示拍照按钮
            is_bank:false,//是否展示拍照
            areaList:areaList,
            cityshow:false,
            columns:'',//支行地址
            banks:["招商银行","建设银行","交通银行","邮储银行",
"工商银行","农业银行","中国银行","中信银行","光大银行","华夏银行",
"民生银行","广发银行","平安银行","星展银行","恒生银行","渣打银行",
"汇丰银行","东亚银行","花旗银行","浙商银行","恒丰银行","浦东发展银行",
"兴业银行","齐鲁银行","烟台银行","淮坊银行","渤海银行","上海银行",
"厦门银行","北京银行","福建海峡银行","吉林银行","宁波银行","焦作市商业银行",
"温州银行","广州银行","汉口银行","龙江银行","盛京银行","洛阳银行",
"辽阳银行","大连银行","苏州银行","河北银行","杭州银行","南京银行",
"东莞银行","金华银行","乌鲁木齐商业银行","绍兴银行","成都银行","抚顺银行",
"临商银行","宜昌市商业银行","葫芦岛银行","郑州银行","宁夏银行",
"珠海华润银行","齐商银行","锦州银行","徽商银行","重庆银行","哈尔滨银行",
"贵阳银行","西安银行","无锡市商业银行","丹东银行","兰州银行","南昌银行",
"晋商银行","青岛银行","南通商业银行","九江银行","日照银行","鞍山银行",
"秦皇岛银行","青海银行","台州银行","盐城银行","长沙银行","赣州银行",
"泉州银行","营口银行","富滇银行","阜新银行","嘉兴银行","廊坊银行",
"泰隆商业银行","内蒙古银行","湖州银行","沧州银行","广西北部湾银行",
"包商银行","威海商业银行","攀枝花市商业银行","绵阳市商业银行",
"泸州市商业银行","三门峡银行","邢台银行","商丘市商业银行",
"安徽省农村信用社","江西省农村信用社","湖南农村信用社"],//银行名称
            open:false,
            isbank:false,
            fileObj:'',//上传的文件对象
            uploadData:'',//上传的所需参数
            isdisable:false,//是否禁用按钮
            btnType:'primary',//按钮类型
            btnTxt:'提交审核',//按钮文字
            src:'',//本地查看
        }
    },
    created(){
        this.isauth(this)
    },
    methods:{
        onRead(file){
            var app = this;
            console.log(file)
            var fromdata = new FormData();
            fromdata.append('file',file.file)
            this.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'识别中...'
            })
            $.ajax({
                url:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/php/token.php',
                data:fromdata,
                type:'post',
                processData:false,
                contentType:false,
                success:function(data){
                    console.log(data);
                    var obj = typeof data == 'object' ? data : eval("("+data+")");
                    if(obj.image_status == 'normal'){
                        app.realname = obj.words_result['姓名']['words'];
                        app.idcard_num = obj.words_result['公民身份号码']['words'];
                        app.$toast.clear();
                    }else if(obj.image_status == 'non_idcard'){
                        app.$toast.clear();
                        app.$dialog.alert({
                            title:'温馨提示',
                            message:'您上传的图片中不包含身份证'
                        }).then(()=>{
                            app.$router.replace('/refesh')
                        })
                    }else if(obj.image_status == 'reversed_side'){
                        app.$dialog.alert({
                            title:'温馨提示',
                            message:'请上传身份证正面图片进行识别'
                        }).then(()=>{
                            app.$router.replace('/refesh')
                        })
                    }else if(obj.image_status == 'blurred'){
                        app.$dialog.alert({
                            title:'温馨提示',
                            message:'请上传清晰的身份证图片'
                        }).then(()=>{
                            app.$router.replace('/refesh')
                        })
                    }else if(obj.image_status == 'other_type_card'){
                        app.$dialog.alert({
                            title:'温馨提示',
                            message:'请上传身份证进行识别'
                        }).then(()=>{
                            app.$router.replace('/refesh')
                        })
                    }else if(obj.image_status == 'over_exposure'){
                        app.$dialog.alert({
                            title:'温馨提示',
                            message:'您的身份证内容不清晰'
                        }).then(()=>{
                            app.$router.replace('/refesh')
                        })
                    }
                }
            })
        },
        onread(file){
            console.log(file)
            var app = this;
            console.log(file)
            var fromdata = new FormData();
            fromdata.append('file',file.file)
            this.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'识别中...'
            })
            $.ajax({
                url:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/php/bank.php',
                data:fromdata,
                type:'post',
                processData:false,
                contentType:false,
                success:function(data){
                    console.log(data);
                    var obj = typeof data == 'object' ? data : eval("("+data+")");
                    console.log(obj)
                    app.bankcard = obj.result.bank_card_number
                    app.bank = obj.result.bank_name
                    app.$toast.clear();
                }
            })
        },
        Onread(file){
            console.log(file)
            this.fileObj = file.file;
            this.src = file.content;
            $('.up').html('<div class="bg" style="width: 4.3rem;height: 3.26rem;margin: 0 auto;background: url('+file.content+') no-repeat center center / 4.3rem 3.26rem;"></div>').click(function(){
                ImagePreview([file.content])
            });
        },
        // 选择支行
        select(){
            if(this.bank != ''){
                this.cityshow = true;
            }else{
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请先填写银行'
                })
            } 
        },
        // 选择银行
        Fbank(){
            if(this.bankcard != ''){
                this.isbank = true;
            }else{
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请先填写银行卡号'
                })
            }
        },
        // 选择地区
        confirm(data){
            console.log(data);
            var app = this;
            $.post('http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/php/address.php',{bank:app.bank,city:data[1].name},function(data){
                console.log(data);
                var dataObj = typeof data == 'object' ? data : eval("("+data+")");
                var openbank = [];
                $.each(dataObj.results,function(index,item){
                    var address = item.address + item.name;
                    openbank.push(address);
                })
                app.columns = openbank;
            })
            this.cityshow = false;
            this.open = true;
        },
        cancel(){
            this.cityshow = false;
        },
        // 选择支行
        onConfirm(item,index){   
            this.openbank = item;
            this.open = false;
        },
        onCancel(index){
            this.open = false;
        },
        // 选择银行
        onbank(item,index){
            console.log(index)
            this.bank = item;
            this.isbank = false;
        },
        closebank(index){
            this.isbank = false;
        },
        // 验证是否实名认证
        isauth(app){
            TD_Request('us','rnamegx',{uid:app.$store.state.uid},function(code,data){
                console.log(data)
                if(data.realName[app.$store.state.uid].state == 'NONE'){
                    app.btnTxt = '提交审核';
                    app.btnType = 'primary';
                    app.is_card = true;
                    app.is_bank = true;
                    app.ismask = true;
                }else if(data.realName[app.$store.state.uid].state == 'SUBMIT'){
                    app.btnTxt = '审核中';
                    app.btnType = 'warning';
                    app.isdisable = true;
                    app.is_card = false;
                    app.is_bank = false;
                    $('.name').html('<span>'+data['realName'][app.$store.state.uid].realname+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.cardid').html('<span>'+data['realName'][app.$store.state.uid].icardnum+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.bankid').html('<span>'+data['realName'][app.$store.state.uid].ccardnum+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.bank').html('<span>'+data['realName'][app.$store.state.uid].bank+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.openbank').html('<span>'+data['realName'][app.$store.state.uid].openbank+'</span>').css({
                        display:'inline-block',
                        height:'auto',
                        'line-height':'1.5',
                        paddint:'0.2rem 0 0',
                        'text-align':'left'
                    });
                    $('.up').html('<div class="bg" style="width: 4.3rem;height: 3.26rem;margin: 0 auto;background: url('+data['realName'][app.$store.state.uid].icardfurl+') no-repeat center center / 4.3rem 3.26rem;"></div>').click(function(){
                        ImagePreview([data['realName'][app.$store.state.uid].icardfurl])
                    });
                    app.ismask = true;
                }else if(data.realName[app.$store.state.uid].state == 'SUCCESS'){
                    app.btnTxt = '审核通过';
                    app.btnType = 'primary';
                    app.isdisable = true;
                    $('.name').html('<span>'+data['realName'][app.$store.state.uid].realname+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.cardid').html('<span>'+data['realName'][app.$store.state.uid].icardnum+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.bankid').html('<span>'+data['realName'][app.$store.state.uid].ccardnum+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.bank').html('<span>'+data['realName'][app.$store.state.uid].bank+'</span>').css({
                        display:'inline-block',
                        height:'0.88rem',
                        'line-height':'0.88rem'
                    });
                    $('.openbank').html('<span>'+data['realName'][app.$store.state.uid].openbank+'</span>').css({
                        display:'inline-block',
                        height:'auto',
                        'line-height':'1.5',
                        paddint:'0.2rem 0 0',
                        'text-align':'left'
                    });
                    $('.up').html('<div class="bg" style="width: 4.3rem;height: 3.26rem;margin: 0 auto;background: url('+data['realName'][app.$store.state.uid].icardfurl+') no-repeat center center / 4.3rem 3.26rem;"></div>').click(function(){
                        ImagePreview([data['realName'][app.$store.state.uid].icardfurl])
                    });
                    app.ismask = true;
                    app.is_card = false;
                    app.is_bank = false;
                }else if(data.realName[app.$store.state.uid].state == 'FAILD'){
                    app.$dialog.alert({
                        title:'审核结果',
                        message:'您的实名认证未通过审核，请重新填写并提交'
                    }).then(()=>{
                        app.btnTxt = '提交审核';
                        app.btnType = 'primary';
                        app.is_card = true;
                        app.is_bank = true;
                        app.ismask = true;
                    })
                }
            },function(code,data){
                if(code == 12){
                    app.is_card = true;
                    app.is_bank = true;
                    app.ismask = true;
                    app.Init(app)
                }
            })
        },
        // 发起实名认证
        Init(app){
            TD_Request('us','rnamesx',{uid:app.$store.state.uid},function(code,data){
                console.log(data)
                app.uploadData = data;

            },function(code,data){
                console.log(data);
                if(code == 37){
                    app.$dialog.alert({
                        title:'温馨提示',
                        message:'您已完成实名认证'
                    })
                }
            })
        },
        // 上传身份证
        upload(app,updata){
            WebApp.UploadWithSDK(updata.token,updata.upurl,app.fileObj,updata.filename.id_f,function(res){
                app.matchid(app)
            })
        },
        // 提交
        submit(){
            if(this.realname == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请填写您的姓名'
                })
            } else if(this.idcard_num == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请填写您的身份证号'
                })
            }else if(this.bankcard == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请填写您的银行卡号'
                })
            }else if(this.bank == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请填写发卡行'
                })
            }else if(this.openbank == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请填写开户行'
                })
            } else if(this.src == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'请上传手持身份证'
                })
            } else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(this.idcard_num)) {
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'身份证号不合法'
                })
            } else {
                this.upload(this,this.uploadData);
            }
        },
        matchid(app){
            TD_Request('us','rnamefx',{uid:app.$store.state.uid,realname:app.realname,ccardnum:app.bankcard,icardnum:app.idcard_num,bank:app.bank,openbank:app.openbank},function(code,data){
                console.log(data)
                app.$toast.success('提交成功');
                setTimeout(()=>{
                    app.$router.push('/')
                },1000)
            },function(code,data){
                app.$toast.fail('提交失败');
                setTimeout(()=>{
                    app.$router.replace('/refesh')
                },1000)
            })
        }
    },
    watch:{
        realname(data){
            var str = data.replace(/\ +/g,"");
            var str = str.replace(/[\r\n]/g,"");
            this.realname = str;
        },
        idcard_num(data){
            var str = data.replace(/\ +/g,"");
            var str = str.replace(/[\r\n]/g,"");
            if(str.length == 18){
                this.idcard_num = str.substr(0,18);
            }
        },
        bankcard(data){
            var str = data.replace(/\ +/g,"");
            var str = str.replace(/[\r\n]/g,"");
            this.bankcard = str;
        },
        openbank(data){
            var str = data.replace(/\ +/g,"");
            var str = str.replace(/[\r\n]/g,"");
            this.openbank = str;
        }
    }
}
</script>

<style lang="less" scoped>
    .auth{
        width: 100%;
        background: #f0f0f0;
        .warp{
            background: #fff;
            overflow: hidden;
            .main{
                width: 6.9rem;
                margin: 0 auto;
                padding-top: 0.45rem;
                padding-bottom: 0.3rem;
                .left{
                    font-size: 0.3rem;
                    color: #4c4c4c;
                    display: inline-block;
                    height: 0.88rem;
                    line-height: 0.88rem;
                }
                .right{
                    font-size: 0.3rem;
                    color: #b2b2b2;
                    .van-field__control{
                        text-align: right;
                    }
                }
                .upload{
                    height: 1rem;
                    .read{
                        width: 100%;
                    }
                }
                .tip{
                    margin-bottom: 0.4rem;
                    .title{
                        font-size: 0.3rem;
                        margin-top: 0.3rem;
                        color: #4c4c4c;
                    }
                    .msg{
                        font-size: 0.24rem;
                        color: #b2b2b2;
                    }
                }
                .bg{
                    width: 4.3rem;
                    height: 3.26rem;
                    margin: 0 auto;
                    background: url(http://tdream.antit.top/image/idf.png) no-repeat center center / 4.3rem 3.26rem;
                }
            }
        }
        .btn{
            text-align: center;
            margin: 1rem auto 0;
            width: 6.6rem;
            padding-bottom: 0.4rem;
        }
        .van-field__control:disabled{
            color:#000;
        }
    }
</style>
