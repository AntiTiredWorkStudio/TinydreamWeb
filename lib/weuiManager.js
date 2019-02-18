/*需引入weui.js 和 weui.css*/
var MsgBox_OK = function (titleContext,content,OKLabel,OnOK) {
    weui.alert(content, OnOK, {title: titleContext,button:[
            {
                label:OKLabel,
                type:'primary',
                onClick:OnOK
            }]});
}

var MsgBox_YESNO = function (titleContext,content,YesLabel,NoLabel,OnYes,OnNo) {
    weui.confirm(content,
        {title: titleContext,
            button:[
                {
                    label:YesLabel,
                    type:'default',
                    onClick:OnYes
                },
                {
                    label:NoLabel,
                    type:'primary',
                    onClick:OnNo
                }
            ]
        }
    );
}
var loadingObject;
var Loading = function () {
    if(loadingObject!=null){
        FinishLoading();
    }
    loadingObject = weui.loading('loading', {
        className: 'custom-classname'
    });
}


var FinishLoading = function () {
    if(loadingObject == null){
        return;
    }
    loadingObject.hide(function () {

    });
}
