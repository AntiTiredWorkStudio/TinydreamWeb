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
            :mask="true"
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
            ></yd-sendcode>
            </div>
        </div>
        <van-number-keyboard
            :show="show"
            theme="custom"
            extra-key="."
            close-button-text="完成"
            @input="onInput"
            @delete="onDelete"
        />
    </div>
</template>

<script>
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
            phone:''
        }
    },
    mounted(){
        
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
            },function(code,data){
                console.log(data)
            })
        }
    },
    watch:{
        phoneNum(data){
            if(data.length > 11){
                this.phoneNum = this.phoneNum.substr(0,11);
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
        border-bottom: 1px solid #00d094;
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
