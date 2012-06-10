<?php
/**
 * Twenty Eleven functions and definitions
 *
 * Sets up the theme and provides some helper functions. Some helper functions
 * are used in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * The first function, twentyeleven_setup(), sets up the theme by registering support
 * for various features in WordPress, such as post thumbnails, navigation menus, and the like.
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook. The hook can be removed by using remove_action() or
 * remove_filter() and you can attach your own function to the hook.
 *
 * We can remove the parent theme's hook only after it is attached, which means we need to
 * wait until setting up the child theme:
 *
 * <code>
 * add_action( 'after_setup_theme', 'my_child_theme_setup' );
 * function my_child_theme_setup() {
 *     // We are providing our own filter for excerpt_length (or using the unfiltered value)
 *     remove_filter( 'excerpt_length', 'twentyeleven_excerpt_length' );
 *     ...
 * }
 * </code>
 *
 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */

function exclude_category($query) {
	if ( $query->is_home() ) {
		// > BuildDiff
		$query->set('cat', '-3');
		//$query->set('cat', '-4');
	}
	return $query;
}

add_filter('pre_get_posts', 'exclude_category');


function echo_first_image ($postID)
{
	$args = array(
	'numberposts' => 1,
	'order'=> 'ASC',
	'post_mime_type' => 'image',
	'post_parent' => $postID,
	'post_status' => null,
	'post_type' => 'attachment'
	);
	
	$attachments = get_children( $args );
	
//	error_log(print_r($attachments, 1));
	
	if ($attachments) {
		foreach($attachments as $attachment) {
			$image_attributes = wp_get_attachment_image_src( $attachment->ID, 'thumbnail' ) 
				? wp_get_attachment_image_src( $attachment->ID, 'thumbnail' ) 
				: wp_get_attachment_image_src( $attachment->ID, 'full' );
				
		//	echo '<img src="'..'" class="current">';
			echo wp_get_attachment_image( $attachment->ID, 'full' );			
		}
	}
}

/*
add_filter('comment_form_defaults', 'apent_message_before');
function apent_message_before($defaults) {
	error_log(print_r($defaults, 1));
	$defaults['comment_notes_before'] = '<p class="comment-notes">foo</p>';
	return $defaults;
}
*/


class ApentCommentForm {

  public $test;

  public function __construct(){
    $this->test = function($a) {
      print "$a\n";
    };
  }

  public function __call($method, $args){
    if ( $this->{$method} instanceof Closure ) {
      return call_user_func_array($this->{$method},$args);
    } else {
      return parent::__call($method, $args);
    }
  }
}



// Builds a function chain that can build custom markup.
// [1] > [2,3,4] > [5,6]

function apent_comment_form() {

	$titleText = 'foo';

	$title = function() use ($titleText) {
?>
<span class="apent-comment-form-title">
	<?php echo $titleText; ?>
</span>
<?php
	};

	$bodyContent = function() {
?>
Content goes here.
<?php		
	};

	$body = function() use ($bodyContent) {
?>
<div class="apent-comment-form-body-content">
	<?php $bodyContent() ?>
</div>
<?php
	};

	$footerContent = function() {
?>
Footer content goes here.
<?php		
	};

	$footer = function() use ($footerContent) {
?>
<div class="apent-comment-form-body">
	<?php $footerContent() ?>
</div>
<?php		
	};

	$form = function() use ($title, $body, $footer) {
	?>
<div class="apent-comment-form">
	<?php $title(); ?>
	<?php $body(); ?>
	<?php $footer(); ?>
</div>
	<?php
	};


	$form();
}


/*
function custom_comment_form() {

	// A function chain is a series of anonymous functions.

	$_ptr = 0;

	$_next = function() use ($funcChain, $_ptr) {

	};

	$funcChain = array(
	function() use ($_next) {
	?>
<div class="apent-comment-form">
	<?php $_next(); ?>
</div>
	<?php
	},
	function() {
?>
foo
<?php
	});
}
*/

class FunctionChain {

  public $test;
  private $_ptr = 0;

  public function __construct($chain) {
    $this->test = function($a) {
      print "$a\n";
    };
  }

  public function __call($method, $args){
    if ( $this->{$method} instanceof Closure ) {
      return call_user_func_array($this->{$method},$args);
    } else {
      return parent::__call($method, $args);
    }
  }
}











