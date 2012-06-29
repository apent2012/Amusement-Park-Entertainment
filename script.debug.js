$(document).ready(function() {

    var _l = function(arg) {
        console.log(arg);
    };



    var pageWidth = 1635;

    // Handles the sliding header and footer.
    //
    (function() {
        // Returns true if the window is scrolled to the top of the page, false if not.
        var isTop = function() {
            var scrollTop = $(window).scrollTop();
            return (scrollTop <= 4);
        };

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
    })();





    // Handles the header nav menu button click events.
    //
    (function() {
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

        var hashes = ['#page1', '#page2', '#page3', '#page4', '#page5', '#page6', '#page7', '#page8', '#page9', '#page10', '#page11', '#page12', '#page13'];
        var hashIndex = $.inArray(window.location.hash, hashes);
        if (hashIndex == -1) hashIndex = 0;

        $('.header a[href$="' + hashes[hashIndex] + '"]').trigger('click');
    })();





    // The home page grid animations.
    //
    (function() {
        /*
        var animateCell = function(sel, delay) {
            if (typeof delay === 'undefined')
                delay = 3000;

            var $animateCell = $(sel);
            var content = $animateCell.html(); //.children('div:first-child')
            var width = $animateCell.width();
            var frameCount = $animateCell.children(':first-child').children().length;
            $animateCell.append(content);

            var i = 0;
            var flashToStart = function() {
                i = 0;
                $animateCell.scrollLeft('0');
            };

            var stepHomeBlock = function() {
                $animateCell.animate({ scrollLeft: (i*width)+'px' },
                    1000, 'easeInOutSine', function() {
                        // Animation complete.
                        if (i%frameCount === 0)
                            flashToStart();

                        i++;
                    });
            };


            setInterval(stepHomeBlock, delay);
        //    $('.home-block-cell').click(stepHomeBlock);


        };
         */
        
        var setUpCellForAnimation = function(sel) {
            var $cellToAnimate = $(sel);

            var content = $cellToAnimate.html(); //.children('div:first-child')
            $cellToAnimate.append(content);

            $cellToAnimate.data('index', 0);
        };

        var setUpCellsForAnimation = function(sels) {
            $.each(sels, function(i, val) {
                setUpCellForAnimation(val);
            });
        };

    //    var i = 0;
        var advanceCell = function(sel) {
            var $cellToAnimate = $(sel);

            var i = $cellToAnimate.data('index');

            var width = $cellToAnimate.width();
            var frameCount = $cellToAnimate.children(':first-child').children().length;

            var flashToStart = function() {
                i = 0;
                $cellToAnimate.data('index', i);
                $cellToAnimate.scrollLeft('0');
            };

            $cellToAnimate.animate({ scrollLeft: ((1+i) * width)+'px' },
                1000,
                'easeInOutSine',
                function() {
                    // Animation complete.
                    if ((1+i)%frameCount === 0)
                        flashToStart();
                    else {
                        i++;
                        $(this).data('index', i);
                    }
                });
        };

        var sels = [ '.home-block-cell1',
            '.home-block-cell2',
            '.home-block-cell3',
            '.home-block-cell4',
            '.home-block-cell5',
            '.home-block-cell6',
            '.home-block-cell7',
            '.home-block-cell8',
            '.home-block-cell9',
            '.home-block-cell10'];

        // Gets a random index betweet 0 and 9.
        var randomIndex = function() {
            return Math.floor(Math.random() * 10);
        };

        setUpCellsForAnimation(sels);

        var stepRandomCell = function() {
            var ri = randomIndex();
            advanceCell(sels[ri]);
        };

        setInterval(stepRandomCell, 4000);

    /*
        animateCell('.home-block-cell1', 2000);
        animateCell('.home-block-cell2', 1800);
        animateCell('.home-block-cell3', 2200);
        animateCell('.home-block-cell4', 2100);
        animateCell('.home-block-cell5', 1500);
        animateCell('.home-block-cell6', 2200);
        animateCell('.home-block-cell7', 1800);
        animateCell('.home-block-cell8', 2000);
        animateCell('.home-block-cell9', 1600);
        animateCell('.home-block-cell10', 1900);
     */

        /*
        (function() {
            var $homeBlock = $('.home-block');
            var content = $homeBlock.html();
        //    var contentWidth = $('.home-block-slider-container').width();
            $homeBlock.append(content);
            
            var i = 1;
            var flashToStart = function() {
            //    console.log('flashing');
                i = 0;
                $('.home-block-container').scrollLeft('0');
            };

            var stepHomeBlock = function() {

                $('.home-block-container').animate({ scrollLeft: (i*327)+'px' },
                    1000, function() {
                        // Animation complete.
                    //    console.log(i%5);

                        if (i%5 === 0)
                            flashToStart();

                        i++;
                    });
            };


            setInterval(stepHomeBlock, 5000);

        //    $('.home-block').click(stepHomeBlock);
        })();
         */
    })();




    // The home page news ticker.
    //
    (function() {
        // Makes an AJAX call to the News Ticker category feed, parses the RSS feed,
        //  injects the information into the home page, then starts the ticker animation.

        var feedURL = '';
        if (typeof Development === 'undefined') {
            // Live
            feedURL = '/blog/?cat=4&feed=rss2';
        }
        else {
            // Test
            feedURL = '/ape/dev/blog/?cat=3&feed=rss2';
        }

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

                            markup = '<span class="share-links"><b>Share:</b> <a href="' + twitterShareURL + '" class="share-link-twitter" target="_blank">Twitter</a>' + ' - <a href="' + facebookShareURL + '" class="share-link-facebook" target="_blank">Facebook</a>' + '</span>';
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
    })();





    // Handles the various down arrows that jump the page down.
    //
    (function() {
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
    })();





    // The scrolling team members.
    //
    (function() {
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
    })();





    // The work gallery.
    //
    (function() {

        var $workSlider = $('.work-block-content-videos-slider');
        var numWorkItems = $workSlider.children().length;

        var workItemWidth = 981;
        $workSlider.css('width', (workItemWidth * numWorkItems)+'px');

        var $curWorkItem;

        $('.work-block-content-videos-slider .work-item').each(function(index, element) {
            var previewUrl = $(element).data('preview');
            if (typeof previewUrl === 'string') {
                $(element).find('.work-still').css('background-image', 'url('+previewUrl+')');
            }

            var vimeoVideoId = $(element).data('video-id');
            if (typeof vimeoVideoId !== 'undefined') {
                $(element).find('.work-still').click(function() {
                    $curWorkItem = $(this);
                    var html = '<iframe src="http://player.vimeo.com/video/' + vimeoVideoId + '" width="981" height="550" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

                    // The video placeholder is on top of the video player to catch click events,
                    // so we'll hide it for now.
                    $curWorkItem.fadeOut(600);

                    // Insert the embedded video iframe into the player element.
                    $('#ytplayer').html(html).fadeIn('slow');

                    // Hide the work square.
                    $('.work-block-content-work').hide('slow');

                    // Show the close button.
                    // Note: this isn't working properly in IE 9 for Windows.
                    $('.work-block-content-video-close').show('slow');

                    $('.work-slider-arrow-right, .work-slider-arrow-left').hide('slow');
                });
            }

            var images = $(element).data('images');
            if (typeof images !== 'undefined') {
                images = images.split(' ');
                var numImages = images.length;
            //    _l(typeof images);
            //    _l(images);
            //    _l(numImages);

                var markup = '<div class="work-gallery-container" style="width:'+(numImages * workItemWidth)+'px">';

                $.each(images, function(index, url) {
                    markup += '<div style="background:url('+url+') 0 0 no-repeat;" class="work-gallery-item"></div>';
                });

                markup += '</div>';

                $(element).find('.work-still').click(function() {
                    $curWorkItem = $(this);

                    $('#ytplayer').html(markup).fadeIn('fast');

                    // Show the close button.
                    // Note: this isn't working properly in IE 9 for Windows.
                    $('.work-block-content-video-close').show('slow');

                    var curImageGalleryIndex = 0;

                    $('.work-slider-arrow-right').unbind('click').click(function() {
                        curImageGalleryIndex++;

                        if (curImageGalleryIndex >= numImages) {
                            curImageGalleryIndex = 0;
                        }

                        // Steps gallery to the right.
                        $('#ytplayer').stop().animate({
                            scrollLeft: (curImageGalleryIndex * workItemWidth)
                        }, 1000, 'easeInOutExpo');
                    });

                    $('.work-slider-arrow-left').unbind('click').click(function() {
                        curImageGalleryIndex--;

                        if (curImageGalleryIndex < 0) {
                            curImageGalleryIndex = numImages - 1;
                        }

                        // Steps gallery to the left.
                        $('#ytplayer').stop().animate({
                            scrollLeft: (curImageGalleryIndex * workItemWidth)
                        }, 1000, 'easeInOutExpo');
                    });
                });
            }
        });

        var curWorkGalleryIndex = 0;
        $('.work-block-content-video-close').click(function() {
            // Closes the video.

            // Reveal the video placeholder again.
            $curWorkItem.fadeIn(300);

            // Unload the embedded video.
            $('#ytplayer').html('');

            // Show the work square and the left/right arrows.
            $('.work-block-content-work').show('slow');
            $('.work-slider-arrow-right, .work-slider-arrow-left').show('slow');

            // Hide the close button.
            $('.work-block-content-video-close').hide('slow');

            $('.work-slider-arrow-right').unbind('click').click(function() {
                curWorkGalleryIndex++;

                if (curWorkGalleryIndex >= numWorkItems) {
                    curWorkGalleryIndex = 0;
                }

                // Steps gallery to the right.
                $('.videos-slider-container').stop().animate({
                    scrollLeft: (curWorkGalleryIndex * workItemWidth)
                }, 1000, 'easeInOutExpo');
            });

            $('.work-slider-arrow-left').unbind('click').click(function() {
                curWorkGalleryIndex--;

                if (curWorkGalleryIndex < 0) {
                    curWorkGalleryIndex = numWorkItems - 1;
                }

                // Steps gallery to the left.
                $('.videos-slider-container').stop().animate({
                    scrollLeft: (curWorkGalleryIndex * workItemWidth)
                }, 1000, 'easeInOutExpo');
            });
        });

        $('.work-slider-arrow-right').click(function() {
            curWorkGalleryIndex++;

            if (curWorkGalleryIndex >= numWorkItems) {
                curWorkGalleryIndex = 0;
            }

            // Steps gallery to the right.
            $('.videos-slider-container').stop().animate({
                scrollLeft: (curWorkGalleryIndex * workItemWidth)
            }, 1000, 'easeInOutExpo');
        });

        $('.work-slider-arrow-left').click(function() {
            curWorkGalleryIndex--;

            if (curWorkGalleryIndex < 0) {
                curWorkGalleryIndex = numWorkItems - 1;
            }

            // Steps gallery to the left.
            $('.videos-slider-container').stop().animate({
                scrollLeft: (curWorkGalleryIndex * workItemWidth)
            }, 1000, 'easeInOutExpo');
        });
    })();



    /*
    // The embedded video player.
    //
    (function() {
        var embeddedVideoId = 'ytplayer';

        // Handles the video click event.
        $('.videoPlaceholder').click(function() {
            // Start playing video.

            // VIMEO VIDEO ID GOES HERE
            var vimeoVideoId = '42184748';



            var html = '<iframe src="http://player.vimeo.com/video/' + vimeoVideoId + '" width="981" height="550" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

            // The video placeholder is on top of the video player to catch click events,
            // so we'll hide it for now.
            $('.videoPlaceholder').hide('slow');

            // Insert the embedded video iframe into the player element.
            $('#ytplayer').html(html);

            // Hide the work square.
            $('.work-block-content-work, #prevBtn, #nextBtn').hide('slow');

            // Show the close button.
            // Note: this isn't working properly in IE 9 for Windows.
            $('.work-block-content-video-close').show('slow');

        });


        HandleVideoClose = function() {
            // Closes the video.

            // Reveal the video placeholder again.
            $('.videoPlaceholder').show('slow');

            // Unload the embedded video.
            $('#ytplayer').html('');

            // Show the work square.
            $('.work-block-content-work, #prevBtn, #nextBtn').show('slow');

            // Hide the close button.
            $('.work-block-content-video-close').hide('slow');
        };
    })();
     */






    // Binds the smooth scroll click handler to the people scroller.
    //
    (function() {
        $('.team-body-people-slider-person').click(SmoothScrollClickEventHandler);
    })();
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



