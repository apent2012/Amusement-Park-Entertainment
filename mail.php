<?php // send email

if (!defined('ENVIRONMENT')) {
    if ($_SERVER['HTTP_HOST'] == 'localhost') {
        define('ENVIRONMENT', 'DEVELOPMENT');
    }
    else {
        define('ENVIRONMENT', 'PRODUCTION');
    }
}

$debug = true;
$to = '';

if (ENVIRONMENT == 'DEVELOPMENT') {
    $root = '/ape/dev';
}
else {
    $debug = false;
    $root = '';
    header( "refresh:5;url=http://www.amusementparkentertainment.com/" );
    $to = "info@amusementparkent.com";
}


if (isset($_POST['contact-name']))
    $name = $_POST['contact-name'];

$from = '';
if (isset($_POST['contact-email'])) {
    $from = $_POST['contact-email'];
}

$message = '';
if (isset($_POST['contact-message']))
    $message = $_POST['contact-message'];

$subject = "Message received from www.amusementparkentertainment.com";

$success = 0;
$headers = "From:" . $from;
if (ENVIRONMENT == 'PRODUCTION') {
    if ($to)
        $success = mail($to, $subject, $message, $headers);
}

$outputMsg = "Your message could not be sent at this time.";

if ($success) {
	$outputMsg = "Thank you for your email.";
}

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta content="text/html; charset=iso-8859-1" http-equiv="Content-Type"/>

<title>Amusement Park Entertainment</title>

<link rel="stylesheet" href="reset.css" type="text/css" media="screen"/>
<link rel="stylesheet" href="style.css" type="text/css" media="screen"/>
<link rel="stylesheet" href="fonts/futurastd.css" type="text/css" media="screen"/>



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


    <div class="header" style="top:0px;">
        <div class="header-content">
                <a href="<?php echo $root; ?>/#page1" title="Home" id="logo-tab">
                <div class="logo"></div>
                <div class="ape-name"></div>
            </a>
            <div class="nav">
                <a href="<?php echo $root; ?>/#page2" title="About" class="about-tab-link">
                  <div class="about-tab nav-tab"></div></a>
                <a href="<?php echo $root; ?>/#page3" title="Team" class="team-tab-link">
                  <div class="team-tab nav-tab"></div></a>
                <a href="<?php echo $root; ?>/#page4" title="Work" class="work-tab-link">
                  <div class="work-tab nav-tab"></div></a>
                <a href="<?php echo $root; ?>/blog/" title="Blog" class="blog-tab-link">
                  <div class="blog-tab nav-tab"></div></a>
                <a href="<?php echo $root; ?>/#page5" title="Contact" class="contact-tab-link">
                  <div class="contact-tab nav-tab"></div></a>
            </div>
            <div class="clear"></div>
        </div>
    </div>



<div class="banner">
	<div class="banner-logo">
	</div>
</div>

<div class="email-body futurastd">
<h1 class="futurastd"><?php echo $outputMsg; ?></h1>
<p>
WE WILL AUTOMATICALLY TRY TO REDIRECT YOU.<br />
CLICK HERE TO BE REDIRECTED TO THE SITE.
</p>
<a href="/"><div class="down-arrow"></div></a>
</div>




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

</body>
</html>