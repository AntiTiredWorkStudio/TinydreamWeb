WebApp.JSAPI.Init();
$(function(){
    window.localStorage.clear();
    Loading();
    $('.packmask').css('height',$(window).height());
     // 检测是否登录
     WebApp.Init('wxc5216d15dd321ac5',//appid
        function(result,data){//result:请求状态,data 请求结果
           //alert(result);
           console.log(result,data);
           var userInfo = Options.GetUserInfo();
          // alert(userInfo.openid);
          var did;//幸运梦想编号
          $('#test').html(JSON.stringify(Options.GetUserInfo()));
           // 系统通知
           $('.right').click(function(){
               window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/notice.html?time="+new Date().getTime()
           })
        //    $('#banner').swipeslider();

            //   $('.footer ul li.last a').attr('href','javascript:;').click(function(){
            //     window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/user.html?type=test'
            // })
           //    测试
        //    if($_GET.type == 'test'){
            
        //    }else{
            $('.banner2').hide();
            // $('.banner1').show();
            $('.home .swiper-container').css({
                width: '6.8rem',
                height: '1.86rem',
                margin: "0.2rem auto"
            })
        //    }
           $('.banner1').click(function(){
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/question.html?time="+new Date().getTime()
            })
            $('.banner2').click(function(){
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html?time="+new Date().getTime()
            })
            // if(userInfo.openid == 'oSORf5kkXvHNxhIx8lQVe3DFRFvw' || userInfo.openid == 'oSORf5kn6hr_H5ZSRyYSHFUzyBd4'){
            //     $('.banner2').show();
            //     $('.banner1').hide()
            // }else{
            //     $('.banner1').show()
            //     $('.banner2').hide()
            // }
            // $('.banner2').click(function(){
            //     if(userInfo.openid == 'oSORf5kkXvHNxhIx8lQVe3DFRFvw' || userInfo.openid == 'oSORf5kn6hr_H5ZSRyYSHFUzyBd4'){
            //         window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/R_payInfo.html'
            //     }
            // })
        //    清除mainpool
           if(localStorage.getItem('mainpool')){
               localStorage.clear('mainpool')
           }
           TD_Request("no","nc",{
                uid:userInfo.openid
            },function(code,data){
                // console.log(data)
                if(data.ncount == 0){
                    $('.icon_notice').addClass('hide')
                }else{
                    $('.icon_notice').removeClass('hide');
                }
                $('.ntext').html(data.ncount).css("font-size","6px")
            },function(code,data){
                // console.log(data)
            })
			
           TD_Request("us", "enter", {
               uid:userInfo.openid,
               nickname:userInfo.nickname,
               headicon:userInfo.headimgurl
           }, function (code, data) {
             FinishLoading();
            //请求成功的处理
            if(code == 0) {
                console.log(data)
                did = data.award.did;
                // 首页公屏
                // console.log(data)
                var buyinfo = data.buyinfo;
                if(buyinfo == "" || null){
                    $('.tip').show();
                }else{
                    console.log(buyinfo)
                    var info;
                    info = buyinfo.shift();
                    buyinfo.push(info)
                    $('.tip').hide();
                    $('.logo').css('background-image','url('+info.headicon+')');
                    $('.username').html(info.nickname);
                    var date = parseInt(new Date().getTime() / 1000);
                    var time = DescriptionTime(date - info.ptime);
                    info.time = time;
                    $('.male_tip').html(info.time+"前参与了"+info.dcount+"份小梦想").fadeIn()
                    setInterval(function(){
                        info = buyinfo.shift();
                        buyinfo.push(info)
                        $('.tip').hide();
                        if(info.headicon == '' ){
                            info.headicon = 'https://tdream.antit.top/image/miniLogo.jpg'
                        }
                        $('.logo').css('background-image','url('+info.headicon+')');
                        $('.username').html(info.nickname);
                        var date = parseInt(new Date().getTime() / 1000);
                        var time = DescriptionTime(date - info.ptime);
                        info.time = time;
                        $('.male_tip').html(info.time+"前参与了"+info.dcount+"份小梦想").fadeIn()
                    },4000)
                    // console.log(info)
                   
                    // var templateStr = $('#template').html();
                    // var complid = _.template(templateStr);
                    // _.each(info,function(item){
                    //     // console.log(item)
                    //     var date = parseInt(new Date().getTime() / 1000);
                    //     var time = DescriptionTime(date - item.ptime);
                    //     // console.log(timer);
                    //     item.time = time;
                    //     var str = complid(item);
                    //     $dom = $(str);
                    //     $dom.appendTo('.cont');
                    // })
                }
                // 梦想互助池
                var mainpool = data.mainpool;
                if(mainpool.length == 0 || mainpool == ''){
                    $('.help').html("暂无更多梦想池").css({
                        "text-align":"center",
                        "height":"1.5rem",
                        "font-size":"0.32rem",
                        "line-height":"1.5rem",
                        "color":"#CCC",
                    });
                    return;
                }
                // 标题
                $('.pool_title').html(mainpool.ptitle);
                // 目标互助金
                $('.help_number').html(mainpool.tbill / 100 + '元');
                // 当前互助累计金额
                $('.money_number').html("￥"+mainpool.cbill / 100);
                // 单价
                $('.price_number').html(mainpool.ubill / 100 +"元/份");
                console.log(mainpool)
                if(mainpool.ubill == mainpool.tbill){
                    window.location.reload();
                }
                var prop = (mainpool.cbill / 100) / (mainpool.tbill / 100);
                ready();
                drawCircle(ctx,prop);
                // 遮罩层
                if(!data.award.result){
                    $('.mask').hide();
                }else{
                    console.log(data.award);
                    console.log(data)
                    $('.mask').fadeIn();
					$('#awardHint').html(
						"恭喜您成为梦想互助"+data.award.pid+"期幸运者,请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内为您颁发梦想互助金!"
					);
					$('#btn_perfect').click(
						function(res){
                            res.stopPropagation()
                            console.log(res)
							$('.mask').hide();
                            SaveStorage("award",JSON.stringify(data.award));
                            SaveStorage("award",JSON.stringify({'did':did,state:'all'}));
                            TD_Request('us','rnamegx',{
                                uid:userInfo.openid
                            },function(code,data){
                                console.log(data)
                                localStorage.setItem('dr','{"did":"'+did+'","state":"all"}')
                                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/add.html?time='+new Date().getTime()
                            },function(code,data){
                                console.log(data)   
                               alert('您还未实名认证，请认证后在进行完善')
                               window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/auth.html?time='+new Date().getTime()
                            });
						}
					);
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
                        // console.log(data);
                        if(code == 0 || data.result == true){
                            console.log(data)
                            if(!data.actions.hasOwnProperty('editdream')){
                                // console.log(data.actions.editdream)
                                // return;
                                localStorage.setItem('buy',JSON.stringify(data.actions));
                                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html?time="+new Date().getTime();
                            }else{
                                if(confirm("您还没有添加梦想，添加梦想后才能参与互助")){
                                    localStorage.setItem('buy',JSON.stringify(data.actions));
									localStorage.setItem('mainpool',JSON.stringify(mainpool));
                                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html?time="+new Date().getTime()
                                }else{
                                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/index.html?time="+new Date().getTime()
                                }
                            }
                        }
                    },function(code,data){
                        if(code == 11 || !data.result){
                            alert("您尚"+data.context+",绑定手机后才能继续参与互助");
                            localStorage.setItem('mainpool',JSON.stringify(mainpool));
                            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html?time="+new Date().getTime();
                        }else if(code == 18){
                            alert("您当日购买次数已达上限");
                            return;
                        }
                    })
                })
                // 倒计时
               var timer = setInterval(function(){
                var ptime = parseInt(data.mainpool.ptime);
                var daurtion = parseInt(data.mainpool.duration);
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
                $('.timeout').html(h+":"+m+":"+s);
               },1000)
                
            }
          }, function (code, data) {
             FinishLoading();
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
        window.location.href="html/dreamHelp.html?time="+new Date().getTime()
    })
    //客服
    $('.icon_notice .left').click(function(){
        window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/cach.html"
    })
    // banner
    // $('.banner').click(function(){
    //     window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/question.html"
    // })
    // 首页轮播
    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
    // });
    $('.close').click(function(){
        $(this).fadeOut();
    })
})