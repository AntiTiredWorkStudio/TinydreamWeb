$(function(){
    WebApp.JSAPI.Init()
    var userInfo = Options.GetUserInfo();
    // 获取奖池信息
    var poolInfo = JSON.parse(localStorage.getItem('poolInfo'));
    console.log(poolInfo);

    // 动态填入数据
    $('.dr_title').html(poolInfo.ptitle+"（已结束）");
    $('.money_txt').html(poolInfo.realBill + poolInfo.realUnit)
    $('.money').html(poolInfo.billHint);
    $('.price').html(poolInfo.rubillValue+"/份")

    // 获取开奖状态
    TD_Request('aw','lfromp',{
        pid:poolInfo.pid
    },function(code,data){
        $('.lucky span').html()
    },function(code,data){
        if(code == 59){
            $('.lucky span').html('等待开奖')
        }
    })

    // 结束时间
    var ptime = parseInt(poolInfo.ptime);
    var dtime = parseInt(poolInfo.duration);
    var time = ptime + dtime
    var endTime = GetLocalTime(time);
    $('.endTime').html("结束时间"+endTime)


    $('.tab div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    var num = 0;
    $('.tab div.right').click(function(){
        $('.user_number').empty()
        $('.user_number').show();
        $('.tabList').empty().hide();
        $('.btns.click').show();
        getord(num);
    })
    $('.left').click(function(){
        $('.tabList').empty()
        $('.user_number').empty().hide();
        $('.tabList').show();
        self(); 
    })
    $('.btns.click').click(function(){
        var cnum = num+10;
        getord(cnum)
    })
    // // 获取编号
    self();
    function self(){
        TD_Request('ds','pdetial',{
            uid:userInfo.openid,
            pid:poolInfo.pid
        },function(code,data){
            console.log(data)
            if(data.lottey.length == 0){
                $('.tip').html('您尚未参与该梦想池互助').show();
            }else{
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
        TD_Request('ds','preco',{
            pid:poolInfo.pid,
            min:number,
            max:10
        },function(code,data){
            if(data.orders.length == 0){
                $('.tip').html('此梦想池没有用户参与').show();
                $('.btns').hide();
            }else{
                $('.tip').html('此梦想池没有用户参与').hide();
                $('.btns').show();
            }
            console.log(data)
            console.log(number+10);
            $.each(data.orders,function(index,item){
                $('<div class="user"><div class="phone">'+item.tele+'</div><div class="num">'+item.dcount+' 份</div><div class="look" style="color:#00d094" oid='+item.oid+'>查看编号</div><div class="title">'+item.dtitle+'</div></div>').appendTo('.user_number');
            })
            var str = ''//编号
            $('.look').click(function(){
                TD_Request('aw','onums',{
                    oid:$(this).attr('oid')
                },function(code,data){
                    console.log(data);
                    var str = '';
                    $.each(data.nums,function(index,item){
                        str = str+=item.lid+'；'
                    })
                    console.log(str)
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
    }

    $('.look_info').click(function(){
        window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/calc.html"
    })
})