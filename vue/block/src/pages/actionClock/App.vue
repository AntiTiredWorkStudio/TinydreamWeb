<template>
    <div class="actionClock">
            <div class="warp">
                <!-- 打卡进度 -->
                <van-col span="24" class="clock">
                    <van-col span="24">
                        <yd-progressbar :progress="colckinfo.precentage" trail-width="8" trail-color="#ffc054" class="progress">{{colckinfo
                            == '' ? '--': colckinfo.prec}}%</yd-progressbar>
                        <span style="color:#00d094;text-decoration:underline;position:absolute;top: 0.5rem;right:0.5rem"
                            @click="jl">合约记录</span>
                    </van-col>
                    <!-- 打卡信息 -->
                    <van-col span="24" class="clockInfo">
                        <van-row>
                            <van-col span="8">
                                <p class="title day">{{colckinfo == '' ? '--' : colckinfo.desday}}</p>
                                <p class="txt">距离目标天数</p>
                            </van-col>
                            <van-col span="8">
                                <p class="title continday">{{colckinfo == '' ? '--' : colckinfo.conday}}</p>
                                <p class="txt">连续打卡天数</p>
                            </van-col>
                            <van-col span="8">
                                <p class="title clockday">{{colckinfo == '' ? '--' : colckinfo.alrday}}</p>
                                <p class="txt">已打卡天数</p>
                            </van-col>
                        </van-row>
                    </van-col>
                    <van-col span="24" class="btn">
                        <van-button @click="clock(btnTxt == '分 享' ? 'share' : '')" class="clock_btn" round :disabled="isdisabled">{{btnTxt}}</van-button>
                    </van-col>
                </van-col>
                <van-col span="24" class="date">
                    <div class="warper">
                        <van-row class="date" style="width:5.88rem;margin:0 auto;padding: 0.38rem 0 0.5rem 0">
                            <van-col span="8" style="text-align:left;color:#999">
                                <van-icon name="arrow-left" @click="left" class="icon-left"></van-icon>
                            </van-col>
                            <van-col span="8" style="text-align:center">
                                <p style="font-size:0.36rem">{{currentMonth == '' ? '--' : currentMonth}}</p>
                            </van-col>
                            <van-col span="8" style="text-align:right;color:#999">
                                <van-icon name="arrow" @click="right" class="icon-right"></van-icon>
                            </van-col>
                        </van-row>
                        <div class="weekDate">
                            <ul class="title">
                                <li>{{week[0]}}</li>
                                <li>{{week[1]}}</li>
                                <li>{{week[2]}}</li>
                                <li>{{week[3]}}</li>
                                <li>{{week[4]}}</li>
                                <li>{{week[5]}}</li>
                                <li>{{week[6]}}</li>
                            </ul>
                            <ul class="day">

                            </ul>
                        </div>
                        <div class="module">
                            <div class="main">
                                <van-col span="16" style="margin-top:0.24rem">
                                    <p>
                                        <span class="txt">
                                            <van-icon name="https://tdream.antit.top/image/blue_dot.png" class="icon"></van-icon>
                                            <span>已打卡、已转发</span>
                                        </span>
                                        <span>
                                            <van-icon name="https://tdream.antit.top/image/green_dot.png" class="icon"></van-icon>
                                            <span>已补卡</span>
                                        </span>
                                    </p>
                                    <p>
                                        <span class="txt">
                                            <van-icon name="https://tdream.antit.top/image/orange_dot.png" class="icon"></van-icon>
                                            <span>已打卡、未转发</span>
                                        </span>
                                        <span>
                                            <van-icon name="https://tdream.antit.top/image/grey_dot.png" class="icon"></van-icon>
                                            <span>未打卡</span>
                                        </span>
                                    </p>
                                </van-col>
                                <!-- <van-col span="8">
                                    <div class="card">
                                        <van-icon name="https://tdream.antit.top/image/pathc_attendence.png"></van-icon>
                                    </div>
                                </van-col> -->
                            </div>
                        </div>
                    </div>
                </van-col>
            </div>
            <!-- 打卡成功弹窗 -->
            <van-popup v-model="isshow" class="mask">
                <div class="clockState">
                    <div class="main">
                        <div class="avatar">
                            <img :src="headicon" alt="">
                        </div>
                        <div class="tip" v-html="alert.msg">
                        </div>
                        <p class="shareBtn" @click="guid">分享今日打卡</p>
                        <p style="text-align:center;font-size:0.26rem;padding-bottom:0.4rem;color:#4c4c4c">每成功邀请1位好友参与合约可获得1次补卡机会</p>
                    </div>
                </div>
                <van-icon name="https://tdream.antit.top/DaKaOKX.png" class="close" @click="close"></van-icon>
            </van-popup>
            <!-- tabbar -->
            <van-tabbar v-model="actives" active-color="#00d094">
                <van-tabbar-item v-for="(tab,index) in tabbar" :url="tab.url" :info="tab.info" :key="index">
                    <span>{{tab.title}}</span>
                    <img slot-scope="props" slot="icon" :src="props.active ? tab.active : tab.normal">
                </van-tabbar-item>
            </van-tabbar>
            <!-- 分享指引 -->
            <van-popup v-model="ishare" class="guid_mask">
                <div class="guid"></div>
                <div class="btn" @click="guid_close"></div>
            </van-popup>
            <!-- 合约完成弹窗 -->
             <van-popup v-model="issuccess" class="bgd">
                <div class="bg" :style='{background:"url("+url+") no-repeat center center / 7.12rem 8.62rem"}'>
                    <p>{{state == true ? '恭喜您完成'+totalday+'天的行动合约' : '您的表现优秀，但最终未完成'+totalday+'天 '}}</p>
                    <p class="tip" :style="{display:state == true ? 'block' : 'none'}">平台即将给您颁发{{bill == '' ? '--' : bill}}元奖励金</p>
                    <p class="tip" :style="{display:state == true ? 'block' : 'none'}">7天内审核朋友圈转发情况</p>
                    <p class="tip" :style="{display:state == true ? 'block' : 'none'}">没问图自动给您返款</p>
                    <p class="tip" :style="{display:state == true ? 'block' : 'none'}">请注意查收！</p>
                    <van-button @click="hy_close">我知道了</van-button>
                </div>
            </van-popup>
        </div>
</template>

<script>
var uid = Options.GetUserInfo().openid;
var isDate = false;
import tabbar from '@/components/tabbar'
export default {
    name:'actionClock',
    data () {
        return {
            actives:1,
            tabbar:'',
            week:["日","一","二","三","四","五","六"],//周期
            opid:'',//行动 id
            currentMonth:'',//当前月份,
            isdisabled:false,//行动打卡按钮状态
            btnTxt:'立即打卡',
            isshow:false,//弹窗
            headicon:'',//用户头像
            colckinfo:'',//打卡信息
            seek:-1,//日历翻页
            date:'',//当前打卡、补卡日期
            countMonth:'',//月份总数
            date:'',
            shareTitle:'',
            ishare:false,//分享弹窗
            cid:'',//合约的 cid
            issuccess:false,
            state:true,
            url:'',
            bill:'',
            totalday:'',
            alert:''
        }
    },
    created(){
        // Options.TestServer = false;
        // alert(Options.TestServer)
        // alert(uid)
        // this.tabbar = common.tabbar;
        // common.notice(this,uid);
        // 创建日历
        this.tabbar = tabbar.data.tabbar;
        this.Mat(this);
        // 用户头像
        this.headicon = Options.GetUserInfo().headimgurl;
    },
    methods:{
        // 打卡
        clock(msg){
            // alert(uid)
            if(msg == 'share'){
                this.ishare = true;
                this.isshow = false;
            }else{this.Clock(this,this.opid)};
            
        },
        // 创建日历
        Mat(self,firstday = ''){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'日历创建中...'
            })
            TD_Request('op','cal',{uid:uid,seek: self.seek,full:'month'},function(code,data){
                console.log(data)
                self.$toast.clear();
                if(data.calendar.monthIndex.length == 1){
                    $('.icon-left,.icon-right').hide();
                }
                if(data.calendar.monthIndex.length - 1 == self.seek){
                    $('.icon-right').hide();
                }
                self.seek = data.calendar.currentIndex;
                // 打卡信息
                self.clockInfo(self,data.calendar.opid);
                self.countMonth = data.calendar.monthIndex.length - 1;
                self.opid = data.calendar.opid;
                self.date = data.date;
                self.cid = data.cid;
                console.log(self.date)
                console.log(new Date(self.date) / 1000 - 28800);
                console.log(data.calendar.days);
                self.currentMonth = data.calendar.currentMonth.substr(0,4) + '.' + data.calendar.currentMonth.substr(4,6);
                self.refreshDate(data.calendar.days,self,data.lastattend,data.cid,firstday);
                
                // 新用户分享
            },function(code,data){
                self.$toast.clear();
                self.$dialog.alert({
                    title:'温馨提示',
                    message:data.context
                }).then(()=>{
                    window.location.href = 'clock.html?time='+new Date().getTime();
                });
            })
        },
        // 打卡
        Clock(self,opid){
            // alert(opid)
            TD_Request('op','mat',{opid:opid,uid:uid},function(code,data){
                self.btnTxt = '已打卡';
                self.isdisabled = true;
                console.log(data);
                self.alert = {msg:"<p>您已在追梦行动派</p><p>连续为"+self.colckinfo.theme+"行动打卡"+self.colckinfo.conday+"天</p>"}
                if(data.attendance.date == 'undefined'){
                    data.attendance.date = self.date;
                }
                // alert(data.attendance.date)
                // self.clockInfo(self,opid,data.attendance.date);
                self.isshow = true;
                if(data.end == 'SUCCESS'){
                    // 合约成功
                    self.issuccess = true;
                    self.url = 'https://tdream.antit.top/share_mmexportOK.png' 
                    self.state = true;
                }else if(data.end == 'FAILD'){
                    // 合约失败
                    self.state = false;
                    self.issuccess = true;
                    self.url = 'https://tdream.antit.top/share_mmexport.png'
                }
                self.Mat(self);
            },function(code,data){
                console.log(data);
                self.btnTxt = '已打卡';
                self.alert = {msg:"<p style='color:#00d094'>打卡成功</p>"}
                self.isshow = true;
                self.isdisabled = true;
                self.isstate = false;
                self.Mat(self,data.firstday);
                // self.clockInfo(self,opid,data.attendance.date);
            })
        },
        hy_close(){
            this.issuccess = false;
        },
        // 生成日历
        refreshDate(days,self,lastattend,cid,firstday = ''){
            TD_Request('co','info',{cid:cid},function(code,data){
                console.log(data)
                self.bill = data.contract.refund / 100;
                self.totalday = data.contract.durnation
            },function(code,data){
                console.log(data)
            })
            $('.weekDate .day').html('');
            var str = "";
            var totalDay = days.length;//天数
            var firstDay = days[0].weekDay;
            if(firstDay == '一'){
                firstDay = 1;
            }else if(firstDay == '二'){
                firstDay = 2;
            }else if(firstDay == '三'){
                firstDay = 3;
            }else if(firstDay == '四'){
                firstDay = 4;
            }else if(firstDay == '五'){
                firstDay = 5;
            }else if(firstDay == '六'){
                firstDay = 6;
            }else if(firstDay == '日'){
                firstDay = 0;
            }
            for (let i = 0; i < firstDay; i++) {
                $('<li>&nbsp;</li>').appendTo('.weekDate .day');
            }
            $.each(days,function(index,item){
                if(item.hasOwnProperty('id')){
                    if(item.hasOwnProperty('today')){
                        if(item.today  && item.state == 'RELAY'){
                            self.btnTxt = '已打卡';
                            self.isdisabled = true;
                        }
                    }
                    if(item.id == 0 && item.date == self.date || item.id == 1 && item.date == self.date){
                        isDate = true;
                    }
                    // else{
                    //     if(!item.hasOwnProperty('today') && item.lastattend == -1 && item.id == "0"){
                    //         self.btnTxt = '点击"..."分享';
                    //         self.isdisabled = true;
                    //         item.state = 'NOTRELAY'
                    //     }else if(!item.hasOwnProperty('today') && item.lastattend == -2 && item.id == "0"){
                    //         self.btnTxt = '已打卡';
                    //         self.isdisabled = true;
                    //         item.state = 'RELAY'
                    //     }
                    // }}
                    console.log(firstday)
                    if(firstday != ''){
                        if(item.id == "0" && item.state=="NONE" && item.dateStamp >= lastattend){
                            $('<li class="enable" id="'+item.date+'"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.id == "0" && firstday == 'NONE'){
                            $('<li class="disabled"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.id == "0" && firstday == 'NOTRELAY'){
                            $('<li class="enable share" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                            self.btnTxt = '分 享';
                            self.isdisabled = false;
                        }else if(item.id == "0" && firstday == "RELAY"){
                            self.btnTxt = '已打卡';
                            self.isdisabled = true;
                            $('<li class="enable" id="'+item.date+'"><span class="normal green_bg">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.dateStamp < (Math.round(new Date(self.date) / 1000) - 28800)  && item.state == 'NOTRELAY'){
                            $('<li class="enable leakage" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.dateStamp < (Math.round(new Date(self.date) / 1000) - 28800)  && item.state == 'NONE'){
                            $('<li class="enable leakage" data-stamp="'+item.dateStamp+'" id="'+item.date+'"><span class="normal gray">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.dateStamp >= lastattend && item.state == 'NONE'){
                            $('<li class="enable" id="'+item.date+'"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.state == 'NONE' && item.date == self.date ){
                            $('<li class="enable leakage" data-stamp="'+item.dateStamp+'" id="'+item.date+'"><span class="normal gray">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.state == "NOTRELAY" && item.date == self.date){
                            $('<li class="enable share" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                            self.btnTxt = '分 享';
                            self.isdisabled = false;
                        }else if(item.state == 'RELAY'){
                            $('<li class="enable" id="'+item.date+'"><span class="normal green_bg">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.state == 'SUPPLY'){
                            $('<li class="enable" id="'+item.date+'"><span class="normal green">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else{
                            self.btnTxt = '立即打卡'
                            self.isdisabled = false;
                        }
                    }else{
                        if(item.id == "0" && item.state=="NONE" && item.dateStamp >= lastattend){
                            $('<li class="enable" id="'+item.date+'"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.id == "0" && item.state == 'NONE'){
                            $('<li class="disabled"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.id == "0" && item.state == 'NOTRELAY'){
                            $('<li class="enable share" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                            self.btnTxt = '分 享';
                            self.isdisabled = false;
                        }else if(item.id == "0" && item.state == "RELAY"){
                            // self.btnTxt = '已打卡';
                            // self.isdisabled = true;
                            $('<li class="enable" id="'+item.date+'"><span class="normal green_bg">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.dateStamp < (Math.round(new Date(self.date) / 1000) - 28800)  && item.state == 'NOTRELAY'){
                            $('<li class="enable leakage" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.dateStamp < (Math.round(new Date(self.date) / 1000) - 28800)  && item.state == 'NONE'){
                            $('<li class="enable leakage" data-stamp="'+item.dateStamp+'" id="'+item.date+'"><span class="normal gray">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.dateStamp >= lastattend && item.state == 'NONE'){
                            $('<li class="enable" id="'+item.date+'"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.state == 'NONE' && item.date == self.date ){
                            $('<li class="enable leakage" data-stamp="'+item.dateStamp+'" id="'+item.date+'"><span class="normal gray">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else if(item.state == "NOTRELAY" && item.date == self.date){
                            $('<li class="enable share" id="'+item.date+'"><span class="normal orange">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                            self.btnTxt = '分 享';
                            self.isdisabled = false;
                        }else if(item.state == 'RELAY' && item.date == self.date){
                            $('<li class="enable" id="'+item.date+'"><span class="normal green_bg">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                            self.btnTxt = '已打卡';
                        }else if(item.state == 'SUPPLY'){
                            $('<li class="enable" id="'+item.date+'"><span class="normal green">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                        }else{
                            self.btnTxt = '立即打卡'
                            self.isdisabled = false;
                        }
                    }
                }else{
                    $('<li class="disabled"><span class="normal">'+item.Day+'</span></li>').appendTo('.weekDate .day');
                }
            })
            $('.day li').css({
                width: '14.28%',
                'text-align': 'center',
                'font-size': '0.26rem',
                color: '#999',
                float: 'left',
                'margin-top':'0.5rem'
            })
            $('.day li .normal').css({
                width:' 0.5rem',
                height: '0.5rem',
               'border-radius': '50%',
                margin: '0 auto',
                display: 'inline-block',
                'line-height':' 0.5rem',
            })
            $('.day li span.green').css({
                background: '#00d022',
                color: '#fff'
            })
             $('.day li span.green_bg').css({
                background: '#00d094',
                color: '#fff'
            })
             $('.day li span.orange').css({
                background: 'orange',
                color: '#fff'
            })
             $('.day li span.gray').css({
                background: '#c8c8c8',
                color: '#9b9b9b'
            })
            // 日历状态
            $('.day li.disabled').css('color','#9b9b9b')
            $('.day li.enable').css({
                'font-size':'0.26rem',
                color:'#000',
                background:'#fff'
            })


            if(cid == 'CO0000000001'){
                $('li.enable.leakage').click(function(){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:'该合约无法补卡'
                    });
                })
            }else if(cid == 'CO0000000002'){
                $('li.enable.leakage').click(function(){
                    self.card(self,$(this).attr('id'));
                })
            }
            self.clockInfo(self,self.opid,self.date);
        },
        // 打卡信息
        clockInfo(self,opid,date = ''){
            console.log(date)
            self.$toast.loading({
                message:'加载中...'
            })
            TD_Request('op','oif',{opid:opid},function(code,data){
                console.log(data)
                self.$toast.clear();
                if(window.navigator.userAgent.toLowerCase().indexOf("android") !== -1){
                    // alert('android')
                }else{
                    // alert('ios');
                    self.$toast.clear();
                }
                // alert('yes')
                // self.shareTitle = 
                if(self.colckinfo.alrday == 0){
                    self.shareTitle = data.info.nickname + '刚刚加入追梦行动派，邀请您一起加入！'
                    var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time='+new Date().getTime()+'&opid='+opid+'&type=new'
                } else {
                    self.shareTitle = data.info.nickname+"已加入追梦行动派为 "+data.info.theme+' 坚持行动'+data.info.alrday+'天'
                    var url = 'http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time='+new Date().getTime()+'&opid='+opid
                }
                WebApp.JSAPI.InitShare({
                    title:self.shareTitle,
                    desc:"有梦就行动，坚持返现金！",
                    link:url,
                    imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"
                });
                WebApp.JSAPI.OnShareTimeLine = function(res){
                    console.log(res)
                    if(res){ 
                        self.isshow = false;
                        self.share(self,opid,date);
                    }else if(!res){
                        self.$toast.fail('转发失败')
                    }
                }
                WebApp.JSAPI.OnShareFriend = function(res){
                    self.issuccess = false;
                    console.log(res);
                    if(res){
                        if(self.cid == "CO0000000001"){
                            self.isshow = false;
                            self.share(self,opid,date);
                        }else{
                            self.isshow = false;
                            self.$toast.success('转发成功')
                        }
                    }else if(!res){
                        self.$toast.fail('转发失败')
                    }
                }
                data.info.prec = parseInt(data.info.precentage * 100);
                self.colckinfo = data.info;
            },function(code,data){
                console.log(data)
            })
        },
        // 关闭弹窗
        close(){
            this.isshow = false;
            this.Mat(this);
        },
        // 补卡
        card(self,date){
            self.$toast.loading({
                duration:0,
                forbidClick:true,
                loadingType:'circular',
                message:'补卡中...'
            })
            TD_Request('op','pat',{uid:uid,date:date},function(code,data){
                console.log(data)
                self.$toast.clear();
                self.Mat(self);
                window.location.href = 'fill.html?time='+new Date().getTime()+'&opid='+self.opid+'&state=success';
            },function(code,data){
                self.$toast.clear();
                if(code == 87){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 88){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 89){
                    window.location.href = 'fill.html?time='+new Date().getTime()+'&opid='+self.opid+'&state=fail'
                }else if(code == 90){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }else if(code == 91){
                    self.$dialog.alert({
                        title:'温馨提示',
                        message:data.context
                    })
                }
            })
        },
        // 分享
        share(self,opid,date){
            this.ishare = false;
            if(date == ''){
                date = self.date;
            }
            // alert(date)
            if(typeof date != 'undefined'){
                // console.log(date)
                TD_Request('op','rep',{opid:opid,date:date,uid:uid},function(code,data){
                    // alert(JSON.stringify(data))
                    self.$toast.success('分享成功')
                    // // return;
                    // self.issuccess = false;
                    setTimeout(function(){
                        self.Mat(self)
                    },2000)
                },function(code,data){
                    self.$toast.fail('分享失败')
                })
            }else{
                window.location.href = 'actionClock.html?time='+new Date().getTime();
            }
        },
        // 打卡日历
        left(){
            console.log(this.seek)
            $('.icon-right').show();
            if(this.seek == 0){
                self.seek == 0;
            }else{
                $('.icon-left').show();
                this.seek--;
            }
            this.Mat(this)
        },
        right(){
            console.log(this.seek,this.countMonth)
            $('.icon-left').show();
            if(this.seek == this.countMonth){
               $('.icon-right').hide();
            }else{
                $('.icon-right').show();
                this.seek++;
            }
            this.Mat(this);
        },
        jl(){
            if(isDate){
                window.location.href = 'list.html?time='+ new Date().getTime()+'&type=new';
            }else{
                window.location.href = 'list.html?time='+ new Date().getTime();
            }
            
        },
        guid(){
            this.ishare = true;
            this.isshow = false;
        },
        guid_close(){
            this.ishare = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .actionClock{
        width: 100%;
        .warp{
            padding-bottom: 1.2rem;
            width: 6.8rem;
            margin: 0 auto;
            overflow: hidden;
            .clock{
                border-radius: 0.1rem;
                height: 5.6rem;
                background: #fff;
                margin-top: 0.3rem;
                // 打卡进度
                .progress{
                    width: 2.82rem;
                    height: 2.82rem;
                    margin: 0.3rem auto;
                    font-size: 0.6rem;
                    color: #ffc054;
                    .yd-progressbar-content{
                        font-size: 0.6rem;
                    }
                }
                // 打卡信息
                .clockInfo{
                    margin-bottom: 0.4rem;
                    .van-col{
                        text-align: center;
                        .title{
                            font-size: 0.36rem;
                            color: #000;
                        }
                        .txt{
                            font-size: 0.22rem;
                            color: #989898;
                        }
                    }
                }
                // 打卡按钮
                .btn{
                    text-align: center;
                    .clock_btn{
                        width: 2.9rem;
                        height: 0.88rem;
                        background: #ffc054;
                        color: #fff;
                        border:none;
                        font-size: 0.4rem;
                    }
                }
            }
            .date{
                margin-top: 0.3rem;
                .warper{
                    width: 6.8rem;
                    min-height: 8.42rem;
                    margin: 0 auto;
                    border-radius: 0.2rem;
                    background:#fff url(https://tdream.antit.top/YPBJ.png) no-repeat center center / 6.8rem 8.42rem;
                    overflow: hidden;
                    .weekDate{
                        width: 6.1rem;
                        margin: 0 auto;
                        text-align: center;
                        overflow: hidden;
                        ul.title{
                            width: 100%;
                            li{
                                width: 14.28%;
                                text-align: center;
                                font-size: 0.26rem;
                                color: #999;
                                float: left;
                            }
                        }
                        ul.day{
                            width: 100%;
                            margin-bottom: 0.4rem;
                            overflow: hidden;
                        }
                    }
                    .module{
                        border-top: 1px solid #eee;
                        .main{
                            width: 6.1rem;
                            padding-top: 0.1rem;
                            margin-left: 0.3rem;
                            p{
                                font-size: 0.2rem;
                                margin-bottom: 0.19rem;
                                color: #999;
                                .txt{
                                    margin-right: 0.15rem;
                                }
                                .icon{
                                    vertical-align: text-bottom;
                                }
                            }
                        }
                        .card{
                            font-size: 1.2rem;
                            text-align: right;
                        }
                    }
                }
            }
        }
        // 打卡成功
        .mask{
            background: rgba(0,0,0,0);
            text-align: center;
            .clockState{
                margin-bottom: 0.6rem;
                width: 5.8rem;
                height: 7.44rem;
                background: url(https://tdream.antit.top/DaKaOKB.png) no-repeat 0 center / 5.8rem 7.44rem;
                .main{
                    padding-top: 2.65rem;
                    .avatar{
                        width: 1.48rem;
                        height: 1.48rem;
                        margin: 0 auto;
                        border-radius: 0.1rem;
                        img{
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                    }
                    .tip{
                        font-size: 0.3rem;
                        text-align: center;
                        color: #4c4c4c;
                        margin-top: 0.2rem;
                        margin-bottom: 0.3rem;
                    }
                    .shareBtn{
                        width: 5.2rem;
                        background: #ffc057;
                        color: #fff;
                        height: 0.88rem;
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        border-radius: 0.44rem;
                        line-height: 0.88rem;
                        border: none;
                        margin-bottom: 0.3rem;
                    }
                }
            }
            .close{
                font-size: 0.88rem;
            }
        }
        // 分享指引
        .guid_mask{
            background: rgba(0,0,0,0);
            text-align: center;
            position: fixed;
            top: 4rem;
            .guid{
                width: 7.5rem;
                height: 3.97rem;
                background: url(https://tdream.antit.top/share_toup.png) no-repeat center center / 5.62rem 3.97rem;
                position: relative;
                left: 0.5rem;
            }
            .btn{
                width: 2.56rem;
                height: 0.7rem;
                margin-top: 2.8rem;
                background: url(https://tdream.antit.top/share_iok.png) no-repeat center center / 2.56rem 0.7rem;
                margin: 2.8rem auto 0;
            }
        }
        .bgd{
            width: 7.12rem;
            margin: 0 auto;
            height: 8.62rem;
            background: rgba(0,0,0,0);
            .bg{
                padding-top: 4.1rem;
                width: 7.12rem;
                height: 8.62rem;
                background:url(https://tdream.antit.top/share_mmexportOK.png) no-repeat center center / 7.12rem 8.62rem;
                p{
                    width: 3.84rem;
                    margin: 0 auto;
                    color: #00d094;
                    font-size: 0.36rem;
                    margin-top: 0.3rem;
                    text-align: center;
                }
                .tip{
                    margin-top: 0.1rem;
                    width: 5.8rem;
                    font-size: 0.3rem;
                    color: #b3b3b3;
                    text-align: center;
                }
                .van-button{
                    margin-top: 0.1rem;
                    width: 3.8rem;
                    height:0.88rem;
                    line-height: 0.88rem;
                    border-radius: 0.44rem;
                    position: relative;
                    border: none;
                    left:50%;
                    transform: translateX(-50%);
                    background: #00d094;
                    color: #fff;
                }
            }
        }
    }
</style>



