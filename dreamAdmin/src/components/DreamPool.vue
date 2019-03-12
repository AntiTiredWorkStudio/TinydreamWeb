<template>
    <div class="dreamPool">
        <van-collapse v-model="activeName">
            <van-collapse-item v-for="(pool,index) in mainpool" class="state" :value="pool.state" :class="{run:pool.state != '已结束' ? true : false}" :title="pool.title" :key="index">
                <div class="main">
                    <div class="top">
                        <span class="title">{{pool.title}}</span>
                        <span class="state" :class="{end:pool.state == '已结束' ? true : false}">{{pool.state}}</span>
                    </div>
                    <div class="inner">
                        <p>
                            时限(天)：{{pool.time}}
                        </p>
                        <p>
                            互助目标(元)：{{pool.tbill}}
                        </p>
                        <p>
                            累积互助金额(元)：{{pool.cbill}}
                        </p>
                        <p>
                            价格(元)：{{pool.price}}
                        </p>
                        <p>
                            发布时间：{{pool.ctime}}
                        </p>
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>
        <van-icon name="add" color="#07c160" size="23vw" class="add" @click="addDream"></van-icon>
        <!-- <van-row type="flex" justify="center" align="center" class="warp" v-for="(pool,index) in mainpool" :key="index">
            <van-button type="primary" plain class="btn" @click="info">
                <span class="title">{{pool.title}}</span>
                <p class="tip">
                    <span class="left">{{pool.date}}</span>
                    <span class="right" :class="{end:pool.state == '进行中' ? false : true}" >{{pool.state}}</span>
                </p>
            </van-button>
        </van-row> -->
        <van-dialog v-model="show" title="发布梦想池" confirm-button-text="发布" show-cancel-button :before-close="beforeClose">
            <van-field v-model="time" label="时限（天）" placeholder="请输入要发布的期限" />
            <van-field v-model="tbill" label="互助目标（元）" placeholder="请输入目标互助金额" />
            <van-field v-model="price" label="价格（元/份）" placeholder="请输入价格"/>
        </van-dialog>
    </div>
</template>

<script>
export default {
    name:'dreamPool', 
    data () {
        return {
            activeName:[],
            mainpool:[
                {
                    title:'梦想互助20190303期',
                    date:'19-03-03 22:00:00',
                    state:'进行中',
                    time:'2',
                    price:'5',
                    tbill:'1000',
                    cbill:'800',
                    ctime:'19-03-03 09:00:00'
                },
                {
                    title:'梦想互助20190303期',
                    date:'19-03-03 22:00:00',
                    state:'进行中',
                    time:'2',
                    price:'5',
                    tbill:'1000',
                    cbill:'800',
                    ctime:'19-03-03 09:00:00'
                },
                {
                    title:'梦想互助20190303期',
                    date:'19-03-03 22:00:00',
                    state:'已结束',
                    time:'2',
                    price:'5',
                    tbill:'1000',
                    cbill:'800',
                    ctime:'19-03-03 09:00:00'
                },
               {
                    title:'梦想互助20190303期',
                    date:'19-03-03 22:00:00',
                    state:'已结束',
                    time:'2',
                    cbill:'800',
                    price:'5',
                    tbill:'1000',
                    ctime:'19-03-03 09:00:00'
                },
                {
                    title:'梦想互助20190303期',
                    date:'19-03-03 22:00:00',
                    state:'进行中',
                    cbill:'800',
                    time:'2',
                    price:'5',
                    tbill:'1000',
                    ctime:'19-03-03 09:00:00'
                },
            ],
            time:'',//时限
            tbill:'',//互助金额
            price:'',//价格
            show:false
        }
    },
    methods: {
        addDream(){
            this.show = !this.show
        },
        beforeClose(action,done){
            // 发布梦想池逻辑
            if(action == 'confirm'){
                this.$dialog.alert({message:'发布成功'})
                done();
            }else{
                done();
            }
        },
        // success(){
        //     this.$dialog.alert({message:'发布成功'})
        // }
    },
}
</script>

<style scoped lang="less">
    .dreamPool{
        width: 100%;
        background-color: #fff;
        .state.run{
            color: #07c160 !important;
        }
        .main{
            height: 76vw;
            // border: 1px solid #eee;
            .top{
                width: 100%;
                overflow: hidden;
                line-height: 1.5;
                .title{
                    float: left;
                    font-size: 5vw;
                    color:#07c160;
                    vertical-align: bottom;
                }
                .state{
                    font-size: 5vw;
                    color: #07c160;
                    float: right;
                }
                .state.end{
                    color:#999;
                }
            }

            .inner{
                width: 100%;
                p{
                    margin-top: 5vw;
                    font-size: 5vw;
                }

            }
        }
        .add{
            text-align: center;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
