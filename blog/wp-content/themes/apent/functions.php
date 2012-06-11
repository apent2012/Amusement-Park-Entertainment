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

/*
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
 */


add_filter('comment_form_defaults', 'apent_title_reply');

function apent_title_reply($arg) {
    $arg['title_reply'] = __( 'Add New Comment' );
    return $arg;
}


function apent_comment_form( $args = array(), $post_id = null ) {
	global $id;

	if ( null === $post_id )
		$post_id = $id;
	else
		$id = $post_id;

	$commenter = wp_get_current_commenter();
	$user = wp_get_current_user();
	$user_identity = ! empty( $user->ID ) ? $user->display_name : '';

	$req = get_option( 'require_name_email' );
	$aria_req = ( $req ? " aria-required='true'" : '' );
	$fields =  array(
		'author' => '<p class="comment-form-author">' . '<label for="author">' . __( 'Name:' ) . '</label> ' . ( $req ? '<span class="required">*</span>' : '' ) .
		            '<input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30"' . $aria_req . ' /></p>',
		'email'  => '<p class="comment-form-email"><label for="email">' . __( 'Email:' ) . '</label> ' . ( $req ? '<span class="required">*</span>' : '' ) .
		            '<input id="email" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30"' . $aria_req . ' /></p>',
		'url'    => '<p class="comment-form-url"><label for="url">' . __( 'Website:' ) . '</label>' .
		            '<input id="url" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" /></p>',
	);

	$required_text = sprintf( ' ' . __('Required fields are marked %s'), '<span class="required">*</span>' );
	$defaults = array(
		'fields'               => apply_filters( 'comment_form_default_fields', $fields ),
		'comment_field'        => '<p class="comment-form-comment"><label for="comment">' . _x( 'Enter Text Here', 'noun' ) . '</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>',
		'must_log_in'          => '<p class="must-log-in">' .  sprintf( __( 'You must be <a href="%s">logged in</a> to post a comment.' ), wp_login_url( apply_filters( 'the_permalink', get_permalink( $post_id ) ) ) ) . '</p>',
		'logged_in_as'         => '<p class="logged-in-as">' . sprintf( __( 'Logged in as <a href="%1$s">%2$s</a>. <a href="%3$s" title="Log out of this account">Log out?</a>' ), admin_url( 'profile.php' ), $user_identity, wp_logout_url( apply_filters( 'the_permalink', get_permalink( $post_id ) ) ) ) . '</p>',
		'comment_notes_before' => '<p class="comment-notes">' . __( 'Your email address will not be published.' ) . ( $req ? $required_text : '' ) . '</p>',
		'comment_notes_after'  => '<p class="form-allowed-tags">' . sprintf( __( 'You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes: %s' ), ' <code>' . allowed_tags() . '</code>' ) . '</p>',
		'id_form'              => 'commentform',
		'id_submit'            => 'submit',
		'title_reply'          => __( 'Leave a Reply' ),
		'title_reply_to'       => __( 'Leave a Reply to %s' ),
		'cancel_reply_link'    => __( 'Cancel reply' ),
		'label_submit'         => __( 'Post Comment' ),
	);

	$args = wp_parse_args( $args, apply_filters( 'comment_form_defaults', $defaults ) );

	?>
		<?php if ( comments_open() ) : ?>
			<?php do_action( 'comment_form_before' ); ?>
			<div id="respond">
				<h3 id="reply-title"><?php comment_form_title( $args['title_reply'], $args['title_reply_to'] ); ?> <small><?php cancel_comment_reply_link( $args['cancel_reply_link'] ); ?></small></h3>
				<?php if ( get_option( 'comment_registration' ) && !is_user_logged_in() ) : ?>
					<?php echo $args['must_log_in']; ?>
					<?php do_action( 'comment_form_must_log_in_after' ); ?>
				<?php else : ?>
					<form action="<?php echo site_url( '/wp-comments-post.php' ); ?>" method="post" id="<?php echo esc_attr( $args['id_form'] ); ?>">
						<?php do_action( 'comment_form_top' ); ?>
						<?php if ( is_user_logged_in() ) : ?>
							<?php echo apply_filters( 'comment_form_logged_in', $args['logged_in_as'], $commenter, $user_identity ); ?>
							<?php do_action( 'comment_form_logged_in_after', $commenter, $user_identity ); ?>
						<?php else : ?>
							<?php echo $args['comment_notes_before']; ?>
							<?php echo apply_filters( 'comment_form_field_comment', $args['comment_field'] ); ?>
							<div class="comment_field_container">
							<?php
							do_action( 'comment_form_before_fields' );
							foreach ( (array) $args['fields'] as $name => $field ) {
								echo apply_filters( "comment_form_field_{$name}", $field ) . "\n";
							}
							do_action( 'comment_form_after_fields' );
							?>
							</div>
						<?php endif; ?>
						<?php echo $args['comment_notes_after']; ?>
						<p class="form-submit">
							<input name="submit" type="submit" id="<?php echo esc_attr( $args['id_submit'] ); ?>" value="<?php echo esc_attr( $args['label_submit'] ); ?>" />
							<?php comment_id_fields( $post_id ); ?>
						</p>
						<?php do_action( 'comment_form', $post_id ); ?>
					</form>
				<?php endif; ?>
			</div><!-- #respond -->
			<?php do_action( 'comment_form_after' ); ?>
		<?php else : ?>
			<?php do_action( 'comment_form_comments_closed' ); ?>
		<?php endif; ?>
	<?php
}

/*
function apent_comment_form() {
	?>
<div id="comments">
	<div id="respond">
		<h3 id="reply-title"><?php echo __( 'Add New Comment' ); ?> <small><a rel="nofollow" id="cancel-comment-reply-link" href="/ape/dev/blog/?p=100#respond" style="display:none;">Cancel reply</a></small></h3>
		<form action="http://localhost/ape/dev/blog/wp-comments-post.php" method="post" id="commentform">

			<p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p>

			<p class="comment-form-author"><label for="author">Name</label> <span class="required">*</span><input id="author" name="author" type="text" value="" size="30" aria-required="true"></p>

			<p class="comment-form-email"><label for="email">Email</label> <span class="required">*</span><input id="email" name="email" type="text" value="" size="30" aria-required="true"></p>

			<p class="comment-form-url"><label for="url">Website</label><input id="url" name="url" type="text" value="" size="30"></p>
			<p class="comment-form-comment"><label for="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>

			<p class="form-allowed-tags">You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes:  <code>&lt;a href="" title=""&gt; &lt;abbr title=""&gt; &lt;acronym title=""&gt; &lt;b&gt; &lt;blockquote cite=""&gt; &lt;cite&gt; &lt;code&gt; &lt;del datetime=""&gt; &lt;em&gt; &lt;i&gt; &lt;q cite=""&gt; &lt;strike&gt; &lt;strong&gt; </code></p>

			<p class="form-submit">
				<input name="submit" type="submit" id="submit" value="Post Comment">
				<input type="hidden" name="comment_post_ID" value="100" id="comment_post_ID">
				<input type="hidden" name="comment_parent" id="comment_parent" value="0">
			</p>
		</form>
	</div><!-- #respond -->
</div>
	<?php
}
 */

/*
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
 */

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
/*
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
 */










