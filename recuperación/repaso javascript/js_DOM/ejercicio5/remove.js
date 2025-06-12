// variables
const lista = document.querySelector(".lista")
const palabra = document.querySelector(".palabra");
const boton = document.querySelector(".boton");

 
boton.addEventListener("click", function(){
    const li = document.createElement("li");
    lista.appendChild(li);
    li.textContent = palabra.value;
    const boton_li = document.createElement("button");
    lista.appendChild(boton_li);
    boton_li.textContent = "eliminar";
    boton_li.addEventListener("click", function(){
        li.remove();
        boton_li.remove();
    });
});