function Mdc(primeiroNumero, segundoNumero) {
    if (typeof primeiroNumero !== 'number' || typeof segundoNumero !== 'number') {
        throw new TypeError('Os dois valores devem ser números.');
    }
    if (!Number.isSafeInteger(primeiroNumero) || !Number.isSafeInteger(segundoNumero)) {
        throw new RangeError('Os dois valores devem ser inteiros seguros.');
    }
    if (primeiroNumero === 0 && segundoNumero === 0) {
        throw new RangeError('O MDC de zero e zero não está definido.');
    }

    let maior = Math.abs(primeiroNumero);
    let menor = Math.abs(segundoNumero);

    while (menor !== 0) {
        const resto = maior % menor;
        maior = menor;
        menor = resto;
    }
    return maior;
}

if (require.main === module) {
    const prompt = require('prompt-sync')();
    try {
        const entradaNumero = prompt('Digite o primeiro número: ').trim();
        const entradaNumero2 = prompt('Digite o segundo número: ').trim();
        if (!/^[+-]?\d+$/.test(entradaNumero) || !/^[+-]?\d+$/.test(entradaNumero2)) {
            throw new TypeError('Digite números inteiros válidos.');
        }
        console.log(Mdc(Number(entradaNumero), Number(entradaNumero2)));
    } catch (erro) {
        console.error(erro.message);
        process.exitCode = 1;
    }
}

module.exports = {Mdc};