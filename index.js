var combinaciones = require("./logica/logica.js").combinarPociones;
var validar = require("./logica/validaciones.js").validar;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el número de pociones separadas por comas:  ', (pociones) => {
    var arrPociones = pociones.split(",");
    var pociones = validar(arrPociones);
    var arrCombinaciones = combinaciones(arrPociones);
    var porcentajePociones = [3, 5, 10, 20, 25];
    for (var i = 0; i < arrCombinaciones.length - 1; i++) {
        console.log("Usar " + arrCombinaciones[i] + " pociones distintas causan un " + porcentajePociones[arrCombinaciones[i] - 1] + "% de daño");
    }
    console.log("Porcentaje " + arrCombinaciones[arrCombinaciones.length - 1] + "%");
    rl.close();
});