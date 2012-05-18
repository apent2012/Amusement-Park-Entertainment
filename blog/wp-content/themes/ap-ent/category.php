<?php 

//if ( have_posts() ) : while ( have_posts() ) : the_post(); 


get_header(); 

?>
    
    
    	<?php

$debug = true;

if ($debug) echo '<pre>';
$category = get_the_category();
//print_r($category[0]);

// The Query
$args = array ( 'category_name' => $category[0]->cat_name );
query_posts( $args );


if ($debug) echo '</pre>';
    	?>
    </pre>
<div id="main">
  <div id="content">
    <h1><?php echo $category[0]->cat_name; ?></h1>
    <?php 
// The Loop
if (have_posts()) : while (have_posts()) : the_post(); 
?>
    <h1><?php the_title(); ?></h1>
    <h4>Posted on <?php the_time('F jS, Y') ?> by <?php the_author(); ?></h4>
    <p><?php the_content(__('(more...)')); ?></p>
    <hr>
    <?php endwhile; else: ?>
    <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
    <?php endif; ?>
  </div>

  <?php get_sidebar(); ?>

  </div>

<div id="delimiter"></div>

<?php get_footer(); 

// Reset Query
wp_reset_query(); 

?>


