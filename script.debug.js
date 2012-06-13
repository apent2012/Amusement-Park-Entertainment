$(document).ready(function() {


    // The home page grid slider.
    //

    var bjqs = function(sel) {
        $(sel).bjqs({
            'width': 327,
            'height': 327,
            'showMarkers': false,
            'showControls': false,
            'centerMarkers': false,
            'hoverPause': false,
            'automatic': true,
            'rotationSpeed': 2000,
            'animation': 'slide',
            'keyboardNav': false
        });
    };

    bjqs('.home-block-slider');
    bjqs('.home-block-slider2');
    bjqs('.home-block-slider3');
    bjqs('.home-block-slider4');
    bjqs('.home-block-slider5');
    bjqs('.home-block-slider6');
    bjqs('.home-block-slider7');
    bjqs('.home-block-slider8');
    bjqs('.home-block-slider9');
    bjqs('.home-block-slider10');






    // The home page news ticker.
    //

    // Makes an AJAX call to the News Ticker category feed, parses the RSS feed,
    //  injects the information into the home page, then starts the ticker animation.

    // > BuildDiff
    var feedURL = '/ape/dev/blog/?cat=3&feed=rss2'; // Test
    // var feedURL = '/blog/?cat=4&feed=rss2';      // Live

    $.getFeed({
        url: feedURL,
        success: function(feed) {
            var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

            var limit = '';
            var html = '<ul>';

            for (var i = 0; i < feed.items.length && i < 5; i++) {

                var item = feed.items[i];
                var publishDate = new Date(item.published);
                var curMonth = publishDate.getMonth();
                var curDay = publishDate.getDate();

                html += '<li><div class="home-body-news-content-body-newsItem">' + '<p class="date">' + m_names[curMonth] + ' ' + curDay + '</p>';

                html += '<p>' + '<span class="home-body-news-content-body-newsItem-title">' + item.title + '</span>' + '</p>' + '<div class="home-body-news-content-body-newsItem-desc">' + item.description + '</div></div></li>';
            }

            html += '</ul>';

            $('.home-body-news-content-body').html(html);

            var shareLinkMarkup = function(shareLink, newsItemTitle) {
                    // Generates share link markup.
                    var markup = '';

                    if (shareLink) {
                        var twitterContent = newsItemTitle + " " + shareLink;
                        var toTwitterShare = encodeURIComponent(twitterContent);
                        var twitterShareURL = 'http://twitter.com/home?status=' + toTwitterShare;

                        var toFacebookShare = encodeURIComponent(shareLink);
                        var facebookShareURL = 'http://www.facebook.com/share.php?u=' + toFacebookShare;

                        markup = '<span class="share-links">Share: <a href="' + twitterShareURL + '" class="share-link-twitter" target="_blank">Twitter</a>' + ' - <a href="' + facebookShareURL + '" class="share-link-facebook" target="_blank">Facebook</a>' + '</span>';
                    }

                    return markup;
                };

            $('.home-body-news-content-body-newsItem a').each(function(index) {
                // Extracts the external link from the post body.
                var shareLink = $(this).attr('href');

                // Appends share link markup to the end of the news ticker body.
                var newsItemDesc = $(this).parent();
                var newsItemTitle = newsItemDesc.parent().find('.home-body-news-content-body-newsItem-title').html();
                newsItemDesc.append(shareLinkMarkup(shareLink, newsItemTitle));
            });




            // Start ticker animation.
            $(".home-body-news-content-body").jCarouselLite({
                vertical: true,
                visible: 1,
                auto: 4000,
                speed: 1500,
                hoverPause: true
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            var errorMsg = '<p><span class="news-error">Failed to load RSS feed.</span></p>';

            $('.home-body-news-content-body').html(errorMsg);
        }
    });




    // The scrolling team members.
    //
    $(".JMyCarousel").smoothDivScroll({
        mousewheelScrolling: false,
        manualContinuousScrolling: true,
        visibleHotSpotBackgrounds: "always",
        easingAfterHotSpotScrolling: true,
        'windowResized': function() {
            // Taking advantage of this extension's windowResized event to reposition the window.
            var hash = window.location.hash;
            var hashSelectors = {
                '#page1': 'a.home-tab-link',
                '#page2': 'a.about-tab-link',
                '#page3': 'a.team-tab-link',
                '#page4': 'a.work-tab-link',
                '#page5': 'a.contact-tab-link'
            };

            $(hashSelectors[hash]).click();
        }
    });




    // Handles the sliding header and footer.
    //
    var pageWidth = 1635;

    // Returns true if the window is scrolled to the top of the page, false if not.


    function isTop() {
        var scrollTop = $(window).scrollTop();
        return (scrollTop <= 4);
    }

    // Gets the document height.
    $.getDocHeight = function() {
        var D = document;
        return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
    };

    // Returns true if the window is scrolled to the bottom of the page, false if not.


    function isBottom() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $.getDocHeight();
        var diff = docHeight - windowHeight;

        return (scrollTop >= diff - 4);
    }

    // 0 is inactive, 1 is sliding out, 2 is active, 3 is sliding in
    var headerState = 0,
        footerState = 0;
    var UpdateHeaderAndFooter = function() {
            var blockHeight = $('#content').height();
            var scrollTop = $('#content').scrollTop();
            var windowHeight = $(window).height();

            var detect = blockHeight - windowHeight;

            if (isTop()) {
                // The window's scrolled to the page top.
                if (headerState === 0) {

                    headerState = 1;

                    $('.header').show().animate({
                        top: '+=60'
                    }, 300, function() {
                        // Animation complete.
                        headerState = 2;
                    });
                }
            } else if (isBottom()) {
                // The window's scrolled to the page bottom.
                if (footerState === 0) {

                    footerState = 1;

                    $('.footer').show().animate({
                        bottom: '+=212'
                    }, 300, function() {
                        // Animation complete.
                        footerState = 2;
                    });
                }
            } else {
                // The window's not scrolled to the page top or page bottom.
                if (headerState == 2) {
                    // If the header is active, slide it back in.
                    headerState = 3;

                    $('.header').animate({
                        top: '-=60'
                    }, 300, function() {
                        // Animation complete.
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
                        footerState = 0;
                        $('.footer').hide();
                    });
                }

            }
        };

    UpdateHeaderAndFooter();
    $(window).scroll(UpdateHeaderAndFooter);





    // Handles the header nav menu button click events.
    //
    $('.header-content a').bind('click', function(event) {
        var $anchor = $(this);

        var gapWidth = 0;

        var windowWidth = $(window).width();
        var windowCenter = windowWidth / 2;
        var pageCenter = pageWidth / 2;
        var centeringOffset = pageCenter - windowCenter;
        var headerOffset = 327 - centeringOffset;

        if (headerOffset >= 327) headerOffset = 327;

        var offsets = {
            '#page1': (pageWidth * 0 + gapWidth) + centeringOffset,
            '#page2': (pageWidth * 1 + gapWidth) + centeringOffset,
            '#page3': (pageWidth * 2 + gapWidth) + centeringOffset,
            '#page4': (pageWidth * 3 + gapWidth) + centeringOffset,
            '#page5': (pageWidth * 4 + gapWidth) + centeringOffset,
            '#page6': (pageWidth * 5 + gapWidth) + centeringOffset
        };

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
    });




    // Handles the various down arrows that jump the page down.
    //
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





    // The embedded video player.
    //
    var embeddedVideoId = 'ytplayer';

    // Handles the video click event.
    $('.videoPlaceholder').click(function() {
        // Start playing video.

        // VIMEO VIDEO ID GOES HERE
        var vimeoVideoId = '42184748';



        var html = '<iframe src="http://player.vimeo.com/video/' + vimeoVideoId + '" width="981" height="550" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

        $('.videoPlaceholder').hide('slow');
        $('#ytplayer').html(html);

        // Hide the work square.
        $('.work-block-content-work, #prevBtn, #nextBtn').hide('slow');

        // Show the close button.
        // Note: this isn't working properly in IE 9 for Windows.
        $('.work-block-content-video-close').show('slow');

    });


    var hashes = ['#page1', '#page2', '#page3', '#page4', '#page5', '#page6', '#page7', '#page8', '#page9', '#page10', '#page11', '#page12', '#page13'];
    var hashIndex = $.inArray(window.location.hash, hashes);
    if (hashIndex == -1) hashIndex = 0;

    $('.header a[href$="' + hashes[hashIndex] + '"]').trigger('click');

    HandleVideoClose = function() {
        $('.videoPlaceholder').show('slow');
        $('#ytplayer').html('');

        // Show the work square.
        $('.work-block-content-work, #prevBtn, #nextBtn').show('slow');

        // Hide the close button.
        $('.work-block-content-video-close').hide('slow');
    };


    // Binds the smooth scroll click handler to the people scroller.
    $('.team-body-people-slider-person').click(SmoothScrollClickEventHandler);


});





// People slider click event.
//
SmoothScrollClickEventHandler = function(event) {
    if (window.$) {
        // jQuery is loaded.
        if ($(this).hasClass('person-gap')) return;

        var searchIn = $(this).parent().children();
        var searchFor = $(this);
        var indexOf = searchIn.index(searchFor);

        // Build the bio panel.
        var clonedThis = $(this).clone();
        var thisOffset = $(this).offset().left;
        var thisPosition = $(this).position();

        var trailingStartOffset = $(searchIn[indexOf + 1]).position().left;

        var leadingSlice = searchIn.slice(0, indexOf + 1);
        leadingSlice.wrapAll('<div class="leading-slice"></div>');

        var trailingSlice = searchIn.slice(indexOf + 1);
        trailingSlice.wrapAll('<div class="trailing-slice"></div>');
        $('.trailing-slice').css('margin-left', trailingStartOffset + 'px');

        $(this).children('.team-body-people-slider-person-text').css('display', 'block');
        $('.JMyCarousel').append('<div class="bio-panel-close-button" onclick="javascript:CloseBioPanel();"></div>');

        $('.scrollingHotSpotLeft').css('display', 'none');
        $('.scrollingHotSpotRight').css('display', 'none');

        $('.team-body-people-slider-person-redsq').css('cursor', 'default');

        var events = $('.team-body-people-slider-person').data("events");
        var eventHandler = events.click[0].handler;
        $('.team-body-people-slider-person').unbind('click');


        // Display the bio panel.
        var pos = $(this).position();
        var scrollLeft = $(this).parent().parent().parent().scrollLeft();
        var leadingLeftAnim = scrollLeft - pos.left + 327; //327 - pos.left;
        var trailingPos = $('.trailing-slice');
        var trailingLeftAnim = 1308 + scrollLeft;


        // Animate the opening bio panel.
        $('.leading-slice').stop().animate({
            'margin-left': leadingLeftAnim + 'px'
        }, 1000, 'easeInOutExpo');

        $('.trailing-slice').stop().animate({
            'margin-left': trailingLeftAnim + 'px'
        }, 1000, 'easeInOutExpo', function() {
            $('.bio-panel-close-button').fadeIn('slow');
        });


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
                'margin-left': trailingStartOffset + 'px'
            }, 1000, 'easeInOutExpo', function() {
                $('.team-body-people-slider-person-text').css('display', 'none');

                $(this).children().unwrap();

                $('.scrollingHotSpotLeft').css('display', 'block');
                $('.scrollingHotSpotRight').css('display', 'block');

                $('.team-body-people-slider-person-redsq').css('cursor', 'pointer');
                $('.person-gap .team-body-people-slider-person-redsq').css('cursor', 'default');
                $('.team-body-people-slider-person').click(eventHandler);
            });
        };
    }
};





// Triggers when the video is closed.
//

function onVideoClose() {
    if (typeof HandleVideoClose == 'function') HandleVideoClose();
};