<?php
/**
 * The default template for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="entry-header">
			<?php if ( is_sticky() ) : ?>
				<hgroup>
					<h2 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyeleven' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
					<h3 class="entry-format"><?php _e( 'Featured', 'twentyeleven' ); ?></h3>
				</hgroup>
			<?php else : 
					$featuredImage = get_featured_image(get_the_ID()); 
					if ($featuredImage) {
						?>
			<div class="attachment">
				<?php
					$posttags = get_the_tags();
					if (is_array($posttags)) {
						$posttags = array_values($posttags);
						if (isset($posttags[0])) {
							$firstTag = $posttags[0];
							$firstTagName = $firstTag->name;
				?>
				<div class="attachment-firstTag">
					<div class="attachment-firstTag-text">
					<?php echo $firstTagName; ?>
					</div>
				</div>
				<?php $theDate = get_the_date('m/d'); ?>
				<div class="attachment-date">
					<div class="attachment-date-text">
				<?php echo $theDate; ?>
					</div>
				</div>
				<?php
						}
					}
				?>
				<?php echo get_featured_image(get_the_ID()); //echo_first_image(get_the_ID()); ?>
			</div>
						<?php
					}
			?>
			<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyeleven' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
			<?php endif; ?>

			<?php if ( 'post' == get_post_type() ) : ?>
			<?php /*
			<div class="entry-meta">
				<?php twentyeleven_posted_on(); ?>
			</div><!-- .entry-meta -->
			*/ ?>
			<?php endif; ?>

			<?php if ( comments_open() && ! post_password_required() ) : ?>
			<div class="comments-link">
				<?php comments_popup_link( '<span class="leave-reply">' . __( 'Reply', 'twentyeleven' ) . '</span>', _x( '1', 'comments number', 'twentyeleven' ), _x( '%', 'comments number', 'twentyeleven' ) ); ?>
			</div>
			<?php endif; ?>
		</header> <!-- .entry-header -->

		<?php if ( is_search() ) : // Only display Excerpts for Search ?>
		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->
		<?php else : ?>
		<div class="entry-content">
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentyeleven' ) ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'twentyeleven' ) . '</span>', 'after' => '</div>' ) ); ?>
		</div><!-- .entry-content -->
		<?php endif; ?>

		<footer class="entry-meta">
			<?php $show_sep = false; ?>
			<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
			<?php
				/* translators: used between list items, there is a space after the comma */
				$categories_list = get_the_category_list( __( ', ', 'twentyeleven' ) );
				if ( $categories_list ):
			?>
			<span class="cat-links">
				<?php twentyeleven_posted_on(); ?>
				<?php //printf( __( '<span class="%1$s">in</span>'/*%2$s'*/, 'twentyeleven' ), 'entry-utility-prep entry-utility-prep-cat-links', $categories_list );
				$show_sep = true; ?>
			</span>
			<?php endif; // End if categories ?>
			<?php
				/* translators: used between list items, there is a space after the comma */
				$tags_list = get_the_tag_list( '', __( ', ', 'twentyeleven' ) );
				if ( $tags_list ):
				if ( $show_sep ) : ?>
			<span class="sep"> - </span>
				<?php endif; // End if $show_sep ?>
			<span class="tag-links">
				<?php printf( __( '<span class="%1$s">Filed under</span> %2$s', 'twentyeleven' ), 'entry-utility-prep entry-utility-prep-tag-links', $tags_list );
				$show_sep = true; ?>
			</span>
			<?php endif; // End if $tags_list ?>
			<?php endif; // End if 'post' == get_post_type() ?>

			<?php edit_post_link( __( 'Edit', 'twentyeleven' ), '<span class="edit-link">', '</span>' ); ?>
			<span class="share-links">Share: <a href="<?php 
				$shareLink = get_permalink();
				$twitterText = get_the_title()." ".$shareLink;
				$twitterShareURL = urlencode($twitterText);
				echo 'http://twitter.com/home?status='.$twitterShareURL; 
			?>" class="share-link-twitter" target="_blank">Twitter</a> - <a href="<?php 
			//	$facebookTitle = urlencode(get_the_title());
				$facebookShareURL = urlencode($shareLink);
				echo 'http://www.facebook.com/share.php?u='.$facebookShareURL;
			?>" class="share-link-facebook" target="_blank">Facebook</a></span>
			<?php if ( comments_open() ) : ?>
			<?php /*if ( $show_sep ) : ?>
			<span class="sep"> - </span>
			<?php endif; // End if $show_sep ?>
			*/ ?>
			<span class="comments-link"><?php comments_popup_link( '<span class="leave-reply">' . __( 'Comments(0)', 'twentyeleven' ) . '</span>', __( 'Comments(1)', 'twentyeleven' ), __( 'Comments(%)', 'twentyeleven' ) ); ?></span>
			<?php endif; // End if comments_open() ?>

		</footer><!-- #entry-meta -->
	</article><!-- #post-<?php the_ID(); ?> -->
