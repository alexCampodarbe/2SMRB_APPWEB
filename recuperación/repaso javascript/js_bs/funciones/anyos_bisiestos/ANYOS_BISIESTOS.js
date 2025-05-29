
//variable

let anyo1 = parseInt(prompt("Introduce una año: "));
let anyo2 = parseInt(prompt("Introduce una año posterior a "+anyo1 + ": "));
let cont =0;
let anyos_bisiesto = 0
// funciones

function es_bisiesto(anyo){
    if (anyo % 4 == 0){
        if (anyo % 100 == 0){
            if (anyo % 400 == 0){
                return true
            } else {
                return false
            }
        } else {
            return true
        }

    } else {
        return false
    }
}


//bucles

while(anyo2 <= anyo1){
    alert(anyo2 + " no es posterior a " + anyo1);
    anyo2 = parseInt(prompt("Intentelo de nuevo: "));
}

for(let i=anyo1; i<= anyo2; i++){
    cont++
    //modo 1 de hacerlo
    // if(es_bisiesto(i)){
    //     anyos_bisiesto++;
    // }

    // modo 2 de hacerlo
    anyos_bisiesto = anyos_bisiesto + es_bisiesto(i);
}

alert("De " + anyo1 + " a " + anyo2 + " hay " + cont + " años, " + anyos_bisiesto + " de ellos bisiestos.");
