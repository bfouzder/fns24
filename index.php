<?php
/**
 * RAW PHP SCRIPT
 *
 * 
 * @package		RAWPHPSCRIPT
 * @author		aditya fouzder (bfouzder@yahoo.com)
 * @copyright	Copyright (c) 2019.
 * @since		Version 1.0
 */
define('ENVIRONMENT', 'development');
define('BASEDIR', realpath(dirname(__FILE__)).'/');
if($_SERVER['REQUEST_SCHEME'] =='http' && $_SERVER['HTTP_HOST'] != 'localhost'){ 
//redirect to htaccess
header('Location: https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);exit;	
}
/*
 *---------------------------------------------------------------
 * ERROR REPORTING
 *---------------------------------------------------------------
 *
 * Different environments will require different levels of error reporting.
 * By default development will show errors but testing and live will hide them.
 */
if (defined('ENVIRONMENT'))
{
	switch (ENVIRONMENT)
	{
		case 'development':
			error_reporting(E_ALL ^ E_NOTICE);
			//error_reporting(E_ALL);
		break;
	
		case 'testing':
		case 'production':
			error_reporting(0);
		break;

		default:
			exit('The application environment is not set correctly.');
	}
}


	require('includes/router.php');
	require('includes/config.php');

   //pre($_COOKIE);
    //pre($_SESSION);

   
	$router = make_route();

	if($router['ln']){
		$USER_LANG =  $router['ln'].'/';
		$LANGUAGE = $router['ln'];
		if(!file_exists(DIR_LANGUAGES.$LANGUAGE.'/'.$LANGUAGE.'.php')){
			$USER_LANG =  '';
			$LANGUAGE = 'en';
		}
	}else{
		$USER_LANG =  '';
		$LANGUAGE = 'en';
	}
	
	if(isset($router['ln'])){
		define('CURRENT_LANG',$router['ln']);
	}else{
		define('CURRENT_LANG','en');
	}
	
			
	define('BASE_URL' , SCRIPT_URL.$USER_LANG);
    
	if(file_exists((DIR_LANGUAGES.$LANGUAGE.'/'.$LANGUAGE.'.php'))){   
	   @require_once(DIR_LANGUAGES.$LANGUAGE.'/'.$LANGUAGE.'.php');  
	}
	
	$controller = $router['controller'];
	if(!$controller)$controller = DEFAULT_CONTROLER;
	
	$action = $router['action'];
	if(!$action)$action = DEFAULT_FUNCTION;
	
	
	$params = '';
	$args = $router['args'];
	#pre($router);exit;	
	if($args)
	{
		$params = implode(',' , $args); 
	}
	
    
    if($router['gerbage']['0']){
        if($router['gerbage']['0'] != 'en' && strlen($router['gerbage']['0'])<=2){
    	   redirect('page_404');
    	}
    }

	#require(COMMON_TEMPLATES.'header.php');
	if(!file_exists(CONTROLLER_STORE.$controller.'.php'))
	{
		$action = $controller;
		$controller = DEFAULT_CONTROLER;	
	
		if(file_exists(CONTROLLER_STORE.$controller.'.php'))
		{		
							
			require(CONTROLLER_STORE.$controller.'.php');		
			$instance = new $controller;				
			
			$gerbage1 = $router['gerbage'];
			if($gerbage1)
			{
				$sz_gerbage = count($gerbage1);
				if(strlen($gerbage1[0])==2)$g = 1 ;
				else $g = 0;
					
				for( ; $g<$sz_gerbage ; $g++)$gerbage[] = $gerbage1[$g];				
			}
			
			#pre($gerbage);
			
			if(!method_exists ($instance , $action))				
			{
			
				if($gerbage)
				{
					$params = implode(',' , $gerbage);
					$sz_parms = count($gerbage);
									
					$action = 'index';
					//$action = DEFAULT_FUNCTION;
					$instance->$action($gerbage);
					
				}
							
			}	
			else
			{
				
				$sz_gerbage = count($gerbage);
				
				if($gerbage)
				{									
					//for($g=1 ; $g<$sz_gerbage ; $g++)$gerbage2[] = $gerbage[$g];				
					for($g=0 ; $g<$sz_gerbage ; $g++)$gerbage2[] = $gerbage[$g];				
				}
				#pre($gerbage2);
				$instance->$action($gerbage2);
			}
		}		
		else
		{
			$instance->$action($args);
		}	
	}// eof if controlar not exist
	else
	{
				
		require(CONTROLLER_STORE.$controller.'.php');
		$instance = new $controller;
		if(!method_exists ($instance , $action))
		{
			$action = DEFAULT_FUNCTION;
			$gerbage1 = $router['gerbage'];
			if($gerbage1)
			{
				$sz_gerbage = count($gerbage1);
				if(strlen($gerbage1[0])==2)$g = 2 ;
				else $g = 1;
					
				for( ; $g<$sz_gerbage ; $g++)$gerbage[] = $gerbage1[$g];				
			}
			$instance->$action($gerbage);
		}
		else
			$instance->$action($args);
	}
?>