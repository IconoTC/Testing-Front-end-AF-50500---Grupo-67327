const { suma } = require('../src/demos.js')

describe('Ejemplos del curso', () => {
    describe('Suma', () => {
        describe('OK', () => {
            it('Suma dos entero', () => {
                const actual = suma(2, 2)

                expect(actual).toBe(4)
            });
            it('Suma dos reales', () => {

            });
        });
        describe('KO', () => {
            it('Suma cualquier cosa', () => {
                const actual = suma(2, "2")

                expect(actual).toEqual(22)
            });
   
        });
            
    });
});