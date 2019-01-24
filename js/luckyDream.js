$(function(){
    var lucky = JSON.stringify(localStorage.getItem('lucky'));
    var did = localStorage.getItem('did');
    $('.lucky_tip').html('恭喜您在：'+lucky.lottery.pid+'期'+did+'个梦想'+lucky.lottery.lid+'编号成为幸运编号，本期互助总资金为'+lucky.lottery.ubill / 100+'元')
})