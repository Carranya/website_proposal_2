window.onload = function(){

    document.getElementById("idHome").addEventListener("click", function(){showPage("home");});
    document.getElementById("idNews").addEventListener("click", function(){showPage("news");});
    document.getElementById("idContact").addEventListener("click", function(){showPage("contact");});
    document.getElementById("idAbout").addEventListener("click", function(){showPage("about");});
}

function showPage(id){

    let content = document.getElementById(id);
    document.getElementById("main").innerHTML = content.innerHTML; 
}
