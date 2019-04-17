var uid = Options.GetUserInfo().openid;

var list = new Vue({
    el:"#list",
    data:{
        loading:false,
        finished:false,
        seek:0,
        count:0,
        list:[]
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
                // self.loading = false;
                $.each(data.operations,function(index,item){
                    if(item.state == 'DOING'){
                        $('#state').css('background','url(https://tdream.antit.top/active.png) no-repeat center center / 1.2rem 1.2rem')
                    }else if(item.state == 'SUCCESS'){
                        $('#state').css('background','url(https://tdream.antit.top/actived.png) no-repeat center center / 1.2rem 1.2rem')
                    }else if(item.state == 'FAIL'){
                        $('#state').css('background','url(https://tdream.antit.top/unactive.png) no-repeat center center / 1.2rem 1.2rem')
                    }
                    if(item.cid == "CO0000000002"){
                        $('.mt-20').css('background','url(https://tdream.antit.top/hylb100.png) no-repeat center center / 6.8rem 2.7rem')
                    }else if(item.cid == "CO0000000001"){
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
        get(cid,alrday,menday,misday){
            console.log(cid,alrday,menday,misday)
        }
    }
})