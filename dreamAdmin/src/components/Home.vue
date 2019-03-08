<template>
  <div class="home">
    <div class="content">
      <Menu :trans="trans"></Menu>
      <p class="show"><i class="iconfont icon" :class="iconClass" @click="show(trans)"></i></p>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name:'Home',
  data () {
    return {
      trans:false,//控制菜单划入划出
      iconClass:'icon-youjiantou',
    }
  },
  created(){
    // if(this.user == 0){
    //   alert('您还没有登录');
    //   this.$router.push('/');
    // }else{
    //   alert('登录成功');
    //   // 进行数据请求逻辑
    //   // ...
    // }
  },
  methods: {
    loginOut(){
      this.user = 0;
      this.$router.push('/');
    },
    show(msg){
      if (msg == false){
        this.trans = true;
        this.iconClass = 'icon-zuojiantou'
      }else{
        this.trans = false;
        this.iconClass = 'icon-youjiantou'
      }
    }
  },
  components:{
    Menu,
  }
}
</script>

<style lang="less">
  .home{
    width: 100%;
    height: 100%;
    background-color: #f3f5f8;
    position: relative;
    .content{
      height: 95%;
      // overflow: scroll;
      position: relative;
      p.show{
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #fff;
        position: relative;
        z-index: 88;
        .icon{
          font-size: 50px;
        }
      }
    }
  }
</style>
