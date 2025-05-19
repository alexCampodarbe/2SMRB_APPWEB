const n1 = parseInt(prompt("Escribe un número par: "));


if (n1%2 == 0) {
    const n2 = parseInt(prompt("Escriba un numero impar: "));

    if (n2%3 == 0){
        alert("¡Gracias por su colaboración!");
    } else {
        alert("No ha escrito un número impar.");
        alert("Ejecute de nuevo el programa para volver a intentarlo");
    }
} else {
    alert("No ha escrito un número par.");
    alert("Ejecute de nuevo el programa para volver a intentarlo");
}