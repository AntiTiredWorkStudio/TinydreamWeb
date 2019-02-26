try {
	var nickname = Options.GetUserInfo().nickname;
	
	WebApp.JSAPI.Init({
		title:nickname+"给你发了一个梦想红包,领取可夺大额梦想金！",
		desc:"小梦想互助——让每个小梦想 都有机会实现",
		link:'http://tinydream.antit.top/TinydreamWeb/html/getR_Pack.html?rid=311573768238',
		imgUrl:"https://tdream.antit.top/image/Red_Open.jpg"
	});
	WebApp.JSAPI.onShareTimeLine = function(res){
		console.log(res);
	}
	WebApp.JSAPI.onShareFriend = function(res){
		console.log(res);
	}
} catch (error) {
	alert(error)
}