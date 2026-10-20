const { gerarSequenciaFibonacci } = require('../funcoes/Fibonacci');

const resultado = [0, 1, 1, 2, 3, 5, 8, 13];

test('sequencia Fibonacci 8 termos [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    expect(gerarSequenciaFibonacci(8)).toStrictEqual(resultado);
})