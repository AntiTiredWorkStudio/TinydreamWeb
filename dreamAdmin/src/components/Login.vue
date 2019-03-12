<template>
  <div class="login">
    <van-cell-group>
  <van-field
    v-model="phone"
    required
    clearable
    label="手机号"
    placeholder="请输入手机号"
  />

  <van-field
    v-model="code"
    label="验证码"
    placeholder="请输入验证码"
    required
 >
 <van-button slot="button" size="small" type="primary">发送验证码</van-button>
 </van-field>
</van-cell-group>
<p style="text-align:center">
  <van-button type="primary" size="large" @click="login">登录</van-button>
</p>
  </div>
</template>

<script>

export default {
  name:'login',
  data () {
    return {
      phone:'',
      code:'',
      show:true
    }
  },
  methods: {
    login(){
      this.$router.push('/index/'+encodeURI('首页/inline-block'))
    }
  },
}
</script>

<style>

</style>
