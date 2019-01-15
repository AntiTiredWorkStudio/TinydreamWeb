$(function(){
    // 获取模板字符串
    var templateStr = $('#template').html();
    var compolied = _.template(templateStr);
    // 获取梦想列标
    var userInfo = Options.GetUserInfo();
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
                       item.status = '成功'
                    }
                    if(item.state == "FAILED"){
                        item.status = '失败'
                    }
                    if(item.state == "SUBMIT"){
                        item.status == '未中奖'
                    }
                    var str = compolied(item);
                    var $dom = $(str);
                    $dom.appendTo('.dream_list');  
                })
                
            }
        }
    },function(code,data){
        console.log("缺少参数"+data.context);
    })
    // 查看小梦想详情
    $('.view').click(function(){
        window.location.href="../html/add.html";
    })
    // 添加梦想
    $('.add').click(function(){
        $('.close').fadeIn();
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
                window.location.reload();
            },function(code,data){
                alert(data.context)
            })
        }
    })
})