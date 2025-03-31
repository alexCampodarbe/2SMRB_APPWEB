

/* Vamos a aprender a seleccionar en js*/
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("main_title"));
console.log(document.getElementsByID("titulo"));

console.log(document.querySelector("h1"));
console.log(document.querySelector(".main_title"));
console.log(document.querySelector("#titulo"));

console.log(document.querySelector(".header__btn"));// Solo se queda con la primera
console.log(document.querySelectorall(".header__btn"));// Me devuelve 
console.log(document.getElementsByClassName("header__btn"));//Me devuelve

function cambiar(){
    //ejercicio 1
    let titulo = document.querySelector("h1");
    const contenido = titulo.textContent;
    console.log(titulo.textContent);// Visualizamos el contenido de texto de nuestro objeto
    if(contenido == "Hola mundo con javascript"){
        titulo.textContent = "Hola mundo";
    }
    else{
        titulo.textContent = "Hola mundo con javascript"; //Modificamos el valor del objeto
    }
    
   // console.log(titulo.innerHTML);// Accedemos al contenido del objeto
   // titulo.innerHTML = "<br><br><br><br><em> Hola mundo <em>";// admite e interpreta etiquetas HTML

   //ejercicio 2
   // esto es una forma de cambiar directamente las propiedades de estilo de un objeto -- no recomendado
  // titulo.style.color = "red";
  // titulo.style.textAlign = "center";
  // titulo.style.backgroundColor = "yellow";
   
   // 2º forma de hacerlo: crearnos una clase en css con las propiedades y añadir esta clase a nuestro objeto
   titulo.classList.toggle("main__title--change");


}

//ejercicio 3: vamos a aprender a crear nuevos elementos y objetos dentro de mi html
function crearDiv(){
    
    if(!document.querySelector("div")){
        const new_ele = document.createElement("div"); // creamos un nuevo elemento
        new_ele.textContent = "javascript permite crear páginas dinámicas."; // añadimos contenido al objeto
        new_ele.classList.add("texto"); // añadimos el estilo
        
        //posicionamos nuestro elemento detras del ultimo hijo de nuestra etiqueta padre
        //const padre = document.querySelector("main");
        //padre.appendChild(new_ele);

        //posicionamos nuestro elemento detras de la etiqueta titulo
        const titulo = document.querySelector("h1");//elemento de referencia
        titulo.parentNode.insertBefore(new_ele, titulo.nextSibling);
    }

    //Ejercicio 4: Vamos a aprender a borrar elementos de nuestro html de manera dinámica
    function borrar(){

        const ele_sel = document.querySelector("div");
        if(
        ele_sel.remove(); // Eliminaremos el elemento 
        
    }

}

//para trabajar con eventos vamos a utilizar la funcion addeventlistener
const btn_tit = document.querySelector(".header__btn--change");
const btn_blq = document.querySelector(".header__btn--create");
const btn_rem = document.querySelector(".header_btn--remove");

btn_tit.addEventListener("click", function(){
    //cambiar el contenido y la apariencia de mi etiqueta
    cambiar();
    // creamos un nuevo objeto div con propiedades y contenido específico
    crearDiv();
    // cambiar la apariencia de mi boton
    this.classList.toggle("header__btn--click");
});

btn_rem.addEventListener("click",function(){
    borrar();
    if(btn_blq.contains("header__btn--click")){
        btn_blq.classList.remove("header__btn--click");
    }
    this.classList.toggle("header__btn--click");
})
