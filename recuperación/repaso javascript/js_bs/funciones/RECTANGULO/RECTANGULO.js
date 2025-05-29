//listas
 let lista_anchu_alt =[]
 // variables
 let anchura = parseInt(prompt("Introduzca la anchura del rectangulo: "))
 let altura = parseInt(prompt("Introduzca la altura del rectangulo: "))


// función
function rectangulo(anchura, altura){
    for(i===0;i <= anchura ; i++){
        let punto = '* ';
        console.log(punto)
        if (i === anchura){
            for(e===0 ;e <= altura; i++){
                espa= "<br>";
                console.log(espa)
                i = 0
            }  
        }
    }    
    return
}
// ejecución
if(anchura !=null && altura !=null){
    rectangulo(anchura,altura)
}
