window.onload = function(){

    document.getElementById("buttonHome").addEventListener("click", openHome);
    document.getElementById("buttonAbout").addEventListener("click", openAbout);
    document.getElementById("buttonWebsites").addEventListener("click", openWebsites);
    document.getElementById("buttonContact").addEventListener("click", openContact);

    let home = document.getElementById("main"); home.style.transform = "translate(-33.4%, 0)";

    document.getElementById("openNavi").addEventListener("mouseover", showMenu);
    document.getElementById("openNavi").addEventListener("click", closeMenu);
}

function showMenu(){
    document.getElementById("menu").style.transform = "translate(0, 0)";
    document.getElementById("openNavi").src = "img/icons/close.png";
}

function closeMenu(){
    document.getElementById("menu").style.transform = "translate(-320px, 0)";
    document.getElementById("openNavi").src = "img/icons/hamburger.png";
}

function openHome(){
    document.getElementById("main").style.transform = "translate(-33.4%, 0)";
    closeMenu(); 
}

function openAbout(){
    document.getElementById("main").style.transform = "translate(-66.8%, -33.4%)"; 
    closeMenu();
}

function openWebsites(){
    document.getElementById("main").style.transform = "translate(0, -33.4%)"; 
    closeMenu();
}

function openContact(){
    document.getElementById("main").style.transform = "translate(-33.4%, -66.8%)";
    closeMenu();
}

