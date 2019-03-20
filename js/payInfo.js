WebApp.JSAPI.Init();
Options.TestServer = true;
if (!ExistStorage("buy")) {
    $("body").html("");
    window.location.href = "../index.html";
} else {
    $(function () {
        // var userInfo = Options.GetUserInfo();
        // var userInfo = localStorage.getItem('UserInfo');
        var imgArr = [
            'https://tdream.antit.top/LongPress2Share01.jpg',
            'https://tdream.antit.top/LongPress2Share02.jpg',
            'https://tdream.antit.top/LongPress2Share03.jpg',
            'https://tdream.antit.top/LongPress2Share04.jpg',
            'https://tdream.antit.top/LongPress2Share05.jpg',
            'https://tdream.antit.top/LongPress2Share06.jpg',
            'https://tdream.antit.top/LongPress2Share07.jpg',
            'https://tdream.antit.top/LongPress2Share08.jpg',
            'https://tdream.antit.top/LongPress2Share09.jpg',
            'https://tdream.antit.top/LongPress2Share10.jpg',
            'https://tdream.antit.top/LongPress2Share11.jpg',
            'https://tdream.antit.top/LongPress2Share12.jpg',
        ];
        console.log(Math.floor(Math.random()*imgArr.length));
        var imgNum = Math.floor(Math.random()*imgArr.length);
        var pay = null;
        var userInfo = Options.GetUserInfo();
        var buy = JSON.parse(localStorage.getItem('buy'));
        var actions;
        var pool;
        TD_Request("ds", "ord", {
            action: localStorage.getItem('buy')
        }, function (code, data) {
            console.log(data);
            RemoveStorage('buy');
            localStorage.setItem('actions', JSON.stringify(data.actions));
            actions = data.actions
            pool = data.pool;
            // 请求成功
            if (code == 0) {
                console.log(data)
                $('.dream_title').html(pool.ptitle);
                $('.mask .tip').html('您已成功参与' + pool.pid + '期小梦想互助')
                $('.help_money').html("￥" + pool.cbill / 100);
                $('.target_money').html("￥" + pool.tbill / 100)
                drawCircle(ctx, (pool.cbill / 100) / (pool.tbill / 100));
                // 能够卖的份数
                var num = 1;
                if (buy.buy.dayLim == 0) {
                    num = 0;
                }
                console.log(buy)
                $('.copies_money span').html(num);
                $('.price span.fee').html(pool.ubill / 100 * $('.copies_money span').html());
                $('.icon_add').click(function () {
                    // if (pay != null) {
                    //     alert('您还有尚未支付的订单，支付完成后重试')
                    //     return;
                    /* } else */if (actions.pay.pless - $('.copies_money span').html(num) == 0) {
                        $('.copies_money span').html('0');
                        alert('该梦想池已达到最大数量');
                        return;
                    } else {
                        num++;
                        console.log(actions.pay.pless - $('.copies_money span').html(num))
                        if (num > buy.buy.dayLim) {
                            num = buy.buy.dayLim;
                            $('.copies_money span').html(num);
                            console.log(num);
                        }

                        if (num > actions.pay.pless) {
                            num = actions.pay.pless;
                            $('.copies_money span').html(num);
                            console.log(num);
                        }

                        $('.copies_money span').html(num);
                        $('.price span.fee').html(pool.ubill / 100 * $('.copies_money span').html());
                        TD_Request('ds','ord',{
                            action:JSON.stringify(buy)
                        },function(code,data){
                            actions = data.actions
                            pool = data.pool
                        },function(code,data){
                            console.log(data)
                        })
                    }
                })
                $('.icon_incer').click(function () {
                    // if (pay != null) {
                    //     alert('您还有尚未支付的订单，支付完成后重试')
                    //     return;
                    // }
                    num--;
                    if (num <= 1) {
                        num = 1;
                        $('.copies_money span').html(num);
                    }
                    $('.copies_money span').html(num);
                    $('.price span.fee').html(pool.ubill / 100 * $('.copies_money span').html());
                    TD_Request('ds','ord',{
                        action:JSON.stringify(buy)
                    },function(code,data){
                        actions = data.actions
                        pool = data.pool;
                    },function(code,data){
                        console.log(data)
                    })
                })
                $('.price i').html(pool.ubill / 100 + "元/份");
            }
            // 倒计时
            if($_GET.state != 'trade'){
                Timeout()
                selectDream()
            }else{
                $('.timeout').html('')
                $('.help_money').css('top','1rem');
                $('.present_money').css('bottom','1.5rem')
                $('#dream').html(buy.buy.dream.title)
                $('.dream_tip').html('本期项目');
            }
            function Timeout(){
                setInterval(function () {
                    var ptime = parseInt(pool.ptime);
                    var daurtion = parseInt(pool.duration);
                    var time = parseInt(new Date().getTime() / 1000);
                    var timeout = parseInt((ptime + daurtion) - time);
                    if (timeout >= 0) {
                        var h = Math.floor(timeout / 60 / 60);
                        if (h < 10) {
                            h = "0" + h;
                        }
                        var m = Math.floor(timeout / 60 % 60);
                        if (m < 10) {
                            m = "0" + m;
                        }
                        var s = Math.floor(timeout % 60);
                        if (s < 10) {
                            s = "0" + s;
                        }
                        if (h == 0 && m == 0 && s == 0) {
                            window.location.reload();
                        }
                    }
                    $('.timeout_ui').html(h + ":" + m + ":" + s);
                }, 1000)
            }
            // 统一下单

            function wxpay(fee) {
                /*var actions = JSON.parse(window.localStorage.getItem('actions'));
			  
              TD_Request("ds","pay",{
                uid:userInfo.openid,
                oid:actions.pay.oid,
                bill:fee * 100,
                pcount:$('.copies_money span').html(),
                action:window.localStorage.getItem('actions'),
                did:$('#dream').attr("data-values")
              },function(code,data){
              //alert(JSON.stringify(data));
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
		  return;*/

                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', {
                    "appId": pay.appId, //公众号名称，由商户传入     
                    "timeStamp": pay.timeStamp, //时间戳，自1970年以来的秒数     
                    "nonceStr": pay.nonceStr, //随机串     
                    "package": pay.package,
                    "signType": pay.signType, //微信签名方式：     
                    "paySign": pay.paySign //微信签名 
                }, function (res) {
                    alert(JSON.stringify(res))
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        // var actions = JSON.parse(window.localStorage.getItem('actions'));

                        TD_Request("ds", "pay", {
                            uid: userInfo.openid,
                            oid: actions.pay.oid,
                            bill: fee * 100,
                            pcount: $('.copies_money span').html(),
                            action: JSON.stringify(actions),
                            did: $('#dream').attr("data-values")
                        }, function (code, data) {
                            // if($_GET.type == 'test'){
                            //     localStorage.setItem('img',imgArr[imgNum]);
                            //     localStorage.setItem('info',JSON.stringify({'did':$('#dream').attr('data-values'),'pid':pool.pid}));
                            //     // 关闭弹窗
                            //     localStorage.removeItem('buy');
                            //     window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.htm?time='+new Date().getTime();
                            // }else{

                            
                                // alert(JSON.stringify(data));
                                // $('.mask').fadeIn();
                                // localStorage.setItem('dr_did',$('#dream').attr('data-values'));
                                // var number = data.numbers;
                                // var lid = [];
                                // for (key in number) {
                                //     var obj = number[key];
                                //     lid.push(obj.lid)
                                // }
                                // if(userInfo.openid == 'oSORf5kkXvHNxhIx8lQVe3DFRFvw'){
                                //     alert(lid.join('、'))
                                // }
                                // $('.num').html(lid.join('、')).css("color", "#00d094");
                                // console.log(data)
                                localStorage.setItem('img',imgArr[imgNum]);
                                localStorage.setItem('info',JSON.stringify({'did':$('#dream').attr('data-values'),'pid':pool.pid}));
                                // 关闭弹窗
                                localStorage.removeItem('buy');
                                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.htm?time='+new Date().getTime();
                            // }
                        }, function (code, data) {
                            if(code == 75){
                                // localStorage.setItem('img',imgArr[imgNum]);
                                // localStorage.setItem('info',JSON.stringify({'did':$('#dream').attr('data-values'),'pid':pool.pid}));
                                // localStorage.removeItem('buy');
                                // window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.htm?time='+new Date().getTime();
                                // $('.mask').fadeIn();
                                // localStorage.setItem('dr_did',$('#dream').attr('data-values'));
                                // var number = data.numbers;
                                // var lid = [];
                                // for (key in number) {
                                //     var obj = number[key];
                                //     lid.push(obj.lid)
                                // }
                                // // if(userInfo.openid == 'oSORf5kkXvHNxhIx8lQVe3DFRFvw'){
                                // //     alert(lid.join('、'))
                                // // }
                                // $('.num').html(lid.join('、')).css("color", "#00d094");
                                // console.log(data)
                                // // 关闭弹窗
                                // localStorage.clear('buy');
                                localStorage.setItem('img',imgArr[imgNum]);
                                localStorage.setItem('info',JSON.stringify({'did':$('#dream').attr('data-values'),'pid':pool.pid}));
                                // 关闭弹窗
                                localStorage.removeItem('buy');
                                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.htm?time='+new Date().getTime();
                            }else{
                                alert(code);
                                alert('支付失败');
                            }
                        })
                    }
                });
            }

            $('.wxPay').click(function () {
                // if($_GET.type=='get'){
                //     localStorage.setItem('img',imgArr[imgNum]);
                //     localStorage.setItem('info',JSON.stringify({'did':$('#dream').attr('data-values'),'pid':pool.pid}));
                //     // 关闭弹窗
                //     localStorage.removeItem('buy');
                //     window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.htm?time='+new Date().getTime();
                // }
                if ($('#dream strong').html() == '') {
                    alert('请选择梦想后进行支付！');
                    return;
                }
                if ($('.price span.fee').html() == 0) {
                    alert('支付失败');
                    return;
                }
                var did = $('#dream').attr("data-values");
                var fee = $('.price span.fee').html();
                console.log(fee);
                // if (pay == null) {
                //     console.log("pay is null", data.order.oid, fee * 100, userInfo.openid);
                    TD_Request("ds", "wxpayweb", {
                        oid: actions.pay.oid,
                        bill: fee * 100,
                        uid: userInfo.openid
                    }, function (code, data) {
                        console.log(data);
                        alert(JSON.stringify(data))
                        if (code == 0) {
                            pay = data;
                            wxpay(fee)
                        }
                    }, function (code, data) {
                        alert(JSON.stringify(data))
                        console.log(data)
                    });
                // } else {
                //     console.log("pay is not null");
                //     wxpay(fee)
                // }
            })
        }, function (code, data) {
            // 请求失败
            if (code != 0) {
                console.log(data)
            }
        })
        // 选择梦想
        function selectDream(){
            TD_Request('dr', 'dlist', {
                uid: userInfo.openid
            }, function (code, data) {
                if (code == 0) {
                    var arr = [];
                    var dreamArr = [];
                    // if(data.dreams.state == 'SUBMIT' || data.dreams.state == 'FAILED'){
                    //     dreamArr.push(data.dreams)
                    // }
                    $.each(data.dreams, function (index, item) {
                        if(item.state == 'SUBMIT' || item.state == 'FAILED'){
                            dreamArr.push(item)
                        }
                    })
                    $.each(dreamArr,function(index,item){
                        arr.push({
                            title: item.title,
                            value: item.did
                        });
                    })
                    console.log(arr[arr.length - 1])
                    if (arr[arr.length - 1].title.length > 4) {
                        $('.dream strong').html(arr[arr.length - 1].title.substr(0, 4).concat('...'));
                    } else {
                        $('.dream strong').html(arr[arr.length - 1].title);
                    }
                    $('.dream').attr('data-values', arr[arr.length - 1].value);
                    $('.dream').select({
                        title: "选择梦想",
                        items: arr,
                        onClose: function () {
                            if (typeof $('.weui_cell_ft input:radio[name="weui-select"]:checked').parent('.weui_cell_ft').prev()
                                .children('p').html() == 'undefined') {
                                $('.dream strong').html($('.weui_cell_ft input:radio[name="weui-select"]:checked').parent(
                                    '.weui_cell_ft').prev().children('p').html())
                            } else {
                                // if(userInfo.openid == 'oSORf5hkHfOy3Yo4FQIPdbHKQljM' || userInfo.openid == 'oSORf5kn6hr_H5ZSRyYSHFUzyBd4' || userInfo.openid == 'oSORf5kkXvHNxhIx8lQVe3DFRFvw'){
                                //     localStorage.setItem('dream',$('.weui_cell_ft input:radio[name="weui-select"]:checked').parent(
                                //         '.weui_cell_ft').prev().children('p').html());
                                //     window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.htm';
                                // }
                                if ($('.weui_cell_ft input:radio[name="weui-select"]:checked').parent('.weui_cell_ft').prev()
                                    .children('p').html().length > 4) {
                                    $('.dream strong').html($('.weui_cell_ft input:radio[name="weui-select"]:checked').parent(
                                        '.weui_cell_ft').prev().children('p').html().substr(0, 4).concat('...'))
                                } else {
                                    $('.dream strong').html($('.weui_cell_ft input:radio[name="weui-select"]:checked').parent(
                                        '.weui_cell_ft').prev().children('p').html())
                                }
                            }
    
                            console.log($('.weui_cell_ft input:radio[name="weui-select"]:checked').parent('.weui_cell_ft').prev()
                                .children('p').html())
                        }
                    });
                }
            }, function (code, data) {
                console.log(data)
            })
        }
        ready();
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext("2d");

        function ready() {
            var canvas = document.getElementById('bottom');
            var cxt_arc = canvas.getContext("2d");
            cxt_arc.lineWidth = 15;
            cxt_arc.strokeStyle = '#edf0f5';
            cxt_arc.lineCap = 'round';
            cxt_arc.beginPath();
            cxt_arc.arc(95, 95, 80, 0, 2 * Math.PI, false);
            cxt_arc.stroke();
        }

        function drawCircle(ctx, prop) {
            if (prop == 0) {
                ctx.clearRect(0, 0, 190, 190);
            } else {
                prop = prop * 2;
            }
            ctx.clearRect(0, 0, 190, 190);
            ctx.fillStyle = 'white';
            ctx.clearRect(0, 0, 190, 190);
            ctx.lineWidth = 15;
            ctx.strokeStyle = '#ffc057';
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(95, 95, 80, Math.PI / -2, prop * Math.PI - Math.PI / 2, false);
            ctx.stroke()
        }

        $('.close').click(function () {
            $('.mask').fadeOut();
            TD_Request('dp','pinfo',{
                pid:pool.pid
            },function(code,data){
                var obj = DreamPoolAnalysis(data.pool)
                console.log(obj)
                localStorage.setItem('poolInfo',JSON.stringify(obj))
                // if(userInfo.openid == 'oSORf5hkHfOy3Yo4FQIPdbHKQljM') {
                //     return;
                // }
                if(obj.state == 'RUNNING'){
                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/helpInfo.html";
                }else{
                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/end.html";
                }    
            },function(code,data){
                console.log(data);
            })
        })

        //分享

        $('.share').click(function () {
            $('.icon').show()
        })
        $('.icon.close').click(function () {
            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dreamHelp.html";
        })
    })
}