<?php
$ar_meta_title=isset($meta_title)?makeMetaTitle($meta_title):'Daily Inqilab | Online Bangla News | Politics | Sports';
$ar_meta_keywords=isset($meta_keywords)?$meta_keywords:'খেলা, খেলার খবর, ক্রিকেটের খবর, Bangla Sports News, খেলাধুলার সংবাদ, প্রথম আলো, ক্যাচ, ফুটবল, বিশ্বকাপ, ক্রিকেট, টেনিস, শিরোপা, টি-টোয়েন্টি, ক্রীড়া, প্রতিবেদক, বল, মেসি, পেলে, সেমিফাইনাল, অ্যাথলেটিক্স, বোলার, চার-ছক্কা, মুশফিক, অধিনায়ক, পারফরম্যান্স, কোচ, ফেভারিট, মরিনহো, খেলার খবর, পত্রিকা , বাংলাদেশ';
$ar_meta_description=isset($meta_description)?$meta_description:'FNS24.com The Most Popular Bangla Mofossol and District wise local Newspaper, Brings You Latest Bangla News Online. Get Breaking News From The Most Reliable Bangladesh Newspaper. It covers Just Now News, Politics, Economies, National, International, Entertainment, & More';
$ar_fb_meta_description='Daily Inqilab The Most Popular Bangla Newspaper, Brings You Latest Bangla News Online. Get Breaking News From The Most Reliable Bangladesh Newspaper. It covers Just Now News, Politics, Economies, National, International, Entertainment, & More';
$meta_url=isset($meta_url)?$meta_url:CURRENT_URL;
if($_SERVER['REQUEST_SCHEME']=='http'){
    $rd=str_replace('http','https',CURRENT_URL);
    urlredirect($rd);exit;
}
?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="keywords" content="<?=$ar_meta_keywords?>"/>
	<meta name="description" content="<?=$ar_meta_description?>"/>
    <meta name="author" content="FNS24"/>
    <title><?=isset($meta_title)?makeMetaTitle($meta_title):SITE_TITLE?></title>
	<link rel="icon" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/images/favicon.ico" type="image/x-icon" />
	<!--canonical link-->
	<link rel="canonical" href="<?=$meta_url?>">
	<meta name="googlebot" content="all"/>
	<meta name="googlebot-news" content="all"/>
	<meta name="robots" content="index, follow" />
	<?php 
	$fb_image=($fb_image)?$fb_image:SCRIPT_URL.'images/fns_share_logo.jpg'; 
	if($params[0] == 'article') {
		  if($fb_image){ 
			$img_sizess=getimagesize(str_replace(SCRIPT_URL, BASE_DIR, $fb_image));
			list($og_image_width, $og_image_height, $og_image_types, $og_image_attr) = $img_sizess;
			$og_image_type= $img_sizess['mime'];
			// pre($img_sizess);		
		   }else{
			 $og_image_width=300;
			 $og_image_height=200;
			 $og_image_type='image/jpeg';
			 $fb_image=SCRIPT_URL.'images/fns_share_logo.jpg';  
		   }
	 ?>	
	<!--bof AddThis--> 
	<link rel="image_src" href="<?=$fb_image?>"/>	
	<meta property="og:site_name" content="Fns24.com"/>  
	<meta property="og:type" content="article" /> 	    
	<meta property="og:title" content="<?=$news_article_title?>"/>
	<meta property="og:description" content="<?=$meta_description?>"/>
	<meta property="og:url" content="<?=$meta_url?>"/>
	<meta property="og:image" content="<?=$fb_image?>"/>
	<?php /*?><meta property="og:image:secure_url" content="<?=$fb_image?>" /><?php */?>
	<meta property="og:image:type" content="<?=$og_image_type?>" />
	<meta property="og:image:width" content="<?=$og_image_width?>" />
	<meta property="og:image:height" content="<?=$og_image_height?>" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:url" content="<?=$meta_url?>" />
	<meta name="twitter:title" content="<?=$news_article_title?>" />
	<meta name="twitter:description" content="<?=$meta_description?>" />
	<meta name="twitter:image" content="<?=$fb_image?>">
	<?php }else{ ?>
	<link rel="image_src" href="<?=$fb_image?>"/>
	<meta property="og:title" content="<?=$news_article_title?>"/>
	<meta property="og:description" content="<?=$meta_description?>"/>
	<meta property="og:url" content="<?=$meta_url?>"/>
	<meta property="og:image" content="<?=$fb_image?>"/>
	<meta property="og:image:secure_url" content="<?=$fb_image?>" />
	<?php } ?>
    <link rel="stylesheet" type="text/css" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/css/li-scroller.css">
    <link rel="stylesheet" type="text/css" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/css/jssort.css">
    <link rel="stylesheet" type="text/css" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="<?php echo GET_TEMPLATE_DIRECTORY_URI; ?>/css/style.css">

	<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#property=5cb8be2efbb7e30012286c5d&product=social-ab' async='async'></script>
	
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	 <![endif]-->
<?php /*?>
 <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-155225535-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-155225535-1');
</script>
<?php */?>
<!--bof Head code-->
<?=getSettings('AR_HEAD_CODE');?>
<!--eof Head code-->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8387043037089196"
     crossorigin="anonymous"></script>
<script data-ad-client="ca-pub-8387043037089196" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>     
</head>
<body>
<!--bof After BodyTag code-->
<?=getSettings('AR_AFTER_BODY_CODE');?>
<!--eof After BodyTag code-->