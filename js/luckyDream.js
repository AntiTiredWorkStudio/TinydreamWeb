$(function(){
    var userInfo = Options.GetUserInfo();
    var lucky = JSON.parse(localStorage.getItem('lucky'));
    var did = localStorage.getItem('did');
    $('.lucky_tip').html('恭喜您在：'+lucky.lottery.lid+'期第'+did+'个梦想'+lucky.lottery.lid+'编号成为幸运编号，本期互助总资金为'+lucky.pool.cbill / 100+'元')
	if(lucky.state!="DOING"){
		$('.btn').css("display","none");
	}else{
		$('.btn').click(function(){
            TD_Request('us','rnamegx',{
                uid:userInfo.openid
            },function(code,data){
                console.log(data)
            },function(code,data){
                console.log(data)
            })
			// localStorage.setItem('dr','{"did":"'+lucky.did+'","state":"all"}')
			// window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/add.html'
		})
	}
    $('.look').click(function(){
        localStorage.setItem('dr','{"did":"'+lucky.did+'","state":"all"}');
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/award.html'
    })
})