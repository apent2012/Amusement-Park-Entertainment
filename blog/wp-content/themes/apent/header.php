<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */

    require("../library.inc");


?><!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyeleven' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" href="../fonts/futurastd.css" type="text/css" media="screen"/>
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	wp_enqueue_script("jquery");
	wp_enqueue_script("bgpos", '/../libs/nav-rollovers/jquery.bgpos.js',
		array('jquery'));
	wp_enqueue_script("jquery-easing", '/../libs/easing/jquery.easing.1.3.js',
		array('jquery'));
	wp_enqueue_script("nav-rollovers", '/../libs/nav-rollovers/nav-rollovers.js',
		array('jquery', 'bgpos', 'jquery-easing'));

	/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	wp_head();
?>
<style type="text/css">
h1 {
	font-size:42px;
	color:black;
	1opacity: 0.7;
	1-moz-opacity: 0.7;
	1filter:alpha(opacity=70);
	margin-bottom:12px;
	text-transform:uppercase;
	1margin-top:40px;
}

.banner {
	width:100%;
	height:202px;
	background-color:#e51c20;
}

.banner-logo {
	background: url(images/emaillogo.png) 0 0 no-repeat;
	width:178px;
	height:138px;
	display:inline-block;
	margin-top:35px;
}

.email-body {
	min-height:270px;
	font-size:14px;
	color:#474542;
}

.header {
	position:relative;
	left:0;
}

.header-content {
	left:0;
	display:inline-block;
}

.footer {
	z-index:0; 
	bottom:0; 
	height:212px;
	position:relative;
}

.footer-content {
	left:0;
	display:inline-block;
}

.down-arrow {
	background:url(images/circledown.png) 0 0 no-repeat;
	width:50px;
	height:48px;
	display:inline-block;
	margin-top:21px;
}

</style>
</head>

<body <?php body_class(); ?>>
<?php echo_apent_header('../'); ?>
<div id="page" class="hfeed">
	<header id="branding" role="banner">
		<div class="header-title">
			<hgroup>
				<h1 id="site-title"><span><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></span></h1>
				<h2 id="site-description"><?php bloginfo( 'description' ); ?></h2>
			</hgroup>

			<?php
				// Check to see if the header image has been removed
				$header_image = get_header_image();
				if ( ! empty( $header_image ) ) :
			?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<?php
					// The header image
					// Check if this is a post or page, if it has a thumbnail, and if it's a big one
					if ( is_singular() &&
							has_post_thumbnail( $post->ID ) &&
							( /* $src, $width, $height */ $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), array( HEADER_IMAGE_WIDTH, HEADER_IMAGE_WIDTH ) ) ) &&
							$image[1] >= HEADER_IMAGE_WIDTH ) :
						// Houston, we have a new header image!
						echo get_the_post_thumbnail( $post->ID, 'post-thumbnail' );
					else : ?>
					<img src="<?php header_image(); ?>" width="<?php echo HEADER_IMAGE_WIDTH; ?>" height="<?php echo HEADER_IMAGE_HEIGHT; ?>" alt="" />
				<?php endif; // end check for featured image or standard header ?>
			</a>
			<?php endif; // end check for removed header image ?>

			<?php
				// Has the text been hidden?
				if ( 'blank' == get_header_textcolor() ) :
			?>
				<div class="only-search<?php if ( ! empty( $header_image ) ) : ?> with-image<?php endif; ?>">
				<?php get_search_form(); ?>
				</div>
			<?php
				else :
			?>
				<?php get_search_form(); ?>
			<?php endif; ?>
		</div>
			<nav id="access" role="navigation">
				<h3 class="assistive-text"><?php _e( 'Main menu', 'twentyeleven' ); ?></h3>
				<?php /*  Allow screen readers / text browsers to skip the navigation menu and get right to the good stuff. */ ?>
				<div class="skip-link"><a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to primary content', 'twentyeleven' ); ?>"><?php _e( 'Skip to primary content', 'twentyeleven' ); ?></a></div>
				<div class="skip-link"><a class="assistive-text" href="#secondary" title="<?php esc_attr_e( 'Skip to secondary content', 'twentyeleven' ); ?>"><?php _e( 'Skip to secondary content', 'twentyeleven' ); ?></a></div>
				<?php /* Our navigation menu.  If one isn't filled out, wp_nav_menu falls back to wp_page_menu. The menu assiged to the primary position is the one used. If none is assigned, the menu with the lowest ID is used. */ ?>
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
			</nav><!-- #access -->
			<div class="tag-nav-menu-container">
				<div class="tag-nav-menu">
					<div class="tag-nav-menu-title"><?php _e( 'Tags', 'twentyeleven' ); ?></div>
					<div class="tag-nav-menu-links">
			<?php 	
				$defaults = array(
					'smallest' => 8, 'largest' => 22, 'unit' => 'pt', 'number' => 45,
					'format' => 'flat', 'orderby' => 'name', 'order' => 'ASC',
					'exclude' => '', 'include' => ''
				);

				$tags = get_tags( array_merge($defaults, array('orderby' => 'count', 'order' => 'DESC')) ); // Always query top tags 

				$tagLinks = array();
				foreach ($tags as $tag) {
					if (ENVIRONMENT == 'DEVELOPMENT') {
						$tagLink = '<a href="/ape/dev/blog/?tag='.$tag->slug.'">'.$tag->name.'</a>';
					}
					else {
						$tagLink = '<a href="/blog/?tag='.$tag->slug.'">'.$tag->name.'</a>';
					}

					array_push($tagLinks, $tagLink);
				}

				echo implode(', ', $tagLinks);
			?>
					</div>
				</div>
			</div>
	</header><!-- #branding -->


	<div id="main">