
const n1 = parseInt(prompt(" Escriba un número: "));
const n2 = parseInt(prompt(" Escriba otro número: "));

if (n1){

} else if (n1 >= n2){
    if (n1 % n2 == 0){
        alert(n1 + " es múltiplo de " + n2);
    }else{
        alert(n1 + " no es múltiplo de " + n2);
    }
}