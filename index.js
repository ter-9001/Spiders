window.onload = () => {


      const resposta = confirm("ALERTA!!!! Esse site contem spoilers de "+
      "No Way Home, deseja continuar ?");
      
      if(resposta != true)
      {
        alert("Saindo...");
        window.location.replace("http://www.google.com/");
      }





    document.getElementById("brand").classList.add("active");

    Array.from(
        document.getElementsByClassName("spidericon")
    ).forEach(
        (element) => element.classList.add("active")
    )




}


document.querySelector("#tinymenu").onclick = () =>
{
    document.querySelector("#tinymenu").classList.toggle("active");
    document.getElementById("iconnav").classList.toggle("active");
}



document.querySelector('[title = "Tobey Maguire"]').onclick = () => {

    document.getElementById("Tobey").classList.toggle("active");
    document.getElementById("Andrew").classList.remove("active");
    document.getElementById("Tom").classList.remove("active");
    
    document.getElementById("iconnav").classList.remove("active");
    //changeNavVisibility();

}




document.querySelector('[title = "Andrew Garfield"]').onclick = () => {

    document.getElementById("Andrew").classList.toggle("active");
    document.getElementById("Tobey").classList.remove("active");
    document.getElementById("Tom").classList.remove("active");

    document.getElementById("iconnav").classList.remove("active");
    //changeNavVisibility();


}


document.querySelector('[title = "Tom Holland"]').onclick = () => {

    document.getElementById("Tom").classList.toggle("active");
    document.getElementById("Andrew").classList.remove("active");
    document.getElementById("Tobey").classList.remove("active");
    
    document.getElementById("iconnav").classList.remove("active");
    //changeNavVisibility();

}


const toHome = () =>
{
    document.getElementById("Tom").classList.remove("active");
    document.getElementById("Andrew").classList.remove("active");
    document.getElementById("Tobey").classList.remove("active");

    document.getElementById("iconnav").classList.remove("active");
    document.getElementById("tinymenu").classList.remove("active");
    
    
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


