$(function(){
    var userInfo = Options.GetUserInfo();
    var lucky = JSON.parse(localStorage.getItem('lucky'));
    console.log(lucky)
    if(lucky.pool.ptype == 'TRADE'){
        $('.lucky_tip').html('恭喜您参与的'+lucky.pool.ptitle+'成为幸运者，幸运编号为'+lucky.lottery.lid+'，本期免费获得项目为：'+lucky.title+'.   我们工作人员会在3个工作日内联系您安排项目对接，请您保持电话畅通。')
        $('.tip_message').html('为更好地给您对接项目，请您务必在7个工作日内完成实名认证。')
        $('.look').hide();
    }else{
        $('.tip_message').html('为了更好地给您颁发梦想互助金，请您务必在7个工作日内完善梦想和实名认证！')
        $('.lucky_tip').html('恭喜您参与的梦想互助'+lucky.lottery.pid+'期成为幸运者，幸运编号为'+lucky.lottery.lid+'，本期互助资金为'+lucky.pool.cbill / 100+'元')
    }
	if(lucky.state!="DOING"){
		$('.btn').css("display","none");
	}else{
		$('.btn').click(function(){
            TD_Request('us','rnamegx',{
                uid:userInfo.openid
            },function(code,data){
                console.log(data)
                localStorage.setItem('dr','{"did":"'+lucky.did+'","state":"all"}')
			    window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/add.html?time='+new Date().getTime()
            },function(code,data){
                console.log(data)   
               alert('您还未实名认证，请认证后在进行完善')
               window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/auth.html?time='+new Date().getTime()
            })
			
		})
	}
    $('.look').click(function(){
        localStorage.setItem('dr','{"did":"'+lucky.did+'","state":"all"}');
        window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/award.html?time='+new Date().getTime();
    })
})