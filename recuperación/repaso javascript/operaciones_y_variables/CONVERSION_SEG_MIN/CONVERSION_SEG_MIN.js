
const segundos = parseInt(prompt("Escriba una cantidad de segundos: "));

const minutos = segundos / 60;
const segundos_sobrantes = segundos % 60;
 const minutos_sin_decimal = Math.round(minutos)
alert(segundos + " segundos son " + minutos_sin_decimal + " minutos y " + segundos_sobrantes + " segundos");