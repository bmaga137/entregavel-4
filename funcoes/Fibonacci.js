function gerarSequenciaFibonacci(quantidade) {
    if (typeof quantidade !== 'number') {
        throw new TypeError('A quantidade deve ser um número.');
    }
    if (!Number.isSafeInteger(quantidade) || quantidade < 0) {
        throw new RangeError('A quantidade deve ser um inteiro seguro não negativo.');
    }

    const sequencia = [];
    for (let indice = 0; indice < quantidade; indice++) {
        if (indice < 2) {
            sequencia.push(indice);
            continue;
        }

        const proximoTermo = sequencia[indice - 1] + sequencia[indice - 2];
        if (!Number.isSafeInteger(proximoTermo)) {
            throw new RangeError('A sequência excede o limite de inteiros seguros.');
        }
        sequencia.push(proximoTermo);
    }
    return sequencia;
}

module.exports = { gerarSequenciaFibonacci };