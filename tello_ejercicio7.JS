const prompt = require('prompt-sync')();
let nros = prompt('ingrese 2 números separados por una coma: ')
let [nro1, nro2] = nros.split(',').map(Number);
if (nro1 > nro2) {
    console.log(`número mayor : ${nro1}`);
} else if (nro2 > nro1) {
    console.log(`número mayor: ${nro2}`);
} else {
    console.log("los números son iguales");
}
//ejercicio java tello 7