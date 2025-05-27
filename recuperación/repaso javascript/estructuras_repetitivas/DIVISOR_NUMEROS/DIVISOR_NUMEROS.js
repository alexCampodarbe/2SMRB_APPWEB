
let lista_nueva_nueva_1=[];

const n1= parseInt(prompt("Escribe un número mayor a 0: "));

if(n1 <= 0){
    alert("¡le he dicho un número mayor a cero, pedazo de burro");
} else{
    for(let i=1 ; i<=n1 ; i++){
        if(n1%i == 0){
            lista_nueva_nueva_1.push(i)
        }
    }
}
console.log(lista_nueva_nueva_1);