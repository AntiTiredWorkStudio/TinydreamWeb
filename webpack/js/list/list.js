var uid = Options.GetUserInfo().openid;

WebApp.JSAPI.InitShare({
    title:'行动打卡',
    desc:"有梦就行动，坚持返现金！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/clockIn.html?time='+ new Date().getTime(),
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});

var list = new Vue({
    el:"#list",
    data:{
        loading:false,
        finished:false,
        seek:0,
        count:0,
        list:[],
        isshow:false,
        alrday:'',
        menday:'',
        misday:'',
        conday:''
    },
    created(){
        // this.getList(this)
    },
    methods:{
        load(){
            this.getList(this);
            if(this.count>this.seek){
                this.seek++;
                this.getList(this)
            }
        },
        getList(self){
            TD_Request('op','olist',{uid:uid,seek:self.seek,count:10},function(code,data){
                console.log(data)
                self.loading = false;
                $.each(data.operations,function(index,item){
                    if(item.state == 'DOING'){
                       item.url = 'https://tdream.antit.top/active.png'
                    }else if(item.state == 'SUCCESS'){
                        item.url = 'https://tdream.antit.top/actived.png'
                    }else if(item.state == 'FAILED'){
                        item.url = 'https://tdream.antit.top/unactive.png'
                    }
                    if(item.cid == "CO0000000002" && item.state == 'DOING' || item.cid == "CO0000000002" && item.state == 'SUCCESS'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/image/Contract100.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000001" && item.state == 'DOING' || item.cid == "CO0000000001" && item.state == 'SUCCESS'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/image/Contract21.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000002" && item.state == 'FAILED'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/hylb100.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000001" && item.state == 'FAILED'){
                        $('.mt-20').css('background','url(https://tdream.antit.top/hylb21.png) no-repeat center center / 6.8rem 2.7rem')
                    }
                    self.list.push(item)
                    if(self.list.length >= self.count){
                        self.finished = true;
                    }
                })
            },function(code,data){
                console.log(data)
            })
        },
        get(cid,alrday,menday,misday,conday){
            this.alrday = alrday
            this.menday = menday
            this.misday = misday
            this.conday = conday
            this.isshow = true;
        },
        close(){
            this.isshow = false;
        }
    }
})