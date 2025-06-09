//variables
const palabra = prompt("Escribe una palabra: ");
let lista =[]
// preparacion de las funciones
function capitalizar(capitar){
    let cadena = capitar[0].toUpperCase();
    for (let i = 1; i<capitar.length; i++){
        cadena += capitar[i].toLowerCase();
    }lista.push(cadena);
    
}console.log(lista);

if(palabra !=null && palabra.trim() !==""){
    capitalizar(palabra);
}

