
// The loader animation is a carousel/ferris wheel.

$(document).ready(function() {

    var DegreesToRadians = function(degrees) {
        var pi = 3.141592653589793;
        return (degrees * (pi / 180));
    };

    var CarPosition = function(angleInDegrees) {
        var size = { width:8, height:10 };
        var center = { x:51, y:51 };
        var pos = { x:(center.x - size.width/2), y:(center.y - size.height/2) };
        var radius = 34;
        var angleInRadians = DegreesToRadians(angleInDegrees);

        pos.x = Math.floor(pos.x + (radius * Math.cos(angleInRadians)));
        pos.y = Math.floor(pos.y + (radius * Math.sin(angleInRadians)));

        return pos;
    };

    var carAngleOffsets = [];
    var SetUpCars = function(count) {
        var pos, car;
        for (var i = 0; i < count; i++) {
            carAngleOffsets.push(i * (360/count));
            pos = CarPosition(carAngleOffsets[i]);
            car = $('<div class="lr"></div>').css({
                left:pos.x,
                top:pos.y
            });

            $('.loader-wrapper-circle').append(car);
        }

        $('.lr').delay(230).fadeIn();
    };

    var stepDuration = 300;
    var nextPos = 0;
    var StepToPosition = function(nextAngle, count) {
        for (var i = 0; i < count; i++) {
            nextPos = CarPosition(nextAngle+carAngleOffsets[i]);
            $('.lr:nth-child('+(i+1)+')').animate({
                left:nextPos.x,
                top:nextPos.y
            }, stepDuration, 'linear');
        }
    };

    var i = 0;
    var stepDistanceInAngles = 20;
    var intervalId;

    var SetUpLoader = function(count) {
        $('.loader-wrapper .loader-wrapper-circle').fadeIn();
        SetUpCars(count);

        intervalId = setInterval(function() {
            StepToPosition(i, count);
            i += stepDistanceInAngles;
            if (i >= 360)
                i = 0;
        }, stepDuration);

    };

    var TakeDownLoader = function() {
        $('.loader-wrapper .loader-wrapper-circle').fadeOut(function() {
            clearInterval(intervalId);
        });
    };


    SetUpLoader(12);

    $('.preloaded-images').imagesLoaded( function( $images, $proper, $broken ) {
      // callback provides three arguments:
      // $images: the jQuery object with all images
      // $proper: the jQuery object with properly loaded images
      // $broken: the jQuery object with broken images
      // `this` is a jQuery object of container

    //  console.log( $images.length + ' images total have been loaded in ' + this );
    //  console.log( $proper.length + ' properly loaded images' );
    //  console.log( $broken.length + ' broken images' );

      TakeDownLoader();
    });
});