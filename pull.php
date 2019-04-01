<?php 
echo "run shell...</br>";

exec('update.sh',$returnCode,$returnVar);
echo "pull 完成</br>";
?>