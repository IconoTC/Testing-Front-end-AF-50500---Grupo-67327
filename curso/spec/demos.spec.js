const { suma, divide, Persona } = require('../src/demos.js')

describe('Ejemplos del curso', () => {
    describe('Función Suma', () => {
        describe('OK', () => {
            it('Suma dos entero', () => {
                const actual = suma(2, 1)

                expect(actual).toBe(3)
            });
            it('Suma dos reales', () => {
                const actual = suma(0.1, 0.2)
                expect(actual).toBe(0.3)
            });
        });
        describe('KO', () => {
            it('Suma cadena numérica con numero', () => {
                const actual = suma("2", 2)

                expect(actual).toEqual(4)
            });
            it('Suma numero con cadena numérica', () => {
                const actual = suma(2, "2")

                expect(actual).toEqual(4)
            });
            it('Suma un solo numero', () => {
                expect(() => suma(2)).toThrow("No es un resultado numérico")
            });
   
        });
            
    });
    describe('Función Divide', () => {
        describe('OK', () => {
            it('Divide dos entero', () => {
                const actual = divide(1, 2)

                expect(actual).toBe(0.5)
            });
            it('Divide dos entero', () => {
                const actual = divide(1, 3)

                //expect(actual).toBe(0.3)
                expect(actual).toBeCloseTo(0.3333, 4)
            });
        });
        describe('KO', () => {
            it('Divide por 0', () => {
                expect(() => divide(1, 0)).toThrow("No es un resultado numérico")
            });
            it.skip('Divide cadena numérica por numero', () => {
                expect(divide("kk", 2)).not.toBeNaN()
                expect(divide(2, "kk")).toBeNaN()
            });
   
        });
            
    });
    describe('Objeto Persona', () => {
        describe('OK', () => {
            it('Constructor', () => {
                const actual = new Persona(1, "Pepito", "Grillo")

                expect(actual).toBeDefined()
                expect(actual).toBeInstanceOf(Persona)
                expect(actual).toMatchObject({id: 1, nombre: "Pepito", apellidos: "Grillo"})
                // expect(actual.id).toBe(1)
                // expect(actual.nombre).toBe("Pepito")
                // expect(actual.apellidos).toBe("Grillo")
            });
            it('Método nombreCompleto', () => {
                const persona = new Persona(1, "Pepito", "Grillo")

                const actual = persona.nombreCompleto()

                expect(actual).toBe("Pepito Grillo")
            });
        });
        describe('KO', () => {
            it('Divide por 0', () => {
                expect(() => divide(1, 0)).toThrow("No es un resultado numérico")
            });
            it.skip('Divide cadena numérica por numero', () => {
                expect(divide("kk", 2)).not.toBeNaN()
                expect(divide(2, "kk")).toBeNaN()
            });
   
        });
            
    });
});