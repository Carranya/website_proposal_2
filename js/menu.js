window.onload = function(){

    let firstVisit = document.getElementById("home");
    document.getElementById("main").innerHTML = firstVisit.innerHTML;

    document.getElementById("idHome").addEventListener("click", function(){showPage("home");});
    document.getElementById("idWebsites").addEventListener("click", function(){showPage("websites");});
    document.getElementById("idContact").addEventListener("mouseover", function(){showPage("contact");});
    document.getElementById("idAbout").addEventListener("mouseover", function(){showPage("about");});
}

function showPage(id){

    let content = document.getElementById(id);
    document.getElementById("main").innerHTML = content.innerHTML; 
}
