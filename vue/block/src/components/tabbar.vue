
<script>
export default {
    name:'tabbar',
    data: {
        tabbar:[
            {
                title:'参与互助',
                normal:'http://tdream.antit.top/image/nav_index_disable.png',
                active:'http://tdream.antit.top/image/nav_index.png',
                url:'http://tinydream.ivkcld.cn/TinydreamWeb/index.html',
            },
            {
                title:'行动打卡',
                normal:'https://tdream.antit.top/ActiveSignInOff.png',
                active:'https://tdream.antit.top/ActiveSignInOk.png',
                url:'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html',
            },
            {
                title:'个人中心',
                normal:'http://tdream.antit.top/image/nav_owner_disable.png',
                active:'http://tdream.antit.top/image/nav_owner.png',
                url:'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html',
            }
        ]
    }
}
</script>
