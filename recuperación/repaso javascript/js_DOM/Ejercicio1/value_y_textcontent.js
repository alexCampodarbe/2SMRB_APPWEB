
const boton = document.querySelector(".formulario_boton");

boton.addEventListener("click",function(){
    let primer_dato = document.querySelector(".formulario_introducir");
    const formulario_parrafo = document.querySelector(".formulario_parrafo");

    // if(primer_dato.value !=null){
    console.log(primer_dato.value);
    formulario_parrafo.textContent = primer_dato.value;
    // }
})
