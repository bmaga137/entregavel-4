function Somatorio(lista) {
    if (!Array.isArray(lista)) {
        throw new TypeError('A entrada deve ser um array.');
    }

    let soma = 0;
    for (const valor of lista) {
        if (typeof valor !== 'number') {
            throw new TypeError('Todos os elementos devem ser números.');
        }
        if (!Number.isFinite(valor)) {
            throw new RangeError('Todos os elementos devem ser números finitos.');
        }

        soma += valor;
        if (!Number.isFinite(soma)) {
            throw new RangeError('A soma excedeu o limite de números finitos.');
        }
    }
    return soma;
}

module.exports = { Somatorio };