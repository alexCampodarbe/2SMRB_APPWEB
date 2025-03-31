const gastos_alojamientos = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje: "));
const gastos_alimentación = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje: "));
const gastos_entretenimiento = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje: "));

console.log(gastos_alimentación);
const gastos_totales = gastos_alimentación+gastos_alojamientos+gastos_entretenimiento;
alert("el coste total de tu viaje es: "+ gastos_totales);   