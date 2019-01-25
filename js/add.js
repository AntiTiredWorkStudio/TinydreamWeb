WebApp.JSAPI.Init();
$(function(){
    // 开启上传
    // WebApp.InitUpload();
    var userInfo = Options.GetUserInfo();
    // 获取did
    var did = JSON.parse(localStorage.getItem('dr')).did;
    var state = JSON.parse(localStorage.getItem('dr')).state;
    // state = 'all'
    if(state != "all"){
        $('.supper').hide()
    }else{
        $('.supper').show()
    }

    // 获取梦想列表
    TD_Request("dr","gdream",{
        uid:userInfo.openid,
        did:did,
        state:state
    },function(code,data){
        // console.log(data);
        $('.dr_title').val(data.dream.title);
        $('.dr_info').val(data.dream.content);
        if(data.upload != undefined) {
            // console.log(data.upload);
            // 文件上传
            var file;
            $('.uploaded').change(function(e){
                // console.log(e);
                //console.log(e.target.files[0].name.split(".")[1])
                file = e.target.files[0];
                                
            })
            console.log(data)
           
            $('.submit').click(function(){
                // console.log(file)
                console.log(data.dream.videourl)
                console.log(file)
                if(data.dream.videourl == '' &&　(file == '' || file == undefined)){
                    alert('请上传小梦想公函');
                    return;
                }
                if($('.dr_title').val() == ''){
                    alert('请填写梦想标题');
                    return;
                }else if($('.dr_info').val() == ''){
                    alert('请填写梦想简介');
                    return;
                }else if(!$('input[type="checkbox"]').is(':checked')){
                    alert('请勾选协议');
                    return;
                }else{
					var SubmitVerify = function(){
						MsgBox_YESNO("提示","是否提交审核?","是","否",
							function(res){
								console.log("yes",res);
								
								 TD_Request("ds", "sver",{
									uid:userInfo.openid,
									did:did
								},function(code,data){
									$('.submit_mask').fadeIn();
									$('.submit_mask button').click(function(){
									$('.submit_mask').fadeOut();
										window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
									})
								},function(code,data){
									alert(data.context);
									window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
								}
								);
							},function(res){
								console.log("no",res);
							}
						);
                    }
                    
					var UpdateDream = function(res){
                        // console.log(res);
                        if(res.result){
							var updateForm = {"title":$('.dr_title').val(),"content":$('.dr_info').val()};
							if(res.imgName){
                                // console.log(updateForm)
                                updateForm['videourl'] = data.upload.domain + "/" + res.imgName;
                                
							}
                           TD_Request("dr","gedit",{
                                uid:userInfo.openid,
                                did:did,
                                contentList:JSON.stringify(updateForm)
                            },function(code,data){
                                SubmitVerify();
                            },function(code,data){
								if(code=='44'){
                                    alert('无内容变更');
									SubmitVerify();
								}else{
									alert(data.context);
								}
                            }) 
                        }
                    }
					
					if(file == ''){
						WebApp.UploadWithSDK(data.upload.uptoken,data.upload.upurl,file,data.upload.fileName,UpdateDream)  
					}else{
						UpdateDream({result:true});
					}
                }
            })
        }else{
            // 修改梦想
    $('.submit').click(function(){
        if($('.dr_title').val() == ''){
            alert('请填写梦想标题');
            return;
        }else if($('.dr_info').val() == ''){
            alert('请填写梦想简介');
            return;
        }else if(!$('input[type="checkbox"]').is(':checked')){
            alert('请勾选协议');
            return;
        }else{
            TD_Request("dr","gedit",{
                uid:userInfo.openid,
                did:did,
                contentList:JSON.stringify({"title":$('.dr_title').val(),"content":$('.dr_info').val()})
            },function(code,data){
                // console.log(data);
                alert('修改成功!');
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
            },function(code,data){
                console.log('修改失败'+data.context);
            }) 
        }
    })
        }
    },function(code,data){
        console.log('获取失败：'+data.context)
    })
    $('.xieyi').click(function(){
        window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/xieyi.html"
    })
    if($("input[type='checkbox']").is(':checked')){
        $(".chec label").css({
            background:"url(https://tdream.antit.top/image/Toggle_True.jpg) no-repeat",
            "background-size":"0.3rem 0.3rem"
        })
    }else{
        $(".chec label").css({
            background:"url(https://tdream.antit.top/image/Toggle_False.jpg) no-repeat",
            "background-size":"0.3rem 0.3rem"
        })
    }
   $('.chec').click(function(){
        if($("input[type='checkbox']").is(':checked')){
            $(".chec label").css({
                background:"url(https://tdream.antit.top/image/Toggle_True.jpg) no-repeat",
                "background-size":"0.3rem 0.3rem"
            })
        }else{
            $(".chec label").css({
                background:"url(https://tdream.antit.top/image/Toggle_False.jpg) no-repeat",
                "background-size":"0.3rem 0.3rem"
            })
        }
        // console.log($("input[type='checkbox']").is(':checked'))
   })
    // WebApp.JSAPI.Init()
})