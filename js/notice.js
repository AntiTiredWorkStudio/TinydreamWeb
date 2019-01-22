
WebApp.JSAPI.Init();
$(function(){
    var userInfo = Options.GetUserInfo();
    var templateStr = $('#template').html();
    var compiled = _.template(templateStr)

    TD_Request("no","ngl",{
        uid:userInfo.openid,
        seek:0,
        count:20
    },function(code,data){
        console.log(data)
        data.msgs.sort(compare('ptime'));
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
            var json = $(this).attr('data-info');
            var obj = eval("("+json+")");
            var nid = $(this).attr('data-nid');
            TD_Request("no","nr",{nid:nid},function(code,data){
                console.log(data)
                TD_Request("dp","pinfo",{
                    pid:obj.pid
                },function(code,data){
                    console.log(data)
                    var info =  DreamPoolAnalysis(data.pool);
                    localStorage.setItem('poolInfo',JSON.stringify(info))
                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/helpInfo.html"
                },function(code,data){
                    console.log(data)
                })
            },function(code,data){
                console.log(data)
            })
        })
    },function(code,data){
        console.log(data)
    })

    // 排序
    function compare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
        }
    }
    // WebApp.JSAPI.Init()
})