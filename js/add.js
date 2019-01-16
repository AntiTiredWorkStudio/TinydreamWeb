$(function(){
    var userInfo = Options.GetUserInfo();
    // 获取梦想id
    get(userInfo)
    var dr = JSON.parse(localStorage.getItem('dr'));
    if(dr.state!="all"){
        var state = "all"
        $('.supper').show();
        $('title').html('编辑梦想')
        get(userInfo)
    }else{
        $('.supper').show();
        $('title').html('完善梦想')
        var state = "all"
    }
    // 获取梦想列表
    console.log(userInfo)
    function get(userInfo){
        console.log(userInfo)
        TD_Request("dr","gdream",{
            uid:userInfo.openid,
            did:dr.did,
            state: state
        },function(code,data){
            console.log(data)
            $('.dr_title').val(data.dream.title);
            $('.dr_info').val(data.dream.content);
            if(data.upload!=undefined || data.upload!=""){
                var upload = data.upload
                // 开启上传api
                WebApp.InitUpload();
                // 文件上传
               $('.uploaded').click(function(){
                WebApp.UploadWithSDK({
                    token:upload.uptoken,
                    domain:upload.upurl,
                    filename:upload.fileName,
                    tfile:$('.uploaded').val(),
                    OnQiniuComplete:function(res){
                        console.log(res);
                    }
                })
               })
            }
        },function(code,data){
            console.log("错误信息："+data.context);
        })
    }
    $('.submit').click(function(){
        if($('.dr_title').val() == ''){
            alert('梦想标题不能为空');
            return;
        }else if($('.dr_info').val() == ''){
            alert('梦想简介不能为空');
            return;
        }else if(!$("input[type='checkbox']").is(':checked')){
            alert('请勾选协议');
            return;  
        }else{
            TD_Request("dr","gedit",{
                uid:userInfo.openid,
                did:dr.did,
                contentList:JSON.stringify({"title":$('.dr_title').val(),"content":$('.dr_info').val()})
            },function(code,data){
                alert('修改成功');
                window.location.href = "http://tinydream.antit.top/TinydreamWeb/html/dream.html"
            },function(code,data){
                console.log("修改失败:"+data.context)
            })
        }
    })
})