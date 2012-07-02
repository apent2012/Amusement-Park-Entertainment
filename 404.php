<?php // send email

require("library.inc");


$debug = true;

if (ENVIRONMENT == 'DEVELOPMENT') {
    $root = '/ape/dev';
}
else {
    $debug = false;
    $root = '';
}

$outputMsg = "404 - ride is out of order";


?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Page Not Found</title>
  <link rel="stylesheet" href="reset.css" type="text/css" media="screen"/>
  <link rel="stylesheet" href="style.css" type="text/css" media="screen"/>
  <link rel="stylesheet" href="fonts/futurastd.css" type="text/css" media="screen"/>

<!--  <style>
    ::-moz-selection { background: #fe57a1; color: #fff; text-shadow: none; }
    ::selection { background: #fe57a1; color: #fff; text-shadow: none; }
    html { padding: 30px 10px; font-size: 20px; line-height: 1.4; color: #737373; background: #f0f0f0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    html, input { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }
    body { max-width: 500px; _width: 500px; padding: 30px 20px 50px; border: 1px solid #b3b3b3; border-radius: 4px; margin: 0 auto; box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff; background: #fcfcfc; }
    h1 { margin: 0 10px; font-size: 50px; text-align: center; }
    h1 span { color: #bbb; }
    h3 { margin: 1.5em 0 0.5em; }
    p { margin: 1em 0; }
    ul { padding: 0 0 0 40px; margin: 1em 0; }
    .container { max-width: 380px; _width: 380px; margin: 0 auto; }
    /* google search */
    #goog-fixurl ul { list-style: none; padding: 0; margin: 0; }
    #goog-fixurl form { margin: 0; }
    #goog-wm-qt, #goog-wm-sb { border: 1px solid #bbb; font-size: 16px; line-height: normal; vertical-align: top; color: #444; border-radius: 2px; }
    #goog-wm-qt { width: 220px; height: 20px; padding: 5px; margin: 5px 10px 0 0; box-shadow: inset 0 1px 1px #ccc; }
    #goog-wm-sb { display: inline-block; height: 32px; padding: 0 10px; margin: 5px 0 0; white-space: nowrap; cursor: pointer; background-color: #f5f5f5; background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1); background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1); background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1); background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1); -webkit-appearance: none; -moz-appearance: none; appearance: none; *overflow: visible; *display: inline; *zoom: 1; }
    #goog-wm-sb:hover, #goog-wm-sb:focus { border-color: #aaa; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); background-color: #f8f8f8; }
    #goog-wm-qt:focus, #goog-wm-sb:focus { border-color: #105cb6; outline: 0; color: #222; }
    input::-moz-focus-inner { padding: 0; border: 0; }
  </style> -->

  <style type="text/css">
    h1 {
        font-size:42px;
        color:#737373;
        margin-top:55px;
        margin-bottom:24px;
        text-transform:uppercase;
    }

    .banner {
        width:100%;
        height:202px;
        background-color:#e51c20;
    }

    .banner-logo {
        background: url(images/emaillogo.png) 0 0 no-repeat;
        width:178px;
        height:138px;
        display:inline-block;
        margin-top:35px;
    }

    .email-body {
        min-height:270px;
        font-size:14px;
        color:#474542;
        text-transform: uppercase;
    }

    .header {
        position:relative;
        left:0;
    }

    .header-content {
        left:0;
        display:inline-block;
    }

    .footer {
        z-index:0; 
        bottom:0; 
        height:212px;
        position:relative;
    }

    .footer-content {
        left:0;
        display:inline-block;
    }

    .down-arrow {
        background:url(images/circledown.png) 0 0 no-repeat;
        width:50px;
        height:48px;
        display:inline-block;
        margin-top:21px;
    }
  </style>
</head>
<body>
    <?php echo_apent_header('/ape/dev/'); ?>

    <div class="banner">
      <div class="banner-logo">
      </div>
    </div>

    <div class="email-body futurastd">
    <h1 class="futurastd"><?php echo $outputMsg; ?></h1>
    <p>
sorry for the inconvenience.<br /> 
we are working on the ride.<br />
we will automatically try to redirect you<br />
or click here to be redirected to the site.
    </p>
    <a href="<?php echo $root; ?>/"><div class="down-arrow"></div></a>
    </div>

<!--
  <div class="container">
    <h1>Not found <span>:(</span></h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
    <p>It looks like this was the result of either:</p>
    <ul>
      <li>a mistyped address</li>
      <li>an out-of-date link</li>
    </ul>
    <script>
      var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;
    </script>
    <script src="http://linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js"></script>
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


    <script src="libs/jquery/jquery.js" type="text/javascript"></script>
    <script type="text/javascript" src="libs/nav-rollovers/jquery.bgpos.js"></script>
    <script type="text/javascript" src="libs/easing/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="libs/nav-rollovers/nav-rollovers.js"></script>

</body>
</html>
