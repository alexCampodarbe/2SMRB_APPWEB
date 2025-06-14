//variables
const boton_oscuro = document.querySelector(".cabecero__navegador__boton_oscuro");
const boton_ampliar = document.querySelector(".cabecero__navegador__boton_ampliar");
const cabecero = document.querySelector(".cabecero");
const principal1 = document.querySelector(".principal__seccion1");
const principal2 = document.querySelector(".principal__seccion2");
const pie = document.querySelector(".pie");
const flecha_derecha = document.querySelector(".principal_seccion2_imagenes_figura_boton_derecha");
const flecha_izquierda = document.querySelector(".principal_seccion2_imagenes_figura_boton_izquierda");
const boton_principal = document.querySelector(".principal__seccion1__boton");
const titulo_pie_lista = document.querySelectorAll(".pie_seccion__listas__titulo")
const cuerpo = document.querySelector(".cuerpo");
const principal = document.querySelector(".principal");
const boton_siguiente = document.querySelector(".principal_seccion2_imagenes_figura_boton_derecha")
const boton_atras = document.querySelector(".principal_seccion2_imagenes_figura_boton_izquierda");
const rutas_imagenes = ["./assets/padre_de_familia.jpg", "./assets/imagen_batman.jpg", "./assets/simpsons.jpg"];
const imgs = document.querySelector(".principal__seccion2__imagenes__figura__imagen")



// funciones

boton_oscuro.addEventListener("click", function(){
    cabecero.classList.toggle("cabecero_oscuro");
    principal1.classList.toggle("principal1_oscuro");
    principal2.classList.toggle("principal2_oscuro");
    pie.classList.toggle("pie_oscuro");
    boton_oscuro.classList.toggle("cabecero__navegador__boton_oscuro_oscuro");
    boton_ampliar.classList.toggle("cabecero__navegador__boton_ampliar_oscuro");
    flecha_derecha.classList.toggle("principal_seccion2_imagenes_figura_boton_derecha_oscuro");
    flecha_izquierda.classList.toggle("principal_seccion2_imagenes_figura_boton_izquierda_oscuro");
    boton_principal.classList.toggle("principal__seccion1__boton_oscuro");
    cuerpo.classList.toggle("cuerpo_oscuro");
    titulo_pie_lista.forEach(objeto =>{
        objeto.classList.toggle("pie_seccion__listas__titulo_oscuro");
    })
    if(boton_oscuro.textContent.trim() === "Modo claro"){ // Se utiliza el trim en esta comparacion porque a la hora de comparar con el if este no detecta los espacios por lo que con el trim eliminamos los espacios para poder compararlos
        boton_oscuro.textContent = "Modo oscuro";
    } else {
        boton_oscuro.textContent = "Modo claro";
    }
})


boton_ampliar.addEventListener("click", function(){
    cabecero.classList.toggle("cabecero_ampliar");
    principal.classList.toggle("principal_ampliar");
    pie.classList.toggle("pie_ampliar")
    cuerpo.classList.toggle("cuerpo_ampliar")
    if(boton_ampliar.textContent.trim() === "encoger"){ // Se utiliza el trim en esta comparacion porque a la hora de comparar con el if este no detecta los espacios por lo que con el trim eliminamos los espacios para poder compararlos
        boton_ampliar.textContent = "ampliar";
    } else {
        boton_ampliar.textContent = "encoger";
    }
})

let siguiente=1
boton_siguiente.addEventListener("click",function(){
    rutas_imagenes.forEach((elemento,lista) => {
        if(lista == siguiente){
            imgs.setAttribute("src",elemento)
        }
    });
    siguiente++;
    if(siguiente>=rutas_imagenes.length){
        siguiente=0
    }
})

let atras = -1;

boton_atras.addEventListener("click", function(){
    atras--;
    if(atras < 0){
        atras = rutas_imagenes.length - 1;
    }
    rutas_imagenes.forEach((elemento, lista) => {
        if(lista === atras){
            imgs.setAttribute("src", elemento);
        }
    });
});