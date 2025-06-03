//variables
const num_list = parseInt(prompt("Cuantas listas vas a escribir: "));

let lista_final=[];
//bucles

for (let i=1 ; i<=num_list; i++){
    let lista =[]
    let num_pal = parseInt(prompt("Digame cuantas palabras tiene la lista " + i));
    for(let e=1 ; e<=num_pal ; e++){
        let pal = (prompt("Digame la palabra "+ e));
        lista.push(pal);
    }
        
    lista_final.push(lista);
        
}

console.log(lista_final);