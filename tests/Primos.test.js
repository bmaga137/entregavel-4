const {isPrimo} = require('../funcoes/Primos')

test('O número 7 é primo', () => {
    expect(isPrimo(7)).toBe(true);
});

test('O número 4 não é primo', () => {
    expect(isPrimo(4)).toBe(false);
});

test('zero, um e negativos não são primos', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(-7)).toBe(false);
});

test('rejeita tipos e números inválidos', () => {
    expect(() => isPrimo('7')).toThrow(TypeError);
    expect(() => isPrimo(2.5)).toThrow(RangeError);
    expect(() => isPrimo(Number.NaN)).toThrow(RangeError);
});