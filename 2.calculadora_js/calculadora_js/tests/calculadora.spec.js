const calcular = require("../src/calculadora");


test("Validar longitud de cadena mayor a 20", () => {
    expect(calcular("4-7+8+9/2*3+4-7+8+9/2*3")).toBe("No se puede calcular bro, longitud maxima 20 caracteres");
});

test("Validar division entre cero", () => {
    expect(calcular("4-7+8+9/0*3")).toBe("No se puede calcular bro, Division entre cero");
});

test("Validar resultado", () => {
    expect(calcular("4-7+8+9/2*3")).toBe(18.5);
});

