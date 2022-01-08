window.onload = () => {

    document.getElementById("brand").classList.add("active");

    Array.from(
        document.getElementsByClassName("spidericon")
    ).forEach(
        (element) => element.classList.add("active")
    )




}


document.querySelector('[title = "Tobey Maguire"]').onclick = () => {

    document.getElementById("Tobey").classList.toggle("active");
    document.getElementById("Andrew").classList.remove("active");
    document.getElementById("Tom").classList.remove("active");
    
    document.getElementById("iconnav").style.visibility = "hidden"
    //changeNavVisibility();

}




document.querySelector('[title = "Andrew Garfield"]').onclick = () => {

    document.getElementById("Andrew").classList.toggle("active");
    document.getElementById("Tobey").classList.remove("active");
    document.getElementById("Tom").classList.remove("active");

    //changeNavVisibility();


}


document.querySelector('[title = "Tom Holland"]').onclick = () => {

    document.getElementById("Tom").classList.toggle("active");
    document.getElementById("Andrew").classList.remove("active");
    document.getElementById("Tobey").classList.remove("active");
    
    //changeNavVisibility();

}


const toHome = () =>
{
    document.getElementById("Tom").classList.remove("active");
    document.getElementById("Andrew").classList.remove("active");
    document.getElementById("Tobey").classList.remove("active");
    
}


const changeNavVisibility = () => {
    
    var a = document.getElementById("iconnav").style.visibility;
    
    if(a == "hidden")
    {
        document.getElementById("iconnav").style.visibility = "visible";
    }
    else
    {
        document.getElementById("iconnav").style.visibility = "hidden"
    }
            
}


