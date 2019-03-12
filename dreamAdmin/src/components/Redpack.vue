<template>
  <div class="redpack">
    <van-search show-action shape="round" label='互助期号' placeholder="请输入梦想互助期号">
      <div slot="action">查询</div>
    </van-search>
    <van-row type='flex' align='center' justify='center'>
      <table>
        <caption>梦想互助{{redpacks.pid}}期</caption>
        <thead>
          <tr>
            <th>红包ID</th>
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
          <tr v-for="(redpack,index) in redpacks.redpacks" :key="index">
            <td>{{redpack.rid}}</td>
            <td>{{redpack.cpeo}}</td>
            <td>{{redpack.phoneNum}}</td>
            <td>{{redpack.bill}}</td>
            <td>{{redpack.price}}</td>
            <td>{{redpack.gstate}}</td>
            <td>{{redpack.ctime}}</td>
            <td>{{redpack.content}}</td>
            <td>{{redpack.pid}}</td>
          </tr>
        </tbody>
      </table>
    </van-row>
  </div>
</template>

<script>
export default {
  name:'redpack',
  data () {
    return {
      redpacks:{
        pid:'20190303',
        redpacks:[
          {
            rid:'318826\n582213',
            cpeo:'小梦想客服',
            phoneNum:'156013\n90196',
            bill:'15',
            price:'5',
            gstate:'3/3',
            ctime:'2019-03-10 10:58:33',
            content:'祝梦想成真！',
            pid:'20190303'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
  table{
    border-spacing: 0;
    border-collapse: collapse;
    tr,th,td{
      border:1px solid #eee;
      font-size: 2vw;
      text-align: center;
      padding: 1vw;
    }
  }
</style>
