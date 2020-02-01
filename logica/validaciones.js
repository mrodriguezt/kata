function validar(pociones) {
    for (var i = 0; i < 5; i++) {
        if (isNaN(parseInt(pociones[i]))) {
            pociones[i] = 0;
        } else {
            pociones[i] = parseInt(pociones[i]);
        }
    }
    return pociones;
}
module.exports.validar = validar;