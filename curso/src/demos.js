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

function Persona(id, nombre, apellidos) {
    this.id = id
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = 44
    this.nombreCompleto = () => this.nombre + ' ' + this.apellidos
}

module.exports.suma=suma
module.exports.divide=divide
module.exports.Persona=Persona
