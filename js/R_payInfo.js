$(function(){
    // 获取用户信息
    var userInfo = Options.GetUserInfo();
    // 获取奖池
    $('.select_pid').click(function(){
        TD_Request('ds','plistr',{
            seek:0,
            count:100
        },function(code,data){
            console.log(data)
            var pid = [];
            $.each(data.Pools,function(index,item){
                console.log(item);
                pid.push(item.pid)
            })
            if(pid == 1){
                $("#input-pid").attr("value",pid[0]);
            }
            weui.picker(pid,{
                className: 'custom-classname',
                container: 'body',
                defaultValue: [pid[0]],
                onChange: function (result) {
                },
                onConfirm: function (result) {
                    console.log(result);
                    $("#input-pid").attr("value",result[0].label);
                },
                id:'singleLinePicker'
            })
            
        },function(code,data){
            console.log(data)
        })
    })
    // 输入份数
    $('#rcount').on('input',function(){
        console.log($(this).val() * 5)
        $('#bill').html($(this).val() * 5)
    },false)
    // 红包支付
    $('.pay').click(function(){
        if($('#content').val() == ''){
            var content = '祝梦想成真！'
        }else{
            var content = $('#content').val()
        }
        TD_Request('rp','crp',{
            uid:userInfo.openid,
            pid:$('#input-pid').val(),
            content:content,
            bill:$('#bill').html(),
            rcount:$('#rcount').val()
        },function(code,data){
            console.log(code,data)
        },function(code,data){
            console.log(code,data)
        })
    })
})