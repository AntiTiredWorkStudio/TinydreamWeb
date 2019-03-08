<template>
  <div class="ord">
    <div class="warp">
      <h3>筛选条件</h3>
      <div>
        查询手机号:
        <input type="number" v-model="phoneNum">
      </div>
      <div>
        开始日期
        <input type="date" v-model="dateStart">
      </div>
      <div>
        结束日期:
        <input type="date" v-model="dateEnd">
      </div>
      <button @click="select">查 询</button>
    </div>
    <div class="warp" style="height:50%;overflow:scroll">
      <h2 style="padding-top:5%;text-align:center">订单列表&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red">互助总金额1225.2元</span></h2>
      <table>
        <thead>
          <tr>
            <th>订单号</th>
            <th>梦想互助期号</th>
            <th>互助金额(元)</th>
            <th>创建时间</th>
            <th>支付时间</th>
            <th>昵称</th>
            <th>手机号</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
          <tr>
            <td>103497146905</td>
            <td>20190303</td>
            <td>25</td>
            <td>2019-03-08 16:23:39</td>
            <td>2019-03-08 16:24:08</td>
            <td>小明哥</td>
            <td>15091996280</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'ord',
  data () {
    return {
      phoneNum:'',//查询手机号
      dateStart:'',//开始日期
      dateEnd:'',//结束日期
    }
  },
  methods:{
    select(){
      // 查询逻辑
    }
  }
}
</script>

<style lang="less" scoped>
  .ord{
    width:100%;
    height: 100%;
    overflow: hidden;
    background-color: #f3f5f8;
    .warp{
      width: 95%;
      height: 40%;
      background-color: #fff;
      border-radius: 10px;
      margin: 5% auto;
      h3{
        text-align: center;
        padding-top: 5%;
      }
      div{
        padding-top: 20px;
        position: relative;
        font-size: 24px;
        line-height: 1;
        text-align: center;
        overflow: hidden;
        input{
          float: right;
          margin-right: 2%;
          width: 50%;
          height: 30px;
          vertical-align: middle;
          border: 1px solid #efefef;
          padding-left: 2%;
          padding-right: 2%;
          outline: 0;
        }
      }
      button{
        border:none;
        width: 98%;
        height: 44px;
        line-height: 44px;
        border-radius: 10px;
        margin-top: 5%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        background-color: #00a0f0;
        text-align: center;
        color: #fff;
      }
      table{
        width: 100%;
        border:none;
        border-spacing:0;
        padding-top: 3%;
        th,tr,td{
          border-collapse: collapse;
          border:1px solid #efefef;
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
</style>
