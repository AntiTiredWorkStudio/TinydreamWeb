console.log(WebApp);
WebApp.JSAPI.Init();
$(function(){
    var userInfo = Options.GetUserInfo();
    if(PERMISSION_USER(userInfo.openid)){
        // console.log("is test user");
        Options.TestServer = true;
    }else{
        Options.TestServer = false;
    }
    // 获取模板字符串
    // WebApp.JSAPI.Init()
    var templateStr = $('#template').html();
    var compolied = _.template(templateStr);
    // 获取梦想添加信息
    var dream = JSON.parse(localStorage.getItem('buy'))
    // 获取梦想列标
	$('.dream_list').empty();
    update();
    function update(){
        TD_Request("dr","dlist",{
            uid:userInfo.openid
        },function(code,data){
            if(code == 0){
                if(data.dreams.length == 0){
                    $('.empty').show();
                    $('.dream_main').hide();
                }else{
                    if(data.dreams.length >= 5){
                        $('.add').hide()
                    }
                    _.each(data.dreams,function(item,index){
                        if(item.state == "VERIFY"){
                            item.status ='审核中';
                         }
                        if(item.state == "DOING"){
                            item.status ='正在进行';
                         }
                        if(item.state == "SUCCESS"){
                            item.status ='成功';
                         }
                         if(item.state == "FAILED"){
                             item.status ='失败(过期)';
                         }
                         if(item.state == "SUBMIT"){
                             item.status ='未中奖';
                         }  
						 console.log("state",item);
                        var str = compolied(item);
                        var $dom = $(str);
                        $dom.appendTo('.dream_list');
                    })
                    var arr = [];
                    var j = 0;
                    var oldarr = data.dreams;

                    for(let i in oldarr){
                        if(oldarr[i].state == 'VERIFY' || oldarr[i].state == 'DOING' || oldarr[i].state == 'SUCCESS'){
                            arr[j++] = oldarr[i];
                        }
                    }

                    console.log(arr);

                    
                    if(data.dreams.length - arr.length >= 5){
                        $('.add').hide()
                    } else {
                        $('.add').show()
                    }
                    // 查看小梦想详情
                    $('.view').click(function(){
						if($(this).attr('data-state') == "DOING" || $(this).attr('data-state') == "VERIFY" || $(this).attr('data-state') == "SUCCESS"){
							onDreamSwitch({currentTarget:{id:'tab_lucky'}});
							return;
						}else{
							var dr = {did:$(this).attr('data-id'),state:''}
							localStorage.setItem('dr',JSON.stringify(dr))
							window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/add.html?time="+new Date().getTime()
						}
                    })
                    
                }
            }
        },function(code,data){
            console.log("缺少参数"+data.context);
        })
    }
   
	var onDreamSwitch = function(res){
        $('.dream_list').empty();
		
		$("#tab_dream").removeClass('active');
		$("#tab_lucky").removeClass('active');
		
		$("#"+res.currentTarget.id).addClass('active');
		
        //$(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).index());
		
        if(res.currentTarget.id == "tab_dream"){
            $('.add').show();
            update();
        }else{
            $('.add').hide();
            TD_Request("dr","dlist",{
                uid:userInfo.openid
            },function(code,data){
                console.log(data)
                if(code == 0){
                    if(data.dreams.length == 0){
                        $('.empty').show();
                        $('.dream_main').hide();
                    }else{
						$('.dream_list').empty();
                        _.each(data.dreams,function(item){
                            if(item.state == "SUCCESS" || item.state == "DOING" || item.state == "VERIFY"){
								console.log(item);
                                $("<div class='luckyDream' data-lucky='"+JSON.stringify(item)+"' data-dream='"+item.id+"'><div class='dream_logo'>"+item.pool.cbill / 100+"</div><div class='dream_right'><div class='dream_msg'><span>"+item.title+"</span>"+((item.state == "SUCCESS")?"<div class='icon_success'></div>":"")+"</div> <div class='tip'><span class='tip_text'>"+item.pool.ptitle+"</span></div></div></div>").appendTo('.dream_list')
                            }
                        })
                        $('.luckyDream').click(function(){
                            localStorage.setItem('did',$(this).index()+1)
                            localStorage.setItem('lucky',$(this).attr('data-lucky'))
                            window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/luckyDream.html?time='+new Date().getTime()
                        })
                    }
                }
            },function(code,data){
                console.log("缺少参数"+data.context);
            })
        }
    }
	 // 类型切换
    $('.dream_type ul li').click(onDreamSwitch)
	
	if(ExistStorage('award')){
        var awardCache = JSON.parse(GetStorage('award'));
        console.log(awardCache)
		RemoveStorage('award');
		if(awardCache.result){
			onDreamSwitch({currentTarget:{id:"tab_lucky"}});
		}
	}
	if(ExistStorage('mainpool')){
        $('.close').fadeIn();
	}
    // 添加梦想
    $('.add').click(function(){
        $('.close').fadeIn();
    })
    $('.off').click(function(){
        $('.close').fadeOut();
    })
    // 发布梦想
    if($_GET.dream == 'false'){
        $('.close').fadeIn()
    }else{
        $('.close').hide()
    }
    $('.submit').click(function(){
        if($('.title').val() == ""){
            alert('梦想标题不能为空');
            console.log($('.check').val())
            return;
        }else if($('.info').val() == ""){
            alert("梦想简介不能为空");
            return;
        }else if(!$("input[type='checkbox']").is(':checked')){
            alert('您还没有同意协议呢！');
            return;
        }else{
            TD_Request("dr","dedit",{
                uid:userInfo.openid,
                title:$('.title').val(),
                content:$('.info').val()
            },function(code,data){
                console.log(data)
                if($_GET.dream == 'false'){
                    var flag = $_GET.dream;
                    flag = 'true';
                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/GetRedPack.html?time="+new Date().getTime();
                }else if(typeof dream == 'undefined' || dream == '' || dream == null){
                    window.location.reload()
                }else if(dream.hasOwnProperty('editdream')){
                    update();
                    var mainpool = JSON.parse(localStorage.getItem('mainpool'));
                    RemoveStorage('mainpool');
                    if(mainpool == '' || mainpool == undefined){
                        window.location.href = "http://tinydream.antit.top/TinydreamWeb/index.html?time="+new Date().getTime();
                    }else{
                        console.log(mainpool)
                        TD_Request("ds","buy",{
                            uid:userInfo.openid,
                            pid:mainpool.pid
                        },function(code,data){
                            if(code == 0 || data.result == true){
                                console.log(data)
                                if(!data.actions.hasOwnProperty('editdream')){
                                    console.log(data.actions)
                                    localStorage.setItem('buy',JSON.stringify(data.actions));
                                    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/payInfo.html?time="+new Date().getTime();
                                }
                            }
                        },function(code,data){
                            console.log(data)
                        })
                    }
                }else{
                  window.location.reload()
                }               
            },function(code,data){
                alert(data.context)
            })
        }
    })
    if($("input[type='checkbox']").is(':checked')){
        $(".chec label").css({
            background:"url(https://tdream.antit.top/image/Toggle_True.jpg) no-repeat",
            "background-size":"0.3rem 0.3rem"
        })
    }else{
        $(".chec label").css({
            background:"url(https://tdream.antit.top/image/Toggle_False.jpg) no-repeat",
            "background-size":"0.3rem 0.3rem"
        })
    }
   $('.chec').click(function(){
        if($("input[type='checkbox']").is(':checked')){
            $(".chec label").css({
                background:"url(https://tdream.antit.top/image/Toggle_True.jpg) no-repeat",
                "background-size":"0.3rem 0.3rem"
            })
        }else{
            $(".chec label").css({
                background:"url(https://tdream.antit.top/image/Toggle_False.jpg) no-repeat",
                "background-size":"0.3rem 0.3rem"
            })
        }
        // console.log($("input[type='checkbox']").is(':checked'))
   })
   $('.xieyi').click(function(){
    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/xieyi.html?time="+new Date().getTime()
})
    // WebApp.JSAPI.Init()
})