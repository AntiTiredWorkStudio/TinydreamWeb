// 小梦想添加页面
    
var add = new Vue({
    el:'#add',
    data:{
        pageTitle:'添加梦想',//页面标题
        dr_title:'',//梦想标题
        message:'',//梦想简介
        gh:'',//小梦想公函上传预览链接
        selectText:'选择文件',//选择文件按钮文字
        checked:true,//是否勾选了协议
    },
    created(){
        $('title').html(this.pageTitle)
        if($_GET.type == 'add'){
            this.pageTitle = '添加梦想';
            $('.gh_content').hide();
        }else if($_GET.type == 'edit'){
            this.pageTitle = '编辑梦想';
            $('.gh_content').hide();
        } else if($_GET.type == 'perfect'){
            this.pageTitle = '完善梦想';
            $('.gh_content').show();
        }else{
            this.pageTitle = '添加梦想';
            $('.gh_content').hide();
        }
    },
    methods:{
        // 查看/下载公函
        look_gh(){
            vant.ImagePreview({
                images:['http://tdream.antit.top/image/transactionform.jpg']
            })
        },
        // 查看已上传公函
        gh_self(){
            vant.ImagePreview({
                images:[this.gh]
            })
        },
        // 选择文件
        onRead(file,content){
            this.gh = file.content;
            this.selectText = '重新选择'
        },
        // 提交梦想
        submit(){
            if(this.dr_title == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'亲~梦想不能没有标题哦(⊙v⊙)'
                }).then(()=>{
                    return false;
                })
            }else if(this.message == ''){
                this.$dialog.alert({
                    title:'温馨提示',
                    message:'简单的介绍一下你的梦想吧！'
                }).then(()=>{return false;})
            }else if(this.checked == false){
                this.$dialog.setDefaultOptions({
                    confirmButtonText:'勾选并提交',
                    cancelButtonText:'取消'
                })
                this.$dialog.confirm({
                    title:'勾选协议',
                    message:'是否同意勾选下方协议'
                }).then(()=>{
                    this.checked = true;
                    this.$dialog.resetDefaultOptions();
                    this.dedit(app.userInfo.openid,this.dr_title,this.message);
                }).catch(()=>{
                    this.checked = false;
                    this.$dialog.resetDefaultOptions()
                    return;
                })
            }else{
                this.dedit(app.userInfo.openid,this.dr_title,this.message);
            }
        },
        // 发布梦想
        dedit(uid,title,content){
            var that = this;
            TD_Request('dr','dedit',{
                uid:uid,
                title:title,
                content:content
            },function(code,data){
                that.$toast.success('添加成功');
                setTimeout(()=>{
                    if($_GET.type == 'add'){
                        window.location.href = '../../index.html?time='+new Date().getTime()+'&dream=ok&pid='+$_GET.pid;
                    }else{
                        window.location.href = 'dream.html?time='+new Date().getTime();
                    }
                },2000)
            },function(code,data){
                that.$toast.fail('添加失败')
                setTimeout(()=>{
                    window.location.reload();
                },2000)
            })
        }
    },
    watch:{
        dr_title(data){
            if(data.length>20){
                this.dr_title = data.slice(0,20);
            }
        },
        message(data){
            if(data.length > 140){
                this.message = data.slice(0,140);
            }
        }
    }
})