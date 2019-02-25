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
    $('.right input').on('input',function(){
        console.log(1)
        console.log($(this).val() * 5)
        $('#bill').html($(this).val() * 5)
    })
    // 红包支付
    $('.pay').click(function(){
        if($('#content').val() == ''){
            var content = '祝梦想成真！'
        }else{
            var content = $('#content').val()
        }
        if($('#input-pid').val() == ''){
            alert('请选择期号');
            return;
        }else if ($('#rcount').val() == ''){
            alert('请输入红包个数');
            return;
        }else if($('#rcount').val() == 0){
            alert('红包个数至少为一个');
            return;
        }
        TD_Request('rp','crp',{
            pid:$('#input-pid').val(),
            rcount:$('#rcount').val(),
            content:content,
            bill:$('#bill').html(),
            uid:userInfo.openid,   
        },function(code,data){
            console.log(code,data)
        },function(code,data){
            console.log(code,data)
        })
    })
})