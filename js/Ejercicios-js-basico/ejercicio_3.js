

const peso = parseFloat(prompt("Introduce tu peso en kilogramos: "));
const altura = parseFloat(prompt("Introduce tu altura en metros: "));
const IMC = peso / altura **2 ;
if (IMC>=30){
    alert("Tu IMC es: "+ IMC + " tienes: Obesidad, corre al gym bro")
} else if (IMC>=25){
    alert("Tu IMC es: "+ IMC +" tienes: sobrepeso, un poco de ejercicio mas no estaria mal")
} else if (IMC>=18.5){
    alert("Tu IMC es: "+ IMC + " tienes: peso normal, tas joya")
} else{
    alert("tu IMC es: "+ IMC + " tienes: bajo peso, come algo mas de magdalena de la abuela")
}