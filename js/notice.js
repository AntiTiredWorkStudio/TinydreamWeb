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
            var localTime = GetLocalTime(item.ptime);
            item.localTime = localTime;
            console.log(item.ptime)
            var str = compiled(item);
            console.log(str);
            var $dom = $(str);
            $dom.appendTo('.notice');
        })
        $('.notice_message span').click(function(){
            var obj = JSON.parse($(this).attr('data-info'));
            TD_Request('type','buy',{
                pid:obj.pid
            },function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data)
            })
        })
    },function(code,data){
        console.log(data)
    })
})