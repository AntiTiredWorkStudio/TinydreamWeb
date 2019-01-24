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
WebApp.JSAPI.Init();
WebApp.InitUpload();
var openid = Options.GetUserInfo().openid;
console.log(openid);

var authManager = {

    /**
     * 页面的初始数据
     */
    data: {
        idfrontimg: "",
        realName: "",
        bank: "",
        openbank: "",
        hasIdentity:"",
        idNumber:"",
        cardNumber: "",
        hint: "",
        hintStyle:"color:black",
        bankList: ["招商银行",
            "建设银行",
            "交通银行",
            "邮储银行",
            "工商银行",
            "农业银行",
            "中国银行",
            "中信银行",
            "光大银行",
            "华夏银行",
            "民生银行",
            "广发银行",
            "平安银行",
            "星展银行",
            "恒生银行",
            "渣打银行",
            "汇丰银行",
            "东亚银行",
            "花旗银行",
            "浙商银行",
            "恒丰银行",
            "浦东发展银行",
            "兴业银行",
            "齐鲁银行",
            "烟台银行",
            "淮坊银行",
            "渤海银行",
            "上海银行",
            "厦门银行",
            "北京银行",
            "福建海峡银行",
            "吉林银行",
            "宁波银行",
            "焦作市商业银行",
            "温州银行",
            "广州银行",
            "汉口银行",
            "龙江银行",
            "盛京银行",
            "洛阳银行",
            "辽阳银行",
            "大连银行",
            "苏州银行",
            "河北银行",
            "杭州银行",
            "南京银行",
            "东莞银行",
            "金华银行",
            "乌鲁木齐商业银行",
            "绍兴银行",
            "成都银行",
            "抚顺银行",
            "临商银行",
            "宜昌市商业银行",
            "葫芦岛银行",
            "郑州银行",
            "宁夏银行",
            "珠海华润银行",
            "齐商银行",
            "锦州银行",
            "徽商银行",
            "重庆银行",
            "哈尔滨银行",
            "贵阳银行",
            "西安银行",
            "无锡市商业银行",
            "丹东银行",
            "兰州银行",
            "南昌银行",
            "晋商银行",
            "青岛银行",
            "南通商业银行",
            "九江银行",
            "日照银行",
            "鞍山银行",
            "秦皇岛银行",
            "青海银行",
            "台州银行",
            "盐城银行",
            "长沙银行",
            "赣州银行",
            "泉州银行",
            "营口银行",
            "富滇银行",
            "阜新银行",
            "嘉兴银行",
            "廊坊银行",
            "泰隆商业银行",
            "内蒙古银行",
            "湖州银行",
            "沧州银行",
            "广西北部湾银行",
            "包商银行",
            "威海商业银行",
            "攀枝花市商业银行",
            "绵阳市商业银行",
            "泸州市商业银行",
            "三门峡银行",
            "邢台银行",
            "商丘市商业银行",
            "安徽省农村信用社",
            "江西省农村信用社",
            "湖南农村信用社"],
        bankSelection:"工商银行"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    getHintInfo : function(state){

        var htext = ""
        var hstyle = ""
        switch(state){
            case "SUBMIT":
                htext = "实名认证信息已经提交"
                hstyle = "color:#e9ba65;font-weight:bold;font-size:13px"
                break;
            case "SUCCESS":
                htext = "实名认证审核通过"
                hstyle = "color:#00ff00;font-weight:bold;font-size:13px"
                break;
            case "FAILED":
                htext = "实名认证失败"
                hstyle = "color:red;font-weight:bold;font-size:13px"
                break;
            default:
                break;
        }
        return {
            text: htext,
            style: hstyle
        }
    }
    ,
    fromLuckyDream :false,
    selectImg : null,
    onLoad: function (options) {
        console.log(options)
        if(options != null) {
            if (options.hasOwnProperty('lucky')) {
                this.fromLuckyDream = options.lucky
            }
        }
        this.onSubmitRefreash();
    },

    onSubmitRefreash: function () {
        var page = this
        $("#btn_submit").click(this.submit);
        TD_Request('us', 'rnamegx', { uid: openid }, function (code, data) {
            console.log(data) //已经实名认证
            var hintInfo = authManager.getHintInfo(data.realName[openid].state)
            console.log(hintInfo)
            $("#hintInfo").attr("style",hintInfo.style);
            $("#hintInfo").html(hintInfo.text);
            $("#input_realName").attr("placeholder",data.realName[openid].realname);
            $("#input_realName").attr("disabled",true);
            $("#input_idCardNum").attr("placeholder",data.realName[openid].icardnum);
            $("#input_idCardNum").attr("disabled",true);
            $("#input_CardNum").attr("placeholder",data.realName[openid].ccardnum);
            $("#input_CardNum").attr("disabled",true);
            $("#input_OpenBank").attr("placeholder",data.realName[openid].openbank);
            $("#input_OpenBank").attr("disabled",true);
            $("#input_photo").attr("disabled",true);
            $("#imgView").attr("src",data.realName[openid].icardfurl);
            $("#input_bankType").attr("placeholder",data.realName[openid].bank);
            $("#input_bankType").attr("disabled",true);

            $("#btn_submit").attr("style","display:none;");

        }, function (code, data) {
            console.log(data) //未实名认证


            $("#input_realName").bind('input propertychange',page.onInputRealname);
            $("#input_idCardNum").bind('input propertychange',page.onInputIDCode);
            $("#input_CardNum").bind('input propertychange',page.onInputCardCode);
            $("#input_bankType").bind('input propertychange',page.onInputBank);
            $("#input_OpenBank").bind('input propertychange',page.onInputOpenBank);
            $("#input_photo").change(function (res) {
                console.log(res);
                console.log(res.target.files[0]);
                authManager.selectImg = res.target.files[0];
                var windowURL = window.URL || window.webkitURL;
                var dataURL = windowURL.createObjectURL(authManager.selectImg);
                $("#imgView").attr("src",dataURL);
            })
            $("#input_bankType").click(function () {
                console.log("bankSelection");
                weui.picker(
                    page.data.bankList,
                    {
                        className: 'custom-classname',
                        container: 'body',
                        defaultValue: ["工商银行"],
                        onChange: function (result) {
                        },
                        onConfirm: function (result) {
                            console.log(result,$("#input_bankType").attr("placeholder"),result[0].label);
                            $("#input_bankType").attr("placeholder",result[0].label);
                            page.bank = result[0].label;
                        },
                        id: 'singleLinePicker'
                    });
            });

            var targetState = "NONE"
            if (data.code == "41") {
                targetState = "FAILED"
                /*wx.showModal({
                    title: '提示',
                    content: '您提交的实名认证信息不符合规则,未通过审核,如需帮助请与客服联系',
                    success: function (res) {
                        if (res.confirm) {
                            //跳转至客服页面
                        }
                    }
                })*/
                MsgBox_OK("提示","您提交的实名认证信息不符合规则,未通过审核,如需帮助请与客服联系","确定",function () {
                });
            }
            var hintInfo = page.getHintInfo(targetState)

            $("#hintInfo").attr("style",hintInfo.style);
            $("#hintInfo").html(hintInfo.text);

            console.log(hintInfo)
            var deltaValue = {
                idfrontimg: "",
                hasIdentity: false,
                idNumber: "身份证号",
                cardNumber: "银行卡号",
                hint: hintInfo.text,
                hintStyle: hintInfo.style
            };
            for(var key in deltaValue){
                page.data[key] = deltaValue[key];
            }
            console.log(page.data);
        })
    },

    //实名认证需要检查的内容
    idNum: "",
    cardNum: "",
    realName: "",
    bank: "",
    openBank: "",
    onInputRealname: function () {

        authManager.realName = $(this).val();
        console.log(this.realName);
    },
    onInputBank: function () {
        authManager.bank = $(this).val();
        console.log(this.openBank);
    },
    onInputOpenBank: function () {
        authManager.openBank = $(this).val();
        console.log(this.openBank);
    },
    onInputIDCode: function(){
        authManager.idNum = $(this).val();
        console.log(this.idNum);
        //console.log(res.detail.value)
    },
    onInputCardCode: function (res) {
        authManager.cardNum = $(this).val();
        console.log(this.cardNum);
        //console.log(res.detail.value)
    },
    submit:function(){
        console.log("提交")
        var page =authManager
        /*idfrontimg: "",
          idbackimg: "",
            cardimg: ""*/

        console.log(page);
        if (!(/^[\u4E00-\u9FA5]{2,6}$/.test(page.realName))){
            MsgBox_OK("提示","姓名不符合格式","确定",function () {
            });
            return;
        }
        if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(page.idNum))) {
            MsgBox_OK("提示","身份证号不符合格式","确定",function () {
            });
            return;
        }

        if (!(/(^[1-9]\d*$)/.test(page.cardNum))) {
            MsgBox_OK("提示","银行卡号不符合格式","确定",function () {
            });
            return;
        }

        if(page.bank == ""){
            MsgBox_OK("提示","未选择银行","确定",function () {
            });
            return;
        }


        if (!(/(^[\u4E00-\u9FFF]+$)/.test(page.openBank))) {
            MsgBox_OK("提示","开户行不符合格式","确定",function () {
            });
            return;
        }

        if (page.idNum == "" || page.cardNum == "" || page.realName=="" || page.openBank=="" || page.selectImg==null){
            MsgBox_OK("提示","信息填写不全","确定",function () {
            });
            return;
        }
        Loading();
        //us=rnames&uid=a01
        TD_Request('us','rnamesx',{uid:openid},
            function(code,data){
                WebApp.UploadWithSDK(data.uptoken, data.upurl,authManager.selectImg,data.filename.id_f,
                    function(result)
                    {
                        console.log("文件上传成功",result);

                        //文件上传成功
                        TD_Request(
                            'us','rnamefx',
                            {
                                uid:openid,
                                realname:authManager.realName,
                                ccardnum: authManager.cardNum,
                                icardnum: authManager.idNum,
                                bank:authManager.bank,
                                openbank:authManager.openBank,
                            },
                            function (code, data) {
                                if (authManager.fromLuckyDream){
                                    console.log("幸运梦想",authManager.fromLuckyDream);
                                    weui.toast("完成上传");
                                    FinishLoading();
                                    /*wx.navigateBack({
                                        success:function(){
                                            wx.hideLoading()
                                            wx.showToast({
                                                title: '完成上传',
                                                icon: 'success'
                                            })
                                        }
                                    })*/
                                } else {
                                    console.log("普通", authManager.fromLuckyDream);
                                    /*wx.hideLoading()
                                    wx.showToast({
                                        title: '完成上传',
                                        icon: 'success'
                                    })*/
                                    weui.toast("完成上传");
                                    FinishLoading();
                                    authManager.onSubmitRefreash()
                                    //page.onLoad()
                                }
                            },
                            function (code, data) {
                                console.log(data)
                                wx.hideLoading()
                                wx.showToast({
                                    title: '上传失败',
                                    icon: 'none'
                                })
                            }
                        )

                    });
                console.log(data)
                //page.uploadAll(token, filenames, url,timeStamp)
            },
            function(code,data){
                Loading();
                wx.hideLoading()
                weui.toast( data.context);
            }
        )
    },
    submited: function () {
        //console.log("完成上传:", keyList)
        //us = rnamef & uid=a01 & ccardnum=123 & icardnum=456 & signal=saasd
        var page =this
        /*

      idNum: "",
      cardNum: "",
      realName: "",
      openBank: "",

        * */

    }
}

authManager.onLoad();
// WebApp.JSAPI.Init()