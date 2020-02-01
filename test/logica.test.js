const combinaciones = require("../logica/logica.js").combinarPociones;
const validar = require("../logica/validaciones.js").validar;

test('Combinaciones debe estar definido',() => {
	expect(combinaciones).toBeDefined();
});


test('Validar debe estar definido',() => {
	expect(validar).toBeDefined();
});

test('Debe ser 2,2,1,1,1 => 31',() => {
	var comb = combinaciones([2,2,1,1,1]);
	expect(parseInt(comb[comb.length-1])).toBe(31);
});

test('Debe ser 2,1,1 => 13',() => {
	var comb = combinaciones([2,1,1,0,0]);
	expect(parseInt(comb[comb.length-1])).toBe(13);
});


test('Debe ser 2,2,2,1,1 => 40',() => {
	var comb = combinaciones([2,2,2,1,1]);
	expect(parseInt(comb[comb.length-1])).toBe(40);
});
