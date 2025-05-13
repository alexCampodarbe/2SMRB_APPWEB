
const peso = parseInt(prompt("¿cuantó pesa? "));
const altura = parseFloat(prompt("¿cuantó mide en metros? "));

elevado = altura * altura;
imc = peso / elevado;

alert("su imc es " + imc);