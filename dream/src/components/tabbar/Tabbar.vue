<template>
    <div class="tabbar">
        <van-tabbar active-color="#00d094" v-model="active">
            <van-tabbar-item v-for="(tab,index) in tabbar" :key="index" :to="tab.path">
                <span>{{ tab.title }}</span>
                <img :src="props.active ? tab.active : tab.normal" slot="icon" slot-scope="props">
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'tabbar',
    data () {
        return {
            active:0,
            tabbar:[
                {
                    path:'/',
                    title:'梦想互助',
                    normal:'http://tdream.antit.top/image/nav_index_disable.png',
                    active:'http://tdream.antit.top/image/nav_index.png'
                },
                {
                    path:'/clock',
                    title:'行动打卡',
                    normal:'https://tdream.antit.top/ActiveSignInOff.png',
                    active:'https://tdream.antit.top/ActiveSignInOk.png'
                },
                {
                    path:'/user',
                    title:'个人中心',
                    normal:'http://tdream.antit.top/image/nav_owner_disable.png',
                    active:'http://tdream.antit.top/image/nav_owner.png'
                }
            ]
        }
    },
    created(){
        console.log(this.$route.path)
        if(this.$route.path == '/'){
            this.active = 0;
        }else if(this.$route.path == '/clock'){
            this.active = 1;
        }else if(this.$route.path == '/user'){
            this.active = 2;
        }
    },
    watch:{
        $route(to,from){
            if(to.path == '/'){
                this.active = 0
            }else if(to.path == '/clock'){
                this.active = 1
            }else if(to.path == '/user'){
                this.active = 2
            }
        }
    }
}
</script>
