<template>
    <div class="notice">
        <div class="list" v-for="(list,index) in noticeList" :key="index">
            <div class="message">
                <div class="main">
                    <span>{{list.content}}</span>
                    <span @click="info(list.action,list.nid,list.content)" style="text-decoration: underline;color:#00d094;font-size:0.28rem">查看详情</span>
                </div>
                <div class="time">{{list.localTime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
WebApp.JSAPI.InitShare({
    title:'追梦行动派',
    desc:"我刚刚参与了一份小梦想，你也一起来吧！",
    link:'http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/html/share.html?time='+new Date().getTime()+'&type=dream&state=no',
    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
});
export default {
    name:'notice',
    data () {
        return {
            noticeList:'',
        }
    },
    created(){
        this.notice(this);
    },
    methods:{
        notice(app){
            TD_Request('no','ngl',{uid:app.$store.state.uid,seek:0,count:20},function(code,data){
                console.log(data)
                var notice = [];
                $.each(data.msgs,function(index,item){
                    var dt = new Date(item.ptime * 1000);
                    var y = dt.getFullYear();
                    var m = dt.getMonth()+1 < 10 ? '0' + (dt.getMonth()+1) : dt.getMonth()+1;
                    var d = dt.getDate() < 10 ? '0'+ dt.getDate() : dt.getDate();
                    var H = dt.getHours() < 10 ? '0'+dt.getHours() : dt.getHours();
                    var i = dt.getMinutes() < 10 ? '0'+dt.getMinutes() : dt.getMinutes();
                    var s = dt.getSeconds() < 10 ? '0'+dt.getSeconds() : dt.getSeconds();
                    var time = y+'-'+m+'-'+d+' '+H+':'+i+':'+s;

                    item.localTime = time;
                    if(item.state == "UNREAD"){
                        item.content = "[未读]"+item.content
                    }else{
                        item.content = "[已读]"+item.content
                    }
                    notice.push(item);
                })
                app.noticeList = notice;
            },function(code,data){
                console.log(data)
            })
        },
        info(action,nid,content){
            console.log(action)
            var actions = typeof action == 'object' ? action : eval("("+action+")") 
            console.log(actions)
            this.pool(this,actions.pid,nid,content,actions.type);
        },
        pool(app,pid,nid,content,type){
            console.log(pid)
            TD_Request('dp','pinfo',{pid:pid},function(code,data){
                console.log(data)
                DreamPoolAnalysis(data.pool);
                SaveStorage('pinfo',JSON.stringify(data.pool));
                app.read(app,nid,content,type,data.pool.ptitle)
            },function(code,data){
                console.log(data)
            })
        },
        read(app,nid,content,type,title){
            TD_Request('no','nr',{nid:nid},function(code,data){
                if(type == 'buy'){
                    app.$router.push('/pinfo')
                }else{
                    app.$dialog.alert({
                        title:title.substr(4),
                        message:content
                    }).then(()=>{
                        app.$router.replace('/refesh')
                    })
                }
            },function(code,data){
                console.log(data)
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .notice{
        width: 100%;
        border-top: 0.02rem solid #d2d0cf;
        background: #fff;
        .list{
            width: 100%;
            border-bottom: 0.02rem solid #f0f0f0;
            padding-bottom: 0.20rem;
            position: relative;
            overflow: hidden;
            .message{
                width: 6.90rem;
                margin: 0.30rem auto 0;
                font-size: 0.28rem;
                color: #808080;
                .main{
                    width: 6.90rem;
                    margin: 0.30rem auto 0;
                    font-size: 0.28rem;
                    color: #808080;
                }
                .time{
                    width: 6.90rem;
                    margin: 0.30rem auto 0;
                    font-size: 0.28rem;
                    color: #808080;
                    text-align: right;
                }
            }
        }
    }
</style>
