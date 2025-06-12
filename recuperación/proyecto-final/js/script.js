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
    titulo_pie_lista.forEach(objeto =>{
        objeto.classList.toggle("pie_seccion__listas__titulo_oscuro");
    })
})
    