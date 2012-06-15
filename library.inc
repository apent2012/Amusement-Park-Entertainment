<?php 

if (!defined('ENVIRONMENT')) {
    if ($_SERVER['HTTP_HOST'] == 'localhost') {
        define('ENVIRONMENT', 'DEVELOPMENT');
    }
    else {
        define('ENVIRONMENT', 'PRODUCTION');
    }
}


function echo_apent_header($root = '') {
	?>
	<div class="header">
		<div class="header-content">
	        <a href="<?php echo $root; ?>#page1" title="Home" id="logo-tab" class="home-tab-link">
		        <div class="logo"></div>
		        <div class="ape-name"></div>
		    </a>
			
			<ul id="jquerynav" class="navigation nav">
			 	<li><a href="<?php echo $root; ?>#page2" title="About" class="about-tab-link">About</a></li>
			 	<li><a href="<?php echo $root; ?>#page3" title="Team" class="team-tab-link">Team</a></li>
			 	<li><a href="<?php echo $root; ?>#page4" title="Work" class="work-tab-link">Work</a></li>
			 	<li><a href="<?php echo $root; ?>blog" title="Blog" class="blog-tab-link">Blog</a></li>
			 	<li><a href="<?php echo $root; ?>#page5" title="Contact" class="contact-tab-link">Contact</a></li>
			</ul>
		</div>
	</div>
	<?php /*
	    <div class="header">
	        <div class="header-content">
	                <a href="<?php echo $root; ?>#page1" title="Home" id="logo-tab" class="home-tab-link">
	                <div class="logo"></div>
	                <div class="ape-name"></div>
	            </a>
	            <div class="nav">
	                <a href="<?php echo $root; ?>#page2" title="About" class="about-tab-link">
	                  <div class="about-tab nav-tab"></div></a>
	                <a href="<?php echo $root; ?>#page3" title="Team" class="team-tab-link">
	                  <div class="team-tab nav-tab"></div></a>
	                <a href="<?php echo $root; ?>#page4" title="Work" class="work-tab-link">
	                  <div class="work-tab nav-tab"></div></a>
	                <a href="<?php echo $root; ?>blog" title="Blog" class="blog-tab-link">
	                  <div class="blog-tab nav-tab"></div></a>
	                <a href="<?php echo $root; ?>#page5" title="Contact" class="contact-tab-link">
	                  <div class="contact-tab nav-tab"></div></a>
	            </div>
	        </div>
	    </div>
	 */ ?>
	<?php
}