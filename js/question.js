WebApp.JSAPI.Init({
			title:"新手指引-小梦想互助！",
			desc:"互助小额零钱，夺大额梦想金。",
			link:"http://tinydream.antit.top/TinydreamWeb/html/question.html",
			imgUrl:"http://tdream.antit.top/image/titleLogo.png"
		});
$(function(){
    var templateStr = $('#template').html();
    var complate = _.template(templateStr);
    $.get('../data/data.json',function(data){
        console.log(data)
        _.each(data.data,function(item){
            var str = complate(item);
            var $dom = $(str);
            $dom.appendTo('.questionInfo');
        })
    })
    // WebApp.JSAPI.Init()
})