
const anyo = parseInt(prompt("Escriba un año y le diré si es bisiesto: "));

if (anyo % 4 == 0){
    if (anyo % 100 == 0){
        if (anyo % 400 == 0){
            alert("El año " + anyo + " es un año bisiesto porque es múltiplo de 400.");
        } else {
            alert("El año " + anyo + " no es un año bisiesto porque es múltiplo de 100 sin ser múltiplo de 400");  
        }
    } else {
        alert ("El año " + anyo + " es un año bisiesto porque es múltiplo de 4 sin ser múltiplo de 100")
    }

} else {
    alert("El año " + anyo + " no es un año bisiesto porque no es múltiplo de 4.")
}


