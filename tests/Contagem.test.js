const {contarInteirosNoIntervalo} = require('../funcoes/Contagem.js');

const conjunto = [3, 5, 7, 8, 10, 12, 15];
const n = conjunto.at(-1);

test('qnt de números inteiros entre 3 e 15 (inclusos) no conjunto [3, 5, 7, 8, 10, 12, 15] são 7', () => {
    expect(contarInteirosNoIntervalo(conjunto, n)).toBe(7);
})

const conjunto2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const n2 = conjunto2.at(-1);

test('qnt de números inteiros entre 5 e 50 (inclusos) no conjunto [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] são 10', () => {
    expect(contarInteirosNoIntervalo(conjunto2, n2)).toBe(10);
})

test('rejeita dados que não sejam um array', () => {
    expect(() => contarInteirosNoIntervalo(null, 5)).toThrow(TypeError);
});

test('rejeita limites que não sejam inteiros seguros', () => {
    expect(() => contarInteirosNoIntervalo([1, 2], 2.5)).toThrow(RangeError);
});

test('rejeita elementos inválidos no array', () => {
    expect(() => contarInteirosNoIntervalo([1, '2'], 2)).toThrow(TypeError);
    expect(() => contarInteirosNoIntervalo([, 2], 2)).toThrow(TypeError);
});