<template>
    <div class="record">
            <div class="main">
                <van-tabs v-model="active" swipeable color="#00d094" title-active-color="#00d094" @change="tabChange">
                    <van-tab title="收入" class="tab">
                        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onload">
                            <van-cell v-for="(list,index) in list" :key="index">
                                <h3 class="title">{{list.reason}}</h3>
                                <div class="pay right" style="color:#00d094">+{{list.bill / 100}}</div>
                                <br>
                                <p>{{list.time}}</p>
                                <p class="right" style="float:right;font-size:0.28rem">订单号:{{list.oid}}</p>
                            </van-cell>
                        </van-list>
                    </van-tab>
                    <van-tab title="支出" class="tab">
                        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
                            <van-cell v-for="(list,index) in list" :key="index">
                                <h3 class="title">{{list.title}}</h3>
                                <div class="pay right" style="color:red">-{{list.bill / 100}}</div>
                                <br>
                                <p>{{list.time}}</p>
                                <p class="right" style="float:right;font-size:0.28rem">订单号:{{list.oid}}</p>
                            </van-cell>
                        </van-list>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
</template>

<script>
if(GetStorage('userInfo') != null){
    var uid = JSON.parse(GetStorage('userInfo')).openid;
}
export default {
    name:'payRecord',
    data () {
        return {
            active:0,//默认菜单
            loading:false,//是否处于加载列表状态
            finished:false,//是否加载完毕，
            list:[],//消费订单
            seek:0,
            total:0,
        }
    },
     created(){
        // 消费信息
        WebApp.JSAPI.InitShare({
            title:'追梦行动派',
            desc:"有梦就行动，坚持返现金！",
            link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=no',
            imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
        });
        // Options.TestServer = false;
        this.income(this,this.seek)
    },
    methods:{
        // 消费信息
        spend(self,seek){
            TD_Request('ds','oinfo',{uid:uid,seek:seek,count:10},function(code,data){
                console.log(data)
                self.loading = false;
                self.total = data.total;
                if(data.total == 0 || data.orders.length == 0){
                    self.finished = true;
                    return;
                }
                self.$toast.clear();
                $.each(data.orders,function(index,item){
                    var time = parseInt(item.ptime) * 1000;
                    var dt = new Date(time);    
                    item.time = dt.toLocaleString().replace(/\//g,'-')                
                    if(item.oid.substr(0,1) == 1 && item.did.substr(0,2) == 'DR'){
                        item.title = '[支出]购买小梦想互助'
                    }else if(item.oid.substr(0,1) == 1 && item.did.substr(0,2) == 'TR'){
                        item.title = '[支出]购买小生意互助'
                    }else if(item.oid.substr(0,1) == 3){
                        item.title = '[支出]购买行动打卡合约'
                    }else if(item.oid.substr(0,1) == 9){
                        item.title = '[支出]购买小梦想梦想互助--红包领取'
                    }
                    self.list.push(item);
                })
                // console.log(list,self.total)
                if(self.list.length>=self.total){
                    self.finished = true;
                } else {
                    self.finished = false;
                }
                console.log(self.list.length)
            },function(code,data){
                console.log(data);
            })
        },
        // 收入信息
        income(self,seek){
            TD_Request('ds','rinfo',{uid:uid,seek:seek,count:10},function(code,data){
                console.log(data)
                self.loading = false;
                self.total = data.count;
                if(data.count == 0 || data.refund.length == 0){
                    self.finished = true;
                    return;
                }
                $.each(data.refund,function(index,item){
                    var time = parseInt(item.time) * 1000;
                    var dt = new Date(time);    
                    item.time = dt.toLocaleString().replace(/\//g,'-')                
                    self.list.push(item);
                })
                if(self.list.length>=self.count){
                    self.finished = true;
                } else {
                    self.finished = false;
                }
            },function(code,data){
                console.log(data)
            })
        },
        load(){
            this.loading = false;
            this.seek+=10;
            this.spend(this,this.seek);
        },
        // 收入
        onload(){
            this.loading = false;
            this.seek+=10;
            this.income(this,this.seek);
        },
        // 支出
        tabChange(index,title){
            this.seek = 0;
            this.list = [];
            console.log(title)
            if(title == '支出'){
                this.spend(this,this.seek)
            }else if(title == '收入'){
                this.income(this,this.seek)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    html{
    width: 100%;
    height: 100%;
    body{
        width: 100%;
        height: 100%;
        .record{
            width: 100%;
            height: 100%;
            .main{
                width: 6.8rem;
                margin: 0 auto;
                .van-hairline--top-bottom::after{
                    border-width: 0;
                }
                .tab{
                    margin-top: 0.2rem;
                    background: #fff;
                    .title{
                        font-size: 0.3rem;
                        margin-bottom: 0.3rem;
                        display: inline-block;
                    }
                    p{
                        font-size: 0.28rem;
                        color: #999;
                        display: inline-block;
                    }
                    .right{
                        float: right;
                        font-size: 0.36rem
                    }
                }
            }
        }
    }
}
</style>



