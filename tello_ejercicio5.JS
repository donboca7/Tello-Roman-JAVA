const prompt = require('prompt-sync')();
let tempF = parseInt(prompt('ingrese una temperatura en grados fahrenheit: '));
function Celsius(){
    return ((tempF - 32) * 5/9).toFixed(2); 
}
let tempC = Celsius(tempF);
console.log(`temperatura en fahrenheit: ${tempF}°F, temperatura en grados celsius: ${tempC}°C`)
//ejercicio java tello 5