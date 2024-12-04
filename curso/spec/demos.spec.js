const { suma, divide, Persona, Calculadora } = require('../src/demos.js')

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
            it.each([
                [1, 3, 4], [-1, 2, 1], [1, -2, -1], [0.1, 0.2, 0.3]
            ])('suma(%i, %i)', (a, b, expected) => {
                expect(suma(a, b)).toBe(expected);
            });
            it.each([
                { a: 1, b: 3, expected: 4 },
                { a: -1, b: 2, expected: 1 },
                { a: 1, b: -2, expected: -1 },
                { a: 0.1, b: 0.2, expected: 0.3 },
            ])('$a + $b = $expected', ({ a, b, expected }) => {
                expect(suma(a, b)).toBe(expected);
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
                expect(actual).toMatchObject({ id: 1, nombre: "Pepito", apellidos: "Grillo" })
                // expect(actual.id).toBe(1)
                // expect(actual.nombre).toBe("Pepito")
                // expect(actual.apellidos).toBe("Grillo")
            });
            it('Instantánea', () => {
                const actual = new Persona(1, "Pepito", "Grillo")

                expect(actual).toMatchSnapshot()
            });
            it('Instantánea en linea', () => {
                const actual = new Persona(1, "Pepito", "Grillo")

                expect(actual).toMatchInlineSnapshot(`
Persona {
  "apellidos": "Grillo",
  "cumpleaños": [Function],
  "edad": 0,
  "id": 1,
  "nombre": "Pepito",
  "nombreCompleto": [Function],
}
`)
            });
            describe('Pruebas de los métodos', () => {
                let persona;
                beforeEach(() => {
                    persona = new Persona(1, "Pepito", "Grillo")

                })
                it('Método nombreCompleto', () => {
                    // const persona = new Persona(1, "Pepito", "Grillo")

                    const actual = persona.nombreCompleto()

                    expect(actual).toBe("Pepito Grillo")
                });
                it.todo('probar sin nombre')
                it('Unitaria: Método cumpleaños', () => {
                    const c = new Calculadora()
                    const calc = jest.spyOn(c, 'suma')
                    calc.mockReturnValue(34)
                    const persona = new Persona(1, "Pepito", "Grillo", 33, c)

                    persona.cumpleaños()

                    expect(persona.edad).toBe(34)
                    expect(calc).toHaveBeenCalledTimes(1)
                });
                it('Integración: Método cumpleaños', () => {
                    const out = jest.spyOn(console, 'log')
                    out.mockImplementation(() => {})
                    const persona = new Persona(1, "Pepito", "Grillo", 33)

                    persona.cumpleaños()

                    expect(persona.edad).toBe(34)
                    expect(out).toHaveBeenCalledTimes(1)
                });
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

describe.skip('Demos Mock', () => {
    it('function', () => {
        // const resta = jest.fn()
        // resta.mockReturnValueOnce(3).mockReturnValueOnce(0).mockReturnValueOnce(-2).mockReturnValueOnce(0.1).mockReturnValue(0)
        const resta = (a, b) => +(a - b).toPrecision(15)

        let actual = resta(4, 1)

        expect(actual).toBe(3)
        expect(resta(2, 2)).toBe(0)
        expect(resta(10, 12)).toBe(-2)
        expect(resta(1, 0.9)).toBe(0.1)
    })
    it('spy', () => {
        const c = new Calculadora()
        const calc = jest.spyOn(c, 'suma')
        calc.mockReturnValue(4)

        let actual = c.suma(3, 3)

        expect(actual).toBe(4)
    })
})

describe.only('Integración: DOM', () => {
    it('Componente', () => {
        function inc() {
            const o = document.getElementById('txt')
            o.textContent = +o.textContent + 1
        }

        document.body.innerHTML = `
            <div>
                <output id="txt">10</output>
                <input type="button" id="btn" >
            </div>
        `
        const out = document.getElementById('txt')
        const btn = document.getElementById('btn')
        btn.addEventListener('click', inc)

        btn.click()

        expect(out.textContent).toBe('11')

    })
})