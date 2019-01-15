$(function(){
    var userInfo = Options.GetUserInfo();
    var templateStr = $('#template').html();
    var compiled = _.template(templateStr)

    TD_Request("no","ng",{
        uid:userInfo.openid,
        seek:0,
        count:20
    },function(code,data){
        console.log(data)
        _.each(data.msgs,function(item){
            var str = compiled(item);
            var $dom = $(str);
            var localTime = GetLocalTime(item.ptime);
            $dom.appendTo('.notice')
            $('.time').html(localTime)
        })
    },function(code,data){
        console.log(data)
    })
})