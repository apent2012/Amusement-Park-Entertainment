<html>
<head>
<title>Tutorial theme</title>
<link rel="stylesheet" href="../reset.css" type="text/css" media="screen"/>
<link rel="stylesheet" href="../fonts/futurastd.css" type="text/css" media="screen"/>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
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
  <div id="wrapper">
    <div class="header" style="top:0px;">
        <div class="header-content">
                <a href="../index.html#page1" title="Home" id="logo-tab">
                <div class="logo"></div>
                <div class="ape-name"></div>
            </a>
            <div class="nav">
                <a href="../index.html#page2" title="About"><span class="about-tab"></span></a>
                <a href="../index.html#page3" title="Team"><div class="team-tab"></div></a>
                <a href="../index.html#page4" title="Work"><div class="work-tab"></div></a>
                <a href="" title="Blog"><div class="blog-tab"></div></a>
                <a href="../index.html#page5" title="Contact"><div class="contact-tab"></div></a>
            </div>
            <div class="clear"></div>
        </div>
    </div>    