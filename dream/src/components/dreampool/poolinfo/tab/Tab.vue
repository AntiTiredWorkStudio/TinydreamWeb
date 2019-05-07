<template>
    <div class="tab">
        <van-tabs v-model="active" @change="change" swipeable title-active-color="#00d094" color="#00d094" line-width="20" line-height="1">
            <van-tab title="我的编号" class="me">
                <div class="warp">
                    <van-col span="12" v-for="(lottey,index) in lotter" :key="index">
                        <p class="lid">{{lottey.lid}}</p>
                    </van-col>
                </div>
            </van-tab>
            <van-tab title="用户编号" class="user">
                <van-list v-model="loading" :finished="finished" finished-text="我是有底线的~~" @load="Onload">
                    <van-cell v-for="(ord,index) in userOrde" :key="index">
                        <van-col span="6" style="text-align:left">
                            <p>{{ord.tele}}</p>
                        </van-col>
                        <van-col span="6">
                            <p style="text-align:center">{{ord.dcount + ' 份'}}</p>
                        </van-col>
                        <van-col span="6">
                            <p style="color:#00d094" @click="look(ord.oid)">查看编号</p>
                        </van-col>
                        <van-col span="6">
                            <p>{{ord.dtit}}</p>
                        </van-col>
                        <van-dialog
                            v-model="show"
                            title="用户编号"
                            show-cancel-button
                            confirm-button-color="#00d094"
                            >
                            <div class="lid_warp">
                                <van-col span="12" v-for="(lid,index) in lottey" :key="index">
                                    <p>{{lid.lid}}</p>
                                </van-col>
                            </div>
                        </van-dialog>
                    </van-cell>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name:'tab',
    data () {
        return {
            lotter:'',//开奖编号
            loading:false,
            finished:false,
            userOrde:[],//用户订单,
            seek:0,
            ordCount:'',
            show:false,
            lottey:'',//用户编号
        }
    },
    created(){
        this.lid(this)
        this.counts(this)
    },
    methods:{
        lid(app){
            TD_Request('ds','pdetial',{uid:app.$store.state.uid,pid:JSON.parse(GetStorage('pinfo')).pid},function(code,data){
                console.log(data)
                if(data.lottey == '' || data.lottey == {} || data.lottey == null){
                    $('.warp').html('请先参与互助').css({
                        'text-align':'center',
                        color:'#808080',
                        'font-size':'0.32rem'
                    })
                }
                app.lotter = data.lottey;
            },function(code,data){
                console.log(data)
            })
        },
        // 参与的总订单
        counts(app){
            TD_Request('ds','precs',{pid:JSON.parse(GetStorage('pinfo')).pid},function(code,data){
                app.ordCount = data.ordCount;
                app.userLid(app,app.seek)
            },function(code,data){
                console.log(data);
            })
        },
        // 获取用户订单
        userLid(app,seek){
            // console.log(ordcount)
            TD_Request('ds','preco',{pid:JSON.parse(GetStorage('pinfo')).pid,min:seek,max:5},function(code,data){
                console.log(data)
                if(data.orders.length == 0){
                    app.finished = true;
                    return;
                }
                $.each(data.orders,function(index,item){
                    if(item.dtitle.length > 5){
                        item.dtit = item.dtitle.substr(0,4)+'...';
                    }else{
                        item.dtit = item.dtitle;
                    }
                    app.userOrde.push(item)
                })
                app.loading = false;
                if(app.userOrde.length == app.ordCount){
                    app.finished=true;
                    return;
                }
                console.log(app.userOrde);
                
            },function(code,data){
                console.log(data)
            })
        },
        Onload(){
            this.seek+=5;
            console.log(this.seek)
            this.userLid(this,this.seek);
        },
        // 查看用户编号
        look(oid){
            this.getlid(this,oid)
        },
        // 查看所有编号
        // confirm(uid){
        //     this.lookAll(this,uid)
        // },
        // lookAll(app,uid){
        //     TD_Request('ds','pdetial',{uid:uid,pid:JSON.parse(GetStorage('pinfo')).pid},function(code,data){
        //         if(app.txt == '确认'){
        //             app.show = false;
        //             return;
        //         }
        //         console.log(data)
        //         app.show = true
        //         app.txt = '显示所有编号'
        //         app.lottey = data.lottey;
        //     },function(code,data){
        //         console.log(data)
        //     })
        // },
        getlid(app,oid){
            TD_Request('aw','onums',{oid:oid},function(code,data){
                console.log(data)
                app.show = true
                app.txt = '确认'
                app.lottey = data.nums;
            },function(code,data){
                console.log(data);
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .tab{
        margin: 0 auto;
        margin-top: 0.94rem;
        width: 6.8rem;
        .warp{
            width: 100%;
            overflow: hidden;
            .van-col{
                text-align: left;
                margin-top: 0.3rem;
                p{
                    width: 3.3rem;
                    height: 0.68rem;
                    background: #ffc057;
                    color: #fff;
                    text-align: center;
                    line-height: 0.68rem;
                    border-radius: 0.34rem;
                }
            }
            .van-col:nth-child(2n){
                text-align: right;
            }
            .user{
                width: 100%;
                p{
                    font-size: 0.26rem;
                    color: #333;
                }
            }
        }
        .lid_warp{
            width: 90%;
            margin: 0 auto;
            overflow: hidden;
            .van-col{
                text-align: left;
                margin-top: 0.2rem;
                padding-bottom: 0.2rem;
                p{
                    font-size: 0.26rem;
                    color: #fff;
                    height:0.68rem;
                    width: 98%;
                    line-height: 0.68rem;
                    text-align: center;
                    background: #ffc057;
                    border-radius: 0.34rem;
                }
            }
            .van-col:nth-child(2n){
                text-align: right;
            }
        }
    }
</style>
