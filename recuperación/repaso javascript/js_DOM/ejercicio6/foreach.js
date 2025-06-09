
let lista = document.querySelectorAll(".lista_contenido");
let salida_lista =[]
// let lista_contenido = document.querySelectorAll(".lista_contenido")

lista.forEach((elemento, i) =>{
    // let lista_contenido = document.querySelectorAll(".lista_contenido")
    elemento.textContent = "Nuevo elemento " + (i + 1);
    // salida_lista.push(lista.textContent);
})

// const espectaculo_de_errores = document.querySelector(".salida");
// espectaculo_de_errores.textContent = salida_lista;