<?php
/*
Plugin Name: DesignWall shortcodes
Plugin URI: http://www.desigwall.com
Description: A simple shortcode generator. Add buttons, columns, tabs, toggles and alerts to your theme.
Version: 1.0.1
Author: Designwall
Author URI: http://www.designwall.com
*/

require_once('dws_grid.php');
require_once('dws_alert.php');
require_once('dws_buttons.php');
require_once('dws_tabs.php');
require_once('dws_collapse.php');
require_once('dws_icons.php');

class DesignwallShortcodes{
	
	function __construct()
	{
		//require_once('shortcodes.php');
		add_action('init',array(&$this, 'init'));
	}
	
	function init(){
		
		if(!is_admin()){
			wp_enqueue_style("dws_bootstrap", plugins_url('assets/css/bootstrap.css', __FILE__ ));
			wp_enqueue_style("dws_shortcodes", plugins_url('assets/css/shortcodes.css', __FILE__ ));
			wp_enqueue_script('dws_bootstrap', plugins_url('assets/js/bootstrap.js', __FILE__ ),array('jquery'));
		}

		if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
	    	return;
		}
	 
		if ( get_user_option('rich_editing') == 'true' ) {
		//	wp_enqueue_style("dws_bootstrap", plugins_url('assets/css/bootstrap.css', __FILE__ ));
			add_filter( 'mce_external_plugins', array(&$this, 'regplugins') );
			add_filter( 'mce_buttons_3', array(&$this, 'regbtns') );
		}
	}

	function regbtns($buttons)
	{
		array_push($buttons, 'dws_grid');
		array_push($buttons, 'dws_alerts');
		array_push($buttons, 'dws_buttons');
		array_push($buttons, 'dws_icons');
		array_push($buttons, 'dws_tabs');
		array_push($buttons, 'dws_collapse');
		return $buttons;
	}

	function regplugins($plgs)
	{
		
		$plgs['dws_grid'] = plugins_url('assets/js/plugins/grid.js', __FILE__ );
		$plgs['dws_alerts'] = plugins_url('assets/js/plugins/alert.js', __FILE__ );
		$plgs['dws_buttons'] = plugins_url('assets/js/plugins/buttons.js', __FILE__ );
		$plgs['dws_tabs'] = plugins_url('assets/js/plugins/tabs.js', __FILE__ );
		$plgs['dws_icons'] = plugins_url('assets/js/plugins/icons.js', __FILE__ );
		$plgs['dws_collapse'] = plugins_url('assets/js/plugins/collapse.js', __FILE__ );
		return $plgs;
	}


}
$dwcodes = new DesignwallShortcodes();