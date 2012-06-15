/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

jQuery(document).ready(function()
{
	// Set the nescesarry data
	jQuery("#jquerynav li a").each(function(){
		var backgroundPositions = jQuery(this).css('background-position').split(" "); // Returns "##px" and "##px"
		jQuery(this).data("originalXpos", backgroundPositions[0].slice(0, -2)); // Retrieve the original X position
		jQuery(this).data("newYpos", 0); // Set the new Y position to 0
	});
	
	// Capture the "hover" events
	jQuery("#jquerynav li a").hover(function(){
		console.log('rollover');
		jQuery(this)
			.data("newYpos", jQuery(this).data("newYpos") + 1)
			.stop()
			.animate({
				backgroundPosition: jQuery(this).data("originalXpos") + "px " + jQuery(this).data("newYpos") * 60 + "px"
			}, 600, "easeOutCirc");
	}, function(){
		console.log('rollout');
		jQuery(this)
			.data("newYpos", jQuery(this).data("newYpos") + 1)
			.stop()
			.animate({
				backgroundPosition: jQuery(this).data("originalXpos") + "px " + jQuery(this).data("newYpos") * 60 + "px"
			}, 400, "easeInCirc");
	});
});