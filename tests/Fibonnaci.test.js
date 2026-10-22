const { gerarSequenciaFibonacci } = require('../funcoes/Fibonacci');

const resultado = [0, 1, 1, 2, 3, 5, 8, 13];

test('sequencia Fibonacci 8 termos [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    expect(gerarSequenciaFibonacci(8)).toStrictEqual(resultado);
})

const resultado2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

test('sequencia Fibonacci 12 termos [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]', () => {
    expect(gerarSequenciaFibonacci(12)).toStrictEqual(resultado2);
});

test('quantidades zero e um retornam sequências válidas', () => {
    expect(gerarSequenciaFibonacci(0)).toStrictEqual([]);
    expect(gerarSequenciaFibonacci(1)).toStrictEqual([0]);
});

test('rejeita quantidades que não sejam números', () => {
    expect(() => gerarSequenciaFibonacci('8')).toThrow(TypeError);
});

test('rejeita quantidades negativas ou fracionárias', () => {
    expect(() => gerarSequenciaFibonacci(-1)).toThrow(RangeError);
    expect(() => gerarSequenciaFibonacci(2.5)).toThrow(RangeError);
});

test('rejeita sequências que excedem a precisão inteira segura', () => {
    expect(() => gerarSequenciaFibonacci(80)).toThrow(RangeError);
});