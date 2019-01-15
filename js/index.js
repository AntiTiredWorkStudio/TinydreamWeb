$(function(){
    $('.mask').css('height',$(window).height());
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
                // 首页公屏
                console.log(data)
                let buyinfo = data.buyinfo;
                if(buyinfo == "" || null){
                    $('.tip').show();
                }else{
                    $('.tip').hide();
                    var templateStr = $('#template').html();
                    var complid = _.template(templateStr);
                    _.each(buyinfo,function(item){
                        console.log(item)
                        var date = new Date().getTime() / 1000;
                        var timer = DescriptionTime(date - item.ptime);
                        item.timer = timer;
                        var str = complid(item);
                        $dom = $(str);
                        $dom.appendTo('.cont');
                    })
                }
                // 梦想互助池
                var mainpool = data.mainpool;
                // 标题
                $('.title').html(mainpool.ptitle);
                // 目标互助金
                $('.help_number').html(mainpool.tbill / 100);
                // 当前互助累计金额
                $('.money_number').html("￥"+mainpool.cbill / 100);
                // 单价
                $('.price_number').html(mainpool.ubill / 100 +"元/份");
                var prop = (mainpool.cbill / 100) / (mainpool.tbill / 100);
                ready();
                drawCircle(ctx,prop);
                // 遮罩层
                if(!data.award.result){
                    $('.mask').hide();
                }else{
                    $('.mask').fadeIn();
                }
                // 点击参与互助
                // 参与互助
                $('.join').click(function(e){
                    e.stopPropagation();
                    // console.log(data)
                    TD_Request("ds","buy",{
                        uid:data.selfinfo.uid,
                        pid:data.mainpool.pid
                    },function(code,data){
                        if(code == 0 || data.result == true){
                            console.log(data)
                            if(data.actions.buy.dream == "" || data.actions.buy.dream == undefined){
                                if(confirm("您还没有添加梦想，添加梦想后才能参与互助")){
                                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
                                }else{
                                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/index.html"
                                }
                            }
                            localStorage.setItem('buy',JSON.stringify(data.actions));
                            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html";
                        }
                    },function(code,data){
                        console.log(data)
                        if(code != 0 || !data.result){
                            alert("您尚"+data.context+",绑定手机后才能继续参与互助");
                            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html";
                        }
                    })
                })
                // 倒计时
               setInterval(function(){
                var ptime = parseInt(data.mainpool.ptime);
                var daurtion = parseInt(data.mainpool.duration);
                var time = parseInt(new Date().getTime() / 1000);
                var timeout = parseInt((ptime + daurtion) - time);
                if(timeout>=0){
                    var h = Math.floor(timeout/60/60);
                    var m = Math.floor(timeout/60%60);
                    var s = Math.floor(timeout%60);      
                }
                if(h>10){
                    h = "0"+h;
                }
                if(m>10){
                    m = "0"+m;
                } 
                if(s>10){
                    s = "0"+s;
                }
                $('.timeout').html(h+":"+m+":"+s);
               },1000)
                
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
    // 互助页面跳转
    $('.help').click(function(e){
        e.stopPropagation();
        window.location.href="html/dreamHelp.html"
    })
})