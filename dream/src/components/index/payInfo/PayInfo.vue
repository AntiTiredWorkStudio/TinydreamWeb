<template>
    <div class="payInfo">
       <div class="info">
            <p class="title">{{pool == '' ? '' : pool.ptitle}}</p>
            <div class="progress">
                <yd-progressbar :progress="pool.cbill / pool.tbill" trail-width="6" stroke-color="#edf0f5" trail-color="#ffc054">
                        <van-col span="24" class="timeouts" v-show="isshow">
                            <van-icon name="clock-o" class="icon_clock"></van-icon>
                            <span>{{timeout == '' ? '' : timeout}}</span>
                        </van-col>
                        <van-col class="current" span="24">
                            <span class="money">{{ pool != '' ? pool.realBill + pool.realUnit : ''}}</span>
                        </van-col>
                        <van-col class="text" span="24">
                            <span>{{pool == '' ? '' : pool.billHint}}</span>
                        </van-col>
                </yd-progressbar>
            </div>
            <div class="payinfo">
                <van-row style="margin-bottom:0.56rem">
                    <van-col span="12">
                        <span class="left">目标金额</span>
                    </van-col>
                    <van-col span="12" class="right">
                        <span class="right tbill">{{pool == '' ? '' : pool.rtbillValue + pool.rtbillUnit}}</span>
                    </van-col>
                </van-row>
                <van-row style="margin-bottom:0.56rem">
                    <van-col span="12" style="text-align:left">
                        <span class="left">份数</span>
                    </van-col>
                    <van-col span="12" class="right">
                        <p>
                            <span class="add btn" @click="add">＋</span>
                            <span style="margin:0 0.3rem;font-size:0.3rem;color:#333">{{count}}</span>
                            <span class="incre btn" @click="incre">－</span>
                        </p>
                    </van-col>
                </van-row>
                <van-row style="margin-bottom:0.56rem">
                    <van-col span="12">
                        <span class="left">{{dream_context}}</span>
                    </van-col>
                    <van-col span="12" class="right">
                        <span class="right">
                            <span id="dream" style="font-size:0.3rem;color:#333" :data-did="did">{{dream}}</span>
                            <van-icon name="arrow" class="arrow" v-if="isArrow" @click="select"></van-icon>
                        </span>
                    </van-col>
                </van-row>
                <van-row>
                    <van-col span="24" style="text-align:center;color:#999;margin-bottom:0.2rem">
                        {{pool == '' ? '' : pool.rubillValue + pool.rubillUnit + ' ' + '结算'}}
                        <span style="font-size:0.36rem;color:#00d094">{{count == '' ? '' : pool.rubillValue * count + '元'}}</span>
                    </van-col>
                </van-row>
                <van-button round size="large" @click="payment(count)" style="background:#00d094;border:none;color:#fff">立即支付</van-button>
            </div>
            <van-actionsheet
                v-model="show"
                :actions="actions"
                cancel-text="取消"
                @select="onSelect"
                @cancel="onCancel"
            />
        </div>
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
    name:'payInfo',
    data () {
        return {
            pool:'',//订单信息,
            isshow:true,//是否显示倒计时
            timeout:this.timeout(),//倒计时
            isArrow:true,//是否显示右箭头图标
            dream_context:'选择梦想',//梦想提示文字
            dream:'',//梦想
            did:'',//梦想 id
            count:1,//购买总份数
            pay:'',//支付的总金额
            show:false,//是否显示上拉菜单
            actions:[],//梦想列表
            type:'',//池子类型
        }
    },
    
    created(){
        if(!ExistStorage('action')){
            this.$router.push('/');
        }else{
            this.type = GetStorage('type')
            RemoveStorage('type')
            if(this.type == 'trade'){
                this.isshow = false;
            }
            this.selectDream(this,this.type);
            this.ord(this)
        }
    },
    methods:{
        // 预订单
        ord(app){
            TD_Request('ds','ord',{action:GetStorage('action')},function(code,data){
                console.log(data)
                DreamPoolAnalysis(data.pool)
                data.pool.order = data.actions
                app.pool = data.pool;
                console.log(app.pool)
            },function(code,data){
                console.log(data)
            })
        },
        // 查找梦想
        selectDream(app,type){
            /**
             * @params app Vue实例对象
             * @parmas type 支付类型
             */
            if(type == 'dream'){
                var did = JSON.parse(GetStorage('action')).buy.dream.did;
                app.dream_context = '选择梦想'
                this.isArrow = true
            }else if(type == 'trade'){
                var did = JSON.parse(GetStorage('action')).buy.dream.tid;
                this.dream_context = '本期项目'
                this.isArrow = false
            }
            TD_Request('dr','gdream',{uid:app.$store.state.uid,did:did},function(code,data){
                console.log(data)
                app.did = type == 'dream' ? data.dream.did : data.dream.tid;
                app.dream = data.dream.title;
            },function(code,data){
                console.log(data)
            })
        },
        // 增加份数
        add(){
            if(this.count >= JSON.parse(GetStorage('action')).buy.dayLim){
                this.count = JSON.parse(GetStorage('action')).buy.dayLim;
            }else{
                this.count++;
            }
        },
        // 减少份数
        incre(){
            if(this.count <= 1){
                this.count = 1;
            }else{
                this.count--;
            }
        },
        // 倒计时
        timeout(){
            var self = this;
            setInterval(function(){
                var dt = parseInt(new Date().getTime() / 1000)
                var timestamp = (parseInt(self.pool.ptime) + parseInt(self.pool.duration)) - dt;
                var h = Math.floor(timestamp / 3600) >= 10 ? Math.floor(timestamp / 3600) : '0' + Math.floor(timestamp / 3600);
                var m = Math.floor(timestamp / 60 % 60) >= 10 ? Math.floor(timestamp / 60 % 60) : '0' + Math.floor(timestamp / 60 % 60);
                var s = Math.floor(timestamp % 60) >= 10 ? Math.floor(timestamp % 60) : '0' + Math.floor(timestamp % 60);
                self.timeout = h + ':' + m + ':' + s;
            },1000)
        },
        // 选择梦想
        select(){
            this.seldream(this)
        },
        // 获取梦想列表
        seldream(app){
            /**
             * app Vue实例对象
             */
            TD_Request('dr','dlist',{uid:app.$store.state.uid},function(code,data){
                console.log(data)
                var dream = [];
                $.each(data.dreams,function(index,item){
                    if(item.state == 'SUBMIT' || item.state == 'FAILED'){
                       dream.push({name:item.title,value:item.did});
                    }
                })
                app.actions = dream;
                app.show = true;
            },function(code,data){
                console.log(data)
            })
        },
        // 上拉菜单选择
        onSelect(item,index){
            console.log(item);
            this.dream = item.name;
            this.did = item.value;
            this.show = false;
        },
        // 准备统一下单
        payment(count){
            /**
             * @params count 购买份数
             */
            // var did = $('#dream').attr('data-did');
            // this.$router.push('/share/'+this.pool.pid+'/'+did+'/'+GetStorage('type'));
            // return;
            this.wxweb(this,this.pool.rubillValue*count*100)
        },
        // 统一下单
        wxweb(app,fee){
            /**
             * @parmas fee 传入后台的金额
             */
            var fee = 0.01 * 100
            TD_Request('ds','wxpayweb',{oid:app.pool.order.pay.oid,bill:fee,uid:app.$store.state.uid},function(code,data){
                console.log(data);
                app.Wake(app,data,fee)
            },function(code,data){
                console.log(data);
            })
        },
        // 唤醒支付
        Wake(app,pdata,fee){
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                "appId":pdata.appId,     //公众号名称，由商户传入     
                "timeStamp":pdata.timeStamp,         //时间戳，自1970年以来的秒数     
                "nonceStr":pdata.nonceStr, //随机串     
                "package":pdata.package,     
                "signType":pdata.signType,         //微信签名方式：     
                "paySign":pdata.paySign //微信签名 
                },function(res){
                    alert(JSON.stringify(res))
                if(res.err_msg == "get_brand_wcpay_request:ok" ){
                // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    app.success(app,fee)    
                } else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                    app.$toast.fail('支付取消')
                }
            });
        },
        // 支付完成
        success(app,fee){
            var action = {};
            action = app.pool.order
            TD_Request('ds','pay',{
                uid:app.$store.state.uid,
                oid:app.pool.order.pay.oid,
                bill:fee,
                pcount:app.count,
                action:JSON.stringify(action),
                did:$('#dream').attr('data-did')
            },function(code,data){
                alert(JSON.stringify(data))
                var did = $('#dream').attr('data-did');
                RemoveStorage('action');
                RemoveStorage('type')
                app.$router.push('/share/'+app.pool.pid+'/'+did+'/'+app.type);
            },function(code,data){
                // alert('UID:'+app.$store.state.uid)
                // alert('OID:'+app.pool.order.oid)
                // alert('BILL:'+fee)
                // alert('PCOUNT:'+app.count)
                // alert('ACTION:'+JSON.stringify(app.pool.order))
                // alert('DID:'+$('#dream').attr('data-did'))
                alert(JSON.stringify(data))
            })
        }
    },
    watch:{
        $route(to,from){
            if(!ExistStorage('action')){
                this.$router.push('/');
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .payInfo{
        width: 100%;
        height: 100%;
        background: #fff;
        .info{
        width: 5.9rem;
        margin: 0 auto 0;
        padding-top: .3rem;
        .title{
            font-size: 0.28rem;
        }
        .progress{
            margin-top: 0.5rem;
            width: 3.8rem;
            height: 3.8rem;
            margin: 0 auto;
            margin-top: 0.5rem;
            margin-bottom: 0.4rem;
            text-align: center;
            .timeouts{
                font-size: 0.28rem;
                color: #00d094;
                text-align: center;
                .icon_clock{
                    margin-right: 0.1rem;
                }
            }
            .current{
                margin-top: 0.3rem;
                text-align: center;
                margin-bottom: 0.1rem;
                .money{
                    font-size: 0.58rem;
                    color: #ffc057;
                }
            }
            .text{
                text-align: center;
                font-size: 0.24rem;
                color: #999;
            }
        }
        .payinfo{
            overflow: hidden;
            .left{
                color: #999;
                font-size: 0.26rem;
            }
            .tbill{
                font-size: 0.38rem;
                color: #00d094;
            }
            .btn{
                display: inline-block;
                border: 1px solid #eee;
            }
            .right{
                text-align: right;
            }
            .arrow{
                font-size: 0.3rem;
                color: #333;
                vertical-align: middle;
                margin-left: 0.1rem;
            }
        }
    }
    }
</style>
