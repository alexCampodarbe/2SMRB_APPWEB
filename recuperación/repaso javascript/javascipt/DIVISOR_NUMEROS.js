
const n1 = parseInt(prompt("Escriba el dividendo: "));
const n2 = parseInt(prompt("Escriba el divisor: "));

const division = Math.floor(n1 / n2);
const resto = n1 % n2;

if (n1 % n2 == 0){
    alert("La división es exacta. " + "cociente: " + division);
} else {
    alert("La división no es exacta " + "cociente: " + division + "resto: " + resto);
}