
const lista = document.querySelectorAll(".lista_elemento");
const boton = document.querySelector(".boton");
const elementos = document.querySelector(".lista_elemento_diferente");

boton.addEventListener("click",function(){
    const li=document.createElement("li");
    elementos.parentNode.insertBefore(li,elementos.nextSibling);

});