function change()
{
    document.getElementById("btn__cv").style.borderColor= "white";
    document.getElementById("header").style.backgroundImage="url(img/boat.jpg)";
    
    document.getElementById("img__presentation").style.display="none";
    let title= document.getElementById("title").style;
    title.marginTop="0";
    title.paddingTop="9.2em";
}

let btn= document.getElementById("btn__cv");
let btnScd= document.getElementById("btn__profil");
btn.addEventListener("click", change);
btnScd.addEventListener("click", change);

