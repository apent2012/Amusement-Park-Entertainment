//<![CDATA[ 
$(document).ready(function(){
var p = 0;

function moveit() {
    p += .01;

    var r = 33;
    var xcenter = 71;
    var ycenter = 71;
	
	var newLeft = Math.floor(xcenter + (r* Math.cos(p+64)));
    var newTop = Math.floor(ycenter + (r * Math.sin(p+64)));
    var newLeft1 = Math.floor(xcenter + (r* Math.cos(p+96)));
    var newTop1 = Math.floor(ycenter + (r * Math.sin(p+96)));
     var newLeft2 = Math.floor(ycenter + (r* Math.cos(p+128)));
    var newTop2 = Math.floor(xcenter + (r* Math.sin(p+128)));
     var newLeft3 = Math.floor(ycenter + (r* Math.cos(p+160)));
    var newTop3 = Math.floor(xcenter + (r* Math.sin(p+160)));
    var newLeft4 = Math.floor(xcenter + (r* Math.cos(p+192)));
    var newTop4 = Math.floor(ycenter + (r * Math.sin(p+192)));
    var newLeft5 = Math.floor(xcenter + (r* Math.cos(p+224)));
    var newTop5 = Math.floor(ycenter + (r * Math.sin(p+224)));
     var newLeft6 = Math.floor(ycenter + (r* Math.cos(p+256)));
    var newTop6 = Math.floor(xcenter + (r* Math.sin(p+256)));
     var newLeft7 = Math.floor(ycenter + (r* Math.cos(p+288)));
    var newTop7 = Math.floor(xcenter + (r* Math.sin(p+288)));
    var newLeft8 = Math.floor(xcenter + (r* Math.cos(p+320)));
    var newTop8 = Math.floor(ycenter + (r * Math.sin(p+320)));
    var newLeft9 = Math.floor(xcenter + (r* Math.cos(p+352)));
    var newTop9 = Math.floor(ycenter + (r * Math.sin(p+352)));
     var newLeft10 = Math.floor(ycenter + (r* Math.cos(p+384)));
    var newTop10 = Math.floor(xcenter + (r* Math.sin(p+384)));

  

    $('#lr1').animate({
        top: newTop,
        left: newLeft,
    }, 10, function() {
        moveit()
    });
	
	   $('#lr2').animate({
        top: newTop1,
        left: newLeft1,
    }, 10, function() {
        moveit()
    });

   $('#lr3').animate({
        top: newTop2,
        left: newLeft2,
    }, 10, function() {
        moveit()
    });	
	
	
	   $('#lr4').animate({
        top: newTop3,
        left: newLeft3,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr5').animate({
        top: newTop4,
        left: newLeft4,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr6').animate({
        top: newTop5,
        left: newLeft5,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr7').animate({
        top: newTop6,
        left: newLeft6,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr8').animate({
        top: newTop7,
        left: newLeft7,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr9').animate({
        top: newTop8,
        left: newLeft8,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr10').animate({
        top: newTop9,
        left: newLeft9,
    }, 10, function() {
        moveit()
    });	
	
	   $('#lr11').animate({
        top: newTop10,
        left: newLeft10,
    }, 10, function() {
        moveit()
    });	
	
	
}
$(document).ready(function() {
    moveit();
});
});//]]>