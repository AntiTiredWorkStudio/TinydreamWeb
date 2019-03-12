<template>
    <div class="ord">
        <div class="main">
            <van-row type="flex" align='center' justify='center'>
                <van-field type='number' left-icon="phone-o"  label="手机号" placeholder="请输入手机号"/>
            </van-row>
             <van-row type="flex" align='center' justify='center'>
                <van-field type='text' label="开始时间" v-model="start_date" :style="{display:starState}" left-icon='clock-o' @click="check('start')" placeholder="请输入开始时间"/>
            </van-row>
             <van-row type="flex" align='center' justify='center'>
                <van-field type='text' :style="{display:endState}" label="结束时间" left-icon='clock-o' v-model="end_date" @click="check('end')" placeholder="请输入结束时间"/>
            </van-row>
            <van-row type="flex" align='center' justify='center'>
              <van-datetime-picker @confirm="confirm" @change="change" v-model="currentDate" :style="{display:endpicker}" style="width:100%" type="date" :min-date="minDate"/>
            </van-row>
            <van-row type="flex" align='center' justify='center'>
                <van-button type="primary">查询</van-button>
            </van-row>
        </div>
        <van-row type="flex" align='center' justify='center'>
            <table>
                <thead>
                    <tr>
                        <th>订单号</th>
                        <th>互助期号</th>
                        <th>互助金额</th>
                        <th>创建时间</th>
                        <th>支付时间</th>
                        <th>昵称</th>
                        <th>手机号</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(ord,index) in ords" :key="index">
                        <td>{{ord.ord_num}}</td>
                        <td>{{ord.join_num}}</td>
                        <td>{{ord.join_bill}}</td>
                        <td>{{ord.ctime}}</td>
                        <td>{{ord.ptime}}</td>
                        <td style="color:#8bc0e4;">{{ord.nickname}}</td>
                        <td>{{ord.phoneNum}}</td>
                    </tr>
                </tbody>
            </table>
        </van-row>
    </div>
</template>

<script>
export default {
    name:'ord',
    data(){
        return {
            ords:[
                {
                    ord_num:'10455\n52773\n84',
                    join_num:20190303,
                    join_bill:5,
                    ctime:'23:00:00',
                    ptime:'23:01:02',
                    nickname:'Michael Kong',
                    phoneNum:'1388888\n8888'
                },
                {
                    ord_num:'10455\n52773\n84',
                    join_num:20190303,
                    join_bill:5,
                    ctime:'23:00:00',
                    ptime:'23:01:02',
                    nickname:'Michael Kong',
                    phoneNum:'1388888\n8888'
                },
                {
                    ord_num:'10455\n52773\n84',
                    join_num:20190303,
                    join_bill:5,
                    ctime:'23:00:00',
                    ptime:'23:01:02',
                    nickname:'Michael Kong',
                    phoneNum:'1388888\n8888'
                }
            ],
            'phone':'',
            'start_date':'',
            'end_date':'',
            starState:'-webkit-inline-box',
            endState:'-webkit-inline-box',
            currentDate:new Date(),
            minDate:new Date(1970, 1, 1),
            endpicker:'none'
        }
    },
    methods: {
      check(msg){
        console.log(msg)
        if(msg == 'start'){
          if(this.starState == '-webkit-inline-box'){
            this.starState = 'none'
            this.endpicker = 'block'
          }
        }else if(msg == 'end'){
          if(this.endState == '-webkit-inline-box'){
            this.endState = 'none';
            this.endpicker = 'block'
          }
        }
      },
      change(picker){
        console.log(picker.getValues())
      },
      confirm(picker){
         var y = picker.getFullYear();
         var m = picker.getMonth() + 1 < 10 ? '0'+ (picker.getMonth()+1) : picker.getMonth() + 1;
         var d = picker.getDate() < 10 ? '0' + (picker.getDate()) : picker.getDate();
         console.log(y,m,d);
         if(this.starState == 'none'){
           this.start_date = y+m+d;
           this.endpicker = 'none';
           this.starState = '-webkit-inline-box';
         }else if(this.endState == 'none'){
           this.end_date = y+m+d;
           this.endpicker = 'none';
           this.endState = '-webkit-inline-box';
         }
      }
    },
}
</script>

<style scoped lang="less">
    .ord{
        width: 100%;
        // background: #fff;
        table{
           width: 90vw;
           margin: 20vw auto;
           border:1px solid #eee;
           border-spacing: 0;
           border-collapse: collapse;
           th,tr,td{
               font-size: 3vw;
               border: 1px solid #eee;
               padding: 1vw;
           }
        }
        .main{
            width: 98vw;
            margin: 0 auto;
            border-top: 1px solid #eee;
            padding-bottom: 2vw;
        }
    }
</style>
