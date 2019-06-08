<?php 
    $filename = __DIR__.'/cache/page.php';
    $page = $_REQUEST['page'];
    $file = file_put_contents($filename,'<?php echo "'.$page.'"?>');
    if($file){
        echo '1';
    }else{
        echo '0';
    } 
?>
