
const boton = document.querySelector(".boton");
const imagen = document.querySelector(".imagen");

boton.addEventListener("click", function(){
    imagen.getAttribute("src");
    imagen.setAttribute("src", "../img/shayan.jpg");
});