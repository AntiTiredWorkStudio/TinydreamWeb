<?php
    class Wx{
        // 获取token
        protected $appid = '4kStlByZUGK5n0stStN9FgFE';
        protected $secret = 'rHAUnCKqxlFac68NSnTDAHWotGZ0a2ZT';

        public function getAccessToken(){
            $filename = 'token_'.md5($this->appid.$this->secret);
            $dirname = __DIR__.'/cache/'.$filename.'.php';
            if(is_file($dirname) && filemtime($dirname) + 2592000 > time()){
                $res = include $dirname;
                // 定义需要返回的内容
                $data = $res["access_token"];
            }else{
                $url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='.$this->appid.'&client_secret='.$this->secret;
                // 调用 curl 方法完成请求
                $res = $this->curl($url);
                $res = json_decode($res,true);
                // 将内容写入文件中
                file_put_contents($dirname,'<?php return '.var_export($res,true).'; ?>');
                $data = $res['access_token'];
            }
            return $data;
        }
        // 获取身份证信息
        public function ID(){
            $url = 'https://aip.baidubce.com/rest/2.0/ocr/v1/idcard?access_token='.$this->getAccessToken();
            $img = $_POST['img'];
            $img = base64_encode($img['path']);
            $bodys = array('image'=>$img,'id_card_side'=>'front');
            $data = $this->curl($url,$bodys);
            return $data;
        }
        // 定义curl方法
        public function curl($url,$data=[]){
            $ch = curl_init();
            curl_setopt($ch,CURLOPT_URL,$url);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
            curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
            curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);
            if(!empty($data)){
                // 设置请求超时时间
                curl_setopt($ch,CURLOPT_TIMEOUT,30);
                // 设置开启 post
                curl_setopt($ch,CURLOPT_POST,1);
                // 传递 post 数据
                curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
            }
            $res = '';
            if(curl_exec($ch)){
                $res = curl_multi_getcontent($ch);
            }
            curl_close($ch);
            return $res;
        }
    }
    $obj = new Wx();
    $res = $obj->ID();
    echo $res;
?>