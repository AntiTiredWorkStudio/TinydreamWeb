<?php  
    $header = array(   
        'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:45.0) Gecko/20100101 Firefox/45.0',    
        'Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',    
        'Accept-Encoding: gzip, deflate',);
    //获取微信用户的个人信息中的微信头像 $userinfo['headimgurl']
    $url=$_POST['headimgurl'];
    
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_ENCODING, 'gzip');
    curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
   
    $datas = curl_exec($curl);
    $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    //把URL格式的图片转成base64_encode格式的！
    if ($code == 200) {    
        $imgBase64Code = "data:image/jpeg;base64," . base64_encode($datas);
        echo $imgBase64Code;
    }
?>