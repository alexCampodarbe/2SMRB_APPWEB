const precio = parseFloat(prompt("Introduce el precio del producto que buscas: "));
const descuento = parseFloat(prompt("Introduce el descuento que tengas del producto indicado: " ));
precio_final = precio - ( descuento*precio /100 );
alert ("El precio final del producto es: "+ precio_final)