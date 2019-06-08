<?php 
    $filename = __DIR__.'/cache/page.php';
    $page = $_REQUEST['page'];
    $arr = array('page'=>$page);
    $file = file_get_contents($filename,'<?php return '.var_export($arr,true).' ?>');
    if($file){
        echo '1';
    }else{
        echo '0';
    } 
?>