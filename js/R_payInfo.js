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
            weui.packer(pid,{
                className: 'custom-classname',
                container: 'body',
                defaultValue: [pid[0]],
                onChange: function (result) {
                },
                onConfirm: function (result) {
                    console.log(result);
                    // $("#input_bankType").attr("placeholder",result[0].label);
                    // page.bank = result[0].label;
                },
                id:'singleLinePicker'
            })
        },function(code,data){
            console.log(data)
        })
    })
})