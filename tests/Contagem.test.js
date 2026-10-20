const {contarInteirosNoIntervalo} = require('../funcoes/Contagem.js');

const conjunto = [3, 5, 7, 8, 10, 12, 15];
const n = conjunto.at(-1);

test('qnt de números inteiros entre 3 e 15 (inclusos) no conjunto [3, 5, 7, 8, 10, 12, 15] são 7', () => {
    expect(contarInteirosNoIntervalo(conjunto, n)).toBe(7);
})