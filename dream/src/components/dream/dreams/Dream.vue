<template>
    <div class="dream">
        <Tab />
    </div>
</template>

<script>
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
