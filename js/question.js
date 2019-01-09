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
})