var uid = Options.GetUserInfo().openid;
WebApp.JSAPI.InitShare({
    title:'行动打卡',
    desc:"有梦就行动，坚持返现金！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/clockIn.html?time='+ new Date().getTime(),
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});

var fill = new Vue({
    el:'#fill',
    data:{
        headicons:'',//头像
        cardinfo:'',//详情信息
    },
    created(){
        Options.TestServer = true;
        if($_GET.opid){
            if($_GET.state == 'success'){
                $('.top').css('background','url(https://tdream.antit.top/image/rightframe.png) no-repeat center center / 5.86rem 2.19rem')
            }else{
                $('.top').css('background','url(https://tdream.antit.top/BuKaCiShuBeiJing.png) no-repeat center center / 5.86rem 2.19rem')
            }
            this.Info(this,$_GET.opid)
            this.headIcon(this);
        }else{
            window.location.href = '../actionClock/actionClock.html?time='+new Date().getTime();
        }
    },
    methods:{
        // 详情信息
        Info(self,opid){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'信息加载中...'
            })
            
            TD_Request('op','uinfo',{uid:uid},function(code,data){
                self.$toast.clear();
                console.log(data)
                var menchance = data.info.menchance;
                TD_Request('op','oif',{opid:opid,uid:uid},function(code,data){
                    WebApp.JSAPI.InitShare({
                        title:data.info.nickname+"已加入追梦行动派为 "+data.info.theme+' 坚持行动'+data.info.alrday+'天',
                        desc:"有梦就行动，坚持返现金！",
                        link:'http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/friend.html?time='+new Date().getTime()+'&opid='+opid,
                        imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
                    });
                    console.log(data);
                    self.cardinfo = {
                        menchance:menchance,
                        misday:data.info['misday'],
                        menday:data.info['menday']
                    };
                },function(code,data){
                    console.log(data)
                })
            },function(code,data){
                self.$toast.clear();
                console.log(data);
            })
        },
        headIcon(self){
            TD_Request('op','ihics',{uid:uid},function(code,data){
                console.log(data)
                self.headicons = data.headicons;
                if(data.headicons.length == 0){
                    $('.tip').html('当前你还没有邀请到小伙伴呢，快去邀请小伙伴们一起参加追梦行动吧！').show();
                }
            },function(code,data){
                console.log(data);
            })
        }
    }
})