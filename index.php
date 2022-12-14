<!DOCTYPE html>
<html lnag="de">
<head>
    <meta charset="utf-8">
    <meta http-euqiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Proposal 2</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/menu.js"></script>
</head>
<body>
    <div id="menu">
        <span id="buttonHome" class="menuButton">Home</span>
        <span id="buttonWebsites" class="menuButton">Webseiten</span>
        <span id="buttonAbout" class="menuButton">Über</span>
        <span id="buttonContact" class="menuButton">Kontakt</span>
        <img src='img/icons/hamburger.png' id='openNavi' class='naviPic'></img>
    </div>
    <div id="main">
        <div class="classPage"></div>
        <div id="home" class="classPage"><?php include "pages/home.php"; ?></div>
        <div class="classPage"></div>
        <div id="websites" class="classPage"><?php include "pages/websites.php"; ?></div>
        <div class="classPage"></div>
        <div id="about" class="classPage"><?php include "pages/about.php" ?></div>
        <div class="classPage"></div>
        <div id="contact" class="classPage"><?php include "pages/contact.php"; ?></div>
        <div class="classPage"></div>
    </div>
</body>
</html>