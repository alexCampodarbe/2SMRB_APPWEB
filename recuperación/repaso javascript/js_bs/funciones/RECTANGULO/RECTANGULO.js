//listas
 let lista_anchu_alt =[]
 // variables
 let anchura = parseInt(prompt("Introduzca la anchura del rectangulo: "))
 let altura = parseInt(prompt("Introduzca la altura del rectangulo: "))
 const txt = document.querySelector("p");

// función
function crea_lineas(anchura){

    let linea = "";
    for(let i=0;i<anchura; i++){
        linea = linea + "* ";
    }
    return linea
}

function rectangulo(anchura, altura){
    let texto = "";
    for(let i=1;i <= altura ; i++){
        texto = texto + "<br>" + crea_lineas(anchura);
    }
    txt.innerHTML = texto;
}    
// ejecución
if(anchura >0 && altura > 0){
    rectangulo(anchura,altura)
}
