function contarInteirosNoIntervalo(dados, n) {
    if (!Array.isArray(dados)) {
        throw new TypeError('dados deve ser um array.');
    }
    if (typeof n !== 'number') {
        throw new TypeError('n deve ser um número.');
    }
    if (!Number.isSafeInteger(n)) {
        throw new RangeError('n deve ser um inteiro seguro.');
    }
    if (!Array.from(dados).every(Number.isSafeInteger)) {
        throw new TypeError('Todos os valores de dados devem ser inteiros seguros.');
    }
    if (dados.length === 0) return 0;

    const primeiroDado = dados[0];
    const limiteInferior = Math.min(primeiroDado, n);
    const limiteSuperior = Math.max(primeiroDado, n);

    return dados.filter((valor) =>
        Number.isInteger(valor) &&
        valor >= limiteInferior &&
        valor <= limiteSuperior
    ).length;
}

module.exports = { contarInteirosNoIntervalo };