<template>
  <div class="release">
    <div class="warp">
      <h3>发布梦想池</h3>
      <div>
        时限(天):
        <input type="number" v-model="day">
      </div>
      <div>
        互助目标(元):
        <input type="number" v-model="tbill">
      </div>
      <div>
        价格(元/份):
        <input type="number" v-model="price">
      </div>
      <button @click="create">发 布</button>
    </div>
    <div class="warp" style="height:50%;overflow:scroll">
      <h2 style="padding-top:5%;text-align:center">互助梦想池列表</h2>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>梦想池名称</th>
            <th>时限(天)</th>
            <th>互助目标(元)</th>
            <th>价格(元/份)</th>
            <th>发布时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
          <tr>
            <td>1</td>
            <td>梦想互助20190303期</td>
            <td>2</td>
            <td>1000</td>
            <td>5</td>
            <td>19-03-03 09:00:03</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'release',
  data () {
    return {
      day:'',//互助期限
      tbill:'',//目标互助金额
      price:'',//单价金额
    }
  },
  methods: {
    create(){
      // 发布逻辑
    }
  },
}
</script>

<style lang="less" scoped>
  .release{
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

