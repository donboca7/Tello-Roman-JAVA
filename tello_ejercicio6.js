const prompt = require('prompt-sync')();
let a = parseInt(prompt('primer ángulo: '));
let b = parseInt(prompt('segundo ángulo: '));
let c = parseInt(prompt('tercer ángulo: '));
let suma = a + b + c;
if ( suma === 180 && a > 0 && b > 0 && c > 0){
    console.log('triangulo válido');
} else {
    console.log('triangulo no válido');
}
//ejercicio java tello 6