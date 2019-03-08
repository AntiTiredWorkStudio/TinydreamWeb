<template>
  <div class="photo">
    <h3>中奖未上传活动照片项</h3>
    <table>
      <thead>
        <tr>
          <th>期号</th>
          <th>活动照片</th>
          <th>中奖编号</th>
          <th>图片选择</th>
          <th>上传</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>梦想互助20190209期</td>
          <td style="color:#3287B2">点击查看</td>
          <td>20190209-10000098</td>
          <td><input type="file"></td>
          <td><button>上传</button></td>
        </tr>
        <tr>
          <td>梦想互助20190209期</td>
          <td style="color:#3287B2">点击查看</td>
          <td>20190209-10000098</td>
          <td><input type="file"></td>
          <td><button>上传</button></td>
        </tr>
        <tr>
          <td>梦想互助20190209期</td>
          <td style="color:#3287B2">点击查看</td>
          <td>20190209-10000098</td>
          <td><input type="file"></td>
          <td><button>上传</button></td>
        </tr>
        <tr>
          <td>梦想互助20190209期</td>
          <td style="color:#3287B2">点击查看</td>
          <td>20190209-10000098</td>
          <td><input type="file"></td>
          <td><button>上传</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'photo',
}
</script>

<style lang="less" scoped>
  .photo{
    width: 100%;
    height: 100%;
    overflow: scroll;
    h3{
      text-align: center;
      font-size: 24px;
      padding-top: 5%;
    }
    table{
      margin-top: 5%;
      width: 100%;
      border-spacing: 0;
      thead,tr,th,td{
        font-size: 12px;
        text-align: center;
        border: 1px solid #efefef;
        padding-top: 3%;
        padding-bottom: 3%;
      }
      input{
        width: 90%;
        outline: 0;
      }
      button{
        border: none;
        background-color: #3ca512;
        color: #fff;
      }
    }
  }
</style>
