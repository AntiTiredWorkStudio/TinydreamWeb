$(function(){
    var dr = JSON.parse(localStorage.getItem('dr'));
    var userInfo = Options.GetUserInfo();
    TD_Request('dr','gdream',{
        uid:userInfo.openid,
        did:dr.did,
        state:'all'
    },function(code,data){
        console.log(data)
        if(data.dream.state == 'DOING'){
            $('.title .left').html('完善梦想')
            $('.title .right').html('等待完善')
            $('.tip').html('小梦想 —— 幸运梦想 —— 完善梦想即可');
            $('.progress_main .index').eq(0).addClass('active')
        }else if(data.dream.state == 'VERIFY'){
            $('.title .left').html('资料审核')
            $('.title .right').html('审核中').css('color','green')
            $('.tip').html('资料审核1——2个工作日');
            $('.progress_main .index.active .line').addClass('activeLine')
            $('.progress_main .index').eq(1).addClass('active')
        }else if(data.dream.state == 'SUCCESS'){
            if(data.dream.payment == 0){
                $('.title .left').html('等待打款')
                $('.title .right').html('审核通过').css('color','green')
                $('.tip').html('3个工作日内打款');
                $('.progress_main .index.active .line').addClass('activeLine')
                $('.progress_main .index').eq(2).addClass('active')
            }else{
                $('.title .left').html('互助金颁发')
                $('.title .right').css({
                    position:'absolute',
                    top: '0.10rem',
                    right: '0.20rem',
                    width: '1.40rem',
                    height: '1.40rem',
                    background: 'url(http://tdream.antit.top/image/paid.png) no-repeat',
                    'background-size': '1.40rem 1.40rem',
                })
                $('.tip').html('互助金已颁发');
                $('.progress_main .index.active .line').addClass('activeLine')
                $('.progress_main .index').eq(2).addClass('active')
            }
        }else{
            alert('梦想状态不符合要求')
        }
    },function(code,data){
        console.log(data)
    })
})