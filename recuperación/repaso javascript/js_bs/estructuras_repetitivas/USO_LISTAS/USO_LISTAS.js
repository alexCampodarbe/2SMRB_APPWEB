
// LISTAS FIJAS

let lista_1 =[];
let lista_2 =[];
let lista_3 =[];
let lista_4 =[];
let lista_5 =[];
let lista_6 =[];
let lista_7 =[];
let lista_8 =[];
let lista_9 =[];
let lista_10 =[];
let lista_11 =[];

for (let i=0 ; i<10 ; i++){
    lista_1.push(i)
}
console.log(lista_1);

for (let i=4 ; i<=10 ; i++){
    lista_2.push(i)
}
console.log(lista_2);

for (let i= -6; i<0 ; i++){
    lista_3.push(i)
}
console.log(lista_3);

for (let i=-56;i<=-50; i++){
    lista_4.push(i)
}
console.log(lista_4);

for (let i=1 ; i<18 ; i=i+2){
    lista_5.push(i)
}
console.log(lista_5);

for (let i=-6 ; i<=10; i=i+2){
    lista_6.push(i)
}
console.log(lista_6);

for (let i=100 ; i<1001  ; i=i+100){
    lista_7.push(i)
}
console.log(lista_7);

for(let i=10;i>4;i=i-1){
    lista_8.push(i)
}
console.log(lista_8);

for(let i=-50 ; i>=-56 ; i--){
    lista_9.push(i)
}
console.log(lista_9);

for(let i=17 ; i>=1 ; i=i-2){
    lista_10.push(i)
}
console.log(lista_10);

for(let i=500 ; i>=0 ; i=i-100){
    lista_11.push(i)
}
console.log(lista_11);


/// Como mejorar codigo

//Definimos funcion

function crea_listas(valor_inicio, valor_final, incremento){
    let lista=[]
    if(incremento <0){
        for(let i=valor_inicio;i>valor_final; i= i+  incremento){
            lista.push(i);
        }
    }else{
        for(let i=valor_inicio; i<valor_final; i= i + incremento){
            lista.push(i);
        }
    }
    console.log(lista);
    return lista;
}

