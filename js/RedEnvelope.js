WebApp.JSAPI.Init();
$(function(){
    // 红包记录处理
    $('.record span').click(function(){
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/record.html?time='+new Date().getTime()
    })
    // 普通红包处理
    $('.ordinary').click(function(){
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time='+new Date().getTime()
    })
    // 红包规则处理
    $('.rules').click(function(){
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_rules.html?time='+new Date().getTime()
    })
    // 手气红包处理
    $('.luck').click(function(){
        alert('手气红包尚未上线，敬请期待……');
        return;
    })
})