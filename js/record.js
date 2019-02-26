$(function(){
    // 红包记录逻辑简单处理
    // 类型切换
    var userInfo = Options.GetUserInfo();
    redpack('get','gurpr',0)
    /**
     * 参数state 红包请求状态
     * 参数actions 请求动作
     * 参数num 游标
     */
    function redpack(state,actions,num){
        TD_Request('rp',actions,{
            uid:userInfo.openid,
            seek:num,
            count:5
        },function(code,data){
            console.log(data)
            $('.count').html(data.stats.countPack)
            if(state == 'get'){
                $('.tip_txt').html('收到红包金额<span style="color:#f25542">'+data.stats.totalBill / 100+'</span>元').css('font-size','0.3rem');
            }else{
                $('.tip_txt').html('发出红包金额<span style="color:#f25542">'+data.stats.totalBill / 100+'</span>元').css('font-size','0.3rem');
            }
            $.each(data.packs,function(index,item){
                console.log(item);
                TD_Request('us','selfinfo',{uid:item.uid},function(code,data){
                    console.log(data.selfinfo.nickname)
                },function(code,data){
                    console.log(data);
                })
                if(state == 'get'){

                }
            })
        },function(code,data){
            console.log(data)
        })
    }
    
    console.log(Options.GetUserInfo())
    
    // 用户头像
    $('.headicon').css('background','url('+userInfo.headimgurl+') no-repeat')
    $('.tip').html(userInfo.nickname+'收到的梦想红包共')
    $('.top ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 收到红包
    $('.r_left').click(function(){  
        $('.tip').html(userInfo.nickname+'收到的梦想红包共')
        redpack('get','gurpr',0)

    })
    $('.r_right').click(function(){  
        redpack('give','gurps',0);
        $('.tip').html(userInfo.nickname+'发出的梦想红包共')
    })
})