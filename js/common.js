 // 检测是否登录
 function wxLogin(){
    WebApp.Init('wxc5216d15dd321ac5',
        function(result,data){
           var userInfo = Options.GetUserInfo();
           $('#test').html(JSON.stringify(Options.GetUserInfo()));
        }
    );
 }