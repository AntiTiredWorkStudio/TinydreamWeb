WebApp.JSAPI.Init();
$(function(){
	//alert('red pack');
    // 获取用户信息
    var userInfo = Options.GetUserInfo();
    var price;
    // 获取奖池
    $('.select_pid').click(function(){
        TD_Request('ds','plistr',{
            seek:0,
            count:100
        },function(code,data){
            console.log(data)
            var pid = []; 
            // var price = [];
            $.each(data.Pools,function(index,item){
                console.log(item);
                pid.push({label:item.pid,value:item.ubill / 100})
            })
            console.log(pid)
            if(pid.length == 1){
                $("#input-pid").attr("value",pid[0].pid);
            }
            weui.picker(pid,{
                className: 'custom-classname',
                container: 'body',
                defaultValue: [pid[0].label],
                onChange: function (result) {
                },
                onConfirm: function (result) {
                    console.log(result);
                    $("#input-pid").attr("value",result[0].label);
                    $('#input-pid').attr('data-ubill',result[0].value)
                    if($("#right input").val() != ''){
                        $('#bill').html($('#right input').val() * $('#input-pid').attr('data-ubill'))
                        console.log($('#right input').val() * $('#input-pid').attr('data-ubill'))
                    }
                },
                id:'singleLinePicker'
            })
        },function(code,data){
            console.log(data)
        })
    })
    // 输入份数
    $('#right input').on('input',function(){
        console.log(1)
        // console.log($(this).val() * 1)
        if($('#input-pid').val() != ''){
            $('#bill').html($(this).val() * $('#input-pid').attr('data-ubill'));
            console.log($('#right input').val() * $('#input-pid').attr('data-ubill'))
        }
        // alert($('#bill').html())
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
        }else{
            // alert(1)
            TD_Request('rp','crp',{
                pid:$('#input-pid').val(),
                rcount:$('#rcount').val(),
                content:content,
                bill:$('#bill').html() * 100,
                uid:userInfo.openid,   
            },function(code,data){
				var redPackageID = data.rid;
                console.log(code,data)
                WeixinJSBridge.invoke('getBrandWCPayRequest', {
                    "appId":data.order.appId,     //公众号名称，由商户传入     
                    "timeStamp":data.order.timeStamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr":data.order.nonceStr, //随机串     
                    "package":data.order.package,     
                    "signType":data.order.signType,         //微信签名方式：     
                    "paySign":data.order.paySign //微信签名
                },function(res){
                    //alert(JSON.stringify(res));
                    if(res.err_msg == "get_brand_wcpay_request:ok"){
						//alert("success");
						try{
							TD_Request('rp','cprs',{uid:userInfo.openid,rid:redPackageID},function(code,data){
                                //alert(code)
                                localStorage.setItem('msg','ok')
                                window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/share.html?rid='+redPackageID+'&?time='+new Date().getTime();
							},function(code,data){
                                alert(code,data.context);
                                alert(JSON.stringify(data))
							});
						}catch(err){
							alert(JSON.stringify(err));
						}
					}else{
						alert("支付取消");
					}
                })
                
            },function(code,data){
                console.log(data)
                if(code == 11){
                    alert('您尚未绑定手机，绑定手机后即可发送梦想红包');
                    window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/phoneManage.html?type=pay&?time='+new Date().getTime()
                }else if(code == 5){
                    alert('该期梦想池已结束');
                    return;
                }else if(code == 67){
                    alert('单次红包不能超过200个');
                    return;
                }else if(code == 69){
                    alert('您所支付的红包数量超出该期梦想池上限')
                    return;
                }else if(code == 68){
                    alert('系统订单错误，请稍后重试');
                    return;
                }else if(code == 70){
                    alert('红包创建错误');
                    return;
                }
            })
        }
    })
})