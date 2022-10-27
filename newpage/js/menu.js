window.onload = function(){
    // let home = document.getElementById("main"); home.style.transform = "translate(-33.4%, 0)";
    let websites = document.getElementById("main"); websites.style.transform = "translate(0, -33.4%)";
    // let about = document.getElementById("main"); about.style.transform = "translate(-66.8%, -33.4%)"; 
    // let contact = document.getElementById("main"); contact.style.transform = "translate(-33.4%, -66.8%)";

    var step = 0;

    if(step == 0){
        console.log(step);
        document.getElementById("openNavi").addEventListener("click", showMenu);
        step++; 
    } else {
        console.log(step);
        document.getElementById("closeNavi").addEventListener("click", closeMenu);
        step--;
    }
    
}

function showMenu(){
    document.getElementById("menu").style.transform = "translate(0, 0)";
    let naviChange = document.getElementById("openNavi");
    naviChange.src = "img/icons/linkedin.png";
    naviChange.id ="closeNavi";
    return;
}

function closeMenu(){
    document.getElementById("menu").style.transform = "translate(-320px, 0)";
    let naviChange = document.getElementById("closeNavi");
    naviChange.src = "img/icons/mail.png";
    naviChange.id ="openNavi";
    return;
}

