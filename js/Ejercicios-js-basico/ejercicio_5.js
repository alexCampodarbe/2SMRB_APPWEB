function es_primo(numero){
    let primo = true;
    for(let i =2; i < numero/2; i++){
        if (numero % i == 0){
            primo =false;
            break;
        }
    }
    return primo;
}

let num1 = parseint(prompt("introduce el primer número: "));
let num2 = parseint(prompt("Introduce el segundo número: "));
let array_prim_num = [];
let numbers = "";

if(let i = num1; i < num2 + 1; i++){
    if(es_primo(i)){
        array_prim_num.push(i);
    }
}

for 