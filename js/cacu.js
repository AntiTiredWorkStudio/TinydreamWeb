WebApp.JSAPI.Init();
SaveStorage("pid","100001");

var CaculateManager = {
	title:"",
	step01:"",
	step02:"",
	step03:"",
	step04:"",
	step05:"",
	Init:function(tpid){
		var Manager = this;
		TD_Request("aw","calc",{pid:tpid},
			function(code,data){
				console.log(data);
				Manager.OnStepBuild(
					data.awardInfo.expect,
					data.awardInfo.code,
					data.awardInfo.pid,
					data.awardInfo.pcount
				);
			},			
			function(code,data){
				console.log(data);
			}
		);
	},
	OnStepBuild(expect,code,pid,pcount){
		this.title = "本期中奖计算步骤(开奖福彩期号:"+expect+"期):";
		this.step01 = "[("+expect+"+"+code+"+"+pid+")/ "+pcount+"]取余数 +10000000";
		var st02A = parseInt(expect)+ parseInt(code)+ parseInt(pid);
		this.step02 = "=("+st02A+" / "+pcount+") 取余数 +10000000";
		var st03A = st02A%pcount;
		this.step03 = "="+st03A+"+10000000（"+st03A+"为余数）";
		var result = st03A+10000000;
		this.step04 = "="+result;
		this.step05 = "得出幸运者编号为："+pid+"-"+result;
		$("#title").html(this.title);
		$("#Step01").html(this.step01);
		$("#Step02").html(this.step02);
		$("#Step03").html(this.step03);
		$("#Step04").html(this.step04);
		$("#Step05").html(this.step05);
	}
}

if(ExistStorage("pid")){
	var pid = GetStorage("pid");
	CaculateManager.Init(pid);
	RemoveStorage("pid");
}


