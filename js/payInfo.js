WebApp.JSAPI.Init();
$(function(){
    var userInfo = Options.GetUserInfo(); 
    var buy = JSON.parse(localStorage.getItem('buy'));
    TD_Request("ds", "ord", {
      action:localStorage.getItem('buy')
    }, function(code,data){
      localStorage.setItem('actions',JSON.stringify(data.actions));
      // 请求成功
      if(code == 0){
        console.log(data)
        $('.dream_title').html(data.pool.ptitle);
        $('.mask .tip').html('您已成功参与'+data.pool.pid+'期小梦想互助')
        $('.help_money').html("￥"+data.pool.cbill/100);
        $('.target_money').html("￥"+data.pool.tbill/100)
        drawCircle(ctx,(data.pool.cbill/100)/(data.pool.tbill/100));
        // 能够卖的份数
        var num = 1;
        if(buy.buy.dayLim == 0){
          num = 0;
        }
        $('.copies_money span').html(num);
        $('.price span.fee').html(data.pool.ubill/100 * $('.copies_money span').html());
        $('.icon_add').click(function(){
          num++;
          if(num > buy.buy.dayLim) {
            num = buy.buy.dayLim;
            $('.copies_money span').html(num);
            console.log(num);
          }
          $('.copies_money span').html(num);
          $('.price span.fee').html(data.pool.ubill/100 * $('.copies_money span').html());
        })
        $('.icon_incer').click(function(){
          num--;
          if(num <= 0){
            num = 0;
            $('.copies_money span').html(num);
          }
          $('.copies_money span').html(num);
          $('.price span.fee').html(data.pool.ubill/100 * $('.copies_money span').html());
        })
        $('.price i').html(data.pool.ubill/100+"元/份");
      }
      // 倒计时
      setInterval(function(){
        var ptime = parseInt(data.pool.ptime);
        var daurtion = parseInt(data.pool.duration);
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
      // 统一下单
      $('.wxPay').click(function(){
        if($('#dream strong').html() == ''){
          alert('请选择梦想后进行支付！');
          return;
        }
        if($('.price span.fee').html() == 0){
          alert('支付失败');
          return;
        }
        var did = $('#dream').attr("data-values");
        var fee = $('.price span.fee').html();
        console.log(fee);
        TD_Request("ds","wxpayweb",{
          oid:data.order.oid,
          bill:fee * 100,
          uid:userInfo.openid
        },function(code,data){
          if(code == 0){
            console.log(data)
            WeixinJSBridge.invoke(
              'getBrandWCPayRequest', {
              "appId":data.appId,     //公众号名称，由商户传入     
              "timeStamp":data.timeStamp,         //时间戳，自1970年以来的秒数     
              "nonceStr":data.nonceStr, //随机串     
              "package":data.package,     
              "signType":data.signType,         //微信签名方式：     
              "paySign":data.paySign //微信签名 
              },function(res){
                if(res.err_msg == "get_brand_wcpay_request:ok" ){
                  var actions = JSON.parse(localStorage.getItem('actions'));
                  TD_Request("ds","pay",{
                    uid:userInfo.openid,
                    oid:actions.pay.oid,
                    bill:fee * 100,
                    pcount:$('.copies_money span').html(),
                    action:localStorage.getItem('actions'),
                    did:$('#dream').attr("data-values")
                  },function(code,data){
                    $('.mask').fadeIn();
                    var number = data.numbers;
                    var lid = [];
                    for(key in number){
                      var obj = number[key];
                      lid.push(obj.lid)
                    }
                    $.each(lid,function(index,item){
                      $('.num').html(item+"、").css("color","#00d094");
                    })
                    console.log(data)
                    localStorage.clear('buy');
                  },function(code,data){
                    alert(JSON.stringify(data))
                  })
                } 
             }); 
          }
        },function(code,data){
          console.log(data)
        })
      })
    }, function(code,data){
      // 请求失败
      if(code != 0){
        console.log(data)
      }
    })
    // 选择梦想
    TD_Request('dr','dlist',{
      uid:userInfo.openid
    },function(code,data){
      if(code == 0){
        var arr = [];
        $.each(data.dreams,function(index,item){
          console.log(item);
          console.log(item.title);
          arr.push({title:item.title,value:item.did});
          console.log(arr)
        })
        console.log(arr[arr.length-1])
        $('.dream strong').html(arr[arr.length-1].title);
        $('.dream').attr('data-values',arr[arr.length-1].value);
        $('.dream').select({
          title: "选择梦想",
          items: arr,
          onClose:function(){
            $('.dream strong').html($('.weui_cell_ft input:radio[name="weui-select"]:checked').parent('.weui_cell_ft').prev().children('p').html())
          }
        });
      }
    },function(code,data){
      console.log(data)
    })
    ready();
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
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

    // 关闭弹窗
    $('.close').click(function(){
      $('.mask').fadeOut();
      window.location.href="http://tinydream.antit.top/TinydreamWeb/html/dreamHelp.html";
    })

    //分享
  
    $('.share').click(function(){
      $('.icon').show()
    })
    $('.icon.close').click(function(){
      window.location.href="http://tinydream.antit.top/TinydreamWeb/html/dreamHelp.html";
    })
})
