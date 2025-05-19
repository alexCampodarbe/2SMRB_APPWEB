
const n1 = parseInt(prompt(" Escriba un número: "));
const n2 = parseInt(prompt(" Escriba otro número: "));





if (n1 >= n2){
    if (n2 == 0){
    alert("Lo siento, este programa no admite valores negativos");
    } else{
        if (n1 % n2 == 0){
        alert(n1 + " es múltiplo de " + n2);
        }else{
        alert(n1 + " no es múltiplo de " + n2);
        }
    }
}else{
    if (n1 == 0){
    alert("Lo siento, este programa no admite valores negativos");
    }else{
        if (n2 % n1 ==0){
        alert(n2 + " es múltiplo de " + n1);
        } else{
        alert(n2 + " no es múltiplo de " + n1);
        }
    }
}