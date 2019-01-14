$(function(){
    // 检测是否登录
    var userInfo = Options.GetUserInfo();
    console.log(userInfo)
    TD_Request("us", "enter",
      {
        uid: userInfo.openid,
        nickname: userInfo.nickname,
        headicon: userInfo.headicon,
      }, function (code, data) {
        //请求成功的处理
      }, function (code, data) {
       //请求失败的处理
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