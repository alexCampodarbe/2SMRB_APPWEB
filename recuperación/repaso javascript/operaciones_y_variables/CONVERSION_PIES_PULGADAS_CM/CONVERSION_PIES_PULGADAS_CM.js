const pies = parseInt(prompt("Escriba una cantidad de pies: "));
const pulgacita = parseInt(prompt("Escriba una cantidad de pulgadas: "));
const pulgada = 2.54;
const pul = pulgacita * pulgada;
const pulgada_pie = pulgada * 12;
const pies_cm = pies * pulgada_pie;
const pies_pulgadas = pies_cm + pul;
alert(pies + " pies y " + pulgacita+ " pulgadas son " + pies_pulgadas);