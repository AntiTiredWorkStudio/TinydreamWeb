<template>
  <div class="login">
    <div class="warpper">
      <div class="inner">
        <div class="logo_inner">
          <div class="logo">
            <img src="../assets/logo.png" alt="">
          </div>
        </div>
        <div class="warp">
          <div class="inp_box">
            <p>
              手机号:
              <input type="number"  placeholder="请输入管理员手机号" id="admin_phone" v-model="phoneNum">
            </p>
            <p>
              验证码:
              <input type="number" placeholder="请输入验证码" id="admin_code" v-model="code">
              <button @click="getCode" id="btn">获取</button>
            </p>
            <button id="login" @click="login">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: '小梦想互助平台管理',
      phoneNum:'',//手机号
      code:'',//验证码
    }
  },
  created(){
    // 页面创建完成触发的事件
  },
  methods: {
    // 获取验证码事件
    getCode(){

    },
    // 登录事件
    login(){

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  div.login{
    width: 100%;
    height:100%;
    overflow: hidden;
    position: relative;
    background-color: #f3f5f8;
    .warpper{
      padding-top: 20%;
      padding-bottom: 20%;
      height:60%;
      margin: 0 auto;
      overflow: hidden;
      .inner{
        width: 80%;
        margin: 0 auto;
        background-color: #fff;
        padding: 5%;
        position: relative;
        .logo_inner{
          text-align: center;
          width: 80%;
          height: 44px;
          margin: 0 auto;
          position: relative;
          .logo{
            width: 60%;
            height:100%;
            margin: 0 auto;
            vertical-align: middle;
            img{
              width: 100%;
              height: 70%;
            }
          }
        }
        .warp{
          width: 100%;
          h4{
            text-align: center;
            font-size: 24px;
          }
          .inp_box{
            width: 100%;
            p{
              text-align: center;
              margin-bottom: 10%;
              input{
                height: 40px;
              }
              input#admin_phone{
                width: 70%;
                padding:5px 10px;
                border:1px solid #eee;
                outline: 0;
                font-size: 12px;
                border-radius:5%;
              }
              input#admin_code{
                width: 50%;
                padding:5px 10px;
                border:1px solid #eee;
                outline: 0;
                font-size: 12px;
                border-radius:5%;
              }
              #btn{
                width: 20%;
                height: 26px;
                border: none;
                background-color: #00AAFF;
                color:#fff;
                border-radius: 10px;
                outline: 0;
              }
            }
            #login{
              width: 100%;
              height: 30px;
              line-height: 30px;;
              color: #fff;
              background-color: #00aaff;
              border-radius: 10px;
              border: none;
              outline: 0;
            }
          }
        }
      }
    }
  }
</style>
