<template>
    <div class="poolinfo">
        <Progress v-if="isrun"/>
        <End v-if="!isrun"/>
        <Tab />
    </div>
</template>

<script>
import Progress from '@/components/dreampool/poolinfo/progress/Progress'
import End from '@/components/dreampool/poolinfo/End'
import Tab from '@/components/dreampool/poolinfo/tab/Tab'
export default {
    name:'poolinfo',
    data () {
        return {
            pool:'',//池子信息
            isrun:true,//梦想池是否结束
        }
    },
    components:{
        Progress,
        End,
        Tab
    },
    created(){
        console.log(this.$route.params);
        this.pool = JSON.parse(GetStorage('pinfo'));
        if(this.pool.state == 'RUNNING'){
            this.isrun = true
        }else if(this.pool.state == 'FINISHED'){
            this.isrun = false
        }
    },
    methods:{
        // ISAward(app){
        //     TD_Request('aw','lfromp',{pid:app.pool.pid},function(code,data){
        //         console.log(data)
        //     },function(code,data){
        //         console.log(data);
        //     })
        // }
    }
}
</script>

<style lang="less" scoped>
    .poolinfo{
        width: 100%;
        background: #fff;
    }
</style>
