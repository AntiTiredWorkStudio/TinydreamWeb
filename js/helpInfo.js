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
            TD_Request('ds','buy',{
                uid:userInfo.openid,
                pid:poolInfo.pid
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
                if(code == 11 || !data.result){
                    alert("您尚"+data.context+",绑定手机后才能继续参与互助");
                    // window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html";
                }else if(code == 18){
                    alert("您当日购买次数已达上限");
                    return;
                }
            })
            // window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html"
        })
    }else if(poolInfo.state != "RUNNING"){
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/end.html'
    }

    // 获取参与总数
    TD_Request('ds','precs',{
        pid:poolInfo.pid
    },function(code,data){
        $('.count').html(data.ordCount)
    },function(code,data){
        console.log("获取失败："+data.context)
    })
    $('.tab div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    var num = 0;
    $('.right').click(function(){
        $('.user_number').show();
        $('.tabList').empty().hide();
        $('.btns.click').show();
        getord(num);
    })
    $('.left').click(function(){
        $('.user_number').empty().hide();
        $('.tabList').show();
        self(); 
    })
    $('.btns.click').click(function(){
        var cnum = num+10;
        getord(cnum)
    })
    // // 获取编号
    self();
    function self(){
        $('.tabList').empty();
        TD_Request('ds','pdetial',{
            uid:userInfo.openid,
            pid:poolInfo.pid
        },function(code,data){
            console.log(data)
            if(data.lottey.length == 0){
                $('.tip').html('您尚未参与互助').show();
            }else{
                $.each(data.lottey,function(index,item){
                    $("<div class='number'>"+item.lid+"</div>").appendTo('.tabList')
                })
            }
        },function(code,data){
            console.log(data)
        })
    }
    // 获取用户梦想信息
    function getord(number){
        TD_Request('ds','preco',{
            pid:poolInfo.pid,
            min:number,
            max:10
        },function(code,data){
            if(data.orders.length == 0){
                $('.tip').html('当前没有用户参与').show();
                $('.btns').hide();
                return;
            }else if(data.orders.length <= 10 && data.orders.length>0){
                $('.tip').html('当前没有用户参与').hide();
                $('.btns').hide();
                $.each(data.orders,function(index,item){
                    $('<div class="user"><div class="phone">'+item.tele+'</div><div class="num">'+item.dcount+' 份</div><div class="look" style="color:#00d094" oid='+item.oid+'>查看编号</div><div class="title">'+item.dtitle+'</div></div>').appendTo('.user_number');
                })
            }else{
                $('.tip').html('当前没有用户参与').hide();
                $('.btns').show();
                $.each(data.orders,function(index,item){
                    $('<div class="user"><div class="phone">'+item.tele+'</div><div class="num">'+item.dcount+' 份</div><div class="look" style="color:#00d094" oid='+item.oid+'>查看编号</div><div class="title">'+item.dtitle+'</div></div>').appendTo('.user_number');
                })
            }
            console.log(data)
            console.log(number+10);
            var str = ''//编号
            $('.look').click(function(){
                TD_Request('aw','onums',{
                    oid:$(this).attr('oid')
                },function(code,data){
                    console.log(data);
                    var str = '';
                    $.each(data.nums,function(index,item){
                        str = str+=item.lid+'；'
                    })
                    console.log(str)
                    alert('编号\n'+str);
                },function(code,data){
                    console.log(data)
                })
            })
            if(number+10 >= data.orders.length){
                $('.btns').hide();
                $('.tips').html('我是有底线的~~').show();
                return;
            }else{
                $('.btns').html('点击加载更多').show();
                $('.tips').html('我是有底线的~~').hide()
            }
        },function(code,data){
            console.log(data)
        })
    }

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