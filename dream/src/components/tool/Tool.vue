<template>
    <div class="tool">
        <tool-list v-if="tool_list"/>
        <classList v-if="tool_category"/>
    </div>
</template>

<script>
if(!ExistStorage("userInfo")){
    window.location.href = 'http://tinydream.ivkcld.cn/TInydreamWeb/dream'
}else{
    var uid = JSON.parse(GetStorage('userInfo')).openid;
}
import toolList from '@/components/tool/ToolList'
import classList from '@/components/tool/ClassList'
export default {
    name:'tool',
    data () {
        return {
            tool_list:false,
            tool_category:false,
        }
    },
    components:{
        toolList,
        classList
    },
    created(){
         WebApp.JSAPI.InitShare({
            title:'追梦行动派',
            desc:"有梦就行动，坚持返现金！",
            link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=clock&state=no',
            imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
        });
        this.eomp(this)
    },
    methods:{
        eomp(app){
            TD_Request('op','eomp',{uid:uid},function(code,data){
                console.log(data)
                app.tool_category = true; 
            },function(code,data){
                if(code == 82){
                    app.tool_list = true;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
