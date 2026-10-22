function quickSort(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('A entrada deve ser um array.');
    }
    const ordenado = Array.from(array);
    if (!ordenado.every((valor) => typeof valor === 'number')) {
        throw new TypeError('Todos os elementos devem ser números.');
    }
    if (!ordenado.every(Number.isFinite)) {
        throw new RangeError('Todos os elementos devem ser números finitos.');
    }

    const intervalos = [[0, ordenado.length - 1]];
    while (intervalos.length > 0) {
        const [inicio, fim] = intervalos.pop();
        if (inicio >= fim) continue;

        const pivo = ordenado[Math.floor((inicio + fim) / 2)];
        let esquerda = inicio;
        let direita = fim;

        while (esquerda <= direita) {
            while (ordenado[esquerda] < pivo) esquerda++;
            while (ordenado[direita] > pivo) direita--;
            if (esquerda <= direita) {
                [ordenado[esquerda], ordenado[direita]] = [ordenado[direita], ordenado[esquerda]];
                esquerda++;
                direita--;
            }
        }

        if (inicio < direita) intervalos.push([inicio, direita]);
        if (esquerda < fim) intervalos.push([esquerda, fim]);
    }
    return ordenado;
}

module.exports = { quickSort };