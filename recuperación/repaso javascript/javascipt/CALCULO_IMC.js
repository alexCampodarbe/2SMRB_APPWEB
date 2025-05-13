
const peso = parseInt(prompt("¿cuantó pesa? "));
const altura = parseFloat(prompt("¿cuantó mide en metros? "));

elevado = altura * altura;
imc = peso / elevado;

imc_sin_decimal = Math.round(imc);
alert("su imc es " + imc_sin_decimal);