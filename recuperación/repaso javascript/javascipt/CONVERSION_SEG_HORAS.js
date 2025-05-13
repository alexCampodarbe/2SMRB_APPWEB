
const segundos = parseInt(prompt("Escriba una cantidad de segundos: "));

const minutos = segundos / 60;
const segundos_sobrantes = segundos % 60;
const hora = segundos_sobrantes + minutos;
const horas = hora / 60
const minutos_sobrantes = hora % 60
const minutos_sin_decimal = Math.round(minutos_sobrantes);
const horas_sin_decimal = Math.round(horas);
alert(segundos + " segundos son " + horas_sin_decimal + " horas, " + minutos_sin_decimal + " minutos y " + segundos_sobrantes + " segundos");