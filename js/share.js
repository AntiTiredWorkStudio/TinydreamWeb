try {
	var rid = $_GET.rid;
	if(localStorage.getItem('msg') == 'ok'){
		localStorage.removeItem('msg');
	}else{
		// window.location.href = '../html/getR_Pack.html?rid='+rid;
	}
	TD_Request('rp','grp',{rid:rid},function(code,data){
		console.log(data)
		var nickname = data.sender.nickname;
		$('title').html("红包待发送");
		WebApp.JSAPI.InitShare({
			title:nickname+"给你发了一个梦想红包,领取可夺大额梦想金！",
			desc:"小梦想互助——让每个小梦想 都有机会实现",
			link:'../html/getR_Pack.html?rid='+rid+'&?time='+new Date().getTime(),
			imgUrl:"https://tdream.antit.top/image/Red_Open.jpg"
		});
		WebApp.JSAPI.OnShareTimeLine = function(res){
			window.location.href = '../index.html?time='+new Date().getTime()
		}
		
	},function(code,data){
		console.log(data)
	})
} catch (error) {
	alert(error)
}


	