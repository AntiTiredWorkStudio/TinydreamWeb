
WebApp.JSAPI.Init();
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
        if(poolInfo.ptype != 'TRADE'){
            timeout()
        }else{
            $('.timeout').html('')
            $('.help_money').css('top','1rem');
            $('.present_money').css('bottom','1.5rem')
        }
       function timeout(){
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
        } 
        $('.state').html('互助中');
        $('.join_help').html('参与互助').css({background:'#00d094',color:'#fff'}).removeAttr('disabled')

        function buy(state,pid){
            if(state == 'trade'){
                TD_Request("ds","buy",{
                    uid:userInfo.uid,
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
                    uid:userInfo.uid,
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

        $('.join_help').click(function(e){
            e.stopPropagation();
            if(poolInfo.ptype == 'TRADE'){
                buy('trade',poolInfo.pid)
            }else{
                buy('dream',poolInfo.pid)
            }
            // console.log(data)
           
        })
    }else if(poolInfo.state != "RUNNING"){
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/end.html?time='+new Date().getTime()
    }

    // 获取参与总数
    TD_Request('ds','precs',{
        pid:poolInfo.pid
    },function(code,data){
        $('.count').html(poolInfo.pcount)
    },function(code,data){
        console.log("获取失败："+data.context)
    })
    $('.tab div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    var num;
    num = 0;
    $('.right').click(function(){
        num == 0;
        $('.user_number').show();
        $('.tabList').empty().hide();
        $('.user_number').empty();
        getord(num);
    })
    $('.left').click(function(){
        $('.user_number').empty().hide();
        $('.tabList').show();
        $('.tabList').empty();
        self_tab(); 
    })
    $('.btns.click').click(function(){
        num = num+10;
        getord(num)
    })
    // // 获取编号
    self_tab();
    function self_tab(){
        $('.tabList').empty();
        TD_Request('ds','pdetial',{
            uid:userInfo.openid,
            pid:poolInfo.pid
        },function(code,data){
            // console.log(data)
            $('.btns').hide();
			$('.tips,.click').hide();
            if(data.lottey.length == 0){
                $('.tip').html('您尚未参与互助').show();
            }else{
                $('.tips,.click').hide();
                $('.tips,.click').hide();
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
		TD_Request('ds','precs',{pid:poolInfo.pid},
			function(code,data){
				var orderCount = data.ordCount;
				if(orderCount == 0){
					$('.tip').html('此梦想池没有用户参与').show();
					$('.btns').hide();
				}else{
					$('.tip').html('此梦想池没有用户参与').hide();
					$('.btns').show();
				}
				TD_Request('ds','preco',{
					pid:poolInfo.pid,
					min:number,
					max:10
				},function(code,data){
					// console.log(data)
                    // console.log(number+10);
                    if(data.orders.length==0){
                        $('.btns').hide();
						$('.tips').html('我是有底线的~~').show();
                    }else{
                        $('.btns').show();
						$('.tips').html('我是有底线的~~').hide();
                    } 
					$.each(data.orders,function(index,item){
                        if(item.dtitle.length>7){
                            item.dtit = item.dtitle.substring(0,7)+'...';
                        }else{
                            item.dtit = item.dtitle;
                        }
						$('<div class="user"><div class="phone">'+item.tele+'</div><div class="num">'+item.dcount+' 份</div><div class="look" style="color:#00d094" oid='+item.oid+'>查看编号</div><div class="title"><xmp>'+item.dtit+'</xmp></div></div>').appendTo('.user_number');
					})
					var str = ''//编号
					$('.look').click(function(){
						TD_Request('aw','onums',{
							oid:$(this).attr('oid')
						},function(code,data){
							// console.log(data);
							var str = '';
							$.each(data.nums,function(index,item){
								str = str+=item.lid+'；'
							})
							// console.log(str)
							alert('编号\n'+str);
						},function(code,data){
							console.log(data)
						})
					})
					// if(number+10 >= orderCount){
					// 	$('.btns').hide();
					// 	$('.tips').html('我是有底线的~~').show();
					// 	return;
					// }else{
					// 	$('.btns').html('点击加载更多').show();
					// 	$('.tips').html('我是有底线的~~').hide()
					// }
				},function(code,data){
					console.log(data)
				})
			},
			 function(code,data){}
		)
		/*
		return;		
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
            // console.log(data)
            // console.log(number+10);
            var str = ''//编号
            $('.look').click(function(){
                TD_Request('aw','onums',{
                    oid:$(this).attr('oid')
                },function(code,data){
                    // console.log(data);
                    var str = '';
                    $.each(data.nums,function(index,item){
                        str = str+=item.lid+'；'
                    })
                    // console.log(str)
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
    */
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
    // WebApp.JSAPI.Init()
});