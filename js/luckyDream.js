$(function(){
    var userInfo = Options.GetUserInfo();
    var lucky = JSON.parse(localStorage.getItem('lucky'));
    var did = localStorage.getItem('did');
    $('.lucky_tip').html('恭喜您参与的梦想互助'+lucky.lottery.pid+'期成为幸运者，幸运编号为'+lucky.lottery.lid+'，本期互助资金为'+lucky.pool.cbill / 100+'元')
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