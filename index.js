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
  for (var i=0;i<arrCombinaciones.length;i++){
		console.log(arrCombinaciones[i]);
	}
  rl.close();
});