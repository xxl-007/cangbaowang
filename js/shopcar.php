<?php
header("Content-type:text/html; charset=UTF-8");
$id=json_decode($_GET['id']);
$coon=new mysqli("localhost","root","","cangbaoshop","3306");
$coon->query("set names 'utf8'");
$coon->query("set charactor set 'utf8'");
$id = join(" or id=",$id);
$sql="SELECT id,name,price,adress FROM cbshop where id=$id";
$result=$coon->query($sql);
$rows=$result->fetch_all();
echo json_encode($rows);
// if($rows){
//     // 数据库存在该商品
//     if($rows["id"]==$id){
//         //匹配到了传进来的id和数据库id；此时需要把数据库数据渲染到页面
        
//     }

// }
// else{
//     //数据库没有该商品
// }


?>