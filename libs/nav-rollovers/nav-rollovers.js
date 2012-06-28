/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

jQuery(document).ready(function()
{
	// Set the nescesarry data
	jQuery("#jquerynav li div").each(function() {
		// Returns "##px" and "##px"
		var backgroundPositions = jQuery(this).css('background-position').split(" ");
	//	console.log(backgroundPositions);

		// Retrieve the original X position
		jQuery(this).data("originalXpos", backgroundPositions[0].slice(0, -2));

		// Set the new Y position to 0
		jQuery(this).data("newYpos", 0);
	});

/*
	var navClick = function() {
		var href = jQuery(this).children('a').attr('href');
		console.log(href);

		jQuery(this).children('a').click();
	};

	jQuery("#jquerynav li").click(navClick);
 */

	// Capture the "hover" events
	jQuery("#jquerynav li").hover(function() {
		var elem = jQuery(this).find('div');
		elem.data("newYpos", elem.data("newYpos") + 1)
			.stop()
			.animate({
				backgroundPosition: elem.data("originalXpos") + "px " + elem.data("newYpos") * 20 + "px"
			}, 600, "easeOutCirc");
	}, function() {
		var elem = jQuery(this).find('div');
		elem.data("newYpos", elem.data("newYpos") + 1)
			.stop()
			.animate({
				backgroundPosition: elem.data("originalXpos") + "px " + elem.data("newYpos") * 20 + "px"
			}, 400, "easeInCirc");
	});
});