<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Proposal 2</title>
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="website_2.js"></script>
</head>
<body>
    <?php require_once "pageFunctions.php"; ?>

    <div id="headline">Head</div>
    <div id="menu">
        <?php
            include "pages/menu.php";    
        ?>
    
    </div>
    <div id="main">
        <?php/*
            if(isset($_GET['page'])){
                changepage($_GET['page']);
            } else {
                include "pages/home.php";
            }
            
        */?> 
    
    </div>
    <div id="footline">Foot</div>
</body>
</html>

