<template>
  <div class="menu">
    <ul :class="{style:trans}">
      <li v-for="(menu,index) in menus" :key="index" :style="{display:hide}">
        <i class="iconfont" :class="menu.icon"></i><router-link exact tag="span" :to="menu.path">{{menu.txt}}</router-link>
      </li>
      <li>
        <i class="iconfont" :class="iconClass"></i><img :src="headicon" alt=""><span class="state" @click="login">{{login_txt}}</span><button @click="logout(user)" :style="{display:hide}">注销</button>
      </li>
    </ul>
    <div class="content" :class="{psa:trans}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'admin_menu',
  data () {
    return {
      menus:[
        {
          path:'/release',
          icon:'icon-zhuye',
          txt:'发布梦想池',
        },
        {
          path:'/audit',
          icon:'icon-shenhe',
          txt:'中标用户审核',
        },
        {
          path:'/tongji',
          icon:'icon-tongji',
          txt:'访问数据统计'
        },
        {
          path:'/ord',
          icon:'icon-weibiaoti-',
          txt:'订单查看',
        },
        {
          path:'/photo',
          icon:'icon-huodong',
          txt:'活动照片',
        },
        {
          path:'/refund',
          icon:'icon-tuikuan',
          txt:'红包退款',
        },
        {
          path:'/redpack',
          icon:'icon-hongbao',
          txt:'红包',
        },
      ],
      iconClass:'icon-denglu1',
      username:'小梦想互助',//用户昵称
      headicon:'https://tdream.antit.top/image/miniLogo.jpg',//用户头像
      user:1,//如果为1则是首页否则跳转登录页面
      hide:'block',
      login_txt:''//用户名
    }
  },
  props:{
    trans:{
      type:Boolean,
      required:true
    }
  },
  created(){
    console.log(this.menus)
    if(this.user != 1){
      this.login_txt = '登录';
      this.$router.push('/');
      this.iconClass = 'icon-denglu1';
      this.headicon = '';
      this.hide = 'none'
    }else{
      this.login_txt = this.username;
      this.headicon = 'https://tdream.antit.top/image/miniLogo.jpg';
      this.$router.push('/release');
      this.iconClass = '';
      this.hide = 'inline-block';
    }
  },
  methods:{
    logout(state){
      if(state == 1){
        console.log(state)
        this.user = 0;
        this.hide = 'none';
        this.headicon = '';
        this.login_txt = '登录';
        this.iconClass = 'icon-denglu1'
        this.$router.push('/login');
      }
    },
    login(){
      if(user==1){
        return
      }else{
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style scoped lang="less">
  .menu{
    display: inline-block;
    width: 100%;
    height: calc(100% - 20px);
    ul{
      width: 50%;
      height:100%;
      display: inline-block;
      background-color: #2B333E;
      transform: translateX(-120%);
      transition: all .2s linear 0s;
      position: relative;
      z-index:10;
      li{
        list-style-type: none;
        width: 80%;
        padding: 2% 10%;
        color: #AEB7C2;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        position: relative;
        i{
          font-size: 20px;
          color: #AEB7C2;
          margin-right: 10px;
        }
      }
      li:nth-child(8) img{
         width: 30px;
         height: 30px;
         border-radius: 50%;
         vertical-align: middle;
         margin-right: 5px;
       }
       li:nth-child(8) i{
         margin: 0;
       }
       li:nth-child(8) button{
         width: 60px;
         text-align: left;
         background-color: #2B333E;
         border:none;
         color: #AEB7C2;
         outline: 0;
       }
    }
    .content{
      height:100%;
      width: 100%;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      transition: all .2s linear 0s;
    }
  }
  .menu ul.style{
    transform: translateX(0);
  }
  .menu .content.psa{
    left:52%;
  }
  .router-link-active .tab-link{ //.router-link-active 指定
    color: red;
    background:pink;
  }
</style>
