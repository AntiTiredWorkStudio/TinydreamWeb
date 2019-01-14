$(function(){
     // 检测是否登录
     WebApp.Init('wxc5216d15dd321ac5',//appid
        function(result,data){//result:请求状态,data 请求结果
           console.log(result,data);
           var userInfo = Options.GetUserInfo();
           console.log(userInfo.openid)
           $('#test').html(JSON.stringify(Options.GetUserInfo()));
           TD_Request("us", "enter", {
               uid:userInfo.openid,
               nickname:userInfo.nickname,
               headicon:userInfo.headimgurl
           }, function (code, data) {
            //请求成功的处理
            if(code == 0) {
                alert(data.description);
                let buyinfo = data.buyinfo;
                console.log(buyinfo)
                if(buyinfo == "" || null){
                    $('.tip').show();
                }else{
                    $('.tip').hide();
                    var templateStr = $('#template').html();
                    console.log(templateStr)
                    var complid = _.template(templateStr);
                    _.each(buyinfo,function(item){
                        console.log(buyinfo.length)
                        console.log(item.ptime)
                        var date = new Date().getTime() / 1000;
                        var timer = DescriptionTime(date - item.ptime);
                        item.timer = timer;
                        console.log(timer);
                        console.log(date);
                        var str = complid(item);
                        $dom = $(str);
                        $dom.appendTo('.cont');
                    })
                }
            }
          }, function (code, data) {
            // 请求失败的处理
            if(code!=0){
                alert("登录失败，参数错误"+data.context);
                return;
            }
          })
        }
    );
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ready();
    drawCircle(ctx);
    function ready(){
        var canvas = document.getElementById('bottom');
        var cxt_arc = canvas.getContext("2d");
        cxt_arc.lineWidth = 15;
        cxt_arc.strokeStyle = '#edf0f5';
        cxt_arc.lineCap = 'round';
        cxt_arc.beginPath();
        cxt_arc.arc(95, 95, 80, 0, 2 * Math.PI, false);
        cxt_arc.stroke();
    }
    function drawCircle(ctx){
        ctx.clearRect(0,0,190,190);
        ctx.fillStyle = 'white';
        ctx.clearRect(0,0,190,190);
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#ffc057';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(95, 95, 80, Math.PI/-2, 1.3 * Math.PI - Math.PI / 2, false);
        ctx.stroke()
    }
    // 互助页面跳转
    $('.help').click(function(e){
        e.stopPropagation();
        window.location.href="html/dreamHelp.html"
    })
    // 参与互助
    $('.join').click(function(e){
        e.stopPropagation();
        window.location.href="html/payInfo.html"
    })
})