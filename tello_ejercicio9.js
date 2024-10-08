const prompt = require('prompt-sync')();
let edad = parseInt(prompt("ingresa tu edad:"));
if (edad < 13) {
    console.log("es un niño");

} else if (edad >= 13 && edad <= 17) {
    console.log("es un adolescente");

} else if (edad >= 18 && edad <= 110) {
    console.log("es un adulto");
    
} else {
    console.log("es una edad no válida");
}

//ejercicio java tello 9