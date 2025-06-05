
let lista = document.querySelectorAll(".lista");
let salida_lista =[]

lista.forEach(lista =>{
    salida_lista.push(lista.textContent);
})

const espectaculo_de_errores = document.querySelector(".salida");
espectaculo_de_errores.textContent = salida_lista;