//variables
const palabra = prompt("Escribe una palabra: ");
// preparacion de las funciones
function capitalizar(capitar){
    let cadena = capitar[0].toUpperCase();
    for (let i = 1; i<capitar.length; i++){
        if(capitar[i] == " "){
            i++;
            cadena = cadena + " "+ capitar[i].toUpperCase();
        }else{
            cadena = cadena + capitar[i];
        }
    }
    return cadena;
    
}

if(palabra !=null && palabra.trim() !==""){
    console.log(capitalizar(palabra));
}