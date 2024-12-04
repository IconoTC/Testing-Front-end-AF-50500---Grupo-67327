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

class Calculadora {
    suma(a, b) {
        //if(arguments.length !== suma.caller.arguments.length ) throw new Error("Error en los argumentos")
        const result = +a + +b
        if(isNaN(result))
            throw new Error("No es un resultado numérico valido")
        console.log(`------------------> ${result}`)
        return +result.toPrecision(15);
    }
    divide(a, b) {
        const result = a / b
        if(isNaN(result) || !isFinite(result))
             throw new Error("No es un resultado numérico valido")
        return +result.toPrecision(15);
    }
}

function Persona(id, nombre, apellidos, edad, calculadora) {
    let calc = calculadora ?? new Calculadora()
    this.id = id
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = +edad ? edad: 0 
    this.nombreCompleto = () => this.nombre + ' ' + this.apellidos
    this.cumpleaños = () => { this.edad = calc.suma(this.edad, 1) } // ++this.edad
}

module.exports = { suma, divide, Persona, Calculadora }
