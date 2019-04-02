var uid = Options.GetUserInfo().openid;
var pay = new Vue({
    el:'#pay',
    data:{

    },
    created(){
        if(!ExistStorage('buy')){
            $('body').html('');
            window.location.href = '../../index.html'
        }else{
            if($_GET.type == 'DREAM'){
                $('title').html('小梦想支付')
            }else if($_GET.type == 'TRADE'){
                $('title').html('小生意支付')
            }

            // 读取 buy
            var buy = JSON.parse(GetStorage('buy'))
            console.log(buy)
        }
    }
})