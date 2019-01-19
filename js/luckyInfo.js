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
WebApp.JSAPI.Init()
var uid = Options.GetUserInfo().openid;

var luckyInfoManager = {
    dreamInfo : null,
    Init:function(){
        //console.log("Init Lucky");
        $('#luckyInfo').html('');
        this.dreamInfo = window.localStorage.getItem('dreamInfo');
        if(this.dreamInfo == null){
            return;
        }else{
            this.dreamInfo = JSON.parse(this.dreamInfo);
            window.localStorage.removeItem('dreamInfo');
            console.log(this.dreamInfo);
            onLuckyInfoViewBuild(this.dreamInfo);
        }
    }
}

var onLuckyInfoViewBuild = function (dreamInfo) {
    var snippetID = "lucky_Info";
    var luckyInfoViewObject = WebApp.View.CreateSingleView(snippetID);

    luckyInfoViewObject = WebApp.View.AddViewData(luckyInfoViewObject,dreamInfo);
    //for(var key in dreamInfo){
    //}
    console.log("luckyInfoViewObject",luckyInfoViewObject);
    WebApp.View.BuildsView([luckyInfoViewObject],"http://tinydream.antit.top/TinydreamWeb/view",
        function(result,data){
            $('#luckyInfo').html(data[snippetID]);
        }
    );
}

luckyInfoManager.Init();