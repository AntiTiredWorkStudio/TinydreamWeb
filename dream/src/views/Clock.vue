<template>
    <div class="clock">
        <action />
    </div>
</template>

<script>
import action from '@/components/clock/Action'
export default {
    name:'clock',
    components:{
        action
    }
}
</script>

<style lang="less" scoped>
    .clock{
        background: #f0f0f0;
        width: 100%;
        height: 100%;
        padding-top: 0.3rem;
    }
</style>
