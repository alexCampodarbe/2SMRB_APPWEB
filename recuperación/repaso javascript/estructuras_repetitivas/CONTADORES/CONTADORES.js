

// const n1= parseInt(prompt("¿Cuántos valoras vas a introducir?"));
// let i=1
// if(n1 <=0){
//     alert("¡IMPOSIBLE!")
// } else if(n1 ==0){
//     alert("has escrito el número 0, prueba otro numero para que te lo detecto borrico");
// } else{
//     for(let i=1 ;i<=n1; i++){
//         const n = parseInt(prompt("Escribe el número " + i + ": "));
//         if (n <= 0){
//                 const total = i + 0;
//                 alert("Ha escrito "+ total + " números negativos");
//             }
//         }
// }

let c = parseInt(prompt("¿Cuántos valores va a introducir?")), n = 0;

if (c < 0) {
    alert("¡Imposible!");
} else if (c === 0) {
    alert("No ha escrito ningún número negativo.");
} else {
    for (let i = 1; i <= c; i++) {
        if (parseInt(prompt("Escriba el número "+ i +": ")) < 0) n++;
    }
    alert("Ha escrito "+ n +" números negativos.");
}