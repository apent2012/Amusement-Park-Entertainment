
(function($){$.scrollingParallax=function(box,options)
{var options=options||{};options.enableVertical=typeof(options.enableVertical)!='undefined'?options.enableVertical:true;if(options.enableVertical){options.staticSpeed=options.staticSpeed||false;options.staticScrollLimit=typeof(options.staticScrollLimit)!='undefined'?options.staticScrollLimit:true;options.loopIt=options.loopIt||false;options.reverseDirection=options.reverseDirection||false;}
options.enableHorizontal=options.enableHorizontal||false;if(options.enableHorizontal){options.staticSpeedX=options.staticSpeedX||false;options.staticScrollLimitX=typeof(options.staticScrollLimitX)!='undefined'?options.staticScrollLimitX:true;options.loopItX=options.loopItX||false;options.reverseDirectionX=options.reverseDirectionX||false;}
options.disableIE6=options.disableIE6||false;options.disableIE6Anim=typeof(options.disableIE6Anim)!='undefined'?options.disableIE6Anim:true;options.bgWidth=options.bgWidth||(options.enableHorizontal?'150%':'100%');options.bgHeight=options.bgHeight||'150%';options.bgRepeat=options.bgRepeat||false;options.appendInFront=options.appendInFront||false;options.parallaxHeight=options.parallaxHeight||false;options.parallaxWidth=options.parallaxWidth||false;var isIE6=$.browser.msie&&$.browser.version<7?true:false;if(options.disableIE6&&isIE6)return false;var $document=$(document);var $window=$(window);var $box;var backgroundMode=false;if(options.enableVertical){var boxHeight;var windowHeight;var docHeight;var parallaxRoom;var maxIE6Move=0;var loopCount=0;var startingPos=0;var tooSmallMode=false;var oldMoveIt=null;}
if(options.enableHorizontal){var boxWidth;var windowWidth;var docWidth;var parallaxRoomX;var maxIE6MoveX=0;var loopCountX=0;var startingPosX=0;var tooSmallModeX=false;var oldMoveItX=null;}
init(box);function init(box){if(typeof(box)=='string')$box=appendBackground(box);else{$box=$(box);$box.css('position',isIE6?'absolute':'fixed');if(options.enableVertical)startingPos=parseInt($box.css('top'));if(options.enableHorizontal)startingPosX=parseInt($box.css('left'));}
if(options.disableIE6Anim&&isIE6)return false;defineSizes();if(backgroundMode){if(options.reverseDirection&&options.enableVertical){startingPos+=-1*parallaxRoom;$box.css('top',startingPos);}
if(options.reverseDirectionX&&options.enableHorizontal){startingPosX+=-1*parallaxRoomX;$box.css('left',startingPosX);}}
$window.scroll(function(){ani();});$window.resize(function(){defineSizes();});}
function appendBackground(theSrc){var bgCss={display:'block',top:0,left:0,width:options.bgWidth,height:options.bgHeight,zIndex:0};bgCss.position=isIE6?'absolute':'fixed';if(options.bgRepeat){var $obj=options.appendInFront?$('<div></div>').appendTo($('body')):$('<div></div>').prependTo($('body'));bgCss.backgroundRepeat='repeat';bgCss.backgroundImage='url("'+theSrc+'")';}
else{var $obj=options.appendInFront?$('<img />').appendTo($('body')):$('<img />').prependTo($('body'));$obj.attr('src',theSrc);}
$obj.css(bgCss);backgroundMode=true;return $obj;}
function defineSizes(){if(options.enableVertical){boxHeight=$box.height();windowHeight=$window.height();docHeight=$document.height();parallaxRoom=(options.parallaxHeight||boxHeight)-windowHeight;if(parallaxRoom<0){if(options.staticSpeed)parallaxRoom=windowHeight-boxHeight;else parallaxRoom=options.reverseDirection?windowHeight-startingPos-boxHeight:startingPos;tooSmallMode=true;}
if(isIE6&&!maxIE6Move)maxIE6Move=-1*(docHeight-boxHeight);if(options.loopIt)loopCount=parseInt($document.scrollTop()/(tooSmallMode?windowHeight:boxHeight));}
if(options.enableHorizontal){boxWidth=$box.width();windowWidth=$window.width();docWidth=$document.width();parallaxRoomX=(options.parallaxWidth||boxWidth)-windowWidth;if(parallaxRoomX<0){parallaxRoomX=options.staticSpeedX?windowWidth-boxWidth:options.reverseDirectionX?windowWidth-startingPosX-boxWidth:startingPosX;tooSmallModeX=true;}
if(isIE6&&!maxIE6MoveX)maxIE6MoveX=-1*(docWidth-boxWidth);if(options.loopItX)loopCountX=parseInt($document.scrollLeft()/(tooSmallModeX?windowWidth:boxWidth));}
ani();}
function ani(){$box.queue([]);var theCss={};if(options.enableVertical){var moveIt=calculateMove(true);theCss.top=moveIt;}
if(options.enableHorizontal){var moveItX=calculateMove(false);theCss.left=moveItX;}
if(!$.browser.msie&&(Math.abs(oldMoveIt-moveIt)>100||Math.abs(oldMoveItX-moveItX)>100))$box.animate(theCss,30);else $box.css(theCss);oldMoveIt=moveIt;oldMoveItX=moveItX;}
function calculateMove(vertical){if(vertical){var offset=$document.scrollTop();var docSize=docHeight;var windowSize=windowHeight;var boxSize=boxHeight;var parallaxRoom2=parallaxRoom;var loopCount2=loopCount;var startingPos2=startingPos;var parallaxRoom2=parallaxRoom;var tooSmallMode2=tooSmallMode;var maxIE6Move2=maxIE6Move;var opts={reverseDirection:options.reverseDirection,staticSpeed:options.staticSpeed,loopIt:options.loopIt,staticScrollLimit:options.staticScrollLimit}}
else{var offset=$document.scrollLeft();var docSize=docWidth;var windowSize=windowWidth;var boxSize=boxWidth;var loopCount2=loopCountX;var startingPos2=startingPosX;var parallaxRoom2=parallaxRoomX;var tooSmallMode2=tooSmallModeX;var maxIE6Move2=maxIE6MoveX;var opts={reverseDirection:options.reverseDirectionX,staticSpeed:options.staticSpeedX,loopIt:options.loopItX,staticScrollLimit:options.staticScrollLimitX}}
if(opts.staticSpeed){var move=offset*opts.staticSpeed;move-=parallaxRoom2*(loopCount2);}
else{var offsetPercent=offset/(docSize-windowSize);var move=offsetPercent*parallaxRoom2;}
if(!opts.reverseDirection)move*=-1;move+=startingPos2;if(opts.staticSpeed)move=checkMove(move,vertical,opts,parallaxRoom2,tooSmallMode2);if(tooSmallMode2&&opts.staticSpeed&&opts.loopIt)move+=windowSize-boxSize;if(isIE6){move+=offset;move=Math.max(parseInt(move),parseInt(maxIE6Move2));}
return move;}
function checkMove(move,vertical,opts,parallaxRoom,tooSmallMode){if(!opts.loopIt){if(opts.staticScrollLimit){if(tooSmallMode){if(move<0)move=0;if(move>parallaxRoom)move=parallaxRoom;}
else{if(move>0)move=0;if(-1*move>parallaxRoom)move=-1*parallaxRoom;}}}
else{while(move<parallaxRoom){move+=parallaxRoom;var loopCountChange=opts.reverseDirection?-1:1;if(vertical)loopCount+=loopCountChange;else loopCountX+=loopCountChange;}
while(move>(opts.reverseDirection?-1:0)){move-=parallaxRoom;var loopCountChange=opts.reverseDirection?-1:1;if(vertical)loopCount-=loopCountChange;else loopCountX-=loopCountChange;}}
return move;}};$.fn.scrollingParallax=function(options)
{this.each(function()
{new $.scrollingParallax(this,options);});return this;};})(jQuery);