<template>
    <div class="phone">
        <div class="main">
            <h3>需要绑定的手机号</h3>
            <p class="tip">{{tip}}</p>
            <p class="phoneNum">
                <van-field v-model="phoneNum" placeholder="请输入手机号" @focus="onFocus">
                    <van-icon slot="left-icon" name="http://tdream.antit.top/image/tele.png"></van-icon>
                </van-field>
            </p>
            <p class="code">
                <van-password-input
            :value="code"
            info="请输入短信验证码"
            :mask="false"
        />
            </p>
            <div class="btn">
                <yd-sendcode
                    v-model="start"
                    @click.native="sendCode"
                    second="60"
                    init-str="获取短信验证码"
                    run-str="{%s}秒后重新获取"
                    reset-str="重新获取"
                    size="large"
                    type="primary"
                    storage-key="dream"
            ></yd-sendcode>
            </div>
        </div>
        <van-number-keyboard
            :show="show"
            theme="custom"
            extra-key="."
            :close-button-text="successText"
            @input="onInput"
            @delete="onDelete"
            @close = closeBtn(successText)
        />
    </div>
</template>

<script>
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
export default {
    name:'phone',
    data () {
        return {
            show:true,//是否显示键盘,
            phoneNum:'',
            tip:'',
            start:false,
            isdisable:true,
            code:'',
            phone:'',
            successText:'下一步'
        }
    },
    created(){
        var app = this;
        TD_Request('va','pbind',{uid:app.$store.state.uid},function(code,data){
            if(data.tele != ''){
                app.tip = '当前绑定的手机号为'+data.tele
            }else{
                app.tip = '您当前还没绑定手机'
            }
        },function(code,data){
            console.log(data)
        })
    },
    methods:{
        onInput(val){
            console.log(val)
            this.phoneNum += val;
            this.code += val
        },
        onDelete(){
            this.phoneNum = this.phoneNum.slice(0, this.phoneNum.length - 1);
            this.code = this.code.slice(0,this.code.length-1)
        },
        onFocus(){
            document.activeElement.blur();
        },
        sendCode(){
            if(this.phoneNum == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'手机号不能为空'
                })
            }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phoneNum))){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'手机号不合法'
                })
            }else{
                this.start = true;
                this.phone = this.phoneNum;
                this.tip = '您当前带绑定手机号为'+this.phone;
                $('.phoneNum').hide()
                $('.code').show();
                this.code = ''
                this.sendcode(this)
            }
        },
        sendcode(app){
            TD_Request('va','gcode',{tele:app.phone},function(code,data){
                console.log(data)
                app.$toast.success('发送成功')
            },function(code,data){
                console.log(data)
            })
        },
        bind(app){
            TD_Request('va','bind',{uid:app.$store.state.uid,tele:app.phone,code:app.code},function(code,data){
                console.log(data)
                app.$toast.success('绑定成功')
                app.$router.push('/')
            },function(code,data){
                app.$toast.fail('绑定失败')
            })
        },
        closeBtn(msg){
            if(msg == '下一步'){
                this.code = '';
                this.successText = '完成'
                console.log(this.successText)
                if(this.start == false){
                    this.sendCode(this)
                }
            }else if(this.successText == '完成'){
                this.show = false;
                this.bind(this);
            }
        }
    },
    watch:{
        phoneNum(data){
            if(data.length > 11){
                this.phoneNum = this.phoneNum.substr(0,11);
            }
        },
        code(data){
            if(data.length == 6 && this.successText == '完成'){
                this.bind(this)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    h3{
        margin-top: 0.8rem;
        text-align: center;
        font-size: 0.36rem;
        margin-bottom: 0.2rem;
    }
    .tip{
        font-size: 0.3rem;
        color: #bababa;
        text-align: center;
        margin-bottom: 1rem;
    }
    .phoneNum{
        width: 6.3rem;
        margin: 0 auto;
        .van-field{
            padding-left: 0;
        }
    }
    .btn{
        width: 6.3rem;
        margin: 0 auto;
    }
    .code{
        display: none;
    }
</style>
