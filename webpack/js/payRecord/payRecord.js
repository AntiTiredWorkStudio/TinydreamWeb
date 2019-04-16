var uid = Options.GetUserInfo().uid;

var pay = new Vue({
    el:'#payrecord',
    data:{
        active:0,//默认菜单
        loading:false,//是否处于加载列表状态
        finished:false,//是否加载完毕
    },
    methods:{
        onLoad(){

        }
    }
})