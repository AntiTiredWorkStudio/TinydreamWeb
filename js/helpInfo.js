$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取奖池信息
    var poolInfo = JSON.parse(localStorage.getItem('poolInfo'));
    console.log(poolInfo);
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");

    // 动态填入数据
    $('.dream_title').html(poolInfo.ptitle);
    $('.help_money').html(poolInfo.realBill + poolInfo.realUnit)
    $('.present_money').html(poolInfo.billHint);
    $('.target_money').html(poolInfo.rtbillValue+poolInfo.rtbillUnit);
    var prop = poolInfo.realBill / poolInfo.rtbillValue;
    ready();
    drawCircle(ctx,prop);
    if(poolInfo.state == "RUNNING" && poolInfo.award == "NO") {
        var timer = setInterval(function(){
            var ptime = parseInt(poolInfo.ptime);
            var daurtion = parseInt(poolInfo.duration);
            var time = parseInt(new Date().getTime() / 1000);
            var timeout = parseInt((ptime + daurtion) - time);
            if(timeout>=0){
                var h = Math.floor(timeout/60/60);
                if(h<10){
                    h = "0"+h;
                }
                var m = Math.floor(timeout/60%60);
                if(m<10){
                    m = "0"+m;
                }
                var s = Math.floor(timeout%60);    
                if(s<10){
                    s = "0"+s;
                }
                if(h == 0 && m==0 && s==0){
                    window.location.reload();
                }  
            }
            $('.timeout_ui').html(h+":"+m+":"+s);
        },1000)
        $('.state').html('互助中');
        $('.join_help').html('参与互助').css({background:'#00d094',color:'#fff'}).removeAttr('disabled')
        $('.join_help').click(function(){
            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html"
        })
    }

    // 获取开奖奖池状态
    

    // 图例
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
    function drawCircle(ctx,prop){
        if(prop == 0){
            ctx.clearRect(0,0,190,190);
        }else{
            prop = prop * 2;
        }
        ctx.clearRect(0,0,190,190);
        ctx.fillStyle = 'white';
        ctx.clearRect(0,0,190,190);
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#ffc057';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(95, 95, 80, Math.PI/-2, prop * Math.PI - Math.PI / 2, false);
        ctx.stroke()
    }
})