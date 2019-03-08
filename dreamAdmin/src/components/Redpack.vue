<template>
  <div class="redpack">
    <div class="warp">
      <h3>红包信息查询</h3>
      <p>
        梦想互助期号:
        <input type="text" placeholder="请输入要查询的互助期号">
      </p>
      <button>查询</button>
    </div>
    <div class="warp" style="height:60%;overflow:scroll">
      <h3>红包列表&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red">梦想互助20190303期</span></h3>
      <table>
        <thead>
          <tr>
            <th>红包id</th>
            <th>发出人</th>
            <th>手机号</th>
            <th>总金额</th>
            <th>单价(元)</th>
            <th>领取状态</th>
            <th>发布时间</th>
            <th>祝福语</th>
            <th>梦想互助期号</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>326186535125</td>
            <td>暮色👑 微凉城</td>
            <td>17600740311</td>
            <td>15</td>
            <td>5</td>
            <td>3/3</td>
            <td>2019-03-08 14:51:04</td>
            <td>祝梦想成真！</td>
            <td>20190303</td>
          </tr>
          <tr>
            <td>326186535125</td>
            <td>暮色👑 微凉城</td>
            <td>17600740311</td>
            <td>15</td>
            <td>5</td>
            <td>3/3</td>
            <td>2019-03-08 14:51:04</td>
            <td>祝梦想成真！</td>
            <td>20190303</td>
          </tr>
          <tr>
            <td>326186535125</td>
            <td>暮色👑 微凉城</td>
            <td>17600740311</td>
            <td>15</td>
            <td>5</td>
            <td>3/3</td>
            <td>2019-03-08 14:51:04</td>
            <td>祝梦想成真！</td>
            <td>20190303</td>
          </tr>
          <tr>
            <td>326186535125</td>
            <td>暮色👑 微凉城</td>
            <td>17600740311</td>
            <td>15</td>
            <td>5</td>
            <td>3/3</td>
            <td>2019-03-08 14:51:04</td>
            <td>祝梦想成真！</td>
            <td>20190303</td>
          </tr>
          <tr>
            <td>326186535125</td>
            <td>暮色👑 微凉城</td>
            <td>17600740311</td>
            <td>15</td>
            <td>5</td>
            <td>3/3</td>
            <td>2019-03-08 14:51:04</td>
            <td>祝梦想成真！</td>
            <td>20190303</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'redpack'
}
</script>

<style scoped lang="less">
  .redpack{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f3f5f8;
    margin-bottom: 10%;
    .warp{
      width: 90%;
      height: 30%;
      background: #fff;
      border-radius: 10px;
      margin: 5% auto 0;
      text-align: center;
      h3{
        text-align: center;
        padding-top: 5%;
        font-size: 18px
      }
      p{
        margin-top: 5%;
        font-size: 20px;
        input{
          height: 40px;
          padding-left: 3%;
          padding-right: 3%;
          vertical-align: middle;
        }
      }
      button{
        width: 95%;
        margin-top: 5%;
        height: 44px;
        border-radius: 10px;
        border:none;
        background-color: #00AAFF;
        color: #fff;
      }
    }
    table{
      width: 100%;
      padding-top: 5%;
      border-spacing: 0;
      thead,tr,th,td{
        border:1px solid #efefef;
        padding: 1%;
        font-size: 12px;
      }
    }
  }
</style>
