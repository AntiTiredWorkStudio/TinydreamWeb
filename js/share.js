try{
	WebApp.JSAPI.Init({
		title:Options.GetUserInfo().nickname+"给你发了一个梦想红包,领取可夺大额梦想金！",
		desc:"小梦想互助——让每个小梦想 都有机会实现",
		link:'http://tinydream.antit.top/TinydreamWeb/html/getR_Pack.html?rid='+$_GET.rid,
		imgUrl:"https://tdream.antit.top/image/Red_Open.jpg"
	});
}catch(err){
	alert(err);
}