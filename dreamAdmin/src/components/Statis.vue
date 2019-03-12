<template>
    <div class="statis">
        <van-collapse v-model="activeName">
            <van-collapse-item title="基础数据">
                <div class="main">
                    <div class="inner">
                        <p>
                            总访客数：3000万
                        </p>
                        <p>
                            总购买数：10000万
                        </p>
                        <p>
                            复购人数：300万
                        </p>
                        <p>
                            复购率：0.95
                        </p>
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>
        <van-collapse v-model="lc">
            <van-collapse-item title="用户留存">
                <div class="top">
                  <van-search label="日期" aria-placeholder="请输入要查询的日期" show-action shape='round'>
                    <div slot="action" @click="search">查询</div>
                  </van-search>
                </div>
                <div class="main">
                    <div class="inner">
                        <p>
                            次日留存率：0.8885
                        </p>
                        <p>
                            3日留存率：0.8885
                        </p>
                        <p>
                            7日留存率：0.8885
                        </p>
                        <p>
                            30日留存率：0.8885
                        </p>
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
  name:'statis',
  data () {
      return {
        menus:[
        {
          title:'基础数据',
          check:false
        },{
          title:'用户留存',
          check:true
        }
      ],
      activeName:[],
      lc:[]
    }
  },
  methods: {
    search(){

    }
  },
}
</script>

<style scoped lang="less">
  .search{
    padding: 0;
  }
  .main{
    .inner{
      p{
        padding-left: 5vw;
      line-height: 2;
      font-size: 4vw;
      overflow: hidden;
      }
    }
  }
</style>
