WebApp.JSAPI.Init();
var typeIdList = ['type_running','type_end','type_join'];

/*测试用*/
/*Options = {
    Url: "https://tinydream.antit.top",//http://localhost:8003 , https://tinydream.antit.top
    Auth: null,
    AccessToken: null,
    UserInfo: JSON.stringify({
        openid:"ovVIv5T653mGLorarTQB1oXBCdiA"//"on8W94tv5jTTiItf1uJCBdLJPyic"
    }),
    GetUserInfo: function () {
        return this.UserInfo != null ? JSON.parse(this.UserInfo) : null;
    }
}*/

/*测试用*/
var uid = Options.GetUserInfo().openid;
// if(PERMISSION_USER(uid)){
//     // console.log("is test user");
//     Options.TestServer = true;
// }else{
//     Options.TestServer = false;
// }
console.log(uid);

var onClickTypeBtn = function(btn){
    if(PoolManager.typeSelection == btn.currentTarget.id){
        return;
    }
    PoolManager.typeSelection = btn.currentTarget.id;
    $('#pool_List').html("");
    PoolManager[PoolManager.typeSelection].seek = 0;
    PoolManager[PoolManager.typeSelection].poolList = [];
    PoolManager.LoadCurrentSelection(onPoolViewBuild);
}



var onPoolViewBuild = function (poolInfo) {
    var snippetID = 'pool_'+PoolManager.typeSelection;
    if(PoolManager.typeSelection == 'type_join'){

        var joinViewObject = WebApp.View.CreateSingleView(snippetID);
        var endViewObject = WebApp.View.CreateSingleView("pool_type_end");

        for(var key in poolInfo){
            if(poolInfo[key].state == 'FINISHED'){
                endViewObject = WebApp.View.AddViewData(endViewObject,poolInfo[key]);
                console.log(endViewObject);
            }else{
                joinViewObject = WebApp.View.AddViewData(joinViewObject,poolInfo[key]);
            }
        }


        WebApp.View.BuildsView([joinViewObject,endViewObject],"http://tinydream.antit.top/TinydreamWeb/view",
            function(result,data){
                var content = $('#pool_List').html();
                $('#pool_List').html(content + data[snippetID] + data["pool_type_end"]);
                switchTypeClass(PoolManager.typeSelection);
                $('#btn_join').click(onJoinPool);
                var eventList = PoolManager[PoolManager.typeSelection].poolList;
                for(var key in eventList){
                    $('#poolinfo_'+eventList[key].pid).click(onClickPoolInfo);
                }
				BottomLoading = false;//加载完毕
            }
        );
    }else {
        var viewObject = WebApp.View.CreateSingleView(snippetID);
        for(var key in poolInfo) {
            viewObject = WebApp.View.AddViewData(viewObject,poolInfo[key]);
        }

        WebApp.View.BuildsView([viewObject],"http://tinydream.antit.top/TinydreamWeb/view",
            function(result,data){
                var content = $('#pool_List').html();
                $('#pool_List').html(content + data[snippetID]);
                switchTypeClass(PoolManager.typeSelection);
                var eventList = PoolManager[PoolManager.typeSelection].poolList;
                for(var key in eventList){
//					console.log("[btn_join]"+eventList[key].pid);
					$('#btn_join_'+eventList[key].pid).click(onJoinPool);
                    $('#poolinfo_'+eventList[key].pid).click(onClickPoolInfo);
                }
				BottomLoading = false;//加载完毕
            }
        );
    }
}

var onClickPoolInfo = function (res) {
    console.log(res.currentTarget.attributes[1].nodeValue);
    //console.log(res.currentTarget.attributes[1].nodeValue);
    var tPid = res.currentTarget.attributes[1].nodeValue;
    for(var key in PoolManager[PoolManager.typeSelection].poolList){
        if(PoolManager[PoolManager.typeSelection].poolList[key].pid == tPid){
            window.localStorage.setItem('poolInfo',JSON.stringify(PoolManager[PoolManager.typeSelection].poolList[key]));
            window.localStorage.setItem('tabType',PoolManager.typeSelection);
			if(PoolManager[PoolManager.typeSelection].poolList[key].state == "FINISHED"){
				window.location.href = "end.html";
			}else{
				window.location.href='helpInfo.html';
			}
            return;
        }
    }
}

var onJoinPool = function (res) {
//     console.log("btn_join_",res.currentTarget);
    // console.log(res.currentTarget.attributes[1].nodeValue);
	
    var tPid = res.currentTarget.attributes[1].nodeValue;
    TD_Request('ds','buy',{"uid":uid,"pid":tPid},function(code,data){
        console.log(data);
        window.localStorage.setItem('buy',JSON.stringify(data.actions));
        if(data.actions.hasOwnProperty('editdream')){
            window.location.href = 'add.html';
        }else {
            window.location.href = 'payInfo.html';
        }
    },function(code,data){
        console.log(data);
    });
}



var switchTypeClass = function (type_btn) {
    for (var key in typeIdList){
        if(typeIdList[key] == type_btn){
            $('#'+typeIdList[key]).addClass('active');
        }else{
            $('#'+typeIdList[key]).removeClass('active');
        }
    }
}

var PoolManager = {
    typeSelection : '',
    LoadCurrentSelection:function (complete) {
      if(this.hasOwnProperty(this.typeSelection)){
          this[this.typeSelection].LoadPoolByIndex(complete);
      }
    },
    type_running :{
        count:0,
        seek:0,
        size:5,
        LoadPoolByIndex:function(complete){
            var typeObject = this;
            if(typeObject.seek>typeObject.count){
                console.log("已经全部加载");
                return;
            }
            this.PoolRequest(function (result, data) {
                if(result){
                    typeObject.seek = typeObject.seek + typeObject.size;

                    var pools = DreamPoolsAnalysis(data.Pools);
                    for(var key in pools){
                        typeObject.poolList.push(pools[key]);
                    }

                    complete(pools);
                }
            });
        },
        PoolRequest:function (complete) {
            TD_Request("ds","plistr",
                {
                    seek:this.seek,
                    count:this.size
                },
                function (code,data) {
                    complete(true,data);
                },
                function(code,data){
                    complete(false,data);
                }
            );
        },
        poolList:[]
    },
    type_join:{
        count:0,
        seek:0,
        size:5,
        LoadPoolByIndex:function(complete){
            var typeObject = this;
            if(typeObject.seek>typeObject.count){
                console.log("已经全部加载");
                return;
            }
            this.PoolRequest(function (result, data) {
                if(result){
                    typeObject.seek = typeObject.seek + typeObject.size;

                    var pools = DreamPoolsAnalysis(data.Pools);
                    for(var key in pools){
                        typeObject.poolList.push(pools[key]);
                    }

                    complete(pools);
                }
            });
        },
        PoolRequest:function (complete) {
            TD_Request("ds","plistj",
                {
                    uid:uid,
                    seek:this.seek,
                    count:this.size
                },
                function (code,data) {
                    complete(true,data);
                },
                function(code,data){
                    complete(false,data);
                }
            );
        },
        poolList:[]
    },
    type_end:{
        count:0,
        seek:0,
        size:5,
        LoadPoolByIndex:function(complete){
            var typeObject = this;
            if(typeObject.seek>typeObject.count){
				//alert(typeObject.seek+","+typeObject.count);
                console.log("已经全部加载");
                return;
            }else{
				this.PoolRequest(function (result, data) {
					if(result){
						//
						typeObject.seek = typeObject.seek + typeObject.size;

						var pools = DreamPoolsAnalysis(data.Pools);
						for(var key in pools){
							typeObject.poolList.push(pools[key]);
						}

						complete(pools);
					}
				});
			}
        },
        PoolRequest:function (complete) {
            TD_Request("ds","plistf",
                {
                    seek:this.seek,
                    count:this.size
                },
                function (code,data) {
                    complete(true,data);
                },
                function(code,data){
                    complete(false,data);
                }
            );
        },
        poolList:[]
    }
}


//分析梦想池
var DreamPoolsAnalysis = function (pools) {
    var resultPool = [];
    for(var key in pools){
        resultPool[key] = DreamPoolAnalysis(pools[key]);
    }
    return resultPool;
}

/*var DreamPoolAnalysis = function(pool) {
    var billResult = BillExchange(pool.cbill);
    pool.realBill = billResult.value;
    pool.realUnit = billResult.unit;
    pool.percentVal = Math.floor((pool.cbill / pool.tbill) * 10000) / 100
    pool.rubill = pool.ubill * 0.01
    pool.day = Math.floor(pool.duration / 86400)
    var rtbill = BillExchange(pool.tbill);
    pool.rtbillValue = rtbill.value;
    pool.rtbillUnit = rtbill.unit;
    var rubill = BillExchange(pool.ubill);
    pool.rubillValue = rubill.value;
    pool.rubillUnit = rubill.unit;
    pool.rduration = DescriptionTime(pool.duration);
    var timeLess = (parseInt(pool.ptime) + parseInt(pool.duration)) - JSTimeToPHPTime(PRC_TIME());
    pool.timeLess = DescriptionTime(timeLess);
    if(pool.ubill >0){
        pool.joincount = pool.cbill / pool.ubill
    }else{
        pool.joincount = pool.pcount
    }
    if (pool.state == 'RUNNING') {
        pool.billHint = "目前互助金"
    } else if (pool.state == 'FINISHED') {
        pool.billHint = "最终互助金"
    }
    return pool
}*/

var BottomLoading = false;//当到底时的加载状态记录

var OnReachBottom = function () {
	if(BottomLoading){
		return;
	}else{
		BottomLoading = true;
	}
    PoolManager.LoadCurrentSelection(onPoolViewBuild);
    //console.log("页面触底");
}


var pageInit = function () {
    var selectionType = window.localStorage.getItem('tabType');
    if(selectionType==null){
        selectionType = 'type_running';

    }else{
        window.localStorage.removeItem('tabType');
    }
    $('#type_running').click(onClickTypeBtn);
    $('#type_end').click(onClickTypeBtn);
    $('#type_join').click(onClickTypeBtn);
    $('#pool_List').html("");
    TD_Request('ds','pcount',{uid:uid},
        function (code, data) {
            PoolManager.type_running.count = data.rcount;
            PoolManager.type_join.count = data.ucount;
            PoolManager.type_end.count = data.fcount;
            //获得数量
            onClickTypeBtn({
                currentTarget:{
                    id:selectionType
                }
            });//初始化种类
        },
        function (code, data) {
            console.log(data);
        }
    );
}


pageInit();
// WebApp.JSAPI.Init()