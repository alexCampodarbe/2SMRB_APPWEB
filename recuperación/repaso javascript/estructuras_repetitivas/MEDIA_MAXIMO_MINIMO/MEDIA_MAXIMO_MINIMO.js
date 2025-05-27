const val=parseInt(prompt("¿Cuantos valores va a introducir? "))

let list_num=[]

let suma=0

let entra = true
let min, max;

if (val < 0) {
    alert("¡Imposible!");
} else {
    for (let i = 0; i<val; i++) {
        const num1 = parseInt(prompt("Escriba el número " + (i + 1)))
        if(i==0){
            min=num1;
            max=num1;
        }else{
            if(num1 >= max){
                max = num1;
            }
            if(num1 <= min){
                min=num1;
            }
        }
        suma=suma+num1
    }
}



const media=suma/val

alert("La meida de los numeros introducidos es "+ media )
alert("El numero mas pequeño de los introducidos es "+ min)
alert("El numero mas grande de los introducidos es "+ max)