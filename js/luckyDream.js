$(function(){
    var userInfo = Options.GetUserInfo();
    var lucky = JSON.parse(localStorage.getItem('lucky'));
    var did = localStorage.getItem('did');
    $('.lucky_tip').html('恭喜您在：'+lucky.lottery.pid+'期第'+did+'个梦想'+lucky.lottery.lid+'编号成为幸运编号，本期互助总资金为'+lucky.pool.cbill / 100+'元')
	if(lucky.state!="DOING"){
		$('.btn').css("display","none");
	}else{
		$('.btn').click(function(){
            TD_Request('us','rnamegx',{
                uid:userInfo.openid
            },function(code,data){
                console.log(data)
                localStorage.setItem('dr','{"did":"'+lucky.did+'","state":"all"}')
			    window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/add.html'
            },function(code,data){
                console.log(data)   
               alert('您还未实名认证，请认证后在进行完善')
               window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/auth.html'
            })
			
		})
	}
    $('.look').click(function(){
        localStorage.setItem('dr','{"did":"'+lucky.did+'","state":"all"}');
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/award.html'
    })
})