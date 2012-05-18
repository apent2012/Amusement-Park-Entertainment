// Preload priority images here
var pimg=new Image();
pimg.src='images/loader.gif';

$(document).ready(function(){
    $(function() {
        var gapWidth = 0;
      
      
        $.preLoadGUI({
          message: '',
          ending_message: '',
          bgOpacity: 1.0,
          load: [
            ['http://www.yngest.com/ape-theme/images/about-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/home-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/team-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/contact-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/workbox1.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/reelstill.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/workbox3.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/bigpark_a.png', 'img'],
            ['http://www.yngest.com/ape-theme/images/asqp-im5.gif', 'img']
        ]});





     //   var InitialOffset = function(scrollSpeed, pageWidth, pageNum, gapWidth, pagePos) {
     //       return {
     //           x:scrollSpeed * (gapWidth + ((pageNum - 1) * pageWidth) + pagePos.x),
     //           y:pagePos.y
     //       };
     //   };

 

        var blockSpeed = 1;

        var piSpeed = 5;
        var piPageNum = 2;

        var pageWidth = 1635;
        var totalNumPages = 13;

        var piPos = {
            x:400,
            y:200
        };

    //    var initialOffset = InitialOffset(piSpeed, pageWidth, piPageNum, gapWidth, piPos);
    //    $('.floating-object').css('left', initialOffset.x+'px')
     //       .css('top', initialOffset.y+'px');

    /*
        $('#block').scrollingParallax({
            bgWidth : (pageWidth * totalNumPages + gapWidth)+'px',
            bgHeight : '1308px',
            enableHorizontal : true,
            staticSpeedX : blockSpeed,
            staticScrollLimitX: false,
            loopItX : false,
            appendInFront : true,
        });
    */
        /*
        $('#pi-wrapper').scrollingParallax({
           // bgWidth : '',
           // bgHeight : '100%',
            enableHorizontal : true,
            staticSpeedX : piSpeed,
            staticScrollLimitX: false,
            loopItX : false,
            appendInFront : true
        });
    */
    /*
        $('.floating-object').scrollingParallax({
           // bgWidth : '',
           // bgHeight : '100%',
            enableHorizontal : true,
            staticSpeedX : piSpeed,
            staticScrollLimitX: false,
            loopItX : false,
            appendInFront : true
        });*/
    /*
        $('.team-block').scrollingParallax({
            bgWidth : '1634px',
            bgHeight : '654px',
            enableHorizontal : true,
            staticSpeedX : .2,
            loopItX : false,
            appendInFront : true
        });
    */
    /*
        $.scrollingParallax('images/cactus.png', {
            bgWidth : '400%',
            bgHeight : '150%',
            enableHorizontal : true,
            staticSpeedX : 2,
            staticScrollLimitX: false,
            loopItX : true,
            appendInFront : true
        });
    */

       /*
        
        $.scrollingParallax('images/desert-bg.png', {
            bgWidth : '4400px',
            bgHeight : '10%',
            staticSpeed : .2,
            staticScrollLimit : false,
            enableHorizontal : true,
            staticSpeedX : .09
        });
    */
        /*
        $('.nav').scrollingParallax({
            bgWidth : '400%',
            bgHeight : '150%',
            enableHorizontal : true,
            staticSpeedX : 1.5,
            loopItX : true,
            appendInFront : true
        });
    */
        /*
        $('.page1').scrollingParallax({
            bgWidth : '400%',
            bgHeight : '150%',
            enableHorizontal : true,
            staticSpeedX : 2,
            loopItX : true,
            appendInFront : true
        });
        $('.page2').scrollingParallax({
            bgWidth : '400%',
            bgHeight : '150%',
            enableHorizontal : true,
            staticSpeedX : 2,
            loopItX : true,
            appendInFront : true
        });
    */
        function isTop() {
            var scrollTop = $(window).scrollTop();
            return (scrollTop <= 4);
        }

        $.getDocHeight = function(){
             var D = document;
             return Math.max(Math.max(D.body.scrollHeight,    D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
        };

        function isBottom() {
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $.getDocHeight();
            var diff = docHeight - windowHeight;
        //  console.log('scrollTop: '+scrollTop+', windowHeight: '+windowHeight+', docHeight: '+docHeight+', diff: '+diff);

            return scrollTop >= diff - 4;
        }

        // 0 is inactive, 1 is sliding out, 2 is active, 3 is sliding in
        var headerState = 0, footerState = 0;
        var UpdateHeaderAndFooter = function() {

            var blockHeight = $('#content').height();
            var scrollTop = $('#content').scrollTop();
            var windowHeight = $(window).height();

            var detect = blockHeight - windowHeight;

            if (isTop()) {
                if (headerState == 0) {

                    headerState = 1;

                     $('.header').show().animate({
                        top: '+=60',
                      }, 300, function() {
                        // Animation complete.
                        headerState = 2;
                      });
                }
            }
            else if (isBottom()) {
                if (footerState == 0) {

                    footerState = 1;

                     $('.footer').show().animate({
                        bottom: '+=212',
                      }, 300, function() {
                        // Animation complete.
                        footerState = 2;
                      });
                }
            }
            else {
                if (headerState == 2) {
                    // If the header is active, slide it back in.
                    headerState = 3;

                     $('.header').animate({
                        top: '-=60'
                      }, 300, function() {
                        // Animation complete.
                       // console.log('done animating');
                       headerState = 0;
                        $('.header').hide();
                      });
                }

                if (footerState == 2) {
                    // If the footer is active, slide it back in.
                    footerState = 3;

                     $('.footer').animate({
                        bottom: '-=212'
                      }, 300, function() {
                        // Animation complete.
                       // console.log('done animating');
                       footerState = 0;
                        $('.footer').hide();
                      });
                }
                
            }
        };

        UpdateHeaderAndFooter();
        $(window).scroll(UpdateHeaderAndFooter);

        $('.header-content a').bind('click', function(event) {
            var $anchor = $(this);
            /*
            if you want to use one of the easing effects:
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 1500,'easeInOutExpo');
             */

            var windowWidth = $(window).width();
            var windowCenter = windowWidth / 2;
            var pageCenter = pageWidth / 2;
            var centeringOffset = pageCenter - windowCenter;
            var headerOffset = 327 - centeringOffset;
        //    alert(headerOffset);
            if (headerOffset >= 327)
              headerOffset = 327;

            var offsets = {
                '#page1':(pageWidth * 0 + gapWidth) + centeringOffset,
                '#page2':(pageWidth * 1 + gapWidth) + centeringOffset,
                '#page3':(pageWidth * 2 + gapWidth) + centeringOffset,
                '#page4':(pageWidth * 3 + gapWidth) + centeringOffset,
                '#page5':(pageWidth * 4 + gapWidth) + centeringOffset,
                '#page6':(pageWidth * 5 + gapWidth) + centeringOffset
             };

           //  var offset = $($anchor.attr('href')).offset().left;
            var offsetSel = $($anchor.attr('href')).selector;
            var offset = offsets[offsetSel];
            if (typeof offset != 'undefined') {
                $('#content').stop().animate({
                    scrollLeft: offset // 400
                }, 1000, 'easeInOutExpo');

                $('.header-content').stop().animate({
                    left: headerOffset
                }, 1000, 'easeInOutExpo');


                $('.footer-content').stop().animate({
                    left: headerOffset
                }, 1000, 'easeInOutExpo');

                window.location.hash = offsetSel;
                event.preventDefault();
            }
            else {
    //            alert(offset);
            }
        });

        $('.home-body-news-content-circleDown').bind('click', function() {
            $('html, body').stop().animate({
                scrollTop: 650
            }, 1000, 'easeInOutExpo');
        });

        $('.about-block-downArrow').bind('click', function() {
            $('html, body').stop().animate({
                scrollTop: 650
            }, 1000, 'easeInOutExpo');
        });

        $('.team-block-downArrow').bind('click', function() {
            $('html, body').stop().animate({
                scrollTop: 650
            }, 1000, 'easeInOutExpo');
        });


        var embeddedVideoId = 'ytplayer';
/*
        var params = { 
            allowScriptAccess: "always",
            allowFullScreen: "true",
            wmode: "transparent"
        };


        var ytVideoIds = [
            'DBZDSwN_i9w', 
            'xYgFjBDoHNA', 
            'NAtIZafyeHI', 
            'fMI3kti0nrY', 
            '8aE1Vs5Kq-M',
            '9bQHd3sztd8',
            'khOP9vvNH8I',
            'jkY8uDP9S5Q',
            'lum4O0keVl4',
            '7qZilB3o6lw',
            'LSHQv9FhvVA',
            'WPvTJ4FvhIw',
            'Ht9lB-hebJw'
        ];
*/
        $('.videoPlaceholder').click(function() {
          // Start video.

          

          // VIMEO VIDEO ID GOES HERE
          var vimeoVideoId = '42184748';



          var html = '<iframe src="http://player.vimeo.com/video/'+vimeoVideoId+'" width="981" height="550" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
          
          $('.videoPlaceholder').hide('slow');
           $('#ytplayer').html(html);

           // Hide the work square.
          $('.work-block-content-work, #prevBtn, #nextBtn').hide('slow');

           // Show the close button.
           // Not sure why this isn't working in IE 9 for Windows...
          $('.work-block-content-video-close').show('slow');

        });

/*
       var EmbedVideo = function(videoNum) {
        //    var ytapiPlayerId = 'ytapiplayer'+videoNum;
            var videoId = ytVideoIds[(videoNum-1)];
            var ytUrl = "http://www.youtube.com/v/"+videoId+"?enablejsapi=1&autoplay=1&playerapiid="+embeddedVideoId+"&version=3&amp;hl=en_US&amp;rel=0";
         // console.log('toVideoNum: '+toVideoNum+', videoId: '+videoId+', ytUrl: '+ytUrl);
            params['movie'] = ytUrl;

            swfobject.embedSWF(ytUrl,
                           embeddedVideoId, "981", "550", "8", null, null, 
                           params, 
                           { id: embeddedVideoId });

            $('#'+embeddedVideoId).css('display', 'block').show();

            var str = $('#ytplayer').attr('data');
         //   alert(ytUrl);
         //   alert(str);
         //   alert('test');

        };
*/
/*
        $('.videoPlaceholder').bind('click', function(event) {
            var videoId = $(this).attr('id');
            var videoNum = videoId.replace('ytapiplayer', '');

            EmbedVideo(videoNum);
        });
*/
        var hashes = ['#page1', '#page2', '#page3', '#page4', '#page5', '#page6', '#page7', '#page8', '#page9', '#page10', '#page11', '#page12', '#page13'];
        var hashIndex = $.inArray(window.location.hash, hashes);
        if (hashIndex == -1)
            hashIndex = 0;

        $('.header a[href$="'+hashes[hashIndex]+'"]').trigger('click');

/*
        $("#videos-slider").easySlider({
            auto: false, 
            continuous: true,
            prevId:'prevBtn',
            nextId:'nextBtn',
            pageWidth:981,
            pageHeight:550,
            prevText:'',
            nextText:''
        });
*/
        $('#people-slider').easySlider({
            auto: false, 
            continuous: true,
            prevId:'peoplePrevBtn',
            nextId:'peopleNextBtn',
            pageWidth:981,
            pageHeight:327,
            prevText:'',
            nextText:''
        });


    /*
        var EmbedVideo = function(fromVideoNum, toVideoNum) {
            // Stop fromVideo.

            if (fromVideoNum != null) {
                var ytapiFromPlayerId = 'ytapiplayer'+fromVideoNum;

                // Fill in id from unique class.
            //    $('.'+ytapiFromPlayerId).attr('id', ytapiFromPlayerId);

                // Get the player from the id.
                var ytFromPlayer = document.getElementById(ytapiFromPlayerId);
                if (ytFromPlayer) {
                    ytFromPlayer.stopVideo();
                }

                // Remove the id.
            //    $('.'+ytapiFromPlayerId).removeAttr('id');
            }

            // Embed toVideo.
            var ytapiToPlayerId = 'ytapiplayer'+toVideoNum;
     
            // Fill in id from unique class.
            // Keep id around for swfobject to keep the handle to it.
            // The problem here is that EasySlider will then copy the video (if continuous).
            // ... and copying the id means that we'll lose track of the correct one.
            // I think that the correct id will always be the last one if $('.id') returns more than one item.
            //
            // Remove all elements with this id.

         //   alert($('.'+ytapiToPlayerId).size());


     //       $('#'+ytapiToPlayerId).removeAttr('id');
       //     $('.'+ytapiToPlayerId).first().attr('id', ytapiToPlayerId);

          //  $('#'+ytapiToPlayerId).removeAttr('id');

            // Now add the id to the last element.

            var videoId = ytVideoIds[(toVideoNum-1)];
            var ytUrl = "http://www.youtube.com/v/"+videoId+"?enablejsapi=1&playerapiid="+ytapiToPlayerId+"&version=3&amp;hl=en_US&amp;rel=0";
         // console.log('toVideoNum: '+toVideoNum+', videoId: '+videoId+', ytUrl: '+ytUrl);

            swfobject.embedSWF(ytUrl,
                           ytapiToPlayerId, "974", "550", "8", null, null, 
                           params, 
                           { id: ytapiToPlayerId });

        };

    //    EmbedVideo(null, 1);     // Load first video.
    */

     //   swfobject.embedSWF("http://www.youtube.com/v/7qZilB3o6lw?enablejsapi=1&playerapiid=ytapiplayer1&version=3&amp;hl=en_US&amp;rel=0",
      //                     "ytapiplayer1", "974", "550", "8", null, null, params, { id: "ytapiplayer1" });

    /*
        swfobject.embedSWF("http://www.youtube.com/v/ZENZnjk7Vfw?enablejsapi=1&playerapiid=ytapiplayer2&version=3&amp;hl=en_US&amp;rel=0",
                           "ytapiplayer1", "974", "550", "8", null, null, params, { id: "ytapiplayer2" });

        swfobject.embedSWF("http://www.youtube.com/v/WPvTJ4FvhIw?enablejsapi=1&playerapiid=ytapiplayer3&version=3&amp;hl=en_US&amp;rel=0",
                           "ytapiplayer1", "974", "550", "8", null, null, params, { id: "ytapiplayer3" });

        swfobject.embedSWF("http://www.youtube.com/v/Ht9lB-hebJw?enablejsapi=1&playerapiid=ytapiplayer4&version=3&amp;hl=en_US&amp;rel=0",
                           "ytapiplayer1", "974", "550", "8", null, null, params, { id: "ytapiplayer4" });

    */
    //    swfobject.embedSWF("http://www.youtube.com/v/NAtIZafyeHI?enablejsapi=1&playerapiid=ytapiplayer5&version=3&amp;hl=en_US&amp;rel=0",
     //                      "ytapiplayer1", "974", "550", "8", null, null, params, { id: "ytapiplayer5" });

/*
        HandleYTState = function(ytPlayerState) {
           // Possible values are:
           // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).

       //    console.log(ytPlayerState);
            var playing = false;

           if ((ytPlayerState == 1) || (ytPlayerState == 2)) {
                playing = true;
           }

           if (playing) {
                 // Hide some items while playing.
                 $('.work-block-content-work, #prevBtn, #nextBtn').hide('slow', function() {
                  //  alert('Animation complete.');
                  });

                // Show some items while playing.
                $('.work-block-content-video-close').show('slow', function() {

                });

           }
           else {
                // Show some items while not playing.
                $('.work-block-content-work, #prevBtn, #nextBtn').show('slow', function() {
                });

                // Hide some items while not playing.
                 $('.work-block-content-video-close').hide('slow', function() {
                  //  alert('Animation complete.');
                  if (ytPlayerState == 0)
                       $('#ytplayer').css('display', 'none');
                  });
           }
        };    
*/
/*
        var curVideoNum = 1;   // Starts with first video.

        HandleSliderState = function(sliderState) {
           // Possible values are:
           // previous (0), next (1)

           switch(sliderState) {
            case 0: // prev
                var newVideoNum = curVideoNum - 1;
                if (newVideoNum < 1) {
                    newVideoNum = ytVideoIds.length;
                }

                curVideoNum = newVideoNum;
                break;
            case 1: // next
                var newVideoNum = curVideoNum + 1;
                if (newVideoNum > ytVideoIds.length) {
                    newVideoNum = 1;
                }

                curVideoNum = newVideoNum;
                break;
           }

        };
*/
        HandleVideoClose = function() {

         //   document.getElementById('ytplayer').stopVideo();
          $('.videoPlaceholder').show('slow');
          $('#ytplayer').html('');

           // Show the work square.
           $('.work-block-content-work, #prevBtn, #nextBtn').show('slow');

           // Hide the close button.
          $('.work-block-content-video-close').hide('slow');

        };

    });
});



// Event handlers

/**
* The 'onYouTubePlayerReady' function executes when the onReady event
* fires, indicating that the player is loaded, initialized and ready
* to receive API calls.
* @param {string} playerId Mandatory A value that identifies the player.
*/
/*
function onYouTubePlayerReady(playerId) {
    // No need to do any of this stuff if the function was called
    // because the user customized the player parameters for the embedded
    // player.

 //   alert('onYouTubePlayerReady('+playerId+')');

    //    $('.'+playerId).attr('id', playerId);

        var ytplayer = document.getElementById(playerId);
        if (ytplayer)
            ytplayer.addEventListener("onStateChange", "onytplayerStateChange");

     //   $('.'+ytapiToPlayerId).removeAttr('id');

}
*/
/*

function onytplayerStateChange(newState) {
    HandleYTState(newState);
}
*/
function onSliderNextBtn() {
//    alert('onSliderNextBtn');
 //   HandleSliderState(1);
}

function onSliderPrevBtn() {
//    alert('onSliderPrevBtn');
//    HandleSliderState(0);
}


function onVideoClose() {
    HandleVideoClose();
}

