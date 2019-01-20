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
var uid = Options.GetUserInfo().openid;

var luckeyManager = {

    /**
     * 页面的初始数据
     */
    data: {
      awards:[]
    },
    luckyInfo:function(res){
		console.log(res);
      /*C.SetPageIntendData("award", this.data.awards[res.currentTarget.id]);
        wx.navigateTo({
          url: '/pages/mx_luckyInfo/mx_luckyInfo',
        })*/
    },
    count :0,
    seek : 0,
    size : 6,
    /**
     * 生命周期函数--监听页面加载
     */
    Init: function () {
      var page = this
	  $('#vlist').html("");
      TD_Request("aw", "cplu",{},
      function(code,data){
        page.count = data.count
        page.loadItem()
        //console.log(data)
      },
        function (code, data) {
          console.log(code)
      })
    },
    loadItem:function(){
	  //console.log('loadItem!!!')
      var page = this
      if (this.seek < this.count){
        TD_Request("aw", "gplu", 
          {
            seek:this.seek,
            count:this.size
          },
          function (code, data) {
            var current = page.data.awards;
            for (var award in data.awards) {
			  var billInfo = BillExchange(data.awards[award].abill);
			  data.awards[award].abillValue = billInfo.value;
			  data.awards[award].abillUnit = billInfo.unit;
              current[data.awards[award].pid] = data.awards[award];
            }
            page.data.awards = current
			onAwardViewBuild(data.awards);
          },
          function (code, data) {
            console.log(data)
          })

        this.seek += this.size;
        if (this.seek >= this.count) {
			console.log('已经全部加载')
        }
      }else{
        console.log('已经全部加载')
      }
    }
}

var onAwardViewBuild = function (awardItem) {
		var snippetID = "lucky_single";
        var awardViewObject = WebApp.View.CreateSingleView(snippetID);

        for(var key in awardItem){
            awardViewObject = WebApp.View.AddViewData(awardViewObject,awardItem[key]);
        }
        WebApp.View.BuildsView([awardViewObject],"http://tinydream.antit.top/TinydreamWeb/view",
            function(result,data){
                var content = $('#vlist').html();
                $('#vlist').html(content + data[snippetID]);
				for(var key in luckeyManager.data.awards){
					$("#pool_"+luckeyManager.data.awards[key].pid).click(OnViewDetials);
				}
            }
        );
}

var OnViewDetials = function(res){
    window.localStorage.setItem('dreamInfo',JSON.stringify(luckeyManager.data.awards[res.currentTarget.attributes[1].nodeValue]));
    window.location.href = 'luckyInfo.html';
}

var OnReachBottom = function () {
    luckeyManager.loadItem();
}

luckeyManager.Init();
// WebApp.JSAPI.Init()

