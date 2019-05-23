<template>
    <div class="question">
        <van-tabs v-model="active" @change="onChange" color="#00d094" active-title-color="#00d094">
            <van-tab title="梦想互助">
                <div class='question_list' v-for="(list,index) in list" :key="index">
                    <div class='title'>{{list.question}}</div>
                    <span class='info' v-html="list.text"></span>
                </div>
            </van-tab>
            <van-tab title="行动打卡">
                <div class='question_list' v-for="(clock,i) in clock" :key="i">
                    <div class='title'>{{clock.question}}</div>
                    <span class='info' v-html="clock.text"></span>
                </div>
            </van-tab>
        </van-tabs>
        <div class="question_list">
            <p>注：如您还有疑问，欢迎扫码加客服微信详细咨询 </p>
            <img src="https://tdream.antit.top/image/qrcode.jpg" alt="">
            <p class="tip">长按识别二维码</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'question',
    data(){
        return {
            list:'',
            clock:'',
            active:0,
        }
    },
    created(){
        this.get(this,this.active);
    },
    mounted(){
        WebApp.JSAPI.InitShare({
            title:'追梦行动派--新手指引',
            desc:"我刚刚参与了一份小梦想，你也一起来吧！",
            link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=yes&status=guide',
            imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
        });
    },
    methods:{
        get(app,active){
            $.get('data/data.json',function(data){
                console.log(data)
                app.list = data.data;
                app.clock = data.clock;
            })
        },
        onChange(index,title){
            if(index == 0){
                this.list = '';
                this.get(this,index);
            }else{
                this.clock = '';
                this.get(this,index);
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .question{
        width:100%;
        background: #fff;
        .question_list{
            width: 6.90rem;
            margin: 0 auto;
           border-bottom: 0.02rem solid #ddd;
            padding-top: 0.30rem;
            .title{
                font-size: 0.32rem;
                padding-bottom: 0.30rem;
            }
            .info{
                display: inline-block;
                text-indent: 2em;
                font-size: 0.26rem;
                color: #999;
                padding-bottom: 0.30rem;
            }
        }
        p{
            text-align: center;
            font-size: 0.28rem;
            color: #333;
            margin-top: 0.3rem;
        }
        img{
                width: 50%;
                height: 50%;
                position: relative;
                transform: translateX(-50%);
                left: 50%;
            }
            .tip{
                font-size: 0.36rem;
                color: #999;
                text-align: center;
            }
    }
</style>
