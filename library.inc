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
			 	<li class="about-tab"><a href="<?php echo $root; ?>#page2" title="About"><div class="about-tab-link">About</div></a></li>
			 	<li class="team-tab"><a href="<?php echo $root; ?>#page3" title="Team"><div class="team-tab-link">Team</div></a></li>
			 	<li class="work-tab"><a href="<?php echo $root; ?>#page4" title="Work"><div class="work-tab-link">Work</div></a></li>
			 	<li class="blog-tab"><a href="<?php echo $root; ?>blog" title="Blog"><div class="blog-tab-link">Blog</div></a></li>
			 	<li class="contact-tab"><a href="<?php echo $root; ?>#page5" title="Contact"><div class="contact-tab-link">Contact</div></a></li>
			</ul>
		</div>
	</div>
	<?php
}