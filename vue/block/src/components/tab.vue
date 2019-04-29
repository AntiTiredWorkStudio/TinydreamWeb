<template>
    <div class="footer">
        <ul>
            <li>
                <a href="../index.html">
                  <i class="icon icon_home"></i>
                  <p class="text">梦想互助</p>
                </a>
            </li>
            <li>
              <a href="../html/dream.html">
                <i class="icon icon_dream"></i>
                <p class="text">行动打卡</p>
              </a>
            </li>
            <li class="active">
              <a href="../html/user.html">
                <i class="icon icon_user"></i>
                <p class="text">个人中心</p>
              </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'tab',
    data () {
        return {
            tabbar:[
                {
                    title:'梦想互助',
                    normal:'http://tdream.antit.top/image/nav_index_disable.png',
                    active:'http://tdream.antit.top/image/nav_index.png',
                    url:'http://tinydream.ivkcld.cn/TinydreamWeb/index.html',
                    active:0
                },
                {
                    title:'行动打卡',
                    normal:'https://tdream.antit.top/ActiveSignInOff.png',
                    active:'https://tdream.antit.top/ActiveSignInOk.png',
                    url:'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html',
                    active:1
                },
                {
                    title:'个人中心',
                    normal:'http://tdream.antit.top/image/nav_owner_disable.png',
                    active:'http://tdream.antit.top/image/nav_owner.png',
                    url:'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html',
                    active:2
                }
            ]
        }
    },
    created(){
        
    }
}
</script>

<style lang="less" sscoped>
    .footer{
        height: 1.28rem;
        border-top:1px solid #ddd;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
    }
    .footer ul li{
        float: left;
        width: 2.50rem;
        text-align: center;
        margin-top: 0.2rem;
    }
    .footer ul li a{
        color: #b2b2b2;
        font-size: 0.22rem;
    }
    .footer ul li .icon_home{
        display: inline-block;
        width: 0.38rem;
        height: 0.42rem;
        background: url(http://tdream.antit.top/image/nav_index_disable.png) no-repeat;
        background-size: 0.38rem 0.42rem; 
    }
    .footer ul li .icon_user{
        display: inline-block;
        width: 0.38rem;
        height: 0.42rem;
        background: url(http://tdream.antit.top/image/nav_index_disable.png) no-repeat;
        background-size: 0.38rem 0.42rem; 
    }
    .footer ul li .icon_dream{
        display: inline-block;
        width: 0.38rem;
        height: 0.42rem;
        background: url(https://tdream.antit.top/ActiveSignInOff.png) no-repeat;
        background-size: 0.38rem 0.42rem; 
    }
    .footer ul li .icon_user{
        display: inline-block;
        width: 0.38rem;
        height: 0.42rem;
        background: url(http://tdream.antit.top/image/nav_owner_disable.png) no-repeat;
        background-size: 0.38rem 0.42rem; 
    }
    .footer ul li.active a{
        color:#00d094;
    }
    .footer ul li.active .icon{
        background: url(http://tdream.antit.top/image/nav_owner.png) no-repeat;
        background-size: 0.38rem 0.42rem; 
    }

</style>
