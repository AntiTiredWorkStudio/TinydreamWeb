var WebApp = {
  Init:function(appid,complete){
	  
	var app = this;
	if(app.GetAccessToken() == null){
		var codeData = app.GetAuthInfo();
		if(codeData==null){
			app.GetCode(appid);
		}else{
			TD_Request('us','gawt',
				{code:codeData.code},
				function(code,data){
					WebApp.GetUserInfo(
						function(result,data){
							if(complete){
								if(result){
									complete(result,JSON.parse(data));
								}else{
									console.log(result,data);
									app.ClearAndReloadPage();
								}
							}
						}
					);
				},
				function(code,data){
					console.log(code,data);
				}
			);
		}
	}else{
		WebApp.GetUserInfo(
			function(result,data){
				//console.log(result,data);
				if(complete){
					if(result){
						complete(result,JSON.parse(data));
					}else{
						console.log(result,data);
                        app.ClearAndReloadPage();
					}
				}
			}
		);
	}
  },
  ClearAndReloadPage:function () {
      Options.Clear();
      window.location.href = window.location.href;
  },
  GetUserInfo:function(res){
	var accessTokenObject = JSON.parse(Options.AccessToken);
	var authObject = JSON.parse(Options.Auth);
	TD_Request('us','guif',
		{
			atoken:accessTokenObject.access_token,
			uid:accessTokenObject.openid
		},
		function(code,data){
			if(data.hasOwnProperty("info")){
				if(JSON.parse(data.info).hasOwnProperty("errcode")){
					res(false,data.info);
					return;
				}
				Options.UserInfo = data.info;
				res(true,data.info);
			}else{
				res(false,data);
			}
		},
		function(code,data){
			res(false,data);
		}
	);
  },
  GetAccessToken:function(){
	  //console.log(Options);
	  if(Options.hasOwnProperty("AccessToken") && Options.AccessToken != null){//获取过accesstoken
		  var accessTokenObject = JSON.parse(Options.AccessToken);
		  if(JSTimeToPHPTime(PRC_TIME()) > (accessTokenObject.timeStamp + accessTokenObject.expires_in)){//判断access token 失效
			  return null;
		  }
		  return Options.AccessToken; //判断access token 未失效
	  }
	  return null;
  },
  GetCode:function (web_appid) {
      var redirect = {
          appid:web_appid,
          redirect_uri:window.location.href,
          response_type:'code',
          scope:'snsapi_userinfo',
          state:'1'
      }
      var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+redirect.appid+"&redirect_uri="+redirect.redirect_uri+"&response_type="+redirect.response_type+"&scope="+redirect.scope+"&state="+redirect.state+"#wechat_redirect";
        window.location.href = url;
  },
  GetAuthInfo:function(){
	var codeData = null;
	var getArr = $_GET;
	if(getArr['code']!=null && getArr['state']!=null){
		if(ExistStorage('code') && ExistStorage('state')){
			var tempCode = GetStorage('code');
			RemoveStorage('code');
			RemoveStorage('state');
			if(tempCode==getArr['code']){
				return null;
			}
		}
		codeData = {code:getArr['code'],state:getArr['state']};
		window.localStorage.setItem('code',getArr['code']);
		window.localStorage.setItem('state',getArr['state']);
	}
	return codeData;
  },
  InitUpload:function(){//https://tinydream.antit.top/admin/js/qiniu.min.js
      document.write('<script type="text/javascript" src="https://tinydream.antit.top/admin/js/qiniu.min.js"></script>');
  },
  UploadWithSDK :  function (token,domain,tfile,filename,OnQiniuComplete) {
		  var config = {
			  useCdnDomain: true,
			  disableStatisticsReport: false,
			  retryCount: 6,
			  region: qiniu.region.z0
		  };
		  var putExtra = {
			  fname: "",
			  params: {},
			  mimeType: null
		  };
		var file = tfile;
        var suffix = tfile.name.split(".")[1];
        var finishedAttr = [];
        var compareChunks = [];
        var observable;
        if (file) {
            var key = filename;
            putExtra.fname = key+"."+suffix;
           // console.log(putExtra["fname"] );
            putExtra.mimeType = ["image/png", "image/jpeg", "image/gif"];

            // 设置next,error,complete对应的操作，分别处理相应的进度信息，错误信息，以及完成后的操作
            var error = function(err) {
                console.log(err);
                //alert("上传出错");
            };

            var next = function(response) {
                var chunks = response.chunks||[];
                var total = response.total;
                // 这里对每个chunk更新进度，并记录已经更新好的避免重复更新，同时对未开始更新的跳过
                for (var i = 0; i < chunks.length; i++) {
                    if (chunks[i].percent === 0 || finishedAttr[i]){
                        continue;
                    }
                    if (compareChunks[i].percent === chunks[i].percent){
                        continue;
                    }
                    if (chunks[i].percent === 100){
                        finishedAttr[i] = true;
                    }
                }
                compareChunks = chunks;
            };

            var subObject = {
                next: next,
                error: error,
                complete: function(res){
                	if(res.hasOwnProperty("hash") && res.hasOwnProperty("key")) {
                        OnQiniuComplete({result:true,imgName:res.key});
                    }else{
                        OnQiniuComplete({result:false,msg:res});
					}
				}
            };
            var subscription;
            observable = qiniu.upload(file, key, token, putExtra, config);

            subscription = observable.subscribe(subObject);
        }
    },
	View:{
  		AddViewData:function (view,pars) {
  			var viewData = view.data;
            viewData.push(pars);
            view.data = viewData;
			return view;
        },
  		CreateSingleView:function(templateName,pars){
			if(pars == null){
				return {name:templateName,data:[]};
			}
			return {name:templateName,data:pars};
		},
		BuildsView:function(viewData,url,onCreated){
  			var requestData = {datas:JSON.stringify(viewData)};
  			if(url != null){
                requestData['url'] = url;
			}

  			TD_Request('view','builds',requestData,
                function(code,data){
                    //console.log(data);
                    if(data.hasOwnProperty('snippet')) {

                        for(var key in data.snippet){
                            var snippetStr = data.snippet[key];

                            var LB = new RegExp("#LB#","g");
                            var RB = new RegExp("#RB#","g");

                            snippetStr = snippetStr.replace(LB,"<");
                            snippetStr = snippetStr.replace(RB,">");
                            data.snippet[key] = snippetStr;
                        }
                        onCreated(true, data.snippet);
                    }else{
                        onCreated(false,data);
                    }
                },
                function (code, data) {
                    //console.log(data);
                    onCreated(false,data);
                }
            )
			//未实现完成
			/*var str = "";
			str.replace("#LB#","<");
			str.replace("#RB#",">");*/
		},
        BuildLayout:function (templateID,onCreated) {
            TD_Request('view','build_dt',{turl:templateID},
                function(code,data){
                    if(data.hasOwnProperty('layout')) {
                        var LB = new RegExp("#LB#","g");
                        var RB = new RegExp("#RB#","g");
                        data.layout = data.layout.replace(LB,"<");
                        data.layout = data.layout.replace(RB,">");

                        onCreated(true, data.layout);
                    }else{
                        onCreated(false,data);
                    }
                },
                function (code, data) {
                    //console.log(data);
                    onCreated(false,data);
                }
            )
        },
	},
	JSAPI:{
  		Init:function (para) {
			this.ShareDefaultConfig = para || this.ShareDefaultConfig;
			document.write('<script type="text/javascript" src="http://res2.wx.qq.com/open/js/jweixin-1.4.0.js"></script>');
           	var shareObject = this;
			setTimeout(function(){
				TD_Request('us','gjsc',{url:window.location.href},
					function (code, data) {
						console.log(data);
						shareObject.WxConfig(data.config);
					},
					function (code, data) {
						console.log(data);
					}
				)
				},1000);
        },
  		InitShare:function (para) {
			this.ShareDefaultConfig = para || this.ShareDefaultConfig;
           	var shareObject = this;
			setTimeout(function(){
				TD_Request('us','gjsc',{url:window.location.href},
					function (code, data) {
						console.log(data);
						shareObject.WxConfig(data.config);
					},
					function (code, data) {
						console.log(data);
					}
				)
				},1000);
        },
		WxConfig:function (config) {
            var shareObject = this;
			
            wx.config(config);
            wx.ready(function(){
            	console.log("wx jsapi ready");
                shareObject.OnAPIReady();
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            });
            wx.error(function(res){
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.log("wx jsapi fail",res);
            });
        },
		OnAPIReady:function () {
			this.OnSettingShare(this.ShareDefaultConfig);
        },
		ShareDefaultConfig:{
			title:"小梦想互助",
			desc:"我刚刚参与互助了一份小梦想，你也一起来吧！",
			link:"http://"+Options.CombineUrl+"/TinydreamWeb",
			imgUrl:"http://tdream.antit.top/image/titleLogo.png"
		},
		OnSettingShare:function(config){
			var shareObject = this;
			wx.onMenuShareTimeline({
				title : config.title, // 分享标题
				link : config.link, // 分享链接,将当前登录用户转为puid,以便于发展下线
				imgUrl : config.imgUrl, // 分享图标
				success : function () {
					// 用户确认分享后执行的回调函数
					//alert('分享成功');
					if(shareObject.OnShareTimeLine != null){
						shareObject.OnShareTimeLine(true);
					}
				},
				cancel : function () {
					// 用户取消分享后执行的回调函数
					//alert('取消分享');
					if(shareObject.OnShareTimeLine != null){
						shareObject.OnShareTimeLine(false);
					}
				}
			});

			wx.onMenuShareAppMessage({
				title : config.title, // 分享标题
				desc : config.desc, // 分享描述
				link : config.link, // 分享链接
				imgUrl : config.imgUrl, // 分享图标
				type : "link", // 分享类型,music、video或link，不填默认为link
				success : function () {
					// 用户确认分享后执行的回调函数
					//alert('分享成功');
					if(shareObject.OnShareFriend != null){
						shareObject.OnShareFriend(true);
					}
				},
				cancel : function () {
					// 用户取消分享后执行的回调函数
					//alert('取消分享');
					if(shareObject.OnShareFriend != null){
						shareObject.OnShareFriend(false);
					}
				}
			});
			return;
            wx.updateAppMessageShareData({
						title: config.title, // 分享标题
						desc: config.desc, // 分享描述
						link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: config.imgUrl, // 分享图标
						success: function (result) {
							// 设置成功
							//alert("Data Share Success(updateAppMessageShareData)"+JSON.stringify(result));
							console.log("Data Share Success");
							if(shareObject.OnShareFriend != null){
								shareObject.OnShareFriend(result);
							}
						}
            });
            wx.updateTimelineShareData(
                {
                    title: config.title, // 分享标题
                    link: config.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: config.imgUrl, // 分享图标
                    success: function (result) {
                        // 设置成功
						//alert("Data Share Success(updateTimelineShareData)"+JSON.stringify(result));
                        console.log("Data Share Success");
						if(shareObject.OnShareTimeLine != null){
							shareObject.OnShareTimeLine(result);
						}
                    }
                }
            );
		},
		OnShareTimeLine:null,
		OnShareFriend:null
	}
};
