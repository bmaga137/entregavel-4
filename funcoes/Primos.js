function isPrimo(numero) {
    if (typeof numero !== 'number') {
        throw new TypeError('O valor deve ser um número.');
    }
    if (!Number.isSafeInteger(numero)) {
        throw new RangeError('O valor deve ser um inteiro seguro.');
    }

    if (numero < 2) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;

    for (let divisor = 3; divisor <= Math.sqrt(numero); divisor += 2) {
        if (numero % divisor === 0) return false;
    }
    return true;
}

if (require.main === module) {
    const prompt = require('prompt-sync')();
    try {
        const entrada = prompt('Digite um número: ').trim();
        if (!/^[+-]?\d+$/.test(entrada)) {
            throw new TypeError('Digite um número inteiro válido.');
        }
        const numero = Number(entrada);
        console.log(isPrimo(numero) ? `O número ${numero} é primo` : `O número ${numero} não é primo`);
    } catch (erro) {
        console.error(erro.message);
        process.exitCode = 1;
    }
}

module.exports = { isPrimo };