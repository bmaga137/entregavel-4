const {Somatorio} = require('../funcoes/Somatorio');

test('Soma de uma lista de números', () => {
    const lista = [1, 2, 3, 4, 5];
    expect(Somatorio(lista)).toBe(15);
});

test('Adicionando um número à lista', () => {
    const lista = [1, 2, 3, 4, 5, 6];
    expect(Somatorio(lista)).toBe(21);
});

test('array vazio tem soma zero', () => {
    expect(Somatorio([])).toBe(0);
});

test('rejeita entrada que não seja array ou contenha tipos inválidos', () => {
    expect(() => Somatorio(null)).toThrow(TypeError);
    expect(() => Somatorio([1, '2'])).toThrow(TypeError);
});

test('rejeita valores não finitos e overflow', () => {
    expect(() => Somatorio([Number.NaN])).toThrow(RangeError);
    expect(() => Somatorio([Number.MAX_VALUE, Number.MAX_VALUE])).toThrow(RangeError);
});