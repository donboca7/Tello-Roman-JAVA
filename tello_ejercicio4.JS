
const prompt = require('prompt-sync')();
let num = parseInt(prompt('Ingresa un número: '));
function Divisible(){
    return num % 5 === 0;
}
let result = Divisible(num);
console.log(`el número ${num} se puede dividir por 5?: ${result}`);
//ejercicio java tello 4