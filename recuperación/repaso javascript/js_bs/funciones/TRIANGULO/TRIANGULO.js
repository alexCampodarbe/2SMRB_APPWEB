 // variables
 let anchura = parseInt(prompt("Introduzca la anchura del rectangulo: "))
 const txt = document.querySelector("p");

// función
function crea_lineas(anchura_linea){

    let linea = "";
    for(let i=0;i<anchura_linea; i++){
        linea = linea + "* ";
    }
    return linea
}

function rectangulo(anchura){
    let texto = "";
    for(let i=1;i <= altura ; i++){
        texto = texto + "<br>" + crea_lineas(anchura);
    }
    for(let i=anchura - 1;i >= altura ; i--){
        texto = texto + "<br>" + crea_lineas(anchura);
    }
    txt.innerHTML = texto;
}    
// ejecución
if(anchura >0){
    rectangulo(anchura)
}