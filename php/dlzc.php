<?php
header("Content-type:text/html; charset=UTF-8");
$username=$_GET["username"];
$password=$_GET["password"];
$coon=new mysqli("localhost","root","","dengluzhuce","3306");
$coon->query("set names 'utf8'");
$coon->query("set charactor set 'utf8'");
$sql1="SELECT password from zhucebiao where username='$username'";
$sql2="INSERT INTO zhucebiao (username,password) values('xiaohua','huahua')";
$result=$coon->query($sql1);
$rows=$result->fetch_assoc();
if($rows){
//用户存在
    if($rows["password"]==$password){
        // 密码输入正确
        echo "<script>
                location.href='ziyemian.html?username=$username';
            </script>";
    }else{
        echo "<script>
                    alert('密码错误');
                    location.href='login';
            </script>";
    }
}else{
// 用户不存在
    echo "<script>
            alert('用户不存在，请注册');
            location.href='regester';
        </script>";
}

?>