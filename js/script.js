function change()
{
    document.getElementById("btn__cv").style.borderColor= "white";
    document.getElementById("header").style.backgroundImage="url(img/boat.jpg)";
    
    document.getElementById("img__presentation").style.display="none";
    let title= document.getElementById("title").style;
    title.marginTop="0";
    title.paddingTop="7.2em";
}

let btn= document.getElementById("btn__cv");
btn.addEventListener("click", change);