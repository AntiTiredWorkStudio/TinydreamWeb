$(function(){
    // 开启上传
    WebApp.InitUpload();
    var userInfo = Options.GetUserInfo();
    // 获取did
    var did = JSON.parse(localStorage.getItem('dr')).did;
    var state = JSON.parse(localStorage.getItem('dr')).state;
    state = "all";
    if(state != "all"){
        $('.supper').hide()
    }else{
        $('.supper').show()
    }

    // 获取梦想列表
    TD_Request("dr","gdream",{
        uid:userInfo.openid,
        did:did,
        state:"all"
    },function(code,data){
        console.log(data);
        $('.dr_title').val(data.dream.title);
        $('.dr_info').val(data.dream.content);
        if(data.upload != '' || data.upload != "undefined") {
            console.log(data.upload);
            // 文件上传
            $('.uploaded').click(function(){
                WebApp.UploadWithSDK({
                    token:data.upload.uptoken,
                    domain:data.upload.upurl,
                    tfile:$('.uploaded').val(),
                    filename:data.upload.fileName,
                    OnQiniuComplete:function(res){
                        console.log(res);
                    }
                })
            })
        }
    },function(code,data){
        console.log('获取失败：'+data.context)
    })

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
                console.log(data);
                alert('修改成功!');
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
            },function(code,data){
                console.log('修改失败'+data.context);
            }) 
        }
    })
})