$(function(){
    if($_GET.type == 'user'){
        var str = '<div class="progress">'+
'<canvas class="top_canvas" id="cns" width="190" height="190"></canvas>'+
'<canvas style="z-index:-5" width="190" height="190" class="bottom" id="sy_buttom"></canvas>'+
'div class="dreamInfo sy_info">'+
 '<div class="money_number sy_mNum"></div>'+
 '<p class="tip_mes">目前累计互助金</p>'+
'/div>'+'<div class="targetAndprice">'+
'<div class="left">'+
  '<div class="number help_number"></div>'+
  '<div class="text">互助目标</div>'+
'</div>'+
'<div class="right">'+
  '<div class="number price_number"></div>'+
  '<div class="text">价格</div>'+
'</div>'+
'</div>'+
'<button class="join">参与互助</button>'+
'<p class="tip_msg">每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！</p>'
'</div>'
        $('<div class="title pool_title" id="title"></div>'+str).appendTo('#help')
    }else{
        $('#help').hide()
    }
})

