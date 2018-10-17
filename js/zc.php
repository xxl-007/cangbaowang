<?php
header("Content-type:text/html; charset=UTF-8");
$username=$_GET["username"];
$password=$_GET["password"];
$coon=new mysqli("localhost","root","","dengluzhuce","3306");
$coon->query("set names 'utf8'");
$coon->query("set charactor set 'utf8'");
$sql1="SELECT password from zhucebiao where username='$username'";
$sql2="INSERT INTO zhucebiao (username,password) values('$username','$password')";
$result=$coon->query($sql1);
$rows=$result->fetch_assoc();
if($rows){
//用户存在
        echo "<script>
                alert('用户已存在，请重新注册用户名');
                location.href='regester';
            </script>";
    }else{
// 用户不存在
$result=$coon->query($sql2);
echo "<script>
        alert('用户注册成功,请登录');
        location.href='login';
    </script>";
}  

?>