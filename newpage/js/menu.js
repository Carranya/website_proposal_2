window.onload = function(){
    // let home = document.getElementById("main"); home.style.transform = "translate(-33.4%, 0)";
    let websites = document.getElementById("main"); websites.style.transform = "translate(0, -33.4%)";
    // let about = document.getElementById("main"); about.style.transform = "translate(-66.8%, -33.4%)"; 
    // let contact = document.getElementById("main"); contact.style.transform = "translate(-33.4%, -66.8%)";

    

    
        
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

