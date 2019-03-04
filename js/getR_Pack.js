$(function(){
Loading();
WebApp.Init('wxc5216d15dd321ac5',//appid
        function(result,data){
			// $.showLoading("数据加载中");
			TD_Request('us','enterpack',{
				uid:data.openid,
				nickname:data.nickname,
				headicon:data.headimgurl
			},function(code,data){
				// console.log(data)
				var rid = $_GET.rid;
				// alert(data.context);
				TD_Request('rp','grp',{rid:rid},function(code,data){
					console.log(data)
					var userInfo = data.sender;
					var pid = data.redpack.pid;
					var ptbill = data.redpack.ptbill / 100;
					WebApp.JSAPI.InitShare({
						title:userInfo.nickname+"给你发了一个梦想红包,领取可夺大额梦想金！",
						desc:"小梦想互助——让每个小梦想 都有机会实现",
						link:'http://tinydream.antit.top/TinydreamWeb/html/getR_Pack.html?rid='+rid,
						imgUrl:"https://tdream.antit.top/image/Red_Open.jpg"
					});
					if(userInfo.headicon == ''){
						userInfo.headicon = 'https://tdream.antit.top/image/miniLogo.jpg'
					}
					$('.headicon').css({
						background:'url('+userInfo.headicon+') no-repeat',
						'background-size':'0.88rem 0.88rem'
					});
					$('.title').html(userInfo.nickname+'的梦想红包');
					$('.msg').html(data.redpack.content);
					FinishLoading()
					$('button').click(function(){
						localStorage.setItem('rid',rid);
						localStorage.setItem('rinfo',JSON.stringify({pid:pid,ptbill:ptbill,rid:rid,headicon:userInfo.headicon,nickname:userInfo.nickname,content:data.redpack.content}));
						window.location.href = 'http://tinydream.antit.top/TinydreamWeb/html/GetRedPack.html?time='+new Date().getTime();
					})
				},function(code,data){
					console.log(data)
					window.location.href = 'http://tinydream.antit.top/TinydreamWeb/index.html?time='+new Date().getTime()
				})
			},function(code,data){
				alert(data.context);
			})
		}
	);
})