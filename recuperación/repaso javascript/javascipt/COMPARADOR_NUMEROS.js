
const n1 = parseFloat(prompt("Escriba un número: "));
const n2 = parseFloat(prompt("Escriba otro número: "));
const n3 = parseFloat(prompt("Escriba otro número más: "));

if (n1 == n2) {
    if (n1 == n3) {
        alert("ha escrito tres veces el mísmo número");
    } else {
        alert ("ha escrito uno de los números dos veces");
    }
} else if (n1 == n3) {
  alert ("ha escrito uno de los números dos veces");

} else {
    alert("Los tres números que has escrito son distintos");
}