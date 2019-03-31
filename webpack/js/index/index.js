var app = new Vue({
    el:'#app',
    data:{
        userInfo:'',//用户信息
    },
    mounted(){
        WebApp.Init('wxc5216d15dd321ac5',//appid
        function(result,data){
            console.log(Options)
        });
   }
})