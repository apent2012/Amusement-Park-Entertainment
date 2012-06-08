<?php
/**
 * The template for displaying content in the single.php template
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header">
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
				<?php echo_first_image(get_the_ID()); ?>
			</div>
		<h1 class="entry-title"><?php the_title(); ?></h1>

		<?php if ( 'post' == get_post_type() ) : ?>
		<?php /*
		<div class="entry-meta">
			<?php twentyeleven_posted_on(); ?>
		</div><!-- .entry-meta -->
		*/ ?>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'twentyeleven' ) . '</span>', 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
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

<?php /*
	<footer class="entry-meta">
		<?php
			// translators: used between list items, there is a space after the comma 
			$categories_list = get_the_category_list( __( ', ', 'twentyeleven' ) );

			// translators: used between list items, there is a space after the comma 
			$tag_list = get_the_tag_list( '', __( ', ', 'twentyeleven' ) );
			if ( '' != $tag_list ) {
				*//*
			<span class="cat-links">
				<?php twentyeleven_posted_on(); ?>
				<?php printf( __( '<span class="%1$s">in</span> %2$s', 'twentyeleven' ), 'entry-utility-prep entry-utility-prep-cat-links', $categories_list );
				$show_sep = true; ?>
			</span>
				*//*
				$utility_text = __( twentyeleven_posted_on().' in %1$s and tagged as %2$s by <a href="%6$s">%5$s</a>. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'twentyeleven' );
			} elseif ( '' != $categories_list ) {
				$utility_text = __( twentyeleven_posted_on().' in %1$s by <a href="%6$s">%5$s</a>. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'twentyeleven' );
			} else {
				$utility_text = __( twentyeleven_posted_on().' by <a href="%6$s">%5$s</a>. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'twentyeleven' );
			}

			printf(
				$utility_text,
				$categories_list,
				$tag_list,
				esc_url( get_permalink() ),
				the_title_attribute( 'echo=0' ),
				get_the_author(),
				esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) )
			);
		?>
		<?php edit_post_link( __( 'Edit', 'twentyeleven' ), '<span class="edit-link">', '</span>' ); ?>

		<?php if ( get_the_author_meta( 'description' ) && ( ! function_exists( 'is_multi_author' ) || is_multi_author() ) ) : // If a user has filled out their description and this is a multi-author blog, show a bio on their entries ?>
		<div id="author-info">
			<div id="author-avatar">
				<?php echo get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'twentyeleven_author_bio_avatar_size', 68 ) ); ?>
			</div><!-- #author-avatar -->
			<div id="author-description">
				<h2><?php printf( __( 'About %s', 'twentyeleven' ), get_the_author() ); ?></h2>
				<?php the_author_meta( 'description' ); ?>
				<div id="author-link">
					<a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">
						<?php printf( __( 'View all posts by %s <span class="meta-nav">&rarr;</span>', 'twentyeleven' ), get_the_author() ); ?>
					</a>
				</div><!-- #author-link	-->
			</div><!-- #author-description -->
		</div><!-- #entry-author-info -->
		<?php endif; ?>
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
	</footer><!-- .entry-meta -->
	*/ ?>
</article><!-- #post-<?php the_ID(); ?> -->
