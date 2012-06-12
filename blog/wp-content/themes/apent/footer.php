<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Eleven
 * @since Twenty Eleven 1.0
 */
?>

	</div><!-- #main -->

    <div class="clear"></div>
<?php //	<footer id="colophon" role="contentinfo"> ?>

			<?php
				/* A sidebar in the footer? Yep. You can can customize
				 * your footer with three columns of widgets.
				 */
				if ( ! is_404() )
					get_sidebar( 'footer' );
			?>

<!--
			<div id="site-generator">
				<?php do_action( 'twentyeleven_credits' ); ?>
				<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'twentyeleven' ) ); ?>" title="<?php esc_attr_e( 'Semantic Personal Publishing Platform', 'twentyeleven' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'twentyeleven' ), 'WordPress' ); ?></a>
			</div>
		-->
    <div class="footer">
        <div class="footer-content">
                <div class="footer-content-follow">
                    <p class="footer-content-follow-social">SOCIAL</p>
                    <h2>FOLLOW AP ENT.</h2>
                    <p>
                        <span><a href="https://www.facebook.com/AmusementParkEnt" target="_blank">facebook</a></span><span><a href="http://twitter.com/#!/tweetsfromAP" target="_blank">twitter</a></span><span><a href="http://amusementparkent.tumblr.com" target="_blank">tumblr</a></span>
                    </p>
                </div>
                <div class="footer-content-phone center">
                    <div class="footer-content-phone-castle center"></div>
                    <div class="footer-content-phone-number">tel. +1 213 293 7270</div>
                </div>
                <div class="footer-content-contact">
                    <p class="footer-content-contact-us">CONTACT US</p>
                    <p class="footer-content-contact-address">
                        1913 South Centinela Ave.<br />
                        Santa Monica, CA 90404
                    </p>
                    <p>
                        <span><a href="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=1913+Centinela+Ave,Santa+Monica,CA&aq=&sll=37.0625,-95.677068&sspn=43.799322,68.378906&vpsrc=0&ie=UTF8&hq=&hnear=1913+Centinela+Ave,+Santa+Monica,+California+90404&t=m&z=16&iwloc=A" target="_blank">view map</a></span>
                    </p>
                </div>
        </div>
    </div>
<?php //    </footer><!-- #colophon --> ?>
    
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>