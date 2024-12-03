function suma(a, b) {
    //if(arguments.length !== suma.caller.arguments.length ) throw new Error("Error en los argumentos")
    const result = +a + +b
    if(isNaN(result))
        throw new Error("No es un resultado numérico valido")
    return +result.toPrecision(15);
}
function divide(a, b) {
    const result = a / b
    if(isNaN(result) || !isFinite(result))
         throw new Error("No es un resultado numérico valido")
    return +result.toPrecision(15);
}

module.exports.suma=suma
module.exports.divide=divide
