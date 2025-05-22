
const n1 = parseInt(prompt("Escribe un número par: "))
const n2 = parseInt(prompt("Escriba un numero impar: "))

if (n1%2 == 0) {
    if (n2%2 != 0){
        alert("¡Gracias por su colaboración!");
    } else {
        alert("Uno o más valores que ha escrito no son correctos.")
        alert("Ejecute de nuevo el programa para volver a intentarlo")
    }
} else {
    alert("Uno o más valores que ha escrito no son correctos.")
    alert("Ejecute de nuevo el programa para volver a intentarlo")
}