WebApp.JSAPI.Init({
			title:"新手指引-小梦想互助！",
			desc:"互助小额零钱，夺大额梦想金。",
			link:"../html/question.html",
			imgUrl:"http://tdream.antit.top/image/titleLogo.png"
		});
$(function(){
    var templateStr = $('#template').html();
    var complate = _.template(templateStr);
    get();
    function get(msg = ''){
        $.get('../data/data.json',function(data){
            console.log(data)
            if(msg == '行动打卡'){
                var obj = data.clock;
            }else{
                var obj = data.data
            }
            _.each(obj,function(item){
                var str = complate(item);
                var $dom = $(str);
                $dom.appendTo('.questionInfo');
            })
        })
    }
    $('ul.tab li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('ul.tab li').click(function(){
        $('.questionInfo').html('')
        get($(this).html())
    })
    // WebApp.JSAPI.Init()
})