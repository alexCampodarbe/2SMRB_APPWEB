const lista = document.querySelector(".lista");
const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    const elementos = document.querySelectorAll(".lista_elemento");
    const li = document.createElement("li");
    
    elementos.forEach(elemento => {
        li.textContent = "yo te gane";
        elemento.parentNode.insertBefore(li, elemento.nextElementSibling);
    });
});