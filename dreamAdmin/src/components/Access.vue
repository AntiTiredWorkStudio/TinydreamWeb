<template>
    <div class="access">
        <van-row type="flex" align='center' justify='center'>
            <van-col span='4' class="num">日期(年月日)</van-col>
            <van-col span='4' class="num">访问人次(次)</van-col>
            <van-col span='4' class="num">参与人次(次)</van-col>
            <van-col span='4' class="num">支付人次(次)</van-col>
            <van-col span='4' class="num">访问人数(人)</van-col>
            <van-col span='4' class="num">参与人数(人)</van-col>
            <van-col span='4' class="num">支付人数(人)</van-col>
        </van-row>
        <van-row type="flex" align='center' justify='center' v-for="(acc,index) in access" :key="index">
            <van-col span='4' class="num">{{acc.date}}</van-col>
            <van-col span='4' class="num">{{acc.acc_num}}</van-col>
            <van-col span='4' class="num">{{acc.join_num}}</van-col>
            <van-col span='4' class="num">{{acc.pay_num}}</van-col>
            <van-col span='4' class="num">{{acc.acc_peo}}</van-col>
            <van-col span='4' class="num">{{acc.join_peo}}</van-col>
            <van-col span='4' class="num">{{acc.pay_peo}}</van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name:'access',
    data () {
        return {
            access:[
                {
                    date:'190303',//日期
                    acc_num:'1234560',//访问人次
                    join_num:'23564',//参与人次
                    pay_num:'45678',//支付人次
                    acc_peo:'123456789',//访问人数
                    join_peo:'1234567',//参与人数
                    pay_peo:'124',//支付人数
                },
                {
                    date:'190303',//日期
                    acc_num:'1234560',//访问人次
                    join_num:'23564',//参与人次
                    pay_num:'45678',//支付人次
                    acc_peo:'123456789',//访问人数
                    join_peo:'1234567',//参与人数
                    pay_peo:'124',//支付人数
                },
                {
                    date:'190303',//日期
                    acc_num:'1234560',//访问人次
                    join_num:'23564',//参与人次
                    pay_num:'45678',//支付人次
                    acc_peo:'123456789',//访问人数
                    join_peo:'1234567',//参与人数
                    pay_peo:'124',//支付人数
                },
                {
                    date:'190303',//日期
                    acc_num:'1234560',//访问人次
                    join_num:'23564',//参与人次
                    pay_num:'45678',//支付人次
                    acc_peo:'123456789',//访问人数
                    join_peo:'1234567',//参与人数
                    pay_peo:'124',//支付人数
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
    .access{
        width: 100%;
        background: #fff;
        .num{
            font-size: 3vw;
            text-align:center;
            border: 1px solid #eee;
            padding-bottom: 2vw;
            padding-top: 2vw;
        }
    }
</style>
