WebApp.JSAPI.Init();
$(function(){
    window.localStorage.clear();
    Loading();
    $('.packmask').css('height',$(window).height());
     // 检测是否登录
     WebApp.Init('wxc5216d15dd321ac5',//appid
     function fun(result,data){//result:请求状态,data 请求结果
        //alert(result);
        var userInfo = Options.GetUserInfo();
        // console.log(result,data);
        if(PERMISSION_USER(userInfo.openid)){
            // console.log("is test user");
            Options.TestServer = true;
        }else{
            $('.tab-nav-item').eq(1).click(function(){
                $('.lucky a').hide()
            })
            $('.tab-nav-item').eq(0).click(function(){
                $('.lucky a').show()
            })
            Options.TestServer = false;
        }
        // Options.TestServer = true;
        // Options = {
        //     Auth: null,
        //     AccessToken: null,
        //     UserInfo: JSON.stringify({
        //         openid:"oSORf5kkXvHNxhIx8lQVe3DFRFvw",//"on8W94tv5jTTiItf1uJCBdLJPyic",
        //         headimgurl:"http://thirdwx.qlogo.cn/mmopen/vi_32/xO4y8dNCtic6O4iccJmKHGN0IQY0ImY8zwRSqOVYhRYPp5rPMNCrvIQ15oOrOOwCq6vyBCGJ1gDa3J51sUvo7eDw/132",
        //         nickname:"暮色👑 微凉城",
        //     }),
        //     GetUserInfo: function () {
        //         return this.UserInfo != null ? JSON.parse(this.UserInfo) : null;
        //     }
        // }
        
        // var userInfo = {
        //     openid:"oSORf5kkXvHNxhIx8lQVe3DFRFvw",//"on8W94tv5jTTiItf1uJCBdLJPyic",
        //         headimgurl:"http://thirdwx.qlogo.cn/mmopen/vi_32/xO4y8dNCtic6O4iccJmKHGN0IQY0ImY8zwRSqOVYhRYPp5rPMNCrvIQ15oOrOOwCq6vyBCGJ1gDa3J51sUvo7eDw/132",
        //         nickname:"暮色👑 微凉城",
        // }
        // localStorage.setItem('UserInfo',JSON.stringify(userInfo))
        // console.log(userInfo);
        
       // alert(userInfo.openid);
       var did;//幸运梦想编号
       var trdid;//生意幸运者编号
       $('#test').html(JSON.stringify(Options.GetUserInfo()));
        // 系统通知
        $('.right').click(function(){
            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/notice.html?time="+new Date().getTime()
        })
        $('#banner').swipeslider();

         //   $('.footer ul li.last a').attr('href','javascript:;').click(function(){
         //     window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/user.html?type=test'
         // })
        //    测试
     //    if($_GET.type == 'test'){
         
     //    }else{
         // $('.banner2').hide();
         // $('.banner1').show();
         // $('.home .swiper-container').css({
         //     width: '6.8rem',
         //     height: '1.86rem',
         //     margin: "0.2rem auto"
         // })
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
             trdid = data.tradeaward.did;
             // 首页公屏
             // console.log(data)
             var buyinfo = data.buyinfo;
             if(buyinfo == "" || null){
                 $('.tip').show();
             }else{
                 console.log(buyinfo)
                 var info;
                 info = buyinfo.shift();
                 console.log(info)
                 buyinfo.push(info)
                 $('.tip').hide();
                 $('.logo').css('background-image','url('+info.headicon+')');
                 $('.username').html(info.nickname);
                 var date = parseInt(new Date().getTime() / 1000);
                 var time = DescriptionTime(date - info.ptime);
                 info.time = time;
                 if(info.ptype == 'TRADE'){
                     info.ptype = "份小生意"
                 }else{
                     info.ptype = "份小梦想"
                 }
                 $('.male_tip').html(info.time+"前参与了"+info.dcount + info.ptype).fadeIn()
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
                     if(info.ptype == 'TRADE'){
                        info.ptype = "份小生意"
                    }else{
                        info.ptype = "份小梦想"
                    }
                    $('.male_tip').html(info.time+"前参与了"+info.dcount + info.ptype).fadeIn()
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
             var maintrade = DreamPoolAnalysis(data.maintrade);
             console.log(maintrade)
             if(maintrade.length == 0 || maintrade == ''){
                $('.YB_help').html("暂无更多梦想池").css({
                    "text-align":"center",
                    "height":"1.5rem",
                    "font-size":"0.32rem",
                    "line-height":"1.5rem",
                    "color":"#CCC",
                });
                $('.YB_help').click(function(){
                    return false;
                })
             }
             if(mainpool.length == 0 || mainpool == ''){
                 $('.help').html("暂无更多梦想池").css({
                     "text-align":"center",
                     "height":"1.5rem",
                     "font-size":"0.32rem",
                     "line-height":"1.5rem",
                     "color":"#CCC",
                 });
                 $('.help').click(function(){
                     return false;
                 })
             }
             // 标题

             $('.pool_title').html(mainpool.ptitle);
             // 目标互助金
             $('.help_number').html(mainpool.tbill / 100 + '元');
             // 当前互助累计金额
             $('.money_number').html("￥"+mainpool.cbill / 100);
             // 单价
             $('.price_number').html(mainpool.ubill / 100 +"元/份");



             $('.YB_title span').html(maintrade.ptitle)
             $('.YB_txt').html(maintrade.billHint);
             $('.bill').html(maintrade.realBill + maintrade.realUnit)
             $('.tbill').html(maintrade.rtbillValue + maintrade.rtbillUnit)
             $('.ubill').html(maintrade.rubillValue + maintrade.rubillUnit)
             $('.progress-bar').progressBar('set', maintrade.realBill / maintrade.rtbillValue);
             $('.YB_help').click(function(e){
                e.stopPropagation();
                console.log(maintrade.trade)
                localStorage.setItem('pid',maintrade.pid);
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/trade.html?id="+maintrade.trade.url;
            })


             console.log(mainpool)
             var prop = (mainpool.cbill / 100) / (mainpool.tbill / 100);
             if(mainpool.length != 0){
                if(mainpool.ubill == mainpool.tbill){
                    console.log(mainpool)
					if(PERMISSION_USER(userInfo.openid)){
						alert("maintrade.realBill == maintrade.rtbillValue");
					}
                    window.location.reload();
                }
                ready();
                drawCircle(ctx,prop);
             }

             if(maintrade.length != 0){
                $('.bg').css({
                    background:'url('+maintrade.trade.bannerUrl+') no-repeat',
                    'background-size':'6.8rem 3.86rem'
                })
                if(maintrade.realBill == maintrade.rtbillValue){
					if(PERMISSION_USER(userInfo.openid)){
						alert("maintrade.realBill == maintrade.rtbillValue");
					}
                    window.location.reload();
                }
             }
             // 遮罩层
             if(!data.award.result){
                 $('.mask').hide();
                 console.log(data)
             }else{
                 console.log(data.award);
                 console.log(data)
                 $('.mask').fadeIn();
                 if(data.tradeaward.length == 0){
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
                 }else{
                    $('#awardHint').html(
                        "恭喜您参与的小生意互助"+data.tradeaward.pid+"期成为幸运者，幸运编号为"+data.tradeaward.lid+"，本期免费获得项目为："+data.tradeaward.trade.title+".   我们工作人员会在3个工作日内联系您安排项目对接，请您保持电话畅通。 提示：为更好地给您对接项目，请您务必在7个工作日内完成实名认证。"
                    ).css('font-size','0.24rem');
                    $('#btn_perfect').html('ok,我知道了').click(function(){
                        SaveStorage("award",JSON.stringify(data.tradeaward));
                        SaveStorage("award",JSON.stringify({'did':did,state:'all'}));
                        localStorage.setItem('dr','{"did":"'+trdid+'","state":"all"}')
                        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/add.html?time='+new Date().getTime()
                    })
                    TD_Request('us','rnamegx',{
                        uid:userInfo.openid
                    },function(code,data){
                        console.log(data)
                        localStorage.setItem('dr','{"did":"'+trdid+'","state":"all"}')
                        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/add.html?time='+new Date().getTime()
                    },function(code,data){
                        console.log(data)   
                        $('#btn_perfect').html('实名认证').click(function(){
                            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/auth.html?time='+new Date().getTime()
                        })  
                    });
                 } 
             }

             function buy(state,pid){
                if(state == 'trade'){
                    TD_Request("ds","buy",{
                        uid:data.selfinfo.uid,
                        pid:pid
                    },function(code,data){
                        // console.log(data);
                        if(code == 0 || data.result == true){
                            console.log(data)
                            localStorage.setItem('buy',JSON.stringify(data.actions));
                            // alert(1)
                            window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html?state=trade&time="+new Date().getTime();
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
                }else{
                    TD_Request("ds","buy",{
                        uid:data.selfinfo.uid,
                        pid:pid
                    },function(code,data){
                        // console.log(data);
                        if(code == 0 || data.result == true){
                            if(!data.actions.hasOwnProperty('editdream')){
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
                }
             }

             // 点击参与互助
             // 参与互助
             $('.join').click(function(e){
                 e.stopPropagation();
                 // console.log(data)
                 buy('dream',mainpool.pid);
             })
             $('.YB_join').click(function(e){
                e.stopPropagation();
                // alert(1)
                 buy('trade',maintrade.pid);
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
					if(PERMISSION_USER(userInfo.openid)){
						alert("h == 0 && m==0 && s==0");
					}
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
			if(PERMISSION_USER(userInfo.openid)){
				alert(JSON.stringify(data));
			}
             window.location.reload();
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


        $('.tab-nav-item').eq(1).click(function(){
          $('.lucky a').attr('href','html/luckyer.html')
        })
        $('.tab-nav-item').eq(0).click(function(){
          $('.lucky a').attr('href','html/luckyer.html')
        })
})