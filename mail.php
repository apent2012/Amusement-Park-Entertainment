<?php // send email

$debug = true;

if (!$debug)
    header( "refresh:5;url=http://www.amusementparkent.com/" );


if (!$debug)
    $to = "info@amusementparkent.com";


$name = $_POST['contact-name'];
$from = $_POST['contact-email'];
$message = $_POST['contact-message'];

$subject = "Message received from www.amusementparkent.com";

$headers = "From:" . $from;
if (!$debug)
    $success = mail($to, $subject, $message, $headers);

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
	color:black;
	opacity: 0.7;
	-moz-opacity: 0.7;
	filter:alpha(opacity=70);
	margin-bottom:22px;
	text-transform:uppercase;
	margin-top:40px;
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
                <a href="index.html#page1" title="Home" id="logo-tab">
                <div class="logo"></div>
                <div class="ape-name"></div>
            </a>
            <div class="nav">
                <a href="index.html#page2" title="About"><span class="about-tab"></span></a>
                <a href="index.html#page3" title="Team"><div class="team-tab"></div></a>
                <a href="index.html#page4" title="Work"><div class="work-tab"></div></a>
                <a href="blog" title="Blog"><div class="blog-tab"></div></a>
                <a href="index.html#page5" title="Contact"><div class="contact-tab"></div></a>
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
                    <h2>FOLLOW APE</h2>
                    <p>
                        <span><a href="https://www.facebook.com/AmusementParkEnt">facebook</a></span><span><a href="http://twitter.com/#!/tweetsfromAP">twitter</a></span>
                    </p>
                </div>
                <div class="footer-content-phone center">
                    <div class="footer-content-phone-castle center"></div>
                    <div class="footer-content-phone-number">tel. +1 213 293 7270</div>
                </div>
                <div class="footer-content-contact">
                    <p class="footer-content-contact-us">CONTACT US</p>
                    <p class="footer-content-contact-address">
                        1913 South Centinela Ave<br />
                        Santa Monica, CA 90404
                    </p>
                    <p>
                        <span><a href="http://maps.google.com/maps?q=1913%2520S%2520Centinela%2520Ave%2C%2520Santa%2520Monica%2C%2520CA&um=1&ie=UTF-8&hl=en&sa=N&tab=wl">view map</a></span>
                    </p>
                </div>
        </div>
    </div>

</body>
</html>