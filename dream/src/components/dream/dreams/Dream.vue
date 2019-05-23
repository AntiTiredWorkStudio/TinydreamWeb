<template>
    <div class="dream">
        <Tab />
    </div>
</template>

<script>
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
import Tab from '@/components/dream/dreams/tab/DTab'
export default {
    name:'dream',
    components:{
        Tab
    }
}
</script>

<style lang="less" scoped>
    .dream{
        height: 100%;
        width: 100%;
        background: #f0f0f0;
        overflow: scroll;
        padding-bottom: 1.2rem;
    }
</style>
