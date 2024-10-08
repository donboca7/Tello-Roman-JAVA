const prompt = require('prompt-sync')();
let anio = parseInt(prompt('ingrese un año: '));
if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)){
    console.log("ingreso un año bisiesto");
} else{
    console.log("el año que ingreso no es bisiesto");
}
//ejercicio java tello 8