
const clickear =document.querySelector(".parrafo");


// clickear.addEventListener("click", function(){
//     let parrafito = document.querySelector("p");
//     parrafito.style.color = "blue";
//     parrafito.style.textDecoration = "underline";
// })

clickear.addEventListener("click", function(){
    clickear.classList.toggle("cambio_color");
})