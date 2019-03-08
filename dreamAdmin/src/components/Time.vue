<template>
  <div class="time">
    <div class="content time">
      <span>当前系统时间:{{nowdate}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'local_time',
  data () {
    return {
      nowdate:''
    }
  },
  created(){
      setInterval(this.nowTime,1000)
  },
  methods:{
    times(time){
      var date = new Date(time);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var min = date.getMinutes();
      var s = date.getSeconds();
      if(m < 10){
        m = "0"+m;
      }
      if(d < 10){
        d = "0"+d;
      }
      if(h < 10){
        h = "0"+h;
      }
      if(min < 10){
        min = "0"+min;
      }
      if(s < 10){
        s = "0"+s;
      }
      var time = y + '.' + m + '.' + d + ' '+ h + ':' + min + ":" + s;
      this.nowdate = y + '.' + m + '.' + d + ' '+ h + ':' + min + ":" + s;
      console.log(this.nowdate)
    },
    nowTime(){
      this.times(new Date());
    }
  }
}
</script>

<style scope>
  .content.time{
    font-size: 23px;
    line-height: 25;
    text-align: center;
  }
</style>

