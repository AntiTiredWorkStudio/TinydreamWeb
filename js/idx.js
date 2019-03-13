$(function(){
    if($_GET.type == 'user'){
        var canvas = document.getElementById('top');
        var ctx = canvas.getContext("2d");
        $('#help').show()
        $('#title').html('梦想互助20190303期')
        $('.ub_mNum').html('￥200000')
        $('.ub_number').html('200000元')
        $('.ub_price').html('5元/份')
        ready();
        drawCircle(ctx,20)
        function ready(){
            var canvas = document.getElementById('bom');
            var cxt_arc = canvas.getContext("2d");
            cxt_arc.lineWidth = 15;
            cxt_arc.strokeStyle = '#edf0f5';
            cxt_arc.lineCap = 'round';
            cxt_arc.beginPath();
            cxt_arc.arc(95, 95, 80, 0, 2 * Math.PI, false);
            cxt_arc.stroke();
        }
        function drawCircle(ctx,prop){
            console.log(ctx)
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
    }else{
        $('#help').hide()
    }
})

