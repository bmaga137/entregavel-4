const { quickSort } = require('../funcoes/Ordenacao');

const numeros = [9, 4, 7, 2, 1, 8, 6, 3, 5];

test('Array ordenado com Quick Sort', () => {
    expect(quickSort(numeros)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

const numeros2 = [10, 5, 8, 3, 1, 6, 4, 9, 7];

test('Array ordenado com Quick Sort', () => {
    expect(quickSort(numeros2)).toStrictEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('ordena duplicatas sem modificar o array original', () => {
    const valores = [3, 1, 3, 2];
    expect(quickSort(valores)).toStrictEqual([1, 2, 3, 3]);
    expect(valores).toStrictEqual([3, 1, 3, 2]);
});

test('aceita array vazio e rejeita entrada que não seja array', () => {
    expect(quickSort([])).toStrictEqual([]);
    expect(() => quickSort(null)).toThrow(TypeError);
});

test('rejeita elementos não numéricos ou não finitos', () => {
    expect(() => quickSort([1, '2'])).toThrow(TypeError);
    expect(() => quickSort([1, Infinity])).toThrow(RangeError);
    expect(() => quickSort([, 2])).toThrow(TypeError);
});

test('ordena uma lista grande sem recursão profunda', () => {
    const valores = Array.from({ length: 20000 }, (_, indice) => indice);
    expect(quickSort(valores)).toStrictEqual(valores);
});