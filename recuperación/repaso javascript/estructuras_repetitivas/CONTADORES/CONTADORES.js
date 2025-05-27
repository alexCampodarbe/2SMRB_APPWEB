

const n1= parseInt(prompt("¿Cuántos valoras vas a introducir?"));
let i=1
let nega = []
if(n1 <=0){
    alert("¡IMPOSIBLE!")
} else if(n1 ==0){
    alert("has escrito el número 0, prueba otro numero para que te lo detecto borrico");
} else{
    for(let i=1 ;i<=n1; i++){
        const n = parseInt(prompt("Escribe el número " + i + ": "));
        if (n < 0){
                nega2 = nega + 1;
                alert("Ha escrito "+ nega2 + " números negativos");
            }
        }
}

