function onBridgeReady(){
    WeixinJSBridge.call('hideToolbar');
 }
 
 if (typeof WeixinJSBridge == "undefined"){
     if( document.addEventListener ){
         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
     }else if (document.attachEvent){
         document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
     }
 }else{
     onBridgeReady();
 }