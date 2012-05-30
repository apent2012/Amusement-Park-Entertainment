// Preload priority images here
var pimg=new Image();
pimg.src='images/loader.gif';

$(document).ready(function(){
    $(function() {
        var gapWidth = 0;

/*
        $.preLoadGUI({
          message: '',
          ending_message: '',
          bgOpacity: 1.0,
          load: [
            ['http://www.yngest.com/ape-theme/images/home-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/team-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/contact-block.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/workbox1.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/reelstill.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/workbox3.jpg', 'img'],
            ['http://www.yngest.com/ape-theme/images/bigpark_a.png', 'img'],
            ['http://www.yngest.com/ape-theme/images/asqp-im5.gif', 'img']
        ]});
*/

        $(".JMyCarousel").smoothDivScroll({
            mousewheelScrolling: false
            ,manualContinuousScrolling: true
            ,visibleHotSpotBackgrounds: "always"
            ,easingAfterHotSpotScrolling: true
            ,'windowResized': function() {
            //    var scrollLeft = $('#content').scrollLeft();
            //    console.log(scrollLeft);
                var hash = window.location.hash;
                var hashSelectors = {
                    '#page1': 'a.home-tab-link'
                    ,'#page2': 'a.about-tab-link'
                    ,'#page3': 'a.team-tab-link'
                    ,'#page4': 'a.work-tab-link'
                    ,'#page5': 'a.contact-tab-link'
                };

            //    console.log(hash);
                $(hashSelectors[hash]).click();
            }
        //  ,easingAfterHotSpotScrollingDistance: 327
        //  ,autoScrollingStep: 327
        //  ,autoScrollingMode: "onstart"
        });

       // home-body-news-content-rss
       // http://127.0.0.1/ape/dev/blog/?cat=3&feed=rss2
     //  var feedURL = 'http://feeds.reuters.com/reuters/oddlyEnoughNews';
       var feedURL = '/ape/dev/blog/?cat=3&feed=atom';
        $.getFeed({
           url: feedURL,
           success: function(feed) {
        
/*
<div class="home-body-news-content-body-newsItem">
<p class="date">
    May 25
</p>
<p>
<span>Jimmy Smith Discusses Intellectual Property<br /> by <a href="http://www.bloomberg.com/video/93464009-jimmy-smith-discusses-intellectual-property.html" target="_blank"><em>Bloomberg</em></a></span>
</p>
*/
        /*
            jQuery('.home-body-news-content-body').append('<h2>'
                + '<a href="'
                + feed.link
                + '">'
                + feed.title
                + '</a>'
                + '</h2>');
         */       
                var m_names = new Array("Jan", "Feb", "Mar", 
                "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
                "Oct", "Nov", "Dec");

                var limit = '';
                var html = '<ul>';
                
                for(var i = 0; i < feed.items.length && i < 5; i++) {
                
                    var item = feed.items[i];
                    var publishDate = new Date(item.published);
                    var curMonth = publishDate.getMonth();
                    var curDay = publishDate.getDate();

                    
                    html += '<li><div class="home-body-news-content-body-newsItem">'
                    + '<p class="date">'
                    + m_names[curMonth] + ' ' + curDay
                    + '</p>';
                    
                    html += '<p>'
                    + '<span>'
                    + item.title
                    + '</span>'
                    + '</p>'
                    + item.description
                    + '</div></li>';

                //    console.log(item.link);
                }

                html += '</ul>';
                
                jQuery('.home-body-news-content-body').append(html);


                // Start ticker animation.
                $(".home-body-news-content-body").jCarouselLite({
                        vertical: true,
                        visible: 1,
                        auto:4000,
                        speed:1500,
                        hoverPause: true
                    });
            } 
        });       

   /*
        $(".JMyCarousel").jMyCarousel({
           visible: '100%',
           eltByElt: true,
           speed: 600,
           btnPrev: '.prev',
           btnNext: '.next',
           start: -327
       });
*/
    /*
    // Creating hoverscroll with fixed arrows
    $('.JMyCarousel ul').hoverscroll({
        arrows: false,
        fixedArrows: true,
        width:      1635, //981,        // Width of the list
        height:     327         // Height of the list
    });
    // Starting the movement automatically at loading
    // @param direction: right/bottom = 1, left/top = -1
    // @param speed: Speed of the animation (scrollPosition += direction * speed)
    var direction = -1,
        speed = 3;
    $('.JMyCarousel ul')[0].startMoving(direction, speed);
*/



    $('.team-body-people-slider-person').click(PeopleSliderMouseoutHandler);




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
/*
        $('#people-slider').easySlider({
            auto: false, 
            continuous: true,
            prevId:'peoplePrevBtn',
            nextId:'peopleNextBtn',
            pageWidth:327*5,
            pageHeight:327,
            prevText:'',
            nextText:''
        });
*/
/*
        // Handles clicks of team names.
        $('.team-body-people-slider-person-redsq').bind('click', function(event) {
            var searchIn = $(this).parent().parent().children();
            var searchFor = $(this).parent();
            var indexOf = searchIn.index(searchFor);

            console.log(searchIn); // 'div :not(:first-child)'
            console.log(searchFor); // 'div :not(:first-child)'
            console.log(indexOf); // 'div :not(:first-child)'



        //    $('.team-body-people-slider-person').css('margin-left', '0');

            // Make the bio visible.        
            $(searchIn[indexOf]).children('.team-body-people-slider-person-text').css('display', 'block');
            if (indexOf == 0) {
                $(searchIn[indexOf+1]).stop().animate({
                    'margin-left': '654px'
                }, 1000, 'easeInOutExpo');
            }
            else if (indexOf == 1) {
                $(searchIn[indexOf]).stop().animate({
                    'margin-left': '-327px'
                }, 1000, 'easeInOutExpo');

                $(searchIn[indexOf+1]).stop().animate({
                    'margin-left': '654px'
                }, 1000, 'easeInOutExpo');
            }
            
        });

        $('.team-body-people-slider-container').mousemove(event, function() {

            var windowWidth = $(window).width();
            var horizPos = event.x;
            var scrollVel = horizPos - (windowWidth / 2);
            console.log(scrollVel);

            var deadZoneWidth = 200;
            

        });
*/

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
*/

        HandleSliderState = function(sliderState) {
           // Possible values are:
           // previous (0), next (1)

           /*
            $('.team-body-people-slider-person').stop().animate({
                'margin-left': '-654px'
            }, 1000, 'easeInOutExpo');

*/

        /*
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
        */
        };

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
    HandleSliderState(1);
}

function onSliderPrevBtn() {
//    alert('onSliderPrevBtn');
    HandleSliderState(0);
}


function onVideoClose() {
    HandleVideoClose();
}

function PeopleSliderMouseoutHandler(event) {
    if ($(this).hasClass('person-gap'))
        return;

    var searchIn = $(this).parent().children();
    var searchFor = $(this);
    var indexOf = searchIn.index(searchFor);

//    console.log(indexOf); // 'div :not(:first-child)'

// Build the bio panel.
/*
    $('.bio-display .leading-bios').append($(searchIn[indexOf-3]).clone().css({
        'margin-left': '-1143px', // $(searchIn[indexOf-3]).offset().left+'px', 
        'position': 'absolute',
        'width': '981px'
    }));
    $('.bio-display .leading-bios').append($(searchIn[indexOf-2]).clone().css({
        'margin-left': '-816px', // $(searchIn[indexOf-2]).offset().left+'px', 
        'position': 'absolute',
        'width': '981px'
    }));
    $('.bio-display .leading-bios').append($(searchIn[indexOf-1]).clone().css({
        'margin-left': '-489px', // $(searchIn[indexOf-1]).offset().left+'px', 
        'position': 'absolute',
        'width': '981px'
    }));
*/
    var clonedThis = $(this).clone();
    var thisOffset = $(this).offset().left;
    var thisPosition = $(this).position();

    var trailingStartOffset = $(searchIn[indexOf+1]).position().left;
 //   console.log(trailingStartOffset);

 //   var squareIndex = thisOffset / 327;
//  console.log('thisOffset: '+thisOffset+', thisPosition: '+thisPosition);
//  console.log(thisPosition);

//    var leadingBiosAnimOffset = thisOffset;
 //   var trailingBiosOffset = thisOffset + 327;
  //  var trailingBiosAnimOffset = trailingBiosOffset + 654;
  //  var startPositions = [-162];

//  console.log('trailingBiosOffset: '+trailingBiosOffset+', trailingBiosAnimOffset: '+trailingBiosAnimOffset+', thisOffset: '+thisOffset);

    var leadingSlice = searchIn.slice(0, indexOf+1);
    leadingSlice.wrapAll('<div class="leading-slice"></div>');

    var trailingSlice = searchIn.slice(indexOf+1)
    trailingSlice.wrapAll('<div class="trailing-slice"></div>');
    $('.trailing-slice').css('margin-left', trailingStartOffset+'px');

    $(this).children('.team-body-people-slider-person-text').css('display', 'block');
    $('.JMyCarousel').append('<div class="bio-panel-close-button" onclick="javascript:CloseBioPanel();"></div>');

    $('.scrollingHotSpotLeft').css('display', 'none');
    $('.scrollingHotSpotRight').css('display', 'none');

    $('.team-body-people-slider-person-redsq').css('cursor', 'default');

    var events = $('.team-body-people-slider-person').data("events");
    var eventHandler = events.click[0].handler;
    $('.team-body-people-slider-person').unbind('click');


//    $('.bio-display').html(searchIn);

//    $('.bio-display .leading-bios').append(clonedThis.css({
//        'margin-left': thisPosition.left, //'-162px',
//        'position': 'absolute',
//        'width': '981px'
//    }));

    /*
    $('.bio-display .trailing-bios').css('margin-left', trailingBiosOffset+'px');

    $('.bio-display .trailing-bios').append($(searchIn[indexOf+1]).clone().css({
        'margin-left': '0',
        'position': 'absolute'
    }));
    $('.bio-display .trailing-bios').append($(searchIn[indexOf+2]).clone().css({
        'margin-left': '327px',
        'position': 'absolute'
    }));
    $('.bio-display .trailing-bios').append($(searchIn[indexOf+3]).clone().css({
        'margin-left': '654px',
        'position': 'absolute'
    }));
    $('.bio-display .trailing-bios').append($(searchIn[indexOf+4]).clone().css({
        'margin-left': '981px',
        'position': 'absolute'
    }));
*/
    // Display the bio panel.
//      $('.bio-display').css('display', 'block');

    var pos = $(this).position(); 
    var scrollLeft = $(this).parent().parent().parent().scrollLeft();
    var leadingLeftAnim = scrollLeft - pos.left + 327; //327 - pos.left;

    var trailingPos = $('.trailing-slice');
    var trailingLeftAnim = 1308 + scrollLeft;
 //   console.log(trailingLeftAnim);

    // Animate the opening bio panel.
    $('.leading-slice').stop().animate({
        'margin-left': leadingLeftAnim+'px'
    }, 1000, 'easeInOutExpo');

    $('.trailing-slice').stop().animate({
        'margin-left': trailingLeftAnim+'px'
    }, 1000, 'easeInOutExpo', function() {
        $('.bio-panel-close-button').fadeIn('slow');
    });


/*
    $('.bio-display .trailing-bios').stop().animate({
        'margin-left': trailingBiosOffset+650+'px'
    }, 1000, 'easeInOutExpo', function() {
        $('.bio-panel-close-button').fadeIn('slow');
    });
*/        
//  console.log('leadingBiosAnimOffset: '+leadingBiosAnimOffset);

    CloseBioPanel = function() {
        // Animate the closing bio panel.
        $('.bio-panel-close-button').fadeOut('fast', function() {
            $(this).remove();
        });

        $('.leading-slice').stop().animate({
            'margin-left': '0'
        }, 1000, 'easeInOutExpo', function() {
            $(this).children().unwrap();
        });

        $('.trailing-slice').stop().animate({
            'margin-left': trailingStartOffset+'px'
        }, 1000, 'easeInOutExpo', function() {
            $('.team-body-people-slider-person-text')
                .css('display', 'none');

            $(this).children().unwrap();

            $('.scrollingHotSpotLeft').css('display', 'block');
            $('.scrollingHotSpotRight').css('display', 'block');

            $('.team-body-people-slider-person-redsq').css('cursor', 'pointer');
            $('.person-gap .team-body-people-slider-person-redsq').css('cursor', 'default');
            $('.team-body-people-slider-person').click(eventHandler);
        });


        /*
        $('.bio-panel-close-button').fadeOut('slow');
        
        $('.bio-display .leading-bios').stop().animate({
            'margin-left': '0'
        }, 1000, 'easeInOutExpo');
        
        $('.bio-display .trailing-bios').stop().animate({
            'margin-left': trailingBiosOffset-4+'px'
        }, 1000, 'easeInOutExpo', function() {
            $('.leading-bios').html('');
            $('.trailing-bios').html('');
            $('.bio-display').css('display', 'none');
        });
        */
    };
}

