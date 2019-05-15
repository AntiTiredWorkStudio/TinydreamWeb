<?php
    $url = 'http://api.map.baidu.com/place/v2/search?query='.$_POST['bank'].'&tag=银行&region='.$_POST['city'].'&output=json&ak=DsNmmkALQ10aGFN7bXslHocBVfSzETnX';
    function curl($url){
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
        curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);
        $res = '';
        if(curl_exec($ch)){
            $res = curl_multi_getcontent($ch);
        }
        curl_close($ch);
        return $res;
    }
    var_dump(curl($url));