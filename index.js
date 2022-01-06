window.onload = () => {

    document.getElementById("brand").classList.add("active");

    Array.from(
        document.getElementsByClassName("spidericon")
    ).forEach(
        (element) => element.classList.add("active")
    )




}


document.querySelector('[title = "Tobey Maguire"]').onclick = () => 
{
    
    document.getElementById("Tobey").classList.toggle("active");

    document.getElementById("iconnav").style.visibility = "hidden";   
}




document.querySelector('[title = "Andrew Garfield"]').onclick = () => 
{
    
    document.getElementById("Andrew").classList.toggle("active");

    document.getElementById("iconnav").style.visibility = "hidden";   
}