<?php
include_once('dbconnection.php');




$ser=trim($_POST['ser']);

$s=trim($_POST['s']);


$dat1=trim($_POST['dat1']);
$mon1=trim($_POST['mon1']);
$yer1=trim($_POST['yer1']);

$product_id_new=trim($_POST['product_id_new']);



$dat2=trim($_POST['dat2']);
$mon2=trim($_POST['mon2']);
$yer2=trim($_POST['yer2']);









$mdate="$yer1$mon1$dat1";

$ndate="$yer2$mon2$dat2";






if($ser=="")
{


$bbb=time(); 

$d=date("m/d/y",$bbb); 

$mon="$d[0]$d[1]";
$dat="$d[3]$d[4]";
$yer="20$d[6]$d[7]";

$dat1=$dat;
$mon1=$mon;
$yer1=$yer;


$dat2=$dat;
$mon2=$mon;
$yer2=$yer;


$mdate="$yer1$mon1$dat1";

$ndate="$yer2$mon2$dat2";




}














print"

<html>

<head>
<title> Daily product sale </title>
";


include_once('style.php');


print"
</head>


<body>
";


//include_once('header.php');


print"
<table align='center' width='1200' cellpadding='0' cellspacing='0' height='800' bgcolor=''>
<tr bgcolor='white'> 
";

//include_once('report_left.php');












print"
<td align='center' valign='top' width='980'> 
";


include_once('address.php');



print"
<br>

<table align='center' width='1000' cellpadding='0' cellspacing='0' bgcolor='F7D3F2'>
<tr> <td align='center' height='40'> <font face='arial' size='3'> Product Sales View  </font> </td> </tr>
<tr> <td align='center' height='1' bgcolor='F9F4D8'> </td> </tr>
</table>














<table align='center' width='1000' cellpadding='0' cellspacing='0' bgcolor='F3F3F3'>



<tr> 

<form action='saleview.php' method='POST'>

<td align='center' height='40'> 


<select name='dat1'>

<option>$dat1</option>
<option>01</option>
<option>01</option>
<option>02</option>
<option>03</option>
<option>04</option>
<option>05</option>
<option>06</option>
<option>07</option>
<option>08</option>
<option>09</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
</select>


<select name='mon1'>
<option>$mon1</option>
<option>01</option>
<option>01</option>
<option>02</option>
<option>03</option>
<option>04</option>
<option>05</option>
<option>06</option>
<option>07</option>
<option>08</option>
<option>09</option>
<option>10</option>
<option>11</option>
<option>12</option>

</select>



<select name='yer1'>
<option>$yer1</option>
<option>2014</option>
<option>2015</option>
<option>2016</option>
<option>2017</option>
<option>2018</option>
<option>2019</option>
<option>2020</option>
</select>

&nbsp;&nbsp;&nbsp; <font face='arial' size='3'>To </font>&nbsp;&nbsp;&nbsp;


<select name='dat2'>
<option>$dat2</option>
<option>01</option>
<option>01</option>
<option>02</option>
<option>03</option>
<option>04</option>
<option>05</option>
<option>06</option>
<option>07</option>
<option>08</option>
<option>09</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
</select>


<select name='mon2'>
<option>$mon2</option>
<option>01</option>
<option>01</option>
<option>02</option>
<option>03</option>
<option>04</option>
<option>05</option>
<option>06</option>
<option>07</option>
<option>08</option>
<option>09</option>
<option>10</option>
<option>11</option>
<option>12</option>

</select>



<select name='yer2'>
<option>$yer2</option>
<option>2014</option>
<option>2015</option>
<option>2016</option>
<option>2017</option>
<option>2018</option>
<option>2019</option>
<option>2020</option>
</select>


<input type='hidden' name='ser' value='7'>



</td> 


</form>

</tr>


<tr> <td align='center' height='1' bgcolor='F9F4D8'> </td> </tr>
</table>












<table align='center' width='1000' cellpadding='0' cellspacing='1' bgcolor='black'>

<tr bgcolor='F677F2'>


 
<td align='left' height='30' width='200'>  <font face='arial' size='3' color=''> &nbsp; Product Name </font> </td> 


<td align='left' height='30' width='180'>  <font face='arial' size='3' color=''> &nbsp; Quantity    </font> </td> 









</tr>
";













//$result = mysql_query("SELECT * FROM buymemo");




if($product_id_new=="")
{
$result = mysql_query("SELECT * FROM product_name");
}
else
{
$result = mysql_query("SELECT * FROM `product_name` where user_id='$product_id_new' ");	
}


while ($a_row = mysql_fetch_row($result)) {

	foreach ($a_row as $field) {
		
	}

$w++;
$p_id[$w]=$a_row[0];
$p_n[$w]=$a_row[2];
$p[$w]=$a_row[5];
}


$q=0;


for($i=1;$i<=$w;$i++)

{

$result = mysql_query("SELECT * FROM `saleproduct` where adat>='$mdate' && adat<='$ndate' && product_id='$p_id[$i]' ");


while ($a_row = mysql_fetch_row($result)) {

	foreach ($a_row as $field) {
		
	}


$q=$q+$a_row[6];


$tax=$tax+$a_row[15];

$profit=$profit+$a_row[16];

$ppp=$a_row[7];

$mtt=$a_row[17];
$ptt=$a_row[19];

}


if($q!=0)
{

$t=$ppp*$q;

print"
<tr bgcolor='white'> 
<td align='left' height='30' width='100'>  <font face='arial' size='3' color=''> &nbsp;  $p_n[$i]   $ptt_old </font> </td> 

<td align='left' height='30' width='180'>  <font face='arial' size='3' color=''> &nbsp;  $q  </font> </td> 


</tr>

";


$tax1=$tax1+$tax;
$t1=$t1+$t;
$profit1=$profit1+$profit;
$q1=$q1+$q;


$q=0;
$t=0;

$tax=0;
$profit=0;

}


}


/*
print"
<tr bgcolor='white'> 
<td align='center' height='30' width='100'>  <font face='arial' size='3' color=''> $a_row[5] </font> </td> 
<td align='center' height='30' width='180'>  <font face='arial' size='3' color=''> $a_row[7]  </font> </td> 
<td align='center' height='30' width='180'>  <font face='arial' size='3' color=''> $a_row[6]  </font> </td> 
<td align='center' height='30' width='180'>  <font face='arial' size='3' color=''> $a_row[8]  </font> </td> 
</tr>

";

*/



print"
<tr bgcolor='F2F2F2'> 
<td align='left' height='30' width='100'>  <font face='arial' size='3' color=''> &nbsp; Total   </font> </td> 

<td align='left' height='30' width='180'>  <font face='arial' size='3' color=''> &nbsp; $q1  </font> </td> 






</tr>

";




$ttt=$t1+$tax1;


print"

</table>

<br>


















 </td>


</tr>
</table>




</body>

</html>


";


?>