<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 */
?>

<?php get_header(); ?>
    
<div id="main">
  <div id="content">
    <h1>Main Area</h1>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <h1><?php the_title(); ?></h1>
    <h4>Posted on <?php the_time('F jS, Y') ?></h4>
    <p><?php the_content(__('(more...)')); ?></p>
    <hr>
    <?php endwhile; else: ?>
    <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
    <?php endif; ?>
  </div>

  <?php get_sidebar(); ?>

  </div>

<div id="delimiter"></div>

<?php get_footer(); ?>

