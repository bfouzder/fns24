<?php

include_once('dbconnection.php');



$ser=trim($_POST['ser']);




/*

$wrong=trim($_POST['wrong']);
$right=trim($_POST['right']);
$button=trim($_POST['button']);
*/



$s=trim($_POST['s']);




if($ser==100)
{



$banner= $_FILES['banner']['name'];

$bannert= time().$banner['name'];

$fnn = $_FILES['banner']['type'];



$upload_dir="up";



if($banner!="")
{

copy($_FILES['banner']['tmp_name'], "$upload_dir/$banner") or die("Couldn't copy");







$file = fopen("up/$banner", "r") or exit("Unable to open file!");

while(!feof($file))
  {
  //echo fgets($file). "<br>";
  
  
  $f=fgets($file);
  
  
  //print"$f <br>";
  
  $key = explode("&", $f);

  $key[0]=trim($key[0]);
  $key[1]=trim($key[1]);
  $key[2]=trim($key[2]);
  
  $wrong=$key[0];
  $right=$key[1];
  $button=$key[2];
  
  
  
$sql="SELECT * FROM `right_word` WHERE wrong='$wrong' ";
$result=mysqli_query($con_db,$sql);
$arrf=mysqli_fetch_array($result);
$category_name=$arrf[1];

 if($category_name=="")
 {
  
 if($wrong!="" && $right!="" && $button!="")
 {
$sql = "INSERT INTO `right_word` (`user_id`, `wrong`, `right_w`, `button`) VALUES ('','$wrong','$right','$button')";
mysqli_query($con_db,$sql);
  }
  
 }
  
  
  }
  
  
fclose($file);




include_once('s.php');


}






}









print"

<html>

<head>
<title> Upload File </title>
";


include_once('style_new.php');


print"
</head>


<body>
";


print"
<table align='center' width='100%' cellpadding='10' cellspacing='0' height='50' bgcolor='#9260F6'>
<tr> 
<td align='left'> <a href='index5.php'> <font color='white'> Home  </font></a> </td>
<td align='right'>  <font color='white'> Hi  $go_new    &nbsp; | &nbsp; </font> <a href='index.php'> <font color='white'> Logout </font> </a>  &nbsp;&nbsp; </td>

</tr>
</table>




<table align='center' width='100%' cellpadding='4' cellspacing='0' height='50' bgcolor='gray'>
<tr> 
<td align='center' width='10%' height='800' bgcolor='#38363C' valign='top'>

<table align='center' width='100%' cellpadding='0' cellspacing='0' height='50' bgcolor=''>



<tr>
<td height='30'></td>
</tr>



<tr>
<td height='15'></td>
</tr>



<tr>
<td><a href='upload.php'> <font color='white' size='2' face='arial'>   Upload  </font></a> 
</td>
</tr>


<tr>
<td height='15'></td>
</tr>



<tr>
<td><a href='index5.php'> <font color='white' size='2' face='arial'> Ad Word  </font></a> 
</td>
</tr>


<tr>
<td height='15'></td>
</tr>



<tr>
<td><a href='index6.php'> <font color='white' size='2' face='arial'> Edit Word  </font></a> 
</td>
</tr>


<tr>
<td height='15'></td>
</tr>



<tr>
<td><a href='backup.php'> <font color='white' size='2' face='arial'>   Backup  </font></a> 
</td>
</tr>





</table>

</td>





<td align='center' width='90%' bgcolor='#F2F2F2' valign='top'> 




<form enctype='multipart/form-data' action='upload.php' method='POST'>


<table align='center' width='400' cellpadding='0' cellspacing='0'>
<tr> <td height='100'>  </td> </tr>
</table>






<table align='center' width='600' cellpadding='0' cellspacing='0' bgcolor='EFEBEB' border='0'>




<tr> <td height='10'> </td> </tr>



<tr> 
     <td height='20' bgcolor='' align='right' valign='top'>   </td>
     <td align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
     
    <input type='file' name='banner'> 

<input type='hidden'  name='ser' value='100'>

<input type='hidden'  name='pas' value='$pas'>

 <input type='Submit' id='qq' value='Upload Now'>  

</td> 
<td> </td>
</tr>

</tr>
<tr> <td align='center' height='30' bgcolor=''>   </td> <td> </td> </tr>
</table>
</form>





</td>

</tr>
</table>






</body>

</html>


";


?>