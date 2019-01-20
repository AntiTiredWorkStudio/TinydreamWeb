$(function(){
    // 获取模板字符串
    // WebApp.JSAPI.Init()
    var templateStr = $('#template').html();
    var compolied = _.template(templateStr);
    // 获取梦想添加信息
    var dream = JSON.parse(localStorage.getItem('buy'))
    // 获取梦想列标
    var userInfo = Options.GetUserInfo();
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
                    _.each(data.dreams,function(item){
                        var str = compolied(item);
                        var $dom = $(str);
                        $dom.appendTo('.dream_list');
                        if(item.state == "SUCCESS" || item.state == "DOING"){
                            $('.time').html('成功')
                         }
                         if(item.state == "FAILED"){
                             $('.time').html('失败')
                         }
                         if(item.state == "SUBMIT"){
                             $('.time').html('未中奖')
                         }  
                    })
                    // 查看小梦想详情
                    $('.view').click(function(){
                        var dr = {did:$(this).attr('data-id'),state:''}
                        localStorage.setItem('dr',JSON.stringify(dr))
                        window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/add.html"
                    })
                    
                }
            }
        },function(code,data){
            console.log("缺少参数"+data.context);
        })
    }
    // 类型切换
    $('.dream_type ul li').click(function(){
        $('.dream_list').empty();
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).index());
        if($(this).index() == 0){
            $('.add').show();
            update();
        }else{
            $('.add').hide();
            TD_Request("dr","dlist",{
                uid:userInfo.openid
            },function(code,data){
                if(code == 0){
                    if(data.dreams.length == 0){
                        $('.empty').show();
                        $('.dream_main').hide();
                    }else{
                        _.each(data.dreams,function(item){
                            if(item.state == "SUCCESS" || item.state == "DOING"){
                                $("<div class='luckyDream'><div class='dream_logo'>"+item.pool.tbill / 100+"</div><div class='dream_right'><div class='dream_msg'><span>"+item.title+"</span><div class='icon_success'></div></div> <div class='tip'><span class='tip_text'>"+item.pool.ptitle+"</span></div></div></div>").appendTo('..dream_list')
                            }
                        })
                        
                    }
                }
            },function(code,data){
                console.log("缺少参数"+data.context);
            })
        }
    })
    // 添加梦想
    $('.add').click(function(){
        $('.close').fadeIn();
    })
    $('.off').click(function(){
        $('.close').fadeOut();
    })
    // 发布梦想
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
                if(dream == '' || dream == undefined){
                    window.location.reload();
                }else{
                    window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/payInfo.html'
                }
               
            },function(code,data){
                alert(data.context)
            })
        }
    })
   $('.chec').click(function(){
    $("input[type='checkbox']:checked").parent('label').css({
        background:"url(https://tdream.antit.top/image/Toggle_True.jpg) no-repeat",
        "background-size":"0.3rem 0.3rem"
    })
   })
   $('.xieyi').click(function(){
    window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/xieyi.html"
})
    // WebApp.JSAPI.Init()
})