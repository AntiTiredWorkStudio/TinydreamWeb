<template>
<!-- 首页组件 -->
    <div class="index">
        <van-row class="warp first" type='flex' align="center" justify="center" v-for="(menu,index) in menus" :key="index">
            <router-link size="large" type="primary" class="btn btn van-button van-button--primary van-button--large" tag="button" :to="menu.path">
                <span class="title">{{menu.title}}</span>
                <p class="msg">{{menu.msg}}</p>
            </router-link>
        </van-row>
    </div>
</template>

<script>
export default {
    name:'Index',
    data () {
        return {
            menus:[
                {
                    path:'/dreamPool/'+encodeURI('梦想池'),
                    title:'梦想池',
                    msg:'最近发布：19-03-03'
                },
                {
                    path:'/shenhe/'+encodeURI('用户审核'),
                    title:'中标用户审核',
                    msg:'有n个用户待审核'
                },
                {
                    path:'/access/'+encodeURI('访问统计'),
                    title:'访问数据统计',
                    msg:'今日：600万人'
                },
                {
                    path:'/ord/'+encodeURI('订单查看'),
                    title:'订单查看',
                    msg:'最新：13088888888 25元'
                },
                {
                    path:'/photo/'+encodeURI('活动照片'),
                    title:'活动照片',
                    msg:'有n个未上传'
                },
                {
                    path:'/rpack/'+encodeURI('红包退款'),
                    title:'红包退款',
                    msg:'有n个未退款'
                },
                {
                    path:'/redpack/'+encodeURI('红包'),
                    title:'红包',
                    msg:'最新：13088888888 150元'
                },
                {
                    path:'/statis/'+encodeURI('平台数据统计'),
                    title:'平台数据统计',
                    msg:'次日留存率：0.95'
                },
            ]
        }
    },
}
</script>

<style scoped lang="less">
    .warp{
      width: 100%;
      background-color: #fff;
      padding-top: 3vw;
      .btn.van-button--large{
        width: 92vw;
        height: 19vw;
        line-height: 1.5;
        .title{
          font-size: 6vw;
        }
        .msg{
          font-size: 3vw;
        }
      }
    }
    .last{
      padding-bottom: 2vw;
    }
</style>
